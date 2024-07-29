// Description:
/*
Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
Go challenge Build Tower Advanced once you have finished this :)
*/

// My Solution:
export const towerBuilder = (nFloors: number): string[] =>
  Array.from({ length: nFloors }, (_: undefined, index: number): string =>
    "*"
      .repeat((index + 1) * 2 - 1)
      .padStart(nFloors + index)
      .padEnd(nFloors * 2 - 1),
  );

// Best Practice Solutions:
/*
1. Solution by srini4000 (Best Practices: 52, Clever: 13)

export const towerBuilder = (nFloors: number): string[] => {
  let result = [];
  for (let i = 1; i <= nFloors; i++) {
    result.push(buildFloor(i, nFloors));
  }
  return result;
};

// build i'th floor for a tower of size n floors
function buildFloor(i: number, n: number): string {
  let middleSection = "*".repeat(2 * i - 1);
  let sideSection = " ".repeat(n - i);
  let floor = sideSection + middleSection + sideSection;
  return floor;
}


2. Solution by Hisham.Taha (Best Practices: 14, Clever: 11)

export const towerBuilder = (nFloors: number): string[] => {
  return Array.from({ length: nFloors }, (_, index) => {
    const spaces = " ".repeat(nFloors - 1 - index);
    return `${spaces}${"*".repeat(index * 2 + 1)}${spaces}`;
  });
};
*/
