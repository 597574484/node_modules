var spawn = require("child_process").spawn;
var ls_var  = spawn('ls', ['-lh', '/var']);

ls_var.stdout.on('data',function(data){console.log(data.toString())});
