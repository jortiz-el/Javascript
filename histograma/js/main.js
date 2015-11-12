
var cadena = prompt("escribe una cadena"),
	caracteres = cadena.split(""),
	lista = [],
	val;

letrasNoRepetidas(caracteres, lista);

for (val of lista) {
	document.write(val + ":" + asteriscos(caracteres, val) + "<br>");
}


