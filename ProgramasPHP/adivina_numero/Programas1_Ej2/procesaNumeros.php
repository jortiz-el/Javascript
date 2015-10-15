<?php
if(isset($_POST['botonenvio']))
{
    header('Location: http://localhost:8000');
}
else
{
    $numeros = $_POST['num'];
    $sol = rand($numeros['min'],$numeros['max']);
}
echo "$sol";
?>