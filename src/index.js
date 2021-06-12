/*
 * @Author: your name
 * @Date: 2021-06-12 10:07:50
 * @LastEditTime: 2021-06-12 14:07:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\study_diff\index.js
 */

import h from './h'

const test = h('div', {}, '123123')

const test2 = h('ul', {}, [
    h('li', {}, '1'),
    h('li', {}, '2'),
    h('li', {}, '3')
])

const test3 = h('div', {}, h('p', {}, '苹果'))

console.log('test', test)
console.log('test2', test2)
console.log('test3', test3)
