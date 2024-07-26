// Description:
/*
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

// My Solution:
export const filter_list = (l: Array<any>): Array<number> =>
  l.filter((value: any): boolean => typeof value === "number");

// Best Practice Solutions:
/*
1. Solution by Rock-n-Roll-CRC (Best Practices: 0, Clever: 0)

export const filter_list = (l: Array<any>): Array<number> =>
  l.filter((value: any): boolean => typeof value === "number");


2. Solution by BradCodeCraft (Best Practices: 0, Clever: 0)

export function filter_list(l: Array<any>): Array<number> {
  const result = l;
  return result.filter((element) => Number.isInteger(element) && element >= 0);
}
*/
