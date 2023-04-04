var http = require("http");
var server = http.createServer(function (peticion, respuesta){
   respuesta.end("Running Server...");
});
server.listen(3000, function(){
   console.log("RESTful API server started. Public DNS:Port " + this.address().port);
});