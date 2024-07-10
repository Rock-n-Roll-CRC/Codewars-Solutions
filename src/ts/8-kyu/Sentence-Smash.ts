// Description:
/*
Sentence Smash
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
*/

// My Solution:
export const smash = (words: string[]): string => words.join(" ");

// Best Practice Solutions:
/*
1. Solution by ejini战神 (Best Practices: 119, Clever: 7)

export function smash(words: string[]): string {
  return words.join(" ");
}


2. Solution by AleriX (Best Practices: 22, Clever: 17)

export const smash = (words: string[]): string => words.join(" ");
*/
