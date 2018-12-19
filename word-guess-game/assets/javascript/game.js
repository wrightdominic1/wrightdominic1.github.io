var wordbank = [
    ["h", "o", "m", "e"],
      ["m","o","n","k","e", "y"],
      ["d","o","m"]
    ];

var chances = 13;
var chancesText = document.getElementById("chances-text");

//get random array item
var rand = wordbank[Math.floor(Math.random() * wordbank.length)];


//generate html dashes
var gallows = document.getElementById("empty-div");


function printBlanks(){
    for (var i = 0; i < rand.length; i++) {
      //create a span tag for each _
      var dash = document.createElement("span");
      dash.textContent = ("_ ");
      //write to page
      gallows.appendChild(dash); 
    }
};

document.ready = printBlanks();

//user input
document.onkeyup = function(event) {

    //determine which key is pressed
    var userGuess = event.key;
    var userGuessLower = userGuess.toLowerCase();

    //compare user key with array 
      // If the user's band is not in the array...
      if (rand.indexOf(userGuessLower) === -1) {
        //take away a guess
        chances--;
        //post guess to wrong answer location
        var wrongGuess = document.createElement("span");
        wrongGuess.textContent = userGuessLower;
        wrong.appendChild(wrongGuess); 

    }
    // If it is in the array...
    else {
        //empty dashes
        gallows.textContent = "";
        //variables
        var rightLetterIndex = rand.indexOf(userGuessLower);
        var rightLetterValue = rand.valueOf(rightLetterIndex);
        
        function printAnswer(){

            for (var i = 0; i < rightLetterIndex; i++) {
                //create a span tag for each _
                var dash = document.createElement("span");
                dash.textContent = ("_ ");
                //write to page
                gallows.appendChild(dash); 
            };

            //write right letter to page
            var rightGuess = document.createElement("span");
            rightGuess.textContent = userGuessLower;
            gallows.appendChild(rightGuess);

            //create extra dashes
            for (var i = rightLetterIndex; i < rand.length-1; i++) {
                //create a span tag for each _
                var dash = document.createElement("span");
                dash.textContent = ("_ ");
                //write to page
                gallows.appendChild(dash); 
            };      
        };
        printAnswer();
        
        
        //target array index with matching letter
        //function rightAnswer(){
            
        //};
        //rewrite to page
        //rightAnswer();
        
    }
    chancesText.textContent = "# of guesses remaining: " + chances;
    //wrong.textContent = ;
}

