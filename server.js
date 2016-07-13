var express = require('express');
var app = express();

app.get('/:date',function(req, res) {
  var currentConversion = {};
  function isUnix(timestamp){
    if(Number(timestamp) == timestamp){
      return true;
    }else {
      return false;
    }
  }
  function DateObj(){
    this.natural = function(unix){
      var date = new Date(unix*1000);
      var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
      var year = date.getFullYear();
      var day = date.getDate();
      var month = months[date.getMonth()];
      return month+' '+day+', '+year;
    };

  }
  var date = new DateObj();
  if (isUnix(req.params.date)) {
    currentConversion.unix = req.params.date;
    currentConversion.natural = date.natural(req.params.date);
  }else {

      currentConversion.unix = new Date(req.params.date).getTime()/1000;
      if (isNaN(currentConversion.unix)) {
        currentConversion.natural = null;

      }else {
        currentConversion.natural = req.params.date;

      }



  }
  res.json(currentConversion);
});


app.listen(3000,function() {
  console.log('Server on port: 3000');
});
