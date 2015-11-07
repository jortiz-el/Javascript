/*global window*/


function writeScreen() {
    "use strict";
    var result = showVehicleRevisionStatus(window.location.search),
        saludo = id("saludo"),
        solicitud = id("solicitud"),
        sistema = id("sistema");
    saludo.innerHTML = result[0];
    solicitud.innerHTML = result[1];
    sistema.innerHTML = result[2];
}

function id(selector) {
    "use strict";
    return window.document.getElementById(selector);
}
window.onload = writeScreen;