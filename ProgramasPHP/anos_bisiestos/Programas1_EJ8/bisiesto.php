<?php
    if(!isset($_POST['botonenvio'])) {
          header('Location: http://localhost:8000');
    } else {
        $anio = $_POST['anio'];
        if(($anio % 4 === 0) && (!($anio % 100 === 0) || ($anio % 400 === 0))) {
            echo "<h1>El $anio es bisiesto";
        } else {
            echo "<h1>El $anio no es bisiesto";
        }
        
        if(checkdate(2, 29, $anio)) {
            echo "<h1>Con funcion de fecha: El $anio es bisiesto";
        } else {
            echo "<h1>Con funcion de fecha: El $anio no es bisiesto";
        }
    }