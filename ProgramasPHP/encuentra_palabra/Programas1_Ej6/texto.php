<html>
    <head>
        <title>Resultados</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <style>
            h2{
                align: center;
            }
        </style>
    </head>
    <body>
<?php
    //Separa las palabras de un texto por los separadores
     function multiexplode($separadores, $arg) {
         /*Cambiamos los valores del texto y convertimos todos
         separadores en uno(el primero del array)*/
         $texto = str_replace($separadores, $separadores[0], $arg);
         //Creamos un array con las palabras sueltas(como solo tenemos un separador)
         $resultado = explode($separadores[0], $texto);
         return  $resultado;
     }
     //Devulve true si la primera letra es mayuscula
     function verMayusculas($palabra) {
         $aux = str_split($palabra);
         $sw = ctype_upper($aux[0]);
         return $sw;
     }
     //Cuenta las letras que tiene una palabra
     function cuentaLetras($palabra) {
         if(strlen($palabra)>=8 && strlen($palabra)<=10) {
             $sw = true;
         } else {
             $sw =false;
         }
         return $sw;
     }
   
     
    // Ordena las claves de un array de alfebeticamente y por tamaño
    /* function ordena($arraySalida) {
         asort($arraySalida);
         $contador = 0;
         $vuelta=10;
         while($vuelta>=8){
            foreach($arraySalida as $key => $valor){
                if(strlen($key)==$vuelta){
                    $salida[$contador]=$key;
                    $contador++;
                }
            }
        $vuelta--;
        }
        return $salida;
     }*/
    //Comprueba que la palabra tenga al menos 4 vocales.
    function cuentaVocales($palabra) {
        $vocales = ["A","a","E","e","I","i","O","o","U","u"];
        $sw = false;
        $aux = str_replace($vocales,$vocales[0],$palabra);
        $letras = str_split($aux);
        $contador = 0;
        foreach ($letras as $valor) {
            if($valor === $vocales[0]) {
                $contador++;
            }
        }
        if($contador==4) {
            $sw = true;
        }
        return $sw;   
    }
    //Comprueba que la palabra acabe en "ero"
    function finalEro($palabra) {
        $sw = false;
        $aux = strlen($palabra)-3;
        $letras = str_split($palabra);
        if(($letras[$aux]==="E" || $letras[$aux]==="e") &&
           ($letras[$aux+1]==="R" || $letras[$aux+1]==="r") &&
            ($letras[$aux+2]==="O" || $letras[$aux+2]==="o"))
        {
            $sw = true;
        }
        return $sw;
    }
    //Funcion de ordenacion del usort
    function cmp($a, $b) {
        $sal;
        if((strlen($a) > strlen($b)) || ((strlen($a) === strlen($b)) && ($a <= $b))) {
            $sal = -1;
        } else {
            $sal = 1;
        }
        return $sal;
    }
    
     if(!isset($_POST['botonenvio'])) {
          header('Location: http://localhost:8000');
     }
     $texto = $_POST['texto'];
     $arraySalida = [];
     //Primero separamos las palabras
     $separadores = [","," ","\n","\t",".",",",";",":"];
     $palabras = multiexplode($separadores, $texto);
     
    foreach ($palabras as $valor){
        if(verMayusculas($valor) && cuentaLetras($valor) &&
           cuentaVocales($valor) && finalEro($valor))
            {
                if(!array_key_exists($valor, $arraySalida)) {
                   $arraySalida[$valor] = 1;
               } else {
                   $arraySalida[$valor]++;
               }
            }
    }
    $arrayAux = [];
    foreach ($arraySalida as $key => $valor)
    {
        $arrayAux[]=$key;
    }
    usort($arrayAux,"cmp");
    $imprime = implode('-',$arrayAux);
    echo "<h1>$imprime</h1>";
    foreach($arrayAux as $valor)
    {
        $valor1 = strtoupper($valor);
        echo "$valor aparece: $arraySalida[$valor]</br>";
    }
    
//    foreach ($arraySalida as $key => $valor) {
//        echo "<p>$key aparece $valor veces--</p>";
//    } 
//     
//     
     
?>
    </body>
</html>
