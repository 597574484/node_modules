var fs = require("fs");
var path = require("path");
var request = require("request");
var cheerio = require("cheerio");

var config = {
	url: "https://movie.douban.com/top250",
	saveDir: __dirname + "/temp"
};
new Promise((resolve,reject)=>{
	fs.exists(config.saveDir,(exists)=>{if(exists){resolve();return false;} reject();})
}).then(()=>{
	console.log("已存在");
}).catch((err)=>{
	fs.mkdir("temp",(err)=>{if(err) {console.log(err); return false;} console.log("已创建");} );
});
var pro = new Promise((resolve,reject)=>{
	request(config.url, (err, response, body)=>{
		if(!err && response.statusCode ==200)
			resolve(response, body);
	});
});
pro.then((res)=>{
	var $ = cheerio.load(res.body);
	var imgs = $(".item img").toArray();
	var srcs = imgs.map(img=>img.attribs.src);
	var config = config;
	return srcs;
}).then((srcs)=>{
	srcs.map((src, index)=>{
		const filename = path.basename(src);
		request.head(src,(err, res) => {
			if (err) {
				console.log(err);
				return false;
			} else {
				request(src).pipe(fs.createWriteStream(config.saveDir + "/" + filename));
				console.log(filename + ": downloaded!");
			}
		});
	});
});



/*
var http = require("http");
var req = http.request({
	hostname : "www.baidu.com",
	method: "GET"
},res=>{
	var msg = "";
	res.on('data',data=>msg+=data);
	res.on('end', ()=>console.log(msg));
	res.on('error',err=>console.log(err));
});

req.end();
 */