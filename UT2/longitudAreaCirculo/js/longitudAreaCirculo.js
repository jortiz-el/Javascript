/*jslint browser: true*/
/*jslint evil: true */
/*global prompt, alert*/


var num1 = parseFloat(prompt("escribe el radio de una circunferencia"), 10);
var i = 0;

if (!isNaN(num1)) {
    var longitud = 2 * num1 * Math.PI;
    var area = Math.pow(num1, 2) * Math.PI;
    //escribimos por pantalla el resultado
    document.write("con radio : " + num1 + "<br>");
    document.write("La longitud de la circunferencia es : " + longitud.toFixed(2) + " m <br>");
    document.write("El area de la circunferencia es : " + area.toFixed(2) + " m2");

} else {
    alert("escribe solo numeros correctos ");
}