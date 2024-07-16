// Description:
/*
Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
Invalid arrays
If, for example, we change the first number to something else, comp is not returning true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 36100 is not the square of any number of a.

Remarks
a or b might be [] or {} (all languages except R, Shell).
a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.
*/

// My Solution:
export const comp = (a1: number[] | null, a2: number[] | null): boolean =>
  a1
    ?.map((currNum: number): number => Math.pow(currNum, 2))
    .sort((a: number, b: number): number => a - b)
    .join(" ") === a2?.sort((a: number, b: number): number => a - b).join(" ");

// Best Practice Solutions:
/*
1. Solution by matwa (Best Practices: 33, Clever: 138)

export function comp(a1: number[] | null, a2: number[] | null): boolean {
  if (!(a1 && a2) || a1.length !== a2.length) return false;
  return (
    a1
      .map((x) => x * x)
      .sort()
      .toString() === a2.sort().toString()
  );
}



2. Solution by terraz (Best Practices: 18, Clever: 3)

export function comp(a1: number[] | null, a2: number[] | null): boolean {
  // If they are both empty arrays they are "same"
  if (a1 == [] && a2 == []) return true;

  // If either or both are falsy they are definitely not "same"
  if (!a1 || !a2) return false;

  // If they have different lenghts, they are definitely not "same"
  if (a1.length !== a2.length) return false;

  // Prepare a map that will count how many times each number occurs in a2
  // We need to count them to keep track of the same numbers occurring multiple times
  const numMap = new Map<number, number>();

  // Count every a2 element in a single sweep, remember that map.get() is O(c)
  for (const number of a2) {
    const count = numMap.get(number) || 0;
    numMap.set(number, count + 1);
  }

  // Take every a1 element
  for (const number of a1) {
    // Calculate its square
    const numSquared = number * number;

    // How many times it occurred in a2?
    const count = numMap.get(numSquared) || 0;

    // Never? Then they are not "same"
    if (count < 1) return false;

    // At least one time? Then decrement its counter by 1
    numMap.set(numSquared, count - 1);
  }

  // All elements of a2 have been checked succesfully, a1 and a2 are "same"
  return true;
}
*/
