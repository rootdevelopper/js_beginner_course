const {
  stringExample1,
  stringExample2,
  numberExample1,
  numberExample2,
  bigIntExample1,
  bigIntExample2,
  booleanExample1,
  booleanExample2,
  arrayExample1,
  arrayExample2,
  objectExample1,
  objectExample2,
  nullExample1,
  nullExample2,
} = require("../datatypes");


// Primitives

// String Tests
test("stringExample1 function should return a string", () => {
  const result = stringExample1();
  expect(typeof result).toBe("string");
});

test("stringExample2 function should return a string with the provided value", () => {
  const result = stringExample2("test");
  expect(result).toBe("You passed: test");
});

// Number Tests
test("numberExample1 function should return a number", () => {
  const result = numberExample1();
  expect(typeof result).toBe("number");
});

test("numberExample2 function should return the sum of two numbers", () => {
  const result = numberExample2(10, 20);
  expect(result).toBe(30);
});

// BigInt Tests
test("bigIntExample1 function should return a number", () => {
  const result = bigIntExample1();
  expect(typeof result).toBe("bigint");
});

test("bigIntExample2 function should return the sum of two numbers", () => {
  const result = bigIntExample2(10, 20);
  expect(result).toBe(30n);
});

// Boolean Tests
test("booleanExample1 function should return a boolean", () => {
  const result = booleanExample1();
  expect(typeof result).toBe("boolean");
});

test("booleanExample2 function should return the negation of the provided boolean", () => {
  const result = booleanExample2(true);
  expect(result).toBe(false);
});

// Null Tests
test("nullExample1 function should return null", () => {
  const result = nullExample1();
  expect(result).toBeNull();
});

test("nullExample2 function should return a string", () => {
  const result = nullExample2();
  expect(typeof result).toBe("string");
});

// Array Tests
test("arrayExample1 function should return an array", () => {
  const result = arrayExample1();
  expect(Array.isArray(result)).toBe(true);
});

test("arrayExample2 function should return the length of the provided array", () => {
  const result = arrayExample2([1, 2, 3, 4]);
  expect(result).toBe(4);
});

// Object Tests
test("objectExample1 function should return an object", () => {
  const result = objectExample1();
  expect(typeof result).toBe("object");
});

test("objectExample2 function should return the value associated with the provided key in the object", () => {
  const result = objectExample2({ key: "value" }, "key");
  expect(result).toBe("value");
});
