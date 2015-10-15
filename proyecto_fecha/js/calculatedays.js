function calculateDaysSinceEpoch(date) {
    var numberDays,
        errorDate,
        firstYear = 1970,
        day = +(date[0] + date [1]),
        month = date[2] + date [3] + date[4],
        year = +(date[5] + date [6] + date[7] + date[8]),
        isLeap = (!(year % 4) && ((year % 100) || !(year % 400))),
        shortMonth = (day > 30),
        validDay = (day >= 0 && day <= 31),
        validYear = year >= 1970;
    if (validDay && year > 0 && !date[9]) {
        switch (month) {
        case "jan":
            numberDays = day;
            break;
        case "feb":
            numberDays = 31 + day;
            if (isLeap) {
                errorDate = (day > 29);
            } else {
                errorDate = (day > 28);
            }
            break;
        case "mar":
            if (isLeap) {
                numberDays = 60 + day;
            } else {
                numberDays = 59 + day;
            }
            break;
        case "apr":
            if (isLeap) {
                numberDays = 91 + day;
            } else {
                numberDays = 90 + day;
            }
            errorDate = shortMonth;
            break;
        case "may":
            if (isLeap) {
                numberDays = 121 + day;
            } else {
                numberDays = 120 + day;
            }
            break;
        case "jun":
            if (isLeap) {
                numberDays = 152 + day;
            } else {
                numberDays = 151 + day;
            }
            errorDate = shortMonth;
            break;
        case "jul":
            if (isLeap) {
                numberDays = 182 + day;
            } else {
                numberDays = 181 + day;
            }
            break;
        case "aug":
            if (isLeap) {
                numberDays = 213 + day;
            } else {
                numberDays = 212 + day;
            }
            break;
        case "sep":
            if (isLeap) {
                numberDays = 244 + day;
            } else {
                numberDays = 243 + day;
            }
            errorDate = shortMonth;
            break;
        case "oct":
            if (isLeap) {
                numberDays = 274 + day;
            } else {
                numberDays = 273 + day;
            }
            break;
        case "nov":
            if (isLeap) {
                numberDays = 305 + day;
            } else {
                numberDays = 304 + day;
            }
            errorDate = shortMonth;
            break;
        case "dec":
            if (isLeap) {
                numberDays = 335 + day;
            } else {
                numberDays = 334 + day;
            }
            break;
        default:
            errorFormat = true;
            break;
        }
        if (!errorDate && validYear) {
            year = year - 1;
            while(year >= firstYear) {
                if(!(year % 4) && ((year % 100) || !(year % 400))) {
                    numberDays = numberDays + 366; 
                } else {
                    numberDays = numberDays + 365;
                }
                year = year - 1;
            }
            numberDays = numberDays - 1;

        } else {
            
                numberDays = "La fecha introducida no es válida";
        }

    } else {
        numberDays = "Por favor, introducir la fecha en el formato solicitado";
    }
    return numberDays;
}