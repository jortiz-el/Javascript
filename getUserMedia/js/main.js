var vid = document.getElementById("huskyVideo"),
	can = document.getElementById("lienzo"),
	ima = document.getElementById("image");

function captura() {
	var captura = can.getContext("2d"); //Siempre requerida
	captura.drawImage(vid,1,1,300,120);
	var dataURL = can.toDataURL();
	ima.src = dataURL;

}
can.addEventListener("click",captura, false);
