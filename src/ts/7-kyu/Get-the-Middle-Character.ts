// Description:
/*
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.
*/

// My Solution:
export const getMiddle = (s: string): string => {
  const midPos: number = s.length / 2;

  return Number.isInteger(midPos)
    ? s.slice(midPos - 1, midPos + 1)
    : s.at(midPos) ?? "";
};

// Best Practice Solutions:
/*
1. Solution by edwardbaldacchino (Best Practices: 27, Clever: 81)

export function getMiddle(s: string) {
  const middle = Math.ceil(s.length / 2) - 1;
  return s.slice(middle, s.length - middle);
}


2. Solution by puha4 (Best Practices: 14, Clever: 10)

export function getMiddle(s: string) {
  const start = Math.floor(s.length / 2);
  return s.length % 2 === 0 ? s.slice(start - 1, start + 1) : s[start];
}
*/
