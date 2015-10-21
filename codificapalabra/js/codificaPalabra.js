var LETRAS = "abcdefghijklmnñopqrstuvwxyz";

function codifica(letra) {
  var i = 0,
    salida,
    control = !(letra === "" || letra === " " || !isNaN(letra));
  while (LETRAS[i] && (LETRAS[i] !== letra) && control) {
    i++;
  }
  if (i < 9 && (LETRAS[i] === letra)) {
    salida = "0" + (i + 1);
  } else if (i > 8 && (LETRAS[i] === letra)) {
    salida = (i + 1);
  } else {
    salida = false;
  }
  return salida;
}