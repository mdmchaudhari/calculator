let currentInput = '';
let currentOperator = '';
let result = 0;

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function setOperator(operator) {
  currentOperator = operator;
  if (currentInput !== '') {
    result = parseFloat(currentInput);
    currentInput = '';
  }
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  currentOperator = '';
  result = 0;
  updateDisplay();
}

function calculateResult() {
  if (currentInput !== '') {
    let secondNumber = parseFloat(currentInput);
    switch (currentOperator) {
      case '+':
        result += secondNumber;
        break;
      case '-':
        result -= secondNumber;
        break;
      case '*':
        result *= secondNumber;
        break;
      case '/':
        if (secondNumber !== 0) {
          result /= secondNumber;
        } else {
          alert('Cannot divide by zero');
          clearDisplay();
          return;
        }
        break;
    }
    currentInput = result.toString();
    currentOperator = '';
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById('display').value = currentInput !== '' ? currentInput : result;
}
