// program to create a simple calculator using the if...else...if in JavaScript.  

const operator = console.log('Enter operator to perform the calculation ( either +, -, * or / ): ');  
const number1 = parseFloat(prompt ('Enter the first number: '));  
const number2 = parseFloat(prompt ('Enter the second number: '));  
let result;  

if (operator == '+') { 
    result = number1 + number2;  
}  
else if (operator == '-') {
    result = number1 - number2;  
}  
else if (operator == '*') { 
    result = number1 * number2;  
}  
else if (operator == '/') {  
    result = number1 / number2; 
} 
else {  
    window.alert("Please Enter Valid Operator"); 
}
  
window.alert(" Result is" + result);  