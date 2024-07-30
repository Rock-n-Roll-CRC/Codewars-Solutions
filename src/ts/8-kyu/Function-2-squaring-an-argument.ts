// Description:
/*
Now you have to write a function that takes an argument and returns the square of it.
*/

// My Solution:
export const square = (num: number): number => Math.pow(num, 2);

// Best Practice Solutions:
/*
1. Solution by ejini战神 (Best Practices: 15, Clever: 4)

export function square(n: number): number {
  return n * n;
}



2. Solution by LearningFTW (Best Practices: 5, Clever: 3)

export const square = (n: any): any => n ** 2;
*/
