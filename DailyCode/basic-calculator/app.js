const showResult = document.getElementById("result");

let symbol = prompt("Enter the mathematical symbols you want to do. eg. +, -, *, /");
let num1 = Number(prompt("Enter first number."));
let num2 = Number(prompt("Enter second number."));
let result = 0;

switch (symbol) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    result = num1 / num2;
    break;
  default:
    result = 0;
    break;
}

console.log(result);
showResult.innerHTML = "Result equal " + result;
