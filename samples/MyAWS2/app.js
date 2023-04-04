var awsIot =  require ( 'aws-iot-device-sdk' );

var device = awsIot.device({
   keyPath: '/home/root/MyAWS2/awscerts/007ee06677-private.pem.key', // PATH <YourPrivateKeyPath>
  certPath: '/home/root/MyAWS2/awscerts/007ee06677-certificate.pem.crt', // PATH <YourCertificatePath>
    caPath: '/home/root/MyAWS2/awscerts/rootCA.pem', // PATH <YourRootCACertificatePath>
  clientId: 'MyDashButton',  //  PATH  <YourUniqueClientIdentifier> Nombre del dispositivo o thing
      host: 'avfbuyk2hmqtf.iot.us-east-1.amazonaws.com'  // URL <YourCustomEndpoint>
});

console.log("AWS IoT Device object initialized");

device
  .on('connect', function() {
        console.log('connect');
        device.subscribe('receive_topic'); // topic de entrada

        var Gpio = require('onoff').Gpio,                
        button = new Gpio(45, 'in', 'both'); 
        button.watch(function (err, value) {
              if (err) {
                throw err;
               }
              if (value == 0){
                    device.publish('send_topic', JSON.stringify({ test_data: 'Button'})); // publicacion de datos
                    console.log('Pedido Hecho!');
               }
                
        });
  });

device
  .on('message', function(topic, payload) {
    console.log('message', topic, payload.toString());
  });
  