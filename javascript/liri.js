// add code to read and set any environment variables with the dotenv package:
require("dotenv").config();
//add code required to import the spotify api
var Spotify = require("node-spotify-api");
// Add the code required to import the keys.js file and store it in a variable.
var keys = require("./keys.js");
// You should then be able to access your keys information like so
var spotify = new Spotify(keys.spotify);
//making the request for the "request"
var request = require("request");
//making the request for the moment
var moment = require("moment");
//making the request for the fs
var fs = require("fs");
// takes in the command 
var input = process.argv[2];
//if statement to know when there is a concert

if (input === "concert-this") {

  var artist = process.argv[3];

  request("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp", function (error, body) {
    if (!error) {
      console.log("--------------------");
      console.log("Venue: " + JSON.parse(body)[0].venue.name);
      console.log("Location: " + JSON.parse(body)[0].venue.city + " " + JSON.parse(body)[0].venue.region);
      console.log("Date: " + moment(JSON.parse(body)[0].datetime).format("MM/DD/YYYY"));
      console.log("--------------------");
    }
  });
} else if (input === "spotify-this-song") {

  var song = process.argv[3];

  if (song === undefined) {

    song = "The Sign";
  }

  spotify.search({
    type: "track",
    query: song
  }, function (error, data) {
    if (error) {
      return console.log("Error: " + error);
    }
    // console.log(data.tracks.items[0]);
    console.log("--------------------");
    console.log("Artist: " + data.tracks.items[0].artists.name);
    console.log("Song Name: " + data.tracks.items[0].name);
    console.log("Preview Link: " + data.tracks.items[0].preview_url);
    console.log("Album: " + data.tracks.items[0].album.name);
    console.log("---------------------");
  });

} else if (input === "movie-this") {

  var movie = process.argv[3];

  if (movie === undefined) {
    movie = "Mr. Nobody";
  }
  request("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy", function (error, body) {

    if (!error) {

      //about the Movie
      console.log("---------------------");
      console.log("Title: " + JSON.parse(body).Title);
      console.log("Year Released: " + JSON.parse(body).Year);
      console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
      console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
      console.log("Country Produced: " + JSON.parse(body).Country);
      console.log("Language: " + JSON.parse(body).Language);
      console.log("Plot: " + JSON.parse(body).Plot);
      console.log("Actors: " + JSON.parse(body).Actors);
      console.log("---------------------");
    }
  });
  //Grab text from random txt file
} else if (input === "do-what-it-says") {

  fs.readFile("random.txt", "utf8", function (error, data) {

    if (error) {
      return console.log(error);
    }

    console.log(data);
    var dataArr = data.split(",");
    console.log(dataArr);

    input = dataArr[0];
    whatToInput = dataArr[1];

    if (input === "concert-this") {

      var artist = whatToInput;

      request("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp", function (error, body) {

        if (!error) {
          console.log("----------------------");
          console.log("Venue: " + JSON.parse(body)[0].venue.name);
          console.log("Location: " + JSON.parse(body)[0].venue.city + " " + JSON.parse(body)[0].venue.region);
          console.log("Date: " + moment(JSON.parse(body)[0].datetime).format("MM/DD/YYYY"));
          console.log("----------------------");
        }
      });

      // If we want a song
    } else if (input === "spotify-this-song") {
      var song = whatToInput;

      if (song === undefined) {
        song = "The Sign";
      }

      spotify.search({
        type: "track",
        query: song
      }, function (err, data) {
        if (err) {
          return console.log("Error occured: " + err);
        }
        console.log(data.tracks.items[0].album[0]);
      });


      // If we want a movie
    } else if (input === "movie-this") {

      var movie = whatToInput;

      if (movie === undefined) {
        movie = "Mr. Nobody";
      }

      request("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy", function (error, body) {

        if (!error) {

          // Information about  the movie
          console.log("-------------------");
          console.log("Title: " + JSON.parse(body).Title);
          console.log("Year Released: " + JSON.parse(body).Year);
          console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
          console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
          console.log("Country Produced: " + JSON.parse(body).Country);
          console.log("Language: " + JSON.parse(body).Language);
          console.log("Plot: " + JSON.parse(body).Plot);
          console.log("Actors: " + JSON.parse(body).Actors);
          console.log("--------------------");
        }
      });


      // If input not entered catch the error
    } else {
      console.log("Error");
    }

    console.log("--------------------");
    console.log("Input: ", input);
    console.log("--------------------");
  });


} else {
  console.log("Error");
}



// Basic Node application for requesting data from the OMDB website via axios
// Here we incorporate the "axios" npm package
// var axios = require("axios");

// // We then run the request with axios module on a URL with a JSON
// axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
//   function(response) {
//     // Then we print out the imdbRating
//     console.log("The movie's rating is: " + response.data.imdbRating);
//   }
// );