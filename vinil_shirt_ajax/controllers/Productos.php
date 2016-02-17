<?php

require_once '../models/Productos.php';

$boton = $_POST['boton']; 
if ($boton === 'buscar') {
    $valor = $_POST['valor'];
    $prod = new Productos();
    $p = $prod->list_products($valor);
    echo json_encode($p);
    
}


