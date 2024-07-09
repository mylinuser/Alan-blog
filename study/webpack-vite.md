## webpack和vite

### Vite的优点

vite是使用rollup进行打包的

1、慢启动的优化，不进行打包，直接编译

2、每个文件通过 http 头缓存在浏览器端，当编辑完一个文件，只需让此文件缓存失效。当基于 ES module 进行热更新时，仅需更新失效的模块，这使得更新时间不随包的增大而增大。

3、组件热更新，修改完立马重新编译

https://www.cnblogs.com/fayin/p/14234872.html

### Vue3的改变

1、setup，把Vue2的一些optionAPI改成了compositionAPI

2、对代码进行分析，给动态的内容添加标注，每次更新只更新标注内容，按需加载（进行了tree shaking），加快了速度(用ESM进行代码静态分析，ESM需要一开始就引用，因为需要知道哪些代码是需要的)

3、从Object.defineProperty改成了用Proxy

### ****计算首屏加载时间和首屏加载速度慢怎么解决？****

****首屏加载时间 = (performance.timing.domComplete - performance.timing.navigationStart) / 1000****

1、图片懒加载

2、路由懒加载

3、采用缓存：后端返回资源用http缓存、前端用localStorage、cdn静态资源缓存 react react-dom react-router-dom axios

4、UI组件按需导入，如elementUI  import { Button } from ‘element-ui’

5、用webpack合并相同的chunks，避免重复加载组件，修改CommonsChunksPlugin的配置minChunks：2，splitChunks一样可以分割合并代码，还可以通过魔法注释的方式，给代码加注释。

https://blog.csdn.net/github_36487770/article/details/102485582

```jsx
splitChunks: {
      minChunks: 3,
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
```

```jsx
// 魔法注释
import(
  /* webpackInclude: /\.json$/ */
  /* webpackExclude: /\.noimport\.json$/ */
  /* webpackChunkName: "my-chunk-name" */
  /* webpackMode: "lazy" */
  /* webpackPrefetch: true */
  /* webpackPreload: true */
  `./locale/${language}`
);
```

webpackPrefetch和webpackPreload: prefetch是未来导航可能需要的资源，preload是当前导航也许需要的资源。当然，这需要浏览器支持，其实就是在浏览器的标签里加入了rel="prefetch"或rel=“preload”。

- preload的资源是和父模块平行加载的，而prefetch的资源则在父模块加载完毕后开始加载。*
- preload的资源优先级中等，会立即下载。prefetch的资源会等到浏览器空闲时再下载。
- preload的资源是父模块立即需要的，prefetch的资源则是未来任意时间需要用到的。
- 下载和需求优先级上，preload > prefetch。

6、图片压缩，如雪碧图，就是多张小图片拼成一张大图片

7、开启webpack的GZip压缩，webpack压缩，安装compression-webpack-plugin插件，webpack进行配置

### tips - 踩坑小提示

**webpackChunkName 魔法注释为什么会失效？**
检查你的**.babelrc**和**webpack.config.js**，有没有移除注释的配置。魔法注释，当然注释得存在才能生效。所以.babelrc里不能有**comments: false**，webpack的uglifyjs等插件中也不能设置**comments: false**和**extractComments**。

**@babel/plugin-syntax-dynamic-import为什么失效？**
你可能同时使用了**@babel/plugin-syntax-dynamic-import** 和 **dynamic-import-node。**

**@babel/plugin-syntax-dynamic-import** 和 **dynamic-import-node** 在一定程度上是彼此**冲突**的。**后者**主要是给**Node**使用的，把**import**语法转译为一个被延迟的**require()**。二者的区别已经被讨论过。简单来说，**dynamic-import-node**，包括它的babel-7版本，都是社区贡献的插件。而**@babel/plugin-syntax-dynamic-import**是**babel官方出品**的(看前缀那个@就知道啦)，只是为了让babel能够解析动态的import()，需要配合别的打包工具如webpack，rollup或者原生实现一起使用。

### 避免过度优化！结局

经过打包和压缩（uglify/terser）之后，动态引入部分的代码大小为40.2KB，app主体代码为896 KiB。如果说对于移动端，40KB的代码还值得分离的话，那么再经过gzip压缩后，app主体代码为242KB，分离出的代码大小只有11KB左右，比起多发一个网络请求，倒不如索性打包到一起了。

于是乎，虽然试验了一下code-splitting，但是一番衡量后，最后还是回到了原点。不过这个过程还是蛮有意思的（勉强挽尊吧，哎）。

注意，**gzip压缩并不是在webpack打包这一步做的**。实际上，webpack虽然提供了这个选项，比如利用**compression-webpack-plugin**，但多数情况下都不会选择使用。这是因为很多流行的静态服务器主机如Surge/Netlify等都已经做了自动gzip静态文件的事情。本项目中，服务端采用了**express**，利用了[**compress**](https://github.com/expressjs/compression)来进行gzip压缩，减小response body的大小。所以webpack直接打包出来的文件会比实际上线后，浏览器network中显示的文件size要大的多。

### 提升webpack构建资源的速度

**speed-measure-webpack-plugin**可以评估每个loader/plugin的执行耗时

**1、用swc loader替换babel，因为swc是用rust编写的，所以快**

```jsx
module: {
	rules: [
		{
			test: /\m?js$/,
			exclude: /(node_modules)/,
			use: {
				loader: "swc-loader",
			}
		}
	]
}
```

**2、持久化缓存Cache**

```jsx
// webpack5可以直接配置
{
	cache {
		type: "fileSystem";
	}
}
```

webpack4中，可以用cache-loader仅仅对loader进行缓存，但是不推荐，已经不维护了，开发者不推荐。

**3、开启多进程thread-loader**

thread-loader是官方推荐的，开启多进程的loader，babel解析AST时开启多线程处理，提升编译的性能。

```jsx
module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: "thread-loader",
						option: {
							workers: 8
						}
					}
					"babel-loader"
				]
			}
		]
	}
}
```

### 启用GZip

### vue.config.js

安装`npm i compression-webpack-plugin@5.0.1`
如果安装的时候报`RROR TypeError:Cannot read property ‘tapPromise‘ of undefined`可能是`compression-webpack-plugin`版本问题（采用5.0.1版本）

```jsx
// webpack启用Gzip压缩
const CompressionPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css'];
const isPRD = process.env.NODE_ENV === 'production';
module.exports = {
  configureWebpack: {
      plugins: isPRD ? [
        // 使用Gzip压缩文件 - https://segmentfault.com/a/1190000012571492
        // 报错："TypeError: Cannot read property 'tapPromise' of undefined"是compression-webpack-plugin版本问题5.0.1
        new CompressionPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8
        })
      ] : []
    },
}
```

**服务端**

这里使用的是node，所以以node配置为例

安装compression 

**npm i compression**

```

// 服务端开启Gzip支持
var compression = require('compression');
//尽量在其他中间件前使用compression
app.use(compression());
```

**nginx配置**

```jsx
http {
    # nginx开启Gzip：若没有找到.gz，会动态压缩，因此建议前端打包成.gz文件
    # 是否启用Gzip（on为启用，off为关闭）
    gzip  on;
    # 设置允许压缩的页面最小字节数，页面字节数从header头中的Content-Length中进行获取。默认值是0，不管页面多大都压缩。建议设置成大于1k的字节数，小于1k可能会越压越大。
    gzip_min_length 1k;
    # 获取多少内存用于缓存压缩结果，‘4 16k’表示以16k*4为单位获得
    gzip_buffers 4 16k;
    # Gzip压缩比（1~9），越小压缩效果越差，但是越大处理越慢，所以一般取中间值;
    gzip_comp_level 5;
    # 对特定的MIME类型生效,其中'text/html'被系统强制启用（少啥类型就添加啥）
    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;
    # 识别http协议的版本,早起浏览器可能不支持Gzip自解压,用户会看到乱码
    gzip_http_version 1.1;
    # 启用应答头"Vary: Accept-Encoding"
    gzip_vary on;
    # ie6以下禁用Gzip
    gzip_disable "MSIE [1-6]\.";
}
```

### ****webpack优化之去除冗余代码****

本文主要介绍webpack 打包时：去除`console.log`、`注释`、并使用`多进程`并发运行以提高构建速度。

**vue.config.js配置**

```jsx
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  configureWebpack: {
    optimization: {
      // production环境生效 - 官方文档https://webpack.docschina.org/plugins/terser-webpack-plugin/
      minimizer: [
        new TerserPlugin({
          // 使用多进程并发运行以提高构建速度（webpack是单线程，开启多线程压缩速度更快）
          parallel: 4,
          // 是否将注释剥离到单独的文件中（默认为true）: 去除js打包后的LICENSE.txt文件(里面是注释)
          extractComments: false,
          terserOptions: {
            // 去除打包的console.log
            compress: {
              warnings: false,
              drop_console: true,
              drop_debugger: true,
              pure_funcs: ['console.log']
            },
            // 去除注释
            output: {
              comments: false
            }
          }
        })
      ]
    }
  }
}
```

### ****webpack优化之第三方库使用 CDN 加载(vue)****

https://www.jianshu.com/p/ae78c2d5d4f0

本文主要介绍对第三方库（如echarts、element-ui等）的打包优化。

采用cdn加载需要联网。

**速度分析**

使用`speed-measure-webpack-plugin`插件可以让我们知道各个模块的耗时情况和打包总耗时。

****安装****

```jsx
npm i -D speed-measure-webpack-plugin
```

****vue.config.js配置****

```jsx
// 导入速度分析插件
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
// 实例化插件
const smp = new SpeedMeasurePlugin();
module.exports = {
    configureWebpack: smp.wrap({
        plugins: [
            // 你使用到的其他插件
        ]
    })
}
```

**项目启动时，也可以看到启动耗时**

![vite1](/public/webpack-vite1.png)

****体积分析****

webpack打包体积分析这里没有用额外的插件，就使用了webpack自带的vue=cli-service build。

![vite2](/public/webpack-vite2.png)

****package.json配置****

在 package.json中添加一条命令：

```jsx
"//": "在/dist/report.html中查看webpack打包报告",
 "report": "vue-cli-service build --report",
```

****结果****

执行`npm run report`，生成的体积报告在`/dist/report.html`中

![vite3](/public/webpack-vite3.png)

由此可见，第三方库占比最大，因此采用`CDN加载`。

### ****第三方库使用 CDN 加载****

为了方便以后管理，将CDN相关的所有配置写入cdn.config.js(与vue.config.js同级)

****cdn.config.js配置****

```jsx
module.exports = {
  // 是否使用cdn
  useCDN: true,
  // key是'包名', value是静态资源引入后全局的名称 import Vue from 'vue'
  externals: {
    'vue': 'Vue',
    'vuex': 'Vuex',
    'vue-router': 'VueRouter',
    'axios': 'axios',
    'echarts': 'echarts',
    // 必须是ELEMENT，否则会报‘elementUI is not defined’
    'element-ui': 'ELEMENT'
  },
  CDN: {
    // CDN链接地址：https://www.jsdelivr.com/
    css: [
      'https://cdn.jsdelivr.net/npm/element-ui@2.15.3/lib/theme-chalk/index.css'
    ],
    js: [
      'https://cdn.jsdelivr.net/npm/vue@2.6.11',
      'https://cdn.jsdelivr.net/npm/vue-router@3.2.0/dist/vue-router.min.js',
      'https://cdn.jsdelivr.net/npm/vuex@3.4.0/dist/vuex.min.js',
      'https://cdn.jsdelivr.net/npm/echarts@5.2.1/dist/echarts.min.js',
      'https://cdn.jsdelivr.net/npm/element-ui@2.15.3/lib/element-ui.common.min.js',
      'https://cdn.jsdelivr.net/npm/axios@0.21.1/dist/axios.min.js'
    ]
  }
}
```

****vue.config.js配置****

```jsx
const isPRD = process.env.NODE_ENV === 'production';
// cdn相关配置
const cdnConfig = require('./cdn.config.js');

module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '系统名称',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
      // 调用：htmlWebpackPlugin.options.CDN（设置CDN链接）
      CDN: isPRD && cdnConfig.useCDN ? cdnConfig.CDN : null
    }
  },
  configureWebpack: {
    // 生产环境注入CDN
    externals: isPRD && cdnConfig.useCDN ? cdnConfig.externals : {}
  }
}
```

****index.html****

```jsx
<!DOCTYPE html>
<html lang="">
  <head>
    <meta charset="utf-8">
    <title><%= htmlWebpackPlugin.options.title %></title>

    <!-- 使用 CDN 的 CSS 文件 start -->
    <% for (var i in htmlWebpackPlugin.options.CDN && htmlWebpackPlugin.options.CDN.css) { %>
      <link href="<%= htmlWebpackPlugin.options.CDN.css[i] %>" rel="stylesheet">
    <% } %>
    <!-- 使用 CDN 的 CSS 文件 end -->

    <!-- 使用 CDN 的 JS 文件 -->
    <% for (var i in htmlWebpackPlugin.options.CDN && htmlWebpackPlugin.options.CDN.js) { %>
      <script src="<%= htmlWebpackPlugin.options.CDN.js[i] %>"></script>
    <% } %>
    <!-- 使用 CDN 的 JS 文件 end -->
  </head>
  <body>
    <noscript>
      <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
```

****main.js修改****

index.html已经引入了element.ui的css，所以这里不需要重复引入

```jsx
// 引入element-ui组件库
import ElementUI from 'element-ui';
// index.html已经引入了element.ui的css，所以这里不需要重复引入
// import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
```

****结果****

采用了cdn加载后 打包总耗时由原来的`25.4secs`变为`14.75secs`

采用了cdn加载后 打包体积也变小了

![vite4](/public/webpack-vite4.png)

由图可知，使用cdn加载的第三方库没有进行打包

![vite5](/public/webpack-vite5.png)

### ****可能遇到的问题****

错误是cdn引用的element.ui链接问题：需要引入`lib/index.js`文件(列如[https://cdn.jsdelivr.net/npm/element-ui@2.15.3/lib/index.js](https://links.jianshu.com/go?to=https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2Felement-ui%402.15.3%2Flib%2Findex.js))

![vite6](/public/webpack-vite6.png)

错误是externals外部扩展的value值不对，应为`'element-ui': 'ELEMENT'`

![vite7](/public/webpack-vite7.png)