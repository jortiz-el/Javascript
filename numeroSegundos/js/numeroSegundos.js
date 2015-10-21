/*jslint browser: true*/
/*jslint evil: true */
/*global prompt, alert*/


var num1 = parseFloat(prompt("escribe 1er lado del triangulo"), 10);
var num2 = parseFloat(prompt("escribe 2do lado del triangulo"), 10);
var num3 = parseFloat(prompt("escribe 3er lado del triangulo"), 10);

if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
    if (num1 === num2 && num1 === num3) {
        document.write("El triangulo es equilatero");
    } else if ((num1 === num2 && num1 !== num3) || (num1 !== num2 && num1 === num3) || (num1 !== num2 && num2 === num3)) {
        document.write("El triangulo es isósceles");
    } else {
        document.write("El triangulo es escaleno");
    }
} else {
    alert("escribe solo numeros correctos ");
}