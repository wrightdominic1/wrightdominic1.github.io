//timer
window.onload = function() {
    $("#start").on("click", start);
};

//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

// prevents the clock from being sped up unnecessarily
var clockRunning = false;
var time = 5;
var lap = 1;

var correct = 0;
var wrong = 0;
var unanswered = 0;

function start() {
    $("#gameStart").css("display","none")
    $("#game").css("display","inherit")
    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
      intervalId = setInterval(count, 1000);
      clockRunning = true;
    } 
};

if (time===0){
    clearInterval(intervalId);
  clockRunning = false;
}

function count() {

    // DONE: increment time by 1, remember we cant use "this" here.
    time--;
  
    // DONE: Get the current time, pass that into the timeConverter function,
    //       and save the result in a variable.
    var converted = timeConverter(time);
    console.log(converted);
  
    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#display").text(converted);
    if (time===0){
        clearInterval(intervalId);
        clockRunning = false;
        $("#game").css("display","none")
        $("#endGame").css("display","inherit")
        
        var q1 = parseInt($('input[name=q1]:checked').val());
            if (q1===1){
                correct++;
            } else if (q1===0){
                wrong++;
            } else{
                unanswered++;
            }
        var q2 = parseInt($('input[name=q2]:checked').val());
            if (q2===1){
                correct++;
            } else if (q2===0){
                wrong++;
            } else{
                unanswered++;
            }
        var q3 = parseInt($('input[name=q3]:checked').val());
            if (q3===1){
                correct++;
            } else if (q3===0){
                wrong++;
            } else{
                unanswered++;
            }
            
        $("#correct").text(correct);
        $("#incorrect").text(wrong);
        $("#unanswered").text(unanswered);
        console.log(correct)

         


    }
}

function timeConverter(t) {

  var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  }
  else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;
}


