// Required modules
var backEnd = require("../js/back-end.js"),
    chai = require("chai");


function skipTest() {
    it('should skip this test', function (done) {
        done();
    });
}

// BDD
chai.should();
// TDD 
var assert = chai.assert;

// Global variables and constants used for testing
var norte = new backEnd.CarDealership("norte"),
    sur = new backEnd.CarDealership("sur"),
    este = new backEnd.CarDealership("este"),
    oeste = new backEnd.CarDealership("oeste"),
    diagonal = new backEnd.CarDealership("diagonal"),
    centro = new backEnd.CarDealership("centro"),
    noreste = new backEnd.CarDealership("noreste"),
    noroeste = new backEnd.CarDealership("noroeste"),
    sureste = new backEnd.CarDealership("sureste"),
    suroeste = new backEnd.CarDealership("suroeste");

norte.buy_cars("transper", "3456-aab", "12jan2000", "5000", "7000");
norte.buy_cars("transper", "3455-aaa", "12jan2000", "3000", "9000");
sur.buy_cars("transper", "3456-aac", "12jan2000", "9000", "9000");
este.buy_cars("transper", "3456-aac", "12jan2000", "19000", "9000");
este.buy_cars("transper", "3456-aac", "12jan2000", "10000", "9000");
diagonal.buy_cars("transper", "3456-aac", "12jan2000", "n", "9000");
centro.buy_cars("transper", "3456-aac", "12jan2000", "100", "200");
centro.buy_cars("transper", "3456-aac", "12jan2000", "100", "300");
centro.buy_cars("transper", "3456-aac", "12jan2000", "100", "400");
noreste.buy_cars("transper", "3456-aac", "12jan2000", "1000", "3000");
noreste.buy_cars("transper", "3456-aac", "12jan2000", "100", "400");
noroeste.buy_cars("transper", "3456-aac", "12jan2000", "100", "3000");
noroeste.buy_cars("transper", "3456-aac", "12jan2000", "3000", "400");
sureste.buy_cars("transper", "3456-aac", "12jan2000", "10000", "30000");
sureste.buy_cars("transper", "3456-aac", "12jan2000", "100", "40000");
suroeste.buy_cars("transper", "3456-aac", "12jan2000", "2000", "3500");

//variables for testing Data
var nplate_msg = "matrícula inválida",
    dlrdate_msg = "fecha inválida",
    price_msg = "precio venta menor que precio compra",
    no_msg = false;



// The tests!
describe('Test calculateBenefits function', function () {
    context('valid arguments benefits', function () {
        it('should evaluate to  "norte" for concesionario norte.red', function () {
            var result = norte.red;
            result.should.to.deep.equal("norte");
        });
        it('should evaluate to  benefits "8000" for concesionario norte', function () {
            var result = norte.calculateBenefits(norte);
            result.should.to.deep.equal(8000);
        });
        it('should evaluate to  benefits "0" for concesionario sur', function () {
            var result = sur.calculateBenefits(sur);
            result.should.to.deep.equal(0);
        });
        it('should evaluate to  benefits "-11000" for concesionario este', function () {
            var result = este.calculateBenefits(este);
            result.should.to.deep.equal(-11000);
        });
        it('should evaluate to  benefits "0" for concesionario oeste', function () {
            var result = oeste.calculateBenefits(oeste);
            result.should.to.deep.equal(0);
        });
        it('should evaluate to  benefits "Nan" for concesionario diagonal', function () {
            var result = diagonal.calculateBenefits(diagonal);
            result.should.to.deep.equal(NaN);
        });
        it('should evaluate to  benefits "600" for concesionario centro', function () {
            var result = centro.calculateBenefits(centro);
            result.should.to.deep.equal(600);
        });
        it('should evaluate to  benefits "2300" for concesionario noreste', function () {
            var result = noreste.calculateBenefits(noreste);
            result.should.to.deep.equal(2300);
        });
        it('should evaluate to  benefits "300" for concesionario noroeste', function () {
            var result = noroeste.calculateBenefits(noroeste);
            result.should.to.deep.equal(300);
        });
        it('should evaluate to  benefits "59900" for concesionario sureste', function () {
            var result = sureste.calculateBenefits(sureste);
            result.should.to.deep.equal(59900);
        });
        it('should evaluate to  benefits "1500" for concesionario suroeste', function () {
            var result = suroeste.calculateBenefits(suroeste);
            result.should.to.deep.equal(1500);
        });

    });
    context('invalid arguments insert data', function () {
        it('should evaluate to  "nplate_msg" for invalid numberplate "3456-aa"', function () {
            var result = norte.validateEntry("3456-aa", "12jan2000", "2000", "3500");
            result.should.to.deep.equal(nplate_msg);
        });
        it('should evaluate to  "nplate_msg" for invalid numberplate "345-aaa"', function () {
            var result = norte.validateEntry("345-aaa", "12jan2000", "2000", "3500");
            result.should.to.deep.equal(nplate_msg);
        });
        it('should evaluate to  "dlrdate_msg" for invalid date " "', function () {
            var result = norte.validateEntry("3453-aaa", " ", "2000", "3500");
            result.should.to.deep.equal(dlrdate_msg);
        });
        it('should evaluate to  "dlrdate_msg" for invalid date "29feb2015"', function () {
            var result = norte.validateEntry("3453-aaa", "29feb2015", "2000", "3500");
            result.should.to.deep.equal(dlrdate_msg);
        });
        it('should evaluate to  "price_msg" for invalid price "2000", "1500"', function () {
            var result = norte.validateEntry("3453-aaa", "28feb2015", "2000", "1500");
            result.should.to.deep.equal(price_msg);
        });

    });
    context('valid arguments insert data', function () {
        it('should evaluate to  "ok" for valid numberplate "3456-aaa"', function () {
            var result = norte.validateEntry("3456-aaa", "12jan2000", "2000", "3500");
            result.should.to.deep.equal(no_msg);
        });
        it('should evaluate to  "ok" for valid numberplate "xx-2345-aa"', function () {
            var result = norte.validateEntry("xx-2345-aa", "12jan2000", "2000", "3500");
            result.should.to.deep.equal(no_msg);
        });
        it('should evaluate to  "ok" for valid date "04feb1982"', function () {
            var result = norte.validateEntry("3453-aaa", "04feb1982", "2000", "3500");
            result.should.to.deep.equal(no_msg);
        });
        it('should evaluate to  "ok" for valid price "2000", "3500"', function () {
            var result = norte.validateEntry("3453-aaa", "21feb2015", "2000", "3500");
            result.should.to.deep.equal(no_msg);
        });

    });
});