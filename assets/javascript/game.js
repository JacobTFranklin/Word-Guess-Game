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


const maxTries = 10;

var guessedLetters = []; //Holds letters that have already been guessed

var currentWord; //Where we store the word currently being guessed

var guessingWord = []; //Stores properly guessed letters

var remainingGuesses = 10; 

var gameOver = false;

var gameStarted = false;

var wins = 0;

var currentWordDiv;

currentWord = Math.floor(Math.random() * (selectableWords.length));

//Functions




//Reset game
function resetGame(){
     remainingGuesses = maxTries;
     gameOver = false;
     wins = 0;
     guessedLetters = [];
     guessingWord = [];
     currentWord = Math.floor(Math.random() * (selectableWords.length));
     for (var i = 0; i < selectableWords[currentWord].length; i++) {
    guessingWord.push("_");
     };
    writeDisplay();
};

//Updates the display after guessing a letter
function writeDisplay(){
    document.getElementById("totalWins").innerText = wins;
    document.getElementById("currentWord").innerText = "";
    for (var i = 0; i < guessingWord.length; i++) {
        document.getElementById("currentWord").innerText += guessingWord[i];
    }
    document.getElementById("remainingGuesses").innerText = remainingGuesses;
    document.getElementById("guessedLetters").innerText = guessedLetters;
    if(remainingGuesses <=0){
        hasFinished= true;
    }
};

//If gameOver, start new game on keydown. If game not over, use alphabetic key to trigger guessLetter function.
document.addEventListener('keydown', function() {
   if(gameOver){
    resetGame();
    gameOver = false;
   }
   else {
    if(event.keyCode >= 65 && event.keyCode <= 90) {
        guessLetter(event.key.toLowerCase());
   }};
});

function guessLetter(letter){
    if(remainingGuesses > 0);
    if (!gameStarted) {
        gameStarted = true;
    };

    if (guessedLetters.indexOf(letter) === -1) {
        guessedLetters.push(letter);
        checkGuess(letter);
}
    writeDisplay();
    checkWin();
};


function checkGuess(letter){
    
    
    //Store positions of letters in string
    var positions = [];



    //find all instances of guessed letter and store in above array
    for (var i = 0; i < selectableWords[currentWord].length; i++) {
        if(selectableWords[currentWord][i] === letter) {
            positions.push(i);
        }
    }
   

    //remove guess if wrong
    if (positions.length <= 0) {
        remainingGuesses--;
        document.getElementById("remainingGuesses").innertext = remainingGuesses;

    } else {
        // Replace underscores with letter based on positionsarray
        for(var i = 0; i < positions.length; i++) {
            guessingWord[positions[i]] = letter;
        }
    }
};



//Record wins
function checkWin() {
    if(guessingWord.indexOf("_") === -1) {
        wins++;
        //Need to write to wins div here
        hasFinished = true;
    }
};




