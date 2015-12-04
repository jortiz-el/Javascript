/*jslint
    browser: true*/
/*global
    backEnd, setBuyTable */

(function (module) {
    "use strict";

    function $(id) {
        return document.getElementById(id);
    }


    function getInfo() {
        var choose_title = "",
            title = "Concesionario ",
            form = this.parentElement,
            red = form.red.value || form.red.placeholder,
            norte = "norte",
            sur = "sur",
            este = "este",
            oeste = "oeste",
            arrCars,
            keyRescue,
            arrKeys,
            BLANK = ["tabla","botones","form"],
            MODELS = ["Basic","Homing","Transper","BerlinX","MaximV8"];
         
        $("titulo").innerHTML = choose_title;
        $("titulo_red").innerHTML = title + red;

        norte = new backEnd.CarDealership(norte);
        //Objeto keyRescue vacio para sacar las claves del objeto Vehicle
        keyRescue = new backEnd.CarDealership("keyRescue");
        keyRescue.buy_cars("", "", "", "", "");

        norte.buy_cars("Ford", "AA-23445", "04feb2000", "4000", "7000");
        norte.buy_cars("volvo ", "BB-2323", "12jan2012", "6000", "10000");
        $("prueba").innerHTML = norte.red + " " + norte.vehicles[0].model;

        // Arrays de coches para generar la tabla de coches comprados
        arrCars = norte.setarrCars(norte);
        arrKeys = keyRescue.setarrKeys();




           
        blankSection(BLANK);
        selectModels(MODELS);
        setBuyTable(arrCars);
        buyForm(arrKeys);

         $("comprar").addEventListener("click",buyCar,false);



    }
    function buyCar () {
        var model = $("model").value,
            numberplate = $("numberplate").value,
            dateLastrevDate = $("dateLastrevDate").value,
            buy_price = $("buy_price").value,
            sell_price = $("sell_price").value;
            //red = $("red").value;
            alert(red);
        norte.buy_cars(model, numberplate, dateLastrevDate, buy_price, sell_price);
        getInfo;
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
