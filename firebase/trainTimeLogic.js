// Steps to complete:

// 1. Initialize Firebase
// 2. Create button for adding new trains - then update the html + update the database
// 3. Create a way to retrieve trains from the train database.
// 4. Create a way to calculate the months worked. Using difference between start and current time.
//    Then use moment.js formatting to set difference in months.
// 5. Calculate Total billed

// 1. Initialize Firebase
var config = {
  apiKey: "AIzaSyBO5RBkmqYkO6YlLehDQagQUtTy6OGqsyM",
  authDomain: "dominic-s-first-firbase.firebaseapp.com",
  databaseURL: "https://dominic-s-first-firbase.firebaseio.com",
  projectId: "dominic-s-first-firbase",
  storageBucket: "dominic-s-first-firbase.appspot.com",
  messagingSenderId: "536232874061"
};
firebase.initializeApp(config);

var database = firebase.database();

// 2. Button for adding trains
$("#add-train-btn").on("click", function(event) {
  event.preventDefault();

  // Grabs user input
  var trName = $("#train-name-input").val().trim();
  var trDes = $("#des-input").val().trim();
  var trTime = moment($("#trTime-input").val().trim(), "MM/DD/YYYY").format("X");
  var freq = $("#freq-input").val().trim();

  // Creates local "temporary" object for holding train data
  var newTr = {
    name: trName,
    des: trDes,
    time: trTime,
    freq: freq
  };

  // Uploads train data to the database
  database.ref().push(newTr);

  // Logs everything to console
  console.log(newTr);
  

  alert("train successfully added");

  // Clears all of the text-boxes
  $("#train-name-input").val("");
  $("#des-input").val("");
  $("#trTime-input").val("");
  $("#freq-input").val("");
});

// 3. Create Firebase event for adding a train to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapshot.val());

  // Store everything into a variable.
  var trName = childSnapshot.val().name;
  var trDes = childSnapshot.val().des;
  var trTime = childSnapshot.val().trTime;
  var freq = childSnapshot.val().freq;

//   // Train Info
//   console.log(trName);
//   console.log(trDes);
//   console.log(trTime);
//   console.log(freq);

  // // Prettify the train time
  console.log(trTime)
   var trStartPretty = moment.unix(trTime).format("MM/DD/YYYY");

  // // Calculate the months worked using hardcore math
  // // To calculate the months worked
  // var trStart = moment().diff(moment(trTime, "X"), "//unknown");
  // console.log(trStart);

  // // Calculate the total billed rate
  // var trBilled = trStart * freq;
  // console.log(trBilled);
  var minAway = 0;

  // Create the new row
  var newRow = $("<tr>").append(
    $("<td>").text(trName),
    $("<td>").text(trDes),
    $("<td>").text(freq),
    $("<td>").text(trStartPretty),
    $("<td>").text(minAway),
  );

  // Append the new row to the table
  $("#train-table > tbody").append(newRow);
});

