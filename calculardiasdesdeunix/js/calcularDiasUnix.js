

function calculateDaysSinceEpoch(fecha) {
  var i = 0,
    salida,
    errorFormato = "Por favor, introducir la fecha en el formato solicitado",
    errorFecha = "La fecha introducida no es válida",
    dia,
    diasMes,
    diasTotal = 0,
    mes,
    numMes,
    anio;
  while (fecha[i]) {
    i++;
  }
  if (i === 9 && fecha[0] !== " " && fecha[1] !== " ") {
    dia = (fecha[0] + fecha[1]) * 1;
    mes = fecha[2] + fecha[3] + fecha[4];
    anio = (fecha[5] + fecha[6] + fecha[7] + fecha[8]) * 1;
    switch (mes) {
    case "jan":
      numMes = 1;
      diasMes = 31;
      break;
    case "feb":
      if ((!(anio % 4) && (anio % 100)) || !(anio % 400)) {
        diasMes = 29;
      } else {
        diasMes = 28;
      }
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
      salida = errorFormato;
    }
    if (dia > 0 && dia < 32 && salida !== errorFormato) {
      if ((anio >= 1970) && (dia <= diasMes)) {
        while ((numMes - 1) !== 0) {
          if ((numMes - 1) === 2) {
            if ((!(anio % 4) && (anio % 100)) || !(anio % 400)) {
              diasTotal += 29;
            } else {
              diasTotal += 28;
            }
          } else if ((numMes - 1) === 4 || (numMes - 1) === 6 || (numMes - 1) === 9 || (numMes - 1) === 11) {
            diasTotal += 30;
          } else {
            diasTotal += 31;
          }
          numMes--;
        }
        while (anio > 1970) {
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
        salida = errorFecha;
      }
    } else {
      salida = errorFormato;
    }
  } else {
    salida = errorFormato;
  }
  return salida;
}