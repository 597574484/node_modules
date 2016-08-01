var cp = require('child_process');
var n = cp.fork('./fork_child_send_message');
n.on('message', function(m){
    console.log('parent got message:', m);
});

n.send({main: 'sub'});
console.info();
