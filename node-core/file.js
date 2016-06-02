var fs = require('fs');


fs.stat('./io.txt',function(err,stats){console.log(stats)})
fs.readFile('./io.txt',function(err, data){
	console.log(data.toString());
});

/**
 * fs
 * 1.打开文件 : .open(path, flags, [, mode], callback) //flag : /[rwa]+?/ mode 权限
 * 2.查看文件信息 .stat(path, cl(err, infos));
 * 		
 */