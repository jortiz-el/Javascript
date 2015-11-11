
	

function sacacadena() {
	var cadena = prompt("escribe una cadena");
	return cadena;
}
function verrepetido(array, obj) {
	var j,
		bool = 0;
	for (j = 0; j < array.length; j++) {
		if (array[j] == obj) {
			bool = 1;
		} 
	}
	return bool;
}

var i ;
var caracteres = sacacadena().split("");
var cuenta = [];

for (i = 0;i < caracteres.length;i++) {

	if (verrepetido(cuenta, caracteres[i])){
		
	} else {
		cuenta.push(caracteres[i]);
		
	}

	
}
document.write(cuenta + "<br>");