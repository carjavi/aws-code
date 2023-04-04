


const fs = require('fs'); // Generer archivos de los certificados
var AWS = require('aws-sdk');




AWS.config.update({	
	//endpoint: "https://XXXXXX.iot.us-east-1.amazonaws.com",
    accessKeyId: 'AKIAJ6Y27ZUEZFLXARXA',
    secretAccessKey: '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',
    region: 'us-east-1'});

var iot = new AWS.Iot();
var readlineSync = require('readline-sync'); // leer desde el teclado


// DNS del boton
var DNS = readlineSync.question('Cual es DNS del Boton: G030JF05');
var DNSButton = 'G030JF05' + DNS;
//console.log('DNS' + DNSButton);

//damos nombre al Boton
var ButtonName = 'DashButton' + DNSButton;
//console.log(ButtonName);

// determinamos nombre y clave del AP del Boton
var wifi_ssid = 'Button ConfigureMe';
var wifi_password = DNSButton.substring(8, 16);
console.log('SSID:'+ wifi_ssid +'/ Password:' + wifi_password);



//***************************************************** Crea la Things en AWS
var paramsthing = {
  thingName: ButtonName, 
  attributePayload: {
    attributes: {
      'Uso': 'Demo',
     },
    merge: true || false
  },
  thingTypeName: 'ThingType'
};
iot.createThing(paramsthing, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});



// **************************************************** crea los certificados
var paramscert = {
  setAsActive: true || false
};
iot.createKeysAndCertificate(paramscert, function(err, data) {
	  if (err) console.log(err, err.stack); // an error occurred
	  else {
		  	console.log("=================================")
			//console.log(data);           // successful response
			console.log('Certificates Created!');  

		    console.log("=================================")
		    //console.log(data.certificatePem);

			
		    // copia en la raiz el certificado certificatePem
			fs.writeFile("./certificates/" + DNSButton + "certificatePem.pem.ctr", data.certificatePem, function (err) {
			    if (err) {
			        return console.log(err);
			    }
			    //console.log("The certificatePem.pem.ctr file was saved!");
			});

			// copia en la raiz el certificado private.pem.key
			fs.writeFile("./certificates/" + DNSButton + "private.pem.key", data.PrivateKey, function (err) {
			    if (err) {
			        return console.log(err);
			    }
			    //console.log("The private.pem.key file was saved!");
			});

	  }    
 });


/*
// lista los dispositivos
iot.listThings({}, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
});
*/




/*

//AWS.config.update({region:'us-east-1'});  ///Actualizacion de l regin

var dd = new AWS.DynamoDB();

//AWS.config.credentials = {

//Comandos de console para sincronizar hora con el servidor
//child = exec('sudo service ntp stop', function (error, stdout, stderr){});
//child = exec('ntpdate 2.amazon.pool.ntp.org', function (error, stdout, stderr){});
//child = exec('service ntp start', function (error, stdout, stderr){});


child = exec('--version',
	function (error, stdout, stderr) {
    // Imprimimos en pantalla con console.log
    console.log(stdout);
    // controlamos el error
    if (error !== null) {
      console.log('exec error: ' + error);
    }
});


// lista things
child = exec('aws iot list-things', 
	function (error, stdout, stderr) {
    // Imprimimos en pantalla con console.log
    console.log(stdout);
    // controlamos el error
    if (error !== null) {
      console.log('exec error: ' + error);
    }
});

//var AWS = require('aws-iot-device-sdk'

const ntp = require('ntp2');

 
ntp.time(function(err, time){
  console.log('The network time is :', time);
});
//  


var params = {
  certificateId: 'STRING_VALUE', 
  setAsActive: true || false
};

var iot = new AWS.Iot();
iot.acceptCertificateTransfer(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});



var iot = new AWS.Iot();

var iot = new AWS.Iot({
  accessKey: 'AKIAJ6Y27ZUEZFLXARXA',
  secretKey: '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',
  region: 'us-east-1'
});
iot.listThings({}, function (err, data) {
  if (err) {
    console.log (err.stack); // an error occurred
  } else {
   console.log(data); // successful response
  }
});


var params = {
  thingName: 'STRING_VALUE', 
  attributePayload: {
    attributes: {
      '<AttributeName>': 'STRING_VALUE',
     
    },
    merge: true || false
  },
  thingTypeName: 'STRING_VALUE'
};
iot.createThing(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});


var params = {
  thingArn: 'STRING_VALUE',
  thingGroupArn: 'STRING_VALUE',
  thingGroupName: 'STRING_VALUE',
  thingName: 'STRING_VALUE'
};
iot.addThingToThingGroup(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});



var params = {
  thingName: 'STRING_VALUE', 
  expectedVersion: 0
};
iot.deleteThing(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});
*/
