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
        <h1>Clasificación liga PHP-DAWERS</h1>
        <table>
            <tr>
                <th>Equipo</th>
                <th>Puntos</th>
                <th>Goles M</th>
                <th>Goles E</th>
                <th>Goles M/E</th>
            </tr>
<?php
function puntua($golesLocal, $golesVisitante) {
    if($golesLocal < $golesVisitante) {
        $salida = [0, 3];
    } else {
        if ($golesLocal > $golesVisitante) {
            $salida = [3, 0];
        } else {
            $salida = [1, 1];
        }
    }
     return $salida;
}
if(isset($_POST['botonenvio'])) {
    $resultadoLocal = $_POST['resultadoLocal'];
    $resultadoVisitante = $_POST['resultadoVisitante'];
    foreach ($resultadoLocal as $key => $valor) {
           $aux = explode("-", $key);
           $clasificacion[$aux[0]] = [0,0,0,0];
    }
    foreach ($resultadoLocal as $key => $valor) {
        $aux = explode("-", $key);
        $puntos = puntua($valor, $resultadoVisitante[$key]);
        $clasificacion[$aux[0]][0] += $puntos[0];
        $clasificacion[$aux[1]][0] += $puntos[1];
        $clasificacion[$aux[0]][1] += $valor;
        $clasificacion[$aux[1]][1] += $resultadoVisitante[$key];
        $clasificacion[$aux[0]][2] += $resultadoVisitante[$key];
        $clasificacion[$aux[1]][2] += $valor;
        $clasificacion[$aux[0]][3] += $valor - $resultadoVisitante[$key];
        $clasificacion[$aux[1]][3] += $resultadoVisitante[$key] - $valor;
    }
    $ptos = array_column($clasificacion, 0);
    $media = array_column($clasificacion, 3);
    $equipos = array_keys($clasificacion);
    array_multisort($ptos, SORT_NUMERIC, SORT_DESC, $media, SORT_NUMERIC, SORT_DESC, $equipos, SORT_STRING, SORT_ASC, $clasificacion);
    foreach ($clasificacion as $key => $valor) {
        echo "<tr><td>$key</td>";
        foreach($valor as $salida) {
            echo "<td>$salida</td>";
        }
        echo "</tr>";
    }
        
} else {
    header("Location:http://localhost:8000");
}
?>
        </table>
    </body>
</html>