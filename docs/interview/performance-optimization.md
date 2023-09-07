https://juejin.cn/post/6892994632968306702

## 请求相关

1. 减少 http 

2. 请求使用 https

3. 设置缓存，强缓存，协商缓存

## CSS相关

4. 将 CSS 放在文件头部，JavaScript 文件放在底部

5. 减少重排重绘

6. 降低 css 选择器的复杂性

7. **避免使用table布局**，tables中某个元素一旦触发reflow就会导致table里所有的其它元素reflow。可以设置table-layout:auto;或者是table-layout:fixed这样可以让table一行一行的渲染，这种做法也是为了限制reflow的影响范围

8. **避免不必要的复杂的 CSS 选择器**，尤其是后代选择器（descendant selectors），因为为了匹配选择器将耗费更多的 CPU

9. **css里不要有表达式expression** (例如：calc())

10. **避免设置多层内联样式**

## 资源相关

11. 静态资源使用 CDN

12. 使用字体图标 iconfont 代替图片图标

13. 压缩文件，css(`MiniCssExtractPlugin`),js(`UglifyPlugin`),html(`html-webpack-plugin`)文件压缩，清除无用的代码，`tree-shaking`（需要 es6 的 import 才支持），gzip 压缩(`compression-webpack-plugin`)

14. splitChunks 分包配置，optimization.splitChunks 是基于 [SplitChunksPlugin](https://link.juejin.cn/?target=https%3A%2F%2Fwebpack.docschina.org%2Fplugins%2Fsplit-chunks-plugin%2F) 插件实现的

15. 图片优化、图片压缩

16. webpack 按需加载代码，`hash`，`contenthash`

