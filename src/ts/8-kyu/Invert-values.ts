// Description:
/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

[1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
[1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
[] --> []
*/

// My Solution:
export const invert = (array: number[]): number[] =>
  array.map((currNum: number): number => -currNum);

// Best Practice Solutions:
/*
1. Solution by metawort (Best Practices: 43, Clever: 19)

export const invert = (array: number[]) => array.map((n) => -n);


2. Solution by grabielcruz (Best Practices: 12, Clever: 9)

export function invert(array: number[]): number[] {
  return array.map((n) => -n);
}
*/
