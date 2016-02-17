
function list_products(valor) {
    
    $.ajax({
        url:'../controllers/Productos.php',
        type: 'POST',
        data: 'valor='+valor+'&boton=buscar'
    }).done( function (resp) {
        var valores = eval(resp);
        valores.forEach(function (x,y) {
            console.clear();
            console.log(x['name']);
        });
    });
}
function insert_table() {
    'use strict';
    clean_section($("lista"));
    var table = create("table"),
        tr = create("tr"),
        td = create("td"),
        numobj;
    tr.appendChild(td);
    table.appendChild(tr);
    globals.Form_data.array_class_unique().forEach(function (x) {
        td = create("td");
        td.appendChild(textNode(x));
        tr.appendChild(td);
    });
    globals.Form_data.array_value_unique().forEach(function (v) {
        tr = create("tr");
        td = create("td");
        td.appendChild(textNode(v));
        tr.appendChild(td);
        globals.Form_data.array_class_unique().forEach(function (c) {
            td = create("td");
            numobj = globals.Form_data.count_datas(c, v);
            td.appendChild(textNode(numobj));
            if (numobj < 2) {
                td.style.color = globals.COLOR_DOWN;
            } else if (numobj > 2) {
                td.style.color = globals.COLOR_UP;
            }
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });
    $("lista").appendChild(table);
}
$(function(){
    $(document).on('keyup', $("#text_search"), function (){
        var value = ($("#text_search").val());
        list_products(value);
    });

});

