

function calculateDaysSinceEpoch(fecha) {
    var i = 0,
        salida,
        ERROR_FORMATO = 'Por favor, introducir la fecha en el formato solicitado',
        ERROR_FECHA = 'La fecha introducida no es válida',
        dia = (fecha[0] + fecha[1]) * 1,
        mes = fecha[2] + fecha[3] + fecha[4],
        anio = (fecha[5] + fecha[6] + fecha[7] + fecha[8]) * 1,
        bisiesto = (!(anio % 4) && (anio % 100)) || !(anio % 400),
        anioUnix = 1970,
        diasTotal = 0,
        diasMes,
        numMes;
    while (fecha[i]) {
        i++;
    }
    if ((i === 9) && (fecha[0] !== " ") && (fecha[1] !== " ")) {
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
        if (dia > 0 && dia < 32 && salida !== ERROR_FORMATO) {
            if ((anio >= anioUnix) && (dia <= diasMes)) {
                while (numMes !== 0) {
                    if (numMes === 2) {
                        diasTotal += (bisiesto)? 29 : 28;
                    } else if (numMes === 4 || numMes === 6 ||
                            numMes === 9 || numMes === 11) {
                        diasTotal += 30;
                    } else {
                        diasTotal += 31;
                    }
                    numMes--;
                }
                anio--;
                while (anio >= anioUnix) {
                    if ((!(anio % 4) && (anio % 100)) ||
                            !(anio % 400)) {
                        diasTotal += 366;
                    } else {
                        diasTotal += 365;
                    }
                    anio--;
                }
                diasTotal += dia - 1;
                salida = diasTotal;
            } else {
                salida = ERROR_FECHA;
            }
        } else {
            salida = ERROR_FORMATO;
        }
    } else {
        salida = ERROR_FORMATO;
    }
    return salida;
}