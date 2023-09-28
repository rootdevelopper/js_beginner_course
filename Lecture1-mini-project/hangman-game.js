const readline = require('readline');
const Hangman = require('./hangman');
const hangmanStates = require('./hangmanStates');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function startGame() {
  console.log('Welcome to Hangman!');

  rl.question('Enter the word to guess (lowercase letters only): ', (word) => {
    const hangman = new Hangman(word, 6);

    function playRound() {
      console.log('----------------------------------');
      console.log('Current Status:');
      console.log('----------------------------------');

      console.log(hangman.getGameState().displayWord);
      
      drawHanging(hangman.getGameState().attemptsLeft);
      console.log('         Guesses: ' + hangman.getGameState().guesses);
      console.log('         Attempts Left: ' + hangman.getGameState().attemptsLeft);

      rl.question('Guess a letter: ', (letter) => {
        const result = hangman.makeGuess(letter);
        console.log(result);

        if (hangman.isGameOver()) {

          drawHanging(0);
          console.log('Game Over!');
          console.log('The word was: ' + hangman.word);
          rl.close();
        } else {
          playRound();
        }
      });
    }

    playRound();
  });
}

function drawHanging(remainingGuesses) {
  console.log(hangmanStates[remainingGuesses]);
}

startGame();
