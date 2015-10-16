

function calculateDaysSinceEpoch(fecha) {
  var i = 0,
    salida,
    ERRORFORMATO = "Por favor, introducir la fecha en el formato solicitado",
    ERRORFECHA = "La fecha introducida no es válida",
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
  if (i === 9 && fecha[0] !== " " && fecha[1] !== " ") {
    switch (mes) {
    case "jan":
      numMes = 1;
      diasMes = 31;
      break;
    case "feb":
      diasMes = (bisiesto)? 29 : 28;
      numMes = 2;
      break;
    case "mar":
      numMes = 3;
      diasMes = 31;
      break;
    case "apr":
      numMes = 4;
      diasMes = 30;
      break;
    case "may":
      numMes = 5;
      diasMes = 31;
      break;
    case "jun":
      numMes = 6;
      diasMes = 30;
      break;
    case "jul":
      numMes = 7;
      diasMes = 31;
      break;
    case "aug":
      numMes = 8;
      diasMes = 31;
      break;
    case "sep":
      numMes = 9;
      diasMes = 30;
      break;
    case "oct":
      numMes = 10;
      diasMes = 31;
      break;
    case "nov":
      numMes = 11;
      diasMes = 30;
      break;
    case "dec":
      numMes = 12;
      diasMes = 31;
      break;
    default:
      salida = ERRORFORMATO;
    }
    if (dia > 0 && dia < 32 && salida !== ERRORFORMATO) {
      if ((anio >= anioUnix) && (dia <= diasMes)) {
        while ((numMes - 1) !== 0) {
          if ((numMes - 1) === 2) {
            diasTotal += (bisiesto)? 29 : 28; 
          } else if ((numMes - 1) === 4 || (numMes - 1) === 6 || (numMes - 1) === 9 || (numMes - 1) === 11) {
            diasTotal += 30;
          } else {
            diasTotal += 31;
          }
          numMes--;
        }
        while (anio > anioUnix) {
          if ((!((anio - 1) % 4) && ((anio - 1) % 100)) || !((anio - 1) % 400)) {
            diasTotal += 366;
          } else {
            diasTotal += 365;
          }
          anio--;
        }
        diasTotal += dia - 1;
        salida = diasTotal;
      } else {
        salida = ERRORFECHA;
      }
    } else {
      salida = ERRORFORMATO;
    }
  } else {
    salida = ERRORFORMATO;
  }
  return salida;
}