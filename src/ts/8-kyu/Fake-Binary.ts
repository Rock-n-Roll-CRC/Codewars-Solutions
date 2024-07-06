// Description:
/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/

// My Solution:
export const fakeBin = (x: string): string =>
  x.replaceAll(/[0-4]/gm, "0").replaceAll(/[5-9]/gm, "1");

// Best Practice Solutions:
/*
1. Solution by giannismach (Best Practices: 35, Clever: 67)

export const fakeBin = (x: string): string =>
  x.replace(/\d/g, (n) => (Number(n) < 5 ? "0" : "1"));



2. Solution by ismatjon (Best Practices: 14, Clever: 9)

export const fakeBin = (x: string): string => {
  return x.replace(/\d/g, (num) => (+num < 5 ? "0" : "1"));
};
*/
