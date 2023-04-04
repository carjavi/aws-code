// Server Express
var express = require('express');
var app = express();


const PORT = 3000;
//const HOST = '0.0.0.0';

//Import
var apilistthing = require('./api/listthings'); 


// API's
app.get('/', function (req, res) {
  res.send('Running Server...');
});


app.get('/obt', function (req, res) {
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
});


// para descargar los certificados. Basta con poner el nombre del certificado en la URL y lo descarga
app.get('/download_cert/:name', function (req, res) {
	//descargar certificados
	res.download(__dirname + '/certificates/'+ req.params.name, req.params.name, function(error){
		if (error){
			console.log(error);
		}else {
			console.log('Listo');	
		}
	});

});


// sample lista los objetos en la cuenta del usuario
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


app.listen(PORT, function () {
  console.log("RESTful API server started. Public DNS:Port " + this.address().port);



/*
    var sns = new AWS.SNS();
    var ddb = new AWS.DynamoDB();




    // abrir un archivo
    app.get('/', function (req, res) {
      res.sendFile(path.join(__dirname + '/index.html'));
    })


const mqtt = require('mqtt');
const websocket = require('websocket-stream');


    var mapping = JSON.parse(
    `{
      "properties": {
        "field": {
          "type":"string"
        }
      }
    }`);


const createRule = require('./createRule');
const createIndex = require('./createIndex');
const AWS = require('aws-sdk');
const async = require('async');


*/
