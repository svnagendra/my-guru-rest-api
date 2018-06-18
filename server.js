var port = process.env.PORT || 3001;
var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send({
    "Output": "Hello World! This is a My guru App. An awesome app for talent to meet gurus."
  });
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});

app.listen(port);
module.exports = app;
