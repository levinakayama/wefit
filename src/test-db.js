const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '127.0.0.1', // ou teste-backend-mysqldb-1 se rodando no Docker
  user: 'root',
  password: 'senha_root_123',
  database: 'wefit',
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar no MySQL:', err);
  } else {
    console.log('Conectado ao MySQL com sucesso!');
  }
  connection.end();
});
