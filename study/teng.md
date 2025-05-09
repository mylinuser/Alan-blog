## Vue3的proxy的getter和setter挟持

## vue的template模板编译阶段的优化有哪些
- 静态节点优化

## webpack和vite热更新区别

## vite初始化是怎么样的

## qiankun、micro-app和wujie的区别

## 白屏检测是怎么做的

## 怎么监听浏览器性能和错误

## 性能的指标有哪些

## 监控方面TTI这种怎么去监听

 自定义埋点：使用 `PerformanceObserver` 监听 `first-input` 和 `longtask` 事件，计算 TTI。

## 接口错误监控是怎么去拦截的
现在异步请求的底层原理都是调用的 XMLHttpRequest 或者 Fetch 和axios，我们只需要对这几个方法都进行劫持 ，就可以往接口请求的过程中加入我们所需要的一些参数捕获；
[接口错误监控](https://juejin.cn/post/7098656658649251877#heading-15)
```js
// sdk.js
(function () {
  // 拦截 XHR
  if (window.XMLHttpRequest) {
    const originalOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function (method, url) {
      this._monitor = { method, url, start: Date.now() };
      originalOpen.apply(this, arguments);
    };
    const originalSend = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.send = function (body) {
      this.addEventListener('loadend', () => {
        const { status, statusText } = this;
        if (status >= 400) {
          console.error('[monitor] XHR Error:', status, statusText, {
            url: this._monitor.url,
            duration: Date.now() - this._monitor.start
          });
        }
      });
      originalSend.apply(this, arguments);
    };
  }

  // 拦截 Fetch
  if (window.fetch) {
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      const start = Date.now();
      try {
        const response = await originalFetch(...args);
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          console.error('[monitor] Fetch Error:', response.status, errorData, {
            url: typeof args[0] === 'string' ? args[0] : args[0].url,
            duration: Date.now() - start
          });
        }
        return response;
      } catch (error) {
        console.error('[monitor] Fetch Network Error:', error, {
          url: typeof args[0] === 'string' ? args[0] : args[0].url,
          duration: Date.now() - start
        });
        throw error;
      }
    };
  }

  // 拦截 Axios（需确保 SDK 加载顺序在业务代码之前）
  if (window.axios) {
    const originalRequest = window.axios.Axios.prototype.request;
    window.axios.Axios.prototype.request = async function (config) {
      const start = Date.now();
      try {
        const response = await originalRequest.call(this, config);
        if (response.data.code !== 0) {
          console.error('[monitor] Axios Business Error:', response.data, {
            url: config.url,
            method: config.method,
            duration: Date.now() - start
          });
        }
        return response;
      } catch (error) {
        if (error.response) {
          console.error('[monitor] Axios HTTP Error:', error.response.status, error.response.data, {
            url: error.config.url,
            method: error.config.method,
            duration: Date.now() - start
          });
        }
        throw error;
      }
    };
  }
})();
```

## http3和http2的区别

## 包管理器的区别npm yarn pnpm

## Monorepo的实现方式，有什么缺陷，他们各自的区别是什么
[Monorepo的实现方式](./Monorepo.md)

## 大文件上传的状态码204和206的区别

### 204 No Content​​
#### ​定义​​：表示服务器成功处理了请求，但​​不需要返回任何实体内容​​（如文件数据或元信息）。
#### ​​适用场景​​：
- ​分块上传确认​​：当客户端将大文件拆分为多个分块上传时，服务器处理完某个分块后，可能返回204表示该分块已成功接收，但整体文件尚未完成。
- ​无数据反馈的异步操作​​：例如上传完成后，服务器仅需确认成功，无需返回文件信息（如文件ID或存储路径）。
#### ​特点​​：
- 响应头可能包含元信息（如文件存储位置），但​​响应体为空​​。
- 客户端需通过其他方式（如后续请求）获取最终结果。

### 206 Partial Content​​
#### ​定义​​：表示服务器成功处理了​​部分请求内容​​，并返回指定范围的数据。必须包含 Content-Range 头字段，说明返回的数据范围。
#### ​适用场景​​：
​- ​断点续传​​：客户端在上传大文件时，若因网络中断需恢复上传，可通过 Range 头指定已上传的字节位置，服务器返回206响应并继续接收后续数据。
​- ​分块上传的中间反馈​​：某些协议（如WebDAV）支持分块上传时，服务器可能返回206确认已接收的部分数据。
#### ​特点​​：
- 响应体包含​​部分文件数据​​，且必须通过 Content-Range 明确范围（如 bytes 1000-1999/10000）。
- 客户端需根据 Content-Range 合并分块以完成完整文件。

## AST做每一行代码后面标明行号
[AST](./AST.md)

## AST的生成阶段
[AST](./AST.md)

## 算法题
- promise.all
- 数组扁平化
- proxy的getter和setter
- 正则表达式
- 大数相加
- 二叉树的后序遍历