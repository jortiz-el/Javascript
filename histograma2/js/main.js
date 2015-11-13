
var cadena = prompt("escribe una cadena"),
    caracteres = cadena.split(""),
    lista = [],
    val,
    tabla,
    fila,
    texto,
    numeroVeces;    

letrasNoRepetidas(caracteres, lista);


for (val of lista) {

    if (val == " ") {
        document.write("\" \":" + asteriscos(caracteres, val) + "<br>");
    } else {
        document.write(val + ":" + asteriscos(caracteres, val) + "<br>");
    }
}


tabla = document.createElement("table");
for (val of lista) {

    columna = document.createElement("tr");
    fila = document.createElement("td");
    texto = document.createTextNode(val + ":");
    fila.appendChild(texto);
    columna.appendChild(fila);

    numeroVeces = cuenta(caracteres, val);
        for (i = 0; i < numeroVeces; i++) {
            fila = document.createElement("td");
            addClass(fila,'azul');
            columna.appendChild(fila);
            }
            
    tabla.appendChild(columna);
}
document.body.appendChild(tabla);