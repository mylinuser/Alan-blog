## webpack相关

https://juejin.cn/post/7023242274876162084

## **Webpack 一些核心概念**

- `Entry`：入口，指示 Webpack 应该使用哪个模块，来作为构建其内部 依赖图(dependency graph) 的开始。
- `Output`：输出结果，告诉 Webpack 在哪里输出它所创建的 bundle，以及如何命名这些文件。
- `Module`：模块，在 Webpack 里一切皆模块，一个模块对应着一个文件。Webpack 会从配置的 Entry 开始递归找出所有依赖的模块。
- `Chunk`：代码块，一个 Chunk 由多个模块组合而成，用于代码合并与分割。
- `Loader`：模块代码转换器，让 webpack 能够去处理除了 JS、JSON 之外的其他类型的文件，并将它们转换为有效 模块，以供应用程序使用，以及被添加到依赖图中。
- `Plugin`：扩展插件。在 webpack 运行的生命周期中会广播出许多事件，plugin 可以监听这些事件，在合适的时机通过 webpack 提供的 api 改变输出结果。常见的有：打包优化，资源管理，注入环境变量。
- `Mode`：模式，告知 webpack 使用相应模式的内置优化
    
    ---
    
- `hash`: 每次构建的生成唯一的一个 hash，且所有的文件 hash 串是一样的
- `chunkhash`: 每个**入口文件**都是一个 chunk，每个 chunk 是由入口文件与其依赖所构成，**异步加载**的文件也被视为是一个 chunk, **chunkhash**是由每次编译模块，根据模块及其依赖模块构成 chunk 生成对应的 chunkhash, 这也就表明了**每个 chunk 的 chunkhash 值**都不一样， 也就是说每个 chunk 都是独立开来的，互不影响，每个 chunk 的更新不会影响其他 chunk 的编译构建
- `contenthash`：由文件内容决定，文件变化 contenthash 才会变化，一般配合 `mini-css-extract-plugin`插件提取出 css

```jsx
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            // 把 style-loader替换掉，不要使用 style-loader了
            loader: MiniCssExtractPlugin.loader,
            options: {
              outputPath: "css/",
            },
          },
          "css-loader",
        ],
      },
    ],
  },
  plugins: [
    // ....
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css",
    }),
  ],
};
```

## **提升 webpack 打包速度**

速度分析，可以使用 `speed-measure-webpack-plugin`提升基础环境，nodejs 版本，webpack 版本`CDN` 分包 `html-webpack-externals-plugin`, `externals`多进程、多实例构建 `thread-loader` `happypack(不再维护)`多进程并行构建打包`uglifyjs-webpack-plugin` `terser-webpack-plugin`缓存: webpack5 内置了`cache`模块 、`babel-loader` 的 `cacheDirectory` 标志、`cache-loader`, `HardSourceWebpackPlugin`

```jsx
module.exports = {
  // webpack5内置缓存
  cache: {
    type: "filesystem", // 使用文件缓存
  },
};
```

- 构建缩小范围 `include`,`exclude`
- 加快文件查找速度`resolve.alias`,`resolve.extensions`, `module.noParse`
- `DllPlugin`
- `babel` 配置的优化

## webpack 常用 loader，plugin

**loader**

- `babel-loader` 将 `es6` 转换成 `es5` , `ts-loader`、`vue-loader`
- `eslint-loader` 配置 `enforce: 'pre'` 这个 loader 最先执行
- `css-loader`、`style-loader`、`postcss-loader`、`less-loader`、`sass-loader`
- `file-loader` 把文件转换成路径引入, `url-loader`（比`file-loader`多了小于多少的能转换成 base64）
- `image-loader`
- `svg-sprite-loader` 处理 svg
- `thread-loader` 开启多进程 ，会在一个单独的 worker 池（worker pool）中运行
- `cache-loader` 缓存一些性能开销比较大的 loader 的处理结果

**plugin**

- `html-webpack-plugin` 将生成的 css，js 自动注入到 html 文件中，能对 html 文件压缩
- `copy-webpack-plugin` 拷贝某个目录
- `clean-webpack-plugin` 清空某个目录
- `webpack.HotModuleReplacementPlugin` 热重载
- `webpack.DefinePlugin` 定义全局变量
- `mini-css-extract-plugin` 提取 CSS 到独立 bundle 文件。 `extract-text-webpack-plugin`
- `optimize-css-assets-webpack-plugin` 压缩 css webpack5 推荐`css-minimizer-webpack-plugin`
- `purgecss-webpack-plugin`  会单独提取 CSS 并清除用不到的 CSS（会有问题把有用的 css 删除）
- `uglifyjs-webpack-plugin` ❌（不推荐） 压缩 js、多进程 `parallel: true`
- `terser-webpack-plugin` 压缩 js， 可开启多进程压缩、推荐使用

```jsx
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true, // 多进程压缩
      }),
    ],
  },
};
```

`Happypack` ❌（不再维护） 可开启多进程`HardSourceWebpackPlugin` 缓存`speed-measure-webpack-plugin` 打包构建速度分析、查看编译速度`webpack-bundle-analyzer` 打包体积分析`compression-webpack-plugin` gzip 压缩