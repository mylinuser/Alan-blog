# node 相关

## process.nextTick

### process.nextTick 的执行时机

#### 在 Node 中 process.nextTick 的执行时机是在当前事件循环的末尾、下一个事件循环开始之前。

nextTick 是一个用于异步操作的函数，用来在当前执行栈执行完毕后，在下一个事件循环中执行指定的回调函数。它通常用于在本轮事件循环结束前执行一些需要延迟执行的代码。

具体来说，nextTick 将指定的回调函数放入微任务队列中，确保在下一个事件循环中立即执行。这使得回调函数能够在当前执行栈的任务全部完成后被调用，避免了阻塞或延迟其他任务。

## 微任务和宏任务，promise 里面 setTImeout 然后 resolve，哪个执行快？

没听清具体什么情况，但是应该回答错了

```js
const a = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
      console.log(222222);
    });
  });
};

const init = async () => {
  console.log(await a());
};

init();
```

应该是这种情况 222222 会先输出

## 如果从零到一搭建一个项目，你会怎么考虑？
问到好多都是这个，需要组织一下语言

## node 里面 import 和 require 的区别，可以混用吗？

在 Node.js 中，import 和 require 是两种不同的模块加载方式，具有一些区别：

语法和用法区别:

require 是 CommonJS 规范中定义的模块加载方法，用于在运行时动态地加载模块。
import 是 ECMAScript 模块（ESM）的标准语法，用于静态加载模块，在编译时就确定加载依赖关系。
兼容性:

require 是 Node.js 原生支持的模块加载方法，可以加载 CommonJS 模块和部分 ECMAScript 模块。
import 是 ECMAScript 6 引入的语法，需要在支持 ESM 的环境下使用，Node.js 从版本 12 开始支持部分 import 语法，但需要在文件扩展名为 .mjs 或设置 "type": "module" 的 package.json 中启用 ESM 模式。
混用情况:

在 Node.js 中，默认情况下不能直接混用 import 和 require，因为它们代表了不同的模块系统。如果你在同一个文件中同时使用 import 和 require，Node.js 在编译时会报错。
转换和兼容处理:

如果你希望在 Node.js 中同时使用 import 和 require，可以通过一些工具或库来实现转换，例如 Babel、Webpack 等，它们可以将 ESM 转换为 CommonJS 或者在 Node.js 中启用 ESM 支持来允许混用。
总结来说，import 和 require 在语法和用法上有明显的区别，不能直接混用。如果需要在 Node.js 中使用 import，需要确保 Node.js 版本支持，并且文件使用 .mjs 扩展名或者设置了相应的 package.json 配置。

## 同级域名登录怎么实现

cookie

## node 相关项目经验积累
好像很多都要node项目，需要更新简历，写三个项目进去
