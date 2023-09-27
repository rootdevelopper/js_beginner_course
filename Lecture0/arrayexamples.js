
// 1. **Creating an Array:**
const fruits = ["apple", "banana", "cherry"];

function getAllFruits() {
  return fruits;
}

function accessElementAtIndex(i) {
  // // 2. **Accessing Elements:**
  let firstFruit = fruits[i]; // Access the element at index i
  return firstFruit;
}

function pushNewElement(newelEment) {
  // // 3. **Adding Elements:**
  fruits.push(newelEment);
  return fruits;
}

function removeLastElement() {
  // // 4. **Removing Elements:**
  let removedFruit = fruits.pop();
  return removedFruit;
}

function arraySize() {
  // // 5. **Checking Array Length:**
  let numFruits = fruits.length;
  return numFruits;
}

function printAllItemsInReverse() {
  const reverseArray = [];
  // 6. **Iterating through an Array (for loop):**
  for (let i = fruits.length - 1; i >= 0; i--) {
    console.log("Reverse order ", fruits[i]);
    reverseArray.push(fruits[i]);
  }
  return reverseArray;
}

function printAllItems() {
  const arrayInOrder = [];
  // 7. **Iterating through an Array (forEach):**
  fruits.forEach(function (fruit) {
    console.log("Original order ", fruit);
    arrayInOrder.push(fruit);
  });
  return arrayInOrder;
}

function filterFruitsByMinLength(MinLen) {
  // 8. **Filtering an Array:**
  let filteredFruits = fruits.filter(function (fruit) {
    // Filters fruits with names longer than MinLen characters
    return fruit.length > MinLen;
  });
  return filteredFruits;
}

function uppercaseEachFruitName() {
  // 9. **Mapping an Array:**
  let upperCaseFruits = fruits.map(function (fruit) {
    return fruit.toUpperCase(); // Maps fruits to uppercase names
  });
  return upperCaseFruits;
}

function checkIfElementExist(item) {
  // 10. **Checking if an Element Exists:**
  let hasItem = fruits.includes(item);
  return hasItem;
}

module.exports = {
  getAllFruits,
  accessElementAtIndex,
  pushNewElement,
  removeLastElement,
  arraySize,
  printAllItemsInReverse,
  printAllItems,
  filterFruitsByMinLength,
  uppercaseEachFruitName,
  checkIfElementExist,
};
