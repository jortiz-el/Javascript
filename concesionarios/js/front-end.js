/*jslint
    browser: true */
/*global
    taxes */

(function (module) {
    "use strict";

    function $(id) {
        return document.getElementById(id);
    }

    function getInfo() {
        var choose_title = "",
            title = "Concecionario ",
            form = this.parentElement,
            red = form.red.value || form.red.placeholder;
        $("titulo").innerHTML = choose_title;
        $("titulo_red").innerHTML = title + red;
        //crear tabla coches comprados
        var row = $("comprados").insertRow(0),
            cell = row.insertCell(0),
            cell1 = row.insertCell(1),
            cell2 = row.insertCell(2),
            cell3 = row.insertCell(3),
            cell4 = row.insertCell(4);
        //añadir texto
        cell1.innerHTML = "Modelo";
        cell2.innerHTML = "Matricula";
        cell3.innerHTML = "F.Revisión";
        cell4.innerHTML = "Precio";

    }

    module.onload = function () {
        $("mostrar").onclick = getInfo;
    };
}(this));
