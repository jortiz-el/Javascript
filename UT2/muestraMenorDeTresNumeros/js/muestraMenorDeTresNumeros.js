/*jslint browser: true*/
/*jslint evil: true */
/*global prompt, alert*/


var num1 = parseInt(prompt("escribe un numero"), 10);
var num2 = parseInt(prompt("escribe otro numero"), 10);
var num3 = parseInt(prompt("escribe un tercer numero"), 10);

if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
	if (num1 < num2 && num1 < num3) {
		document.writeln("el numero mas pequeño es " + num1);
	}else if (num2 < num3 && num2 < num1) {
		document.writeln("el numero mas pequeño es " + num2);
	}else {
		document.writeln("el numero mas pequeño es " + num3);
	}

} else {
	alert("escribe solo numeros correctos ");
}