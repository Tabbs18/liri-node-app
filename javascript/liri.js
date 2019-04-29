// add code to read and set any environment variables with the dotenv package:

require("dotenv").config();
// Add the code required to import the keys.js file and store it in a variable.
  var keys = require("./keys.js");
// You should then be able to access your keys information like so

var spotify = new Spotify(keys.spotify);
























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