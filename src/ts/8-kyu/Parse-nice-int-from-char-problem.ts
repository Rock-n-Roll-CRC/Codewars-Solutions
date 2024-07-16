// Description:
/*
You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.
*/

// My Solution:
export const get_age = (age: string): number => Number.parseInt(age);

// Best Practice Solutions:
/*
1. Solution by vguzev (Best Practices: 44, Clever: 18)

export { get_age };

function get_age(age: string): number {
  return parseInt(age);
}


2. Solution by logan.rednax141 (Best Practices: 6, Clever: 9)

export var get_age = (age) => {
  return +age.charAt(0);
};
*/
