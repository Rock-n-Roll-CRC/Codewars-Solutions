// Description:
/*
Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

("Hello", 'o')  =>  1
("Hello", 'l')  =>  2
("", 'z')       =>  0
Notes
The first argument can be an empty string
In languages with no distinct character data type, the second argument will be a string of length 1
*/

// My Solution:
export const strCount = (str: string, letter: string): number => {
  const letterRegExp: RegExp = new RegExp(letter, "g");
  return str.match(letterRegExp)?.length ?? 0;
};

// Best Practice Solutions:
/*
1. Solution by ghaneeznb (Best Practices: 15, Clever: 1)

export function strCount(str: string, letter: string): number {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (letter === str[i]) count += 1;
  }
  return count;
}


2. Solution by metawort (Best Practices: 5, Clever: 25)

export const strCount = (str: string, letter: string) =>
  [...str].filter((c) => c === letter).length;
*/
