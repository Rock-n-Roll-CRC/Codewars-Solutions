// Description:
/*
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

Constraint:

1 <= month <= 12
*/

// My Solution:
export const quarterOf = (month: number): number => Math.ceil(month / 3);

// Best Practice Solutions:
/*
1. Solution by KiparD (Best Practices: 45, Clever: 66)

export const quarterOf = (month: number): number => Math.ceil(month / 3);



2. Solution by Dima-Dim (Best Practices: 9, Clever: 3)

export function quarterOf(month: number): number {
  const MONTHS_IN_A_QUARTER = 3;

  return Math.ceil(month / MONTHS_IN_A_QUARTER);
}
*/
