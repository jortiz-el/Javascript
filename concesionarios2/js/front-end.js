/*jslint
    browser: true */
/*global
    taxes */

(function (module) {
    "use strict";

    function $(id) {
        return document.getElementById(id);
    }

    function CarDealership(red) {
        this.red = red;
        this.vehicles = [];
    }

    function Vehicle(model, numberplate, dateLastrevDate, buy_price, sell_price) {
        this.model = model;
        this.numberplate = numberplate;
        this.dateLastrevDate = dateLastrevDate;
        this.buy_price = buy_price;
        this.sell_price = sell_price;
    }

    CarDealership.prototype.buy_cars = function (model, numberplate, dateLastrevDate, buy_price, sell_price) {
        this.vehicles.push(new Vehicle(model, numberplate, dateLastrevDate, buy_price, sell_price));
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
        norte = new CarDealership(norte);
        sur = new CarDealership(sur);
        este = new CarDealership(este);
        oeste = new CarDealership(oeste);

        norte.buy_cars("ferrari", "AA-3445", "12jan2015", "10000", "15000");
        $("prueba").innerHTML = norte.red + " " + norte.vehicles[0]["model"];
    }


    module.onload = function () {
        $("mostrar").onclick = getInfo;
    };
}(this));
