/*jslint
    browser: true*/
/*global
    backEnd, setBuyTable */

(function (module) {
    "use strict";

    function $(id) {
        return document.getElementById(id);
    }

    //globales como espacio de nombres
    var globals = function (ns) {
    ns.RED = ["Norte", "Sur", "Este", "Oeste"];
    ns.MODELS = ["Basic", "Homing", "Transper", "BerlinX", "MaximV8"];
    ns.BLANK = ["tabla","botones","form"];
    ns.redDealership = new backEnd.RedcarDealership();
    ns.count = 0;
    return ns;
    }({});


    function getInfo() {
        var choose_title = "",//variable vacia solo para borrar titulo inicial
            buy_title = "Formulario de compra ",
            title = "Concesionario ",
            form = $("concesionarios"),
            red = form.red.value || form.red.placeholder,
            arrCars,
            keyRescue,
            arrKeys,
            dealership;
        
        //titulos de la pagina  
        $("titulo").innerHTML = choose_title;
        $("titulo_red").innerHTML = title + red;
        $("prueba").innerHTML = buy_title + " " + red;

        //Objeto keyRescue vacio para sacar las claves del objeto Vehicle
        keyRescue = new backEnd.CarDealership("keyRescue");
        keyRescue.buy_cars("", "", "", "", "");

        globals.count ++;
        //alert(globals.count);
        
        
        dealership = getDealership(red);

        // Arrays de coches para generar la tabla de coches comprados
        arrCars = dealership.setarrCars();
        arrKeys = keyRescue.setarrKeys();
           
        blankSection(globals.BLANK);
        selectModels(globals.MODELS);
        setBuyTable(arrCars);
        buyForm(arrKeys);

         $("comprar").addEventListener("click",buyCar,false);

    }
    

  
    function buyCar() {
        var model = $("model").value,
            numberplate = $("numberplate").value,
            dateLastrevDate = $("dateLastrevDate").value,
            buy_price = $("buy_price").value,
            sell_price = $("sell_price").value,
            red = $("red").value,
            dealership = getDealership(red);
        dealership.buy_cars(model, numberplate, dateLastrevDate, buy_price, sell_price);
        getInfo();
    }
 
    function getDealership(net) {
        var dealership = globals.redDealership.red[net];
        return dealership;
    }

    function setBuyTable(arrCars) {

        var tabla = $("tabla");
        arrCars.forEach(function (item, i) {
            var row = tabla.insertRow(i),
                input = document.createElement("input"),
                cell = row.insertCell(0);
            input.type = "checkbox";
            input.name = "check" + i;
            cell.appendChild(input);

            item.forEach(function (subItem, i) {
                cell = row.insertCell(i);
                cell.innerHTML = subItem;
            });
        });
        //botones filtrar y vender
        var sell = document.createElement("input"),
            filt = document.createElement("input"),
            buttons = $("botones");
        sell.value = "Vender";
        sell.type = "button";
        sell.className = "boton";
        filt.value = "Filtrar";
        filt.type = "button";
        filt.className = "boton";
        buttons.appendChild(sell);
        buttons.appendChild(filt);
    }
    function selectModels(arrmodels) {
        var form = $("form"),
            label = document.createElement("label"),
            text = document.createTextNode("Model: "),
            div = document.createElement("div"),
            select = document.createElement("select");
            select.id = "model";
            form.appendChild(div);
            div.appendChild(label);
            div.appendChild(select);
            label.appendChild(text);

            arrmodels.forEach(function (item, i) {
                var option = document.createElement("option"),
                    text = document.createTextNode(item);
                    option.value = item;
                    option.appendChild(text);
                    select.appendChild(option);
                
            })

    }

    function buyForm(arrKeys) {
        arrKeys = arrKeys.filter(function (value){
            return value != "model";
        })
        //imputs text dinamicos
        arrKeys.forEach(function (item, i) {
            var form = $("form"),
                label = document.createElement("label"),
                text = document.createTextNode(item + ": "),
                input = document.createElement("input"),
                div = document.createElement("div");
            input.type = "text";
            input.id = item;
            input.required = true;
            div.appendChild(label);
            label.appendChild(text);
            div.appendChild(input);
            form.appendChild(div);

        });
        //boton comprar
        var buy = document.createElement("input");
        buy.value = "Comprar";
        buy.type = "button";
        buy.className = "boton";
        buy.id = "comprar";
        form.appendChild(buy);
    }
    function blankSection(blank) {
        //borrar datos 
        blank.map(function (x){ return $(x).innerHTML = "";})
    }


/* Estructura para recorrer Arrays Multidimensionales
    array.forEach(function(item, i) {
      item.forEach(function(subItem, i) {
        console.log(subItem);
      });
    });

*/

    module.onload = function () {
        $("mostrar").onclick = getInfo;
        
    };
}(this));
