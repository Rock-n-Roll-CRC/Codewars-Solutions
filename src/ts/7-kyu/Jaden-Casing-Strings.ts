// Description:
/*
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
Link to Jaden's former Twitter account @officialjaden via archive.org
*/

// My Solution:
String.prototype.toJadenCase = function (): string {
  return this.split(" ")
    .map((currWord: string): string =>
      currWord.charAt(0).toUpperCase().concat(currWord.slice(1)),
    )
    .join(" ");
};

interface String {
  // Declaration needed, don't remove it
  toJadenCase(): string;
}

// Best Practice Solutions:
/*
1. Solution by skonovalenko (Best Practices: 37, Clever: 43)

String.prototype.toJadenCase = function () {
  return this.split(/\s/)
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");
};


2. Solution by PiotrAndrzejB (Best Practices: 16, Clever: 6)

String.prototype.toJadenCase = function (this: string) {
  let singleWords: string[] = this.split(" ");
  let transformedWords: string[] = singleWords.map( word => word.replace(word[0], word[0].toUpperCase()));
  return transformedWords.join(" ");
}

interface String {      // Declaration needed, don't remove it
  toJadenCase(): string;
};
*/
