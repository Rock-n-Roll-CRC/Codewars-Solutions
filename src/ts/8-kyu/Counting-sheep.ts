// Description:
/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/

// My Solution:
export const countSheeps = (arrayOfSheep: (boolean | undefined | null)[]) =>
  arrayOfSheep.filter((sheep: boolean | null | undefined) => sheep === true)
    .length;

// Best Practice Solutions:
/*
1. Solution by winston929 (Best Practices: 100, Clever: 193)

export function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(Boolean).length;
}


2. Solution by kmull (Best Practices: 32, Clever: 5)

export function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(e => e === true).length;
}
*/
