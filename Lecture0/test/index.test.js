const { helloWorld, helloWorldbyName }  = require('../index');

test('Hello World function should return "Hello, World!"', () => {
  const result = helloWorld();
  expect(result).toBe('Hello, World!');
});

test('Hello World function should return "Hello, World! + Name"', () => {
    const result = helloWorldbyName('John Doe');
    expect(result).toBe('Hello, World John Doe');
  });
