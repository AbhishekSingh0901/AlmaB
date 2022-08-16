// program to display the sum of natural numbers
let sum = 0;
const n = 100;

// looping from i = 1 to n
// in each iteration, i is increased by 1
for (let i = 1; i <= n; i++) {
  sum += i; // sum = sum + i
}

console.log("sum:", sum);

console.log(`*************************`);

//for..in loop
const student = {
  name: "Monica",
  class: 7,
  age: 12,
};

// using for...in
for (let key in student) {
  // display the properties
  console.log(`${key} => ${student[key]}`);
}

console.log("**************************");

const salaries = {
  jack: 24000,
  Paul: 34000,
  Monica: 55000,
};

for (let i in salaries) {
  let salary = "$" + salaries[i];

  console.log(`${i} : ${salary}`);
}

//using for...of loop

// 1.array
const students = ["John", "Sara", "Jack"];

for (let i of students) {
  // display the values
  console.log(i);
}

// 2. Strings
const str = "code";
for (let i of str) {
  console.log(i);
}

//3. maps

let map = new Map();

map.set("name", "abhi");
map.set("roll_no.", "19/BEC/001");
map.set("cgpa", 8.3);

for (let [key, value] of map) {
  console.log(key + "=" + value);
}

//practice assignment

let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];

let sum1 = 0;
let sum2 = 0;

for (let i of arr_1) {
  sum1 += i;
}

for (let i of arr_2) {
  sum2 += i;
}

console.log(sum1 + sum2);

let nn = 22;
for (i = 1; i <= nn; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

let arr = [43, "what", 9, true, "cannot", false, "be", 3.5, true];
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}
