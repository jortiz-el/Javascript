/*jslint
    browser: true, unparam: true, node: true, bitwise: true */
/*global
 MutationObserver */
function Form_data() {
    'use strict';
    this.datas = [];
}

var globals = (function (ns) {
    'use strict';
    ns.INPUTS = ["data_value", "data_class"];
    ns.BUTTONS = ["añadir", "eliminar", "tabla"];
    ns.TITLE = "Manipulación de documentos a través del DOM";
    ns.Form_data = new Form_data();
    ns.COLOR_DOWN = "#78C700";
    ns.COLOR_UP = "#CA1D1F";
    return ns;
}({}));

function Data(data_value, data_class) {
    'use strict';
    this.data_value = data_value;
    this.data_class = data_class;
}
Form_data.prototype.insert = function (data_value, data_class) {
    'use strict';
    this.datas.push(new Data(data_value, data_class));
};
Form_data.prototype.array_class_unique = function () {
    'use strict';
    var arr_class = this.datas.map(function (x) {
        return x.data_class;
    }).filter(function (element, index, arrayMap) {
        return arrayMap.indexOf(element) === index;
    });
    return arr_class;
};
Form_data.prototype.array_value_unique = function () {
    'use strict';
    var arr_value = this.datas.map(function (x) {
        return x.data_value;
    }).filter(function (element, index, arrayMap) {
        return arrayMap.indexOf(element) === index;
    });
    return arr_value;
};
Form_data.prototype.count_datas = function (data_class, data_value) {
    'use strict';
    var num = this.datas.reduce(function (x, y) {
        return (y.data_class === data_class && y.data_value === data_value) ? x + 1 : x;
    }, 0);
    return num;
};
Form_data.prototype.remove = function (selected) {
    'use strict';
    this.datas = this.datas.filter(function (x, y, z) {
        return x.data_class !== selected;
    });
};

function $(id) {
    'use strict';
    return document.getElementById(id);
}

function textNode(text) {
    'use strict';
    return document.createTextNode(text);
}

function create(element) {
    'use strict';
    return document.createElement(element);
}

function createTextForm(inputs) {
    'use strict';
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
    'use strict';
    var sec = create("section");
    sec.id = "lista";
    document.body.appendChild(sec);
}

function clean_section(item) {
    'use strict';
    Array.from(item.children).forEach(function (x) {
        x.remove();
    });
}

function clean_imput(element) {
    'use strict';
    element.value = "";
}

function insert_select() {
    'use strict';
    clean_section($("selector"));
    globals.Form_data.array_class_unique().forEach(function (x) {
        var opt = create("option");
        opt.appendChild(textNode(x));
        opt.value = x;
        $("selector").appendChild(opt);
    });
}

function add_data() {
    'use strict';
    var data_value = document.forms[0].children[1],
        data_class = document.forms[0].children[3];
    globals.Form_data.insert(data_value.value, data_class.value);
    insert_select();
    clean_imput(data_value);
    clean_imput(data_class);
}

function delete_list() {
    'use strict';
    var select = document.getElementsByTagName("SELECT")[0],
        selected = select.value;
    globals.Form_data.remove(selected);
    insert_select();
}

function insert_list() {
    'use strict';
    clean_section($("lista"));
    var ul = create("ul");
    globals.Form_data.datas.forEach(function (x) {
        var li = create("li");
        li.appendChild(textNode(x.data_value));
        li.className = x.data_class;
        ul.appendChild(li);
    });
    $("lista").appendChild(ul);
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

function update() {
    'use strict';
    if ($("tabla").textContent === "tabla") {
        insert_list();
    } else {
        insert_table();
    }
}

function change_state() {
    'use strict';
    $("tabla").textContent = ($("tabla").textContent === "tabla") ? "lista" : "tabla";
    update();
}

function create_selector() {
    'use strict';
    var select = create("select");
    select.id = "selector";
    document.body.appendChild(select);
}

function create_buttons(buttons) {
    'use strict';
    buttons.forEach(function (item) {
        var button = create("button");
        button.appendChild(textNode(item));
        button.id = item;
        document.body.appendChild(button);
    });
}

function title_dom(text) {
    'use strict';
    var title = create("h1");
    title.appendChild(textNode(text));
    document.body.appendChild(title);

}

function create_tree() {
    'use strict';
    var meta = create("meta"),
        script = document.head.firstChild,
        doctype = document.implementation.createDocumentType('html', '', '');
    meta.setAttribute("charset", "Utf-8");
    // meta charset y doctype 
    document.head.insertBefore(meta, script);
    document.insertBefore(doctype, document.childNodes[0]);
}

function main() {
    'use strict';
    create_tree();
    title_dom(globals.TITLE);
    createTextForm(globals.INPUTS);
    create_sec_List();
    create_selector();
    create_buttons(globals.BUTTONS);
    $("añadir").addEventListener("click", add_data, false);
    $("eliminar").addEventListener("click", delete_list, false);
    $("tabla").addEventListener("click", change_state, false);
    var config = {
        attributes: false,
        childList: true,
        characterData: false
    },
        observer = new MutationObserver(update);
    observer.observe($("selector"), config);
}

window.onload = main;