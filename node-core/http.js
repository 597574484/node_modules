var http = require('http');

// http.createServer(function(req, res){
// 	var string = "";
// 	var string2 = "";
// 	res.writeHead(200,{'Content-Type' : "text/plain"});
// 	for(var key in res){
// 		string = string + "\n" + key + " : " + res[key];
// 	}
// 	for(var key in req){
// 		string2 = string2 + key + " : " + req[key];
// 	}
// 	res.end(string +"<h1>HEHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE\n"+string2)
// }).listen(3000,function(err){if(err)console.log(err);});


//var options = {
//	host : 'localhost',
//	port : 3000,
//	path : '/index.html'
//}
//var callback = function(res){
//	var data = "";
//	res.on('data',data=>body+=data);
//}
//var req = http.request(options, callback);
//req.end();
//
