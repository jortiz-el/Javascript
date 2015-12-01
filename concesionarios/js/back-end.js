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
    	this.Vehicles = []
    };
    module.Vehicle =  function (model, numberplate, dateLastrevDate, buy_price, sell_price) {
		this.model;
		this.numberplate;
		this.dateLastrevDate;
		this.buy_price;
		this.sell_price;
    };
    module.CarDealership.prototype.buy_cars = function buy_cars(model, numberplate, dateLastrevDate, buy_price, sell_price) {
    	this.Vehicles.push(new Vehicle(model, numberplate, dateLastrevDate, buy_price, sell_price));
    };
    module.CarDealership.prototype.show_vehicles = function show_vehicles(id, model, numberplate, dateLastrevDate, sell_price) {
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

    };




}(container));
