## 1、计算机网络七层协议：

应用层、表示层、会话层、传输层、网络层、数据链路层、物理层

## 2、Object.assign的用法：

```jsx
let obj1 = {a:0, B:{c:0}};
Let obj2 = Object.assign({}, obj1);
// 对象的合并
const obj = Object.assign(o1, o2, o3)
相同属性后面的会覆盖前面的
```

```jsx
// 深拷贝代码：
JSON.parse(JSON.stringfy(test)); 
function deepCody(newobj, oldobj) { 
	for(var k in oldobj) { 
		var item = old[k] 
		if(item instanceof Array){ 
			newobj[k] = [];
			deepCopy(newobj[k], item);
		} else if(item instanceof Object) { 
				newobj[k] = {};
				deepCopy(newobj[k], item) 
		} 
		newobj[k] = item
	 }
 } 
}
```

## 3、进程与线程区别

- 进程要分配一大部分的内存，而线程只需要分配一部分栈就可以了.
- 一个程序至少有一个进程,一个进程至少有一个线程.
- 进程是资源分配的最小单位，线程是程序执行的最小单位。
- 一个线程可以创建和撤销另一个线程，同一个进程中的多个线程之间可以并发执行.

- **进程之间的是怎么进行交互的呢？**

通过TCP/IP的端口来实现

- **线程之间又是怎样进行交互？**

线程的通信就比较简单，有一大块共享的内存，只要大家的指针是同一个就可以看到各自的内存。

## 4、Vite的优点

vite是使用rollup进行打包的

1、慢启动的优化，不进行打包，直接编译

2、每个文件通过 http 头缓存在浏览器端，当编辑完一个文件，只需让此文件缓存失效。当基于 ES module 进行热更新时，仅需更新失效的模块，这使得更新时间不随包的增大而增大。

3、组件热更新，修改完立马重新编译

https://www.cnblogs.com/fayin/p/14234872.html

## 5、Vue3的改变

1、setup，把Vue2的一些optionAPI改成了compositionAPI

2、对代码进行分析，给动态的内容添加标注，每次更新只更新标注内容，按需加载（进行了tree shaking），加快了速度(用ESM进行代码静态分析，ESM需要一开始就引用，因为需要知道哪些代码是需要的)

3、从Object.defineProperty改成了用Proxy

## 6、package.json里的属性意义

- `version` 表明了当前的版本。
- `name` 设置了应用程序/软件包的名称。
- `description` 是应用程序/软件包的简短描述。
- `main` 设置了应用程序的入口点。
- `private` 如果设置为 `true`，则可以防止应用程序/软件包被意外地发布到 `npm`。
- `scripts` 定义了一组可以运行的 node 脚本。
- `dependencies` 设置了作为依赖安装的 `npm` 软件包的列表。
- `devDependencies` 设置了作为开发依赖安装的 `npm` 软件包的列表。
- `engines` 设置了此软件包/应用程序在哪个版本的 Node.js 上运行。
- `browserslist` 用于告知要支持哪些浏览器（及其版本）。