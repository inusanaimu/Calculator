// Create a function for each operator
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { 
  if(b === 0){
    alert("Cannot divide by zero");
    return;
  }
  return a / b; 
}
function mod(a, b) { return a % b; }
function power(a, b) { return Math.pow(a, b); }
function square(a) { return Math.pow(a, 2); }
function squareRoot(a) { return Math.sqrt(a); }
function log(a) { return Math.log10(a); }
function ln(a) { return Math.log(a); }
function sine(a) { return Math.sin(a); }
function cosine(a) { return Math.cos(a); }
function tangent(a) { return Math.tan(a); }

// Get the input values from the user
let input = prompt("Enter the expression to be calculated:");

// Check if input is valid
if(!input){
  alert("Invalid input. Please enter a valid expression.");
  return;
}

// Use a regular expression to match numbers and operators
let pattern = /\d+|[+\-*/%^]|sqrt|log|ln|sin|cos|tan/g;
let match = input.match(pattern);

// Initialize the result with the first number
let result;
if (isNaN(match[0])) {
  alert("Invalid input. Please enter a valid expression.");
  return;
} else {
  result = parseFloat(match[0]);
}

// Iterate through the remaining matches
for(let i = 1; i < match.length; i += 2){
  let operator = match[i];
  let number;
  if (isNaN(match[i + 1])) {
    alert("Invalid input. Please enter a valid expression.");
    return;
  } else {
    number = parseFloat(match[i + 1]);
  }
  
  switch (operator) {
    case "+":
        result = add(result, number);
        break;
    case "-":
        result = subtract(result, number);
        break;
    case "*":
        result = multiply(result, number);
        break;
    case "/":
        result = divide(result, number);
        break;
    case "%":
        result = mod(result, number);
        break;
    case "^":
        result = power(result, number);
        break;
    case "sqrt":
        result = squareRoot(result);
        break;
    case "log":
        result = log(result);
        break;
    case "ln":
        result = ln(result);
        break;
    case "sin":
        result = sine(result);
        break;
    case "cos":
        result = cosine(result);
        break;
    case "tan":
        result = tangent(result);
        break;
    default:
        alert("Invalid operator");
  }
}


// Display the result 
if (result !== undefined) {
    alert("The result is: " + result);
}