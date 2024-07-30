// Description:
/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

// My Solution:
export const duplicateEncode = (word: string): string =>
  Array.from(word, (char: string): string =>
    (word.match(new RegExp(`[${char}]`, "gi"))?.length ?? 0) > 1 ? ")" : "(",
  ).join("");

// Best Practice Solutions:
/*
1. Solution by whyuenac (Best Practices: 81, Clever: 340)

export function duplicateEncode(word: string) {
  // ...
  return word
    .toLowerCase()
    .split("")
    .map((a, i, w) => {
      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}


2. Solution by Stevearzh (Best Practices: 41, Clever: 44)

export function duplicateEncode(word: string){
  const dict = {};
  
  for (let ch of word) {
    if (dict[ch.toLowerCase()]) {
      dict[ch.toLowerCase()] = ')';
    } else {
      dict[ch.toLowerCase()] = '(';
    }
  }
  
  return word.split('').map(ch => dict[ch.toLowerCase()]).join('');
}
*/
