/// Array of words for game to chose from (an array of arrays)

var wordLibrary = [ "this", "that", "those", "sometimes", "never", "always", "buffoon", "Pennywise" ];
var alreadyGuessed = []

function gameStart() {
    // Establishes that the word has not been completed by guesses, will check against in later functions
    wordFinished = false;
    // currentWord to play gets assigned a random index from wordLibrary
    var currentWord = wordLibrary[Math.floor(Math.random() * wordLibrary.length)];
    // sets starting guess limit to 6
    var guessesRemaining = 6
    // enters guess guessesRemaining value to <div id = #guesses-remaining>
    document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
    // draws the blanks...
    document.getElementById("current-word").innerHTML = "_".repeat(currentWord.length);
    
    console.log(currentWord);
    console.log(currentWord.length);
    
};

function isLetterInWord(letter) {
    if (guessesRemaining > 0 && wordFinished != true) {
        if (currentWord.indexOf(letter) > -1) {
            correctGuess(letter);
        }
        else {
            incorrectGuess(letter);
        }
    }
}



    // for (var i = 0; i < currentWord.length; i++){

    // }





gameStart();
document.onkeyup = function(event) {    
    var letter = String.fromCharCode(event.keyCode).toLowerCase();
    isLetterInWord
    console.log(letter)
}

// var letter = String.fromCharCode(event.keyCode).toLowerCase();
