var psychicChoices = ["a","b","c","d","e","f","g","h","i","j","k"];

var wins = 0;
var losses = 0;
var remainingGuesses = 9;
var guessedLetters = [];


var directionsText = document.getElementById("directions-text");
var playerChoices = document.getElementById("playerschoice-text");
var psychicChoices = document.getElementById("psychicchoices-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");


document.onkeyup = function(event){
    var userGuess = event.key;
    guessedLetters.push(userGuess);
    var psychicChoices = psychicChoices[Math.floor(math.random() * 
    psychicChoices.length)];
    
    
    if (userGuess === psychicChoices) {
        wins++;
        remainingGuesses = 9;
        guessedLetters = [];
    
    } else {
        remainingGuesses--;

    }

    if (remainingGuesses === 0){
        losses++;
        remainingGuesses = 9;
        guessedLetters = [];
    }
        
    
        directionsText.textContent = "";
        playerChoices.textContent = "you chose: " + playersChoices;
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;

    var html = 
        "<h1> Psychic Game</h1>" +
        "<p>Try to guess what letter im thinking of:</p>" +
        "<p>Wins: " + wins +
        "<p>Losses: " + losses +
        "<p>Guesses Remaining: " + remainingGuesses +
        "<p>Your Guesses: " + guessedLetters.join(", ");

        document.body.innerHTML = html;
        

        

    

};
