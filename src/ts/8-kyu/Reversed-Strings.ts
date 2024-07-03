// Description:
/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

// My Solution:
export const solution = (str: string): string =>
  str.split("").reverse().join("");

// Best Practice Solutions:
/*
1. Solution by a.merezhanyi (Best Practices: 189, Clever: 37)

export function solution(str: string): string {
  return str.split("").reverse().join("");
}


2. Solution by vfdavis (Best Practices: 21, Clever: 102)

export const solution = (str: string): string => [...str].reverse().join("");
*/
