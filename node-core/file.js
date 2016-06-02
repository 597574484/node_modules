var fs = require('fs');


// fs.stat('./io.txt',function(err,stats){console.log(stats)})
// fs.readFile('./io.txt',function(err, data){
// 	console.log(data.toString());
// });

// fs.open('./io.txt','a+',function(err,fd){
// 	if(err){
// 		console.log("there is a bug");
// 		return 0;
// 	}
// 	fs.write(fd,'datadata',function(err){

// 	});

// 	fs.close(fd,function(err,data){
// 		console.log("the stream is closed");
// 	});
// });



/**
 * fs
 * 1.打开文件 : .open(path, flags, [, mode], callback(err,fd //文件标识 )) //flag : /[rwa]+?/ mode 权限
 * 2.查看文件信息 .stat(path, cl(err, infos));
 * 3.写文件 : writeFile(filename, data [, options], callback);
 * 4.读文件 : readFile(filename, options, callback);
 * 5.删除文件 : .unlink(path,callback);
 * 6.创建文件夹 : .mkdir(path, mode, callback);
 * 7.读文件夹 : readdir(path, callback);
 * 8.删除目录 : rmdir(path,callback);
 */
//---------------------------------------------------------------------------------------
/**
 * Buffer :
 * 1.新建Buffer : new Buffer(256); 
 * 2.写Buffer buf.write(string, [, offset [, length]][, encoding]);
 * 3.读Buffer toString() / toJSON()
 * 4.合并两个Buffer .   Buffer.concat(buf1 ,buf2)//类方法
 * 5.比较两个Buffer .   buf1.compare(buf2);
 * 6.复制Buffer .  
 * 7.slice
 * 8.length
 * 
 */

//---------------------------------------------------------------------------------------


/**
 * Stream : 
 *  所有的Stream对象都是EventEmitter的实例。
 *  1.创建 :  fs.createReadStream(filename) / fs.createWriteStream('file') 
 *  2.数据 :  on('data')//data/end/error/finish
 *  (fs.createReadStream('input.txt')).pipe(fs.createWriteStream('output.txt'));  
 */

