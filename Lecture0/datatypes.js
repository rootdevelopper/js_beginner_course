// index.js

// String Functions
function stringExample1() {
  return "This is a string";
}

function stringExample2(value) {
  return `You passed: ${value}`;
}

// Number Functions
function numberExample1() {
  return 42;
}

function numberExample2(a, b) {
  return a + b;
}

// Big Int Functions
function bigIntExample1() {
  return BigInt(9007199254740991);
}

function bigIntExample2(a, b) {
  return BigInt(a + b);
}

// Boolean Functions
function booleanExample1() {
  return true;
}

function booleanExample2(value) {
  return !value;
}

// Array Functions
function arrayExample1() {
  return [1, 2, 3];
}

function arrayExample2(arr) {
  return arr.length;
}

// Object Functions
function objectExample1() {
  return { key: "value" };
}

function objectExample2(obj, key) {
  return obj[key];
}

// Null Functions
function nullExample1() {
  return null;
}

function nullExample2() {
  return "This is not null";
}

module.exports = {
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
};
