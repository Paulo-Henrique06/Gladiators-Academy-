<?php
$host = 'localhost'; // Host do banco
$user = 'root'; // Usuário do banco
$password = ''; // Senha do banco (deixe vazio se não houver senha)
$dbname = 'gladiators_clientes'; // Nome do banco de dados

// Conexão ao banco de dados
$conn = new mysqli($host, $user, $password, $dbname);

// Verificar se a conexão falhou
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}
?>
