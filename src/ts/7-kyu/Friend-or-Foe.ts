// Description:
/*
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend {"Ryan", "Kieran", "Mark"} `shouldBe` {"Ryan", "Mark"}
If there are no friends return {""}.

Note: keep the original order of the names in the output.
*/

// My Solution:
export const friend = (friends: string[]): string[] =>
  friends.filter((name: string): boolean => name.length === 4);

// Best Practice Solutions:
/*
1. Solution by Rock-n-Roll-CRC (Best Practices: 1, Clever: 0)

export const friend = (friends: string[]): string[] =>
  friends.filter((name: string): boolean => name.length === 4);


2. Solution by ejini战神 (Best Practices: 1, Clever: 0)

export function friend(friends: string[]): string[] {
  return friends.filter((x) => x.length === 4);
}
*/
