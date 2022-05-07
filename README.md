## 0.说明

本项目基于 `React+Typescript` 开发的记账项目。

## 1. 技术栈

项目使用到的技术栈有：

1. `React` 框架 + `Typescript` + `React-Router v6` 
2. 样式方案如下：
   -  使用 `styled-components` 作为 `Css in JS` 方案。
   - 使用 `helper.scss` 存储全局样式变量。
   - 使用`@import-normalize` 进行 `css reset` 。
   - 字体采用的是：[https://github.com/zenozeng/fonts.css/](https://github.com/zenozeng/fonts.css/)
3. 状态管理方案：
   - 封装 自定义`Hooks useTags`  实现组件状态共享。
   - 封装 `useUpdate` 解决 `useEffect` 初次渲染问题。
   - 使用 `localStorage` 进行全局状态的缓存。
4. 其余第三库使用：
   1. 使用 `svg-sprite-loader` 实现 `svg` 激活变色功能。
   2. 使用 `classname` 解决自定义组件 `classname` 继承。
   3. 使用 `dayjs` 实现对`IOS 8601`日期的格式化显示。



## 2.项目功能演示

记账项目按照功能划分为三块:

1. 标签页：管理标签。
2. 记账页：可记录支出及收入行为。
3. 统计页：金额记录的展示区域。

<img src="/Users/jiashengwang/Desktop/money.gif" alt="money" style="zoom:67%;" />