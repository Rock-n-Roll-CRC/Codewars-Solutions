// Description:
/*
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]
*/

// My Solution:
export const countSmileys = (arr: string[]): number => {
  return arr.reduce(
    (smileySum: number, word: string): number =>
      word.match(/[:, ;][-, ~]?[), D]/gm) ? ++smileySum : smileySum,
    0,
  );
};

// Best Practice Solutions:
/*
1. Solution by user206745 (Best Practices: 19, Clever: 24)

//return the total number of smiling faces in the array
export function countSmileys(arr: string[]) {
  return arr.filter((s) => /^[:;][-~]?[)D]$/.test(s)).length;
}


2. Solution by DmitriyKow77 (Best Practices: 9, Clever: 4)

export function countSmileys(arr: string[]) {
  let faceCount: number = 0;

  for (let face of arr) {
    if (face.length === 2) {
      if (check_eyes(face[0]) && check_smile(face[1])) {
        faceCount++;
      }
    } else if (face.length === 3) {
      if (check_eyes(face[0]) && check_nose(face[1]) && check_smile(face[2])) {
        faceCount++;
      }
    }
  }

  return faceCount;
}

function check_eyes(char: string) {
  return char === ":" || char === ";";
}

function check_smile(char: string) {
  return char === ")" || char === "D";
}

function check_nose(char: string) {
  return char === "-" || char === "~";
}
*/
