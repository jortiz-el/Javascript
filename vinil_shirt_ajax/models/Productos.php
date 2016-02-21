<?php

require_once '../models/BD.php';

class Productos {
    
    private $con;
    
    public function __construct() {
        $this->con = BD::getConexion();
    }
    
    
    function list_products($valor) {
        $bd = BD::getConexion();
        $sql = "select * from products where name like :valor ";
        $stmt = $bd->prepare($sql);
        $stmt->execute([":valor" => '%'.$valor.'%']);
        $productos = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        return $productos;
    }

    function list_products_all() {
        $bd = BD::getConexion();
        $sql = "select * from products ";
        $stmt = $bd->prepare($sql);
        $stmt->execute();
        $productos = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        return $productos;
    }

    function list_products_sort($order){
        $bd = BD::getConexion();
        $sql = "select * from products ORDER BY ".$order;
        $stmt = $bd->prepare($sql);
        $stmt->execute();
        $productos = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        return $productos;
    }

    function get_one_product($valor) {
        $bd = BD::getConexion();
        $sql = "select * from products where name ='".$valor."'";
        $stmt = $bd->prepare($sql);
        try {
            $stmt->execute();
            $productos = $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (Exception $ex) {
            $productos = [];
        }
       
        return $productos;
    }
}


