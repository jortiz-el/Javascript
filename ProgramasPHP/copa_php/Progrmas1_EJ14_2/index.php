<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Copa PHP</title>
        <style>
             h1, h2{
                 text-align: center;
             }
           .capaform {
                width: 600px; 
                margin-left: auto; 
                margin-right: auto;
                position: relative;
                top: 50px;
                font-size: 20px;
                text-align:left;
                padding: 50px;
                border: 5px solid orange
           }
            .form-font {
                font-size: 25px
            }
            input {
                font-size: 20px
            }
            select {
                font-size: 20px
            }
            .form-section {
                margin: 25px;
            }
            .submit {
                position: absolute;
                right: 30px;
                width: 80px;
                height: 30px ;
                background: orange
            }
            </style>
    </head>
    <body>
        <h1>Copa PHP</h1>
        <div class="capaform">
            <form name="formLiga" action="formulario.php" method="POST">
                <div class="form-section">
                    <label for="texto">Introduce los equipos participantes: </Label> 
                    <input id="equipos" type="text"  autofocus="autofocus" required = "required" name="equipos">
                 </div>
                <input class="submit" type="submit" 
                       value="Enviar" name="botonenvio" /> 
            </form>
        </div>
        <?php
        if(isset($_GET['valor'])) {
            echo "</br></br><h2>Debes introducir más de un equipo separados por signos de puntuación</h2>";
        }
        ?>
    </body>
</html>