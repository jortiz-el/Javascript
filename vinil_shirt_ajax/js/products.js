/*jslint
    browser: true, unparam: true, node: true, bitwise: true*/
/*global
    document, ActiveXObject */
function $(id) {
    'use strict';
    return document.getElementById(id);
}
function textNode(string) {
    'use strict';
    return document.createTextNode(string);
}
function setData(datalist) {
    'use strict';
    $('text_search').value = datalist;
    $("livedatasearch").innerHTML = "";
    $("livedatasearch").style.overflow = "visible";
}
function innerJson(data) {
    'use strict';
    $("livedatasearch").innerHTML = "";
    var Json_data = JSON.parse(data);
    Json_data.forEach(function (x) {
        var div = document.createElement("DIV"),
            img = document.createElement("IMG"),
            p = document.createElement("P"),
            text = textNode(x.name);
        p.appendChild(text);
        img.className = 'search_img';
        img.src = 'imagenes/' + x.img;
        div.className = 'livedivsearch';
        div.addEventListener('click', function () {setData(x.name); }, false);
        div.appendChild(img);
        div.appendChild(p);
        $("livedatasearch").appendChild(div);
    });
}
function innerOne(data) {
    'use strict';
    $("ordena").innerHTML = "";
    $("titulo_buscados").innerHTML = "";
    $("productos").innerHTML = "";
    $('text_search').value = "";
    var Json_data = JSON.parse(data);
    Json_data.forEach(function (x) {
        var div_img = document.createElement("DIV"),
            div = document.createElement("DIV"),
            img = document.createElement("IMG"),
            p_name = document.createElement("P"),
            p_price = document.createElement("P"),
            p_desc = document.createElement("P"),
            btn_sell = document.createElement("BUTTON");
        div_img.className = "col-md-4";
        img.src = 'imagenes/' + x.img;
        img.className = "desc_img";
        div_img.appendChild(img);
        div.className = "col-md-8";
        p_name.appendChild(textNode(x.name));
        p_name.className = "title ";
        p_price.appendChild(textNode("Precio: " + x.price));
        p_price.className = "sizetext";
        p_desc.className = "sizetext";
        p_desc.appendChild(textNode("Descripcion: " + x.descrip));
        btn_sell.className = "btn btn-default cyan";
        btn_sell.appendChild(textNode("Comprar"));
        div.appendChild(p_name);
        div.appendChild(p_price);
        div.appendChild(p_desc);
        div.appendChild(btn_sell);
        $("productos").appendChild(div_img);
        $("productos").appendChild(div);
    });
}
function innerLiveData(img, data) {
    'use strict';
    return "<div><img src='imagenes/" + img + "' class='search_img'></img><p>" + data + "</p></div>";
}
function ajaxObject(method, url) {
    'use strict';
    // ? code for IE7+, Firefox, Chrome, Opera, Safari : code for IE6, IE5
    var hr = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    hr.open(method, url, true);
    hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    return hr;
}
function ajaxState(x) {
    'use strict';
    return (x.readyState === 4 && x.status === 200);
}
function liveSearchButton() {
    'use strict';
    var val = $('text_search').value,
        hr,
        vars,
        delay = 4000;
    hr = ajaxObject("POST", 'controllers/Productos.php');

    hr.onreadystatechange = function () {
        if (ajaxState(hr)) {
            var return_data = hr.responseText;
            if (return_data.length !== 2) {
                innerOne(return_data);
                $("livedatasearch").innerHTML = "";
            } else {
                $("livedatasearch").innerHTML = innerLiveData('nodata.png', 'No hay coincidencias con ningun producto');
                $("livedatasearch").style.border = "none";
            }
        }
    };

    vars = 'valor=' + val + '&boton=buscar';
    hr.send(vars);
    $("livedatasearch").innerHTML = innerLiveData('processing.gif', 'Procesando...espera unos segundos');
    $("livedatasearch").style.overflow = "visible";

    setTimeout(function () {
        if (hr.status !== 200) {
            $("livedatasearch").innerHTML = innerLiveData('nodata.png', 'No es posible conectar ...');
        }
    }, delay);
}
function liveSearch(val) {
    'use strict';
    var hr,
        vars,
        delay = 4000;
    if (val.length === 0) {
        $("livedatasearch").innerHTML = "";
        $("livedatasearch").style.border = "0px";
        $("livedatasearch").style.overflow = "visible";
        return;
    }
    hr = ajaxObject("POST", 'controllers/Productos.php');

    hr.onreadystatechange = function () {
        if (ajaxState(hr)) {
            var return_data = hr.responseText;
            if (return_data.length !== 2) {
                innerJson(return_data);
                $("livedatasearch").style.border = "1px solid #A5ACB2";
                $("livedatasearch").style.overflow = "scroll";
                $("live_buscar").addEventListener("click", liveSearchButton, false);

            } else {
                $("livedatasearch").innerHTML = innerLiveData('nodata.png', 'No hay coincidencias con ningun producto');
                $("livedatasearch").style.border = "none";
            }
        }
    };

    vars = 'valor=' + val + '&boton=live_buscar';
    hr.send(vars);
    $("livedatasearch").innerHTML = innerLiveData('processing.gif', 'Procesando...espera unos segundos');
    $("livedatasearch").style.overflow = "visible";
    setTimeout(function () {
        if (hr.status !== 200) {
            $("livedatasearch").innerHTML = innerLiveData('nodata.png', 'No es posible conectar ...');
        }
    }, delay);
}

function innerProducts(data) {
    'use strict';
    //$("livedatasearch").innerHTML="";
    var Json_data = JSON.parse(data);
    Json_data.forEach(function (x) {
        var div = document.createElement("DIV"),
            div_ribon = document.createElement("DIV"),
            span = document.createElement("SPAN"),
            span_price = document.createElement("SPAN"),
            div_img = document.createElement("DIV"),
            img = document.createElement("IMG"),
            div_text = document.createElement("DIV"),
            div_price = document.createElement("DIV");
        div.className = "col-md-4 col-lg-3 col-sm-6 col-xs-9 out_margin";
        if (x.descount === "1") {
            div_ribon.className = "ribbon";
            span.appendChild(textNode("OFERTA"));
            div_ribon.appendChild(span);
            div.appendChild(div_ribon);
            span_price.className = "descuento";
            span_price.appendChild(textNode(parseFloat(x.price) + 5));
            div_price.appendChild(span_price);
        }
        div_img.className = "div-img";
        img.className = "img";
        img.src = "imagenes/" + x.img;
        div_text.className = "text_img";
        div_price.className = "text_img textprice";
        div_img.appendChild(img);
        div_text.appendChild(textNode(x.name));
        div_img.appendChild(div_text);
        div_price.appendChild(textNode(x.price));
        div_img.appendChild(div_price);
        div.appendChild(div_img);
        $('productos').appendChild(div);

    });
}

function showProducts(val, button) {
    'use strict';
    console.log(val);
    var hr,
        vars,
        delay = 4000;
    hr = ajaxObject("POST", 'controllers/Productos.php');
    hr.onreadystatechange = function () {
        if (ajaxState(hr)) {
            var return_data = hr.responseText;
            $("productos").innerHTML = "";
            innerProducts(return_data);
            $("ordenar").addEventListener("click", function () {
                val = $('cajaOrdena').value;
                showProducts(val, "ordena");
            }, false);
        }
    };

    vars = 'valor=' + val + '&boton=' + button;
    hr.send(vars);
    $("productos").innerHTML = innerLiveData('processing2.gif', 'Procesando...espera unos segundos');
    setTimeout(function () {
        if (hr.status !== 200) {
            $("productos").innerHTML = "Problemas de conexion..";
        }
    }, delay);
}

function getVal() {
    'use strict';
    var val = $("text_search").value;
    liveSearch(val);

}
function userEvents() {
    'use strict';
    $("text_search").addEventListener("keyup", getVal, false);
    showProducts("", "inserta");
}

window.onload = userEvents;



