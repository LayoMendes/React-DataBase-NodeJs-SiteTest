-- Cria o banco de dados (opcional, se não quiser fazer isso no docker-compose)
-- CREATE DATABASE sistema_cadastro;

-- Usa o banco (caso necessário)
-- \c sistema_cadastro

-- Cria a tabela de usuários
CREATE TABLE IF NOT EXISTS usuarios (
    id SERIAL PRIMARY KEY,
    usuario VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    numero VARCHAR(20),
    senha TEXT NOT NULL
);
