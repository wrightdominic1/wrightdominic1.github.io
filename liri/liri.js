require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var moment = require('moment');
moment().format();
var axios = require("axios");
var fs = require("fs");
//console.log(process.argv[2] + process.argv[3]);


var command = process.argv[2];
var request = process.argv[3];

if (command === "concert-this") {
  axios.get("https://rest.bandsintown.com/artists/" + request + "/events?app_id=codingbootcamp").then(
    function (response) {
      var i = 18;
      //for (i in response) {
      console.log(response.data[i].venue.name + " " + response.data[i].venue.city + ", " + response.data[i].venue.region + " " + moment(response.data[i].venue.datetime).format('L'));
      //};
    });
} else if (command === "spotify-this-song") {

  spotify.search({ type: 'track', query: "Tonight", limit: 10 }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    var songName;
    var albumName;
    var artistName;
    var preview;
    for (i = 0; i < data.tracks.items.length; i++) {
      //songName = data.tracks.items[i].name;
      //albumName = data.tracks.items[i].album.name;
      artistName = data.tracks.items[i].album.artists[0].name;
      //preview = data.tracks.items[i].preview_url;
      console.log( artistName );
      console.log(i)
    }

    // var albumName = data.tracks.items[0].album.name
    // var artistName = data.tracks.items[0].album.artists[0].name
    // var preview = data.tracks.items[0].preview_url
    // var songName = data.tracks.items[0].name
    // console.log(songName);
  });
} else if (command === "movie-this") {
  axios.get("http://www.omdbapi.com/?t=" + request + "&y=&plot=short&apikey=trilogy").then(
    function (response) {
      console.log(response.data.Title + " came out in the year " + response.data.Year + ".\r\n" +
        "It has an imdb rataing of " + response.data.imdbRating + " and a rotten tomatos score of " + response.data.Ratings[1].Value + ".\r\n" +
        response.data.Plot + ".\r\n" +
        response.data.Actors + ".\r\n" +
        response.data.Country + ", " + response.data.Language + ".\r\n");
    }
  );

} else if (command === "do-what-it-says") {
  fs.readFile("random.txt", "utf8", function (error, data) {
    if (error) {
      return console.log(error);
    }
    console.log(data);
    var dataArr = data.split(",");
    console.log(dataArr);

  });
} else {
  console.log("invalid input")
}








