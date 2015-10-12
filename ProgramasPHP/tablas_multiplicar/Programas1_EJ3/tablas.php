<html>
    <head>
        <title>Tablas de multiplicar</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <style>
            table
            {
                float: left;
                margin: 20px;
                border:solid 2px;
                border-collapse: collapse;
                
            }
            th
            {
                background: blue;
                color: white;
                padding: 10px;
                    
            }
            tr, td
            {
                border: solid 2px;
                padding:3px 10px;
            }
        </style>
    </head>
    <body>

<?php
    if(!isset($_POST['botonenvio'])) {
        salir();
    }
    $num = $_POST['numeros'];
    $arrayTablas = [];
    $numeros = str_split($num);
    $sw = true;
    $aux = 0;
    while($aux<count($numeros))
    {
        switch ($numeros[$aux]){
            case 1: case 2: case 3: case 4: case 5: 
            case 6: case 7: case 8: case 9:  
                if(!in_array($numeros[$aux],$arrayTablas)) {
                    array_push($arrayTablas,$numeros[$aux]);
                }   
                $sw ? $sw=false : salir(); 
                break;
            case ",":
                $sw=true;
                break;
            case "-":
                for($i=$numeros[($aux-1)]; $i<=$numeros[($aux+1)] ;$i++){
                     if(!in_array($i,$arrayTablas)) {
                        array_push($arrayTablas,$i);
                      } 
                }  
                $sw=true;
                break;
            default:
                salir();
        }
        $aux += 1;
        asort($arrayTablas);
    }
    
    foreach($arrayTablas as $valor){
        imprimeTabla($valor);
    }
    
    function salir() {
      header('Location: http://localhost:8000?valor=""');
    }
    
    function imprimeTabla($arg) {
        echo '<table><tr><th>';
        echo "Tabla del $arg</th></tr>";
        $sw = true;
        $i=0;
        while($i<=10){
            $res = $i*$arg;
            echo "<tr><td";
            if($sw){
                echo ' style="background: #cccccc;"';
                $sw = false;
            } else {
                $sw = true;
            }
            echo ">$i x $arg = $res </td></tr>";
            $i++;
        }
        echo '</table>';
    }
    
?>
</body>
</html>


            
           
           
            