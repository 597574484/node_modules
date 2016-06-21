var webpack = require("webpack"); 
var path = require("path");

module.exports = {
    entry : {
        main: [ "./src/index.js"] 
    },
    output : {
        path : path.join(__dirname, "./dist"),
        filename : "bundle.js",
        publicPath : "/dist/"
    },
    module : {
        loaders : [
            {test : /\.js$/, loader : "babel-loader",exclude : /node_modules/},
            {test : /\.vue$/, loader : "vue-loader"},
            {test : /\.css/, loader : 'style!css!autoprefixer'},
            {test : /\.less/, loader : "style!css!autoprefixer!less"},
            {test : /.(jpg|png|ico)$/, loader : 'url?limit=8192'}
        ],
    },
    vue : {
        loaders : {
            js : "babel",
            css: 'style!css!autoprefixer',
            less : 'style!css!autoprefixer!less'
        }
    },
     // 转化成es5的语法
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    plugins : [],
     // 服务器配置相关，自动刷新!
    devServer: {
        historyApiFallback: true,
        hot: false,
        inline: true,
        grogress: true,
    },
    devtool: 'eval-source-map',
    resolve : {
        extension : ['','js','vue'],
        alias : {
            filter : path.join(__dirname, './src/filters'),
            components : path.join(__dirname, './src/components')
        }
    },
}
