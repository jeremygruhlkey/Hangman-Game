// Array of words for game to chose from (an array of arrays)
var wordLibrary = [ "this", "that", "those", "sometimes", "never", "always", "buffoon", "pennywise" ];

// sets starting guess limit to 6
var guessesRemaining = 6
// An empty array to push incorrect guesses to
var alreadyGuessed = []
// declares currentWord variable
var currentWord=""

var winCounter = 0;
var lossCounter = 0;

function gameStart() {
    // Establishes that the word has not been completed by guesses, will check against in later functions
    wordFinished = false;
    
    // currentWord to play gets assigned a random index from wordLibrary
    currentWord = wordLibrary[Math.floor(Math.random() * wordLibrary.length)];
    
    // enters guess guessesRemaining value to <div id = #guesses-remaining>
    document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
    // draws the blanks...
    document.getElementById("current-word").innerHTML = "_".repeat(currentWord.length);
    
    console.log(currentWord);
    console.log(currentWord.length);
};

// function checks if letter is in currentWord...
function isLetterInWord(letter) {
    
    if (guessesRemaining > 0 && wordFinished != true) {
        if (currentWord.indexOf(letter) > -1) {
            // function correctGuess(letter) {
                for (var i = 0; i < currentWord.length; i++){
                    if (currentWord[i] == letter) {
                        var old = document.getElementById("current-word").innerHTML.split("");
                        console.log(old);
                        old[i] = currentWord[i];
                        console.log(old);
                        document.getElementById("current-word").innerHTML = old.join("");
                    }
                    if (document.getElementById("current-word").innerHTML.indexOf("_") < 0) {
                        winCounter = winCounter + 1;
                        alert("you win!");
                        wordFinished = true;
                        guessesRemaining = 6;
                        alreadyGuessed = [];
                        document.getElementById("already-guessed").innerHTML = alreadyGuessed;
                        document.getElementById("games-won").innerHTML = winCounter;
                        gameStart();
                    }
                }
            // }
        }
        else{
            guessesRemaining = guessesRemaining - 1;
            document.getElementById("guesses-remaining").innerHTML = guessesRemaining;            
            if (guessesRemaining < 1) {
                lossCounter = lossCounter + 1;
                alert("You lose! The word was " + "'" + currentWord + "'");
                guessesRemaining = 6;
                alreadyGuessed = [];
                document.getElementById("already-guessed").innerHTML = alreadyGuessed;
                document.getElementById("games-lost").innerHTML = lossCounter;
                gameStart();
            }
            else {
                alreadyGuessed.push(letter);
                document.getElementById("already-guessed").innerHTML = alreadyGuessed;
            }
        }
        }
        };
    
    



    // for (var i = 0; i < currentWord.length; i++){

    // }





gameStart();
document.onkeyup = function(event) {    
    var letter = String.fromCharCode(event.keyCode).toLowerCase();
    isLetterInWord(letter);
    
    console.log(letter);
    var letterPosition = currentWord.indexOf(letter);
    console.log(letterPosition);
};

// var letter = String.fromCharCode(event.keyCode).toLowerCase();
