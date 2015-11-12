/*jslint browser: true*/
/*jslint evil: true */
/*global prompt, alert*/


var num1 = parseInt(prompt("escribe un numero"), 10);
var i;

if (!isNaN(num1) && num1 > 1) {
document.writeln("la cuenta atras es: <br>");
for (i = num1; i >= 0; i--) {
  document.writeln(i);
}
} else {
	alert("escribe un numero correcto mayor a 1");
}