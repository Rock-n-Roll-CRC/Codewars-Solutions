// Description:
/*
You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, when the input is green, output should be yellow.
*/

// My Solution:
export const updateLight = (current: string): string =>
  new Map<string, string>([
    ["green", "yellow"],
    ["yellow", "red"],
    ["red", "green"],
  ]).get(current) ?? "";

// Best Practice Solutions:
/*
1. Solution by Raman_Hupalenka (Best Practices: 57, Clever: 42)

const lights = {
  green: "yellow",
  yellow: "red",
  red: "green",
};

export const updateLight = (current: string): string => {
  return lights[current];
};


2. Solution by alvarosutter (Best Practices: 9, Clever: 6)

export function updateLight(current: string): string {
  const lights = ["green", "yellow", "red"];
  const next = (lights.indexOf(current) + 1) % lights.length;
  return lights[next];
}
*/
