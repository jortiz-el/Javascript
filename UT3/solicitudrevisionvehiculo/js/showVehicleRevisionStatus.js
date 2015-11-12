/*global NP_FORMAT, A_YEAR, DATE_TODAY, ERROR_NPLATE, ERROR_DATE, GOOD_MORNING,
 GOOD_AFTERNOON, GOOD_NIGHT, NOREVISION, REVISION_FIRST, REVISION_LAST, COMPANIES,
 reverseQueryString, first_parameter, second_parameter, testNumberplate, calculateDays,
 calculateHour, calculateDays, randomCompany, getCPUInfo */

function showVehicleRevisionStatus(queryStrings) {
    "use strict";
    var message,
        aplication = "",
        info_cpu = "",
        queryString = reverseQueryString(queryStrings),
        numberplate = first_parameter(queryString),
        lastrevdate = second_parameter(queryString);

    if (testNumberplate(numberplate)) {
        if (calculateDays(lastrevdate)) {
            message = calculateHour();
            if (calculateDays(lastrevdate) <= A_YEAR) {
                aplication = NOREVISION;
            } else {
                aplication = REVISION_FIRST + randomCompany(COMPANIES) + REVISION_LAST;
            }
            info_cpu = getCPUInfo();
        } else {
            message = ERROR_DATE;
        }
    } else {
        message = ERROR_NPLATE;
    }

    return [message, aplication, info_cpu];
}