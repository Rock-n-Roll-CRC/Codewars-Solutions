// Description:
/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

// My Solution:
export const accum = (s: string): string =>
  s
    .split("")
    .map((char: string, charIndex: number): string =>
      char.toUpperCase().concat(char.toLowerCase().repeat(charIndex)),
    )
    .join("-");

// Best Practice Solutions:
/*
1. Solution by shashankr27 (Best Practices: 143, Clever: 96)

export function accum(s: string): string {
  return s
    .split("")
    .map((elem, index) => elem.toUpperCase() + elem.toLowerCase().repeat(index))
    .join("-");
}


2. Solution by afilip1 (Best Practices: 18, Clever: 20)

export function accum(s: string): string {
  return [...s.toLowerCase()]
    .map((c, idx) => c.toUpperCase() + c.repeat(idx))
    .join("-");
}
*/
