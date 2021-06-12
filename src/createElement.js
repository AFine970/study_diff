/*
 * @Author: cunhang_wwei
 * @Date: 2021-06-12 09:35:45
 * @LastEditTime: 2021-06-12 16:44:17
 * @LastEditors: cunhang_wwei
 * @Description: 根据传进来的虚拟节点创建真实的DOM节点
 * @FilePath: \study_diff\src\createElement.js
 */

export default function (vnode) {
    const {
        sel,
        data,
        children,
        elm,
        text
    } = vnode

    const realNode = document.createElement(sel)

    // 判断是否有文本，而且没有子节点？作为递归结束的出口
    if (text !== '' && (children === undefined || !children.length)) {
        document.innerText = text
    } else if (Array.isArray(children) && children.length) {
        for (let i =0; i < children.length; i++) {
            let ch = children[i]
            // 创建DOM节点
            let chDom = createElement(ch.sel)
            realNode.appendChild(chDom)
        }
    }

    // 追加elm属性
    vnode.elm = realNode

    return realNode
}