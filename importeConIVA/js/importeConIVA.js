/*jslint browser: true*/
/*jslint evil: true */
/*global prompt, alert*/


var num1 = parseFloat(prompt("escribe un importe (€)"), 10);

if (!isNaN(num1)) {
    var conIVA = num1 * 1.16;
    //escribimos por pantalla el resultado
    document.write("su precio con IVA es : " + conIVA.toFixed(2) + " € <br>");    

} else {
    alert("escribe solo numeros correctos ");
}