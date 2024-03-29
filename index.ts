#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    // Taking input from the user for first number
  { message: "Enter first number", type: "number", name: "firstNumber" },
    // Taking input from the user for second number
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    // Taking input from the user for choosing any operator
    message: "Selet one of the operators to perform action",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "multiplication", "division"],
  },
]);

//condional statement
if(answer.operator === "addition"){
    console.log(answer.firstNumber + answer.secondNumber);
}
else if(answer.operator === "subtraction"){
    console.log(answer.firstNumber - answer.secondNumber);
}
else if(answer.operator === "multiplication"){
    console.log(answer.firstNumber * answer.secondNumber);
}
else if(answer.operator === "division"){
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please select a valid operator");
}