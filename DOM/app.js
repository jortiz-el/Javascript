//globales como espacio de nombres
var globals = (function (ns) {
    ns.INPUTS = ["Valor", "Clase"];
    ns.TITLE = "Manipulacion de documentos a traves del DOM";
    return ns;
}({}));

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
    var form = create("form"),
        button = create("button");
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
        button.appendChild(textNode("Enviar"));
        button.id = "enviar";
        document.body.appendChild(button);
}
function createList() {
    var ul = create("ul");
    ul.appendChild(textNode("<<Lista>>"));
    document.body.appendChild(ul);
}
function validation() {
    var clase = document.forms[0].children[3].value,
        ul = document.getElementsByTagName("UL")[0];
    Array.forEach(ul.children,function(x){
    return x.className === clase?1:0;
    });
    }
function insertList() {
    var valor = document.forms[0].children[1].value,
        clase = document.forms[0].children[3].value,
        ul = document.getElementsByTagName("UL")[0],
        li = create("li"),
        select = document.getElementsByTagName("SELECT")[0],
        option = create("option");
        li.appendChild(textNode(valor));
        li.className = clase;
        ul.appendChild(li);
        option.appendChild(textNode(clase));
        option.value = clase;
        select.appendChild(option);
        document.forms[0].reset();
}
function deleteList() {
    var select = document.getElementsByTagName("SELECT")[0],
        ul = document.getElementsByTagName("UL")[0],
        selected = select.selectedIndex;
        document.querySelector("." + select.children[selected].value).remove();
        select.removeChild(select.children[selected]);
}

function createSelector() {
    var select = create("select"),
        button = create("button");
        document.body.appendChild(select);
        button.appendChild(textNode("Eliminar"));
        button.id = "eliminar";
        document.body.appendChild(button);
  
}
function title(text) {
    var h = create("h1");
        //meta = document.createElement("meta"),
        //script = document.head.firstChild;
        //meta.setAttribute("charset","Utf-8");
    h.appendChild(textNode(text));
    document.body.appendChild(h);
    //ingresar meta charset 
    //document.head.insertBefore(meta, script);
}

function main() {
   title(globals.TITLE);
   createTextForm(globals.INPUTS);
   createList();
   createSelector();
   $("enviar").addEventListener("click", insertList, false);
   $("eliminar").addEventListener("click", deleteList, false);
}

window.onload = main; 