var AWS = require('aws-sdk');

AWS.config.update({	
	//endpoint: "https://XXXXXX.iot.us-east-1.amazonaws.com",
    accessKeyId: 'AKIAJ6Y27ZUEZFLXARXA',
    secretAccessKey: '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',
    region: 'us-east-1'});

var iot = new AWS.Iot();


function x (){

	var p = new Promise(function (resolve, reject){ // objeto promise. resolver = si pasa / reject = si no pasa
				// Funcion lista los dispositivos
				iot.listThings({}, function(err, data) {
					    if (err) {
					    	console.log(err, err.stack); // an error occurred
					    	reject(err);
					    } 
					    else  {
							// successful response
					    	resolve(data);
					    }          
				});
	});

	

	return p; 

}


exports.ver = x; // declara la funcion ver y lo asocia la funcion x