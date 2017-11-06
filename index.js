var express = require('express');
var app = express();
var path = require('path');
app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname+'public/index.html'));

});


app.listen(3000, function(req, res){
  console.log('Listening on port 3000')
  //net stop http
});
