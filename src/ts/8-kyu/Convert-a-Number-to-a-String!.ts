// Description:
/*
We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?

Examples (input --> output):
123  --> "123"
999  --> "999"
-100 --> "-100"
*/

// My Solution:
export const numberToString = (num: number): string => num.toString();

// Best Practice Solutions:
/*
1. Solution by jeanesily (Best Practices: 114, Clever: 11)

export function numberToString(num: Number) {
  return num.toString();
}


2. Solution by tr3v3r (Best Practices: 69, Clever: 10)

export function numberToString(num: number): string {
  return String(num);
}
*/
