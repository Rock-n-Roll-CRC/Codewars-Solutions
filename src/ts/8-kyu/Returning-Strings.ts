// Description:
/*
Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

[Make sure you type the exact thing I wrote or the program may not execute properly]
*/

// My Solution:
export const greet = (name: string): string =>
  `Hello, ${name} how are you doing today?`;

// Best Practice Solutions:
/*
1. Solution by KiparD (Best Practices: 83, Clever: 11)

export const greet = (name: string): string =>
  `Hello, ${name} how are you doing today?`;


2. Solution by Unnamed (Best Practices: 21, Clever: 0)

export function greet(name: string): string {
  return `Hello, ${name} how are you doing today?`;
}
*/
