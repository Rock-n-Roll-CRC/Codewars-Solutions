// Description:
/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

// My Solution:
export const squareSum = (numbers: number[]): number =>
  numbers
    .map((num: number): number => Math.pow(num, 2))
    .reduce((numSum: number, num: number): number => numSum + num, 0);

// Best Practice Solutions:
/*
1. Solution by IamStefan (Best Practices: 124, Clever: 24)

export function squareSum(numbers: number[]): number {
  return numbers.reduce((prev, curr) => prev + curr * curr, 0);
}


2. Solution by eipxvx (Best Practices: 28, Clever: 4)

export function squareSum(numbers: number[]): number {
  return numbers.reduce((pre, cur) => pre + Math.pow(cur, 2), 0);
}
*/
