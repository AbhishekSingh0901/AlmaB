// regex is an obect that describes a sequence of characters used for defining a search pattern
// let a = /^a...s$/;
// console.log(a.test("asbbs"));

//Creating a regex:
//1: using a literal:
// const regex = /abc/;

//2. using a literal:
// const regex2 = new RegExp("abc");

//metacharecters:
// const a = /\w/;
// console.log(a.test("afdsaf"));

// const a = /\W/;
// console.log(a.test("a@$%b"));

// const a = /\0/;
// console.log(a.test("dfafads"));

const string = "Find me";
const pattern = /me/;

// search if the pattern is in string variable
const result1 = string.search(pattern);
console.log(result1); // 5

// replace the character with another character
const string1 = "Find me";
string1.replace(pattern, "found you"); // Find found you

// splitting strings into array elements
const regex1 = /[\s,]+/;
const result2 = "Hello world! ".split(regex1);
console.log(result2); // ['Hello', 'world!', '']

// searching the phone number pattern
const regex2 = /(\d{3})\D(\d{3})-(\d{4})/g;
const result3 = regex2.exec("My phone number is: 555 123-4567.");
console.log(result3); // ["555 123-4567", "555", "123", "4567"]

//validating email address

// program to validate the email address

function validateEmail(email) {
  // regex pattern for email
  const re = /\S+@\S+\.\S+/g;

  // check if the email is valid
  let result = re.test(email);
  if (result) {
    console.log("The email is valid.");
  } else {
    let newEmail = prompt("Enter a valid email:");
    validateEmail(newEmail);
  }
}

// take input
let email = prompt("Enter an email: ");

validateEmail(email);

// program to validate the phone number

function validatePhone(num) {
  // regex pattern for phone number
  const re = /^\(?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{5})$/g;

  // check if the phone number is valid
  let result = num.match(re);
  if (result) {
    console.log("The number is valid.");
  } else {
    let num = prompt("Enter number in XX-XXXXX-XXXXX format:");
    validatePhone(num);
  }
}

// take input
let number = prompt("Enter a number XX-XXXXX-XXXXX");

validatePhone(number);

//regex modifier.

// const string = "Hello hello hello";

// // performing a replacement
// const result1 = string.replace(/hello/, "world");
// console.log(result1); // Hello world hello

// // performing global replacement
// const result2 = string.replace(/hello/g, "world");
// console.log(result2); // Hello world world

// // performing case-insensitive replacement
// const result3 = string.replace(/hello/i, "world");
// console.log(result3); // world hello hello

// // performing global case-insensitive replacement
// const result4 = string.replace(/hello/gi, "world");
// console.log(result4); // world world world
