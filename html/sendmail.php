<?php
    echo("FIFA");
    require '../php/src/Exception.php';
    require '../php/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage("ru","language/");
    $mail->IsHTML(true);

    //От кого письмо
    $mail->setForm("a.bolotov-2@yandex.ru", "Foxello");
    // Кому отправить
    $mail->addAdress("a.bolotov-2@yandex.ru"); 
    //Тема письма
    $mail->Subject = "Hello, World! It's Foxello!";
    
    $body = '<h1>Hello, i`m foxello</h1>';
    if(trim(!empty($_POST[name]))){
        $body.='<p><strong>Имя:</strong> '.$_POST['name']."</p>";
    }
    if(trim(!empty($_POST[country]))){
        $body.='<p><strong>Имя:</strong> '.$_POST['country']."</p>";
    }
    if(trim(!empty($_POST[city]))){
        $body.='<p><strong>Имя:</strong> '.$_POST['city']."</p>";
    }
    if(trim(!empty($_POST[message]))){
        $body.='<p><strong>Имя:</strong> '.$_POST['message']."</p>";
    }

    $mail->Body = $body;

    //Отправка
    if(!$mail->send()){
        $message = "Error";
    }else{
        $message = "Data is sended!";
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>