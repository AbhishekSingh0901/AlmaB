// //js Destructuring ES6

// const person = {
//   names: "Abhi",
//   age: 25,
//   gender: "male",
// };

// let { names, age, gender } = person;

// console.log(names, age, gender);

// //import and export - to see import go to function file
// function contact(name, age) {
//   console.log(`${name} and ${age}`);
// }

// function add(num1, num2) {
//   console.log(num1 + num2);
// }

// // module.exports = { contact, add };
// export { contact as hello, add as summ };

// //promises
// //example1:

// function valueOp(value) {
//   console.log(value);
// }

// let myPromise = new Promise(function (resolve, reject) {
//   let x = 0;

//   //producing code (it'll take some time)
//   if (x === 0) {
//     resolve("OK");
//   } else {
//     reject("Error");
//   }
// });

// myPromise.then(
//   function (value) {
//     valueOp(value);
//   },
//   function (error) {
//     valueOp(error);
//   }
// );

// //example 2: in this we will see my setTimeout and promise both;

// function love(value) {
//   console.log(value);
// }

// setTimeout(function () {
//   love("i love you!");
// }, 3000);

// //using promise:

// let myPromiseFn = new Promise(function (myResolve, myReject) {
//   //produncinf function
//   setTimeout(function () {
//     myResolve("I Love You!");
//   }, 3000);
// });

// myPromiseFn.then(function (value) {
//   console.log(value);
// });

// //Rest Parameter and Spread Operator:

// function show(a, b, ...args) {
//   console.log(a);
//   console.log(b);
//   console.log(args);
// }

// show(1, 2, 3, 4, 5, 6, 7, 8);

// //spread: is used with arrays(iterable values)
// let arr = [1, 2];
// let arr1 = [3, ...arr, 4, 5, 6];

// console.log(arr1);

// //Lodash

// //testing
// var a = require("lodash");
// var numbers = [1, 2, 3, 4];
// // var listOfNumbers = "";
// // a.each(numbers, function (x) {
// //   listOfNumbers += x + " ";
// // });
// // console.log(listOfNumbers);

// /**Array */

// //concat:
// let newArray = a.concat(numbers, [9, 8]);
// console.log(newArray);

// //fill- fills a number from start number till the end
// newArray = a.fill(newArray, 0, 2, 4);

// console.log(newArray);

// //chunck- makes chunck of arrays
// newArray = a.chunk(newArray, 3);
// console.log(newArray);

// //reverse- reverses the array:
// newArray = a.reverse(newArray);
// console.log(newArray);

// //compact- removes all falsy values from array

// let arr = [1, false, NaN, undefined, 2, "", 3, 0];

// newArray = a.compact(arr);
// console.log(newArray);

// /** Collection */

// let list = [
//   { user: "joe", age: 23, active: false },
//   { user: "Jack", age: 29, active: false },
// ];

// let res = a.every(list, ["active", false]);

// console.log(res);

// //Date
// date = a.now(); //milliseconds from 1st Jan 1970
// console.log(date);

// //function:
// function generateScratchCard() {
//   console.log("you received a scratch card");
// }

// let gen = a.once(generateScratchCard);
// gen();
// gen();
// gen();

//luxon

const { DateTime } = require("luxon");

// const now = DateTime.now();
// console.log(now);

// dl = now.toString();
// console.log(dl);
// console.log(now.zoneName);

// newDate = now.minus({ days: 52 });

// console.log(newDate.toString());

// newTime = now.minus({ hour: 5 });

// console.log(newTime.toString());

// nextMon = now.plus({ days: 7 });
// console.log(nextMon.toString());
// console.log(
//   DateTime.now()
//     .setZone("America/New_York")
//     .minus({ weeks: 1 })
//     .endOf("day")
//     .toISO()
// );

// console.log(DateTime.local(2017, 5, 15, 8, 30));

// console.log(now.toLocaleString());

// console.log(now.year);
// console.log(now.day);
// console.log(now.month);
// console.log(now.weekday);
// console.log(now.second);

var dt = DateTime.now();
var f = { month: "long", day: "numeric" };
console.log(dt.setLocale("fr").toLocaleString(f)); //=> '14 septembre'
console.log(dt.setLocale("en-GB").toLocaleString(f)); //=> '14 September'
console.log(dt.setLocale("en-US").toLocaleString(f)); //=> 'September 14'
