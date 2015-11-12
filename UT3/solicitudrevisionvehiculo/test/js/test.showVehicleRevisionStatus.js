chai.should();
describe('Check date', function() {

    describe('', function() {
        context('validate strings', function() {
            it('should return ERROR_NPLATE for a  string "?numberplate=2345-ff&lastrevdate=12jan2000"', function() {
                var output = showVehicleRevisionStatus("?numberplate=2345-ff&lastrevdate=12jan2000");
                output[0].should.be.equal("Número de matrícula incorrecto");
            });
            it('should return ERROR_NPLATE for a  string "?numberplate=2345-ffñ&lastrevdate=12jan2000"', function() {
                var output = showVehicleRevisionStatus("?numberplate=2345-ffñ&lastrevdate=12jan2000");
                output[0].should.be.equal("Número de matrícula incorrecto");
            });
            it('should return ERROR_NPLATE for a  string "?numberplate=234-ffP&lastrevdate=12jan2000"', function() {
                var output = showVehicleRevisionStatus("?numberplate=234-ffP&lastrevdate=12jan2000");
                output[0].should.be.equal("Número de matrícula incorrecto");
            });
            it('should return ERROR_NPLATE for a  string "?numberplate=AA-2345&lastrevdate=12jan2000"', function() {
                var output = showVehicleRevisionStatus("?numberplate=AA-2345&lastrevdate=12jan2000");
                output[0].should.be.equal("Número de matrícula incorrecto");
            });
            it('should return ERROR_NPLATE for a  string "?numberplate=Ñl-2345-ff&lastrevdate=12jan2000"', function() {
                var output = showVehicleRevisionStatus("?numberplate=Ñl-2345-ff&lastrevdate=12jan2000");
                output[0].should.be.equal("Número de matrícula incorrecto");
            });
            it('should return ERROR_NPLATE for a  string REVERSE_MODE "?lastrevdate=12jan2000&numberplate=Ñl-2345-ff"', function() {
                var output = showVehicleRevisionStatus("?lastrevdate=12jan2000&numberplate=Ñl-2345-ff");
                output[0].should.be.equal("Número de matrícula incorrecto");
            });
            it('should return ERROR_DATE for a  string "?numberplate=ll-2345-ff&lastrevdate=32jan2000"', function() {
                var output = showVehicleRevisionStatus("?numberplate=ll-2345-ff&lastrevdate=32jan2000");
                output[0].should.be.equal("Fecha de matriculación incorrecta");
            });
            it('should return ERROR_DATE for a  string "?numberplate=l-2345-ff&lastrevdate=00jan2015"', function() {
                var output = showVehicleRevisionStatus("?numberplate=l-2345-ff&lastrevdate=00jan2015");
                output[0].should.be.equal("Fecha de matriculación incorrecta");
            });
            it('should return ERROR_DATE for a  string "?numberplate=L-2345-f&lastrevdate=aajan2015"', function() {
                var output = showVehicleRevisionStatus("?numberplate=L-2345-f&lastrevdate=aajan2015");
                output[0].should.be.equal("Fecha de matriculación incorrecta");
            });
            it('should return ERROR_DATE for a  string "?numberplate=2345-ffD&lastrevdate=1 jan2015"', function() {
                var output = showVehicleRevisionStatus("?numberplate=2345-ffD&lastrevdate=1 jan2015");
                output[0].should.be.equal("Fecha de matriculación incorrecta");
            });
            it('should return ERROR_DATE for a  string "?numberplate=2345-AAD&lastrevdate=29feb2015"', function() {
                var output = showVehicleRevisionStatus("?numberplate=2345-AAD&lastrevdate=29feb2015");
                output[0].should.be.equal("Fecha de matriculación incorrecta");
            });
            it('should return ERROR_DATE for a  string REVERSE_MODE "?lastrevdate=29feb2015&numberplate=2345-AAD"', function() {
                var output = showVehicleRevisionStatus("?lastrevdate=29feb2015&numberplate=2345-AAD");
                output[0].should.be.equal("Fecha de matriculación incorrecta");
            });
       
        });
    });
});
