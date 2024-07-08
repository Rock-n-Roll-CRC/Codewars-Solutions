// Description:
/*
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/

// My Solution:
export const rps = (p1: string, p2: string): string => {
  const counterPicks = new Map<string, string>([
    ["rock", "paper"],
    ["paper", "scissors"],
    ["scissors", "rock"],
  ]);

  if (p1 === counterPicks.get(p2)) return "Player 1 won!";
  if (p2 === counterPicks.get(p1)) return "Player 2 won!";
  return "Draw!";
};

// Best Practice Solutions:
/*
1. Solution by Shadwar (Best Practices: 72, Clever: 144)

const beats: { [index: string]: string } = {
  scissors: "paper",
  paper: "rock",
  rock: "scissors",
};

export function rps(p1: string, p2: string): string {
  if (p1 === p2) return "Draw!";

  if (beats[p1] == p2) return "Player 1 won!";
  return "Player 2 won!";
}


2. Solution by Shaun-p (Best Practices: 13, Clever: 5)

export function rps(p1: string, p2: string): string {
  if (p1 === p2) {
    return "Draw!";
  } else if (
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "paper" && p2 === "rock")
  ) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
}
};
*/
