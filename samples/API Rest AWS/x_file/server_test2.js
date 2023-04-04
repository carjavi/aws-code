// Server Express
var express = require('express');
var app = express();

//Import
var apilistthing = require('./api/listthings'); 


// AWS
var AWS = require('aws-sdk');
AWS.config.update({	
	//endpoint: "https://XXXXXX.iot.us-east-1.amazonaws.com",
    accessKeyId: 'AKIAJ6Y27ZUEZFLXARXA',
    secretAccessKey: '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',
    region: 'us-east-1'});
var iot = new AWS.Iot();




app.get('/', function (req, res) {
  res.send('Running Server...');
});


app.get('/obt', function (req, res) {
		// lista los dispositivos
		iot.listThings({}, function(err, data) {
		    if (err) console.log(err, err.stack); // an error occurred
		    else     {

		    	res.send(data);
		    }         // successful response
		});
 });


app.get('/api_list', function (req, res) {
	
		var obtObjPromise = apilistthing.ver();

		obtObjPromise.then(

			function(result){
				console.log("api_list in browser");
				res.send(result); // muestra respuesta en el browser
			} ,

			function(error){
				console.log("error");
				res.send(error);
			}

		);
 
});



app.get('/b', function (req, res, next) {
  console.log('Escribe en la consola');
  next();
}, function (req, res) {
  res.send('Escribe en el Browser'); // en el navegador
});



app.listen(3000, function () {
  console.log("RESTful API server started. Public DNS:Port " + this.address().port);
});
