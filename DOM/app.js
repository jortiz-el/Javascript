
function main() {

	//globales como espacio de nombres
    var globals = (function (ns) {
        ns.INPUTS = ["Valor", "Clase"];
        return ns;
    }({}));

	function createForm(inputs) {
        var body = document.getElementsByTagName("body"),
        	form = document.createElement("form"),



            
            mostrar = document.createTextNode("mostrar"),
            select = document.createElement("select");
        select.id = "red";
        p.id = "mostrar";
        p.className = "boton";
        form.appendChild(select);
        form.appendChild(p);
        p.appendChild(mostrar);


        arrRed.forEach(function (item, i) {
            var option = document.createElement("option"),
                text = document.createTextNode(item);
            option.value = item;
            option.appendChild(text);
            select.appendChild(option);
        });
    }
}

window.onload = main; 