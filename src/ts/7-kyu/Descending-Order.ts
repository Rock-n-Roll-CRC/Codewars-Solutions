// Description:
/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

// My Solution:
export const descendingOrder = (n: number): number =>
  +n
    .toString()
    .split("")
    .sort((prevDig: string, currDig: string): number => +currDig - +prevDig)
    .join("");

// Best Practice Solutions:
/*
1. Solution by azubis@hec.de (Best Practices: 86, Clever: 83)

export function descendingOrder(n: number | null | undefined): number | null | undefined {
  return n ? parseInt(n.toString().split("").sort().reverse().join("")) : n;
}



2. Solution by elClod (Best Practices: 69, Clever: 32)

export function descendingOrder(n: number): number {
  return parseInt(n.toString().split('').sort().reverse().join(''));
}
*/
