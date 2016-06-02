var http = require('http');

var url = require('url');
var querystring = require('querystring');

http.createServer(function(req, res){
	var pathname = url.parse(req.url).pathname;
	console.log("Request for " + pathname + " received.");
	res.end('hee');
}).listen(3000);

/**
 * 
 */