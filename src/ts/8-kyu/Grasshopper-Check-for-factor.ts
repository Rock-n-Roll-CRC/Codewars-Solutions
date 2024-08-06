// Description:
/*
This function should test if the factor is a factor of base.

Return true if it is a factor or false if it is not.

About factors
Factors are numbers you can multiply together to get another number.

2 and 3 are factors of 6 because: 2 * 3 = 6

You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
You can use the mod operator (%) in most languages to check for a remainder
For example 2 is not a factor of 7 because: 7 % 2 = 1

Note: base is a non-negative number, factor is a positive number.
*/

// My Solution:
export const checkForFactor = (base: number, factor: number) =>
  base % factor === 0;

// Best Practice Solutions:
/*
1. Solution by agro (Best Practices: 14, Clever: 31)

export const checkForFactor = (base: number, factor: number): boolean =>
  !(base % factor);


2. Solution by B1ts (Best Practices: 8, Clever: 4)

export const checkForFactor = (base: number, factor: number): boolean =>
  base % factor === 0;
*/
