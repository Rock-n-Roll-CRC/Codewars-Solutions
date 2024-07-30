// Description:
/*
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
*/

// My Solution:
export const isValidWalk = (walk: string[]) => {
  const countSteps = (direction: string, stepsArr: string[]): number =>
    stepsArr.filter((step: string): boolean => step === direction).length;

  return (
    walk.length === 10 &&
    countSteps("n", walk) === countSteps("s", walk) &&
    countSteps("e", walk) === countSteps("w", walk)
  );
};

// Best Practice Solutions:
/*
1. Solution by Ken-nah (Best Practices: 75, Clever: 45)

export function isValidWalk(walk: string[]) {
  if (walk.length !== 10) return false;

  type directionValues = {
    [key: string]: number;
  };

  const directions: directionValues = {
    n: 0,
    s: 0,
    w: 0,
    e: 0,
  };

  walk.forEach((direction: string) => {
    directions[direction]++;
  });

  return directions.n === directions.s && directions.w === directions.e;
}


2. Solution by tgray (Best Practices: 46, Clever: 181)

export function isValidWalk(walk: string[]) {
  if (walk.length !== 10) return false;
  if (
    walk.filter((e) => e === "n").length !==
    walk.filter((e) => e === "s").length
  )
    return false;
  if (
    walk.filter((e) => e === "e").length !==
    walk.filter((e) => e === "w").length
  )
    return false;
  return true;
}
*/
