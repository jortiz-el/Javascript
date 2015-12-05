/*global
    exports */

var MODULENAME = "backEnd",
    haveExports = typeof exports,
    container;

// Browser or Node.js?
// http://caolan.org/posts/writing_for_node_and_the_browser/
if (haveExports === "undefined") {
    container = this[MODULENAME] = {};
} else {
    container = exports;
}

// Module exports
(function (module) {
    "use strict";

    //constructor de la red de concesionarios
    module.RedcarDealership = function () {
    this.red = {"norte": new module.CarDealership("norte"), "sur": new module.CarDealership("sur"),"este": new module.CarDealership("este"),"oeste": new module.CarDealership("oeste") }
    }

   
    //constructor de concesionarios
    module.CarDealership =  function (red) {
        this.red = red;
        this.vehicles = [];
    };
    //constructor de coches
    module.Vehicle = function (model, numberplate, dateLastrevDate, buy_price, sell_price) {
        this.model = model;
        this.numberplate = numberplate;
        this.dateLastrevDate = dateLastrevDate;
        this.buy_price = buy_price;
        this.sell_price = sell_price;
    };
    //comprar coches
    module.CarDealership.prototype.buy_cars = function (model, numberplate, dateLastrevDate, buy_price, sell_price) {
        this.vehicles.push(new module.Vehicle(model, numberplate, dateLastrevDate, buy_price, sell_price));
    };
    //sacar todos los valores de los coches en un array
    module.CarDealership.prototype.setarrCars = function () {
        var cars = Array.from(this.vehicles).map(function (x) {
            return [x.model, x.numberplate, x.dateLastrevDate, x.buy_price, x.sell_price];
        });
        return cars;
    };
    //sacar claves del objeto coche en un array
     module.CarDealership.prototype.setarrKeys = function () {
        return Object.keys(this.vehicles[0]);
     };


    return module;

}(container));
