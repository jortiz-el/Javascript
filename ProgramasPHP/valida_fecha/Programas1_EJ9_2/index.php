<!DOCTYPE html>
<html>
    <head>
        <title>Valida Fecha</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
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
            .data {
                color: brown;
                display: block;
            }
        </style>
    <body>
        <h1>Introduce la fecha a comprobar</h1>
        <div class="capaform">

            <form class="form-font" name="Formregistro" 
                  action="index.php" method="POST">
            <div class="form-section">
                    <label for="texto">Introduce la fecha: </Label> 
                    <input id="fechanac" type="text"  autofocus="autofocus" required = "required" name="fecha">
            </div>
                <input class="submit" type="submit" 
                       value="Enviar" name="botonenvio" /> 
            </form>   
        </div>   
        <?php
            if(isset($_POST['fecha'])) {
              $fecha = $_POST['fecha'];
              $ArrayFecha = explode("-", $fecha);
              if(checkdate($ArrayFecha[1], $ArrayFecha[0], $ArrayFecha[2])) {
                 echo "<h2>La fecha introducida es correcta</h2>";
              } else {
               echo "<h2>La fecha introducida NO es correcta</h2>";
            }
            } 
        ?>
    </body>
</html>
