<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Copa PHP</title>
        <style>
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
            h1 {
                text-align: center;
            }
            .submit {
                position: absolute;
                left: 700px;
                background: blue;
                color: white;
                width: 100px;
                text-align: center;
            }
            input {
                width: 15px;
            }
        </style>   
    </head>
    <body>
        <h1>Introduce los resultados de los partidos</h1>
        <form name="formLiga" action="liga.php" method="POST">
        <?php
            $equipos = ["Real Madrid", "Manchester Utd", "AC Milan"];
            echo "<table><tr><th colspan=\"2\">Equipo Local</th><th colspan=\"2\">Equipo Visitante</th>";
            foreach ($equipos as $keyLocal => $equipoLocal) {
                foreach ($equipos as $keyVisitante => $equipoVisistante) {
                    if ($keyLocal != $keyVisitante) {
                        echo "<tr><td>$equipoLocal</td><td>";
                        echo "<input id=\"goles\" type=\"text\" required = \"required\" name=\"resultadoLocal[$equipoLocal" . "-" . "$equipoVisistante]\"></td>";
                        echo "<td>$equipoVisistante</td><td>";
                        echo "<input id=\"goles\" type=\"text\" required = \"required\" name=\"resultadoVisitante[$equipoLocal" .  "-" . "$equipoVisistante]\"></td></tr>";
                    }
                }
            }
            echo "</table>";
        ?>
            <input type="submit" class="submit" name="botonenvio" value="Enviar"></input>
        </form>
    </body>
</html>
