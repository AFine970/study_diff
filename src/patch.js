/*
 * @Author: cunhang_wwei
 * @Date: 2021-06-12 09:36:00
 * @LastEditTime: 2021-06-16 19:36:58
 * @LastEditors: cunhang_wwei
 * @Description: 对比新旧节点进行打补丁操作
 */
import vnode from './vnode'
import createElement from './createElement'
import patchVnode from './patchVnode'
import isSameVnode from './isSameVnode'

export default function (oldVnode, newVnode) {
    // ①判断第一次的节点是否是虚拟节点
    if (!oldVnode.sel) {
        const sel = oldVnode.tagName.toLowerCase()
        oldVnode = vnode(sel, {}, [], oldVnode, undefined)
    }

    // ②判断是否是同一个虚拟节点
    if (isSameVnode(oldVnode, newVnode)) {
        console.log('同一个虚拟节点')
        patchVnode(oldVnode, newVnode)
    } else {
        // 直接进行暴力删除插入
        const newVnodeElm = createElement(newVnode)
        // 插入到老节点之前
        if (oldVnode.elm.parentNode && newVnodeElm) {
            oldVnode.elm.parentNode.insertBefore(newVnodeElm, oldVnode.elm)
        }

        //删掉老节点
        oldVnode.elm.remove()
    }
}