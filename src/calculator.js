const addNumbers = (num1, num2) => {
  const result = num1 + num2;
  console.log(num1 + " + " + num2 + " = " + result);
  return result;
};

const multiplyNumbers = (num1, num2) => {
  const result = num1 * num2;
  console.log(num1 + " × " + num2 + " = " + result);
  return result;
};
const subtractNumbers = (num1, num2) => {
  const result = num1 - num2;
  console.log(num1 + " - " + num2 + " = " + result);
  return result;
};

const divideNumbers = (num1, num2) => {
  const result = num1 / num2;
  console.log(num1 + " / " + num2 + " = " + result);
  return result;
};
// Using your calculators
const sum = addNumbers(15, 27);
const product = multiplyNumbers(8, 6);
const difference = subtractNumbers(20, 5); 
const quotient = divideNumbers(20, 5);

// You can use the results in other calculations
const finalAnswer = addNumbers(sum, product);