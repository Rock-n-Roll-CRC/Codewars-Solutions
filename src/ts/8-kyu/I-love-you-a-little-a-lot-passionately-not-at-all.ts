// Description:
/*
Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

"I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"
If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.
*/

// My Solution:
export const howMuchILoveYou = (petals: number): string =>
  ["I love you", "a little", "a lot", "passionately", "madly", "not at all"].at(
    (petals % 6 || 6) - 1,
  ) ?? "";

// Best Practice Solutions:
/*
1. Solution by LaPy (Best Practices: 25, Clever: 24)

export function howMuchILoveYou(nbPetals: number): string {
  return [
    "not at all",
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ][nbPetals % 6];
}


2. Solution by Arothe (Best Practices: 12, Clever: 13)

export function howMuchILoveYou(petals: number): string {
  return [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ][(petals - 1) % 6];
}
*/
