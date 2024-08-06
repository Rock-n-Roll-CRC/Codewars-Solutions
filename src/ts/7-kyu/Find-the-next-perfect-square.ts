// Description:
/*
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.

Examples ( Input --> Output )
121 --> 144
625 --> 676
114 --> -1  #  because 114 is not a perfect square
*/

// My Solution:
export const findNextSquare = (sq: number): number => {
  const isIntPerfSq = (sq: number): boolean => Number.isInteger(Math.sqrt(sq));

  if (!isIntPerfSq(sq)) return -1;

  while (!isIntPerfSq(++sq)) {
    sq++;
  }

  return sq;
};

// Best Practice Solutions:
/*
1. Solution by ejini战神 (Best Practices: 1, Clever: 2)

export function findNextSquare(sq:number):number {
  return Math.sqrt(sq) % 1 == 0 ? (Math.sqrt(sq) + 1) ** 2 : -1
}


2. Solution by kersheton (Best Practices: 0, Clever: 0)

export function findNextSquare(sq: number): number {
  // Return the next square if sq is a perfect square, -1 otherwise
  if (Math.sqrt(sq).toString().split(".")[1] != undefined) {
    return -1;
  } else {
    return Math.pow(Math.sqrt(sq) + 1, 2);
  }
}
*/
