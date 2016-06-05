/**
 * co :
 * @param {Function} fn
 * @return {Promise} 
 *
 * module.exports = co['default'] = co.co = co;
 * -------------------------------------------------------------------------------------------------
 * co.wrap :
 * --@param :  {Function}fn
 * --@return : {Function}fn
 * var createPromise = co.wrap(fn); createPromise(args);//全局环境下调用fn，以args为参数。
 * ------------------------------------------------------------------------------------------------- 
 * co : 
 * --@param {Function} fn
 * --@return {Promise}
 *
 *	return Promise(function(resolve, reject){
 *		//1.若fn为function则改变其上下文为co，co的其余参数不变传入fn。
 *		//2.如果  (fn的返回值不存在)  || (fn的返回值没有next函数) 的话，return resolve(fn)，Promise结束。
 *		//3.如果2不成立，即  (fn有返回值且它的next是函数)  ，则执行onFulfilled().
 *  	//4.不出错则执行next(fn'(res)) // fn' = fn.next(ctx, args); 即 fn' 为 GeneratorFunction执行返回值，为 'object' 有next函数。
 *  })
 * -------------------------------------------------------------------------------------------------
 *  --co 内嵌函数 : onFulfilled(res)、onRejected(err)、next(ret)
 *
 *  onFulfilled(res) 与onReject(err) 结构类似。
 *  
 *  function onFulfilled / onRejected(res / err){
 *  	var ret;
 *  	try{
 *  		ret = gen.next(res); / gen.throw(err);
 *  	}catch(err){
 *  		return reject(err);
 *  	}
 *  	next(ret);
 *  }
 * 
 *	
 *	next(ret){//ret somewhat {value : 'xxx', done : false / true}
 *		
 *		//1.如果ret的状态是done，直接 return resolve(ret.value); Promise结束.
 *		//2.没完成的话, 将value的值toPromise();
 *		//3.如果value存在且isPromise(value) return value.then(onFulfilled, onRejected); 
 *		//4.否则onRejected(new TypeError(...));
 *	}
 *-------------------------------------------------------------------------------------------------
 *
 *	toPromise(obj) / isPromise(obj)
 *
 * --toPromise(obj){ //此 obj === ret.value   value === {value : 'value', done : true / false}
 * 		//1. !obj === false 则 return obj.
 * 		//2. isPromise(obj) 则 return obj.
 * 		
 * 		//3. isGeneratorFunction(obj) or isGenerator(obj) 则 return co.call(this, obj);
 * 		//4. 如果obj 是 function 则 return thunkToPromise.call(this, obj);
 * 		//5. 如果obj 是 数组 则 return arrayToPromise.call(this, obj);
 * 		//6. 如果obj 是 对象 则 return objectToPromise.call(this, obj);
 * 		//7. 否则 return obj;
 *
 * --isPromise(obj){
 *		return obj.then  == function; 
 *	}
 *-------------------------------------------------------------------------------------------------
 *  isGeneratorFunction(obj) / isGenerator(obj) / thunkToPromise / arrayToPromise / objectToPromise
 *
 * --isGeneratorFunction(obj) : (obj的构造存在且 constructor.name/displayName === 'GeneratorFunction') || isGenerator(constructor.prototype); 
 * --isGenerator(obj) :  return obj.next 与 obj.throw 同时是函数 ? true : false;
 * --isObject(obj) : return obj.constructor == Object;
 * 
 * --thunkToPromise()  : return new Promise(function(resolve, reject)){fn.call(ctx, function(err,res))}
 * --arrayToPromise()  : Promise.all(obj.map(toPromise,this));
 * --objectToPromise() : 尝试对object的所有项进行toPromise()，if false 直接加入results[],否则将toPromise
 *   后的项的 then(function(res){results[key] = res;}); 而then返回的Promise加入promises中， 
 *   最后objectToPromise 返回 Promise.all(promises).then(function(){return results;}) 
 *   
 */