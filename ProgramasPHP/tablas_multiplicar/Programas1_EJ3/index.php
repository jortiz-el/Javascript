<!DOCTYPE html>
<html>
    <head>
        <title>Tablas de multiplicar</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <style>
             h1{
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
            .data {
                color: brown;
                display: block;
            }
        </style>
    <body>
        <h1>Tablas de Multiplicar </h1>
        <div class="capaform">

            <form class="form-font" name="Formregistro" 
                  action="tablas.php" method="POST">
            <div class="form-section">
                    <label for="Numero">Introduce el número que quieres multiplicar: </Label> 
                    <input id="fechanac" type="text"  autofocus="autofocus" required = "required" name="numeros">
            </div>
                <input class="submit" type="submit" 
                       value="Enviar" name="botonenvio" /> 
            </form>   
        </div>    
        <?php
            if(isset($_GET['valor']))
            {
                echo '</br><h1>Valores incorrectos</h1>';
            }
        ?>
    </body>
</html>
