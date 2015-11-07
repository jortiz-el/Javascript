/*global NP_FORMAT, A_YEAR, DATE_TODAY, ERROR_NPLATE, ERROR_DATE, GOOD_MORNING,
 GOOD_AFTERNOON, GOOD_NIGHT, NOREVISION, REVISION_FIRST, REVISION_LAST, COMPANIES*/

var NP_FORMAT = new RegExp("(^[A-Z]{1,2}\-\\d{4}\-([A-N]|[O-Z]){1,2}$)|" +
            "(^\\d{4}\-([A-N]|[O-Z]){3}$)", "i"),
    A_YEAR = 365,
    DATE_TODAY = new Date(),
    ERROR_NPLATE = "Número de matrícula incorrecto",
    ERROR_DATE = "Fecha de matriculación incorrecta",
    GOOD_MORNING = "Buenos días",
    GOOD_AFTERNOON = "Buenas tardes",
    GOOD_NIGHT = "Buenas noches",
    NOREVISION = "Su vehículo no necesita revisión",
    REVISION_FIRST = "Debe ponerse en contacto con ",
    REVISION_LAST = " para revisar su vehículo",
    COMPANIES = "ABERCO|JUMDER|NOIRTE|OSPIA|SAIMTE";