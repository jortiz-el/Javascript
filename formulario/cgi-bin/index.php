<?php

$cookie_name = "formulario";
$cookie_value = "escaparate virtual";

if(!isset($_COOKIE[$cookie_name])) {
    echo "Cookie named '" . $cookie_name . "' is not set!";
    setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/"); // 86400 = 1 day
} else {
    echo "Cookie '" . $cookie_name . "' is set!<br>";
    echo "Value is: " . $_COOKIE[$cookie_name];
}

if (isset($_POST['name'])) {
	echo "<br><br>";
	$name_ar = "ARCHIVO.TXT";
	$new_name = time().'.'.end(explode(".", strtolower($name_ar)));
	$ar = fopen($new_name , "a");

	$head = "Datos de alta para escaparate virtual \n";
	$name = "Nombre: ".$_POST['name']."\n";
	$surname = "Apellidos: ".$_POST['surname']."\n";
	$email = "Email: ".$_POST['email']."\n";
	$pass = "Contraseña: ".sha1($_POST['pass'])."\n";
	$url = "Url: ".$_POST['website']."\n";
	$adress = "Direccion: ".$_POST['adress']."\n";
	$country = "Pais: ".$_POST['country']."\n";
	$post_code = "Codigo Postal: ".$_POST['post_code']."\n";
	$message = "Mensaje: ".$_POST['message']."\n";
	$data = strtoupper($head).$name.$surname.$email.$pass.$url.$adress.$country.$post_code.$message;

	//fwrite($ar, "\n");
	fwrite($ar, $data);


}

include_once ('../html/index.html');

