const {
  calculateGrade
  } = require("../calculateGrades");
  
  //   if, else if, else
  
  test("Should get an A ", () => {
    const score = 99;
    const result = calculateGrade(score);
    expect(result).toEqual("A");
  });

  test("Should get a B ", () => {
    const score = 85;
    const result = calculateGrade(score);
    expect(result).toEqual("B");
  });

  test("Should get a C ", () => {
    const score = 73;
    const result = calculateGrade(score);
    expect(result).toEqual("C");
  });

  test("Should get a D ", () => {
    const score = 69;
    const result = calculateGrade(score);
    expect(result).toEqual("D");
  });

  test("Should get an F ", () => {
    const score = 59;
    const result = calculateGrade(score);
    expect(result).toEqual("F");
  });