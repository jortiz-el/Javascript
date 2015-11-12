var nombres = ["jose", "mariano", "pepe", "juan", "paquito"],
	nombre_usuario = prompt("Escribe tu nombre"),
	revisar;

function buscaNombre(lista, nombre) {
	return lista.indexOf(nombre);
}

try {
	if (buscaNombre(nombres, nombre_usuario) != -1) {
		document.write("tu nombre " + nombre_usuario + " esta en la lista");
	} else {
		throw {
			name: "Error de Nombre",
			message: "tu nombre no esta en la lista",
			description: nombre_usuario + " no aparece en la lista de nombres permitidos"
		}
	}
} catch (e) {
	document.write(e.name + ": " + e.message + "<br>");
	document.write("Description: " + e.description + "<br>");
}

/*posibles propiedades 
	.description -> contiene la descripcion del error //trow new error("description")
	.number -> contiene el numero de error //info(https://msdn.microsoft.com/es-es/library/1dk3k160%28v=vs.94%29.aspx)
	.name -> contiene el nombre del error
	.stack -> stack trace
	.message -> contiene el mensaje de error */