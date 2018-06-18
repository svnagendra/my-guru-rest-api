var port = process.env.PORT || 3000;
var express = require('express');

var app = express();

//Refer all required folders & references
var defaultapi = require('./services/api');

//Default methods provided by skelton
app.get('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});

//Custom application methods
app.get('/api/name', function(req, res) {
  res.send({
    "Output": "Hello World! My Name is Test. You called Myguru-Api"
  });
});

app.listen(port);
module.exports = app;
