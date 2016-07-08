const fs = require("fs");
const path = require("path");
const mysql = require("mysql");
const dir = path.join(__dirname, "pics");

var config  = {
	host : "127.0.0.1",
	user : "root",
	password : "root",
	port : "3306",
	db : "AMM_PICTUR",
	tb : "picture"
};
var files = fs.readdirSync(dir);
files = files.filter(file=>/\.(png|jpg|jpeg)$/.test(file));
const connection = mysql.createConnection(config);
connection.connect((err,okPack)=>{
	if(err)
		console.log(err);
	else
		console.log("success");
});
connection.query(`create database ${config.db}`, err=>console.log("数据库已存在"));
connection.query(`use ${config.db};`);
connection.query(`create table ${config.tb} (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(100) NOT NULL,
	path VARCHAR(100) NOT NULL,
	PRIMARY KEY ( id ))`,err=>console.log("表已存在"));
files.map(file=>{
	connection.query(`insert into ${config.tb} (path,name)values("${path.join(dir,file)}","${file}");`,(err,data)=>{
		if(err)
			console.log(err);
	});
})
connection.query(`select id,name,path from ${config.tb};`,(err,data)=>{
	console.log(data);
});
connection.end();

//files = files.filter(file=>{return !fs.statSync(dir + "/" + file).isDirectory();});