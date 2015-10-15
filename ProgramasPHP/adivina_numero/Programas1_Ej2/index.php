<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <title>Formulario de Registro</title>
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
    </head>
    <body>
        <h1>Adivina tu numero con un intento </h1>
        <div class="capaform">

            <form class="form-font" name="Formregistro" 
                  action="procesaNumeros.php" method="POST">
                <div class="form-section">
                    <label for="min"> Limite Inferior: </Label> 
                    <input id="nombre" type="text"  required = "required" name="num[min]" size="30" /> 
                </div>
                <div class="form-section">
                    <label for="max"> Limite Superior: </Label> 
                    <input id="contrasenia" type="text"  required = "required" name="num[max]" size="30"/> 
                </div>
                <div class="form-section">
                    <label for="Numero"> Fecha de Nacimiento: </Label> 
                    <input id="fechanac" type="text"  required = "required" name="num[incognita]">
                </div>
                <input class="submit" type="submit" 
                       value="Enviar" name="botonenvio" /> 
            </form>   
        </div>
        <?php
        // put your code here
        ?>
    </body>
</html>
