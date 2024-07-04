// Description:
/*
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/

// My Solution:
export const grow = (arr: number[]): number =>
  arr.reduce((numMult: number, currNum: number): number => numMult * currNum);

// Best Practice Solutions:
/*
1. Solution by demikhovr (Best Practices: 31, Clever: 17)

export const grow = (arr: number[]) => arr.reduce((accum, it) => accum * it);


2. Solution by t-lechner (Best Practices: 12, Clever: 6)

export function grow(arr: number[]) {
  return arr.reduce((prev, curr) => prev * curr);
}
*/
