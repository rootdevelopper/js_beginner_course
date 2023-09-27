class Hangman {
    constructor(word, maxAttempts) {
      this.word = word.toLowerCase();
      this.maxAttempts = maxAttempts;
      this.attempts = 0;
      this.guesses = [];
      this.displayWord = this.initializeDisplayWord();
    }
  
    initializeDisplayWord() {
      const displayWord = [];
      for (let i = 0; i < this.word.length; i++) {
        if (this.word[i] === ' ') {
          displayWord.push(' ');
        } else {
          displayWord.push('_');
        }
      }
      return displayWord;
    }
  
    makeGuess(letter) {
      letter = letter.toLowerCase();
      if (this.isGameOver()) {
        return 'Game over!';
      }
  
      if (this.guesses.includes(letter)) {
        return 'You already guessed this letter.';
      }
  
      this.guesses.push(letter);
      if (this.word.includes(letter)) {
        this.updateDisplayWord(letter);
        if (this.isWordGuessed()) {
          return 'You won! The word is: ' + this.word;
        }
        return 'Good guess!';
      } else {
        this.attempts++;
        if (this.isGameOver()) {
          return 'You lost. The word was: ' + this.word;
        }
        return 'Incorrect guess. Attempts left: ' + (this.maxAttempts - this.attempts);
      }
    }
  
    updateDisplayWord(letter) {
      for (let i = 0; i < this.word.length; i++) {
        if (this.word[i] === letter) {
          this.displayWord[i] = letter;
        }
      }
    }
  
    isGameOver() {
      return this.attempts >= this.maxAttempts || this.isWordGuessed();
    }
  
    isWordGuessed() {
      return this.displayWord.join('') === this.word;
    }
  
    getGameState() {
      return {
        displayWord: this.displayWord.join(' '),
        attemptsLeft: this.maxAttempts - this.attempts,
        guesses: this.guesses.join(', '),
      };
    }
  }
  
  module.exports = Hangman;
  