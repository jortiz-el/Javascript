<!DOCTYPE html>
<html>
    <head>
        <title>Numeros primos</title>
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
        <h1>Introduce el número a comprobar</h1>
        <div class="capaform">

            <form class="form-font" name="Formregistro" 
                  action="index.php" method="POST">
            <div class="form-section">
                    <label for="texto">Introduce el número: </Label> 
                    <input id="fechanac" type="text"  autofocus="autofocus" required = "required" name="numero">
            </div>
                <input class="submit" type="submit" 
                       value="Enviar" name="botonenvio" /> 
            </form>   
        </div>   
        <?php
        //Funcion que comprueba si un numero es primo
        function esPrimo($num) {
            $aux = 1;
            do {
                $aux ++;
                $salida = ($num % $aux !== 0);
            } while ($salida && ($aux <= $num/2));
            return $salida;
        }
        if(isset($_POST['botonenvio'])) {
           $num = $_POST['numero'];
           if((esPrimo($num) || ($num === "2")) && ($num > "0")) {
               echo "<h2>El número $num es primo</h2>";
           } else {
               echo "<h2>El número $num No es primo</h2>";
           }
        }
        
        ?>
     </body>
</html>
