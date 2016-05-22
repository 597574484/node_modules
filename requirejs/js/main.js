require.config({
	baseUrl : "./js",
	paths : {
		"moduleA" : "moduleA",
		"moduleB" : "moduleB" 
	}
});

require(['moduleA','moduleB'],function(A,B){
	//前提是有init函数
	A.init();
});

//require(function(require, exports,module){
//	var A = require('moduleA');
//	A.init();
//})