var events = require('events');
var eventEmitter = new events.EventEmitter();
var fn1 = null,fn2=null;

eventEmitter.on('event1',fn1 = function(arg1,arg2){
	console.log(eventEmitter.listeners('event1').length);
});
eventEmitter.on('event1',fn2 = function(arg1,arg2){
	console.log(eventEmitter.listeners('event1').length);
});
eventEmitter.emit('event1',1,2);
eventEmitter.removeListener('event1',fn1);
eventEmitter.emit('event1',1,2);

/**
 * eventEmitter :
 * 1.添加事件的方法 : .on('event', fn)/.addListener('event, fn')/.once('event', fn)
 * 2.移除事件的方法 : .removeListener('event', fn)/.removeAllListener('event')
 * 3.返回某事件的监听器 : .listeners('event');
 * 4.发送事件 : .emit('event',arg1,arg2,arg3,...);
 * 5.特殊事件error
 */

//移除下方代码的注释号.
//event.Emitter.emit('error',"hehe");