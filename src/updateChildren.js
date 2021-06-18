/*
 * @Date: 2021-06-15 14:19:35
 * @LastEditors: cunhang_wwei
 * @LastEditTime: 2021-06-18 18:48:40
 * @Description: diff算法 四命中 更新子节点
 */
import createElement from './createElement'
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

    // 老虚拟节点的map
    let oldKeyMap = {}

    while (newStartIndex <= newEndIndex && oldStartIndex <= oldEndIndex) {
        console.log('❤')
        // 首先跳过null和undefined的节点
        if (oldStartVnode === null || oldStartVnode === undefined) {
            oldStartVnode = oldCh[++oldStartIndex]
        } else if (oldEndVnode === null || oldEndVnode === undefined) {
            oldEndVnode = oldCh[--oldEndIndex]
        } else if (newStartVnode === null || newStartVnode === undefined) {
            newStartVnode = newCh[++newStartIndex]
        } else if (newEndVnode === null || newEndVnode === undefined) {
            newEndVnode = newCh[--newEndIndex]
        } else if (isSameVnode(oldStartVnode, newStartVnode)) {
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

            oldStartVnode = oldCh[++oldStartIndex]
            newEndVnode = newCh[--newEndIndex]
        } else if (isSameVnode(oldEndVnode, newStartVnode)) {
            // 旧后和新前
            console.log('④旧后和新前命中')
            patchVnode(oldEndVnode, newStartVnode)
            // 移动节点，将当前的旧后节点移动到旧前节点之前
            parentElm.insertBefore(oldEndVnode.elm, oldStartVnode.elm)

            oldEndVnode = oldCh[--oldEndIndex]
            newStartVnode = newCh[++newStartIndex]
        } else {
            // 上述四种情况都不命中,需要用循环来寻找，移动到 oldStartVnode 前面

            // 制作一个旧列表的key-index映射表
            if (!Object.keys(oldKeyMap).length) {
                for (let index = oldStartIndex; index <= oldEndIndex; index++) {
                    if (oldCh[index]) {
                        const { key } = oldCh[index]
                        if (key !== undefined) {
                            oldKeyMap[key] = index
                        }
                    }
                }
                console.log('oldKeyMap', oldKeyMap)
            }

            const indexInOld = oldKeyMap[newStartVnode.key]
            if (indexInOld === undefined) {
                // 是 undefined， 则是全新的项，需要将新节点插入
                parentElm.insertBefore(createElement(newStartVnode), oldStartVnode.elm)
            } else {
                // 不是 undefined，则需要移动
                let elmToMove = oldCh[indexInOld]
                patchVnode(elmToMove, newStartVnode)

                oldCh[indexInOld] = undefined

                parentElm.insertBefore(elmToMove.elm, oldStartVnode.elm)
            }

            // 移动新列表的头指针
            newStartVnode = newCh[++newStartIndex]
        }
    }

    // 循环结束
    if (oldStartIndex < oldEndIndex) {
        console.log('旧前小于旧后，则说明 需要删除节点')
        // 旧前小于旧后，则说明 需要删除节点
        for (let i = oldStartIndex; i <= oldEndIndex; i++) {
            if (oldCh[i]) {
                parentElm.removeChild(oldCh[i].elm)
            }
        }
    } else if (newStartIndex < newEndIndex) {
        console.log('新前小于新后，则说明 需要新增节点')
        // 新前小于新后，则说明 需要新增节点

        // 遍历新的newCh,添加到oldCh没有处理的节点之前
        for (let i = newStartIndex; i <= newEndIndex; i++) {
            // 将新的虚拟节点变为DOM，并加到最后
            const item = createElement(newCh[i])
            parentElm.insertBefore(item, oldStartVnode.elm)
        }
    }
}