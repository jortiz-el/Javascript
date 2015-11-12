
var palabra,
	palabras = [],
	longitud,
	lista;

do {
palabra = prompt("escribe una palabra");
palabras.push(palabra);

} while (palabra != "");

palabras.pop();
longitud = palabras.length;


document.write("Primera palabra introducida: " + palabras[0] + "<br>");
document.write("Última palabra introducida: " + palabras[longitud - 1] + "<br>");
document.write("Número total de palabras: " + longitud + "<br>");
/*ordena palabras para mostrar la lista*/
palabras.sort();
lista = palabras.join(",");
document.write("Lista de palabras: " + lista + "<br>");