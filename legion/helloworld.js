// First Node program
var http = require('http');

//Configure HTTP server witha a simple Hello World to all requests
var server = http.createServer(function (request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.end("Hello World\n");
});

// Listen on port 80
server.listen(8000);
