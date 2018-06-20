var express = require('express');
var app = express()
var port = 9000;
var path = require("path");

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname+'/views/index.html'));
});

app.listen(port, function () {
  console.log("Express server listening on port " + port);
});
