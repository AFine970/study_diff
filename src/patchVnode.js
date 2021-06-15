/*
 * @Date: 2021-06-12 16:32:36
 * @LastEditors: cunhang_wwei
 * @LastEditTime: 2021-06-15 14:21:24
 * @Description: 新旧虚拟节点进行对比
 */
import updateChildren from './updateChildren'

export default function (oldVnode, newVnode) {
    // 内存中 真的是 同一个对象
    if (oldVnode === newVnode) return

    if (newVnode.text && !(newVnode.children && newVnode.children.length)) {
        // 新的节点有 文本
        if (newVnode.text !== oldVnode.text) {
            const newVnodeElm = createElement(newVnode)
            oldVnode.elm.innerText = newVnode.text
            oldVnode.elm = newVnodeElm
        }
    } else {
        // 新vnode 没有text，有children
        if (!(oldVnode.children && oldVnode.children.length)) {
            // 旧vnoed 没有children
            oldVnode.elm.innerText = ''
            newVnode.children.forEach(element => {
                const childElm = createElement(element)
                oldVnode.elm.appendChild(childElm)
            })
        } else {
            // 新旧vnode 都有children
            let newStartIndex = 0
            const newEndIndex = newVnode.children.length
            let oldStartIndex = 0
            const oldEndIndex = oldVnode.children.length
            while (newStartIndex <= newEndIndex && oldStartIndex <= oldEndIndex) {
                console.log('❤')
                newStartIndex++
                oldStartIndex++
            }
        }
    }
}