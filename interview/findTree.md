## 寻找特定树结构节点

## 实现
```js
const findNum = (target, data) => {
  const map = new Map();
  const helper = (path, data) => {
    data.forEach((item) => {
      const newPath = [...path];
      newPath.push(item.id);
      map.set(item.id, newPath);
      if (item?.children?.length) {
        helper(newPath, item.children);
      }
    });
  };
  helper([], data);
  console.log(11, map);
  return map.get(target);
};
```
循环整棵树，一直记录当前节点的路径，最后返回目标节点记录的路径就可以
## 效果
```js
<script setup>
import { onMounted } from "vue";
import { findNum } from "./utils";

const treeData = [
  {
    id: 1,
    name: "jj1",
    children: [
      { id: 2, name: "jj2", children: [{ id: 4, name: "jj4" }] },
      {
        id: 3,
        name: "jj3",
        children: [
          { id: 8, name: "jj8", children: [{ id: 5, name: "jj5" }] },
          { id: 9, name: "jj9", children: [] },
          { id: 10, name: "jj10", children: [] },
        ],
      },
    ],
  },
];

onMounted(() => {
  console.log(1111, findNum(8, treeData)); // [1, 3, 8]
});
</script>
```