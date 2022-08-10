//creating an array
//  1) using Array literal.
const words = ["hello", "this", "is", "me!"];
console.log(words);

//  2) using new Keyword
const array2 = new Array("eat", "sleep", 23, true);

//you can also add functions in an Array

//Adding elements
//  1)push method is used to push a new element at the end of the array
array2.push(function add(a, b) {
  console.log(a + b);
});

// 2)unshift method is used to add a new element at the stating of array

array2.unshift("Aru,");

//replacing an element
array2[3] = "helaluia";
console.log(array2);

//finding length of array
console.log(array2.length);

//most commonly used methods in javaScript

let arr = ["a", "b", "c", "d"];
let arr1 = ["d", "e", "f"];

//concat - to join 2 or more arrays in a resulting array
const myarr = arr.concat(arr1);
console.log(myarr);

console.log(arr.indexOf("a"));

//filter method creates a new array that pass the test provided by a function

const year = [14, 16, 19, 23, 12, 44, 9];
function checkAdult(age) {
  return age >= 18;
}

const adults = year.filter(checkAdult);
console.log(adults);

//find method returns the first value of array that passes the test.
//similarly findindex method return the index of thr first element that passes the test.
console.log(year.find(checkAdult));
console.log(year.findIndex(checkAdult));

//for each calls the function for each element
let sum = 0;
const numbers = [65, 44, 12, 4];
let sumarr = numbers.forEach(myFunction);

function myFunction(item) {
  sum += item;
}

//includes method cehcks if array contains a specified element or not.
console.log(numbers.includes(65));

//map method creates a new array for calling a function once for every element
const ages_sqrt = numbers.map(Math.sqrt);
console.log(ages_sqrt);

//slice mothod takes the start and end indexes and passes a new sliced array
console.log(year);
console.log(year.slice(2, 6));

//splice method in Array is used to remove or replace existing elements and/or adds new elements
//array.splice(index to start , howmay elements to remvoe , el1, el2, el3,..);
//it does not create a new array overwrites the orginal array.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "kiwi", "lemon");
console.log(fruits);

//for only removing
console.log(fruits.splice(2, 2));

//Multidimensional Array:

//Adding Elements
let studentsData = [
  ["Jack", 24],
  ["Sara", 23],
  ["Peter", 24],
];

console.log(studentsData[0][1]);

studentsData.push(["Aru", 21]);
studentsData[0].push(21);
studentsData.splice(4, 0, ["Abhi", 22]);
studentsData.unshift(["Random", 25]);

console.log(studentsData);

//Removing Elements
studentsData.pop();
studentsData[1].pop();
studentsData.splice(2, 1);
console.log(studentsData);

studentsData.forEach((student) => {
  student.forEach((data) => {
    console.log(data);
  });
});
