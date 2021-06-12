/*
 * @Author: your name
 * @Date: 2021-06-12 10:08:54
 * @LastEditTime: 2021-06-12 10:13:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\study_diff\webpack.dev.config.js
 */
export default {
    publicStatic: '/dist',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 9000
    }
}