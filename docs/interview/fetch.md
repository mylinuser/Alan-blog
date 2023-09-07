## Fetch

## **abort**

由于Promise的限制, fetch 并不支持原生的abort机制, 但这并不妨碍我们使用 Promise.race() 实现一个.

```css
romise.race(iterable) 方法返回一个Promise对象, 只要 iterable 中任意一个Promise 被 resolve 或者 reject 后, 外部的Promise 就会以相同的值被 resolve 或者 reject.
```

支持性:: 从 chrome33, Firefox29, Safari7.1, Opera20, EdgeHTML12(并非Edge版本) 起, Promise就被完整的支持. Promise.race()也随之可用. 下面我们来看下实现.

```css
var _fetch = (function(fetch){
  return function(url,options){
    var abort = null;
    var abort_promise = new Promise((resolve, reject)=>{
      abort = () => {
        reject('abort.');
        console.info('abort done.');
      };
    });
    var promise = Promise.race([
      fetch(url,options),
      abort_promise
    ]);
    promise.abort = abort;
    return promise;
  };
})(fetch);

var p = _fetch('https://www.baidu.com',{mode:'no-cors'});
p.then(function(res) {
    console.log('response:', res);
}, function(e) {
    console.log('error:', e);
});
p.abort();
//"abort done."
//"error: abort."
```