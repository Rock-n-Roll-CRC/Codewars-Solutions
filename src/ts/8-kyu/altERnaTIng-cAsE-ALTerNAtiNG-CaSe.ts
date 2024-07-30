// Description:
/*
altERnaTIng cAsE <=> ALTerNAtiNG CaSe
Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

toAlternatingCase("hello world") === "HELLO WORLD"
toAlternatingCase("HELLO WORLD") === "hello world"
toAlternatingCase("hello WORLD") === "HELLO world"
toAlternatingCase("HeLLo WoRLD") === "hEllO wOrld"
toAlternatingCase("12345")       === "12345"                   // Non-alphabetical characters are unaffected
toAlternatingCase("1a2b3c4d5e")  === "1A2B3C4D5E"
toAlternatingCase("String.prototype.toAlternatingCase") === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"

As usual, your function/method should be pure, i.e. it should not mutate the original string.
*/

// My Solution:
export const toAlternatingCase = (s: string): string =>
  Array.from(s, (char: string) =>
    /[a-z]/g.test(char) ? char.toUpperCase() : char.toLowerCase(),
  ).join("");

// Best Practice Solutions:
/*
1. Solution by VictorDeBlas (Best Practices: 16, Clever: 19)

export function toAlternatingCase(s: string): string {
  return s
    .split("")
    .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
    .join("");
}


2. Solution by ejini战神 (Best Practices: 3, Clever: 14)

export function toAlternatingCase(s: string): string {
  return s.replace(/./g, (x) =>
    /[a-z]/.test(x) ? x.toUpperCase() : x.toLowerCase(),
  );
}
*/
