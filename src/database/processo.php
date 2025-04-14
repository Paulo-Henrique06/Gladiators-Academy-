<?php
include '../database/config.php'; // Inclui a conexão com o banco

// Verifica se o formulário foi enviado
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $endereco = $_POST['endereco'];
    $genero = $_POST['genero'];
    $data_nascimento = $_POST['data_nascimento'];
    $plano = $_POST['plano'];

    // Prepara a query SQL
    $sql = "INSERT INTO matricula_clientes (nome, email, telefone, endereco, genero, data_nascimento, plano)
            VALUES (?, ?, ?, ?, ?, ?, ?)";

    // Prepara a consulta
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssssss", $nome, $email, $telefone, $endereco, $genero, $data_nascimento, $plano);

    // Executa a consulta
    if ($stmt->execute()) {
        echo "Cadastro realizado com sucesso! Pode fechar esta guia.";
    } else {
        echo "Erro ao cadastrar: " . $stmt->error;
    }

    // Fecha a conexão
    $stmt->close();
    $conn->close();
}
?>
