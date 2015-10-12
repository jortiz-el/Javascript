<!DOCTYPE html>
<html>
    <head>
        <title>Temperaturas</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <style>
             h1, h2{
                 text-align: center;
             }
           
            .form-font {
                font-size: 25px
            }
            input {
                font-size: 14px
            }
            .form-section {
                margin: 25px;
            }
            .submit {
                clear: both;
                margin: auto;
                width: 80px;
                height: 30px ;
                background: orange;
            }
            
            th {
                text-align: center;
                color: blue;
                background: white;
            }
            table{
                width: 150px;
                border-collapse: none;
                border: 1px solid black;
                float: left;
            }
            td, th, input {
                width: 50px;
            }
            td {
              width: 30px;  
            }
           
        </style>
    <body>
        <h1>Introduce los datos de temperaturas</h1>
       <form class="form-font" name="Formregistro" 
                  action="temp.php" method="POST">

<?php
//function evaluaCadena($entrada) {
//        $salida = true;
//        $evalua = str_split($entrada);
//        $abc = ["a"]
//        foreach($evalua as $valor) {
//            
//            if($valor === "," || ($valor >= "a" && $valor <= "Z")) {
//                
//            } else {
//                $salida = false;
//            }
//        }
//        return $salida;
//    }
if(isset($_POST['botonenvio'])) {
    $entrada = $_POST['entrada'];
    //if(evaluaCadena($entrada)) {
        $ciudad = explode(",", $entrada);
        $mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
                "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", 
                "Diciembre"];
        $temp = ["Tmax", "Tmin"];

        //Creamos el formulario para introducir las temperaturas
        foreach($ciudad as $valorCiudad) {
            echo "<table><tr><th colspan=3>$valorCiudad</th></tr>";
            echo "<tr><td></td>";
            foreach($temp as $valor) {
                echo "<td>$valor</td>";
            }
            echo "</tr>";
            foreach($mes as $valorMes) {
                echo "<tr><td>$valorMes</td>";
                foreach ($temp as $valorTemp) {
                    echo "<td>";
                    echo "<input id='fechanac' type='text' "
                        . "value = '3' "
                        . "name='datos[$valorCiudad][$valorMes][$valorTemp]'></td>";
                }
                echo "</tr>";
            }
           echo "</table>";
        }
    } else {
        header('Location: http://localhost:8000');
    }
    
//} else {
//     header('Location: http://localhost:8000');
//}

 ?>
            <input class="submit" type="submit" 
           value="Enviar" name="botonenvio" /> 
         </form>
     </body>
</html>
