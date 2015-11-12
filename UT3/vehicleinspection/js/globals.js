(function (exports) {
    "use strict";
    exports.ERROR_NPLATE = "Número de matrícula incorrecto";
    exports.ERROR_DATE = "Fecha de matriculación incorrecta";
    exports.GOOD_MORNING = "Buenos días";
    exports.GOOD_EVENING = "Buenas tardes";
    exports.GOOD_NIGHT = "Buenas noches";
    exports.NOREVISION = "Su vehículo no necesita revisión";
    exports.INSPECTION_MSG_PRE = "Debe ponerse en contacto con ";
    exports.INSPECTION_MSG_SUF = " para revisar su vehículo";
    exports.COMPANIES = "ABERCO JUMDER NOIRTE OSPIA SAIMTE";
    exports.NP_FORMAT = new RegExp("(^[A-Z]{1,2}\-\\d{4}\-([A-N]|[O-Z]){1,2}$)|" +
            "(^\\d{4}\-([A-N]|[O-Z]){3}$)", "i");
    exports.DATE_TODAY = new Date();
    exports.UN_ANIO = 365;

})(this);
