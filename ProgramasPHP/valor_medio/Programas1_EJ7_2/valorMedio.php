<!DOCTYPE html>
<?php
    function evaluaCadena($entrada) {
        $salida = true;
        $evalua = str_split($entrada);
        foreach($evalua as $valor) {
            
            if($valor === "," || ($valor >= "0" && $valor <= "9")) {
                
            } else {
                $salida = false;
            }
        }
        return $salida;
    }
    
    function compruebaSalida($entrada) {
        $aux = [];
        foreach($entrada as $valor) {
            if(!in_array($valor, $aux)) {
                $aux[] = $valor;
            }
        }
        return count($aux);
    }
   
    if(!isset($_POST['botonenvio'])) {
          header('Location: http://localhost:8000');
    }
    $numeros=$_POST['numeros'];
    $cadena= $numeros['numero1'];
    if(!evaluaCadena($cadena)) {
         header('Location: http://localhost:8000');
    } else { 
        $salida = explode(",", $cadena);
        if(compruebaSalida($salida) >= 3) {
            echo "<h1>El valores del medio son: ";
            sort($salida);
            for($i = 1; $i < (count($salida)-1); $i++) {
                echo "$salida[$i]\t";
             }
             echo "</h1>";
        } else {
            echo "<h1>Pocos datos.</h1>";
        }
        
    }
    
  