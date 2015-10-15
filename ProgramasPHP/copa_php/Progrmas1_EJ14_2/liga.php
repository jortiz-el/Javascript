<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Copa PHP</title>
        <style>
            h1 {
                 text-align: center;
           }
            table {
                margin: auto;
                border-collapse: none;
                border:1px solid;
            }
            th {
                background: blue;
                color: white;
                border: solid 1px blue;
                text-align: center;
            }
            td {
                border: solid 1px blue;
                text-align: center;
                padding: 5px;
            }
        </style>
    </head>
    <body>
        <h1>Resultados con mas goles en casa</h1>
        <table>
            <tr>
                <th colspan="2">Equipo local</th>
                <th colspan="2">Equipo visitante</th>
            </tr>
<?php
if(isset($_POST['botonenvio'])) {
    $resultadoLocal = $_POST['resultadoLocal'];
    $resultadoVisitante = $_POST['resultadoVisitante'];
    arsort($resultadoLocal,SORT_NUMERIC);
    $max = max($resultadoLocal);
    foreach ($resultadoLocal as $key => $valor) {
        if($valor === $max) {
           $aux = explode("-", $key);
           echo "<tr><td>$aux[0]</td><td>$valor</td><td>$aux[1]</td><td>$resultadoVisitante[$key]</td></tr>";  
        }
    }
} else {
    header("Location:http://localhost:8000");
}
?>
        </table>
    </body>
</html>