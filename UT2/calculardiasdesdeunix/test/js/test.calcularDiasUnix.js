chai.should();
describe('Check date', function() {
    describe('', function() {
        context('validate strings', function() {
            it('should return ERRORformato for a blank string ""', function() {
                calculateDaysSinceEpoch("").should.equal("Por favor, introducir la fecha en el formato solicitado");
            });
            it('should return ERRORformato for a space " "', function() {
                calculateDaysSinceEpoch(" ").should.equal("Por favor, introducir la fecha en el formato solicitado");
            });
            it('should return ERRORformato for a token like ","', function() {
                calculateDaysSinceEpoch(",").should.equal("Por favor, introducir la fecha en el formato solicitado");
            }); 
            it('should return ERRORformato for "00jan2015"', function() {
                calculateDaysSinceEpoch("00jan2015").should.equal("Por favor, introducir la fecha en el formato solicitado");
            });
            it('should return ERRORformato for "32jan2015"', function() {
                calculateDaysSinceEpoch("32jan2015").should.equal("Por favor, introducir la fecha en el formato solicitado");
            });
            it('should return ERRORformato for "aajan2015"', function() {
                calculateDaysSinceEpoch("aajan2015").should.equal("Por favor, introducir la fecha en el formato solicitado");
            });
            it('should return ERRORformato for "01col2015"', function() {
                calculateDaysSinceEpoch("01col2015").should.equal("Por favor, introducir la fecha en el formato solicitado");
            });
            it('should return ERRORformato for " 1jan2015"', function() {
                calculateDaysSinceEpoch(" 1jan2015").should.equal("Por favor, introducir la fecha en el formato solicitado");
            });
            it('should return ERRORformato for "1 jan2015"', function() {
                calculateDaysSinceEpoch("1 jan2015").should.equal("Por favor, introducir la fecha en el formato solicitado");
            }); 
            it('should return ERRORformato for "01jan-015"', function() {
                calculateDaysSinceEpoch("01jan-015").should.equal("Por favor, introducir la fecha en el formato solicitado");
            });
            it('should return ERRORformato for "01jan 015"', function() {
                calculateDaysSinceEpoch("01jan 015").should.equal("Por favor, introducir la fecha en el formato solicitado");
            });
            it('should return ERRORformato for "01jan2 15"', function() {
                calculateDaysSinceEpoch("01jan2 15").should.equal("Por favor, introducir la fecha en el formato solicitado");
            });
            it('should return ERRORformato for "01jan20 5"', function() {
                calculateDaysSinceEpoch("01jan20 5").should.equal("Por favor, introducir la fecha en el formato solicitado");
            });
            it('should return ERRORformato for "01jan201 "', function() {
                calculateDaysSinceEpoch("01jan201 ").should.equal("Por favor, introducir la fecha en el formato solicitado");
            });            
            it('should return ERRORfecha for "01jan1969"', function() {
                calculateDaysSinceEpoch("01jan1969").should.equal("La fecha introducida no es válida");
            });
            it('should return ERRORfecha for "31feb1970"', function() {
                calculateDaysSinceEpoch("31feb1970").should.equal("La fecha introducida no es válida");
            });
            it('should return ERRORfecha for "31apr1970"', function() {
                calculateDaysSinceEpoch("31apr1970").should.equal("La fecha introducida no es válida");
            });
            it('should return ERRORfecha for "29feb2015"', function() {
                calculateDaysSinceEpoch("29feb2015").should.equal("La fecha introducida no es válida");
            });
            it('should return "0" for "01jan1970"', function() {
                calculateDaysSinceEpoch("01jan1970").should.equal(0);
            });
            it('should return "16717" for "09oct2015"', function() {
                calculateDaysSinceEpoch("09oct2015").should.equal(16717);
            });
            it('should return "16860" for "29feb2016"', function() {
                calculateDaysSinceEpoch("29feb2016").should.equal(16860);
            });
            it('should return "790" for "01mar1972"', function() {
                calculateDaysSinceEpoch("01mar1972").should.equal(790);
            });
            it('should return "2249" for "28feb1976"', function() {
                calculateDaysSinceEpoch("28feb1976").should.equal(2249);
            });
            it('should return "2251" for "01mar1976"', function() {
                calculateDaysSinceEpoch("01mar1976").should.equal(2251);
            });
            it('should return "741441" for "31dec3999"', function() {
                calculateDaysSinceEpoch("31dec3999").should.equal(741441);
            });
        });
    });
});
