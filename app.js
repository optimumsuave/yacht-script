var express = require('express');
var app = express();


app.get('/', function(req, res){
	res.send('Yacht Script Triggered');
});

app.listen(process.env.PORT || 4000, function(){
	console.log('Yacht Script Running');
});
