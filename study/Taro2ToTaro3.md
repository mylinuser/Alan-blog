# Taro2 to Taro3

## API变更
```ts
// old
import Taro, { useDidShow, useDidHide, useState, useEffect } from '@tarojs/taro'

// new 
import React, { useState, useEffect } from 'react'
import Taro, { useDidShow, useDidHide } from '@tarojs/taro'
```

## containView引入去掉{}
```ts
// old
import { ContainView } from '@/providers/basisProvider/components/ContainView'

// new
import ContainView from '@/providers/basisProvider/components/ContainView'
```

## 基础组件必须声明，如View、Image、Text...
```ts
// 项目使用到的组件，必须引入
import { View, Image, Text, ScrollView } from "@tarojs/components";
```

## 组件、页面，return不能返回undefined 或者不写return
```ts
return (
    isShowBall && (
      <View className="hx-signIn-ball" onClick={ toHaiXin }>
        ...
      </View>
    )
  )
  
// new  
return (
    isShowBall ? (
      <View className="hx-signIn-ball" onClick={ toHaiXin }>
        ...
      </View>
    ): <View />
  )  
```

## class组件、页面，必须声明state
```ts
export default class Index extends Component {
  // 若有使用到this.state，则必须声明
  state = { }
}
```

## 组件引入必须以大写开头
```ts
// old
import idCardCheckModal from '@/module-basis/components/idCardCheckModal'

// new
import IdCardCheckModal from '@/module-basis/components/idCardCheckModal'
```

## 数字0不是false
```ts
const num = 0

// old
return num && <View></View>

// new
return num !== 0 && <View></View>
```

## Taro.createSelectorQuery使用
```ts
// old
const query = Taro.createSelectorQuery().in(scope)

// new 
const query = Taro.createSelectorQuery()
```

## 页面获取传入参数
```ts
// old
const params = this.$router.params

// new
const params = Taro.getCurrentInstance().router.params
```
## boolean值的返回
- 请确保 && 两侧的值都是boolean值，否则会报一个错误信息：Cannot read property '__wxElement' of null

## 页面中使用fragments导致元素不可见
```ts
使用Block标签代替
// old 
  <fragments> <View>xxx</View></fragments>
    
// new
  <Block> <View></View></Block>
```
## 页面跳转参数不会自动decode
- 需要自己手动对全部参数decode或者按需对encode会发生变化的参数decode
- 为了方便，进行全局封装，使用util中的decodeObject方法
  
```ts
this.$instance.router.params  // 获取带过来的参数时 taro2原生页面跳转会自动decode 但是taro3不会
```

## aro2样式隔离
Taro3中没有自定义组件 所以样式不隔离了,得采用BEM写法或使用CSS Module

## id、className属性传递变化
因为taro3中没有自定义控件了(除非层级过深 或手动指定)，因此给组件设置的id、className不会展示在dom上，需要透传到内部的真实dom上

## 获取路由参数
跳转成功后，在目标页面的生命周期方法中，可以通过 Taro.getCurrentInstance().router.params 获取路由参数

按照官方文档，在页面开头去$instance =getCurrentInstance()，页面跳转的时候若会执行router.params,就会报错

解决方案： 在页面一开始的时候，就去处router.params的值作为一个变量，routerParams = getCurrentInstance().router.params

hooks组件中可以换成useRouter https://taro-docs.jd.com/docs/hooks#userouter(opens new window)

## 判空写法
在Taro3中，可以使用?.的形式语法糖，进行判空取值

## 在Taro3中，ScrollView横向滚动时，会出现滚动条且不会隐藏， 可通过设置css隐藏
::-webkit-scrollbar {
  display: none; //设置隐藏
  width: 0 !important; //设置大小
  height: 0 !important; //设置大小
  -webkit-appearance: none;
  background: transparent;
}
## 在Taro3中频繁setState会造成页面卡顿可以尝试解决
https://taro-docs.jd.com/taro/docs/optimized#2-customwrapper-%E7%BB%84%E4%BB%B6(opens new window)

## button onclick this指向的问题
handleBack this指向了button而不是页面，导致报错。所以这里取参数会报错，所以handleBack得用箭头函数

## 埋点sdk使用方式修改
1. scope使用Taro.getCurrentInstance().page。
2. element中，若页面使用了cssModule，需要改成cssModule格式。
3. root使用的id、className，确定在dom中存在。因为Taro3中没有自定义控件了，因此给组件设置的id、className不会展示在dom上，需要透传到内部的View上