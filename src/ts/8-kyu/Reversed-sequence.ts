// Description:
/*
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/

// My Solution:
export const reverseSeq = (n: number): number[] =>
  Array.from({ length: n }, (_: undefined) => n--);

// Best Practice Solutions:
/*
1. Solution by SantiMA10 (Best Practices: 43, Clever: 12)

export const reverseSeq = (n: number): number[] => {
  var reverse = [];
  for (let i = n; i > 0; i--) {
    reverse.push(i);
  }

  return reverse;
};


2. Solution by lMiaoj (Best Practices: 31, Clever: 64)

export const reverseSeq = (n: number): number[] => {
  return Array.from({ length: n }, (_, i) => n - i);
};
*/
