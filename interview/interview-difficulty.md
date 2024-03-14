## 面试难题

1. 从输入url到显示页面过程**√**

2. css优化

3. js优化**√**

4. 首屏加载速度加快**√**

5. 为什么页面会短暂白屏**√**

6. tree-shaking原理，哪些不会被tree-shaking掉**√**

7. es6了解多少，问proxy原理比较多，promise方法，用promise控制执行顺序（resolve解决）

8. type和interface区别**√**

9. 自定义vue指令(Vue.directive)**√**

10. 自定义插件。vue.use()

11. 自定义hooks**√**

12. 函数组件state数据存在哪里（内存）**√**

13. webpack自定义loader和plugin

14. 有啥自己写过的优化，做过的一些优化**√**

15. 状态码说一说

100-199 用于指定客户端应相应的某些动作。

200-299 用于表示请求成功。

300-399 用于已经移动的文件并且常被包含在定位头信息中指定新的地址信息。

400-499 用于指出客户端的错误。

500-599 用于支持服务器错误。

16. 301 302区别，后端是怎么做的（location）

17. 同一个页面，只显示A模块，剩下的BCD模块按需加载，滑动到哪里再加载（异步组件）**√**

```jsx
const AsyncComponent = () => ({
// 需要加载的组件 (应该是一个 Promise 对象)
component: import(’./MyComponent.vue’),
// 异步组件加载时使用的组件
loading: LoadingComponent,
// 加载失败时使用的组件
error: ErrorComponent,
// 展示加载时组件的延时时间。默认值是 200 (毫秒)
delay: 200,
// 如果提供了超时时间且组件加载也超时了，
// 则使用加载失败时使用的组件。默认值是：Infinity
timeout: 3000
})
```

defineAsyncComponent

![difficulty](/public/interview-difficulty.png)

18. vue首次渲染过程？从头到尾，什么路由怎么执行之类的**√**

19. 跨项目传值，多页面应用

20. 发布npm包过程**√**

npm adduser

npm publish

21. 设置css权重

**权重的等级**

（1）!important,加在样式属性值后，权重值为10000

（2）内联样式，如：style=“”，权重值为1000

（3）ID选择器，如：#content，权重值为100

（4）类，伪类和属性选择器，如：content、：hover权重值为10

（5）标签选择器和伪元素选择器，如：div,p,:before权重值为1

（6）通用选择器（ * ) 、子选择器（>）、相邻选择器（+）、同胞选择器（~）、权重值为0

22. 项目的一个总结

23. 自己的不足？优缺点