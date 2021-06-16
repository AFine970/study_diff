/*
 * @Date: 2021-06-15 14:19:35
 * @LastEditors: cunhang_wwei
 * @LastEditTime: 2021-06-16 20:32:48
 * @Description: diff算法 四命中 更新子节点
 */
import isSameVnode from './isSameVnode'
import patchVnode from './patchVnode'

export default function (parentElm, oldCh, newCh) {
    console.log('oldCh', oldCh)
    console.log('newCh', newCh)
    // 旧前
    let oldStartIndex = 0
    // 旧后
    let oldEndIndex = oldCh.length - 1
    // 旧前
    let oldStartVnode = oldCh[0]
    // 旧后
    let oldEndVnode = oldCh[oldEndIndex]
    
    // 新前
    let newStartIndex = 0
    // 新后
    let newEndIndex = newCh.length - 1
    // 新前节点
    let newStartVnode = newCh[0] 
    // 新后节点
    let newEndVnode = newCh[newEndIndex]

    while (newStartIndex <= newEndIndex && oldStartIndex <= oldEndIndex) {
        console.log('❤')
        if (isSameVnode(oldStartVnode, newStartVnode)) {
            // 新前和旧前
            console.log('①新前和旧前命中')
            patchVnode(oldStartVnode, newStartVnode)
            oldStartVnode = oldCh[++oldStartIndex]
            newStartVnode = newCh[++newStartIndex]
        } else if (isSameVnode(oldEndVnode, newEndVnode)) {
            // 新后和旧后
            console.log('②新后和旧后命中')
            patchVnode(oldEndVnode, newEndVnode)
            oldEndVnode = oldCh[--oldEndIndex]
            newEndVnode = newCh[--newEndIndex]
        } else if (isSameVnode(oldStartVnode, newEndVnode)) {
            // 新后和旧前
            console.log('③新后和旧前命中')
            patchVnode(oldStartVnode, newEndVnode)

            // 移动节点，将当前的旧前节点移动到旧后节点的下一个兄弟节点之前
            parentElm.insertBefore(oldStartVnode.elm, oldEndVnode.elm.nextSibling)
            
            oldStartVnode = oldCh[++newStartIndex]
            newEndVnode = newCh[--oldEndIndex]
        } else if (isSameVnode(oldEndVnode, newStartVnode)) {
            // 旧后和新前
            console.log('④旧后和新前命中')
            patchVnode(oldEndVnode, newStartVnode)
            // 移动节点，将当前的旧后节点移动到旧前节点之前
            parentElm.insertBefore(oldEndVnode.elm, oldStartVnode.elm)
            
            oldEndVnode = oldCh[--oldEndIndex]
            newStartVnode = newCh[++newStartIndex]
        } else {
            console.log('5')
            // 上述四种情况都不命中
            // return
        }
    }
}