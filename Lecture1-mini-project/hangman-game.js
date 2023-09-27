const readline = require('readline');
const Hangman = require('./hangman');

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
      console.log(hangman.getGameState().displayWord);
      console.log('Guesses: ' + hangman.getGameState().guesses);
      console.log('Attempts Left: ' + hangman.getGameState().attemptsLeft);

      rl.question('Guess a letter: ', (letter) => {
        const result = hangman.makeGuess(letter);
        console.log(result);

        if (hangman.isGameOver()) {
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

startGame();
