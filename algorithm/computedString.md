加法

```js
const twoSum = (str1, str2) => {
  const isNegative1 = str1[0] === "-";
  const isNegative2 = str2[0] === "-";
  let result = "";
  const n = str1.length;
  const n2 = str2.length;
  let left = n - 1;
  let right = n2 - 1;
  let carry = 0;

  if (isNegative1 && !isNegative2) {
    return subtraction(str2, str1.slice(1));
  } else if (!isNegative1 && isNegative2) {
    return subtraction(str1, str2.slice(1));
  } else {
    while (left >= 0 || right >= 0) {
      const num1 = parseInt(str1[left] ?? 0);
      const num2 = parseInt(str2[right] ?? 0);
      const sum = num1 + num2 + carry;
      carry = Math.floor(sum / 10);
      const value = sum % 10;
      result = value + result;
      left--;
      right--;
    }
  }

  if (carry > 0) {
    result = carry + result;
  }
  if (isNegative1 && isNegative1) {
    return "-" + result;
  }

  return result;
};
```
减法
```js
const subtraction = (str1, str2) => {
  const isNegative1 = str1[0] === "-";
  const isNegative2 = str2[0] === "-";
  let result = "";
  const n = str1.length;
  const n2 = str2.length;
  let left = n - 1;
  let right = n2 - 1;
  let borrow = 0;

  if (isNegative1 && !isNegative2) {
    return "-" + twoSum(str1.slice(1), str2);
  } else if (!isNegative1 && isNegative2) {
    return twoSum(str1, str2.slice(1));
  } else if (isNegative1 && isNegative2) {
    return subtraction(str2.slice(1), str1.slice(1));
  } else {
    if (n < n2) {
      return "-" + subtraction(str2, str1);
    }
    while (left >= 0 || right >= 0) {
      const num1 = parseInt(str1[left] ?? 0);
      const num2 = parseInt(str2[right] ?? 0);
      let diff = num1 - num2 - borrow;
      if (diff < 0) {
        diff = 10 + diff;
        borrow = 1;
      } else {
        borrow = 0;
      }
      result = diff + result;
      left--;
      right--;
    }
  }
  if (borrow > 0) {
    result =
      "-" +
      subtraction(borrow + new Array(result.length).fill(0).join(""), result);
  }
  while (result[0] === "0" && result.length > 1) {
    result = result.slice(1);
  }
  return result;
};
```