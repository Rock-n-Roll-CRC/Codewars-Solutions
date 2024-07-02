// Description:
/*
There was a test in your class and you passed it. Congratulations!

But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return true if you're better, else false!

Note:
Your points are not included in the array of your class's points. Do not forget them when calculating the average score! 
*/

// My Solution:
export const betterThanAverage = (
  classPoints: number[],
  yourPoints: number,
): boolean =>
  yourPoints >
  classPoints
    .concat(yourPoints)
    .reduce((acc: number, currPoints: number): number => acc + currPoints) /
    classPoints.push(yourPoints);

// Best Practice Solutions:
/*
1. Solution by eliseuvideira (Best Practices: 15, Clever: 8)

export function betterThanAverage(classPoints: number[], yourPoints: number) {
  const average =
    classPoints.concat(yourPoints).reduce((prev, curr) => prev + curr) /
    (classPoints.length + 1);
  return yourPoints > average;
}


2. Solution by Iakov.Lushin (Best Practices: 15, Clever: 5)

export function betterThanAverage(
  classPoints: number[],
  yourPoints: number,
): boolean {
  const allPoints = [...classPoints, yourPoints];
  const averagePoints = getAverage(allPoints);
  return yourPoints > averagePoints;
}

function getAverage(values: number[]): number {
  return getSum(values) / values.length;
}

function getSum(values: number[]): number {
  return values.reduce((acc, x) => acc + x, 0);
}
*/
