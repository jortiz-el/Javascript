/*jslint browser: true*/
/*jslint evil: true */
/*global prompt, alert*/


var num1 = parseInt(prompt("escribe un numero"), 10);
var num2 = parseInt(prompt("escribe otro numero"), 10);


if (!isNaN(num1) && !isNaN(num2)) {
    var media = (num1 + num2) / 2;
    document.write("el valor medio es " + media);

} else {
    alert("escribe solo numeros correctos ");
}