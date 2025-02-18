📌 README - WeFit API
🚀 WeFit API
API desenvolvida em NestJS com TypeORM e MySQL, utilizando Swagger para documentação. Esse projeto permite o cadastro e consulta de empresas.

📜 Sumário
💻 Tecnologias
📦 Pré-requisitos
⚙️ Instalação e Configuração
🐳 Configurando o Banco de Dados com Docker
🛠️ Como Rodar o Projeto
🔧 Configuração do .env
📖 Documentação da API - Swagger
🌎 Como Acessar a API Externamente
🐞 Possíveis Erros e Soluções
💻 Tecnologias
Node.js
NestJS
TypeORM
MySQL
Docker
Swagger
Class-validator
📦 Pré-requisitos
Antes de começar, instale os seguintes programas:

Node.js (versão 18 ou superior)
Docker e Docker Compose
Git
Para verificar se já estão instalados:

sh
Copiar
Editar
node -v
docker -v
git --version
Se algum deles não estiver instalado, siga as instruções:

Node.js
Docker
Git
⚙️ Instalação e Configuração
1️⃣ Clone o repositório:

sh
Copiar
Editar
git clone https://github.com/seuusuario/wefit-api.git
2️⃣ Entre no diretório do projeto:

sh
Copiar
Editar
cd wefit-api
3️⃣ Instale as dependências:

sh
Copiar
Editar
npm install
🐳 Configurando o Banco de Dados com Docker
O banco de dados MySQL está rodando dentro de um container Docker.

1️⃣ Inicie o MySQL via Docker:

sh
Copiar
Editar
docker-compose up -d
2️⃣ Verifique se o container está rodando:

sh
Copiar
Editar
docker ps
3️⃣ Acesse o banco de dados MySQL manualmente:

sh
Copiar
Editar
docker exec -it wefit-mysqldb mysql -u root -p
(Senha padrão: senha_root_123)

4️⃣ Certifique-se de que o banco wefit foi criado corretamente:

sql
Copiar
Editar
SHOW DATABASES;
USE wefit;
SHOW TABLES;
🛠️ Como Rodar o Projeto
1️⃣ Crie o arquivo .env na raiz do projeto e configure as variáveis necessárias (veja a seção abaixo).

2️⃣ Rode as migrations para criar as tabelas:

sh
Copiar
Editar
npm run typeorm migration:run
3️⃣ Inicie o servidor:

sh
Copiar
Editar
npm run start:dev
Se tudo estiver certo, você verá no terminal:

arduino
Copiar
Editar
🚀 Server running on http://localhost:4568
🔧 Configuração do .env
Crie um arquivo chamado .env na raiz do projeto e copie o seguinte conteúdo:

ini
Copiar
Editar
DATABASE_TYPE=mysql
DATABASE_HOST=YOUR_DATABASE_HOST
DATABASE_USER=YOUR_DATABASE_USER
DATABASE_PASSWORD=YOUR_DATABASE_PASSWORD
DATABASE_NAME=YOUR_DATABASE_NAME

PORT=4568
Se estiver rodando o MySQL localmente, altere:

env
Copiar
Editar
DATABASE_HOST=localhost
📖 Documentação da API - Swagger
A documentação da API está disponível em:

🔗 http://localhost:4568/api

O Swagger permite testar requisições GET, POST e visualizar os contratos de entrada e saída da API.

Endpoints
Método	Rota	Descrição
POST	/company	Cria uma empresa
GET	/company	Lista todas as empresas
🌎 Como Acessar a API Externamente
Por padrão, a API roda em localhost. Para acessá-la de outro dispositivo na mesma rede:

1️⃣ Descubra o IP da máquina:

sh
Copiar
Editar
ipconfig (Windows) ou ifconfig (Linux/Mac)
Exemplo de IP: 192.168.1.100

2️⃣ Altere o .env para permitir conexões externas:

env
Copiar
Editar
DATABASE_HOST=192.168.1.100
3️⃣ Ao rodar o servidor, acesse a API em outro dispositivo via:

arduino
Copiar
Editar
http://192.168.1.100:4568/api
🐞 Possíveis Erros e Soluções
❌ Erro ao rodar o Docker:
nginx
Copiar
Editar
Error response from daemon: Ports are not available: exposing port TCP 0.0.0.0:3306 -> 0.0.0.0:0: listen tcp 0.0.0.0:3306
✅ Solução: Feche processos MySQL locais ou altere a porta no docker-compose.yml:

yaml
Copiar
Editar
ports:
  - "3307:3306"
E no .env:

env
Copiar
Editar
DATABASE_PORT=3307
❌ Erro de conexão com MySQL:
pgsql
Copiar
Editar
Error: Access denied for user 'root'@'localhost' (using password: YES)
✅ Solução:

Verifique a senha no .env
Reinicie o banco de dados:
sh
Copiar
Editar
docker-compose down
docker-compose up -d
❌ Swagger não mostra exemplos de JSON no POST
✅ Solução: O controller deve conter @ApiBody no método create().

typescript
Copiar
Editar
@ApiBody({
  description: 'JSON para criação da empresa',
  required: true,
  schema: {
    example: {
      cnpj: '12.345.678/0001-90',
      nome: 'Empresa XYZ',
      email: 'contato@empresa.com',
      cidade: 'São Paulo',
      estado: 'SP',
    },
  },
})
🏆 Contribuições
Abra uma issue para reportar bugs ou sugerir melhorias.
Faça um fork e envie um pull request para novas funcionalidades.
📄 Licença
Este projeto está sob a licença MIT.