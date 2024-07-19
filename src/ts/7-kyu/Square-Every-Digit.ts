// Description:
/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

Happy Coding!
*/

// My Solution:
export class Kata {
  static squareDigits = (num: number): number =>
    +num
      .toString()
      .split("")
      .map((currDigit: string): string => Math.pow(+currDigit, 2).toString())
      .join("");
}

// Best Practice Solutions:
/*
1. Solution by KiwiPGM (Best Practices: 122, Clever: 176)

export class Kata {
  static squareDigits(num: number) {
    return +num.toString()
               .split('')
               .map(n => Math.pow(+n,2))
               .join('');
  }
}


2. Solution by DylanSp (Best Practices: 33, Clever: 30)

export class Kata {
  static squareDigits(num: number) {
    return parseInt(num.toString()
              .split('')
              .map(c => parseInt(c, 10))
              .map(n => n * n)
              .map(n => n.toString())
              .join(''), 10);
  }
}
*/
