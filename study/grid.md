## grid布局

【[阮一峰](https://www.ruanyifeng.com/)】https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html

```css
display: grid;

**// grid行内布局**
display: inline-grid;

**// grid-template-columns属性定义每一列的列宽**
grid-template-columns: 100px 100px 100px;

**// grid-template-rows属性定义每一行的行高**
grid-template-rows: 100px 100px 100px;

**// 按百分比**
grid-template-columns: 33.33% 33.33% 33.33%;

**// repeat关键字，代表3个33.3%**
grid-template-columns: **repeat**(3, 33.33%);

**// 希望每一行（或每一列）容纳尽可能多的单元格，这时可以使用auto-fill关键字表示自动填充**
grid-template-columns: **repeat**(**auto-fill**, 100px);

// **fr关键字,如果两列的宽度分别为1fr和2fr，就表示后者是前者的两倍。类似于flex：1**
grid-template-columns: 1**fr** 1**fr**;

// **minmax表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值。**
grid-template-columns: 1fr 1fr **minmax**(100px, 1fr);

**// auto关键字表示由浏览器自己决定长度。**
grid-template-columns: 100px **auto** 100px;

// **可以使用方括号，指定每一根网格线的名字，方便以后的引用。**
grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];

// **将左边栏设为70%，右边栏设为30%**
grid-template-columns: 70% 30%; 

// **grid-row-gap属性设置行与行的间隔（行间距），grid-column-gap属性设置列与列的间隔（列间距）**
grid-row-gap: 20px;
grid-column-gap: 20px;

// **上面一段 CSS 代码等同于下面的代码**
grid-gap: 20px 20px;

// **如果grid-gap省略了第二个值，浏览器认为第二个值等于第一个值**
grid-gap: 20px;

// **根据最新标准，上面三个属性名的grid-前缀已经删除，grid-column-gap和grid-row-gap写成column-gap和row-gap，grid-gap写成gap。**

// **网格布局允许指定"区域"，一个区域由单个或多个单元格组成。grid-template-areas属性用于定义区域。
grid-template-areas: 'a b c'
                     'd e f'
                     'g h i';

// 多个单元格合并成一个区域的写法如下**
grid-template-areas: 'a a a'
                     'b b b'
                     'c c c';

**// 如果某些区域不需要利用，则使用"点"（.）表示**
grid-template-areas: 'a . c'
                     'd . f'
                     'g . i';

**// 默认值是row，即"先行后列"。也可以将它设成column，变成"先列后行"**
grid-auto-flow: column;

**// 如果将设置改为column dense，表示"先列后行"，并且尽量填满空格**
grid-auto-flow: column dense;

**// 如果将设置改为column dense，表示"先列后行"，并且尽量填满空格**
grid-auto-flow: column dense;

// **justify-items属性设置单元格内容的水平位置（左中右），align-items属性设置单元格内容的垂直位置（上中下）
justify-items: start | end | center | stretch;
align-items: start | end | center | stretch;

start：对齐单元格的起始边缘
end：对齐单元格的结束边缘
center：单元格内部居中
stretch：拉伸，占满单元格的整个宽度（默认值）**

// **place-items属性是align-items属性和justify-items属性的合并简写形式**
place-items: start end;

// **justify-content属性是整个内容区域在容器里面的水平位置（左中右），align-content属性是整个内容区域的垂直位置（上中下）**
justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
align-content: start | end | center | stretch | space-around | space-between | space-evenly;

**start - 对齐容器的起始边框
end - 对齐容器的结束边框
center - 容器内部居中
stretch - 项目大小没有指定时，拉伸占据整个网格容器
space-around - 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与容器边框的间隔大一倍
space-between - 项目与项目的间隔相等，项目与容器边框之间没有间隔
space-evenly - 项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔

// place-content属性是align-content属性和justify-content属性的合并简写形式。**
place-content: space-around space-evenly;
```