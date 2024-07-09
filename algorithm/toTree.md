## 效果
```
let arr = [
  {
    id: 1,
    pid: 0,
    name: "body",
  },
  {
    id: 2,
    pid: 1,
    name: "title",
  },
  {
    id: 3,
    pid: 2,
    name: "div",
  },
];
```
转换
```
[
  {
    id: 1,
    pid: 0,
    name: "body",
    children: [
      {
        id: 2,
        pid: 1,
        name: "title",
        children: [{ id: 3, pid: 2, name: "div" }],
      },
    ],
  },
];
```



## 实现
```js
const toTree = (arr) => {
  const result = [];
  const map = new Map();

  arr.forEach((item) => {
    map.set(item.id, item);
  });
  arr.forEach((item) => {
    const parent = map.get(item.pid);
    if (parent) {
      if (!parent?.children) {
        parent.children = [];
      }
      parent.children.push(item);
    } else {
      result.push(item);
    }
  });
  return result;
};
```