// Description:
/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

// My Solution:
export const isIsogram = (str: string): boolean => {
  const charsArr: string[] = str.toLowerCase().split("");

  return charsArr.length === new Set(charsArr).size;
};

// Best Practice Solutions:
/*
1. Solution by stellartux (Best Practices: 180, Clever: 362)

export function isIsogram(str: string): boolean {
  return new Set(str.toLowerCase()).size === str.length;
}



2. Solution by fullstackdevguy (Best Practices: 13, Clever: 30)

export function isIsogram(str: string) {
  //resolve str to lowercase first
  str = str.toLowerCase();
  //transform string to a Set to remove duplicates and
  //compare the size of the set to the length of the str
  return new Set(str.split("")).size === str.length;
}
*/
