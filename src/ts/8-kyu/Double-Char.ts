// Description:
/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!
*/

// My Solution:
export const doubleChar = (str: string): string =>
  str
    .split("")
    .map((currChar: string): string => currChar.repeat(2))
    .join("");

// Best Practice Solutions:
/*
1. Solution by Brettm12345 (Best Practices: 41, Clever: 26)

export const doubleChar = (str: string): string =>
  str
    .split("")
    .map((c) => c.repeat(2))
    .join("");


2. Solution by andorey (Best Practices: 9, Clever: 27)

export const doubleChar = ($: string) =>
  [...$].reduce((ac, e) => ac + e + e, "");
*/
