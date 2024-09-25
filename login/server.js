// Importando as bibliotecas necessárias
const express = require('express'); // Framework para criar aplicações web
const mysql = require('mysql2'); // Biblioteca para interagir com bancos de dados MySQL
const bcrypt = require('bcryptjs'); // Biblioteca para criptografar senhas
const dotenv = require('dotenv'); // Biblioteca para carregar variáveis de ambiente

// Carregando as variáveis de ambiente a partir do arquivo .env
dotenv.config();

// Criando uma instância do aplicativo Express
const app = express();
// Configurando o Express para lidar com dados JSON
app.use(express.json());

// Criando uma conexão com o banco de dados MySQL
const db = mysql.createConnection({
    // Obtendo as informações de conexão do ambiente
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Conectando ao banco de dados
db.connect(err => {
    if (err) {
        // Se houver um erro, imprime uma mensagem de erro no console
        console.error('Error connecting to the database:', err);
        // Encerra a execução da função
        return;
    }
    // Se a conexão for bem-sucedida, imprime uma mensagem de sucesso
    console.log('Connected to the MySQL database.');
});