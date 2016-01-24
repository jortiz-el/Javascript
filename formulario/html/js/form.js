/*jslint
    node: true,
    browser: true,
    unparam: true,
    regexp: true
*/
var NAME = /^[A-Za-z\_\-\.\s\xF1\xD1]+$/,
    PASS = /(?=^.{6,255}$)(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
    EMAIL = /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,4}$/,
    WEBSITE = /^[a-z]{2,}:([0-9]+|\/\/){1}[^\s\-]*$/i,
    POSTCODE = /^([0-4][0-9]{4}|[5][0-2][0-9]{3})$/;
function $(id) {
    "use strict";
    return document.getElementById(id);
}
function hide() {
    "use strict";
    $("cookie_form").style.display = "none";
}
function validInput(patt, id) {
    "use strict";
    var valid = patt.test(id.value);
    id.setCustomValidity((valid || (!(id.attributes.required) && id.value === "")) ? "" : "Invalid field.");
    return id.validity.valid;//return solo para las pruebas unitarias
}
function conf_pass() {
    "use strict";
    var pass = $("pass").value,
        confi_pass = $("conf_pass").value;
    $("conf_pass").setCustomValidity(pass === confi_pass ? "" : "Invalid field.");
}
function country() {
    "use strict";
    var selected = $("country").selectedIndex;
    $("spain").style.display = selected === 0 ? "block" : "none";
}
function checkcookie() {
    "use strict";
    var valid = document.cookie;
    $("cookie_form").style.display = (valid !== "") ? "none" : "block";
}
function events() {
    "use strict";
    $("acept_cookie").addEventListener("click", hide, false);
    $("name").addEventListener("keyup", function () {validInput(NAME, $("name")); }, false);
    $("surname").addEventListener("keyup", function () {validInput(NAME, $("surname")); }, false);
    $("pass").addEventListener("keyup", function () {validInput(PASS, $("pass")); }, false);
    $("conf_pass").addEventListener("keyup", conf_pass, false);
    $("country").addEventListener("change", country, false);
    $("email").addEventListener("keyup", function () {validInput(EMAIL, $("email")); }, false);
    $("website").addEventListener("keyup", function () {validInput(WEBSITE, $("website")); }, false);
    $("post_code").addEventListener("keyup", function () {validInput(POSTCODE, $("post_code")); }, false);
    checkcookie();
}

window.onload = events;

