/*jslint
    browser: true, unparam: true, node: true, bitwise: true*/
/*global
    backEnd, setBuyTable, hiddenBlocks, blankSection, selectModels,
    buyForm, caltotals, buyCar, fillCar, arrsellCar, sellCar, x, form */

(function (module) {
    "use strict";

    function $(id) {
        return document.getElementById(id);
    }

    //globales como espacio de nombres
    var globals = (function (ns) {
        ns.RED = ["norte", "sur", "este", "oeste"];
        ns.MODELS = ["Basic", "Homing", "Transper", "BerlinX", "MaximV8"];
        ns.BLANK = ["tabla", "botones", "form", "error_msg"];
        ns.redDealership = new backEnd.RedcarDealership();
        return ns;
    }({}));

    function getDealership(net) {
        var dealership = globals.redDealership.red[net];
        return dealership;
    }

    function selectRed(arrRed) {
        var form = $("concesionarios"),
            p = document.createElement("p"),
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

    function caltotals() {
        var red = $("red").value,
            dealership = getDealership(red),
            benefits = dealership.calculateBenefits(dealership);
        $("total").innerHTML = "Beneficios<br>" + benefits;
    }



    function fillCar() {
        var arr = arrsellCar(),
            idx = arr[0],
            red = $("red").value,
            dealership = getDealership(red),
            arrCars = dealership.fill_cars(idx);
        blankSection(globals.BLANK);
        $("titulo_compra").innerHTML = " ";
        $("total").style.display = "none";
        setBuyTable(arrCars);

    }

    function buyCar() {
        var model = $("model").value,
            numberplate = $("numberplate").value,
            dateLastrevDate = $("dateLastrevDate").value,
            buy_price = $("buy_price").value,
            sell_price = $("sell_price").value,
            red = $("red").value,
            dealership = getDealership(red);
        if (dealership.validateEntry(numberplate, dateLastrevDate, buy_price, sell_price)) {
            $("error_msg").innerHTML = dealership.validateEntry(numberplate, dateLastrevDate, buy_price, sell_price);
        } else {
            dealership.buy_cars(model, numberplate, dateLastrevDate, buy_price, sell_price);
            getInfo();
        }
    }

    //array de inputs selecionados
    function arrsellCar() {
        var inp = $("tabla").getElementsByTagName('input'),
            arrsell = Array.from(inp).map(function (el, idx) {
                if (inp[idx].checked === true) {
                    return idx;
                }
            });

        return arrsell.filter(function (x) {
            return x !== undefined;
        });
    }

    function sellCar() {
        var arr = arrsellCar(),
            red = $("red").value,
            dealership = getDealership(red);
        arr.sort(function (x, y) {
            return (x < y);
        });
        dealership.sell_cars(arr);
        getInfo();
    }

    function setBuyTable(arrCars) {

        var tabla = $("tabla"),
            sell = document.createElement("input"),
            filt = document.createElement("input"),
            buttons = $("botones");
        arrCars.forEach(function (item, i) {
            var row = tabla.insertRow(i),
                input = document.createElement("input"),
                cell = row.insertCell(0);
            input.type = "checkbox";
            input.name = i;
            cell.appendChild(input);

            item.forEach(function (subItem, i) {
                cell = row.insertCell(i);
                cell.innerHTML = subItem;
            });
        });
        //botones filtrar y vender
        sell.value = "Vender";
        sell.type = "button";
        sell.className = "boton";
        sell.id = "vender";
        filt.value = "Filtrar";
        filt.type = "button";
        filt.className = "boton";
        filt.id = "filtrar";
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
            var option = document.createElement("option");
            text = document.createTextNode(item);
            option.value = item;
            option.appendChild(text);
            select.appendChild(option);
        });
    }



    function buyForm(arrKeys) {
        arrKeys = arrKeys.filter(function (value) {
            return value !== "model";
        });
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
        blank.map(function (x) {
            $(x).innerHTML = "";
        });
    }

    function hiddenBlocks(arr) {
        if (arr.length === 0) {
            $("total").style.display = "none";
            $("botones").style.display = "none";
        } else {
            $("total").style.display = "block";
            $("botones").style.display = "block";
        }
    }

    function getInfo() {
        var choose_title = "", //variable vacia solo para borrar titulo inicial
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
        $("titulo_compra").innerHTML = buy_title + " " + red;

        //Objeto keyRescue vacio para sacar las claves del objeto Vehicle
        keyRescue = new backEnd.CarDealership("keyRescue");
        keyRescue.buy_cars("", "", "", "", "");

        dealership = getDealership(red);

        // Arrays de coches para generar la tabla de coches comprados
        arrCars = dealership.setarrCars();
        arrKeys = keyRescue.setarrKeys();

        //esconder botones y beneficios si no hay coches en concesionario
        hiddenBlocks(arrCars);

        blankSection(globals.BLANK);
        selectModels(globals.MODELS);
        setBuyTable(arrCars);
        buyForm(arrKeys);
        caltotals();

        $("comprar").addEventListener("click", buyCar, false);
        $("vender").addEventListener("click", sellCar, false);
        $("filtrar").addEventListener("click", fillCar, false);

    }

    module.onload = function () {
        selectRed(globals.RED);
        $("mostrar").onclick = getInfo;

    };
}(this));