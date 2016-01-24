/*jslint
    node: true,
    browser: true,
    unparam: true,
    regexp: true
*/

function limpiar(element) {
    'use strict';
    var limpia = document.getElementById(element);
    if (limpia.value !== '') {
        limpia.value = '';
    }
}