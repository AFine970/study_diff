/*
 * @Author: cunhang_wwei
 * @Date: 2021-06-12 10:07:50
 * @LastEditTime: 2021-06-18 18:47:51
 * @LastEditors: cunhang_wwei
 * @Description: In User Settings Edit
 */

import h from './h'
import patch from './patch'

const test = h('h1', {}, '虚拟节点上树了！')

const base = h('ul', {}, [
    h('li', { key: '1' }, '1'),
    h('li', { key: '2' }, '2'),
    h('li', { key: '3' }, '3'),
    h('li', { key: '4' }, '4')
])

const test3 = h('div', {}, '剑圣')

const test4 = h('div', {}, [
    h('ul', {}, [
        h('li', {}, 'A'),
        h('li', {}, 'B'),
        h('li', {}, 'C')
    ])
])

// 测试 是同一个虚拟节点的情况
const test5 = h('ul', {}, [
    h('li', { key: '4' }, '444444444'),
    h('li', { key: '3' }, '3'),
    h('li', { key: '2' }, '222222'),
    h('li', { key: '1' }, '1')
])

// 测试 while循环结束 增加节点的情况
const test6 = h('ul', {}, [
    h('li', { key: '1' }, '1'),
    h('li', { key: '2' }, '2'),
    h('li', { key: '3' }, '3'),
    h('li', { key: '4' }, '4'),
    h('li', { key: '5' }, '5'),
    h('li', { key: '6' }, '6')
])

// 测试 while循环结束 删除节点的情况
const test7 = h('ul', {}, [
    h('li', { key: '1' }, '1'),
    h('li', { key: '2' }, '2'),
])

// 测试 while循环, 4种命中类型都不命中的情况
const test8 = h('ul', {}, [
    h('li', { key: '3' }, '3'),
    h('li', { key: '1' }, '1'),
    h('li', { key: '4' }, '4'),
    h('li', { key: '2' }, '2')
])

// 测试 while循环, 4种命中类型都不命中的情况
const test9 = h('ul', {}, [
    h('li', { key: '3' }, '3'),
    h('li', { key: '1' }, '1'),
    h('li', { key: '4' }, '4'),
    h('li', { key: 'A' }, 'B'),
    h('li', { key: 'qqq2' }, 'qqq2'),
    h('li', { key: 'hahahh2' }, 'hahahh2'),
])


// 测试 while循环结束 增加节点的情况
const test10 = h('ul', {}, [
    h('li', { key: '5' }, '5'),
    h('li', { key: '6' }, '6'),
    h('li', { key: '1' }, '1'),
    h('li', { key: '2' }, '2'),
    h('li', { key: '3' }, '3'),
    h('li', { key: '4' }, '4'),
])


const container = document.getElementById('container')
const btn = document.getElementById('btn')

// 虚拟节点第一次上树
patch(container, base)

btn.onclick = function () {
    // 虚拟节点第二次上树
    patch(base, test9)
}