<?php

$basedatos = '2063414_vinil';
$usuario = '2063414_vinil';
$contrasenya = 'entrar08';
$equipo = 'localhost';

class BD {

    protected static $bd = null;

    private function __construct() {
        try {
            self::$bd = new PDO('mysql:host=fdb6.atspace.me;dbname=2063414_vinil;charset=utf8', '2063414_vinil', 'entrar08');
            self::$bd->exec("set names utf8");
            self::$bd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo "Connection Error: " . $e->getMessage();
        }
    }
    
    public static function getConexion() {
        if (!self::$bd) {
            new BD();
        }
        return self::$bd;
    }

}

    