/*
 * @Author: cunhang_wwei
 * @Date: 2021-06-12 10:07:50
 * @LastEditTime: 2021-06-12 16:59:32
 * @LastEditors: cunhang_wwei
 * @Description: In User Settings Edit
 * @FilePath: \study_diff\src\index.js
 */

import h from './h'
import patch from './patch'

const test = h('h1', {}, '虚拟节点上树了！')

const test2 = h('ul', {}, [
    h('li', {}, '1'),
    h('li', {}, '2'),
    h('li', {}, '3')
])

const test3 = h('div', {}, h('p', {}, '苹果'))

console.log('test', test)
console.log('test2', test2)
console.log('test3', test3)

const container = document.getElementById('container')

// patch(container, test)