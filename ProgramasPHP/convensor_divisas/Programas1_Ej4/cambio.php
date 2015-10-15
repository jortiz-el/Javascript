<?php
     if(!isset($_POST['botonenvio'])){
        header('Location: http://localhost:8000');
     }
     else{
         $datos = $_POST['datos'];
         $cantidad = $datos['cantidad'];
         $divisa1 = $datos['divisa1'];
         $divisa2 = $datos['divisa2'];
         switch ($divisa1)
         {
             case "USD":
                 switch ($divisa2)
                {
                    case "USD":
                        $cambio = $cantidad;
                        break;
                    case "EUR":
                        $cambio = $cantidad * 0.89435;
                        break;
                    case "GBP":
                        $cambio = $cantidad * 0.65914;
                        break;
                    case "CNY":
                        $cambio = $cantidad * 6.37248;
                        break;
                }
                 break;
             case "EUR":
                  switch ($divisa2)
                {
                    case "USD":
                        $cambio = $cantidad * 1.11810;
                        break;
                    case "EUR":
                        $cambio = $cantidad * 1;
                        break;
                    case "GBP":
                        $cambio = $cantidad * 0.73698;
                        break;
                    case "CNY":
                        $cambio = $cantidad * 7.12502;
                        break;
                }
                 break;
             case "GBP":
                  switch ($divisa2)
                {
                    case "USD":
                        $cambio = $cantidad * 1.51709;
                        break;
                    case "EUR":
                        $cambio = $cantidad * 1.35680;
                        break;
                    case "GBP":
                        $cambio = $cantidad * 0.65914;
                        break;
                    case "CNY":
                        $cambio = $cantidad * 0.10343;
                        break;
                }
                 break;
             case "CNY":
                  switch ($divisa2)
                {
                    case "USD":
                        $cambio = $cantidad * 0.15692;
                        break;
                    case "EUR":
                        $cambio = $cantidad * 0.14035;
                        break;
                    case "GBP":
                        $cambio = $cantidad * 0.10343;
                        break;
                    case "CNY":
                        $cambio = $cantidad * 1;
                        break;
                }
                 break;
         }
         
       echo "<h1>$cantidad $divisa1 son $cambio $divisa2</h1>";
 }      
        
        


