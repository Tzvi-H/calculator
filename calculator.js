const calculatorState = {
  operand1: null,
  operand2: null,
  operator: null,
  operand1Set: false,
}

const calulator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  },
}

function operate(operator, a, b) {
  return calulator[operator](a, b);
}

function addNumberToDisplay(number) {
  const display = document.querySelector('#display');
  if (display.textContent === '0' || calculatorState.operand1Set) {
    display.textContent = number;
  } else {
    display.textContent += number;
  }
}

function operatorClicked(operator) {
  calculatorState.operand1Set = true;

  const display = document.querySelector('#display');
  calculatorState.operand1 = parseFloat(display.textContent);

  switch (operator) {
    case '+':
      calculatorState.operator = 'add';
      break;
    case '−':
      calculatorState.operator = 'subtract';
      break;
    case '×':
      calculatorState.operator = 'multiply'
      break;
    case '÷':
      calculatorState.operator = 'divide'
      break ;
  }
}

function displayOperation() {
  console.log(`need to operate`)
}

function setDisplay(value) {
  const display = document.querySelector('#display');
  display.textContent = value;
}

function resetDisplay() {
  setDisplay(0);
  calculatorState.operand1Set = false;
}

function handleCalculatorClick(e) {
  e.stopPropagation();
  switch (true) {
    case e.target.classList.contains('equals'):
      displayOperation();
      break;
    case e.target.classList.contains('number'):
      addNumberToDisplay(e.target.textContent);
      break;
    case e.target.classList.contains('operator'):
      operatorClicked(e.target.textContent);
      break;
    case e.target.classList.contains('clear'):
      resetDisplay()
      break;
  }
}

function init() {
  document.querySelector('table.calculator').addEventListener('click', handleCalculatorClick)
}

init()