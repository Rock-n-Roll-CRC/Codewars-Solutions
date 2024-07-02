// Description:
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// My Solution:
export const boolToWord = (bool: boolean): string => (bool ? "Yes" : "No");

// Best Practice Solutions:
/*
1. Solution by ceottaki (Best Practices: 189, Clever: 22)

export const boolToWord = (bool: boolean): string => {
  return bool ? "Yes" : "No";
};


2. Solution by Souzooka (Best Practices: 61, Clever: 21)

export const boolToWord = (bool: boolean): string => (bool ? "Yes" : "No");
*/
