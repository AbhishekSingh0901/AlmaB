//Example of a Function

//decalaration:

function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(3, 9));

// declaring a function named greet()
function greet() {
  console.log("Hello there");
}

//calling the function
greet();

//passing parameters and args:

function calculateArea(width, height) {
  if (width > 0 && height > 0) {
    console.log(`Area = ${width * height}`);
  } else {
    console.log(`pass +ve numbers`);
  }
}

calculateArea(3, 4);

function sayThanks(name = "john") {
  //here john is the default value
  console.log(
    "Thank you for your purchase " + name + "! We appreciate your business."
  );
}

sayThanks("Dick");

//Helper fucntion

function multiplyByNineFifths(number) {
  return number * (9 / 5);
}

function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
}

getFahrenheit(15); // Returns 59

//function expression

const calcArea = function (width, height) {
  if (width > 0 && height > 0) {
    return `Area = ${width * height}`;
  } else {
    return `erroe! Give +ve input`;
  }
};

console.log(calcArea(6, 8));

//arrow function
const rectangleArea = (width, height) => width * height;

console.log(rectangleArea(4, 3));

//Assignment

function countdown(num) {
  if (num > 0) {
    for (let i = num; i > 0; i--) {
      console.log(i);
    }
    console.log("done");
  } else {
    console.log("sorry! enter a valid Number");
  }
}

countdown(6);
