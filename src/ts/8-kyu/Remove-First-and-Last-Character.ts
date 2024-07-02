// Description:
/*
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.

You're given one parameter, the original string.

You don't have to worry about strings with less than two characters.
*/

// My Solution:
export const removeChar = (str: string): string => str.slice(1, -1);

// Best Practice Solutions:
/*
1. Solution by smepple (Best Practices: 118, Clever: 107)

export function removeChar(str: string): string {
  return str.slice(1,-1);
}


2. Solution by logan.jones103 (Best Practices: 19, Clever: 6)

export const removeChar = (str: string) => str.substring(1, str.length - 1);
*/
