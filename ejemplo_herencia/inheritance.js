// Parent class
function Animal(dna) {
    this.dna = dna;
}

Animal.prototype.eat = function () { console.log("Animal with dna " + this.dna + " is eating"); };
Animal.prototype.sleep = function () { console.log("Animal with dna " + this.dna + " is sleeping"); };

// Child class
function Fish(dna, color) {
    Animal.call(this, dna);
    this.color = color;
}

// Inheritance
Fish.prototype = Object.create(Animal.prototype);
Fish.prototype.constructor = Fish;

// Child overrides Parent method
Fish.prototype.sleep = function () {
    Animal.prototype.sleep.call(this);
    console.log("But " + this.color + " fishes don't sleep");
};

// Instantiate and test
var myfish = new Fish("ACGTACG", "red");
myfish.eat();
myfish.sleep();