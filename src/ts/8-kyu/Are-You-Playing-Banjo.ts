// Description:
/*
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.
*/

// My Solution:
export const areYouPlayingBanjo = (name: string): string =>
  name.toLowerCase().at(0) === "r"
    ? `${name} plays banjo`
    : `${name} does not play banjo`;

// Best Practice Solutions:
/*
1. Solution by Ascor8522 (Best Practices: 71, Clever: 18)

export function areYouPlayingBanjo(name: string): string {
  return name.charAt(0).toUpperCase() === "R"
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}


2. Solution by ChristiaanOpperman (Best Practices: 21, Clever: 19)

export function areYouPlayingBanjo(name: string): string {
  return name.startsWith("r") || name.startsWith("R")
    ? name + " plays banjo"
    : name + " does not play banjo";
}
*/
