##  普通的修改props值方式
使用v-model:XXX=""和emit('update:XXX', value)方式，这样需要去watch props.XXX的变化然后emit

## 使用useVModel
```ts
import { computed } from "vue";

const cacheMap = new WeakMap();

export const useVModel = (props, propsName, emit) => {
  return computed({
    get() {
      if (cacheMap.has(props[propsName])) {
        return cacheMap.get(props[propsName]);
      }
      const proxy = new Proxy(props[propsName], {
        get(target, key) {
          return Reflect.get(target, key);
        },
        set(target, key, value) {
          emit(`update:${propsName}`, {
            ...target,
            [key]: value,
          });
          return true;
        },
      });
      cacheMap.set(props[propsName], proxy);
      return proxy;
    },
    set(val) {
      emit(`update:${propsName}`, val);
    },
  });
};
```

```ts
interface studentType {
  name: string
  age: number
}
const props = defineProps({
  student: studentType
})

const propsValue = useVModel(props, 'student', emit)
```