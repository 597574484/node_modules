var http = require('http');

http.createServer(function(req, res){
	var string = "";
	var string2 = "";
	res.writeHead(200,{'Content-Type' : "text/plain"});
	for(var key in res){
		string = string + "\n" + key + " : " + res[key];
	}
	for(var key in req){
		string2 = string2 + key + " : " + req[key];
	}
	res.end(string +"<h1>HEHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE\n"+string2)
}).listen(3000,function(err){if(err)console.log(err);});


/**
 * http : 
 *
 * 
 */