var gameScore = Math.floor((Math.random() * 80) + 25);

var blue = Math.floor((Math.random() * 25) + 1);
var green = Math.floor((Math.random() * 30) + 1);
var purple = Math.floor((Math.random() * 15) + 5);
var silver = Math.floor((Math.random() * 20) + 10);

var wins = 0;
var losses = 0;

console.log(gameScore);
console.log(blue);
console.log(green);
console.log(purple);
console.log(silver);


$("#score").html( gameScore );
$("#wins").html( wins );
$("#losses").html( losses );

var crystalClicked;

$("#blue").on("click", function (){
    if (gameScore > 0){
        $("#winner").html(" ");
        gameScore = gameScore - blue;
        $("#score").html(gameScore);
        
    }
    else if (gameScore === 0){
        $("#winner").html("WE HAVE A WINNER!!!");
        wins++;
        $("#wins").html( wins );

    }
    else if (gameScore < 0){
        $("#winner").html("WE HAVE A LOSER!!!");
        gameScore = Math.floor((Math.random() * 80) + 25);
        losses++;
        $("#losses").html( losses );    
    }

});
$("#green").on("click", function (){
    if (gameScore > 0){
        $("#winner").html(" ");
        gameScore = gameScore - green;
        $("#score").html(gameScore);
        
    }
    else if (gameScore === 0){
        $("#winner").html("WE HAVE A WINNER!!!");
        wins++;
        $("#wins").html( wins );

    }
    else if (gameScore < 0){
        $("#winner").html("WE HAVE A LOSER!!!");
        gameScore = Math.floor((Math.random() * 80) + 25);
        losses++;
        $("#losses").html( losses );    
    }

});
$("#purple").on("click", function (){
    if (gameScore > 0){
        $("#winner").html(" ");
        gameScore = gameScore - purple;
        $("#score").html(gameScore);
        
    }
    else if (gameScore === 0){
        $("#winner").html("WE HAVE A WINNER!!!");
        wins++;
        $("#wins").html( wins );

    }
    else if (gameScore < 0){
        $("#winner").html("WE HAVE A LOSER!!!");
        gameScore = Math.floor((Math.random() * 80) + 25);
        losses++;
        $("#losses").html( losses );    
    }

});
$("#silver").on("click", function (){
    if (gameScore > 0){
        $("#winner").html(" ");
        gameScore = gameScore - silver;
        $("#score").html(gameScore);
        
    }
    else if (gameScore === 0){
        $("#winner").html("WE HAVE A WINNER!!!");
        wins++;
        $("#wins").html( wins );

    }
    else if (gameScore < 0){
        $("#winner").html("WE HAVE A LOSER!!!");
        gameScore = Math.floor((Math.random() * 80) + 25);
        losses++;
        $("#losses").html( losses );    
    }

});