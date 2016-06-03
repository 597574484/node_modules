var http = require('http');
var url = require('url');
var path = require('path');
var querystring = require('querystring');
var dns  = require('dns');
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


/**
 * HTTP : 1.创建服务器 createServer(callback); 自动把request事件加到事件队列中	
 * 		  2.创建客户端 request(options,callback)  options配置访问路径，callback处理response//createClient已弃用
 *
 * 		  
 * request事件的回调中 function(req, res) : request是http.IncomingMessage的实例，response 是http.ServerResponse的实例。
 * 
 * var clientRequest = http.request(options, function(response))  ;
 * 返回http.ClientRequest实例， 
 *
 * ImcomingMessage : .headers / .url / .method / .statusCode / .client
 *
 * 
 * ServerResponse  : 
 * 1 -- .writeHead(statusCode, {header});  end之前调用
 * 2 -- .write()   
 * 3 -- .end()  
 *  //以上顺序不能乱
 */



/**
 * url模块 : url.parse(url); var href = url.parse('http://user:pass@host.com:8080/p/a/t/h.html?query=string#hash')
 * 1 .href : 原始url : 
 * 2 .protocol : 协议 : http:
 * 3 .host : 主机部分包括端口不包括验证信息 : host.com:8080
 * 4 .auth : 验证信息 : user:pass
 * 5 .hostname : 主机地址 : host.com
 * 6 .port : 端口号 :8080
 * 7 .pathname : 查询路径名 : /p/a/t/h.html
 * 8 .search : ?query=string
 * 9 .hash :  锚记部分 以#开头 : hash
 *
 *****************
 *除parse外还有var string = url.format(urlObj);  接收url对象返回字符串
 */
/**
 * path :
 * 1. path.join('','') : //将各个参数组成一个路径
 * 2. path.normalize()  //转化为路径字符串
 */


/**
 * querystring : 
 * 1.stringify({}, seq ='&', eq = '=', munge =true//字元解析) //将对象序列化成字符串，每个(key,value)用seq分割开，用eq连接key,value
 * 2.parse("",seq = '&',eq = '=')//反序列化,将字符串反方向解析成对象
 * 3.escape / unescape
 */


/**
 * dns
 * 1 .lookup(domain, function(err,ip){}) //根据域名domain将真实Ip解析到回调中的ip中
 * 2 .resolve(domain, type = 'A', callback);//解析域名按照域名rrtype 解析到不同的数组中
 * 3 .reverse(ip,callback);  //反向解析ip生成对应域名
 */

//http://udn.yyuap.com/doc/nodejs/httpserverresponse/index.html