// Description:
/*
Kata Task
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
References

http://www.catster.com/cats-101/calculate-cat-age-in-cat-years
http://www.slate.com/articles/news_and_politics/explainer/2009/05/a_dogs_life.html
If you liked this Kata there is another related one here
*/

// My Solution:
export const humanYearsCatYearsDogYears = (
  humanYears: number,
): [number, number, number] => {
  let catYears: number = 0;
  let dogYears: number = 0;

  for (let i = 1; i <= humanYears; i++) {
    switch (i) {
      case 1:
        catYears += 15;
        dogYears += 15;
        break;
      case 2:
        catYears += 9;
        dogYears += 9;
        break;
      default:
        catYears += 4;
        dogYears += 5;
    }
  }

  return [humanYears, catYears, dogYears];
};

// Best Practice Solutions:
/*
1. Solution by Miguel Collaço (Best Practices: 16, Clever: 5)

export function humanYearsCatYearsDogYears(
  humanYears: number,
): [number, number, number] {
  let CatYears: number = 0,
    DogYears: number = 0;
  for (let i = 1; i < humanYears + 1; i++) {
    if (i === 1) {
      CatYears += 15;
      DogYears += 15;
    } else if (i === 2) {
      CatYears += 9;
      DogYears += 9;
    } else {
      CatYears += 4;
      DogYears += 5;
    }
  }
  return [humanYears, CatYears, DogYears];
}



2. Solution by DamienVesper (Best Practices: 10, Clever: 43)

export const humanYearsCatYearsDogYears = (
  num: number,
): [number, number, number] => [
  num,
  num === 1 ? 15 : 15 + 9 + 4 * (num - 2),
  num === 1 ? 15 : 15 + 9 + 5 * (num - 2),
];
*/
