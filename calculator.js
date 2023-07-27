function calculate(num1, operator, num2) {
    if (operator === '+') {
      return num1 + num2;
    } else if (operator === '-') {
      return num1 - num2;
    } else if (operator === '*') {
      return num1 * num2;
    } else if (operator === '/') {
      if (num2 === 0) {
        return "Cannot divide by zero";
      }
      return num1 / num2;
    } else {
      return "Invalid operator";
    }
  }
  
  

console.log(calculate(5, '+', 3)); // Output: 8
