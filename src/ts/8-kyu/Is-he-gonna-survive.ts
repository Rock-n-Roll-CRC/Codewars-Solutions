// Description:
/*
A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return true if yes, false otherwise :)
*/

// My Solution:
export const hero = (bullets: number, dragons: number): boolean =>
  bullets >= dragons * 2;

// Best Practice Solutions:
/*
1. Solution by jlfurtado (Best Practices: 43, Clever: 18)

export function hero(bullets: number, dragons: number): boolean {
  return bullets >= 2 * dragons;
}


2. Solution by davorpa (Best Practices: 15, Clever: 1)

export const BULLETS_PER_DRAGON: number = 2;

export function hero(bullets: number, dragons: number): boolean {
  const survive: boolean = bullets >= dragons * BULLETS_PER_DRAGON;
  return survive;
}
*/
