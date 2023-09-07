## 小程序分享功能

```css
import { useShareAppMessage } from '@tarojs/taro';

import shareUtil from '@/wxat-common/utils/share';

useShareAppMessage(shareUtil.buildShareCurrentPage);

// open-type="share" 给按钮添加这句代码，点击按钮的时候可以弹出分享框
<WKButton open-type="share">
    <WKIcon icon="share" color="#999" />
</WKButton>
```

### **useShareAppMessage**

监听用户点击页面内转发按钮（Button 组件 openType='share'）或右上角菜单“转发”按钮的行为，并自定义转发内容。等同于 `onShareAppMessage`页面生命周期钩子。

**【Breaking】Taro 3.0.3 开始，使用此 Hook 时必须为页面配置 `enableShareAppMessage: true`。（修改配置文件后请重新编译项目）**

```css
// page.js
function Index () {
  useShareAppMessage(res => {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123'
    }
  })
}
// page.config.js
export default {
  enableShareAppMessage: true
}
```