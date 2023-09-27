// Function to check if a number is even or odd using a ternary operator
function isEvenOrOdd(number) {
    return number % 2 === 0 ? "Even" : "Odd";
  }
  
  // Function to determine if a person can vote using a ternary operator
  function canVote(age) {
    return age >= 18 ? "Can vote" : "Cannot vote";
  }
  
  module.exports = { isEvenOrOdd, canVote };
  