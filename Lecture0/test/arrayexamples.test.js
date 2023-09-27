const {
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
} = require("../arrayexamples");

//   Arrays

test("Should get an array with all the fruits", () => {
  const result = getAllFruits();
  expect(Array.isArray(result)).toBe(true);
});

test("Should return fruit at index ", () => {
  let index = 0;
  const result = accessElementAtIndex(index);
  expect(result).toBe("apple");
});

test("Should push new element ", () => {
  let newElement = "orange";
  const result = pushNewElement(newElement);
  expect(result[3]).toBe("orange");
});

test("Should remove last element ", () => {
  const result = removeLastElement();
  expect(result).toBe("orange");
});

test("Should return the size of the array ", () => {
  const result = arraySize();
  expect(result).toBe(3);
});

test("Should return the array in reverse ", () => {
  const reverseArray = ["cherry", "banana", "apple"];
  const result = printAllItemsInReverse();
  expect(result).toEqual(reverseArray);
});

test("Should return the array in the original order ", () => {
  const arrayInOrder = ["apple", "banana", "cherry"];
  const result = printAllItems();
  expect(result).toEqual(arrayInOrder);
});

test("Should return filtered fruits by min length ", () => {
  const filteredArray = ["banana", "cherry"];
  const result = filterFruitsByMinLength(5);
  expect(result).toEqual(filteredArray);
});

test("Should return all fruit names uppercased ", () => {
  const uppercasedArray = ["APPLE", "BANANA", "CHERRY"];
  const result = uppercaseEachFruitName();
  expect(result).toEqual(uppercasedArray);
});

test("Should return true if item exists ", () => {
  const item = "banana";
  const result = checkIfElementExist(item);
  expect(result).toBe(true);
});
