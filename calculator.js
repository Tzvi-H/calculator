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
  console.log(number);
}

function displayCalculation(operation) {
  console.log(`need to operate ${operation}`)
}

function clearDisplay() {
  console.log('need to clear display');
}

function handleCalculatorClick(e) {
  e.stopPropagation();
  switch (true) {
    case e.target.classList.contains('number'):
      addNumberToDisplay(e.target.textContent);
      break;
    case e.target.classList.contains('operator'):
      displayCalculation(e.target.textContent);
      break;
    case e.target.classList.contains('clear'):
      clearDisplay()
      break;
    default:
      console.log('clicked on something else');
  }
}

function init() {
  document.querySelector('table.calculator').addEventListener('click', handleCalculatorClick)
}

init()