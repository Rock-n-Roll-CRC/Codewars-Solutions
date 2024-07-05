// Description:
/*
Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
*/

// My Solution:
export const points = (games: string[]): number =>
  games.reduce((pointsTotal: number, currMatch: string): number => {
    const [team1Score, team2Score]: [number, number] = [
      Number(currMatch.at(0)),
      Number(currMatch.at(2)),
    ];

    if (team1Score > team2Score) return pointsTotal + 3;
    if (team1Score < team2Score) return pointsTotal;
    return ++pointsTotal;
  }, 0);

// Best Practice Solutions:
/*
1. Solution by undefined_noob (Best Practices: 28, Clever: 12)

export function points(games: string[]): number {
  return games.reduce((prev, curr) => {
    const [ourTeamScore, opponentScore] = curr.split(":");

    if (ourTeamScore === opponentScore) return prev + 1;

    if (ourTeamScore > opponentScore) {
      return prev + 3;
    } else {
      return prev;
    }
  }, 0);
}



2. Solution by RogerYeeaah (Best Practices: 8, Clever: 7)

export function points(games: string[]): number {
  return games.reduce((totalPoints, game) => {
    const [a, b] = game.split(":");
    return totalPoints + (a > b ? 3 : a === b ? 1 : 0);
  }, 0);
}
*/
