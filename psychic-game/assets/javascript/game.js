var letterbank = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wins=0;
var loses=0;
var chances = 11;

var winsText = document.getElementById("wins");
var losessText = document.getElementById("loses");
var chancesText = document.getElementById("chances-text");
var wrongText = document.getElementById("wrong");

//get random array item
var rand = letterbank[Math.floor(Math.random() * letterbank.length)];

//user input
document.onkeyup = function(event) {

    //determine which key is pressed
    var userGuess = event.key;
    var userGuessLower = userGuess.toLowerCase();

    //if the key input is wrong
    if (rand.indexOf(userGuessLower) === -1) {
        //take away a guess
        chances--;
        //post guess to wrong answer location
        var wrongGuess = document.createElement("span");
        wrongGuess.textContent = userGuessLower;
        wrong.appendChild(wrongGuess); 
        //reset when chances run out
        if (chances===0){
            //add a loss
            loses++;
            //reset trackers
            chances=10;
            wrong.textContent=" ";
            rand = letterbank[Math.floor(Math.random() * letterbank.length)];
        }
    }
    // If key input is correct
    else {
        //add a win
        wins++;
        //reset trackers
        chances=10;
        wrong.textContent=" ";
        rand = letterbank[Math.floor(Math.random() * letterbank.length)];
    }
    //change text on page
    chancesText.textContent = "# of guesses remaining: " + chances;
    losessText.textContent = "Loses: " + loses;
    winsText.textContent = "Wins: " + wins;
}

