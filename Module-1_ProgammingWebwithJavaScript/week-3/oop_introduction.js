"use strict";
//creating an object
// let person = {
//   firstNamne: "John",
//   lastName: "Doe",

//   getPersonDetails: function () {
//     return `the name of the person is ${this.firstNamne} ${this.lastName}`;
//   },
// };

//person.firstNamne = "jane";

//console.log(person.getPersonDetails());

//Creating My first Class:

// class Car {
//   //properties
//   constructor(color, brand, country) {
//     this.color = color; //this - ponits to the current object
//     this.brand = brand;
//     this.country = country;
//   }

//   //method
//   printDetails() {
//     console.log(
//       `this is a ${this.color} "${this.brand}" car made in ${this.country}`
//     );
//   }
// }

// //creating objects using car class(as a blueprint)
// let swift = new Car("black", "Maruti", "Japan");
// let altroz = new Car("White", "tata", "India");

//callling methods for specific objects
// swift.printDetails();
// altroz.printDetails();

// //Bind function

// var pokemon = {
//   firstname: "Pika",
//   lastname: "Chu ",
//   getPokeName: function () {
//     var fullname = this.firstname + "" + this.lastname;
//     return fullname;
//   },
// };
// var pokemonName = function (instruction) {
//   console.log(this.getPokeName(), "I choose you!", instruction);
// };

// var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon.
// //'this' of pokemon = pokemon now
// logPokemon(); // 'Pika Chu I choose you!!

// //console.log(logPokemon.getPokeName); //undifined

// pokemonName.call(pokemon, "go finish him");
// pokemonName.apply(pokemon, ["go finish him"]);

//Prototypes in JS

function Person(firstName, lastName, age, eyecolor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype.nationality = "India";

const me = new Person("abhi", "singh", 22, "brown");

console.log("my natinality is ", me.nationality);

Person.prototype.name = function () {
  return this.firstName + " " + this.lastName;
};

console.log("my name is ", me.name());

//Inheritence

// SuperType constructor function
function SuperType() {
  this.name = "John";
}

//SuperType prototype
SuperType.prototype.getSuperName = function () {
  return this.name;
};
//SubType prototype function
function SubType() {
  this.age = 26;
}

//Inherit the properties from SuperType

SubType.prototype = new SuperType();
// Add new property to SubType prototype
SubType.prototype.getSubAge = function () {
  return this.age;
};

//Create a SubType object
var subTypeObj = new SubType();
console.log(subTypeObj.name); //Output: John
console.log(subTypeObj.age); //Output: 26
console.log(subTypeObj.getSuperName()); //Output: John
console.log(subTypeObj.getSubAge()); //Output: 26

// Extends
class Car {
  constructor(brand, country) {
    this.carname = brand;
    this.manufactured = country;
  }
  present() {
    return (
      "I have a " + this.carname + ", manufactured in " + this.manufactured
    );
  }
}

class Model extends Car {
  constructor(brand, country, mod) {
    super(brand, country);
    this.model = mod;
  }
  show() {
    return this.present() + ", it is a " + this.model;
  }
}

const myCar = new Model("Ford", "Germany", "Mustang");
console.log(myCar.show());
