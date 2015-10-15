<!DOCTYPE html>
<?php
    function comparaTres($num1,$num2, $num3){
            if($num1 >= $num2 && $num2 >= $num3 || $num3 >= $num2 && $num2 >= $num1) {
              $salida = $num2;
            } else {
                if ($num2 >= $num1 && $num1 >= $num3 || $num3 >= $num1 && $num1 >= $num2) {
                    $salida = $num1;
                } else {
                   $salida = $num3;
               }
            }
            return $salida;
    }
           
    
    if(!isset($_POST['botonenvio'])) {
          header('Location: http://localhost:8000');
    }
    $numeros=$_POST['numeros'];
    $num1= $numeros['numero1'];
    $num2= $numeros['numero2'];
    $num3= $numeros['numero3'];
    $valor = comparaTres($num1,$num2, $num3);
  
    echo "<h1>El valor del medio es: $valor</h1>";