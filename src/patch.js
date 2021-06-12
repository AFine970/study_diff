/*
 * @Author: cunhang_wwei
 * @Date: 2021-06-12 09:36:00
 * @LastEditTime: 2021-06-12 16:58:57
 * @LastEditors: cunhang_wwei
 * @Description: In User Settings Edit
 * @FilePath: \study_diff\src\patch.js
 */
import vnode from './vnode'
import createElement from './createElement'

export default function (oldVnode, newVnode) {
    // ①判断第一次的节点是否是虚拟节点
    if (!oldVnode.sel) {
        const sel = oldVnode.tagName.toLowerCase()
        oldVnode = vnode(sel, {}, [], oldVnode, undefined)
    }

    // ②判断是否是同一个虚拟节点
    if (oldVnode.sel === newVnode.sel && oldVnode.key === newVnode.key) {
        console.log('是同一个虚拟节点')
    } else {
        // 直接进行暴力删除插入
        let newVnodeElm = createElement(newVnode)
        // 插入到老节点之前
        if (oldVnode.elm.parentNode && newVnodeElm) {
            oldVnode.elm.parentNode.insertBefore(newVnodeElm, oldVnode.elm)
        }

        //删掉老节点
        oldVnode.elm.remove()
    }
}