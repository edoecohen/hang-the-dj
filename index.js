var express = require('express');
var bodyParser = require('body-parser');

var db = require('./server/config');

var User = require('./server/models/user');
var Room = require('./server/models/room');
var Song = require('./server/models/song');

var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/client'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});

app.post('/room', function(req, res) {
  Song
    .build( req.body )
    .save()
    .then(function(anotherTask) {
      console.log(anotherTask);
    }).catch(function(error) {
      console.log('error: ', error);
    })
  console.log('request: ', req.body);
});

app.get('/room', function(req, res){
  Song.findAll({})
  .then(function (songs) {
    res.status(200).json(songs);
  });
});
