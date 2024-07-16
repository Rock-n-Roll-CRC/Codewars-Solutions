// Description:
/*
You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.

https://en.wikipedia.org/wiki/Triangle
*/

// My Solution:
export const otherAngle = (a: number, b: number): number => 180 - a - b;

// Best Practice Solutions:
/*
1. Solution by roblu (Best Practices: 30, Clever: 2)

const FULL_TRIANGLE: number = 180;

export const otherAngle = (firstAngle: number, secondAngle: number) => {
  return FULL_TRIANGLE - firstAngle - secondAngle;
};



2. Solution by kazk (Best Practices: 13, Clever: 5)

export const otherAngle = (a, b) => 180 - a - b;
*/
