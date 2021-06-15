/*
 * @Author: cunhang_wei
 * @Date: 2021-06-12 09:35:31
 * @LastEditTime: 2021-06-14 15:59:55
 * @LastEditors: cunhang_wwei
 * @Description: In User Settings Edit
 */

// 描述一个虚拟节点
// const vnode = {
//     children: undefined,
//     sel: 'div',
//     data: undefined,
//     elm: undefined,
//     text: '我是一个虚拟节点',
//     key: undefined
// }

export default function (sel, data, children, elm, text) {
    const key = data.key || undefined
    return {
        sel,
        data,
        children,
        elm,
        text,
        key
    }
}