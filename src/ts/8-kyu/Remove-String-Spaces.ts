// Description:
/*
Write a function that removes the spaces from the string, then return the resultant string.

Examples:

Input -> Output
"8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
"8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
"8aaaaa dddd r     " -> "8aaaaaddddr"
*/

// My Solution:
export const noSpace = (x: string): string => x.replaceAll(" ", "");

// Best Practice Solutions:
/*
1. Solution by rarbuthnot (Best Practices: 82, Clever: 20)

export function noSpace(x: string): string {
  return x.replace(/\s/g, "");
}



2. Solution by DanielRX (Best Practices: 23, Clever: 50)

export const noSpace = (x: string) => x.split(" ").join("");
*/
