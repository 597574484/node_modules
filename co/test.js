var co = require('co');

/**
 * [*fn description]
 * @yield {[type]} [description]
 *
 * yiledable : 可转换成yield的变量
 * --Promises
 * --thunks
 * --array
 * --objects
 * --generators
 * --generator function
 */
var fn = function*(){
	var a = Promise.resolve(1);
	var b = Promise.resolve(2);
	var c = Promise.resolve(3);
	var d = yield [a, b, c];
	console.log(d);

}
var fn2 = function*(){
	try{
		yield Promise.reject('new error');
	}catch(e){
		console.log(e);
	}
}
co(fn);
co(fn2);


//output  ====>    'new error'  [1,2,3];