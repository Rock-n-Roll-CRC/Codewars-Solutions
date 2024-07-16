// Description:
/*
Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
*/

// My Solution:
export const summation = (num: number): number => (num * ++num) / 2;

// Best Practice Solutions:
/*
1. Solution by monadius (Best Practices: 85, Clever: 163)

export const summation = (num: number) => (num * (num + 1)) / 2;


2. Solution by KShewengger (Best Practices: 48, Clever: 4)

export const summation = (num: number) => {
  let result = 0;

  for (let i = 1; i <= num; i++) {
    result += i;
  }

  return result;
};
*/
