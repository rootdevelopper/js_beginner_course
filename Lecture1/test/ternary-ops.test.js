const { isEvenOrOdd, canVote } = require("../ternary-ops");

test("Check if a number is even or odd", () => {
  expect(isEvenOrOdd(4)).toBe("Even");
  expect(isEvenOrOdd(7)).toBe("Odd");
  expect(isEvenOrOdd(0)).toBe("Even");
  expect(isEvenOrOdd(-5)).toBe("Odd");
});

test("Determine if a person can vote", () => {
  expect(canVote(20)).toBe("Can vote");
  expect(canVote(17)).toBe("Cannot vote");
  expect(canVote(18)).toBe("Can vote");
  expect(canVote(65)).toBe("Can vote");
});
