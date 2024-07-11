// Description:
/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

// My Solution:
export const positiveSum = (arr: number[]): number =>
  arr.reduce(
    (numSum: number, currNum: number): number =>
      currNum > 0 ? numSum + currNum : numSum,
    0,
  );

// Best Practice Solutions:
/*
1. Solution by michaljuris (Best Practices: 90, Clever: 21)

export function positiveSum(arr: number[]): number {
  return arr.filter((e) => e >= 0).reduce((acc, e) => acc + e, 0);
}


2. Solution by maxcheremisin (Best Practices: 57, Clever: 39)

export function positiveSum(arr: number[]): number {
  return arr.reduce((sum, n) => (n > 0 ? sum + n : sum), 0);
}
*/
