const path = require('path'); // 这里是node.js的path模块，有很多api

module.exports = {
    entry: {
        main: ['./src/js/app.js'] // 入口文件，程序开始执行的地方
    },
    output: {
        path: path.resolve(__dirname, 'dist'), // 文件输出的目标路径，必须是绝对路径（使用node.js的path模块）
        filename: 'bundle.js',
        // filename: '[id].js', // chunkhash用于长效缓存，此处仅用id
        // publicPath: '/', // 输出解析文件的目录， 如果是url则相对于HTML页面
        // sourceMapFilename: 'dist/[file].map'
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader'
              }
            }
          ]
    }
}