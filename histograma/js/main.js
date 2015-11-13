
var cadena = prompt("escribe una cadena"),
	caracteres = cadena.split(""),
	lista = [],
	val;

letrasNoRepetidas(caracteres, lista);

for (val of lista) {
	if (val == " ") {
		document.write("\" \":" + asteriscos(caracteres, val) + "<br>");
	} else {
		document.write(val + ":" + asteriscos(caracteres, val) + "<br>");
	}
}
