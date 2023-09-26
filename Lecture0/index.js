function helloWorld() {
    const greeting = 'Hello, World!';
    return greeting;
  }
  
  function helloWorldbyName(name) {
    let greeting = 'Hello, World';
    greeting += ` ${name}`;

    return greeting;
  }
  
  module.exports = {
    helloWorld,
    helloWorldbyName,
  };
  