//Assignment prative

/*
1)
 Input:
var a = 5 var b = 10

Output:
15 5 50 0.5 6 9
*/

// let a = 5;
// let b = 10;

// console.log(a + b);
// console.log(b - a);
// console.log(a * b);
// console.log(a / b);
// console.log(++a);
// console.log(--b);

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

const str = "Learning JavaScript with AlmaBetter  ";

let str1 = str.slice(25, 36);
console.log(str, str1);
console.log(str.replace("Learning", "Learn"));
console.log(str.split(" ", 2)); //seperator  and limit
console.log(str.substring(0, 4));
console.log(str.substr(0, 10));
console.log(str.trim(), str1);
console.log(str.trimEnd(), str1);
console.log(str.trimStart(), str1);
console.log(str.includes(" Ja"));
console.log(str.search("ar"));
