


var choices = ["a","b","c","d","e","f","g","h","i","j","k"];

var wins = 0;
var losses = 0;
var remainingGuesses = 9;
var guessedLetters = [];





document.onkeyup = function(event){
    var userGuess = event.key;
    guessedLetters.push(userGuess);
    var psychicChoices = choices[Math.floor(Math.random() * 
    choices.length)];
    
    
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
        
    

    var html = 
        "<h1> Psychic Game</h1>" +
        "<p>Try to guess what letter im thinking of:</p>" +
        "<p>Wins: " + wins +
        "<p>Losses: " + losses +
        "<p>Guesses Remaining: " + remainingGuesses +
        "<p>Your Guesses: " + guessedLetters.join(", ");

        document.body.innerHTML = html;
};
        

        

    


