// Description:
/*
When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

If your language supports it, try using a switch statement.
*/

// My Solution:
export const switchItUp = (intNumber: number): string => {
  switch (intNumber) {
    case 0:
      return "Zero";
    case 1:
      return "One";
    case 2:
      return "Two";
    case 3:
      return "Three";
    case 4:
      return "Four";
    case 5:
      return "Five";
    case 6:
      return "Six";
    case 7:
      return "Seven";
    case 8:
      return "Eight";
    case 9:
      return "Nine";
    default:
      return intNumber.toString();
  }
};

// Best Practice Solutions:
/*
1. Solution by JesterCheung (Best Practices: 51, Clever: 44)

export function switchItUp(intNumber: number): string {
  enum out {
    Zero,
    One,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
  }
  return out[intNumber];
}


2. Solution by Falci (Best Practices: 7, Clever: 38)

export function switchItUp(intNumber: number): string {
  return [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ][intNumber];
}
*/
