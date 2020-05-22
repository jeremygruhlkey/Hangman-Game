// Array of words for game to chose from (an array of arrays)
var wordLibrary = [ "this", "that", "those", "sometimes", "never", "always", "buffoon", "pennywise",
"football", "game", "computer", "fubar", "console", "remote", "pillow", "library" ];
// sets starting guess limit to 6
var guessesRemaining = 6
// An empty array to push incorrect guesses to
var alreadyGuessed = []
// declares currentWord variable
var currentWord=""
// win and loss counters established
var winCounter = 0;
var lossCounter = 0;

// This function sets up the new game
function gameStart() {
    // Establishes that the word has not been completed by guesses, will check against in later functions
    wordFinished = false;
    // currentWord to play gets assigned a random index from wordLibrary
    currentWord = wordLibrary[Math.floor(Math.random() * wordLibrary.length)];
    // enters guess guessesRemaining value to <div id = #guesses-remaining>
    document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
    // draws the blanks...
    document.getElementById("current-word").innerHTML = "_".repeat(currentWord.length);
    document.getElementById("emoji").src="assets/images/thinking.png";
    
    
    console.log(currentWord);
    console.log(currentWord.length);
};

// This function executes all game.....uh, functions...
function isLetterInWord(letter) {
    // ...first checks to make sure guesses are remaining...
    if (guessesRemaining > 0 && wordFinished != true) {
        // ...then checks if the letter is actually in the word..
        if (currentWord.indexOf(letter) > -1) {
                // Chnages the emoji to smiling
                document.getElementById("emoji").src="assets/images/big_smile.png";
                // ...if it is in the word anywhere: looks for all occurrences (loops) and replaces all w/ letter
                for (var i = 0; i < currentWord.length; i++){
                    if (currentWord[i] == letter) {
                        var old = document.getElementById("current-word").innerHTML.split("");
                        console.log(old);
                        old[i] = currentWord[i];
                        console.log(old);
                        document.getElementById("current-word").innerHTML = old.join("");
                    }
                    // ...if all blanks are gone, alerts win, updates counter, resets vars and restarts game
                    if (document.getElementById("current-word").innerHTML.indexOf("_") < 0) {
                        winCounter = winCounter + 1;
                        alert("you win! The word was " + "'" + currentWord + "'");                        
                        wordFinished = true;
                        guessesRemaining = 6;
                        alreadyGuessed = [];
                        document.getElementById("already-guessed").innerHTML = alreadyGuessed;
                        document.getElementById("games-won").innerHTML = winCounter;
                        gameStart();
                    }
                }
        }
        // if the letter isn't in currentWord...
        else {
            // changes the emoji to sweating...
            document.getElementById("emoji").src="assets/images/sweating.png";     
            // reduces guessesRemaining and updates html...       
            guessesRemaining = guessesRemaining - 1;
            document.getElementById("guesses-remaining").innerHTML = guessesRemaining;    
            // if you're all out of guesses: updates loss count, alerts loss, resets/rewrites vars        
            if (guessesRemaining < 1) {
                lossCounter = lossCounter + 1;
                alert("You lose! The word was " + "'" + currentWord + "'");
                guessesRemaining = 6;
                alreadyGuessed = [];
                document.getElementById("already-guessed").innerHTML = alreadyGuessed;
                document.getElementById("games-lost").innerHTML = lossCounter;
                gameStart();
            }
            // if not out of guesses and letter not in word, pushes letter to array and displays
            else {
                alreadyGuessed.push(letter);
                document.getElementById("already-guessed").innerHTML = alreadyGuessed;
            }
        }
    }
};
    
// calls initial game start..    
gameStart();
// takes in the selected key and asigns to letter var
document.onkeyup = function(event) {    
    var letter = String.fromCharCode(event.keyCode).toLowerCase();
    // calls the function that runs through the game
    isLetterInWord(letter);
    
    console.log(letter);
    var letterPosition = currentWord.indexOf(letter);
    console.log(letterPosition);
};
