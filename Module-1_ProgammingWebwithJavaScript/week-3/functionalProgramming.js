/**
 * pure funcitons
 * input -> predictable output
 */

//pure function
function modify(c) {
  let a = 5;
  return c + a;
}

//impure function
let d = 5;
function modify2(x) {
  return c + d;
}

//Another Example

//pure function
function sayGreeting(name) {
  return `Hello ${name}`;
}

//impure function
let greeting = "Hello";
function notPureGreeting(name) {
  return `${greeting} ${name}`;
}

//First Order function:

//storage in variable:
function Mygreeting(hola) {
  console.log(hola);
}

var a = Mygreeting("hello");

//passage as arg to another fn

function getSum(a = 2, b = 2) {
  return a + b;
}

function MultiplySum(sum, num) {
  return sum() * num; //used in return
}

console.log(MultiplySum(getSum, 2));

// stored in a DS
let Arr = [getSum, MultiplySum];

var func = Arr[0](2, 3);
console.log(func);

getSum.myProperty = "hehe!";
console.log(getSum.myProperty);

//Higher Order Function
var myNums = [1, 2, 3, 4, 5];

function doubleNum(num) {
  return num * 2;
}

/*map is an inbulit js function used in arrays in this it takes
the paramteres one by one and pass then as an argument to the function
which is passed as a parameter in map. 

so we can say map is a higher order function.
*/
var doubleNum = myNums.map(doubleNum);

console.log(doubleNum);

//Async Function

function speak(string) {
  console.log(string);
}

const delayedfunction = function (fn) {
  return function (val, delay) {
    setTimeout(function () {
      fn(val);
    }, delay);
  };
};

var delaySpeak = delayedfunction(speak);

delaySpeak("bol radha bol", 1000);

//another simpler exapmle - understanding callback

let data = 10;
function getData(fn) {
  //Api network cal -> hosting environment , and it'll return data
  fn(data);
}

function printOp(data) {
  console.log(data);
}

getData(printOp);

//function composistion

//Get the name of the user and make it uppercase

//1. get the name
//2. change it to uppercase

const user = {
  name: "Abhi",
  age: 22,
};

function getName(user) {
  return user.name;
}

function capitalize(value) {
  return value.toUpperCase();
}

console.log(capitalize(getName(user)));

//better ways to do composition using Compose and Pipe.

//reduceRight

const nums = [1, 2, 3];
const res = nums.reduceRight(function (a, b) {
  return a + b;
}, 0);

console.log(res);

//using this to do composition

const comp =
  (...fns) =>
  (x) =>
    fns.reduceRight((a, b) => b(a), x);

const double = (x) => x * 2;
const square = (x) => x * x;

const finalOP = comp(square, double)(3);
console.log(finalOP);

//in pipe the order of calling the function reverses
const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((a, b) => b(a), x);

const finalOP2 = pipe(square, double)(3);
console.log(finalOP2);
