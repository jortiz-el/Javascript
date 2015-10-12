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
                margin: auto;
                width: 300px;
                border-collapse: none;
                border: 1px solid black;
            }
            td, th, input {
                width: 50px;
                border: 1px solid black;
                text-align: center;
            }
            td {
              width: 30px;  
            }
           
        </style>
    <body>
        <h1>Resumen de temperaturas</h1>
<?php
if(isset($_POST['botonenvio'])) {
    $temperaturas = $_POST['datos'];

    $i = 0;
    foreach ($temperaturas as $ciudad => $meses) {
        $max[$ciudad] = max(array_column($meses, "Tmax"));
        $min[$ciudad] = min(array_column($meses, "Tmin"));
        $med[$ciudad] = round(((array_sum(array_column($meses, "Tmax"))+array_sum(array_column($meses, "Tmin")))/24),2);
        $resultados[$ciudad] = [$max[$ciudad],$min[$ciudad],$med[$ciudad]];
        $i++;
    }

    array_multisort($max,SORT_NUMERIC,SORT_ASC,$med,SORT_NUMERIC,SORT_ASC,$min,SORT_NUMERIC,SORT_ASC,$resultados);


    echo "<table><tr><th>Ciudad</th><th>Tmax</th><th>Tmin</th><th>Tmed</th></tr>";
    foreach($resultados as $ciudad => $valor) {
        echo "<tr><td>$ciudad</td><td>" . $max[$ciudad] . "</td>"
                               . "<td>" . $min[$ciudad] . "</td>"
                               . "<td>" . $med[$ciudad] . "</td></tr>";
    }
    echo "</table>";
} else {
    header('Location: http://localhost:8000');
}
?>
  </body>
</html>
