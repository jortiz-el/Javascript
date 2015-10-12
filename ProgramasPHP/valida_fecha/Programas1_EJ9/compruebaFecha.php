<?php
    //Comprueba si la fecha es correcta
    function compruebaFecha($dias, $mes, $anio) {
        switch ($mes) {
            case "01": case "03": case "05": case "07": case "08": 
            case "10": case "12": case "1":  case "3":  case "5": 
            case "7":  case "8": 
                $salida = !($dias > "31" || $dias < "0");
            break;
            case "04": case "06": case "09": case "11": case "4":
            case "6": case "9":
                $salida = !($dias > "30" || $dias < "0");
            break;    
            case "02"; case "2":
                if(esBisiesto($anio)) {
                    $salida = !($dias > "29" || $dias < "0");
                } else {
                    $salida = !($dias > "28" || $dias < "0");
                }
        }
        return $salida;
    }
     //Devuelve true si el año es bisiesto
    function esBisiesto($anio) {
             return (($anio % 4 === 0) && (!($anio % 100 === 0) || ($anio % 400 === 0)));
    }
     //Devuelve true si la cadena introducida esta formada por num y -
    function compruebaFormato($entrada) {
        $fecha = str_split($entrada);
        $salida = true;
        $posicion = 0;
        do {
            $salida = (($fecha[$posicion] <= "9" && $fecha[$posicion] >= "0")
                      || ($fecha[$posicion] === "-"));

            $posicion++;
        }while($salida && $posicion !== count($fecha));
        return $salida;
    }
    //Salida de dato erronero
    function Salida() {
        header('Location: http://localhost:8000?valor=false');
    }
    
    if(!isset($_POST['botonenvio'])) {
        header('Location: http://localhost:8000');
    } else {
        $fecha = $_POST['fecha'];
       if(compruebaFormato($fecha)) {
           $ArrayFecha = explode("-", $fecha);
           if(count($ArrayFecha) === 3) {
               if(compruebaFecha($ArrayFecha[0], $ArrayFecha[1], $ArrayFecha[2])) {
                   header('Location: http://localhost:8000?valor=true');
               } else {
                   Salida();
               }
           } else {
               Salida();
           }
       } else {
           Salida();
       }
        
    }
        

