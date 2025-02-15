# babel

## 什么是 Babel？

- Babel 是一个 JS 编译器，通过 Babel 我们可以把按最新标准编写的 JS 代码向下编译成兼容浏览器或其他环境的通用版本。
- 虽然 Babel 开箱即用，但是如果不做任何配置，输入原始代码，则会输出同样的原始代码。如果想要做一些实际工作，需要添加插件（plugins）。一个个手动引入需要的插件过于繁琐，所以通常会使用官方提供的预设（presets），预设是插件的集合。
官方提供的预设：@babel/preset-env

Babel 转译代码，会将代码分成两部分

- syntax（语法）：箭头函数、let、const、展开运算符等
- api：Promise、includes、map等
- Babel 默认不转换 syntax 和 api ，使用 @babel/preset-env 或 babel-runtime 后转换 syntax，但不会转换 api 。需要使用垫片（polyfill）转换 api，polyfill 可以让新的内置函数、实例方法等在低版本环境中也可以使用。

官方给出了两种 polyfill 方案

- babel-polyfill：会污染全局适合在业务项目中使用。（Babel7.4.0版本开始，babel/polyfill 已经被废弃，推荐直接使用core-js）
- babel-runtime：不污染全局适合在组件或类库项目中使用。

## 几种配置区别

#### 1. 不做任何配置
会发现输出的 lib/index.js 文件，与编译之前没有区别，输出了原始代码。
在根目录添加文件：

babel.config.json（Babel配置文件）
.browserslistrc（声明了一段浏览器集合，根据这段集合描述，针对性的输出兼容性代码）
看看使用了配置和浏览器策略之后，会有哪些改变。

#### 2. @babel/preset-env

- 只转换syntax（class，typeof，箭头函数），不转换api（map，includes）
- syntax的转换策略会根据浏览器策略（.browserslistrc文件的配置）改变

#### 3. @babel/preset-env + core-js@3

- 转换 syntax 和 api。
- syntax 和 api 的转换策略会根据浏览器策略改变。
- polyfill 从core-js@3 引入。

```json
{
    "presets": [
        [
            "@babel/preset-env",
            {
                "corejs": 3,
                "useBuiltIns": "usage"
            }
        ]
    ]
}
```

介绍一下配置项 useBuiltIns ：默认为 false，可以使用的值有 usage 和 entry

- usage：不需要手动 import '@babel/polyfill'，会根据 browserlist + 业务代码使用到的新 API 按需自动加上 polyfill
- entry：需要手动 import '@babel/polyfill'，根据 browserlist 中浏览器版本的支持，将 polyfill 拆分引入浏览器不支持的 polyfill。这样会导致实际用不到的 polyfill 也会被打包到输出文件，导致文件比较大。
- false：不启用 polyfill，如果 import '@babel/polyfill', 会无视 browserlist 将所有的 polyfill 加载进来。
- 新版本的 Babel，会提示直接引入 core-js 或者 regenerator-runtime/runtime 来代替@babel/polyfill。

#### 4.@babel/preset-env + @babel/runtime-corejs3 + @babel/plugin-transform-runtime

- api转换会根据策略改变。
- syntax转换会根据策略改变。

##### @babel/runtime 和 @babel/plugin-transform-runtime 的关系：

- plugin-transform-runtime 用于编译时转译代码，真正的polyfill在代码运行时从babel/runtime里引入，所以plugin-transform-runtime 需要安装在开发环境，而babel/runtime安装在生产环境。

##### @babel/runtime 和 @babel/runtime-corejs3：

- @babel/runtime包含：helpers、regenerator-runtime。只能处理语法。
- @babel/runtime-corejs3包含：helpers、regenerator-runtime、core-js@3。引入core-js@3处理api。

Babel 在每个需要转换的代码前面都会插入一些 helpers 代码，这可能会导致多个文件都会有重复的 helpers 代码。@babel/plugin-transform-runtime 的 helpers: true 选项就可以把这些代码抽离出来。

```json
{
    "plugins": [
        [
            "@babel/plugin-transform-runtime",
            {
                "corejs": 3,
                "helpers": true,
                "regenerator": false
            }
        ]
    ],
    "presets": [
        [
            "@babel/preset-env"
        ]
    ]
}
```

#### 5. 组合使用@babel/preset-env + core-js@3 + @babel/plugin-transform-runtime + @babel/runtime-corejs3

- core-js 设置转译api， runtime 设置 false 不转译api。
- runtime 转换了语法，没有转 api，core-js 转了api。
- runtime 提取 helper 代码，减少重复代码，core-js 使用最新版本按需引入。
- 体积最小

#### 6. 组合使用@babel/preset-env + core-js@3 + @babel/plugin-transform-runtime + @babel/runtime-corejs3，core-js和runtime都设置转译api

- runtime转了语法和api，两者不会重复转译，输出结果与配置4一致。
```json
{
    "plugins": [
        [
            "@babel/plugin-transform-runtime",
            {
                "corejs": 3,
                "helpers": true,
                "regenerator": false
            }
        ]
    ],
    "presets": [
        [
            "@babel/preset-env",
            {
                "corejs": 3,
                "useBuiltIns": "usage"
            }
        ]
    ]
}
```

### 总结：

- 个人测试的编译后体积最小的代码是配置5：使用 core-js 的 useBuiltIns 设置按需引入 polyfill 结合 @babel/plugin-transform-runtime 提取重复代码的 helper 代码。
- 官方建议的使用方式是：根据使用场景，useBuiltIns 的 polyfill 全局范围添加，@babel/plugin-transform-runtime 的 polyfill 非全局范围添加，采用一种配置即可。


