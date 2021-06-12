/*
 * @Author: your name
 * @Date: 2021-06-12 09:35:52
 * @LastEditTime: 2021-06-12 14:07:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\study_diff\h.js
 */
import vnode from './vnode'

// 三种测试用例
// h('div', {}, 'hahaha')

// h('ul', {}, [
//     h('li', {}, '1'),
//     h('li', {}, '2'),
//     h('li', {}, '3')
// ])

// h('div', {}, h('p', {}, '苹果'))


export default function(sel, data, c) {
    if (arguments.length !== 3) {
        throw new Error('参数不对')
    } 
    
    if(typeof c === 'string' || typeof c === 'number') {
        return vnode(sel, data, undefined, c, undefined)
    } else if (Array.isArray(c)) {
        let children = []
        for (let i = 0;  i < c.length; i++) {
            // h() 返回的是一个对象，这里需要判断是否是合法的子节点
            if (typeof c[i] === 'object' && 'sel' in c[i]) {
                children.push(c[i])
            } else {
                throw new Error('子节点不正确')
            }
        }
        return vnode(sel, data, children, undefined, undefined)
    } else if (typeof c === 'object' && 'sel' in c) {
        let children = [c]
        return vnode(sel, data, children, undefined, undefined)
    } else {
        throw new Error('传入的第三个参数不对')
    }
}