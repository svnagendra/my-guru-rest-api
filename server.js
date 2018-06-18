var port = process.env.PORT || 3000;
var express = require('express');

var app = express();

//Refer all required folders & references
api = require('./services/api'),

app.get('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});

app.get('/name', api.name);

app.post('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});

app.listen(port);
module.exports = app;
