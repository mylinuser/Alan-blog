## 介绍
EventBus是事件总线的意思，其实就和发布订阅模式非常类似，在一个地方通过on方法注册一个事件，然后在其他页面通过emit方法远程调用之前on里面注册的方法。EventBus经常用到跨组件通信。

## 实现
在Vue2里面可以直接通过以下方法创建事件总线（又叫EventBus或者EventEmitter）
```
const EventBus = new Vue()
```
在Vue3以后，就不可以通过以上方式来创建EventBus了，所以我们不妨自己来写一个。
以下是一个网上参考版本
```ts
// eventBus.ts
class EventBus {
    constructor() {
        this.eventList = new Map();
    }
    // 注册时间
    on(event, callback) {
        if(!this.eventList.has(event)) {
            this.eventList.set(event, []);
        }
        this.eventList.get(event).push(callback);
    }
    // 触发时间
    emit(event, ...args) {
        if(this.eventList.has(event)) {
            this.eventList.get(event).forEach(listener => listener(...args));
        }
    }
    // 注销事件
    off(event, callback) {
        if(this.eventList.has(event)) {
            if(callback) {
                const newEventList = this.eventList.get(event).filter(listener => listener !== callback));
                this.eventList.set(event, newEventList);
            }
        }
    }
    // 只执行一次
    once(event, callback) {
        let once = (...args) => {
            callback(...args);
            this.off(event, once);
        }
        this.on(event, once);
    }
}
export const bus = new EventBus();
```
## 使用方法
以下演示一下在Vue3中的使用方法
```ts
// a.vue
<script>
import { bus } from '@/units/eventBus';

const showDialog = ref();

onMounted(() => {
    bus.on('showDialog', (visible: boolean) => {
        showDialog.value = visible
    })
})
</script>

<template>
    <Dialog v-if="showDialog" />
</template>
```
```ts
// b.vue
<script>
import { bus } from '@/units/eventBus';

const handleClick = () => {
    bus.emit('showDialog', true);
}
</script>

<template>
    <button @click="handleClick">test</button>
</template>
```
以上案例，当按钮点击的时候，将会触发EventBus，展示Dialog组件，实现远程控制组件的加载。