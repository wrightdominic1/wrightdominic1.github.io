var gifs = ["The Matrix", "The Notebook", "Mr. Nobody", "The Lion King"];

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

$(".gifButton").on("click", function() {
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
          personImage.attr("src", results[i].images.fixed_height.url);
          personImage.addClass("gif");
          gifDiv.prepend(p);
          gifDiv.prepend(personImage);
          $("#gifs-appear-here").prepend(gifDiv);
        }
      });
  });