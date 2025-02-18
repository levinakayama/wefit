# 🚀 WeFit API

WeFit API é uma API desenvolvida em **NestJS** com **TypeORM** e **MySQL**, utilizando **Swagger** para documentação. Esse projeto permite o cadastro e a consulta de empresas.

## 📚 Sumário

- [🛠 Tecnologias](#-tecnologias)
- [📌 Pré-requisitos](#-pré-requisitos)
- [⚙️ Instalação e Configuração](#️-instalação-e-configuração)
- [🐳 Configurando o Banco de Dados com Docker](#-configurando-o-banco-de-dados-com-docker)
- [🚀 Como Rodar o Projeto](#-como-rodar-o-projeto)
- [🔧 Configuração do .env](#-configuração-do-env)
- [📑 Documentação da API - Swagger](#-documentação-da-api---swagger)
- [🌍 Como Acessar a API Externamente](#-como-acessar-a-api-externamente)
- [⚠️ Possíveis Erros e Soluções](#️-possíveis-erros-e-soluções)

---

## 🛠 Tecnologias

- **Node.js**
- **NestJS**
- **TypeORM**
- **MySQL**
- **Docker**
- **Swagger**
- **Class-validator**

---

## 📌 Pré-requisitos

Antes de começar, instale os seguintes programas:

- **Node.js** (versão 18 ou superior)
- **Docker** e **Docker Compose**
- **Git**

Para verificar se já estão instalados, execute:

```sh
node -v
docker -v
git --version
```

Caso algum deles não esteja instalado, siga a documentação oficial.

---

## ⚙️ Instalação e Configuração

### 🔹 Clonando o repositório

```sh
git clone https://github.com/seuusuario/wefit-api.git
cd wefit-api
```

### 🔹 Instalando as dependências

```sh
npm install
```

---

## 🐳 Configurando o Banco de Dados com Docker

O banco de dados **MySQL** roda dentro de um container Docker.

### 🔹 Iniciando o MySQL via Docker:

```sh
docker-compose up -d
```

### 🔹 Verifique se o container está rodando:

```sh
docker ps
```

### 🔹 Acesse o banco de dados MySQL manualmente:

```sh
docker exec -it wefit-mysqldb mysql -u root -p
```


### 🔹 Certifique-se de que o banco **wefit** foi criado corretamente:

```sql
SHOW DATABASES;
USE wefit;
SHOW TABLES;
```

---

## 🚀 Como Rodar o Projeto

### 🔹 Criando as tabelas no banco:

```sh
npm run typeorm migration:run
```

### 🔹 Iniciando o servidor:

```sh
npm run start:dev
```

Se tudo estiver correto, você verá a seguinte mensagem no terminal:

```
🚀 Server running on http://localhost:4568
```

---

## 🔧 Configuração do .env

Crie um arquivo chamado **.env** na raiz do projeto e adicione:

```
DATABASE_TYPE=mysql
DATABASE_HOST=YOUR_DATABASE_HOST
DATABASE_USER=YOUR_DATABASE_USER
DATABASE_PASSWORD=YOUR_DATABASE_PASSWORD
DATABASE_NAME=YOUR_DATABASE_NAME
PORT=4568
```

Se estiver rodando o **MySQL localmente**, altere:

```
DATABASE_HOST=localhost
```

---

## 📑 Documentação da API - Swagger

A documentação da API está disponível em:

📌 **[http://localhost:4568/api](http://localhost:4568/api)**

O **Swagger** permite testar requisições **GET**, **POST** e visualizar os contratos de entrada e saída da API.

### 🔹 Endpoints

| Método | Rota        | Descrição                        |
|--------|------------|--------------------------------|
| **POST** | `/company` | Cria uma empresa               |
| **GET**  | `/company` | Lista todas as empresas        |

---

## 🌍 Como Acessar a API Externamente

Por padrão, a API roda em **localhost**. Para acessá-la de outro dispositivo na mesma rede:

### 1️⃣ Descubra o IP da máquina:

No **Windows**, rode:

```sh
ipconfig
```

No **Linux/Mac**, rode:

```sh
ifconfig
```

Exemplo de IP encontrado: **192.168.1.100**

### 2️⃣ Altere o `.env` para permitir conexões externas:

```
DATABASE_HOST=192.168.1.100
```

### 3️⃣ Acesse a API pelo navegador:

📌 **[http://192.168.1.100:4568/api](http://192.168.1.100:4568/api)**

---

## ⚠️ Possíveis Erros e Soluções

### ❌ **Erro: "Ports are not available" no Docker**

Se ao rodar o **Docker** aparecer um erro semelhante a:

```sh
Error response from daemon: Ports are not available: exposing port TCP 0.0.0.0:3306 -> 0.0.0.0:0: listen tcp 0.0.0.0:3306
```

Isso significa que a porta **3306** já está sendo usada. Para resolver:

1️⃣ **Verifique o processo que está usando a porta:**
```sh
netstat -ano | findstr :3306
```

2️⃣ **Finalizar o processo que está ocupando a porta (no Windows):**
```sh
taskkill /PID <PID> /F
```

3️⃣ **Reinicie o Docker:**
```sh
docker-compose down
docker-compose up -d
```

### ❌ **Erro: "Access denied for user 'root'@'localhost'"**

1️⃣ Verifique a senha no `.env`. Certifique-se de que a senha do MySQL corresponde ao definido no **docker-compose.yml**.

2️⃣ Acesse o banco manualmente e redefina a senha:

```sh
docker exec -it wefit-mysqldb mysql -u root -p
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'nova_senha';
FLUSH PRIVILEGES;
```

3️⃣ Reinicie o **NestJS**:

```sh
npm run start:dev
```

## 📌 Contribuição

Se deseja contribuir, siga os passos:

1. Faça um **fork** do repositório
2. Crie uma nova **branch**: `git checkout -b minha-feature`
3. Faça as alterações e **commit**: `git commit -m "Minha nova feature"`
4. Envie as mudanças: `git push origin minha-feature`
5. Abra um **Pull Request**

---

## 📄 Licença

Este projeto está sob a licença **MIT**.

---

🚀 **Desenvolvido por Levi Nakayama**
