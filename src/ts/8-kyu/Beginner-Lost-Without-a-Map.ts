// Description:
/*
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]
*/

// My Solution:
export const maps = (x: number[]): number[] =>
  x.map((currNum: number): number => currNum * 2);

// Best Practice Solutions:
/*
1. Solution by ValeriaBalchugova (Best Practices: 50, Clever: 4)

export function maps(x: number[]): number[] {
  return x.map((value) => value * 2);
}


2. Solution by sciencefidelity (Best Practices: 8, Clever: 1)

export const maps = (x: number[]): number[] => x.map((e) => e * 2);
*/
