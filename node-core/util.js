var util = require('util');
var http = require('http');



http.createServer(function(req, res){
	res.end(util.inspect(req));
}).listen(3000);

/**
 * util
 * 1.inherits (child,parent);	继承原型中的函数
 * 2.inspect 将对象转换成字符串  (非简单的toString)
 * 3.isArray, isRegExp, isDate, isError	
 */