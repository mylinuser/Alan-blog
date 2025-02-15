# nextTick

在 Vue.js 开发过程中，`nextTick` 是一个非常有用的工具，尤其当我们需要处理异步操作或 DOM 操作时。本文将详细介绍 `nextTick` 的作用、用法以及其内部原理。

### 什么是 nextTick？

`nextTick` 是 Vue 提供的一个方法，用于在下次 DOM 更新之后执行回调函数。简单来说，它允许我们在 Vue 响应式系统完成所有更新后，安排一个回调来执行我们的代码。

### 使用场景

1. **操作 DOM**：直接在事件处理中操作 DOM 可能会导致性能问题或布局错乱。
2. **状态更新后的 DOM 访问**：当我们更新了组件的状态，希望立即访问新的 DOM 状态时，`nextTick` 可以派上用场。
3. **避免队列更新的重复执行**：在某些情况下，直接操作 DOM 可能会导致 Vue 的队列更新多次执行。
4. 
### 基本语法

`Vue.nextTick([callback], [context])`

- **callback**: 回调函数，将在下次 DOM 更新后执行。
- **context**: 可选参数，用于在回调中使用 `this` 指针指向 Vue 实例。

#### 示例代码

```javascript
// 基本用法
Vue.nextTick(() => {
  console.log('DOM 已更新');
});

// 使用 context 参数
Vue.nextTick((ctx) => {
  console.log(ctx.someData); // ctx 是 Vue 实例
});

```

#### 返回值
nextTick 返回一个 Promise 对象，因此可以使用 async/await：

```JAVASCRIPT
async function someFunction() {
  await Vue.nextTick();
  console.log('DOM 已更新');
}
```
#### 内部原理
##### Vue 的更新机制
Vue 使用一个异步队列来处理 DOM 更新。当数据发生变化时，Vue 会将更新操作添加到队列中，并在下一个事件循环周期或微任务完成时统一执行。

##### nextTick 的实现细节
nextTick 实际上是利用了浏览器的 微任务（Microtask） 机制。微任务会在当前宏任务完成后立即执行，但不会阻塞主线程。常见的微任务来源包括：

1. Promise 解析
2. MutationObserver 监控 DOM 变化

Vue 使用这些机制来确保在所有数据变化处理完毕后，统一更新 DOM。

### nextTick 的实现原理

在调用 this.$nextTick(cb) 之前：

1. 存在一个 callbacks 数组，用于存放所有的 cb 回调函数。
2. 存在一个 flushCallbacks 函数，用于执行 callbacks 数组中的所有回调函数。
3. 存在一个 timerFunc 函数，用于将 flushCallbacks 函数添加到任务队列中。

当调用 this.nextTick(cb) 时：

1. nextTick 会将 cb 回调函数添加到 callbacks 数组中。
2. 判断在当前事件循环中是否是第一次调用 nextTick：
   - 如果是第一次调用，将执行 timerFunc 函数，添加 flushCallbacks 到任务队列。
   - 如果不是第一次调用，直接下一步。

3. 如果没有传递 cb 回调函数，则返回一个 Promise 实例。


```js
// 存储所有的回调函数
const callbacks = [];
/* 类似于节流的标记位，标记是否处于节流状态。防止重复推送任务 */
let pending = false;

/* 遍历执行数组 callbacks 中的所有存储的 cb 回调函数 */
function flushCallbacks() {
  // 重置标记，允许下一个 nextTick 调用
  pending = false;
  /* 执行所有 cb 回调函数 */
  for (let i = 0; i < callbacks.length; i++) {
    callbacks[i](); // 依次调用存储的回调函数
  }
  // 清空回调数组，为下一次调用做准备
  callbacks.length = 0;
}

// 判断最终支持的 API：Promise / MutationObserver / setImmediate / setTimeout
let timerFunc;

if (typeof Promise !== "undefined") {
  // 创建一个已resolve的 Promise 实例
  var p = Promise.resolve();
  // 定义 timerFunc 为使用 Promise 的方式调度 flushCallbacks
  timerFunc = () => {
    // 使用 p.then 方法将 flushCallbacks 推送到微任务队列
    p.then(flushCallbacks);
  };
} else if (
  typeof MutationObserver !== "undefined" &&
  MutationObserver.toString() === "[object MutationObserverConstructor]"
) {
  /* 新建一个 textNode 的 DOM 对象，用 MutationObserver 绑定该 DOM 并指定回调函数。
   在 DOM 变化的时候则会触发回调，该回调会进入主线程（比任务队列优先执行），
   即 textNode.data = String(counter) 时便会加入该回调 */
   var counter = 1; // 用于切换文本节点的值
   var observer = new MutationObserver(flushCallbacks); // 创建 MutationObserver 实例
   var textNode = document.createTextNode(String(counter)); // 创建文本节点
   observer.observe(textNode, {
      characterData: true, // 监听文本节点的变化
   });
   // 定义 timerFunc 为使用 MutationObserver 的方式调度 flushCallbacks
  timerFunc = () => {
    counter = (counter + 1) % 2; // 切换 counter 的值（0 或 1）
    textNode.data = String(counter); // 更新文本节点以触发观察者
  };
} else if (typeof setImmediate !== "undefined") {
  /* 使用 setImmediate 将回调推入任务队列尾部 */
  timerFunc = () => {
    setImmediate(flushCallbacks); // 将 flushCallbacks 推送到宏任务队列
  };
} else {
  /* 使用 setTimeout 将回调推入任务队列尾部 */
  timerFunc = () => {
    setTimeout(flushCallbacks, 0); // 将 flushCallbacks 推送到宏任务队列
  };
}

function nextTick(cb) {
  // 用于存储 Promise 的解析函数
  let _resolve; 
  // 将回调函数 cb 添加到 callbacks 数组中
  callbacks.push(() => {
    // 如果有 cb 回调函数，将 cb 存储到 callbacks
    if (cb) {
      cb();
    } else if (_resolve) {
      // 如果参数 cb 不存在，则保存 Promise 的成功回调 resolve
      _resolve();
    }
  });

  // 第一次使用 nextTick 时，pending 为 false，下面的代码才会执行
  if (!pending) {
    // 改变标记位的值，如果有 nextTickHandler 被推送到任务队列中去则不需要重复推送
    pending = true;
    // 调用 timerFunc，将 flushCallbacks 推送到合适的任务队列
    timerFunc(flushCallbacks);
  }

  // 如果没有 cb 且环境支持 Promise，则返回一个 Promise
  if (!cb && typeof Promise !== "undefined") {
    return new Promise((resolve) => {
      // 保存 resolve 到 callbacks 数组中
      _resolve = resolve;
    });
  }
}
```



Vue源代码

```js
// 存储所有的 cb 回调函数
const callbacks = [];
/* 类似于节流的标记位，标记是否处于节流状态。防止重复推送任务 */
let pending = false;

/* 遍历执行数组 callbacks 中的所有存储的 cb 回调函数 */
function flushCallbacks() {
  pending = false; // 重置标记，允许下一个 nextTick 调用
  const copies = callbacks.slice(0); // 复制当前的 callbacks 数组
  callbacks.length = 0; // 清空 callbacks 数组
  for (let i = 0; i < copies.length; i++) {
    copies[i](); // 执行每一个存储的回调函数
  }
}
// 判断是否为原生实现的函数
function isNative(Ctor) {
  // 如Promise.toString() 为 'function Promise() { [native code] }'
  return typeof Ctor === "function" && /native code/.test(Ctor.toString());
}

// 判断最终支持的 API：Promise / MutationObserver / setImmediate / setTimeout
let timerFunc;

if (typeof Promise !== "undefined" && isNative(Promise)) {
  const p = Promise.resolve(); // 创建一个已解决的 Promise 实例
  timerFunc = () => {
    p.then(flushCallbacks); // 使用 p.then 将 flushCallbacks 推送到微任务队列

    // 在某些有问题的 UIWebView 中，Promise.then 并不会完全失效，
    // 但可能会陷入一种奇怪的状态：回调函数被添加到微任务队列中，
    // 但队列并没有被执行，直到浏览器需要处理其他工作，比如定时器。
    // 因此，我们可以通过添加一个空的定时器来“强制”执行微任务队列。
    if (isIOS) setTimeout(() => {}); // 解决iOS 的bug，推迟 空函数 的执行（如果不理解，建议忽略）
  };
} else if (
  typeof MutationObserver !== "undefined" &&
  (isNative(MutationObserver) ||
    MutationObserver.toString() === "[object MutationObserverConstructor]")
) {
  let counter = 1; // 用于切换文本节点的值
  const observer = new MutationObserver(flushCallbacks); // 创建 MutationObserver 实例
  const textNode = document.createTextNode(String(counter)); // 创建文本节点
  observer.observe(textNode, {
    characterData: true, // 监听文本节点的变化
  });
  // 定义 timerFunc 为使用 MutationObserver 的方式调度 flushCallbacks
  timerFunc = () => {
    counter = (counter + 1) % 2; // 切换 counter 的值（0 或 1）
    textNode.data = String(counter); // 更新文本节点以触发观察者
  };
} else if (typeof setImmediate !== "undefined" && isNative(setImmediate)) {
  timerFunc = () => {
    setImmediate(flushCallbacks); // 使用 setImmediate 推送到任务队列
  };
} else {
  timerFunc = () => {
    setTimeout(flushCallbacks, 0); // 使用 setTimeout 推送到宏任务队列
  };
}

function nextTick(cb, ctx) {
  let _resolve; // 用于存储 Promise 的解析函数
  // 将回调函数 cb 添加到 callbacks 数组中
  callbacks.push(() => {
    if (cb) {
      try {
        cb.call(ctx); // 执行传入的回调函数
      } catch (e) {
        handleError(e, ctx, "nextTick"); // 错误处理
      }
    } else if (_resolve) {
      _resolve(ctx); // 解析 Promise
    }
  });
  // 第一次使用 nextTick 时，pending 为 false，下面的代码才会执行
  if (!pending) {
    pending = true; // 改变标记位的值
    timerFunc(); // 调用 timerFunc，调度 flushCallbacks
  }
  // 如果没有 cb 且环境支持 Promise，则返回一个 Promise
  if (!cb && typeof Promise !== "undefined") {
    return new Promise((resolve) => {
      _resolve = resolve; // 存储解析函数
    });
  }
}
```