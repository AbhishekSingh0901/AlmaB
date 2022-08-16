//objects in js is a non primitve datatype the allows to store multiple collection of data with a value and a key
const person = {
  name: "Abhi",
  age: 22,
  greet: function () {
    console.log(this.name, "says hello");
  },
};

person.greet();

//nested objests
const student = {
  name: "John",
  age: 23,
  marks: {
    science: 81,
    maths: 92,
  },
};

console.log(student.marks.maths);

//Set - is a collection of unique value and does not have any duplicate values
const letters = new Set(["a", "b", "c"]);

//to add a value
letters.add("d");
console.log(letters);

//to delete a value
letters.delete("b");
console.log(letters);

//to check if the value exsits
console.log(letters.has("b"));

console.log(letters.values());

console.log(letters.entries());
// List all entries
let text = "";

letters.forEach(function (value) {
  text += value + " ";
});

console.log(text);

//Map:

const percentage = new Map([
  ["John", 92],
  ["Jane", 96],
  ["kevin", 75],
  ["robin", 56],
  ["liz", 89],
]);

//or

const percentage2 = new Map();

percentage2.set("John", 92);
percentage2.set("Jane", 96);

console.log(percentage2.get("John"));

percentage2.clear();

console.log(percentage2);

percentage.delete("John");
console.log(percentage);

console.log(percentage.entries());

// JSON object

const data = {
  name: "John",
  age: 22,
  hobby: {
    reading: true,
    gaming: false,
    sport: "football",
  },
  class: ["JavaScript", "HTML", "CSS"],
};

const JsonData = JSON.stringify(data);

console.log(JsonData);

// accessing JSON object
/*
console.log(data.name); // John
console.log(data.hobby); // { gaming: false, reading: true, sport: "football"}

console.log(data.hobby.sport); // football
console.log(data.class[1]); // HTML
*/
