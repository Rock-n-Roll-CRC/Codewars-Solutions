// Description:
/*
Note: This kata is inspired by Convert a Number to a String!. Try that one too.

Description
We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

Examples
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7
*/

// My Solution:
export const stringToNumber = (str: string): number => +str;

// Best Practice Solutions:
/*
1. Solution by Unnamed (Best Practices: 107, Clever: 7)

export function stringToNumber(str: string): number {
  return Number(str);
}


2. Solution by jay-es (Best Practices: 16, Clever: 56)

export const stringToNumber = (str: string): number => +str;
*/
