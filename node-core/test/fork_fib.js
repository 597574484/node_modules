var cp = require('child_process');
var child = cp.fork('./fork_child_fib.js');

child.on('message', function(m) {
	console.log('fib seq is =', m.result,'\n');
});

var input = parseInt('10');
child.send({input:1});

for(var i = 1; i < input; i++){
    child.send({input: i});
}
