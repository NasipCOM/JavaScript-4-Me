/* var Person = function (name,yearOfBirth,country,age) {
    this.name = name;
    this.country = country;
    this.yearOfBirth = yearOfBirth;
    this.age = function () {    
        age = 2019 - yearOfBirth;
        this.age = age;
    }
}


Person.prototype.afterYear = function () {
    console.log(2020 - this.yearOfBirth)
}


var nasip = new Person('Nasip', 1998, 'Kyrgyzstan');
var baisal = new Person('Baisal', 1999, 'Russia')

baisal.age();
nasip.age();
console.log(nasip);
console.log(baisal); */

//Object.create

var personProto = {
    calculateAge: function () {
        console.log(2019 - this.yearOfBirth);
    }
}

var john = Object.create(personProto);

john.name = 'John';
john.yearOfBirth = 1998;


console.log(john);