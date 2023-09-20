function add(a, b) {
  const A = Number(a);
  const B = Number(b);
  const C = A + B;
  return C;
}

function divide(a, b) {
  const A = Number(a);
  const B = Number(b);
  const C = A / B;
  return C;
}

function multiply(a, b) {
  const A = Number(a);
  const B = Number(b);
  const C = A * B;
  return C;
}

function subtract(a, b) {
  const A = Number(a);
  const B = Number(b);
  const C = A - B;
  return C;
}

function calculate(a, b, operation, setInput, clear) {
  switch (operation) {
    case '+':
      setInput(add(b, a).toString());
      break;
    case '-':
      setInput(subtract(b, a).toString());
      break;
    case '*':
      setInput(multiply(b, a).toString());
      break;
    case '/':
      setInput(divide(b, a).toString());
      break;
    default:
      clear();
      break;
  }
}

module.exports = {
  add, subtract, divide, multiply, calculate,
};
