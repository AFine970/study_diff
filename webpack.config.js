/*
 * @Author: your name
 * @Date: 2021-06-12 10:08:54
 * @LastEditTime: 2021-06-12 17:02:45
 * @LastEditors: cunhang_wwei
 * @Description: In User Settings Edit
 * @FilePath: \study_diff\webpack.config.js
 */
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        publicPath: 'dist',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'page'),
        port: 9000,
        open: true,
        hot: true
    }
}