<?php
    if(!isset($_POST['botonenvio'])) {
          header('Location: http://localhost:8000');
    } else {
        $anio = $_POST['anio'];
        $aux = 0;
        while(!checkdate(2, 29, $anio)) {
            $anio++;
            $aux++;
        }
        if($aux === 0) {
            echo "<h1>Este año es bisiesto</h1>";
        } else {
            echo "<h1>Faltan $aux para el proximo anio bisiesto</h1>";
        }
    }
