<?php

$nome = addslashes($_POST['nome']);
$sobrenome = addslashes($_POST['sobrenome']);
$email = addslashes($_POST['email']);
$telefone = addslashes($_POST['telefone']);
$mensagem = addslashes($_POST['mensagem']);

$to = "emaildestinatario@gmail.com";
$subject = "Contato via formulario";
$body = "Nome: ".$nome. "\r\n".
        "Sobrenome: ".$sobrenome."\r\n".
        "Email: ".$email."\r\n".
        "Telefone: ".$telefone."\r\n".
        "Mensagem: ".$mensagem;
$header = "From: contato@personafattoria.com.br"."\r\n".
          "Reply-To:".$email."\r\n".
          "X=Mailer:PHP/".phpversion();

if(mail($to,$subject,$body,$header)){
    echo("Mensagem enviada com sucesso. Logo, entraremos em contato!");
}
else{
  echo("Falha ao enviar mensagem!");
}




?>