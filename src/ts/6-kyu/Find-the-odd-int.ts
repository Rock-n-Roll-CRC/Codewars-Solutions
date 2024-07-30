// Description:
/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

// My Solution:
export const findOdd = (xs: number[]): number =>
  xs.find(
    (int: number, _: number, intArr: number[]): boolean =>
      intArr.filter((int2: number): boolean => int2 === int).length % 2 !== 0,
  ) ?? -999;

// Best Practice Solutions:
/*
1. Solution by NynaO (Best Practices: 99, Clever: 549)

export const findOdd = (xs: number[]): number => {
  // happy coding!
  return xs.reduce((a, b) => a ^ b);
};


2. Solution by maynaimi (Best Practices: 53, Clever: 7)

export const findOdd = (items: number[]): number => {
  const uniqueItems = Array.from(new Set(items));

  for (const uniqueItem of uniqueItems) {
    const numberOccurences = items.filter((item) => item === uniqueItem).length;
    if (isOdd(numberOccurences)) return uniqueItem;
  }

  throw new Error("none found");
};

function isOdd(num: number): boolean {
  return num % 2 === 1;
}
*/
