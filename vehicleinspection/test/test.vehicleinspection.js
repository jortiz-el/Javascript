// Required modules
var globals = require("../js/globals.js"),
    vehicleinspection = require("../js/vehicleinspection.js"),
    chai = require("chai");

// Functions to test
var showVehicleRevisionStatus = vehicleinspection.showVehicleRevisionStatus;

// BDD
chai.should();
// TDD 
var assert = chai.assert;

// Global variables and constants used for testing
var MORNING_END = 1259,
    MY_BROWSER = "Firefox/41.0",
    MY_OS = "Linux x86_64";

// Build all possible inspection messages
// There are shorter ways to achieve this by using array methods
var ARRAY_OF_SERVICES = globals.LIST_OF_SERVICES.split("|"),
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
            var result = showVehicleRevisionStatus(input("M-1234-AA", "NoDate"));
            result.should.to.deep.equal(output(globals.INVALID_DATE_MSG, ""))
        });
    });

    context('Greetings', function() {
        beforeEach(function() {
        });

        if (currentTime() > MORNING_END) {
            skipTest();
        } else {
            it('should return a morning greeting message when run in the mornings', function() {
                var result = showVehicleRevisionStatus(input("M-1234-AA", "16jul2015"));
                result[0].should.be.equal(globals.MORNING_GREETING_MSG);
            });
        }
    });

    context('Needs inspection', function() {
        it('should evaluate to an inspection message for 16jan2000 and valid numberplate', function() {
            var result = showVehicleRevisionStatus(input("M-1234-AA", "16jan2000"));
            ARRAY_OF_SERVICES.should.contain(result[1]);
        });
    });
});
