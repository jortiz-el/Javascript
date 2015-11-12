/*global globals, NP_FORMAT, DATE_TODAY, GOOD_MORNING, GOOD_AFTERNOON, GOOD_NIGHT,
UN_ANIO, NOREVISION, INSPECTION_MSG_PRE, INSPECTION_MSG_SUF, ERROR_DATE, ERROR_NPLATE*/

(function (exports) {
    "use strict";
    var globals = require("./globals.js");

    exports.showVehicleRevisionStatus = function (queryString) {

        var greeting = "",
            message = "",
            browserAndSO = "";

        String.prototype.sacarPrimero = function () {
            var firstEqual = this.indexOf('=') + 1;
            var findAnd = this.search('&');
            return this.substring(firstEqual, findAnd);
        };
        String.prototype.sacarSegundo = function () {
            var lastEqual = this.lastIndexOf('=') + 1;
            return this.substring(lastEqual);
        };
        function reverseQueryString(queryString) {
            var output;
            if (queryString[1] === "n") {
                output = queryString;
            } else {
                output = "?" + queryString.substring(queryString.search("&") + 1) +
                        "&" + queryString.substring(1, queryString.search("&"));
            }
            return output;
        }
        function testNumberplate(numberplate) {
            return globals.NP_FORMAT.test(numberplate);
        }
        function randomCompany(company) {
            var com = company.split(" ");
            return com[Math.floor(Math.random() * com.length)];
        }
        function calculateHour() {
            var hour = globals.DATE_TODAY.getHours(),
                saludo;
            if ((hour >= 0) && (hour < 13)) {
                saludo = 1; //buenos dias
            } else if (hour >= 13 && (hour < 20)) {
                saludo = 2; //buenas tardes
            } else {
                saludo = 3; //buenas noches
            }
            return saludo;
        }
        function calculateDays(fecha) {
            var i = 0,
                salida,
                ERROR_FORMATO = false,
                dia = (fecha[0] + fecha[1]) * 1,
                mes = fecha[2] + fecha[3] + fecha[4],
                anio = (fecha[5] + fecha[6] + fecha[7] + fecha[8]) * 1,
                bisiesto = (!(anio % 4) && (anio % 100)) || !(anio % 400),
                fecharevision = new Date(),
                diaMsg = 60 * 60 * 24 * 1000,
                diasTotal = 0,
                diasMes,
                numMes;
            while (fecha[i]) {
                i++;
            }
            if ((i === 9) && (fecha[0] !== " ") && (fecha[1] !== " ") &&
                    (fecha[5] !== " ") && (fecha[8] !== " ")) {
                switch (mes) {
                case "jan":
                    numMes = 0;
                    diasMes = 31;
                    break;
                case "feb":
                    diasMes = bisiesto ? 29 : 28;
                    numMes = 1;
                    break;
                case "mar":
                    numMes = 2;
                    diasMes = 31;
                    break;
                case "apr":
                    numMes = 3;
                    diasMes = 30;
                    break;
                case "may":
                    numMes = 4;
                    diasMes = 31;
                    break;
                case "jun":
                    numMes = 5;
                    diasMes = 30;
                    break;
                case "jul":
                    numMes = 6;
                    diasMes = 31;
                    break;
                case "aug":
                    numMes = 7;
                    diasMes = 31;
                    break;
                case "sep":
                    numMes = 8;
                    diasMes = 30;
                    break;
                case "oct":
                    numMes = 9;
                    diasMes = 31;
                    break;
                case "nov":
                    numMes = 10;
                    diasMes = 30;
                    break;
                case "dec":
                    numMes = 11;
                    diasMes = 31;
                    break;
                default:
                    salida = ERROR_FORMATO;
                }
                if ((dia > 0) && (dia < 32) && (salida !== ERROR_FORMATO) && (anio > 0)) {
                    if (dia <= diasMes) {
                        fecharevision.setDate(dia);
                        fecharevision.setMonth(numMes);
                        fecharevision.setFullYear(anio);
                        diasTotal = Math.round((globals.DATE_TODAY - fecharevision) / diaMsg);
                        if (diasTotal >= 0) {
                            salida = diasTotal;
                        } else {
                            salida = ERROR_FORMATO;
                        }
                    } else {
                        salida = ERROR_FORMATO;
                    }
                } else {
                    salida = ERROR_FORMATO;
                }
            } else {
                salida = ERROR_FORMATO;
            }
            return salida;
        }

        queryString = reverseQueryString(queryString);
        if (testNumberplate(queryString.sacarPrimero())) {
            if (calculateDays(queryString.sacarSegundo())) {
                if (calculateHour() === 1) {
                    greeting = globals.GOOD_MORNING;
                } else if (calculateHour() === 2) {
                    greeting = globals.GOOD_EVENING;
                } else {
                    greeting = globals.GOOD_NIGHT;
                }
                if (calculateDays(queryString.sacarSegundo()) <= globals.UN_ANIO) {
                    message = globals.NOREVISION;
                } else {
                    message = globals.INSPECTION_MSG_PRE +
                            randomCompany(globals.COMPANIES) + globals.INSPECTION_MSG_SUF;
                }
            } else {
                greeting = globals.ERROR_DATE;
            }
        } else {
            greeting = globals.ERROR_NPLATE;
        }

        return [greeting, message, browserAndSO];
    };
})(this);
