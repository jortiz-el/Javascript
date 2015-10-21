chai.should();
describe('Check Words', function() {
    describe('', function() {
        context('numbers', function() {
            it('should return false for numbers', function() {
                 codifica(2).should.not.be.ok;
            });
            it('should return false for infinity', function() {
                codifica(Infinity).should.not.be.ok;
            }); 
            it('should return false for null', function() {
                codifica(null).should.not.be.ok;
            });          
        });
        context('Not numbers', function() {
            it('should return false for a blank string ""', function() {
                codifica("").should.not.be.ok;
            });
            it('should return false for a space " "', function() {
                codifica(" ").should.not.be.ok;
            });
            it('should return false for a token like ","', function() {
                codifica(",").should.not.be.ok;
            });            
            it('should return false for capital letters', function() {
                codifica("A").should.not.be.ok;
            });
            it('should return "01" for letter a', function() {
                codifica("a").should.equal("01");
            });
            it('should return "02" for letter b', function() {
                codifica("b").should.equal("02");
            });
            it('should return "03" for letter c', function() {
                codifica("c").should.equal("03");
            });
            it('should return "10" for letter j', function() {
                codifica("j").should.equal(10);
            });
            it('should return "11" for letter k', function() {
                codifica("k").should.equal(11);
            });

        });
    });
});
