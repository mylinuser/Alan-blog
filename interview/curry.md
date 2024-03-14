## 什么是函数柯里化
在数学和计算机科学中，柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。
举例来说，一个接收3个参数的普通函数，在进行柯里化后，
柯里化版本的函数接收一个参数并返回接收下一个参数的函数，
该函数返回一个接收第三个参数的函数。
最后一个函数在接收第三个参数后，
将之前接收到的三个参数应用于原普通函数中，并返回最终结果。

```js
const curry = (func, len = func.length, ...args) => {
  return function (...args2) {
    const totalArgs = [...args2, ...args];
    if (totalArgs.length >= len) {
      return func.apply(this, totalArgs);
    } else {
      return curry(func, len, ...totalArgs);
    }
  };
};
```
使用
```ts
<script setup>
import { curry } from "./utils";
import { onMounted } from "vue";

const a = (...args) => {
  return args.reduce((a, b) => a + b);
};

onMounted(() => {
  const func = curry(a, 7);
  console.log(1111, func(2, 3)(1, 2, 4, 5)(2));
});
</script>
```