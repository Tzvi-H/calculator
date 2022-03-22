const calculatorState = {
  operand1: null,
  operator: null,
  lastClick: null
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
  if (display.textContent === '0' ||  calculatorState.lastClick !== 'number') {//  calculatorState.operand1 || display.textContent === 'Not a number') {
    display.textContent = number;
  } else {
    display.textContent += number;
  }
}

function operatorClicked(type) {
  const display = document.querySelector('#display');

  if (calculatorState.operand1) {
    displayOperation()
  }

  calculatorState.operand1 = parseFloat(display.textContent);
  calculatorState.operator = type;
}

function displayOperation() {
  const operator = calculatorState['operator'];
  const op1 = calculatorState['operand1'];
  const op2 = parseFloat(document.querySelector('#display').textContent);

  if (operator === 'divide' && op2 === 0) {
    setDisplay('Not a number');
    resetState()
    return;
  }

  const result = operate(operator, op1, op2);
  setDisplay(result);
  resetState()
}

function setDisplay(value) {
  const display = document.querySelector('#display');
  display.textContent = value;
}

function resetDisplay() {
  setDisplay(0);
  resetState()
}

function resetState() {
  calculatorState.operand1 = null;
  calculatorState.operator = null;
}

function handleCalculatorClick(e) {
  e.stopPropagation();
  switch (true) {
    case e.target.classList.contains('number'):
      addNumberToDisplay(e.target.textContent);
      calculatorState.lastClick = 'number';
      break;
    case e.target.classList.contains('operator'):
      operatorClicked(e.target.id);
      calculatorState.lastClick = 'operator';
      break;
    case e.target.classList.contains('equals'):
      displayOperation();
      calculatorState.lastClick = 'equals';
      break;
    case e.target.classList.contains('clear'):
      resetDisplay()
      calculatorState.lastClick = 'clear';
      break;
  }
}

function init() {
  document.querySelector('table.calculator').addEventListener('click', handleCalculatorClick)
}

init()