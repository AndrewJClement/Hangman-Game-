//contains possible words 
var wordsToGuess = ["alibi", "chicago", "gallagher", "showtime", "alcoholic", "welfare", "rehab", "shameless", "knife"];
// global vaiables 
var currentWord = "";
var currentLetters = [];
var numberOfBlanks = 0;
var displayWord = [];
var wrongLetters = []; 
var wins = 0;
var losses = 0;
var numberOfGuessesLeft = 6;

//functions
function newGame () { 

    currentWord = wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)];
    
    currentLetters = currentWord.split("");

    numberOfBlanks = currentLetters.length;

//reset game which need to be cleared at the start of a new game. 
    numberOfGuessesLeft = 7;
    wrongLetters = [];
    displayWord = [];
        
//images 
        if (numberOfGuessesLeft = 7) {
            document.getElementById("FrankPic").removeAttribute("style");
            document.getElementById("FionaPic").removeAttribute("style");
            document.getElementById("LipPic").removeAttribute("style");
            document.getElementById("IanPic").removeAttribute("style");
            document.getElementById("DebbiePic").removeAttribute("style");
            document.getElementById("CarlPic").removeAttribute("style");
            
        }

    for (i = 0; i < numberOfBlanks; i++) {
            displayWord.push("_");
    }

    document.getElementById("theWord").innerHTML = displayWord.join(" ");
    document.getElementById("guessesRemaining").innerHTML = "Number of Guesses Remianing: " + " " + numberOfGuessesLeft;
    document.getElementById("wins").innerHTML = "Wins: " + " " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + " " + losses; 
}

function checkLtrs(letter) {
//check if the letter pressed is an actual letter
		if (event.keyCode >= 65 && event.keyCode <= 90) { //If the letter pressed IS part of the alphabet, then run the comparison:

//check if the letter guessed is one of the letters in the word
            var correctLetter = false;

            for ( var i = 0; i < numberOfBlanks; i++) {
                if(currentWord[i] === letter) {
                    correctLetter = true;
                }
            }

//check where the correct letter is located on the word, then add to html
            if(correctLetter) {
                for ( var i = 0; i < numberOfBlanks; i++) {
                    if(currentWord[i] === letter) {
                        displayWord[i] = letter;
                    }
                }
            }

//if the letter isn't part of the word
            else {
                wrongLetters.push(letter);
                numberOfGuessesLeft--
            }
        }
             else {
                alert("Please be sure to select a letter from the Alphabet (from a to z)");
            }   
}

function roundComplete() {
    
//update HTML with Game Stats
    document.getElementById("guessesRemaining").innerHTML = "Number of Guesses Remaining: " + " " + numberOfGuessesLeft;
    document.getElementById("theWord").innerHTML = displayWord.join(" ");
    document.getElementById("letterGuessed").innerHTML = "Guessed Letters:" + " " + wrongLetters.join(" ");


//check if the user won
    if (currentLetters.toString() === displayWord.toString()) {
        wins++;
        alert("CONTRATULATIONS! You guessed '" + currentWord + "' correctly. Try another round?");

//update the wins in the HTML doc
        document.getElementById("wins").innerHTML = "Wins: " + " " + wins;

//start new game and clear letters already guessed
        newGame();
        document.getElementById("letterGuessed").innerHTML = "Gussed Letters:" + " " + " ";

    } else if (numberOfGuessesLeft === 0) {
        losses++;
 
        alert("FRANK! You have 0 guesses left, You are a DEADBEAT! The correct word was '" + currentWord + "'. Do you want to try again?")

//update the wins in the HTML doc
        document.getElementById("losses").innerHTML = "Losses: " + " " + losses;

//start new game
        newGame();
        document.getElementById("letterGuessed").innerHTML = "Guessed Letters:" + " " + " ";

    }
}

//start the game for the first time
newGame();

//input from user on what keys are being pressed
document.onkeyup = function(event) {
//variable to hold all the letters that have been guessed
    var ltrsGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    

//run the check letters function
    checkLtrs(ltrsGuessed);
    roundComplete();

//images interaction with guesses. 
    if (numberOfGuessesLeft <= 6) {
        document.getElementById("FrankPic").style.opacity = "0.25";
    }

    if (numberOfGuessesLeft <= 5) {
        document.getElementById("FionaPic").style.opacity = "0.25";
    }

    if (numberOfGuessesLeft <= 4) {
        document.getElementById("LipPic").style.opacity = "0.25";
    }

    if (numberOfGuessesLeft <= 3) {
        document.getElementById("IanPic").style.opacity = "0.25";
    }

    if (numberOfGuessesLeft <= 2) {
        document.getElementById("DebbiePic").style.opacity = "0.25";
    }

    if (numberOfGuessesLeft <= 1) {
        document.getElementById("CarlPic").style.opacity = "0.25";
    }
}





