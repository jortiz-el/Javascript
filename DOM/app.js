//globales como espacio de nombres
var globals = (function (ns) {
    ns.INPUTS = ["Valor", "Clase"];
    ns.BUTTONS = ["añadir", "eliminar", "tabla"];
    ns.TITLE = "Manipulación de documentos a través del DOM";
    ns.form_data = new form_data();
    ns.COLOR_DOWN = "#78C700"; 
    ns.COLOR_UP = "#CA1D1F"; 
    return ns;
}({}));

function form_data() {
    this.datas = [];
}
function data(valor, clase) {
    this.valor = valor;
    this.clase = clase;
}
form_data.prototype.insert = function (valor, clase) {
    this.datas.push(new data(valor, clase));
}
form_data.prototype.array_class_unique = function () {
    var arr_class = this.datas.map(function (x) {
        return x.clase;
    }).filter(function (element, index, arrayMap) {
        return arrayMap.indexOf(element) === index;
    });
    return arr_class;
};
form_data.prototype.array_value_unique = function () {
    var arr_value = this.datas.map(function (x) {
        return x.valor;
    }).filter(function (element, index, arrayMap) {
        return arrayMap.indexOf(element) === index;
    });
    return arr_value;
};
form_data.prototype.count_datas = function (clase, valor) {
    var num = this.datas.reduce(function (x, y) {
        return (y.clase === clase && y.valor === valor) ? x + 1 : x;
    }, 0);
    return num;
};

function $(id) {
    return document.getElementById(id);
}
function textNode(text) {
   return document.createTextNode(text);
}
function create(element) {
    return document.createElement(element);
}

function createTextForm(inputs) {
    var form = create("form");
        document.body.appendChild(form);

        inputs.forEach(function (item) {
        var input = create("input"),
            label = create("label"),
            text = textNode(item);
        form.appendChild(label);
        label.appendChild(text);
        input.type = "text";
        input.name = item;
        form.appendChild(input);
        });
}
function create_sec_List() {
    var sec = create("section");
    sec.id = "lista";
    document.body.appendChild(sec);
}
function clean_section(item) {
    Array.from(item.children).forEach(function(x){x.remove();})
}
function update() {
    ($("tabla").textContent === "tabla")?insert_list():insert_table();
}
function add_data() {
    var valor = document.forms[0].children[1].value,
        clase = document.forms[0].children[3].value;
        globals.form_data.insert(valor, clase);
        insert_select();        
}
function delete_list() {
    var select = document.getElementsByTagName("SELECT")[0],
        ul = document.getElementsByTagName("UL")[0],
        selected = select.selectedIndex;
        document.querySelector("." + select.children[selected].value).remove();
        select.removeChild(select.children[selected]);
}
function insert_list() {
    clean_section($("lista"));
    var ul = create("ul");
        globals.form_data.datas.forEach(function (x) {
            var li = create("li");
            li.appendChild(textNode(x.valor));
            li.className = x.clase;
            ul.appendChild(li);
        });
        $("lista").appendChild(ul);
}
function insert_select() {
    clean_section($("selector"));
    globals.form_data.array_class_unique().forEach(function (x) {
        var opt = create("option");
        opt.appendChild(textNode(x));
        opt.value = x;
        $("selector").appendChild(opt);
    });
}
function insert_table() {
    clean_section($("lista"));
    var table = create("table"),
        tr = create("tr"),
        td = create("td"),
        numobj;
        tr.appendChild(td);
        table.appendChild(tr);
        globals.form_data.array_class_unique().forEach(function (x) {
            td = create("td");
            td.appendChild(textNode(x));
            tr.appendChild(td);
        });
        globals.form_data.array_value_unique().forEach(function (v) {
            tr = create("tr");
            td = create("td");
            td.appendChild(textNode(v));
            tr.appendChild(td);
            globals.form_data.array_class_unique().forEach(function (c) {
                td = create("td");
                numobj = globals.form_data.count_datas(c, v);
                td.appendChild(textNode(numobj));
                if (numobj < 2) {
                    td.style.color = globals.COLOR_DOWN;
                }else if (numobj > 2) {
                    td.style.color = globals.COLOR_UP;
                }
                tr.appendChild(td);
            });
            table.appendChild(tr);
        });
        $("lista").appendChild(table);

}
function change_state() {
    $("tabla").textContent = ($("tabla").textContent === "tabla")?"lista":"tabla";
    update();
}

function create_selector() {
    var select = create("select");
    select.id = "selector";
    document.body.appendChild(select);
}
function create_buttons(buttons) {
    buttons.forEach(function (item) {
        var button = create("button");
        button.appendChild(textNode(item));
        button.id = item;
        document.body.appendChild(button);
    });
}
function title_dom(text) {
    var h = create("h1");
    h.appendChild(textNode(text));
    document.body.appendChild(h);
    
}
function create_tree() {
    var meta = document.createElement("meta"),
        script = document.head.firstChild,
        doctype = document.implementation.createDocumentType('html', '', '');
        meta.setAttribute("charset","Utf-8");
        //ingresar meta charset y doctype 
        document.head.insertBefore(meta, script);
        document.insertBefore(doctype, document.childNodes[0]);
}

function main() {
   create_tree(); 
   title_dom(globals.TITLE);
   createTextForm(globals.INPUTS);
   create_sec_List();
   create_selector();
   create_buttons(globals.BUTTONS);
   $("añadir").addEventListener("click", add_data, false);
   $("eliminar").addEventListener("click", delete_list, false);
   $("tabla").addEventListener("click", change_state, false);
   var config = { attributes: false, childList: true, characterData: false };
   observer = new MutationObserver(update);
   observer.observe($("selector"), config);
}

window.onload = main; 