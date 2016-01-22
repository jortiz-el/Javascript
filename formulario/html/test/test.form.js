// Using html2js preprocessor 
var HTMLFile = __html__['index.html'],
    body = HTMLFile.split(RegExp("<body>|</body>"))[1];

document.body.innerHTML = body;

events();

// BDD
chai.should();

describe('Register Form Vinil Shirt', function() {
    context('Correct values in operators', function() {
        /*afterEach(function() {
            $('result').innerHTML = "";
        });*/
    
        it('should be valid for a name joao', function() {
            $('name').value = joao;
            $('name').checkValidity().should.be.true;
            
        });
    });

    context('Incorrect values in operators', function() {
        /*afterEach(function() {
            $('result').innerHTML = "";
        });

        it('should show error for Bad + 3', function() {
            $('firstoperand').value = "Bad";
            $('secondoperand').value = 3;
            $('add').click();
            $('result').innerHTML.should.be.equal(ERROR_MSG);
        });*/
    });
});
