// Description:
/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/

// My Solution:
export const Kata = class {
  static validatePin(pin: string): boolean {
    return (
      (pin.length === 4 || pin.length === 6) &&
      Array.from(pin).every(
        (pinChar: string): boolean => !Number.isNaN(Number.parseInt(pinChar)),
      )
    );
  }
};

// Best Practice Solutions:
/*
1. Solution by natehart (Best Practices: 106, Clever: 52)

export class Kata {
  static pinFormat: RegExp = new RegExp(/^\d{4}(\d{2})?$/);

  static validatePin(pin: string): boolean {
    return Kata.pinFormat.test(pin);
  }
}


2. Solution by devzerker (Best Practices: 50, Clever: 14)

export class Kata {
  static validatePin(pin: string) {
    return /^(\d{4}|\d{6})$/.test(pin);
  }
}
*/
