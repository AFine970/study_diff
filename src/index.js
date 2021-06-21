/*
 * @Author: cunhang_wwei
 * @Date: 2021-06-12 10:07:50
 * @LastEditTime: 2021-06-21 19:10:17
 * @LastEditors: cunhang_wwei
 * @Description: 测试diff算法
 */

import h from './h'
import patch from './patch'

const base = h('ul', {}, [
    h('li', { key: '1' }, '1'),
    h('li', { key: '2' }, '2'),
    h('li', { key: '3' }, '3'),
    h('li', { key: '4' }, '4')
])

// 测试不同虚拟节点
const test1 = h('h1', {}, '虚拟节点上树了！')

// 测试嵌套节点
const test2 = h('div', {}, [
    h('ul', {}, [
        h('li', {}, 'A'),
        h('li', {}, 'B'),
        h('li', {}, 'C')
    ])
])

// 测试 同一个虚拟节点，但子节点逆序的情况
const test3 = h('ul', {}, [
    h('li', { key: '4' }, '444444444'),
    h('li', { key: '3' }, '3'),
    h('li', { key: '2' }, '222222'),
    h('li', { key: '1' }, '1')
])

// 测试 while循环结束 增加节点的情况
const test4 = h('ul', {}, [
    h('li', { key: '1' }, '1'),
    h('li', { key: '2' }, '2'),
    h('li', { key: '3' }, '3'),
    h('li', { key: '4' }, '4'),
    h('li', { key: '5' }, '5'),
    h('li', { key: '6' }, '6')
])

// 测试 while循环结束 删除节点的情况
const test5 = h('ul', {}, [
    h('li', { key: '1' }, '1'),
    h('li', { key: '2' }, '2'),
])

// 测试第一次 while循环, 4种命中类型都不命中的情况
const test6 = h('ul', {}, [
    h('li', { key: '3' }, '3'),
    h('li', { key: '1' }, '1'),
    h('li', { key: '4' }, '4'),
    h('li', { key: '2' }, '2')
])

// 测试 while循环, 4种命中类型都不命中，而且又新增加和删除子节点的情况
const test7 = h('ul', {}, [
    h('li', { key: '3' }, '3'),
    h('li', { key: '1' }, '1'),
    h('li', { key: '4' }, '4'),
    h('li', { key: 'A' }, 'B'),
    h('li', { key: 'qqq2' }, 'qqq2'),
    h('li', { key: 'hahahh2' }, 'hahahh2'),
])


const container = document.getElementById('container')
const btn = document.getElementById('btn')

// 虚拟节点第一次上树
patch(container, base)

btn.onclick = function () {
    // 虚拟节点第二次上树
    patch(base, test1)
    // patch(base, test2)
    // patch(base, test3)
    // patch(base, test4)
    // patch(base, test5)
    // patch(base, test6)
    // patch(base, test7)
}