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

        norte.buy_cars("una PUTA MAYUSCULA!!!!!!!!", "numberplate", "dateLastrevDate", "buy_price", "sell_price");
        $("prueba").innerHTML = norte.red + " " + norte.vehicles[0]["model"];
    }


    module.onload = function () {
        $("mostrar").onclick = getInfo;
    };
}(this));
