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
            title = "Concesionario ",
            form = this.parentElement,
            red = form.red.value || form.red.placeholder,
            norte = "norte",
            sur = "sur",
            este = "este",
            oeste = "oeste";
        $("titulo").innerHTML = choose_title;
        $("titulo_red").innerHTML = title + red;
        norte = new backEnd.CarDealership(norte);
        sur = new backEnd.CarDealership(sur);
        este = new backEnd.CarDealership(este);
        oeste = new backEnd.CarDealership(oeste);

        norte.buy_cars("una ", "numberplate", "dateLastrevDate", "buy_price", "sell_price");
        $("prueba").innerHTML = norte.red + " " + norte.vehicles[0]["model"];

        setTable("comprados", "Modelo", "Matricula", "F.Revision", "P.venta");
    }

    function setTable(id, model, numberplate, dateLastrevDate, sell_price) {
        //crear tabla coches comprados
        var row = $(id).insertRow(0),
            cell = row.insertCell(0),
            cell1 = row.insertCell(1),
            cell2 = row.insertCell(2),
            cell3 = row.insertCell(3),
            cell4 = row.insertCell(4);
        //añadir texto
        cell1.innerHTML = model;
        cell2.innerHTML = numberplate;
        cell3.innerHTML = dateLastrevDate;
        cell4.innerHTML = sell_price;
    }


    module.onload = function () {
        $("mostrar").onclick = getInfo;
    };
}(this));
