/*
 * @Author: your name
 * @Date: 2021-06-12 10:08:54
 * @LastEditTime: 2021-06-12 14:14:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\study_diff\webpack.dev.config.js
 */
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        publicPath: 'dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'page'),
        port: 9000,
        open: true,
        hot: true
    }
}