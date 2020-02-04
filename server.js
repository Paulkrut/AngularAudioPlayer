//Install express server
const express = require('express');
const path = require('path');

const app = express();
var cors = require('cors');

app.use(cors({origin: 'https://angular-audio-player-pavel-f.herokuapp.com/'}));
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/angular-audio-player-pavel-f'));

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname+'/dist/angular-audio-player-pavel-f/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
