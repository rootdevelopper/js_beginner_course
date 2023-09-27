const Hangman = require('../hangman');

describe('Hangman', () => {
  let hangman;

  beforeEach(() => {
    hangman = new Hangman('javascript', 6);
  });

  test('makeGuess should correctly guess a letter', () => {
    const result = hangman.makeGuess('a');
    expect(result).toBe('Good guess!');
    expect(hangman.getGameState().displayWord).toBe("_ a _ a _ _ _ _ _ _");
  });

  test('makeGuess should handle incorrect guess', () => {
    const result = hangman.makeGuess('x');
    expect(result).toBe('Incorrect guess. Attempts left: 5');
    expect(hangman.getGameState().attemptsLeft).toBe(5);
  });

  test('makeGuess should handle game over', () => {
    hangman.makeGuess('j');
    hangman.makeGuess('a');
    hangman.makeGuess('v');
    hangman.makeGuess('s');
    hangman.makeGuess('m');
    hangman.makeGuess('c');
    hangman.makeGuess('i');
    hangman.makeGuess('p');
    hangman.makeGuess('t');

    const result = hangman.makeGuess('r');
    expect(result).toBe('You won! The word is: javascript');
  });

  test('makeGuess should prevent duplicate guesses', () => {
    hangman.makeGuess('a');
    const result = hangman.makeGuess('a');
    expect(result).toBe('You already guessed this letter.');
  });

  test('getGameState should return current game state', () => {
    hangman.makeGuess('j');
    hangman.makeGuess('a');
    const gameState = hangman.getGameState();
    expect(gameState.displayWord).toBe('j a _ a _ _ _ _ _ _');
    expect(gameState.attemptsLeft).toBe(6);
    expect(gameState.guesses).toBe('j, a');
  });
});
