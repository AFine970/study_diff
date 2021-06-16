/*
 * @Date: 2021-06-16 19:35:19
 * @LastEditors: cunhang_wwei
 * @LastEditTime: 2021-06-16 19:36:02
 * @Description: 是否是同一个虚拟节点
 */

export default function (oldVnode, newVnode) {
    return oldVnode.sel === newVnode.sel && oldVnode.key === newVnode.key
}