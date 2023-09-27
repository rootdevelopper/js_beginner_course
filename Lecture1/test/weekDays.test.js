const isWeekday = require("../weekDays");

// Switch statement
test("Monday should be a weekday", () => {
  expect(isWeekday("Monday")).toBe("Weekday");
});

test("Saturday should be a weekend day", () => {
  expect(isWeekday("Saturday")).toBe("Weekend");
});

test("Invalid day should return 'Invalid day'", () => {
  expect(isWeekday("InvalidDay")).toBe("Invalid day");
});

test("Empty input should return 'Invalid day'", () => {
  expect(isWeekday("")).toBe("Invalid day");
});
