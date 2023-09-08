## 二维数组旋转变成一维数组

```jsx
function flat(array){
    const res = [];    
    let x = 0; // x轴指针
    let y = 0; // y轴指针

    let xLength = array.length - 1; // x轴长度
    let yLength = array[0].length -1; // y轴长度

    let count = 0; // 记录数组数字个数
    const all = array.length*array[0].length

    while (count < all) {
      for(let i = x, j = y; j <= yLength; j++) { // 左到右
          res.push(array[i][j])
          count++
      }
      x++;

      for(let i = x, j = yLength; i <= xLength; i++) { // 上到下
          res.push(array[i][j])
          count++
      }
      yLength--;

      for(let i = xLength, j = yLength; j >= y; j--) { // 右到左
          res.push(array[i][j])
          count++
      }
      xLength--;

      for(let j = y, i = xLength; i >= x; i--) { // 下到上
          res.push(array[i][j])
          count++
      }
      y++;
    }
    console.log(res)
}
```