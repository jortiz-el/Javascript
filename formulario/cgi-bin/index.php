<?php

function unic_number() {
	$leters = ["Aa","Ab","Ac","Ad","Ae"];
	$ran = array_rand($leters);
	return time().$leters[$ran];
}

if (isset($_POST['name'])) {
	$name_ar = "ARCHIVO.TXT";
	$new_name = unic_number().'.'.end(explode(".", strtolower($name_ar)));
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

	fwrite($ar, $data);
}else if (isset($_POST['acept_cookie'])) {
	$cookie_name = "vinil-shirt";
	$cookie_value = unic_number();

	if(!isset($_COOKIE[$cookie_name])) {
	    //echo "Cookie named '" . $cookie_name . "' is not set!";
	    setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/"); // 86400 = 1 day
	} 
}

include_once ('../html/index.html');

