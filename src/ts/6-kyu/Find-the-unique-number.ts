// Description:
/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique
*/

// My Solution:
export const findUniq = (arr: number[]): number => {
  const [firstNum, secondNum] = Array.from(new Set<number>(arr));
  const repeatedNum: number | undefined = arr
    .slice(0, 3)
    .find(
      (currNum: number, currIndex: number, arr: number[]): boolean =>
        currNum === arr[currIndex + 1] || currNum === arr[currIndex + 2],
    );

  if (
    firstNum === undefined ||
    secondNum === undefined ||
    repeatedNum === undefined
  )
    return -1;

  return repeatedNum === firstNum ? secondNum : firstNum;
};

// Best Practice Solutions:
/*
1. Solution by dcieslak (Best Practices: 48, Clever: 179)

export function findUniq(arr: Array<number>): number {
  arr = arr.sort();
  return arr[0] == arr[1] ? arr[arr.length - 1] : arr[0];
}


2. Solution by Unnamed (Best Practices: 31, Clever: 64)

export function findUniq(arr: Array<number>): number {
  const x = arr[arr[0] == arr[1] ? 0 : 2];
  return arr.find((y) => y != x);
}
*/
