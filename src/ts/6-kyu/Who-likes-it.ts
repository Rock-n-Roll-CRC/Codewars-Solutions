// Description:
/*
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.
*/

// My Solution:
export const likes = (a: string[]): string => {
  switch (a.length) {
    case 0:
      return "no one likes this";
    case 1:
      return `${a.at(0) ?? ""} likes this`;
    case 2:
      return `${a.at(0) ?? ""} and ${a.at(1) ?? ""} like this`;
    case 3:
      return `${a.at(0) ?? ""}, ${a.at(1) ?? ""} and ${a.at(2) ?? ""} like this`;

    default:
      return `${a.at(0) ?? ""}, ${a.at(1) ?? ""} and ${(a.length - 2).toString()} others like this`;
  }
};

// Best Practice Solutions:
/*
1. Solution by suyundukov (Best Practices: 226, Clever: 43)

export function likes(names: string[]): string {
  switch (names.length) {
    case 0:
      return "no one likes this";
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}


2. Solution by Faulkyre (Best Practices: 32, Clever: 8)

export const likes = (names: string[]): string => {
    switch (names.length) {
        case 0: return 'no one likes this';
        case 1: return `${names[0]} likes this`;
        case 2: return `${names[0]} and ${names[1]} like this`;
        case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        default: return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
};
*/
