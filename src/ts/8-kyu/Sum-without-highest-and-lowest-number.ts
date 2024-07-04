// Description:
/*
Task
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
*/

// My Solution:
export const sumArray = (array: number[] | null): number => {
  if (!array || array.length <= 1) return 0;

  return (
    array.reduce(
      (numSum: number, currNum: number): number => numSum + currNum,
    ) -
    (Math.min(...array) + Math.max(...array))
  );
};

// Best Practice Solutions:
/*
1. Solution by gwagwa (Best Practices: 54, Clever: 54)

export function sumArray(array: number[]): number {
  if (!array || array.length <= 1) return 0;
  return array
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((p, n) => p + n, 0);
}


2. Solution by N4tsuki (Best Practices: 12, Clever: 22)

export function sumArray(array: number[]): number {
  if (array && array.length > 1) {
    return (
      array.reduce((a, b) => a + b, 0) - Math.max(...array) - Math.min(...array)
    );
  }
  return 0;
}
*/
