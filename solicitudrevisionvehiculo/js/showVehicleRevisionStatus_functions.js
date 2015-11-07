/*global NP_FORMAT, A_YEAR, DATE_TODAY, ERROR_NPLATE, ERROR_DATE, GOOD_MORNING,
 GOOD_AFTERNOON, GOOD_NIGHT, NOREVISION, REVISION_FIRST, REVISION_LAST, COMPANIES,
 reverseQueryString, first_parameter, second_parameter, testNumberplate, calculateDays,
 calculateHour, calculateDays, randomCompany, window*/
 /*unused: false*/

function first_parameter(queryString) {
    "use strict";
    var firstEqual = queryString.indexOf('=') + 1;
    var findAnd = queryString.search('&');
    return queryString.substring(firstEqual, findAnd);
}
function second_parameter(queryString) {
    "use strict";
    var lastEqual = queryString.lastIndexOf('=') + 1;
    return queryString.substring(lastEqual);
}
function reverseQueryString(queryString) {
    "use strict";
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
    "use strict";
    return NP_FORMAT.test(numberplate);
}
function randomCompany(company) {
    "use strict";
    var com = company.split("|");
    return com[Math.floor(Math.random() * com.length)];
}
function calculateHour() {
    "use strict";
    var hour = DATE_TODAY.getHours(),
        greatting;
    if ((hour >= 0) && (hour < 13)) {
        greatting = GOOD_MORNING; //buenos dias
    } else if (hour >= 13 && (hour < 20)) {
        greatting = GOOD_AFTERNOON; //buenas tardes
    } else {
        greatting = GOOD_NIGHT; //buenas noches
    }
    return greatting;
}
function getCPUInfo() {
    "use strict";
    var userAgent = window.navigator.userAgent,
        browser,
        os;
    if (userAgent.indexOf('MSIE') !== -1) {
        browser = "Internet Explorer ";
    } else {
        if (userAgent.indexOf("Edge") !== -1) {
            browser = "Microsoft Edge";
        } else {
            if (userAgent.indexOf('OPR') !== -1) {
                browser = "Opera";
            } else {
                if (userAgent.indexOf('Firefox') !== -1) {
                    browser = "Mozilla Firefox ";
                } else {
                    if (userAgent.indexOf('chrome') !== -1) {
                        browser = "Google Chrome";
                    } else {
                        browser = "sin identificar";
                    }
                }
            }
        }
    }
    if (userAgent.indexOf('Ubuntu') !== -1) {
        os = "Ubuntu";
    } else {
        if (userAgent.indexOf('Linux') !== -1) {
            os = "Linux";
        } else {
            if (userAgent.indexOf('Windows') !== -1) {
                os = "Windows";
            } else {
                if (userAgent.indexOf('Mac') !== -1) {
                    os = "Macintosh";
                } else {
                    os = "sin identificar";
                }
            }
        }
    }
    return "Navegador: " + browser + " / Sistema Operativo: " + os;
}
function calculateDays(fecha) {
    "use strict";
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
                diasTotal = Math.round((DATE_TODAY - fecharevision) / diaMsg);
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