# 监控埋点

## 为什么使用前端埋点？

主要是为了收集产品数据，它的目的是上报相关行为数据，相关人员以数据为依据来分析产品在用户端的使用情况，根据分析出来的结果辅助产品优化、迭代、以及新需求的开发。

## 目前项目埋点方面存在的痛点？

1. 逻辑复用问题：特别是曝光相关的点需要在业务代码里面做额外的处理，所以逻辑复用很困难，对现有代码的侵入也很严重；

2. 埋点在多个项目中分散存在，维护会比较麻烦。

## 前端埋点方案

目前主要有 3 种方案：
### 手动代码埋点：用户触发某个动作后手动上报数据

优点：是最准确的，可以满足很多定制化的需求。

缺点：埋点逻辑与业务代码耦合到一起，不利于代码维护和复用。

### 可视化埋点：通过可视化工具配置采集节点，指定自己想要监测的元素和属性。核心是查找 dom 然后绑定事件，业界比较有名的是 Mixpanel、GrowingIO、神策

优点：可以做到按需配置，又不会像全埋点那样产生大量的无用数据。

缺点：比较难加载一些运行时参数；页面结构发生变化的时候，可能就需要进行部分重新配置。

### 无埋点：也叫“全埋点”，前端自动采集全部事件并上报埋点数据，在后端数据计算时过滤出有用数据

优点：收集用户的所有的行为，很全面。

缺点：无效的数据很多、上报数据量大。


## 埋点方式

按照获取数据的方式一般分为三类：

页面埋点：统计用户进入或离开页面的各种维度信息，如页面浏览次数（PV）、浏览页面人数（UV）、页面停留时间、浏览器信息等。

点击埋点：统计用户在应用内的每一次点击事件，如报价列表的浏览次数、再次询价的次数等。

曝光埋点：统计具体区域是否被用户浏览到，如活动的引流入口的显示、投放广告的显示等

## 埋点方案

目前我们项目中埋点需求主要有，点击埋点（dom点击）、页面埋点（主要是pv）。再根据我们目前选用的vue技术栈，所以考虑了以下两种实现方式：组件方式或者指令方式

点击埋点开始的是想提供一个组件，包裹需要进行点击埋点的 dom 元素，也有可能是组件，然后给子元素绑定点击事件，当用户触发事件时进行埋点相关处理。

但是这样就必须绑定点击事件到 dom 上，但是又不想在文档结构中引入额外的 dom 元素，因为这会增加 dom 结构层级，层级会变得更复杂。

所以最终采用了自定义指令的方式。

```ts
const Point = {}

Point.install = Vue => {
  Vue.directive('point', {
    inserted (el, binding) {
      const data = binding.value
      if (data) {
        const { key, type } = data
        handler[type](key, el)
      } else {
        throw new Error('请补充正确的埋点参数')
      }
    }
  }, false)
}

export default Point



<!-- 点击埋点 -->
<el-button v-point="{key: 'additionalInquiryClickKey', type: 'click'}">追加</el-button>
<!-- 页面pv埋点: section为页面根元素 -->
<section class="additional-inquiry" v-point="{key: 'additionalInquiryKey', type: 'pv'}">

```


## 优化方向

考虑用`IntersectionObserver` 来优化页面埋点，因为 IntersectionObserver 监听 dom 元素进入可视区域，当元素进入可视区域时触发回调函数，可以用来做页面埋点。

```ts
const options = {
    root: null, //默认浏览器视窗
    threshold: 1 //元素完全出现在浏览器视窗内才执行callback函数。
}
const callback =(entries, observer) => {
  entries.forEach(entry => {})
}
const observer = new IntersectionObserver(callback, options)
const addListenner = (ele, binding) => {
 observer.observe(ele)
}
const removeListener = (ele) => {
  observer.unobserve(ele)
}
//自定义曝光指令
Vue.directive('point', {
  bind: addListenner,
  unbind: removeListener
})
```

注意，我们需要创建一个list将已经上报过的埋点信息记录下来，防止重复曝光。

```ts
let pointList = []; //记录已经上报过的埋点信息
const addListenner = (ele, binding) => {
 if(pointList.indexOf(binding.value) !== -1) return

 observer.observe(ele)
}
```

我们将要上报的信息绑定在目标元素的 'point-data' 属性中，当目标元素出现在视窗内时，并停留 5 秒以上(或者规定记录秒数时)时，上报埋点信息。

```ts
let timer = {} //增加定时器对象
const callback = entries => {
  entries.forEach(entry => {
    let pointData = null
    try {
      pointData = JSON.parse(entry.target.getAttribute('point-data'))
    } catch (e) {
      pointData = null
      console.error('埋点数据格式异常', e)
    }
    //没有埋点数据取消上报
    if (!pointData) {
      observer.unobserve(entry.target)
      return
    }

    if (entry.isIntersecting) {
      timer[pointData.id] = setTimeout(function() {
        //上报埋点信息
        sendUtm(pointData).then(res => {
          if (res.success) {
            //上报成功后取消监听
            observer.unobserve(entry.target)
            visuallyList.push(pointData.id)
            timer[pointData.id] = null
          }
        })
      }, 5000)
  } else {
    if (timer[pointData.id]) {
      clearTimeout(timer[pointData.id])
      timer[pointData.id] = null
    }
  }
  })
}
```
在代码中可以直接使用指令实现曝光埋点了：

```html
<div v-point="pointData.id" :point-data="JSON.stringify(pointData)"></div>
```


## 数据怎么去重

从`error`里面的`message`和`stack`组成`key`，根据这个`key`去重

## 数据格式

