var spawn = require('child_process').spawn;

var grep_node = spawn('grep', ['node']);
console.log('Spawned child pid of node: ' + grep_node.pid);
grep_node.stdin.end();


