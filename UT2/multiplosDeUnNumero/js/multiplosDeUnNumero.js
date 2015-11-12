/*jslint browser: true*/
/*jslint evil: true */
/*global prompt, alert*/


var num1 = parseInt(prompt("escribe un numero"), 10);
var i = 0;

if (!isNaN(num1)) {
    for (i = 0; i <= num1; i++) {
        if (num1 % i === 0) {
            document.write(i + "\n");
        }
    }
} else {
    alert("escribe solo numeros correctos ");
}