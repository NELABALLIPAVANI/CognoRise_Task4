// script.js

let currentInput = '';
let previousInput = '';
let operator = null;

// Append number to the display
function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

// Choose an operator
function chooseOperator(op) {
  if (currentInput === '') return;
  if (previousInput !== '') calculate();
  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

// Calculate the result
function calculate() {
  if (operator === null || currentInput === '' || previousInput === '') return;
  
  const prev = parseFloat(previousInput);
  const curr = parseFloat(currentInput);
  let result = 0;

  switch (operator) {
    case '+':
      result = prev + curr;
      break;
    case '-':
      result = prev - curr;
      break;
    case '*':
      result = prev * curr;
      break;
    case '/':
      result = prev / curr;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = null;
  previousInput = '';
  updateDisplay();
}

// Clear the display
function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = null;
  updateDisplay();
}

// Update the display
function updateDisplay() {
  const display = document.getElementById('display');
  display.value = currentInput || '0';
}
