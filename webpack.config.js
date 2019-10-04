var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry : './src/index.js',
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'index.js'
    },
    module : {
        rules : [
            {test : /\.(js)$/, use:'babel-loader'}
        ]
    },
    mode:'development',
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'src/index.html'
        })
    ]

}