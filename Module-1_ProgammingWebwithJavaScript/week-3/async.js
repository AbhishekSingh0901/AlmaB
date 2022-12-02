/* in this we will learn about the the synchronous 
nature of js and how does js behave asunchronously 
under specefic conditions */

// console.log(1);
// console.log(2);
// console.log(3);

// function getData() {
//   //blocking function
//   let n = 10000000000;
//   while (n > 0) {
//     n--;
//   }
//   console.log(4);
// }

// getData();
// console.log(5);

//when you run the above program the program exectus line by line
//this proves that js is single threaded as
//it waited for the getData() to complete and only then it printed 5.

// console.log(1);
// console.log(2);

// function getNum() {
//   setTimeout(() => {
//     console.log(3);
//   }, 3000);
// }

// getNum();
// console.log(4);

//Set Timeout Method

// function greet(name) {
//   console.log("HElloooooo", name, "!!");
// }

// let intervalId = setTimeout(greet, 3000, "Abhi");
// console.log("message");

//returning intervalID

// console.log("id :", intervalId);

//Display time After Every Three secs

// function showTime() {
//   //returns new date and time
//   let dateTime = new Date();

//   //return local current time
//   let time = dateTime.toLocaleTimeString();

//   console.log(time);

//   setTimeout(showTime, 3000);
// }

//call the fucntion
//showTime();

// program to see StopInterval() and stop the setInterval() method

// let count = 10;

// let id = setInterval(getC, 1000);

// function getC() {
//   console.log(count);

//   if (count === 0) {
//     clearInterval(id);
//   }
//   count--;
//}

//Another example

let n = 0;

// let interval = setInterval(function () {
//   n += 1;

//   if (n === 10) {
//     clearInterval(interval);
//   }

//   let dateTime = new Date();

//   let time = dateTime.toLocaleTimeString();

//   console.log(time);
// }, 2000);

function showTime() {
  n++;

  let dateTime = new Date();
  let time = dateTime.toLocaleTimeString();
  console.log(time);
  console.log(n);
  let id = setTimeout(showTime, 2000);

  if (n === 10) {
    clearTimeout(id);
  }
}

showTime();
