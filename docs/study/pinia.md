main.ts

```jsx
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

const pinia = createPinia()

const app = createApp(App)

app.use(pinia)

app.mount('#app')
```

index.ts

```jsx
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      count: 1,
      foo: 'bar',
      arr: [1, 2, 3]
    }
  },

  getters: {
    count10(state) {
      return state.count + 10
    }
  },

  actions: {
    addCount(num: number) {
      this.arr.push(num)
    }
  }
})
```

.vue

```jsx
<template>
<p>{{count}}</p>
<p>{{foo}}</p>
<p>{{arr}}</p>
<p>{{count10}}</p>
<button @click="handleChange">修改数据</button>
</template>

<script lang="ts" setup>
import { useCounterStore } from '../store';
import {storeToRefs} from 'pinia'
const countStore = useCounterStore()
const {count,foo,arr,count10} = storeToRefs(countStore)
const handleChange = () => {
  // countStore.$patch({
  //   count:count.value+2,
  //   foo:foo.value+'hello'+count.value
  // })
  countStore.addCount(10)
}
</script>
```