<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>Conversor de divisas</title>
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
        <h1> Formulario de Cambio de divisas </h1>
        <div class="capaform">

            <form class="form-font" name="Formregistro" 
                  action="cambio.php" method="POST">
                <div class="form-section">
                    <label for="entrada"> Cantidad: </Label> 
                    <input id="nombre" type="text"  required = "required" name="datos[cantidad]" size="20" /> 
                    <select id="nomtienda" name="datos[divisa1]">
                        <option value="EUR">EUROS</option>
                        <option value="USD">DOLAR</option>
                        <option value="GBP">LIBRA</option>
                        <option value="CNY">YUAN</option>
                    </select> 
                </div>
                <br/>
                <div class="form-section">
                    <label for="divisa2"> Moneda de Cambio: </Label> 
                    <select id="nomtienda" name="datos[divisa2]">
                        <option value="EUR">EUROS</option>
                        <option value="USD">DOLAR</option>
                        <option value="GBP">LIBRA</option>
                        <option value="CNY">YUAN</option>
                    </select> 
                </div>
                <input class="submit" type="submit" 
                       value="Enviar" name="botonenvio" /> 
            </form>   
        </div>
     </body>
</html>
