

function showVehicleRevisionStatus() {
    var NUMBERPLATE = new RegExp("(^[A-Z]{1,2}\-\\d{4}\-([A-N]|[O-Z]){1,2}$)|" +
            "(^\\d{4}\-([A-N]|[O-Z]){3}$)", "i");

    var query = document.location.search;
    if (query !== ''){

        document.write("<br>" + query);
    }
    

}