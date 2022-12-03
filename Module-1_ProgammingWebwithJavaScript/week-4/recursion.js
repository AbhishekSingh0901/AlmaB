// program to count down numbers to 1
function countDown(number) {
  // display the number
  console.log(number);

  // decrease the number value
  const newNumber = number - 1;

  // base case
  if (newNumber > 0) {
    countDown(newNumber);
  }
}

countDown(4);

// program to find the factorial of a number
function factorial(x) {
  // if number is 0
  if (x === 0 || x === 1) {
    return 1;
  }

  // if number is positive
  else {
    return x * factorial(x - 1);
  }
}

const num = 3;

// calling factorial() if num is non-negative
if (num > 0) {
  let result = factorial(num);
  console.log(`The factorial of ${num} is ${result}`);
}

//*Problem Set

//power
function power(val, pow) {
  if (pow === 0) {
    return 1;
  }
  return val * power(val, pow - 1);
}

//factorial
function factorial(num) {
  if (num < 0) {
    return 0;
  } else if (num === 0 || num === 1) {
    return 1;
  }

  return num * factorial(num - 1);
}

//product of Array

function productofArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  let num = arr.pop();
  return num * productofArray(arr);
}

//Write a recursive function called reverse which accepts a string and returns a new string in reverse.
function reverse(str) {
  if (str.length <= 1) return str;
  console.log(str);
  return reverse(str.slice(1)) + str[0];
}

console.log(reverse("hello"));

//isPalindrome

function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}

console.log(isPalindrome("atatat"));
