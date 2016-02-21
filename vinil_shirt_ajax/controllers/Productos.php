<?php

require_once '../models/Productos.php';

$boton = $_POST['boton'];
$valor = $_POST['valor'];
$prod = new Productos(); 
if ($boton === 'live_buscar') {
    $p = $prod->list_products($valor);
    echo json_encode($p);
} else if ($boton === 'buscar') {
	$p = $prod->get_one_product($valor);
    echo json_encode($p);
}else if ($boton === 'inserta') {
	$p = $prod->list_products_all();
    echo json_encode($p);
} else if ($boton === 'ordena') {
	$p = $prod->list_products_sort($valor);
    echo json_encode($p);
}



