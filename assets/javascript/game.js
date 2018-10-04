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

var remainingGuesses = 0;

var gameStarted 

var hasFinished = false;

var wins = 0;

var currentWordDiv;


//Functions



///Select a random word for use
function selectWord(){
    currentWord = selectableWords[Math.floor(Math.random()*selectableWords.length)];
    currentWordDiv = document.getElementById("currentWord");
    console.log(currentWord);
}; //Put this inside of reset game function below

//Reset game
function resetGame(){
     remainingGuesses = maxTries;
     gameStarted = false;
     hasFinished = false;
     wins = 0;
     guessedLetters = [];
     guessingWord = [];
     currentWord = Math.floor(Math.random() * (selectableWords.length));
     currentWordDiv = document.getElementById("currentWord");
     console.log(currentWord);
     console.log(currentWord.length);
};

//Hit key to start game/select word/populate underscores
document.addEventListener('keydown', function() {
    resetGame();
    currentWordDiv.innerHTML = guessingWord;
    gameStarted = true;
    });
    





//Create underscores to display based on length of word being guessed
function createUnderScores(currentWord, currentWordDiv){
    for(var i=0; i < currentWord.length; i++){
        currentWordDiv.innerHTML = underScore[i];
    }
};

document.addEventListener('keydown', function(){

    currentWordDiv = document.getElementById("currentWord");

    if(gameStarted = true){
        var keyName = event.key;
        currentWordDiv.innerHTML= keyName;
    }
});

//Register letters when guessed correctly and display

//Keep track of letters guessed incorrectly and display


//Register a win when all correct letters are guessed

//Count wins

//New word when word is guessed




