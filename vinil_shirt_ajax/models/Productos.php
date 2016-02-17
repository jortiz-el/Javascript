<?php

require_once '../models/BD.php';

class Productos {
    
    private $con;
    
    public function __construct() {
        $this->con = BD::getConexion();
    }
    
    
    function list_products($valor) {
        $bd = BD::getConexion();
        $sql = "select DISTINCT * from products where name like :valor or descrip like :valor ";
        $stmt = $bd->prepare($sql);
        $stmt->execute([":valor" => '%'.$valor.'%']);
        $productos = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        return $productos;
    }
}


