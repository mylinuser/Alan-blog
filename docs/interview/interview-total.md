## 面试题总结

### 一、JavaScript

**1. 原始值和引用值类型及区别**
  **2. 判断数据类型typeof、instanceof、Object.prototype.toString.call()、constructor**

(constructor通过对象.constructor 获取类型，null和undefined不行，因为不是对象)
  **3. 类数组与数组的区别与转换**

(都有length和通过索引获取，区别类数组不具备数组方法，原型是对象，只能for循环，不能用for in)
  **4. 数组的常见API**
  **5. bind、call、apply的区别**
  **6. new的原理**

第一步：创建一个临时对象obj

第二步：获取构造函数赋值给Constructor

第三步：将obj的原型指向Constructor的原型,目的可以让实例化对象找到构造器原型上的方法

第四步：让Constructor属性作用于obj上，从而可以操作this.xxx的实例属性

第五步：返回临时对象obj
  **7. 如何正确判断this？**

****普通函数：****

this的指向在函数定义的时候是确定不了的，只有函数执行的时候才能确定this到底指向谁，实际上this的最终指向的是那个理她最近上一级调用它的对象

**箭头函数：**

箭头函数this的定义：箭头函数中的this是在定义函数
的时候绑定，而不是在执行函数的时候绑定。它的this指向在定义的时候继承自外层第一个普通函数的this。
  **8. 闭包及其作用**

闭包就是能够读取其他函数内部变量的函数

****垃圾回收机制有两种：1.标记清除， 2.引用计数****

1.标记清除：js会对变量做一个标记yes or no的标签以供js引擎来处理，当变量在某个环境下被使用则标记为yes，当超出改环境（可以理解为超出作用域）则标记为no，然后对有no的标签进行释放。

2.引用计数：对于js中引用类型的变量, 采用引用计数的内存回收机制,当一个引用类型的变量赋值给另一个变量时, 引用计数会+1, 而当其中有一个变量不再等于值时,引用计数会-1, 如果引用计数为0, 则js引擎会将其释放掉。

****闭包的好处：****

1.可以让一个变量长期在内存中不被释放

2.避免全局变量的污染，和全局变量不同，闭包中的变量无法被外部使用

3.私有成员的存在，无法被外部调用，只能直接内部调用

****闭包可以完成的功能：1.防抖、2.节流、3.函数柯里化****

```jsx
function fnSum(a,b,c){//求和函数
            return a+b+c
        } 
function curry2(fn){
                //接收一个后面的参数 除了fn的参数
                let args = Array.prototype.slice.call(arguments,1)
                return function(){
                    let newArg = args.concat(Array.from(arguments)) //将内部函数的参数和外部的参数合并
                    if(newArg.length < fn.length){ //参数没有到三个 fn.length获取传递的函数的参数个数
                        return curry2.call(this,fn,...newArg) //又套了一个function  这个this指向这个function 如果没有到达会一直套这个方法
                    }else{
                        return fn.apply(this,newArg) //将内部函数自动指向 传入所有的参数 
                    } 
                }
            }
        let fn3 = curry2(fnSum) //函数
        console.log(fn3(1)()(2)()(3)); //6
        console.log(fn3()(1)()(2)()()); //偏函数  function😊
```

  **9. 原型和原型链
  10. prototype与__proto__的关系与区别** 

• `prototype`是**构造函数**访问原型对象，`__proto__`是**对象实例**访问原型对象。

• `prototype`属性可以给函数和对象添加可共享（继承）的方法、属性

• `__proto__`是查找某函数或对象的原型链方式
  **11. 继承的实现方式及比较
  12. 深拷贝与浅拷贝
  13. 防抖和节流
  14. 作用域和作用域链、执行期上下文**

作用域和执行上下文之间最大的区别是： **执行上下文在运行时确定，随时可能改变；作用域在定义时就确定，并且不会改变。**

**同一个作用域下，不同的调用会产生不同的执行上下文环境，继而产生不同的变量的值。**
  **15. DOM常见的操作方式**
  **16. Array.sort()方法与实现机制**

• Google的Chrome浏览器的JavaScript引擎是：V8——数组长度小于等于 10 的用插入排序InsertionSort，比10大的数组则使用快速排序 QuickSort

• Mozilla的Firefox浏览器的JavaScript引擎是：SpiderMonkey——归并排序源码

• Safari浏览器的JavaScript引擎是：Nitro（JavaScriptCore ）——桶排序和归并排序

• IE浏览器的JavaScript引擎是：Chakra——使用快排
  **17. Ajax的请求过程
  18. JS的垃圾回收机制**

****垃圾回收机制有两种：1.标记清除， 2.引用计数****

1.标记清除：js会对变量做一个标记yes or no的标签以供js引擎来处理，当变量在某个环境下被使用则标记为yes，当超出改环境（可以理解为超出作用域）则标记为no，然后对有no的标签进行释放。

2.引用计数：对于js中引用类型的变量, 采用引用计数的内存回收机制,当一个引用类型的变量赋值给另一个变量时, 引用计数会+1, 而当其中有一个变量不再等于值时,引用计数会-1, 如果引用计数为0, 则js引擎会将其释放掉。
  **19. JS中的String、Array和Math方法
  20. addEventListener和onClick()的区别**

onclick事件会被覆盖，而addEventListener可以先后运行不会被覆盖，addEventListener可以监听多个事件。

1.onclick事件在同一时间只能指向唯一对象

2.addEventListener对任何DOM都是有效的，而onclick仅限于HTML

3.addEventListener可以控制listener的触发阶段，（捕获/冒泡）。对于多个相同的事件处理器，不会重复触发，不需要手动使用removeEventListener清除

4.onclick添加多次以后，后边的会覆盖前边的，addEventListener则可以给多个事件添加listener
  **21. new和Object.create的区别**

new Object()继承内置对象Object，而Object.create()则是继承指定对象
可以通过Object.create(null) 创建一个干净的对象，也就是没有原型，而 new Object()创建的对象是 Object的实例，原型永远指向Object.prototype
  **22. DOM的location对象
  23. 浏览器从输入URL到页面渲染的整个流程（涉及到计算机网络数据传输过程、浏览器解析渲染过程）
  24. 跨域、同源策略及跨域实现方式和原理**

**协议、域名或者端口有一个不同就是跨域**

主要是用来防止 `CSRF`（跨站请求伪造）攻击的。简单点说，`CSRF`攻击是利用用户的登录态发起恶意请求。

跨域解决方案

```jsx
1、 通过jsonp跨域
2、 document.domain + iframe跨域
3、 location.hash + iframe
4、 [window.name](http://window.name/) + iframe跨域
5、 postMessage跨域
6、 跨域资源共享（CORS）
7、 nginx反向代理跨域
8、 nodejs中间件代理跨域
9、 WebSocket协议跨域
```

```jsx
根据应用场景来进行选择：
简单的跨域请求jsonp即可，
复杂的CORS，
窗口之间Js跨域postMessage，
开发环境下接口跨域用nginx反向代理或node中间件比较方便。
```

  **25. 浏览器的回流（Reflow）和重绘（Repaints）
  26. JavaScript中的arguments
  27. EventLoop事件循环
  28. 宏任务与微任务**

宏任务（macrotask）：

异步Ajax请求
setTimeout 、setInterval
文件操作
其他宏任务
微任务（microtask）：

Promise.then、Promise.catch和Promise.finally
process.nextTick
其他微任务
  **29. BOM属性对象方法
  30. 函数柯里化及其通用封装**

```jsx
//传入一个函数作为参数
function curry(func) {
    //形成闭包，将func函数传入到ruturn出去的函数中
    return function curried(...args) { 
    //(...args)是剩余参数，该写法会将参数转化为数组的形式。
    //详见：[MDN剩余参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Rest_parameters)
        //判断args参数的长度 与 func函数的长度
        if (args.length >= func.length) {
            //若args>=func，直接return执行func
            return func.apply(this, args);	//此处使用apply是因为apply的第二个参数是数组的形式
        } else {
            //若args<func，return的新的函数，该函数递归执行curried函数。
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            };
        };
    };	
};

//用法
function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);

alert( curriedSum(1, 2, 3) ); // 6, 原传参形式调用正常
alert( curriedSum(1)(2,3) ); // 6, 柯里化第一个参数
alert( curriedSum(1)(2)(3) ); // 6, 全柯里化，也就是拆分所有参数
```

  **31. JS的map()和reduce()方法
  32. “==”和“===”的区别（==会类型转换）
  33. setTimeout用作倒计时为何会产生误差？**

setTimeout作为异步任务，在实现倒计时功能的时候，除了执行我们功能的实现代码，还会有主线程对任务队列的读取及执行等过程，这些过程也需要耗费一些时间，所以会因为event loop的机制出现些许误差。

### 二、ES6

**1. let、const和var的概念与区别**

**2. 变量提升与暂时性死区**

**变量提升现象**：即变量可以在声明之前使用，值为undefined。

**暂时性死区**：ES6 明确规定，如果区块中存在 let 和 const 命令，则这个区块对这些命令声明的变量从一开始就形成封闭作用域。只要在声明之前使用这些变量，就会报错。这种语法称为“暂时性死区”（temporal dead zone，简称TDZ）。

**3. 变量的结构赋值**

**4. 箭头函数及其this问题**

**5. Symbol概念及其作用**

**6. Set和Map数据结构**

**7. Proxy**

**8. Reflect对象**

**确保对象的属性能正确赋值，广义上讲，即确保对象的原生行为能够正常进行，这就是Reflect的作用**

**9. Promise（手撕Promise A+规范、Promise.all、Promise相关API和方法）**

**10. Iterator和for...of（Iterator遍历器的实现）**

**11. 循环语法比较及使用场景（for、forEach、for...in、for...of）**

**12. Generator及其异步方面的应用**

**13. async函数**

`async`函数是异步的一种方案，可以让异步的操作同步执行。

**14. 几种异步方式的比较（回调、setTimeout、Promise、Generator、async）**

https://blog.csdn.net/lunahaijiao/article/details/124185543

**15. class基本语法及继承**

**16. 模块加载方案比较（CommonJS和ES6的Module）**

在使用上的差别主要有：

CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。

CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。

CommonJs 是单个值导出，ES6 Module可以导出多个

CommonJs 是动态语法可以写在判断里，ES6 Module 静态语法只能写在顶层

CommonJs 的 this 是当前模块，ES6 Module的 this 是 undefined

**17. ES6模块加载与CommonJS加载的原理**

https://blog.csdn.net/qq_45867474/article/details/120454884

### 三、HTML/CSS

**1. CSS权重及其引入方式**

**2. <a></a>标签全部作用**

**3. 用CSS画三角形**

**4. 未知宽高元素水平垂直居中（方案及比较）**

**5. 元素种类的划分**

**6. 盒子模型及其理解**

**7. 定位方式及其区别（文档流）**

**8. margin塌陷及合并问题**

**9. 浮动模型及清除浮动的方法**

**10. CSS定位属性**

**11. display及相关属性**

**12. IFC与BFC**

**13. 圣杯布局和双飞翼布局的实现**

**14. Flex布局**

**15. px、em、rem的区别**

**16. Less预处理语言**

**17. 媒体查询**

**18. vh与vw**

**19. H5的语义化作用及语义化标签**

**20. Web Worker和Web Socket**

**21. CSS3及相关动画**

**22. 如何实现响应式布局**

**23. SEO的概念及实现**

**24. HTML5的新特性**

**25. Less和Sass使用**

### 四、HTTP与计算机网络

**1. TCP/IP协议分层管理**

**2. 三次握手四次挥手机制及原因**

**3. HTTP方法**

**4. GET和POST的区别**

**5. HTTP建立持久连接的意义**

**6. HTTP报文的结构**

**7. HTTP状态码**

**8. Web服务器及其组成**

**9. HTTP报文首部**

**10. HTTP通用首部字段**

**11. HTTP请求首部字段、响应首部字段、实体首部字段**

**12. Cookie相关首部字段**

**13. HTTPS与HTTP区别及实现方式**

**14. Cookie与Session**

**15. 基于HTTP的功能追加协议（SPY、WebSocket、HTTP）**

**16. 常见的Web攻击分类**

**17. TCP与UDP区别**

**18. 存储机制localStorage、sessionStorage与Cookie存储技术**

**19. XSS攻击及防御**

**20. CSRF攻击及防御**

### 五、前端工程化

**1. 前端工程化的流程（架构选型、业务开发、测试、打包构建、部署上线、项目监控）**

**2. Webpack基本概念与配置**

**3. loader与plugin原理与实现**

**4. Webpack的模块热替换及实现**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6b761d7a-a5c3-40f4-be25-4703c5613020/Untitled.png)

**5. Webpack的优化问题**

**6. SPA及其优缺点**

https://wenku.baidu.com/view/b5d2d53e13a6f524ccbff121dd36a32d7375c70e.html

SPA的优缺点

单页Web程序的出现是客户端发展的必然结果，但是该技术也是有些局限性，所以采用之前需要了解清楚它的优缺点。

**1、优点：**

**1. 良好的交互体验**用户不需要重新刷新页面，获取数据也是通过Ajax异步获取，页面显示流畅。

**2. 良好的前后端工作分离模式**单页Web应用可以和RESTful规约一起使用，通过REST API提供接口数据，并使用Ajax异步获取，这样有助于分离客户端和服务器端工作。更进一步，可以在客户端也可以分解为静态页面和页面交互两个部分。

**3. 减轻服务器压力**服务器只用出数据就可以，不用管展示逻辑和页面合成，吞吐能力会提高几倍；

**4. 共用一套后端程序代码**不用修改后端程序代码就可以同时用于Web界面、手机、平板等多种客户端；

**2、缺点：**

**1. SEO难度较高**由于所有的内容都在一个页面中动态替换显示，所以在SEO上其有着天然的弱势，所以如果你的站点对SEO很看重，且要用单页应用，那么就做些静态页面给搜索引擎用吧。

**2. 前进、后退管理**由于单页Web应用在一个页面中显示所有的内容，所以不能使用浏览器的前进后退功能，所有的页面切换需要自己建立堆栈管理，当然此问题也有解决方案，比如利用URI中的散列+iframe实现。

**3. 初次加载耗时多**为实现单页Web应用功能及显示效果，需要在加载页面的时候将JavaScript、CSS统一加载，部分页面可以在需要的时候加载。所以必须对JavaScript及CSS代码进行合并压缩处理，如果使用第三方库，建议使用一些大公司的CDN，因此**带宽的消耗**是必然的。

**7. SSR实现及优缺点**

优点：
1、更好的SEO
2、解决首屏渲染问题（更快的首屏到达时间）

缺点：
1、配置过程复杂，需要配置2个入口文件，即 服务端首屏渲染所需和前端激活所需的。（ nuxt.js 可以更容易实现SSR）
2、相比于SPA，服务端渲染加重了服务器的负担。
3、SPA是单例模式，SSR需要服务端返回Vue实例，一次首屏就需要创建一个实例，代码是工厂模式返回的实例，即多实例。所以更浪费性能、
4、基于nodejs serve服务环境开发

**8. 设计模式（工厂模式、单例模式、原型模式、***模式、适配器模式、观察者模式等...）**

### 六、React

**1. React自身特点及选型时考虑**

**2. React与VUE的异同**

**3. Virtual DOM**

**4. React生命周期**

**5. Diff[算法](https://www.notion.so/jump/super-jump/word?word=%E7%AE%97%E6%B3%95)**

**6. 受控组件与非受控组件**

**7. 高阶组件**

**8. Flux架构模式（涉及MVC/MVVM、Flux）**

**9. Redux设计概念、设计原则、方法、redux实现异步流的库**

**10. 纯组件（Pure Component）与shouldComponentUpdate关系**

**11. Redux中的<Provider/>组件与connect函数**

**12. React Fiber架构**

**13. React Hooks的作用及原理**

### 七、NodeJS

**1. NodeJS基本概念与特点**

**2. CommonJS规范、核心模块**

**3. Node的异步I/O**

**4. Node的内存控制**

**5. Node构建网络服务（TCP、HTTP、Web Socket服务等）**

**6. Node的进程**

### 八、需要会手撕的代码部分

**1. Promise（A+规范）、then、all方法**

**2. Iterator遍历器实现**

**3. Thunk函数实现（结合Generator实现异步）**

**4. async实现原理（spawn函数）**

**5. class的继承**

**6. 防抖和节流**

**7. Ajax原生实现**

**8. 深拷贝的几种方法与比较**

**9. 继承的几种实现与比较**

**10. 未知宽高的元素水平垂直居中**

**11. 三栏布局的实现**

**12. 两栏布局的实现**

**13. React高阶组件**

**14. 数组去重**

**15. 几种[排序](https://www.notion.so/jump/super-jump/word?word=%E6%8E%92%E5%BA%8F)[算法](https://www.notion.so/jump/super-jump/word?word=%E7%AE%97%E6%B3%95)的实现及其复杂度比较**

**16. 前序后序遍历[二叉树](https://www.notion.so/jump/super-jump/word?word=%E4%BA%8C%E5%8F%89%E6%A0%91)（非递归）**

**17.[二叉树](https://www.notion.so/jump/super-jump/word?word=%E4%BA%8C%E5%8F%89%E6%A0%91)深度遍历（分析时间复杂度）**

**18. 跨域的实现（JSONP、CORS）**

### 九、数据可视化

**1. Canvas和SVG的区别**

**2. 在考虑设计可视化图表时，结合Canvas和SVG特性会怎么取舍**

**3. 常见的可视化组件库**

**4. 可视化组件库如Echarts的设计思路**

**5. 一些偏向底层的可视化组件库和前端框架结合方面需要考虑哪些问题**

**6. 可视化组件如何做到数据驱动？**

### 十、计算机基础

**1. 计算机系统**

**2. 线程与进程**

**3. 常见的git指令**

**4. Linux相关指令**

**5. 其他类型的编程语言（如Java）**

**6. 数据库**