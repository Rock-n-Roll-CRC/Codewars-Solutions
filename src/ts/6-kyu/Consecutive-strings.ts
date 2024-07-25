// Description:
/*
You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Examples:
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

Note
consecutive strings : follow one after another without an interruption
*/

// My Solution:
export const longestConsec = (strarr: string[], k: number): string => {
  if (strarr.length === 0 || strarr.length < k || k <= 0) return "";

  const consecStrArr: string[] = [];

  strarr.forEach((_: string, index: number, arr: string[]): void => {
    consecStrArr.push(arr.slice(index, index + k).join(""));
  });

  return (
    consecStrArr
      .sort(
        (firstConsecStr: string, secondConsecStr: string): number =>
          secondConsecStr.length - firstConsecStr.length,
      )
      .at(0) ?? ""
  );
};

// Best Practice Solutions:
/*
1. Solution by pschuerk (Best Practices: 37, Clever: 30)

export function longestConsec(strarr: string[], k: number): string {
  let max = "";
  const n = strarr.length;

  for (let i = 0; i <= n - k && k > 0 && k <= n; i++) {
    const newStr = strarr.slice(i, i + k).join("");
    max = max.length >= newStr.length ? max : newStr;
  }
  return max;
}


2. Solution by baflo (Best Practices: 11, Clever: 53)

export function longestConsec(strarr: string[], k: number): string {
  if (strarr.length === 0 || k > strarr.length || k <= 0) {
    return "";
  }

  return strarr.reduce((defender, _, idx, target) => {
    const challenger = target.slice(idx, idx + k).join("");

    return challenger.length > defender.length ? challenger : defender;
  }, "");
}
*/
