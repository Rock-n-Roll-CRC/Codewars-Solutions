// Description:
/*
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/

// My Solution:
export const repeatStr = (n: number, s: string): string => s.repeat(n);

// Best Practice Solutions:
/*
1. Solution by IvanX (Best Practices: 119, Clever: 37)

export function repeatStr(n: number, s: String): String {
  return s.repeat(n);
}


2. Solution by l2kot (Best Practices: 22, Clever: 3)

export function repeatStr(n: number, s: string): string {
  return s.repeat(n);
}
*/
