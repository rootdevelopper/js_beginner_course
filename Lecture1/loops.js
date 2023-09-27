// Function to sum numbers using a for loop
function sumWithForLoop(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  
  // Function to find the factorial of a number using a while loop
  function factorialWithWhileLoop(n) {
    let factorial = 1;
    let i = 1;
    while (i <= n) {
      factorial *= i;
      i++;
    }
    return factorial;
  }
  
  // Function to count even numbers using a do...while loop
  function countEvenNumbersWithDoWhile(n) {
    let count = 0;
    let i = 1;
    do {
      if (i % 2 === 0) {
        count++;
      }
      i++;
    } while (i <= n);
    return count;
  }
  
  module.exports = { sumWithForLoop, factorialWithWhileLoop, countEvenNumbersWithDoWhile };
  