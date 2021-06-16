/*
 * @Author: cunhang_wwei
 * @Date: 2021-06-12 10:07:50
 * @LastEditTime: 2021-06-16 20:30:21
 * @LastEditors: cunhang_wwei
 * @Description: In User Settings Edit
 */

import h from './h'
import patch from './patch'

const test = h('h1', {}, '虚拟节点上树了！')

const test2 = h('ul', {}, [
    h('li', {key: '1'}, '1'),
    h('li', {key: '2'}, '2'),
    h('li', {key: '3'}, '3'),
    h('li', {key: '4'}, '4')
])

const test3 = h('div', {}, '剑圣')

const test4 = h('div', {}, [
    h('ul', {}, [
        h('li', {}, 'A'),
        h('li', {}, 'B'),
        h('li', {}, 'C')
    ])
])

const test5 = h('ul', {}, [
    h('li', {key: '4'}, '444444444'),
    h('li', {key: '3'}, '3'),
    h('li', {key: '2'}, '222222'),
    h('li', {key: '1'}, '1')
])

// console.log('test', test)
// console.log('test2', test2)
// console.log('test3', test3)

const container = document.getElementById('container')
const btn = document.getElementById('btn')

// 虚拟节点第一次上树
patch(container, test2)

btn.onclick = function () {
    // 虚拟节点第二次上树
    patch(test2, test5)
}