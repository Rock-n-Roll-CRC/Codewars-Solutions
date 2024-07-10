// Description:
/*
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
*/

// My Solution:
export const simpleMultiplication = (num: number): number =>
  num * (num % 2 === 0 ? 8 : 9);

// Best Practice Solutions:
/*
1. Solution by Brettm12345 (Best Practices: 41, Clever: 26)

export const simpleMultiplication = (num: number): number =>
  num * (num % 2 === 0 ? 8 : 9);


2. Solution by suyundukov (Best Practices: 23, Clever: 16)

export function simpleMultiplication(num: number): number {
  return num * (num % 2 ? 9 : 8);
}
*/
