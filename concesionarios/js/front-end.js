/*jslint
    browser: true */
/*global
    taxes */

(function (module) {
    "use strict";

    function $(id) {
        return document.getElementById(id);
    }

    function getInfo() {
        var choose_title = "",
            title = "Concecionario ",
            form = this.parentElement,
            red = form.red.value || form.red.placeholder;
        $("titulo").innerHTML = choose_title;
        $("titulo_red").innerHTML = title + red;
        backEnd.CarDealership.show_vehicles("comprados", "modelo", "matricula", "fecha", "precio");
        
    }

    module.onload = function () {
        $("mostrar").onclick = getInfo;
    };
}(this));
