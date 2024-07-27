// Description:
/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

// My Solution:
export const isPangram = (phrase: string): boolean =>
  Array.from(new Set(phrase.toLowerCase().match(/[a-z]/gm)))
    .sort()
    .join("") === "abcdefghijklmnopqrstuvwxyz";

// Best Practice Solutions:
/*
1. Solution by oserna1 (Best Practices: 148, Clever: 339)

export const isPangram = (phrase: string): boolean =>
  new Set(phrase.toLowerCase().match(/[a-z]/g)).size === 26;


2. Solution by lhguerra (Best Practices: 34, Clever: 84)

export const isPangram = (phrase: string): boolean =>
  [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ].every((l) => phrase.toLowerCase().includes(l));
*/
