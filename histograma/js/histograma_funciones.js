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
function asteriscos(arr, obj) {
    var ast = "";
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == obj){
            ast += "*";
        }
    }
    return ast;
}
