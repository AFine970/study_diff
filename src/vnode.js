/*
 * @Author: cunhang_wwei
 * @Date: 2021-06-12 09:35:31
 * @LastEditTime: 2021-06-12 16:44:47
 * @LastEditors: cunhang_wwei
 * @Description: In User Settings Edit
 * @FilePath: \study_diff\src\vnode.js
 */

// 描述一个虚拟节点
// const vnode = {
//     children: undefined,
//     sel: 'div',
//     data: undefined,
//     elm: undefined,
//     key: undefined,
//     text: '我是一个虚拟节点'
// }

export default function (sel, data, children, elm, text) {
    const key = data.key
    return {
        sel,
        data,
        children,
        text,
        elm,
        key
    }
}