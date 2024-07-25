// Description:
/*
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
*/

// My Solution:
export const number = (array: string[]): string[] =>
  array.map(
    (str: string, index: number): string => `${(++index).toString()}: ${str}`,
  );

// Best Practice Solutions:
/*
1. Solution by 42Matt (Best Practices: 60, Clever: 8)

export function number(array: string[]): string[] {
  return array.map((el, i) => `${i + 1}: ${el}`);
}


2. Solution by KillingTime (Best Practices: 8, Clever: 0)

export const number = (array: string[]): string[] =>
  array.map((el, i) => (el = `${i + 1}: ${el}`));
*/
