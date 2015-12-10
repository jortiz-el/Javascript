/*jslint
    browser: true, unparam: true, node: true*/
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
    //globales como espacio de nombres
    var globals = (function (ns) {
        ns.NP_FORMAT = new RegExp("(^[A-Z]{1,2}-\\d{4}-([A-N]|[O-Z]){1,2}$)|" +
            "(^\\d{4}-([A-N]|[O-Z]){3}$)", "i");
        ns.arr_nplate = []; //array para controlar matriculas repetidas
        return ns;
    }({}));

    //constructor de la red de concesionarios
    module.RedcarDealership = function () {
        this.red = {
            "norte": new module.CarDealership("norte"),
            "sur": new module.CarDealership("sur"),
            "este": new module.CarDealership("este"),
            "oeste": new module.CarDealership("oeste")
        };
    };
    //constructor de concesionarios
    module.CarDealership = function (red) {
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
        globals.arr_nplate.push(numberplate);
    };
    //vender coches
    module.CarDealership.prototype.sell_cars = function (arr) {
        var vehicles = this.vehicles;
        arr.map(function (x) {
            if (vehicles[x]) {
                vehicles.splice(x, 1);
            }
        });
    };
    //filtrar modelos de coche
    module.CarDealership.prototype.fill_cars = function (idx) {
        var vehicle = this.vehicles[idx],
            cars = Array.from(this.vehicles).map(function (x) {
                if (vehicle.model === x.model) {
                    return [x.model, x.numberplate, x.dateLastrevDate, x.buy_price, x.sell_price];
                }
            });
        return cars.filter(function (x) {
            return x !== undefined;
        });
    };
    //calculo de beneficio
    module.CarDealership.prototype.calculateBenefits = function (red) {
        var sells = [],
            buys = [],
            benefits;
        Array.from(red.vehicles).map(function (x) {
            sells.push(x.sell_price);
        });
        Array.from(red.vehicles).map(function (x) {
            buys.push(x.buy_price);
        });
        sells = sells.reduce(function (sum, el) {
            return parseInt(sum, 10) + parseInt(el, 10);
        }, 0);
        buys = buys.reduce(function (sum, el) {
            return parseInt(sum, 10) + parseInt(el, 10);
        }, 0);
        benefits = sells - buys;
        return benefits;
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
    //codigo reutilizado de revision vehiculo
    function testNumberplate(numberplate) {
        return (globals.NP_FORMAT.test(numberplate) && (globals.arr_nplate.indexOf(numberplate) === -1));
    }

    function calculateDays(fecha) {
        var i = 0,
            salida,
            ERROR_FORMATO = false,
            dia = +(fecha[0] + fecha[1]),
            mes = fecha[2] + fecha[3] + fecha[4],
            anio = +(fecha[5] + fecha[6] + fecha[7] + fecha[8]),
            bisiesto = (!(anio % 4) && (anio % 100)) || !(anio % 400),
            diasMes;
        while (fecha[i]) {
            i += 1;
        }
        if ((i === 9) && (fecha[0] !== " ") && (fecha[1] !== " ") &&
                (fecha[5] !== " ") && (fecha[8] !== " ")) {
            switch (mes) {
            case "jan":
            case "mar":
            case "may":
            case "jul":
            case "aug":
            case "oct":
            case "dec":
                diasMes = 31;
                break;
            case "feb":
                diasMes = bisiesto ? 29 : 28;
                break;
            case "apr":
            case "jun":
            case "sep":
            case "nov":
                diasMes = 30;
                break;
            default:
                salida = ERROR_FORMATO;
            }
            if ((dia > 0) && (salida !== ERROR_FORMATO) && (anio > 0) && (dia <= diasMes)) {
                salida = true;
            } else {
                salida = ERROR_FORMATO;
            }
        } else {
            salida = ERROR_FORMATO;
        }
        return salida;
    }
    module.CarDealership.prototype.validateEntry = function (numberplate, dateLastrevDate, buy_price, sell_price) {
        var nplate_msg = "matrícula inválida",
            dlrdate_msg = "fecha inválida",
            price_msg = "precio venta menor que precio compra",
            no_msg = false,
            salida;
        if (testNumberplate(numberplate)) {
            if (calculateDays(dateLastrevDate)) {
                if (parseInt(sell_price, 10) > parseInt(buy_price, 10)) {
                    salida = no_msg;
                } else {
                    salida = price_msg;
                }
            } else {
                salida = dlrdate_msg;
            }

        } else {
            salida = nplate_msg;
        }
        return salida;
    };



    return module;

}(container));