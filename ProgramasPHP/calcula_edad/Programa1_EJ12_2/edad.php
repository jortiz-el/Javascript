<?php
    function calculaEdad($dia, $mes, $anio) {
        $hoy = getdate();
        $hDia = $hoy["mday"];
        $hMes = $hoy["mon"];
        $hAnio = $hoy["year"];
        $sysDate = "$hAnio"."-"."$hMes"."-"."$hDia";
        $myDate = "$anio"."-"."$mes"."-"."$dia";
        $diff = abs(strtotime($sysDate) - strtotime($myDate));
        return floor($diff/(365*60*60*24));
    }
    
     //Devuelve true si la cadena introducida esta formada por num y -
    function compruebaFormato($entrada) {
        $fecha = str_split($entrada);
        $salida = true;
        $posicion = 0;
        do {
            $salida = (($fecha[$posicion] <= "9" && $fecha[$posicion] >= "0")
                      || ($fecha[$posicion] === "/"));

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
           $ArrayFecha = explode("/", $fecha);
           if(count($ArrayFecha) === 3) {
              if(checkdate($ArrayFecha[1], $ArrayFecha[0], $ArrayFecha[2])) { 
                   $salida = calculaEdad($ArrayFecha[0], $ArrayFecha[1], $ArrayFecha[2]);
                   header("Location: http://localhost:8000?valor=$salida");
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