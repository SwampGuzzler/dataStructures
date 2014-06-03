// Create an object that stores individual letters in an array and has a function for
// displaying the letters as a single word.

var singleWord = {};

singleWord.concat = function(input, letter) {
  return input + letter;
}

singleWord.letters = ["A","B","C","D"];
var input = singleWord.letters.reduce(singleWord.concat);
console.log(input);
