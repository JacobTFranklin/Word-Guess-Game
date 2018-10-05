//Variables
 

var selectableWords =  //Word list
    [
        "birdie",
        "clubtwirl",
        "sexaddiction",
        "perkins",
        "masters",
        "majors",
        "spine",
        "eldrick",
        "stinger",
        "eagle",
        "nike",
        "chipin",
        "jupiter",
        "bridgestone",
        "goat",
    ]


const maxTries = 10; //Used to set remainingGuesses

var guessedLetters = []; //Holds letters that have already been guessed

var currentWord; //Where we store the word currently being guessed

var guessingWord = []; //Stores properly guessed letters

var remainingGuesses = 10; //How many guesses a user gets per match

var gameOver = true; //Used for resetting page 

var matchFinished = false; //Used for resetting word/guesses

var wins = 0; //Sets win counter

currentWord = Math.floor(Math.random() * (selectableWords.length)); //Global variable for selecting random word



//Functions


//Reset game: this triggers upon intially loading the page and hitting any key. Wipes wins and resets the match.
function resetGame(){

     gameOver = false;

     wins = 0;

     resetMatch();
};


//Reset match: this is triggered after a word is correctly guessed. Clears the current word, guessed letters, resets guesses, selects a new random word, and updates the display.
function resetMatch(){

    remainingGuesses = maxTries;

    guessedLetters = [];

    guessingWord = [];

    currentWord = Math.floor(Math.random() * (selectableWords.length)); //Selects a random word

    for (var i = 0; i < selectableWords[currentWord].length; i++) {         //Adds an underscore for each letter in the currentWord
        guessingWord.push(" _ ");
    };

    writeDisplay();
}


//Updates the display after guessing a letter
function writeDisplay(){

    document.getElementById("totalWins").innerText = wins; //Write the wins count to the totalWins div

    document.getElementById("currentWord").innerText = ""; 

    for (var i = 0; i < guessingWord.length; i++) {
        document.getElementById("currentWord").innerText += guessingWord[i]; //Write out whatever has been guessed
    }

    document.getElementById("remainingGuesses").innerText = remainingGuesses; 

    document.getElementById("guessedLetters").innerText = guessedLetters;

    if(remainingGuesses <=0){           //When you run out of guesses, the match is finished. This will trigger a match reset in the keydown function below once a key is hit.
        matchFinished= true;
    }
};


//If gameOver, start new game on keydown. If game not over, use alphabetic key to trigger guessLetter function.
document.addEventListener('keydown', function() {

   if(gameOver){ //Start of the game, any key resets the game
    
    resetGame();

    gameOver = false;

   } else if (!matchFinished) { //Match isn't over, so use alphabetic keys to trigger guess letter function
        
   if(event.keyCode >= 65 && event.keyCode <= 90) {
            guessLetter(event.key.toLowerCase());
        };

    } else if (matchFinished) { //Once a match is finished, any key will reset the match
        resetMatch();
        matchFinished = false;
    }
});


function guessLetter(letter){ //Pass typed letter into function

    if(remainingGuesses > 0);

    if (guessedLetters.indexOf(letter) === -1) { //If the letter isn't in our guessedLetters array, add it and check the guess
        guessedLetters.push(letter);
        checkGuess(letter);
    }

    writeDisplay();

    checkWin();
};


function checkGuess(letter){
    
    var positions = []; //Store positions of letters in an array

    
    for (var i = 0; i < selectableWords[currentWord].length; i++) {  //Find all instances of guessed letter and store in above array
        if(selectableWords[currentWord][i] === letter) {
            positions.push(i);
        }
    }
   

    //Remove guess if wrong
    if (positions.length <= 0) {
        remainingGuesses--;
        document.getElementById("remainingGuesses").innertext = remainingGuesses;

    } else {
        for(var i = 0; i < positions.length; i++) { // Replace underscores with letter based on positionsarray
            guessingWord[positions[i]] = letter;
        }
    }
};



//Record wins
function checkWin() {

    if(guessingWord.indexOf(" _ ") === -1) {
        wins++;
        matchFinished = true;
    }
};




