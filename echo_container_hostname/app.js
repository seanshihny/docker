const http = require('http');
const os = require('os');
var dt = require('./now')
console.log("http server starting...");
var handler = function(request, response) {
console.log("[ " + dt.currDateTime() + " ] Received request from " + request.connection.remoteAddress); response.writeHead(200);
response.end("You've hit [" + os.hostname() + "], current datetime: " + dt.currDateTime() + "\n");
};
var www = http.createServer(handler);
www.listen(8080);