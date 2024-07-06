// Description:
/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

// My Solution:
export const findAverage = (array: number[]): number => {
  if (array.length === 0) return 0;

  return (
    array.reduce(
      (numSum: number, currNum: number): number => numSum + currNum,
    ) / array.length
  );
};

// Best Practice Solutions:
/*
1. Solution by ejini战神 (Best Practices: 49, Clever: 23)

export function findAverage(array: number[]): number {
  return !array.length ? 0 : array.reduce((a, b) => a + b, 0) / array.length;
}



2. Solution by eliseuvideira (Best Practices: 20, Clever: 1)

export function findAverage(array: number[]): number {
  if (array.length === 0) {
    return 0;
  }
  return array.reduce((prev, curr) => prev + curr, 0) / array.length;
}
*/
