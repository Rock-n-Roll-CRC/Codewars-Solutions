// Description:
/*
Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
*/

// My Solution:
export const stringToArray = (s: string): string[] => s.split(" ");

// Best Practice Solutions:
/*
1. Solution by Unnamed (Best Practices: 55, Clever: 2)

export function stringToArray(s: string): string[] {
  return s.split(" ");
}


2. Solution by brunolm (Best Practices: 28, Clever: 18)

export const stringToArray = (s: string) => s.split(" ");
*/
