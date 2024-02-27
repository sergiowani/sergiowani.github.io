<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];

    $destinatario = "sergiowani@outlook.es";
    $asunto = "Nuevo mensaje de contacto";

    $contenido = "Nombre: $nombre\n";
    $contenido .= "Correo electrónico: $email\n\n";
    $contenido .= "Mensaje:\n$mensaje";

    // Envía el correo electrónico
    mail($destinatario, $asunto, $contenido);

    // Redirige a una página de agradecimiento
    header("Location: gracias.html");
    exit();
}
?>