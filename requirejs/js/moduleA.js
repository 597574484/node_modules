define(function(require,exports,module){  
	//兼容Modules/Wrappings
	var add = function(x,y){
		return x + y;
	}

	require(['moduleB','moduleC'],function(B,C){
		//require 推荐方式。
		B.init();
		C.init();
	});

	//模块返回处
	return {
		"add" : add,
		"init" : function(){console.log(this.add(1,2));}
	}
});