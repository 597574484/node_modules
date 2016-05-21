var gulp = require('gulp');
var sync = require('browser-sync');

gulp.task('sync',function(){
	sync({
		server:{
			baseDir :  "./bin"
		}
	});

	gulp.watch("./*.*").on('change',sync.reload);
})

//确保全局装有gulp，而browser-sync不用
//然后cmd运行 gulp sync.
// baseDir : 服务器根目录.
// watch: gulp方法实时监测目录。