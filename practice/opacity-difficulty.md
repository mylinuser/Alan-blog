## opacity踩坑问题

css中经常会遇到设置了父元素的透明度，后会直接影响到子元素的透明度。
例如：

设置父元素opacity：0.5，子元素不设置opacity，子元素会受到父元素opacity的影响，也会有0.5的透明度。

即使设置子元素opacity：1，子元素的opacity：1 也是在父元素的opacity：0.5的基础上设置的，因此子元素的opacity还是0.5。

解决方法：为父元素设置background: rgba(0,0,0,0.5)。