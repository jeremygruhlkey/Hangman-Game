// Array of words for game to chose from (an array of arrays)

var wordLibrary = [ ["t","h","i","s"], ["t","h","a","t"], ["t","h","o","s","e"]];

// Randomly selects one of the indexes from the above array
var x = Math.floor(Math.random() * wordLibrary.length);

// Assigns array ar index[x] or wordLibrary as current word playing
var currentWord = wordLibrary[x];

var currentWordLength = currentWord.length

console.log(x);
console.log(currentWord);
console.log(currentWordLength)