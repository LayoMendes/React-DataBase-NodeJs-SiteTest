<?php
// Configurações do banco (ajuste conforme seu docker-compose.yml)
$host = "localhost";       // ou 'db' se PHP estiver em container Docker também
$port = "5432";
$dbname = "sistema_cadastro";
$user = "postgres";
$password = "root";

// Conecta ao PostgreSQL
$conn = pg_connect("host=$host port=$port dbname=$dbname user=$user password=$password");

// Verifica a conexão
if (!$conn) {
    die("Erro na conexão com o banco de dados PostgreSQL.");
}

// Recebe os dados do formulário
$usuario = $_POST['usuario'] ?? '';
$email   = $_POST['email'] ?? '';
$numero  = $_POST['numero'] ?? '';
$senha   = $_POST['senha'] ?? '';

// Validações simples
if (empty($usuario) || empty($email) || empty($senha)) {
    die("Preencha todos os campos obrigatórios.");
}

// Criptografa a senha com password_hash
$senhaCriptografada = password_hash($senha, PASSWORD_DEFAULT);

// Prepara o comando SQL com parâmetros
$sql = "INSERT INTO usuarios (usuario, email, numero, senha) VALUES ($1, $2, $3, $4)";

// Executa a query com segurança (evita SQL Injection)
$result = pg_query_params($conn, $sql, array($usuario, $email, $numero, $senhaCriptografada));

// Verifica o resultado
if ($result) {
    echo "✅ Usuário cadastrado com sucesso!";
} else {
    echo "❌ Erro ao cadastrar: " . pg_last_error($conn);
}

// Encerra a conexão
pg_close($conn);
?>
