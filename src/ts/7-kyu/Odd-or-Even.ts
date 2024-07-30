// Description:
/*
Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
Have fun!
*/

// My Solution:
export const oddOrEven = (array: number[]) =>
  array.reduce((numSum: number, num: number): number => numSum + num, 0) % 2 ===
  0
    ? "even"
    : "odd";

// Best Practice Solutions:
/*
1. Solution by iamthespice (Best Practices: 69, Clever: 26)

export function oddOrEven(array: number[]) {
  return array.reduce((sum, value) => (sum += value), 0) % 2 === 0
    ? "even"
    : "odd";
}


2. Solution by alexbovt (Best Practices: 11, Clever: 5)

export const oddOrEven = (array: number[]) =>
  array.reduce((acc, curr) => (acc += curr), 0) % 2 === 0 ? "even" : "odd";

*/
