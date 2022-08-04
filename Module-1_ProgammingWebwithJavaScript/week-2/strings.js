//Assignment prative

/*
1)
 Input:
var a = 5 var b = 10

Output:
15 5 50 0.5 6 9
*/

let a = 5;
let b = 10;

console.log(a + b);
console.log(b - a);
console.log(a * b);
console.log(a / b);
console.log(++a);
console.log(--b);

/*
-STRING METHODS-
    charat(index)
    concat()
    replace()
    split() - converts string into array of string 
    substr(start, length)
    substring(start, end)
    slice(start, end)
    toLowerCase()
    toUpperCase()
    trim()
    includes() - takes string return true of false
    search()  - takes string return the start index
*/

const str = "Learning JavaScript with AlmaBetter";
const str1 = str.slice(25, 36);
console.log(str.charAt(3));
console.log(str.concat(" and Udemy"));
console.log(str.replace("JavaScript", "Web3.0"));
console.log(str.split());
console.log(str.substr(2, 8));
console.log(str.substring(2, 8));
console.log(str1);
console.log(str.toUpperCase());
console.log(str.trim());
