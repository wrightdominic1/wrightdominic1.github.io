var gifs = ["Sup", "Let's Do This", "Cool", "Yes", "Nope", "High Five"];

function renderButtons() {
  //$("#button-view").empty();
  for (var i = 0; i < gifs.length; i++) {
    var a = $("<button>");
    a.addClass("gifButton");
    a.attr("data-name", gifs[i]);
    a.text(gifs[i]);
    $("#button-view").append(a);
  } 
}

$("#add-gif").on("click", function(event) {
  event.preventDefault();
  var gifName = $("#gif-input").val().trim();
  // gifs.push(movie);
  // console.log(gifs);
  // renderButtons();
  $("#button-view").append('<button class="gifButton" data-name="' + gifName + '">' + gifName + '</button>');
});

renderButtons();

$(document).on('click', '.gifButton', function() {
    console.log($(this).data("name"))
    var person = $(this).data("name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      person + "&api_key=dc6zaTOxFJmzC&limit=10";
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        var results = response.data;
        $("#gifs-appear-here").empty();

        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div>");
          var rating = results[i].rating;
          var p = $("<p>").text("Rating: " + rating);
          var personImage = $("<img>");
          personImage.attr("src", results[i].images.fixed_height_still.url);
          personImage.attr("data-state", "still");
          personImage.attr("data-still", results[i].images.fixed_height_still.url);
          personImage.attr("data-animate", results[i].images.fixed_height.url);
          personImage.addClass("gif");
          gifDiv.prepend(p);
          gifDiv.prepend(personImage);
          $("#gifs-appear-here").prepend(gifDiv);
        }
      });
  });


  $(document).on('click', '.gif', function() {
    //event.preventDefault();
    var state = $(this).attr("data-state");
    console.log("click");
    
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });