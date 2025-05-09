# 前端白屏检测

页面白屏指页面在加载过程中长时间无法正常展示内容,用户处于等待状态的现象。 通常表现为:

- 页面空白,没有任何内容
- 页面仅显示背景色,没有文本、图片、页面元件等内容 
- 页面处于加载中状态,但长时间无法完成加载

## 如何检测白屏

### 方案一 检测根节点是否渲染

原理很简单，在当前主流 SPA 框架下，DOM 一般挂载在一个根节点之下（比如 ```<div id="app"></div> ```），发生白屏后通常是根节点下所有 DOM 被卸载。该方案就是通过监听全局的 onerror 事件，在异常发生时去检测根节点下是否挂载 DOM，若无则证明白屏。

这种方案，简单直接，直接检测根节点是否渲染完成即可。适用于SPA。SPA页面主要内容通过根节点下的组件渲染,所以监测根节点渲染情况可以判断SPA页面主要内容是否正常渲染。


```jsx
//main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// JS 错误监听 
window.onerror = function (msg, url, lineNo, columnNo, error) {
  const rootElement = document.querySelector('#root')
  if (!rootElement.firstChild) {
    console.log('#root节点不存在内容,判断为白屏!')
  }
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

//App.jsx

import React from 'react';
function App() {
  return (
    <div>
      App,
      {
        app.map(i => i * 2)  //我们这里app未定义，执行报错导致白屏
      }
    </div>
  );
}
export default App;
```

### 方案二 Mutation Observer 监听 DOM 变化


```js
let timeoutId=null
const observer = new MutationObserver(callback);
function callback(mutationsList, observer) {
// 有 DOM 变化，说明页面还没有白屏，重置一个定时器
clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
    // 一段时间内没有任何 DOM 变化，说明页面已经白屏
    console.log('页面白屏');
    }, 3000);
}
const targetNode = document.body;
const config = {
    childList: true,
    attributes: true,
    subtree: true,
    characterData: true,
};
observer.observe(targetNode, config);
```

原理是当dom一直变化，说明没有白屏，一直清除定时器，当设置的定时器执行完成说明dom没有变化，也就是白屏了

缺点：
- 如果设置时间太短可能会误判，设置时间太长可能会影响页面性能
- 同时如果用户长时间未操作DOM，Mutation Observer 监听到一定时间内没有 DOM 变化，就可能会误判为页面白屏
- 准确度低，无法检测未渲染、始终渲染骨架屏等情况

### 方案三：关键点采样对比

所谓关键点采样就是在我们的屏幕中，随机取几个固定的点，利用document.elementsFromPoint（x,y）该函数返还在特定坐标点下的 HTML 元素数组。

关键点的选取我们一般采用：垂直选取

假设，要在X，Y轴上各埋9个点，每个点的距离相等，那么X轴上的点坐标就是（i/10 * 屏幕的宽度，1/2 * 屏幕的高度, i 代表第几个点。那么Y轴上的坐标就是（1/2 * 屏幕的宽度，i / 10 * 屏幕的高度）。
除了垂直选取，还有交叉选取，以及垂直交叉选取。

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <div class="main"></div>
  <script>
    function onload() {
      if (document.readyState === 'complete') {
        whiteScreen()
      } else {
        window.addEventListener('load', whiteScreen)
      }
    }
    let wrapperElements = ['html', 'body', '.content'] //首先定义容器列表
    let emptyPoints = 0 //空白点数量
    function getSelector(element) { //获取节点的容器
      if (element.id) {
        return '#' + element.id
      } else if (element.className) {  //content main==> .content.main  主要为了处理类名是多个的情况
        return '.' + element.className.split(' ').filter(item => !!item).join('.')
      } else {
        return element.nodeName.toLowerCase()
      }
    }
    function isWrapper(element) { //判断关键点是否在wrapperElements定义的容器内
      let selector = getSelector(element)
      if (wrapperElements.indexOf(selector) != -1) {
        emptyPoints++ //如果采样的关键点是在wrapperElements容器内，则说明此关键点是空白点，则数量加1
      }
    }
    function whiteScreen() {
      for (let i = 1; i <= 9; i++) {
        let xElement = document.elementsFromPoint(window.innerWidth * i / 10, window.innerHeight / 2)//在x轴方向上，取10个点
        let yElement = document.elementsFromPoint(window.innerWidth / 2, window.innerHeight * i / 10)//在y轴方向上，取10个点
        isWrapper(xElement[0])
        isWrapper(yElement[0])
      }
      if (emptyPoints != 18) {//如果18个点不都是空白点，则说明页面正常显示
        clearInterval(window.loopFun)
        window.loopFun = null
      } else {
         console.log('页面白屏了');
        if (!window.loopFun) {
          loop()
        }
      }
    }
    window.loopFun = null
    function loop() {
      if (window.loopFun) return;
      window.loopFun = setInterval(() => {
        emptyPoints=0
        whiteScreen()
      }, 2000)
    }
    onload()
  </script>
    <script>
      let content = document.querySelector('.main')
      setTimeout(() => {
        content.style.width = '500px'
        content.style.height = '500px'
        content.style.backgroundColor = 'red'
      }, 4000);
    </script>
</body>
</html>
```