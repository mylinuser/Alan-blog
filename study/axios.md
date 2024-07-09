## Axios

## ****取消接口请求****

Axios 提供了一个 `CancelToken`的函数，这是一个构造函数，该函数的作用就是用来取消接口请求的。

## **XMLHttpRequest 取消请求**

在使用xhr进行异步的请求，是可以进行中止的。

**方法一：xhr.abort() 调用中止api**

xhr 就是 XMLHttpRequest 的实例，该实例调用对应的xhr.abort() 会终止当前的请求。

```css
var xhr = new XMLHttpRequest();
xhr.open('get', 'https://jianshu.com', true);
xhr.send();
xhr.onreadystatechange= function (){
console.log(xhr.responseText, '-- respone')
}
setTimeout(() => {xhr.abort()}, 20);
```

**方法二：AbortController**

```css
var controller = new AbortController();
var signal = controller.signal;

var d = fetch('www.jianshu.com',{signal}).then(d => {console.log(d)}).catch(err => {console.log(err, 'baocuo...')})
setTimeout(() => {controller.abort()}, 10);
// DOMException: The user aborted a request. "baocuo..."
```

**方法三：axios.CancelToken**

axios.CancelToken

axios对abort方法进行了封装，取消请求

1，axios请求的第二个参数对象中增加一个key，cancelToken，cancelToken是 CancelToken的实例

2，实例的传参是一个函数，函数的参数是取消请求的方法

3，将这个方法透传到外层，可以在请求完成之前，随时取消请求。