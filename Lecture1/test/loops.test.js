const {
    sumWithForLoop,
    factorialWithWhileLoop,
    countEvenNumbersWithDoWhile,
  } = require("../loops");
  
  test("Sum numbers using a for loop", () => {
    expect(sumWithForLoop(5)).toBe(15);
    expect(sumWithForLoop(10)).toBe(55);
    expect(sumWithForLoop(1)).toBe(1);
  });
  
  test("Calculate factorial using a while loop", () => {
    expect(factorialWithWhileLoop(5)).toBe(120);
    expect(factorialWithWhileLoop(0)).toBe(1);
    expect(factorialWithWhileLoop(1)).toBe(1);
  });
  
  test("Count even numbers using a do...while loop", () => {
    expect(countEvenNumbersWithDoWhile(10)).toBe(5);
    expect(countEvenNumbersWithDoWhile(20)).toBe(10);
    expect(countEvenNumbersWithDoWhile(1)).toBe(0);
  });
  