// Description:
/*
Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
2742 --> 28
Note: this kata uses strict construction as shown in the description and the examples, you can read more about it here
*/

// My Solution:
export const centuryFromYear = (year: number): number => Math.ceil(year / 100);

// Best Practice Solutions:
/*
1. Solution by davidnekovarcz (Best Practices: 110, Clever: 39)

export const centuryFromYear = (year: number): number => {
  return Math.ceil(year / 100);
};


2. Solution by lKudry (Best Practices: 6, Clever: 0)

export const centuryFromYear = (year: number): number => {
  const yearPrefix = year / 100;
  return Math.ceil(yearPrefix);
};
*/
