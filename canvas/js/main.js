function dibujarCuadro() {
	var lienzo = document.getElementById("lienzo");
	var trabajo = lienzo.getContext("2d"); //Siempre requerida
	trabajo.fillStyle="#666";
	trabajo.fillRect(150,150,300,300);
}
