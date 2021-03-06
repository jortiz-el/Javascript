// Required modules
var globals = require("../js/globals.js"),
    vehicleinspection = require("../js/vehicleinspection.js"),
    chai = require("chai");

// Functions to test
var showVehicleRevisionStatus = vehicleinspection.showVehicleRevisionStatus;

function skipTest() {
    it('should skip this test', function(done) {
        done();
    });
}

// BDD
chai.should();
// TDD 
var assert = chai.assert;

// Global variables and constants used for testing
var MORNING_END = 13,
    EVENING_END = 20,
    MY_BROWSER = "Firefox/41.0",
    MY_OS = "Linux x86_64";

// Build all possible inspection messages
// There are shorter ways to achieve this by using array methods
var ARRAY_OF_SERVICES = globals.COMPANIES.split(" "),
    numberOfServices = ARRAY_OF_SERVICES.length,
    serviceNumber,
    INSPECTION_MSGS = "";
for (serviceNumber = 0 ; serviceNumber < numberOfServices ; serviceNumber++) {
    ARRAY_OF_SERVICES[serviceNumber] = globals.INSPECTION_MSG_PRE +
        ARRAY_OF_SERVICES[serviceNumber] + globals.INSPECTION_MSG_SUF;
}

// The tests!
describe('Test showVehicleRevisionStatus function', function() {
    context('Invalid arguments', function() {
        it('should evaluate to an error message for invalid inspection date: Nodate', function() {
            var result = showVehicleRevisionStatus("?numberplate=M-1234-AA&lastrevdate=NoDate");
            result.should.to.deep.equal([globals.ERROR_DATE, "", ""])
        });
        it('should evaluate to an error message for invalid inspection date: Nodate (like first parameter)', function() {
            var result = showVehicleRevisionStatus("?lastrevdate=NoDate&numberplate=M-1234-AA");
            result.should.to.deep.equal([globals.ERROR_DATE, "", ""])
        });
        it('should evaluate to an error message for invalid inspection numberplate: añ-4567-AS', function() {
            var result = showVehicleRevisionStatus("?numberplate=añ-4567-AS&lastrevdate=12jan2000");
            result.should.to.deep.equal([globals.ERROR_NPLATE, "", ""])
        });
        it('should evaluate to an error message for invalid inspection numberplate: 4567-AS (like second parameter)', function() {
            var result = showVehicleRevisionStatus("?lastrevdate=12jan2000&numberplate=4567-AS");
            result.should.to.deep.equal([globals.ERROR_NPLATE, "", ""])
        });
    });

    context('Greetings', function() {
        beforeEach(function() {
        });

        if (globals.DATE_TODAY.getHours() >= MORNING_END) {
            skipTest();
        } else {
            it('should return a morning greeting message when run in the mornings', function() {
                var result = showVehicleRevisionStatus("?numberplate=M-1234-AA&lastrevdate=12jan2000");
                result[0].should.be.equal(globals.GOOD_MORNING);
            });
        }
        if (globals.DATE_TODAY.getHours() >= EVENING_END) {
            skipTest();
        } else {
            it('should return a evening greeting message when run in the evenings', function() {
                var result = showVehicleRevisionStatus("?numberplate=M-1234-AA&lastrevdate=12jan2000");
                result[0].should.be.equal(globals.GOOD_EVENING);
            });
        }
        if ( globals.DATE_TODAY.getHours() < EVENING_END) {
            skipTest();
        } else {
            it('should return a night greeting message when run in the nights', function() {
                var result = showVehicleRevisionStatus("?numberplate=M-1234-AA&lastrevdate=12jan2000");
                result[0].should.be.equal(globals.GOOD_NIGHT);
            });
        }
    });

    context('Needs inspection', function() {
        it('should evaluate to an inspection message for 12jan2000 and valid numberplate', function() {
            var result = showVehicleRevisionStatus("?numberplate=M-1234-AA&lastrevdate=12jan2000");
            ARRAY_OF_SERVICES.should.contain(result[1]);
        });
        it('should evaluate to an inspection message for 28feb2014 and valid numberplate', function() {
            var result = showVehicleRevisionStatus("?numberplate=4568-ccc&lastrevdate=28feb2014");
            ARRAY_OF_SERVICES.should.contain(result[1]);
        });
    });
});
