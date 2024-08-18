# promiseA+

```js
/**
 * 1. new Promise时，需要传递一个 executor 执行器，执行器立刻执行
 * 2. executor 接受两个参数，分别是 resolve 和 reject
 * 3. promise 只能从 pending 到 rejected, 或者从 pending 到 fulfilled
 * 4. promise 的状态一旦确认，就不会再改变
 * 5. promise 都有 then 方法，then 接收两个参数，分别是 promise 成功的回调 onFulfilled, 
 *      和 promise 失败的回调 onRejected
 * 6. 如果调用 then 时，promise已经成功，则执行 onFulfilled，并将promise的值作为参数传递进去。
 *      如果promise已经失败，那么执行 onRejected, 并将 promise 失败的原因作为参数传递进去。
 *      如果promise的状态是pending，需要将onFulfilled和onRejected函数存放起来，等待状态确定后，再依次将对应的函数执行(发布订阅)
 * 7. then 的参数 onFulfilled 和 onRejected 可以缺省
 * 8. promise 可以then多次，promise 的then 方法返回一个 promise
 * 9. 如果 then 返回的是一个结果，那么就会把这个结果作为参数，传递给下一个then的成功的回调(onFulfilled)
 * 10. 如果 then 中抛出了异常，那么就会把这个异常作为参数，传递给下一个then的失败的回调(onRejected)
 * 11.如果 then 返回的是一个promise，那么会等这个promise执行完，promise如果成功，
 *   就走下一个then的成功，如果失败，就走下一个then的失败
 */

const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
function Promise(executor) {
    let self = this;
    self.status = PENDING;
    self.onFulfilled = [];//成功的回调
    self.onRejected = []; //失败的回调
    //PromiseA+ 2.1
    function resolve(value) {
        if (self.status === PENDING) {
            self.status = FULFILLED;
            self.value = value;
            self.onFulfilled.forEach(fn => fn());//PromiseA+ 2.2.6.1
        }
    }

    function reject(reason) {
        if (self.status === PENDING) {
            self.status = REJECTED;
            self.reason = reason;
            self.onRejected.forEach(fn => fn());//PromiseA+ 2.2.6.2
        }
    }

    try {
        executor(resolve, reject);
    } catch (e) {
        reject(e);
    }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
    //PromiseA+ 2.2.1 / PromiseA+ 2.2.5 / PromiseA+ 2.2.7.3 / PromiseA+ 2.2.7.4
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };
    let self = this;
    //PromiseA+ 2.2.7
    let promise2 = new Promise((resolve, reject) => {
        if (self.status === FULFILLED) {
            //PromiseA+ 2.2.2
            //PromiseA+ 2.2.4 --- setTimeout
            setTimeout(() => {
                try {
                    //PromiseA+ 2.2.7.1
                    let x = onFulfilled(self.value);
                    resolvePromise(promise2, x, resolve, reject);
                } catch (e) {
                    //PromiseA+ 2.2.7.2
                    reject(e);
                }
            });
        } else if (self.status === REJECTED) {
            //PromiseA+ 2.2.3
            setTimeout(() => {
                try {
                    let x = onRejected(self.reason);
                    resolvePromise(promise2, x, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            });
        } else if (self.status === PENDING) {
            self.onFulfilled.push(() => {
                setTimeout(() => {
                    try {
                        let x = onFulfilled(self.value);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                });
            });
            self.onRejected.push(() => {
                setTimeout(() => {
                    try {
                        let x = onRejected(self.reason);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                });
            });
        }
    });
    return promise2;
}

function resolvePromise(promise2, x, resolve, reject) {
    let self = this;
    //PromiseA+ 2.3.1
    if (promise2 === x) {
        reject(new TypeError('Chaining cycle'));
    }
    if (x && typeof x === 'object' || typeof x === 'function') {
        let used; //PromiseA+2.3.3.3.3 只能调用一次
        try {
            let then = x.then;
            if (typeof then === 'function') {
                //PromiseA+2.3.3
                then.call(x, (y) => {
                    //PromiseA+2.3.3.1
                    if (used) return;
                    used = true;
                    resolvePromise(promise2, y, resolve, reject);
                }, (r) => {
                    //PromiseA+2.3.3.2
                    if (used) return;
                    used = true;
                    reject(r);
                });

            }else{
                //PromiseA+2.3.3.4
                if (used) return;
                used = true;
                resolve(x);
            }
        } catch (e) {
            //PromiseA+ 2.3.3.2
            if (used) return;
            used = true;
            reject(e);
        }
    } else {
        //PromiseA+ 2.3.3.4
        resolve(x);
    }
}


Promise.defer = Promise.deferred = function () {
    let dfd = {};
    dfd.promise = new Promise((resolve, reject) => {
        dfd.resolve = resolve;
        dfd.reject = reject;
    });
    return dfd;
}


module.exports = Promise;


```

安装测试脚本:

```bash
npm install -g promises-aplus-tests
```

在对应的目录执行以下命令:
```bash
promises-aplus-tests promise.js
```


对上面的代码实现做一点简要说明(其它一些内容注释中已经写得很清楚):


onFulfilled 和 onFulfilled的调用需要放在setTimeout，因为规范中表示: onFulfilled or onRejected must not be called until the execution context stack contains only platform code。使用setTimeout只是模拟异步，原生Promise并非是这样实现的。


在 resolvePromise 的函数中，为何需要usedd这个flag,同样是因为规范中明确表示: If both resolvePromise and rejectPromise are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. 因此我们需要这样的flag来确保只会执行一次。


self.onFulfilled 和 self.onRejected 中存储了成功的回调和失败的回调，根据规范2.6显示，当promise从pending态改变的时候，需要按照顺序去指定then对应的回调。



## 2.1 Promise States

Promise 必须处于以下三个状态之一: pending, fulfilled 或者是 rejected
### 2.1.1 如果promise在pending状态
 代码解读复制代码2.1.1.1 可以变成 fulfilled 或者是 rejected

### 2.1.2 如果promise在fulfilled状态
 代码解读复制代码2.1.2.1 不会变成其它状态

### 2.1.2.2 必须有一个value值

### 2.1.3 如果promise在rejected状态
 代码解读复制代码2.1.3.1 不会变成其它状态

### 2.1.3.2 必须有一个promise被reject的reason

概括即是:promise的状态只能从pending变成fulfilled，或者从pending变成rejected.promise成功，有成功的value.promise失败的话，有失败的原因
## 2.2 then方法
promise必须提供一个then方法，来访问最终的结果
promise的then方法接收两个参数
 代码解读复制代码promise.then(onFulfilled, onRejected)
### 2.2.1 onFulfilled 和 onRejected 都是可选参数
 代码解读复制代码2.2.1.1 onFulfilled 必须是函数类型

### 2.2.1.2 onRejected 必须是函数类型

### 2.2.2 如果 onFulfilled 是函数:
 代码解读复制代码2.2.2.1 必须在promise变成 fulfilled 时，调用 onFulfilled，参数是promise的value
### 2.2.2.2 在promise的状态不是 fulfilled 之前，不能调用
### 2.2.2.3 onFulfilled 只能被调用一次

### 2.2.3 如果 onRejected 是函数:
 代码解读复制代码2.2.3.1 必须在promise变成 rejected 时，调用 onRejected，参数是promise的reason
### 2.2.3.2 在promise的状态不是 rejected 之前，不能调用
### 2.2.3.3 onRejected 只能被调用一次

### 2.2.4 onFulfilled 和 onRejected 应该是微任务
### 2.2.5 onFulfilled  和 onRejected 必须作为函数被调用
### 2.2.6 then方法可能被多次调用
 代码解读复制代码2.2.6.1 如果promise变成了 fulfilled态，所有的onFulfilled回调都需要按照then的顺序执行
### 2.2.6.2 如果promise变成了 rejected态，所有的onRejected回调都需要按照then的顺序执行

### 2.2.7 then必须返回一个promise
 代码解读复制代码promise2 = promise1.then(onFulfilled, onRejected);
 代码解读复制代码2.2.7.1 onFulfilled 或 onRejected 执行的结果为x,调用 resolvePromise
### 2.2.7.2 如果 onFulfilled 或者 onRejected 执行时抛出异常e,promise2需要被reject
### 2.2.7.3 如果 onFulfilled 不是一个函数，promise2 以promise1的值fulfilled
### 2.2.7.4 如果 onRejected 不是一个函数，promise2 以promise1的reason rejected

## 2.3 resolvePromise
resolvePromise(promise2, x, resolve, reject)
### 2.3.1 如果 promise2 和 x 相等，那么 reject promise with a TypeError
### 2.3.2 如果 x 是一个 promsie
 代码解读复制代码2.3.2.1 如果x是pending态，那么promise必须要在pending,直到 x 变成 fulfilled or rejected.
### 2.3.2.2 如果 x 被 fulfilled, fulfill promise with the same value.
### 2.3.2.3 如果 x 被 rejected, reject promise with the same reason.

### 2.3.3 如果 x 是一个 object 或者 是一个 function
 代码解读复制代码2.3.3.1 let then = x.then.
### 2.3.3.2 如果 x.then 这步出错，那么 reject promise with e as the reason..
### 2.3.3.3 如果 then 是一个函数，then.call(x, resolvePromiseFn, rejectPromise)
### 2.3.3.3.1 resolvePromiseFn 的 入参是 y, 执行 resolvePromise(promise2, y, resolve, reject);
### 2.3.3.3.2 rejectPromise 的 入参是 r, reject promise with r.
### 2.3.3.3.3 如果 resolvePromise 和 rejectPromise 都调用了，那么第一个调用优先，后面的调用忽略。
### 2.3.3.3.4 如果调用then抛出异常e 
### 2.3.3.3.4.1 如果 resolvePromise 或 rejectPromise 已经被调用，那么忽略
### 2.3.3.3.4.3 否则，reject promise with e as the reason
### 2.3.3.4 如果 then 不是一个function. fulfill promise with x.

### 2.3.4 如果 x 不是一个 object 或者 function，fulfill promise with x.
