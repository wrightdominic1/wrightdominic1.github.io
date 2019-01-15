//timer
window.onload = function() {
    $("#start").on("click", start);
    $("#submit").on("click", submit);
};

var intervalId;

var clockRunning = false;
var time = 60;
var lap = 1;

var correct = 0;
var wrong = 0;
var unanswered = 0;

function start() {
    $("#gameStart").css("display","none")
    $("#game").css("display","inherit")
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

    time--;
  
    var converted = timeConverter(time);
  
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
        var q4 = parseInt($('input[name=q3]:checked').val());
            if (q4===1){
                correct++;
            } else if (q4===0){
                wrong++;
            } else{
                unanswered++;
            }
        var q4 = parseInt($('input[name=q3]:checked').val());
            if (q4===1){
                correct++;
            } else if (q4===0){
                wrong++;
            } else{
                unanswered++;
            }
        var q5 = parseInt($('input[name=q3]:checked').val());
            if (q5===1){
                correct++;
            } else if (q5===0){
                wrong++;
            } else{
                unanswered++;
            }
        var q6 = parseInt($('input[name=q3]:checked').val());
            if (q6===1){
                correct++;
            } else if (q6===0){
                wrong++;
            } else{
                unanswered++;
            }
        var q7 = parseInt($('input[name=q3]:checked').val());
            if (q7===1){
                correct++;
            } else if (q7===0){
                wrong++;
            } else{
                unanswered++;
            }
         var q8 = parseInt($('input[name=q3]:checked').val());
            if (q8===1){
                correct++;
            } else if (q8===0){
                wrong++;
            } else{
                unanswered++;
            }
            
        $("#correct").text(correct);
        $("#incorrect").text(wrong);
        $("#unanswered").text(unanswered);

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


