```
const deepMapClone = (obj, map = new WeakMap()) => {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  if (map.has(obj)) {
    return map.get(obj);
  }

  const result = Array.isArray(obj) ? [] : {};

  map.set(obj, result);

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepMapClone(obj[key], map);
    }
  }

  return result;
};

```