var express = require('express');
var app = express();


app.get('*',function(req, res) {

  res.end('Hi from ' + req.url);
});


app.listen(3000,function() {
  console.log('Server on port: 3000');
});
