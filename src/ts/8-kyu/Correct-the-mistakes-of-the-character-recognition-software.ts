// Description:
/*
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.
*/

// My Solution:
export const correct = (s: string): string =>
  s.replace(/[5, 0, 1]/g, (invalidChar: string): string => {
    switch (invalidChar) {
      case "5":
        return "S";
      case "0":
        return "O";
      case "1":
        return "I";
      default:
        return invalidChar;
    }
  });

// Best Practice Solutions:
/*
1. Solution by AgeevDmitryMinsk (Best Practices: 21, Clever: 10)

export function correct(s: string): string {
  return s.replace(/1/g, "I").replace(/5/g, "S").replace(/0/g, "O");
}


2. Solution by Unnamed (Best Practices: 9, Clever: 1)

export function correct(s: string): string {
  return s.replaceAll("5", "S").replaceAll("0", "O").replaceAll("1", "I");
}
*/
