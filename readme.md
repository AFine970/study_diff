# diff算法 学习笔记

## 快速开始

- 安装依赖

```bash
npm install
```

- 启动

```bash
npm run serve
```

## 虚拟 DOM

- 含义：用 JS 对象描述 DOM 的层次结构。DOM 中的一切属性都在虚拟 DOM 中有对应的属性
- h 函数用来产生虚拟节点 VNode
- 虚拟节点包含的属性

```javaScript
{
    children: undefined // 包含的子节点
    data: {} // 属性
    elm: undefined // DOM树中的位置
    key: undefined // 节点key值
    sel: 'div' // 节点标签（select）
    text: '我是一个大人' // 文本
}
```

## snabbdom

简介：一个虚拟 DOM 工具库

## patch 函数执行图

![diff算法图解.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/639af02ee5374a918a7ca6c21bdac02d~tplv-k3u1fbpfcp-watermark.image)

## diff算法

- `key`用于服务最小化更新
- 只有是同一个虚拟节点才会进行精确化比较，选择器相同而且`key`相同才是同一个虚拟节点
- 只会进行同层比较，不会进行跨层比较

## 经典 diff 算法优化策略

简称

- 新虚拟列表的前指针 ---- 新前指针
- 新虚拟列表的后指针 ---- 新后指针
- 旧虚拟列表的前指针 ---- 旧前指针
- 旧虚拟列表的后指针 ---- 旧后指针

## 四种命中规则

1. 新前指针 VS 旧前指针
2. 新后指针 VS 旧后指针
3. 新后指针 VS 旧前指针 （此种情况命中，涉及移动节点，那么新前指针指向的节点，移动到旧后节点之后）
4. 旧后指针 VS 新前指针 （此种情况命中，涉及移动节点，那么新前指针指向的节点，移动到旧前节点之前）

如果都没有命中，就需要用循环来寻找相同的虚拟节点进行比较

## 命中规则分解图

![最优美的diff.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f49dd2b75b2a4a40b016e1551bac726d~tplv-k3u1fbpfcp-watermark.image)

## 项目结构

```text
|-- study_diff
    |-- .gitignore
    |-- package.json
    |-- readme.md
    |-- webpack.config.js
    |-- yarn.lock
    |-- page
    |   |-- index.html
    |-- src
        |-- createElement.js // 根据传进来的虚拟节点创建真实的DOM节点
        |-- h.js // 构造虚拟节点
        |-- index.js // 主入口
        |-- isSameVnode.js // 判断是否是相同的虚拟节点
        |-- patch.js // 对比两个虚拟节点进行打补丁操作
        |-- patchVnode.js // 新旧虚拟节点进行对比
        |-- updateChildren.js // 比对更新虚拟节点里的children
        |-- vnode.js // 虚拟节点类
```

## 参考资料

> <https://www.bilibili.com/video/BV1v5411H7gZ?p=5&spm_id_from=pageDriver>

好好学习不会差，一起进步！
