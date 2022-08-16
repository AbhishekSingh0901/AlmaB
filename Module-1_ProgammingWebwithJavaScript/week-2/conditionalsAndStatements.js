/* 
The syntax of the if statement is:


if (condition) {
     the body of if
}

1. If the condition is evaluated to true, the code inside the body 
of if is executed.

2. If the condition is evaluated to false, the code inside the body
of if is skipped.
*/

const number = 10;

if (number > 0) {
  console.log("positive number!");
} else {
  console.log("negative number!");
}

//switch statement
/*
switch(variable/expression) {
    case value1:
        body of case 1
        break;

    case value2:
        body of case 2
        break;

    case valueN:
        body of case N
        break;

    default:
        body of default
} */

//if you forget break
var foo = 0;
switch (foo) {
  case -1:
    console.log("negative 1");
    break;
  case 0: // foo is 0 so criteria met here so this block will run
    console.log(0);
  // NOTE: the forgotten break would have been here
  case 1: // no break statement in 'case 0:' so this case will run as well
    console.log(1);
    break; // it encounters this break so will not continue into 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log("default");
}
