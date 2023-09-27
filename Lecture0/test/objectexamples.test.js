const {
  getFirstName,
  setPersonCity,
  updatePersonAge,
  addingPersonAddress,
  printPersonProperties,
  containsProperty,
  deletePropertyCity,
  addObjectMethod,
  Car
} = require("../objectexamples");

//   Arrays

test("Should get first name", () => {
  const firstName = 'John';
  const result = getFirstName();
  expect(result).toBe(firstName);
});

test("Should add city to Object ", () => {
  let cityName = "New York";
  const result = setPersonCity(cityName)
  expect(result.city).toEqual(cityName);
});

test("Should update person age ", () => {
  let newAge = 30;
  const result = updatePersonAge(newAge);
  expect(result.age).toBe(newAge);
});

test("Should add person address ", () => {
  const address = {street: "Main St", number: "123"};
  const result = addingPersonAddress(address);
  expect(result.address).toEqual(address);
});

test("Should print person properties  ", () => {
 const result = printPersonProperties();
 expect(result).toEqual({"address": {"number": "123", "street": "Main St"}, "age": 30, "city": "New York", "firstName": "John", "lastName": "Doe"});
});

test("Should check if person has property ", () => {
  const result = containsProperty("city");
  expect(result).toBe(true);
});

test("Should delete city property  ", () => {
  const result = deletePropertyCity();
  expect(result.city).toBeUndefined();
});

test("Should add method to object  ", () => {
  const result = addObjectMethod();
  console.log("says what ", result.sayHello());
  expect(result.sayHello()).toEqual("Hello, my name is John");

});

test("Should create a car object   ", () => {
const result = new Car("Tesla", "x", "2019");
expect(result.make).toEqual("Tesla");
expect(result.model).toEqual("x");
expect(result.year).toEqual("2019");
});

