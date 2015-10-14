chai.should();
describe('Check primalty', function() {
    describe('', function() {
        context('Errores de formato', function() {
            it('should return FORMAT_ERROR for empty string', function () {
            	calculateDaysSinceEpoch("").should.equal("Por favor, introducir la fecha en el formato solicitado");
            });
             it('should return FORMAT_ERROR for "MANOLO"', function () {
                calculateDaysSinceEpoch("MANOLO").should.equal("Por favor, introducir la fecha en el formato solicitado");
            });
            it('should return FORMAT_ERROR for "32jan2014"', function () {
            	calculateDaysSinceEpoch("32jan2014").should.equal("Por favor, introducir la fecha en el formato solicitado");
            });
            it('should return FORMAT_ERROR for "31/12/2016"', function () {
                calculateDaysSinceEpoch("31/12/2016").should.equal("Por favor, introducir la fecha en el formato solicitado");
            });
            it('should return FORMAT_ERROR for "31ene2015"', function () {
                calculateDaysSinceEpoch("31ene2015").should.equal("Por favor, introducir la fecha en el formato solicitado");
            });
            it('should return FORMAT_ERROR for "13feb10000"', function () {
                calculateDaysSinceEpoch("13feb10000").should.equal("Por favor, introducir la fecha en el formato solicitado");
            });
            it('should return FORMAT_ERROR for "26oct100"', function () {
                calculateDaysSinceEpoch("26oct100").should.equal("Por favor, introducir la fecha en el formato solicitado");
            });
            it('should return FORMAT_ERROR for "-1may2000"', function () {
                calculateDaysSinceEpoch("-1may2000").should.equal("Por favor, introducir la fecha en el formato solicitado");
            });
            it('should return FORMAT_ERROR for "1jan2000"', function () {
                calculateDaysSinceEpoch("1jan2000").should.equal("Por favor, introducir la fecha en el formato solicitado");
            });
        });
        context('Errores de fecha', function() {
            it('should return DATE_ERROR for "31dec1969"', function () {
                calculateDaysSinceEpoch("31dec1969").should.equal("La fecha introducida no es válida");
            });
            it('should return DATE_ERROR for "29feb2011"', function () {
                calculateDaysSinceEpoch("29feb2011").should.equal("La fecha introducida no es válida");
            });
            it('should return DATE_ERROR for "29feb2300"', function () {
                calculateDaysSinceEpoch("29feb2300").should.equal("La fecha introducida no es válida");
            });
            it('should return DATE_ERROR for "31apr1970"', function () {
                calculateDaysSinceEpoch("31apr1970").should.equal("La fecha introducida no es válida");
            });
            it('should return DATE_ERROR for "31jun2200"', function () {
                calculateDaysSinceEpoch("31jun2200").should.equal("La fecha introducida no es válida");
            });
        });
        context('Fechas correctas', function() {
            it('should return "741.441" for "31dec3999"', function () {
                calculateDaysSinceEpoch("31dec3999").should.equal(741441);
            });
            it('should return "0" for "01jan1970"', function () {
                calculateDaysSinceEpoch("01jan1970").should.equal(0);
            });
            it('should return "1" for "02jan1970"', function () {
                calculateDaysSinceEpoch("02jan1970").should.equal(1);
            });
            it('should return "11016" for "29feb2000"', function () {
                calculateDaysSinceEpoch("29feb2000").should.equal(11016);
            });
        });
    });
}); 