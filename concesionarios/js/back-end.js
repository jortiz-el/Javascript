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

    module.CarDealership =  function (red) {
        this.red = red;
        this.vehicles = [];
    };

    module.Vehicle = function (model, numberplate, dateLastrevDate, buy_price, sell_price) {
        this.model = model;
        this.numberplate = numberplate;
        this.dateLastrevDate = dateLastrevDate;
        this.buy_price = buy_price;
        this.sell_price = sell_price;
    };

    module.CarDealership.prototype.buy_cars = function (model, numberplate, dateLastrevDate, buy_price, sell_price) {
        this.vehicles.push(new module.Vehicle(model, numberplate, dateLastrevDate, buy_price, sell_price));
    };
    module.CarDealership.prototype.setarrCars = function (red) {
        var cars = Array.from(red.vehicles).map(function (x) {
            return [x.model, x.numberplate, x.dateLastrevDate, x.buy_price, x.sell_price];
        });
        return cars;
    };


    return module;

}(container));
