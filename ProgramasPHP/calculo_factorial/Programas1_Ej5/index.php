<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>Calculo del factorial</title>
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
    </head>
    <body>
        <?php
        if(!isset($_POST['botonenvio'])) {
        ?>
        <h1> Calculo de Factorial de un número</h1>
        <div class="capaform">
            <form class="form-font" name="Formregistro" 
                  action="index.php" method="POST">
                <div class="form-section">
                    <label for="entrada">Introduce un número: </Label> 
                    <input id="nombre" type="text"  required = "required" name="numero" size="20" /> 
                </div>
                <input class="submit" type="submit" 
                       value="Calcular" name="botonenvio" /> 
            </form>   
        </div>
        <?php
        } else {
            $numero = $_POST['numero'];
            $aux = 1;
            for($i=1; $i<=$numero; $i++){
                $aux = $i * $aux; 
            }
        ?>
            <h1> Calculo de Factorial de un número</h1>
            <div class="capaform">
            <form class="form-font" name="Formregistro" 
                  action="index.php" method="POST">
                <div class="form-section">
                    <label for="entrada">Introduce un número: </Label> 
                    <input id="nombre" type="text"  required = "required" name="numero" size="20" /> 
                </div>
                <input class="submit" type="submit" 
                       value="Calcular" name="botonenvio" /> 
            </form>   
            </div>
        <?php
        
        echo "<br/><br/><h2>El factorial de $numero es $aux</h2>";
            }
        ?>
    </body>
</html>
