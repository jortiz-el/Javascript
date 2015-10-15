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
$temperaturas = $_POST['datos'];

$ciudades = [];
foreach($temperaturas as $ciudad => $meses) {
    $max[$ciudad]["Tmax"] = max(array_column($meses, "Tmax"));
    $min[$ciudad]["Tmin"] = min(array_column($meses, "Tmin"));
    $med[$ciudad]["Tmed"] = (array_sum(array_column($meses, "Tmax"))+array_sum(array_column($meses, "Tmin")))/24;
    array_push($ciudades, $ciudad);
}
sort($ciudades);
echo "<table><tr><th>Ciudad</th><th>Tmax</th><th>Tmin</th><th>Tmed</th></tr>";
foreach($ciudades as $ciudad) {
    echo "<tr><td>$ciudad</td><td>" . $max[$ciudad]['Tmax'] . "</td>"
                           . "<td>" . $min[$ciudad]['Tmin'] . "</td>"
                           . "<td>" . $med[$ciudad]['Tmed'] . "</td></tr>";
}
echo "</table>";
?>
  </body>
</html>
