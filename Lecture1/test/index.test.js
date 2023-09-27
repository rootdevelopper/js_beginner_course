const {
    speeding
  } = require("../index");
  
  //   if, else if, else
  
  test("Should get a speeding ticket ", () => {
    const result = speeding(120);
    expect(result).toBe(true);
    expect(typeof result).toBe("boolean");
  });

  test("Should not get a speeding ticket, just a warning", () => {
    const result = speeding(100);
    expect(result).toBe(false);
    expect(typeof result).toBe("boolean");
  });

  test("Should not get a speeding ticket, no warning", () => {
    const result = speeding(90);
    expect(result).toBe(false);
    expect(typeof result).toBe("boolean");
  });