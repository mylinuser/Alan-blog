## 实现一个简单的async/await
我们掌握了Generator函数的使用方法。async/await语法糖就是使用Generator函数+自动执行器来运作的。 我们可以参考以下例子

```ts
// 定义了一个promise，用来模拟异步请求，作用是传入参数++
function getNum(num){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num+1)
        }, 1000)
    })
}

//自动执行器，如果一个Generator函数没有执行完，则递归调用
function asyncFun(func){
  var gen = func();

  function next(data){
    var result = gen.next(data);
    if (result.done) return result.value;
    result.value.then(function(data){
      next(data);
    });
  }

  next();
}

// 所需要执行的Generator函数，内部的数据在执行完成一步的promise之后，再调用下一步
var func = function* (){
  var f1 = yield getNum(1);
  var f2 = yield getNum(f1);
  console.log(f2) ;
};
asyncFun(func);
```
在执行的过程中，判断一个函数的promise是否完成，如果已经完成，将结果传入下一个函数，继续重复此步骤。

async/await非常好理解，基本理解了Generator函数之后，几句话就可以描述清楚。这里没有过多的继续阐述Generator函数的内部执行逻辑及原理。