// Description:
/*
Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).

Examples:

Input -> Output
1,2,2 -> true
4,2,3 -> true
2,2,2 -> true
1,2,3 -> false
-5,1,3 -> false
0,2,3 -> false
1,2,9 -> false 
*/

// My Solution:
export const isTriangle = (a: number, b: number, c: number): boolean =>
  a + b > c && b + c > a && c + a > b;

// Best Practice Solutions:
/*
1. Solution by sciencefidelity (Best Practices: 37, Clever: 6)

export const isTriangle = (a: number, b: number, c: number): boolean =>
  a + b > c && a + c > b && b + c > a;



2. Solution by ejini战神 (Best Practices: 14, Clever: 3)

export function isTriangle(a: number, b: number, c: number): boolean {
  return a + b > c && b + c > a && a + c > b;
}
*/
