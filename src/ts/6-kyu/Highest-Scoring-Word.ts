// Description:
/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

// My Solution:
export const high = (str: string): string =>
  str
    .split(" ")
    .reduce((wordDefender: string, wordChallenger: string): string => {
      const calcWordScore = (word: string): number =>
        Array.from(word).reduce(
          (scoreAccum: number, char: string): number =>
            scoreAccum + char.charCodeAt(0) - 96,
          0,
        );

      const defenderScore: number = calcWordScore(wordDefender);
      const challengerScore: number = calcWordScore(wordChallenger);

      return challengerScore > defenderScore ? wordChallenger : wordDefender;
    });

// Best Practice Solutions:
/*
1. Solution by hamsoover (Best Practices: 44, Clever: 32)

export const VALUE_OFFSET = 96;
export const calcValue = (word: string): number => {
  return word
    .split("")
    .reduce((sum, char) => sum + char.charCodeAt(0) - VALUE_OFFSET, 0);
};
export const high = (str: string): string => {
  return str
    .split(" ")
    .reduce((max, word) => (calcValue(word) > calcValue(max) ? word : max));
};


2. Solution by Brettm12345 (Best Practices: 18, Clever: 4)

const alphabet = "abcdefghijklmnopqrstuvwxyz";

const getLetterScore = (str: string): number => alphabet.indexOf(str) + 1;
const getWordScore = (str: string): number =>
  str
    .split("")
    .map(getLetterScore)
    .reduce((acc, n) => acc + n, 0);

export const high = (str: string): string =>
  str
    .split(" ")
    .reduce((acc, value) =>
      getWordScore(value) > getWordScore(acc) ? value : acc,
    );
*/
