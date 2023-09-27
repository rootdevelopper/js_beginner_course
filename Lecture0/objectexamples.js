
// 1. **Creating an Object:**
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};


// 2. **Access the firstName property ("John")**
function getFirstName() {
  let firstName = person.firstName;
  return firstName;
}

// 3. **Adding property to obejct**
function setPersonCity(cityName) {
  person.city = cityName;
  return person;
}

// 4. **Modifying Object property **
function updatePersonAge(age) {
  person.age = age;
  return person;
}

// 5. **Adding nested object **
function addingPersonAddress(address) {
  person.address = address;
  return person;
}

// 6. **Iterating through object properties **
function printPersonProperties() {
  for (let key in person) {
    console.log(key + ": " + person[key]);
  }
  return person;
}

// 7. ** Check if property exists **
function containsProperty(searchProperty) {
  let hasLastName = "lastName" in person; // Check if the lastName property exists (true)
  return hasLastName;
}

// 8. ** Check if property exists **
function deletePropertyCity() {
  delete person.city; // Delete the city property
  return person;
}

// 9. ** Object Methods **
function addObjectMethod(){
  person.sayHello = function() {
    let greetings = "Hello, my name is " + this.firstName
    console.log(greetings);
    return greetings;
  };
  return person;
}

// 10. ** Object Constructor **
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}


module.exports = {
  getFirstName,
  setPersonCity,
  updatePersonAge,
  addingPersonAddress,
  printPersonProperties,
  containsProperty,
  deletePropertyCity,
  addObjectMethod,
  Car
};
