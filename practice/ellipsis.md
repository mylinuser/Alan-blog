## CSS- 超出部分省略号显示

```css
display: -webkit-box; // webkit-box
text-overflow: ellipsis; // 显示方式 - 省略号
overflow: hidden; // 超出部分省略
-webkit-line-clamp: 1; // 超出一行省略
-webkit-box-orient: vertical; //上下垂直
white-space: nowrap; // 规定段落中的文本不进行换行

// 子标签
display: inline-block;
```

**text-overflow** 属性指定当文本溢出包含它的元素时，应该如何显示。可以设置溢出后，文本被剪切、显示省略号 (...) 或显示自定义字符串（不是所有浏览器都支持）。

**text-overflow的属性**

| clip | 剪切文本。 |
| --- | --- |
| ellipsis | 显示省略符号 ... 来代表被修剪的文本。 |
| string | 使用给定的字符串来代表被修剪的文本。 |
| initial | 设置为属性默认值。阅读关于 initial |
| inherit | 从父元素继承该属性值。 阅读关于 inherit |

**line-clamp**属性可以限制在一个块元素显示的文本的行数，为了实现该效果，它需要组合其他外来的WebKit属性，添加**-WebKit-**前缀。

**white-space的属性**

| normal | 默认。空白会被浏览器忽略。 |
| --- | --- |
| pre | 空白会被浏览器保留。其行为方式类似 HTML 中的 \<pre> 标签。 |
| nowrap | 文本不会换行，文本会在在同一行上继续，直到遇到 \<br> 标签为止。 |
| pre-wrap | 保留空白符序列，但是正常地进行换行。 |
| pre-line | 合并空白符序列，但是保留换行符。 |
| inherit | 规定应该从父元素继承 white-space 属性的值。 |