// Using html2js preprocessor 
var HTMLFile = __html__['index.html'],
    body = HTMLFile.split(RegExp("<body>|</body>"))[1];

document.body.innerHTML = body;

events();

// BDD
chai.should();

describe('Register Form Vinil Shirt', function() {
    context('Correct values in operators', function() {
    
        it('should be valid for a name joao', function() {
            $('name').value = "joao";
            validInput(NAME,$('name')).should.be.true;
        });
        it('should be valid for a surname ruiz-toledo', function() {
            $('surname').value = "ruiz-toledo";
            validInput(NAME,$('surname')).should.be.true;
        });
        it('should be valid for a email joao.marco@joao.marco.es', function() {
            $('email').value = "joao.marco@joao.marco.es";
            validInput(EMAIL,$('email')).should.be.true;
        });
        it('should be valid for a pass Aa123%', function() {
            $('pass').value = "Aa123%";
            validInput(PASS,$('pass')).should.be.true;
        });
        it('should be valid for a pass abc1Dñ$', function() {
            $('pass').value = "abc1Dñ$";
            validInput(PASS,$('pass')).should.be.true;
        });
        it('should be valid for a website http://superico.com', function() {
            $('website').value = "http://superico.com";
            validInput(WEBSITE,$('website')).should.be.true;
        });
        it('should be valid for a post_code 28100', function() {
            $('post_code').value = "28100";
            validInput(POSTCODE,$('post_code')).should.be.true;
        });

    });

    context('Incorrect values in operators', function() {
        it('should be invalid for a name joao2', function() {
            $('name').value = "joao2";
            validInput(NAME,$('name')).should.be.false;
        });
        it('should be invalid for a surname ruiz&toledo', function() {
            $('surname').value = "ruiz&toledo";
            validInput(NAME,$('surname')).should.be.false;
        });
        it('should be invalid for a email joao.marco@joao', function() {
            $('email').value = "joao.marco@joao";
            validInput(EMAIL,$('email')).should.be.false;
        });
        it('should be invalid for a pass Aa1233', function() {
            $('pass').value = "Aa1233";
            validInput(PASS,$('pass')).should.be.false;
        });
        it('should be invalid for a pass abc1dñ$', function() {
            $('pass').value = "abc1dñ$";
            validInput(PASS,$('pass')).should.be.false;
        });
        it('should be invalid for a website superico.com', function() {
            $('website').value = "superico.com";
            validInput(WEBSITE,$('website')).should.be.false;
        });
        it('should be invalid for a post_code 58100', function() {
            $('post_code').value = "58100";
            validInput(POSTCODE,$('post_code')).should.be.false;
        });
    });
});
