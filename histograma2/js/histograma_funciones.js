function verrepetido(arr, obj) {
    var i,
        bool = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == obj) {
            bool = 1;
        } 
    }
    return bool;
}
function letrasNoRepetidas(contenedor, distintas) {
    for (i = 0; i < contenedor.length; i++) {
        if (!verrepetido(distintas, contenedor[i])){
            distintas.push(contenedor[i]);
        }
    }
}

function cuenta(arr, obj) {
    var cont = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == obj){
            cont += 1;
        }
    }
    return cont;
}
//Función para agregar una clase.
function addClass(obj,cls) {
    obj.className+=" "+cls;
   
}