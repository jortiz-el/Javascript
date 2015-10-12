<html>
    <head>
        <title>Resultados</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <style>
            h2{
                align: center;
            }
        </style>
    </head>
    <body>
<?php
    function miraPalabra($palabras) {
        $palabras = strtolower($palabras);
        return ($palabras === "el" || $palabras === "la" || $palabras === "los" || $palabras === "las");
    }
     if(!isset($_POST['botonenvio'])) {
          header('Location: http://localhost:8000');
    } else {
        $texto = $_POST['texto'];
        $token = "\r :\n\t,;.";
        $palabras = strtok($texto, $token);
        $numeros = 0;
        while ($palabras !== false) {
            if(miraPalabra($palabras)) {
                $numeros++;
            }
            $palabras = strtok($token);
        }
        echo "<h1>Hay un total de $numeros articulos";
    }
?>
    </body>
</html>
