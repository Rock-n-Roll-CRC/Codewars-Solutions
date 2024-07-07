// Description:
/*
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

// My Solution:
export const longest = (s1: string, s2: string): string =>
  Array.from(new Set(s1.concat(s2)))
    .sort()
    .join("");

// Best Practice Solutions:
/*
1. Solution by pawelmk (Best Practices: 33, Clever: 69)

export const longest = (s1: string, s2: string): string =>
  [...new Set([...s1, ...s2])].sort().join("");



2. Solution by JeimonkAs (Best Practices: 14, Clever: 11)

export const longest = (s1:string, s2:string): string => [...new Set(s1+s2)].sort().join('');
*/
