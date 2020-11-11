<?php
// Файлы phpmailer
require '../php/PHPMailer.php';
require '../php/SMTP.php';
require '../php/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$email = $_POST['mail'];
$city = $_POST['city'];
$message = $_POST['message'];

// Формирование самого письма
$title = "Review to Foxello";
$body = "
<h2>Новое письмо</h2>
<b>Имя:</b> $name<br>
<b>Почта:</b> $email<br><br>
<b>Город:</b> $city<br><br>
<b>Сообщение:</b>$message<br>
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'ssl://smtp.bk.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'foxello@bk.ru'; // Логин на почте
    $mail->Password   = '488124aa'; // Пароль на почте
    $mail->SMTPSecure = 'SSL';
    $mail->Port       = 465;
    $mail->setFrom('foxello@bk.ru', 'Привет, это Foxello'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('a.bolotov-2@yandex.ru'); 



    // Прикрипление файлов к письму
// if (!empty($file['name'][0])) {
//     for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
//         $uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
//         $filename = $file['name'][$ct];
//         if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
//             $mail->addAttachment($uploadfile, $filename);
//             $rfile[] = "Файл $filename прикреплён";
//         } else {
//             $rfile[] = "Не удалось прикрепить файл $filename";
//         }
//     }   
// }
// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
?>