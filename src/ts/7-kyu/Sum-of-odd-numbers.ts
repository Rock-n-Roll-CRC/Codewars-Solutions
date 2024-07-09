// Description:
/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
*/

// My Solution:
export const rowSumOddNumbers = (n: number): number =>
  Array.from(
    { length: n },
    (_: number, currIndex: number) => n * (n - 1) + (currIndex * 2 + 1),
  ).reduce((numSum: number, currNum: number): number => numSum + currNum);

// Best Practice Solutions:
/*
1. Solution by kevinhkliu (Best Practices: 81, Clever: 88)

export function rowSumOddNumbers(n: number) {
  return Math.pow(n, 3);
}



2. Solution by tehzi (Best Practices: 16, Clever: 32)

export const rowSumOddNumbers = (n: number) => n ** 3;
*/
