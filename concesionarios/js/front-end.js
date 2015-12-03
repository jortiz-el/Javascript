/*jslint
    browser: true*/
/*global
    backEnd, setBuyTable */

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
            oeste = "oeste",
            arrCars;
        $("titulo").innerHTML = choose_title;
        $("titulo_red").innerHTML = title + red;
        norte = new backEnd.CarDealership(norte);
        sur = new backEnd.CarDealership(sur);
        este = new backEnd.CarDealership(este);
        oeste = new backEnd.CarDealership(oeste);

        norte.buy_cars("Ford", "AA-23445", "04feb2000", "4000", "7000");
        norte.buy_cars("volvo ", "BB-2323", "12jan2012", "6000", "10000");
        $("prueba").innerHTML = norte.red + " " + norte.vehicles[0].model;

        arrCars = norte.setarrCars(norte);

        setBuyTable(arrCars);

    }

    function setBuyTable(arrCars) {
        arrCars.forEach(function (item, i) {
            var row = $("tabla").insertRow(i),
                input = document.createElement("input"),
                cell = row.insertCell(0);
            input.type = "checkbox";
            input.name = "check" + i;
            cell.appendChild(input);

            item.forEach(function (subItem, i) {
                cell = row.insertCell(i);
                cell.innerHTML = subItem;
            });

        });
    }

    function buyForm() {
        return "hello, aqui va el formulario de compra";
    }



/* Estructura para recorrer Arrays Multidimensionales
    array.forEach(function(item, i) {
      item.forEach(function(subItem, i) {
        console.log(subItem);
      });
    });

*/

    module.onload = function () {
        $("mostrar").onclick = getInfo;
    };
}(this));
