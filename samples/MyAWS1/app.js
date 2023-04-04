var awsIot =  require ( 'aws-iot-device-sdk' );

//
// Replace the values of '<YourUniqueClientIdentifier>' and '<YourCustomEndpoint>'
// with a unique client identifier and custom host endpoint provided in AWS IoT cloud
// NOTE: client identifiers must be unique within your AWS account; if a client attempts 
// to connect with a client identifier which is already in use, the existing 
// connection will be terminated.
//
var device = awsIot.device({
   keyPath: '007ee06677-private.pem.key', // PATH <YourPrivateKeyPath>
  certPath: '007ee06677-certificate.pem.crt', // PATH <YourCertificatePath>
    caPath: 'rootCA.pem', // PATH <YourRootCACertificatePath>
  clientId: 'MyDashButton',  //  PATH  <YourUniqueClientIdentifier> Nombre del dispositivo o thing
      host: 'avfbuyk2hmqtf.iot.us-east-1.amazonaws.com'  // URL <YourCustomEndpoint>
      //,region: 'us-east-1'
});

//
// Device is an instance returned by mqtt.Client(), see mqtt.js for full
// documentation.
//
device
  .on('connect', function() {
    console.log('connect');
    device.subscribe('receive_topic');
    device.publish('send_topic', JSON.stringify({ test_data: 'Estoy vivo...'}));
    console.log('Mensaje Enviado');
  });

device
  .on('message', function(topic, payload) {
    console.log('message', topic, payload.toString());
  });

  
  
