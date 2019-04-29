console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

// var Spotify = require('node-spotify-api');
 
// var spotify = new Spotify({
//   id: <6105ab311fca475d82608510f366e736>,
//   secret: <7361105488c1406f81db3d54b08207b5>
// });
 
// spotify
//   .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
//   .then(function(data) {
//     console.log(data); 
//   })
//   .catch(function(err) {
//     console.error('Error occurred: ' + err); 
//   });