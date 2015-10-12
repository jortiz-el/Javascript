<!DOCTYPE html>
<html>
    <head>
        <title>Tiradas de dado</title>
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
        <h1>Número de tiradas de un dado</h1>
        <div class="capaform">

            <form class="form-font" name="Formregistro" 
                  action="index.php" method="POST">
            <div class="form-section">
                    <label for="texto">Introduce el número de tiradas: </Label> 
                    <input id="fechanac" type="text"  autofocus="autofocus" required = "required" name="numero">
            </div>
                <input class="submit" type="submit" 
                       value="Enviar" name="botonenvio" /> 
            </form>   
        </div>   
        <?php
        function tiraDado($dado) {
            return rand(1, $dado);
        }
        
        
        
        if(isset($_POST['botonenvio'])) {
            $tiradas = $_POST['numero'];
            $dado = 6;    
            if($tiradas <= "0" || is_numeric($tiradas)) {
                $tirada = round($tiradas);
                $resultados = [0,0,0,0,0,0];
                do {
                    $aux = tiraDado($dado);
                    $resultados[$aux-1]++;
                    $tiradas--;
                } while($tiradas !== 0);
                asort($resultados, SORT_ASC);
                echo "</br></br><h2>Resultados:<h2>";
                foreach($resultados as $key => $valor) {
                    $aux = $key + 1;
                    echo "$aux ===> $valor veces</br>";
                }
            } else {
                echo "<h2>Introduce un valor numerico mayor de 0</h2>";
            }
          
            
        }
        
        ?>
     </body>
</html>
