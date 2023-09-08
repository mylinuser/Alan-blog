import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.82e0a936.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"study/grid.md","filePath":"study/grid.md","lastUpdated":1694189773000}'),p={name:"study/grid.md"},o=l(`<h2 id="grid布局" tabindex="-1">grid布局 <a class="header-anchor" href="#grid布局" aria-label="Permalink to &quot;grid布局&quot;">​</a></h2><p>【<a href="https://www.ruanyifeng.com/" target="_blank" rel="noreferrer">阮一峰</a>】<a href="https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html" target="_blank" rel="noreferrer">https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html</a></p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#DBD7CAEE;">display: grid;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">**</span><span style="color:#DBD7CAEE;">// grid行内布局</span><span style="color:#4D9375;">**</span></span>
<span class="line"><span style="color:#DBD7CAEE;">display: </span><span style="color:#4D9375;">inline-grid</span><span style="color:#DBD7CAEE;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">**</span><span style="color:#DBD7CAEE;">// </span><span style="color:#4D9375;">grid-template-columns属性定义每一列的列宽**</span></span>
<span class="line"><span style="color:#4D9375;">grid-template-columns</span><span style="color:#DBD7CAEE;">: 100px 100px 100px;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">**</span><span style="color:#DBD7CAEE;">// </span><span style="color:#4D9375;">grid-template-rows属性定义每一行的行高**</span></span>
<span class="line"><span style="color:#4D9375;">grid-template-rows</span><span style="color:#DBD7CAEE;">: 100px 100px 100px;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">**</span><span style="color:#DBD7CAEE;">// 按百分比</span><span style="color:#4D9375;">**</span></span>
<span class="line"><span style="color:#4D9375;">grid-template-columns</span><span style="color:#DBD7CAEE;">: 33.33% 33.33% 33.33%;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">**</span><span style="color:#DBD7CAEE;">// repeat关键字，代表3个33.3%</span><span style="color:#4D9375;">**</span></span>
<span class="line"><span style="color:#4D9375;">grid-template-columns</span><span style="color:#DBD7CAEE;">: </span><span style="color:#4D9375;">**</span><span style="color:#DBD7CAEE;">repeat</span><span style="color:#4D9375;">**</span><span style="color:#DBD7CAEE;">(3</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> 33.33%);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">**</span><span style="color:#DBD7CAEE;">// 希望每一行（或每一列）容纳尽可能多的单元格，这时可以使用auto-fill关键字表示自动填充</span><span style="color:#4D9375;">**</span></span>
<span class="line"><span style="color:#4D9375;">grid-template-columns</span><span style="color:#DBD7CAEE;">: </span><span style="color:#4D9375;">**</span><span style="color:#DBD7CAEE;">repeat</span><span style="color:#4D9375;">**</span><span style="color:#DBD7CAEE;">(</span><span style="color:#4D9375;">**auto-fill**</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> 100px);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">// </span><span style="color:#4D9375;">**</span><span style="color:#DBD7CAEE;">fr关键字</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;">如果两列的宽度分别为1fr和2fr，就表示后者是前者的两倍。类似于flex：1</span><span style="color:#4D9375;">**</span></span>
<span class="line"><span style="color:#4D9375;">grid-template-columns</span><span style="color:#DBD7CAEE;">: 1</span><span style="color:#4D9375;">**</span><span style="color:#DBD7CAEE;">fr</span><span style="color:#4D9375;">**</span><span style="color:#DBD7CAEE;"> 1</span><span style="color:#4D9375;">**</span><span style="color:#DBD7CAEE;">fr</span><span style="color:#4D9375;">**</span><span style="color:#DBD7CAEE;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">// </span><span style="color:#4D9375;">**</span><span style="color:#DBD7CAEE;">minmax表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值。</span><span style="color:#4D9375;">**</span></span>
<span class="line"><span style="color:#4D9375;">grid-template-columns</span><span style="color:#DBD7CAEE;">: 1fr 1fr </span><span style="color:#4D9375;">**</span><span style="color:#DBD7CAEE;">minmax</span><span style="color:#4D9375;">**</span><span style="color:#DBD7CAEE;">(100px</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> 1fr);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">**</span><span style="color:#DBD7CAEE;">// auto关键字表示由浏览器自己决定长度。</span><span style="color:#4D9375;">**</span></span>
<span class="line"><span style="color:#4D9375;">grid-template-columns</span><span style="color:#DBD7CAEE;">: 100px </span><span style="color:#4D9375;">**</span><span style="color:#DBD7CAEE;">auto</span><span style="color:#4D9375;">**</span><span style="color:#DBD7CAEE;"> 100px;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">// </span><span style="color:#4D9375;">**</span><span style="color:#DBD7CAEE;">可以使用方括号，指定每一根网格线的名字，方便以后的引用。</span><span style="color:#4D9375;">**</span></span>
<span class="line"><span style="color:#4D9375;">grid-template-columns</span><span style="color:#DBD7CAEE;">: </span><span style="color:#666666;">[</span><span style="color:#BD976A;">c1</span><span style="color:#666666;">]</span><span style="color:#DBD7CAEE;"> 100px </span><span style="color:#666666;">[</span><span style="color:#BD976A;">c2</span><span style="color:#666666;">]</span><span style="color:#DBD7CAEE;"> 100px </span><span style="color:#666666;">[</span><span style="color:#BD976A;">c3</span><span style="color:#666666;">]</span><span style="color:#DBD7CAEE;"> auto </span><span style="color:#666666;">[</span><span style="color:#BD976A;">c4</span><span style="color:#666666;">]</span><span style="color:#DBD7CAEE;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">// </span><span style="color:#4D9375;">**</span><span style="color:#DBD7CAEE;">将左边栏设为70%，右边栏设为30%</span><span style="color:#4D9375;">**</span></span>
<span class="line"><span style="color:#4D9375;">grid-template-columns</span><span style="color:#DBD7CAEE;">: 70% 30%; </span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">// </span><span style="color:#4D9375;">**grid-row-gap属性设置行与行的间隔</span><span style="color:#DBD7CAEE;">（行间距），</span><span style="color:#4D9375;">grid-column-gap属性设置列与列的间隔</span><span style="color:#DBD7CAEE;">（列间距）</span><span style="color:#4D9375;">**</span></span>
<span class="line"><span style="color:#4D9375;">grid-row-gap</span><span style="color:#DBD7CAEE;">: 20px;</span></span>
<span class="line"><span style="color:#4D9375;">grid-column-gap</span><span style="color:#DBD7CAEE;">: 20px;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">// </span><span style="color:#4D9375;">**</span><span style="color:#DBD7CAEE;">上面一段 CSS 代码等同于下面的代码</span><span style="color:#4D9375;">**</span></span>
<span class="line"><span style="color:#4D9375;">grid-gap</span><span style="color:#DBD7CAEE;">: 20px 20px;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">// </span><span style="color:#4D9375;">**</span><span style="color:#DBD7CAEE;">如果grid-gap省略了第二个值，浏览器认为第二个值等于第一个值</span><span style="color:#4D9375;">**</span></span>
<span class="line"><span style="color:#4D9375;">grid-gap</span><span style="color:#DBD7CAEE;">: 20px;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">// </span><span style="color:#4D9375;">**</span><span style="color:#DBD7CAEE;">根据最新标准，上面三个属性名的grid-前缀已经删除，</span><span style="color:#4D9375;">grid-column-gap和grid-row-gap写成column-gap和row-gap</span><span style="color:#DBD7CAEE;">，</span><span style="color:#4D9375;">grid-gap写成gap</span><span style="color:#DBD7CAEE;">。</span><span style="color:#4D9375;">**</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">// </span><span style="color:#4D9375;">**</span><span style="color:#DBD7CAEE;">网格布局允许指定&quot;区域&quot;，一个区域由单个或多个单元格组成。</span><span style="color:#4D9375;">grid-template-areas属性用于定义区域</span><span style="color:#DBD7CAEE;">。</span></span>
<span class="line"><span style="color:#4D9375;">grid-template-areas</span><span style="color:#DBD7CAEE;">: &#39;</span><span style="color:#4D9375;">a</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">b</span><span style="color:#DBD7CAEE;"> c&#39;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">                     &#39;d e f&#39;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">                     &#39;</span><span style="color:#4D9375;">g</span><span style="color:#DBD7CAEE;"> h i&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">// 多个单元格合并成一个区域的写法如下</span><span style="color:#4D9375;">**</span></span>
<span class="line"><span style="color:#4D9375;">grid-template-areas</span><span style="color:#DBD7CAEE;">: &#39;</span><span style="color:#4D9375;">a</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">a</span><span style="color:#DBD7CAEE;"> a&#39;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">                     &#39;</span><span style="color:#4D9375;">b</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">b</span><span style="color:#DBD7CAEE;"> b&#39;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">                     &#39;c c c&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">**</span><span style="color:#DBD7CAEE;">// 如果某些区域不需要利用，则使用&quot;点&quot;（</span><span style="color:#666666;font-style:italic;">.</span><span style="color:#FDAEB7;font-style:italic;">）表示**</span></span>
<span class="line"><span style="color:#4D9375;">grid-template-areas</span><span style="color:#DBD7CAEE;">: &#39;</span><span style="color:#4D9375;">a</span><span style="color:#DBD7CAEE;"> . c&#39;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">                     &#39;d . f&#39;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">                     &#39;</span><span style="color:#4D9375;">g</span><span style="color:#DBD7CAEE;"> . i&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">**</span><span style="color:#DBD7CAEE;">// 默认值是row，即&quot;先行后列&quot;。也可以将它设成column，变成&quot;先列后行&quot;</span><span style="color:#4D9375;">**</span></span>
<span class="line"><span style="color:#4D9375;">grid-auto-flow</span><span style="color:#DBD7CAEE;">: column;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">**</span><span style="color:#DBD7CAEE;">// 如果将设置改为column dense，表示&quot;先列后行&quot;，并且尽量填满空格</span><span style="color:#4D9375;">**</span></span>
<span class="line"><span style="color:#4D9375;">grid-auto-flow</span><span style="color:#DBD7CAEE;">: column dense;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">**</span><span style="color:#DBD7CAEE;">// 如果将设置改为column dense，表示&quot;先列后行&quot;，并且尽量填满空格</span><span style="color:#4D9375;">**</span></span>
<span class="line"><span style="color:#4D9375;">grid-auto-flow</span><span style="color:#DBD7CAEE;">: column dense;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">// </span><span style="color:#4D9375;">**justify-items属性设置单元格内容的水平位置</span><span style="color:#DBD7CAEE;">（左中右），</span><span style="color:#4D9375;">align-items属性设置单元格内容的垂直位置</span><span style="color:#DBD7CAEE;">（上中下）</span></span>
<span class="line"><span style="color:#4D9375;">justify-items</span><span style="color:#DBD7CAEE;">: start </span><span style="color:#666666;">|</span><span style="color:#DBD7CAEE;"> end </span><span style="color:#666666;">|</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">center</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">|</span><span style="color:#DBD7CAEE;"> stretch;</span></span>
<span class="line"><span style="color:#4D9375;">align-items</span><span style="color:#DBD7CAEE;">: start </span><span style="color:#666666;">|</span><span style="color:#DBD7CAEE;"> end </span><span style="color:#666666;">|</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">center</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">|</span><span style="color:#DBD7CAEE;"> stretch;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">start：对齐单元格的起始边缘</span></span>
<span class="line"><span style="color:#DBD7CAEE;">end：对齐单元格的结束边缘</span></span>
<span class="line"><span style="color:#DBD7CAEE;">center：单元格内部居中</span></span>
<span class="line"><span style="color:#DBD7CAEE;">stretch：拉伸，占满单元格的整个宽度（默认值）</span><span style="color:#4D9375;">**</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">// </span><span style="color:#4D9375;">**place-items属性是align-items属性和justify-items属性的合并简写形式**</span></span>
<span class="line"><span style="color:#4D9375;">place-items</span><span style="color:#DBD7CAEE;">: start end;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">// </span><span style="color:#4D9375;">**justify-content属性是整个内容区域在容器里面的水平位置</span><span style="color:#DBD7CAEE;">（左中右），</span><span style="color:#4D9375;">align-content属性是整个内容区域的垂直位置</span><span style="color:#DBD7CAEE;">（上中下）</span><span style="color:#4D9375;">**</span></span>
<span class="line"><span style="color:#4D9375;">justify-content</span><span style="color:#DBD7CAEE;">: start </span><span style="color:#666666;">|</span><span style="color:#DBD7CAEE;"> end </span><span style="color:#666666;">|</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">center</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">|</span><span style="color:#DBD7CAEE;"> stretch </span><span style="color:#666666;">|</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">space-around</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">|</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">space-between</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">|</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">space-evenly</span><span style="color:#DBD7CAEE;">;</span></span>
<span class="line"><span style="color:#4D9375;">align-content</span><span style="color:#DBD7CAEE;">: start </span><span style="color:#666666;">|</span><span style="color:#DBD7CAEE;"> end </span><span style="color:#666666;">|</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">center</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">|</span><span style="color:#DBD7CAEE;"> stretch </span><span style="color:#666666;">|</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">space-around</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">|</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">space-between</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">|</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">space-evenly</span><span style="color:#DBD7CAEE;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">**</span><span style="color:#DBD7CAEE;">start - 对齐容器的起始边框</span></span>
<span class="line"><span style="color:#DBD7CAEE;">end - 对齐容器的结束边框</span></span>
<span class="line"><span style="color:#4D9375;">center</span><span style="color:#DBD7CAEE;"> - 容器内部居中</span></span>
<span class="line"><span style="color:#DBD7CAEE;">stretch - 项目大小没有指定时，拉伸占据整个网格容器</span></span>
<span class="line"><span style="color:#4D9375;">space-around</span><span style="color:#DBD7CAEE;"> - 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与容器边框的间隔大一倍</span></span>
<span class="line"><span style="color:#4D9375;">space-between</span><span style="color:#DBD7CAEE;"> - 项目与项目的间隔相等，项目与容器边框之间没有间隔</span></span>
<span class="line"><span style="color:#4D9375;">space-evenly</span><span style="color:#DBD7CAEE;"> - 项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">// </span><span style="color:#4D9375;">place-content属性是align-content属性和justify-content属性的合并简写形式</span><span style="color:#DBD7CAEE;">。</span><span style="color:#4D9375;">**</span></span>
<span class="line"><span style="color:#4D9375;">place-content</span><span style="color:#DBD7CAEE;">: </span><span style="color:#4D9375;">space-around</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">space-evenly</span><span style="color:#DBD7CAEE;">;</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#393A34;">display: grid;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">**</span><span style="color:#393A34;">// grid行内布局</span><span style="color:#1E754F;">**</span></span>
<span class="line"><span style="color:#393A34;">display: </span><span style="color:#1E754F;">inline-grid</span><span style="color:#393A34;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">**</span><span style="color:#393A34;">// </span><span style="color:#1E754F;">grid-template-columns属性定义每一列的列宽**</span></span>
<span class="line"><span style="color:#1E754F;">grid-template-columns</span><span style="color:#393A34;">: 100px 100px 100px;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">**</span><span style="color:#393A34;">// </span><span style="color:#1E754F;">grid-template-rows属性定义每一行的行高**</span></span>
<span class="line"><span style="color:#1E754F;">grid-template-rows</span><span style="color:#393A34;">: 100px 100px 100px;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">**</span><span style="color:#393A34;">// 按百分比</span><span style="color:#1E754F;">**</span></span>
<span class="line"><span style="color:#1E754F;">grid-template-columns</span><span style="color:#393A34;">: 33.33% 33.33% 33.33%;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">**</span><span style="color:#393A34;">// repeat关键字，代表3个33.3%</span><span style="color:#1E754F;">**</span></span>
<span class="line"><span style="color:#1E754F;">grid-template-columns</span><span style="color:#393A34;">: </span><span style="color:#1E754F;">**</span><span style="color:#393A34;">repeat</span><span style="color:#1E754F;">**</span><span style="color:#393A34;">(3</span><span style="color:#999999;">,</span><span style="color:#393A34;"> 33.33%);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">**</span><span style="color:#393A34;">// 希望每一行（或每一列）容纳尽可能多的单元格，这时可以使用auto-fill关键字表示自动填充</span><span style="color:#1E754F;">**</span></span>
<span class="line"><span style="color:#1E754F;">grid-template-columns</span><span style="color:#393A34;">: </span><span style="color:#1E754F;">**</span><span style="color:#393A34;">repeat</span><span style="color:#1E754F;">**</span><span style="color:#393A34;">(</span><span style="color:#1E754F;">**auto-fill**</span><span style="color:#999999;">,</span><span style="color:#393A34;"> 100px);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">// </span><span style="color:#1E754F;">**</span><span style="color:#393A34;">fr关键字</span><span style="color:#999999;">,</span><span style="color:#393A34;">如果两列的宽度分别为1fr和2fr，就表示后者是前者的两倍。类似于flex：1</span><span style="color:#1E754F;">**</span></span>
<span class="line"><span style="color:#1E754F;">grid-template-columns</span><span style="color:#393A34;">: 1</span><span style="color:#1E754F;">**</span><span style="color:#393A34;">fr</span><span style="color:#1E754F;">**</span><span style="color:#393A34;"> 1</span><span style="color:#1E754F;">**</span><span style="color:#393A34;">fr</span><span style="color:#1E754F;">**</span><span style="color:#393A34;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">// </span><span style="color:#1E754F;">**</span><span style="color:#393A34;">minmax表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值。</span><span style="color:#1E754F;">**</span></span>
<span class="line"><span style="color:#1E754F;">grid-template-columns</span><span style="color:#393A34;">: 1fr 1fr </span><span style="color:#1E754F;">**</span><span style="color:#393A34;">minmax</span><span style="color:#1E754F;">**</span><span style="color:#393A34;">(100px</span><span style="color:#999999;">,</span><span style="color:#393A34;"> 1fr);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">**</span><span style="color:#393A34;">// auto关键字表示由浏览器自己决定长度。</span><span style="color:#1E754F;">**</span></span>
<span class="line"><span style="color:#1E754F;">grid-template-columns</span><span style="color:#393A34;">: 100px </span><span style="color:#1E754F;">**</span><span style="color:#393A34;">auto</span><span style="color:#1E754F;">**</span><span style="color:#393A34;"> 100px;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">// </span><span style="color:#1E754F;">**</span><span style="color:#393A34;">可以使用方括号，指定每一根网格线的名字，方便以后的引用。</span><span style="color:#1E754F;">**</span></span>
<span class="line"><span style="color:#1E754F;">grid-template-columns</span><span style="color:#393A34;">: </span><span style="color:#999999;">[</span><span style="color:#B07D48;">c1</span><span style="color:#999999;">]</span><span style="color:#393A34;"> 100px </span><span style="color:#999999;">[</span><span style="color:#B07D48;">c2</span><span style="color:#999999;">]</span><span style="color:#393A34;"> 100px </span><span style="color:#999999;">[</span><span style="color:#B07D48;">c3</span><span style="color:#999999;">]</span><span style="color:#393A34;"> auto </span><span style="color:#999999;">[</span><span style="color:#B07D48;">c4</span><span style="color:#999999;">]</span><span style="color:#393A34;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">// </span><span style="color:#1E754F;">**</span><span style="color:#393A34;">将左边栏设为70%，右边栏设为30%</span><span style="color:#1E754F;">**</span></span>
<span class="line"><span style="color:#1E754F;">grid-template-columns</span><span style="color:#393A34;">: 70% 30%; </span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">// </span><span style="color:#1E754F;">**grid-row-gap属性设置行与行的间隔</span><span style="color:#393A34;">（行间距），</span><span style="color:#1E754F;">grid-column-gap属性设置列与列的间隔</span><span style="color:#393A34;">（列间距）</span><span style="color:#1E754F;">**</span></span>
<span class="line"><span style="color:#1E754F;">grid-row-gap</span><span style="color:#393A34;">: 20px;</span></span>
<span class="line"><span style="color:#1E754F;">grid-column-gap</span><span style="color:#393A34;">: 20px;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">// </span><span style="color:#1E754F;">**</span><span style="color:#393A34;">上面一段 CSS 代码等同于下面的代码</span><span style="color:#1E754F;">**</span></span>
<span class="line"><span style="color:#1E754F;">grid-gap</span><span style="color:#393A34;">: 20px 20px;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">// </span><span style="color:#1E754F;">**</span><span style="color:#393A34;">如果grid-gap省略了第二个值，浏览器认为第二个值等于第一个值</span><span style="color:#1E754F;">**</span></span>
<span class="line"><span style="color:#1E754F;">grid-gap</span><span style="color:#393A34;">: 20px;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">// </span><span style="color:#1E754F;">**</span><span style="color:#393A34;">根据最新标准，上面三个属性名的grid-前缀已经删除，</span><span style="color:#1E754F;">grid-column-gap和grid-row-gap写成column-gap和row-gap</span><span style="color:#393A34;">，</span><span style="color:#1E754F;">grid-gap写成gap</span><span style="color:#393A34;">。</span><span style="color:#1E754F;">**</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">// </span><span style="color:#1E754F;">**</span><span style="color:#393A34;">网格布局允许指定&quot;区域&quot;，一个区域由单个或多个单元格组成。</span><span style="color:#1E754F;">grid-template-areas属性用于定义区域</span><span style="color:#393A34;">。</span></span>
<span class="line"><span style="color:#1E754F;">grid-template-areas</span><span style="color:#393A34;">: &#39;</span><span style="color:#1E754F;">a</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">b</span><span style="color:#393A34;"> c&#39;</span></span>
<span class="line"><span style="color:#393A34;">                     &#39;d e f&#39;</span></span>
<span class="line"><span style="color:#393A34;">                     &#39;</span><span style="color:#1E754F;">g</span><span style="color:#393A34;"> h i&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">// 多个单元格合并成一个区域的写法如下</span><span style="color:#1E754F;">**</span></span>
<span class="line"><span style="color:#1E754F;">grid-template-areas</span><span style="color:#393A34;">: &#39;</span><span style="color:#1E754F;">a</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">a</span><span style="color:#393A34;"> a&#39;</span></span>
<span class="line"><span style="color:#393A34;">                     &#39;</span><span style="color:#1E754F;">b</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">b</span><span style="color:#393A34;"> b&#39;</span></span>
<span class="line"><span style="color:#393A34;">                     &#39;c c c&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">**</span><span style="color:#393A34;">// 如果某些区域不需要利用，则使用&quot;点&quot;（</span><span style="color:#999999;font-style:italic;">.</span><span style="color:#B31D28;font-style:italic;">）表示**</span></span>
<span class="line"><span style="color:#1E754F;">grid-template-areas</span><span style="color:#393A34;">: &#39;</span><span style="color:#1E754F;">a</span><span style="color:#393A34;"> . c&#39;</span></span>
<span class="line"><span style="color:#393A34;">                     &#39;d . f&#39;</span></span>
<span class="line"><span style="color:#393A34;">                     &#39;</span><span style="color:#1E754F;">g</span><span style="color:#393A34;"> . i&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">**</span><span style="color:#393A34;">// 默认值是row，即&quot;先行后列&quot;。也可以将它设成column，变成&quot;先列后行&quot;</span><span style="color:#1E754F;">**</span></span>
<span class="line"><span style="color:#1E754F;">grid-auto-flow</span><span style="color:#393A34;">: column;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">**</span><span style="color:#393A34;">// 如果将设置改为column dense，表示&quot;先列后行&quot;，并且尽量填满空格</span><span style="color:#1E754F;">**</span></span>
<span class="line"><span style="color:#1E754F;">grid-auto-flow</span><span style="color:#393A34;">: column dense;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">**</span><span style="color:#393A34;">// 如果将设置改为column dense，表示&quot;先列后行&quot;，并且尽量填满空格</span><span style="color:#1E754F;">**</span></span>
<span class="line"><span style="color:#1E754F;">grid-auto-flow</span><span style="color:#393A34;">: column dense;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">// </span><span style="color:#1E754F;">**justify-items属性设置单元格内容的水平位置</span><span style="color:#393A34;">（左中右），</span><span style="color:#1E754F;">align-items属性设置单元格内容的垂直位置</span><span style="color:#393A34;">（上中下）</span></span>
<span class="line"><span style="color:#1E754F;">justify-items</span><span style="color:#393A34;">: start </span><span style="color:#999999;">|</span><span style="color:#393A34;"> end </span><span style="color:#999999;">|</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">center</span><span style="color:#393A34;"> </span><span style="color:#999999;">|</span><span style="color:#393A34;"> stretch;</span></span>
<span class="line"><span style="color:#1E754F;">align-items</span><span style="color:#393A34;">: start </span><span style="color:#999999;">|</span><span style="color:#393A34;"> end </span><span style="color:#999999;">|</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">center</span><span style="color:#393A34;"> </span><span style="color:#999999;">|</span><span style="color:#393A34;"> stretch;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">start：对齐单元格的起始边缘</span></span>
<span class="line"><span style="color:#393A34;">end：对齐单元格的结束边缘</span></span>
<span class="line"><span style="color:#393A34;">center：单元格内部居中</span></span>
<span class="line"><span style="color:#393A34;">stretch：拉伸，占满单元格的整个宽度（默认值）</span><span style="color:#1E754F;">**</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">// </span><span style="color:#1E754F;">**place-items属性是align-items属性和justify-items属性的合并简写形式**</span></span>
<span class="line"><span style="color:#1E754F;">place-items</span><span style="color:#393A34;">: start end;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">// </span><span style="color:#1E754F;">**justify-content属性是整个内容区域在容器里面的水平位置</span><span style="color:#393A34;">（左中右），</span><span style="color:#1E754F;">align-content属性是整个内容区域的垂直位置</span><span style="color:#393A34;">（上中下）</span><span style="color:#1E754F;">**</span></span>
<span class="line"><span style="color:#1E754F;">justify-content</span><span style="color:#393A34;">: start </span><span style="color:#999999;">|</span><span style="color:#393A34;"> end </span><span style="color:#999999;">|</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">center</span><span style="color:#393A34;"> </span><span style="color:#999999;">|</span><span style="color:#393A34;"> stretch </span><span style="color:#999999;">|</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">space-around</span><span style="color:#393A34;"> </span><span style="color:#999999;">|</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">space-between</span><span style="color:#393A34;"> </span><span style="color:#999999;">|</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">space-evenly</span><span style="color:#393A34;">;</span></span>
<span class="line"><span style="color:#1E754F;">align-content</span><span style="color:#393A34;">: start </span><span style="color:#999999;">|</span><span style="color:#393A34;"> end </span><span style="color:#999999;">|</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">center</span><span style="color:#393A34;"> </span><span style="color:#999999;">|</span><span style="color:#393A34;"> stretch </span><span style="color:#999999;">|</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">space-around</span><span style="color:#393A34;"> </span><span style="color:#999999;">|</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">space-between</span><span style="color:#393A34;"> </span><span style="color:#999999;">|</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">space-evenly</span><span style="color:#393A34;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">**</span><span style="color:#393A34;">start - 对齐容器的起始边框</span></span>
<span class="line"><span style="color:#393A34;">end - 对齐容器的结束边框</span></span>
<span class="line"><span style="color:#1E754F;">center</span><span style="color:#393A34;"> - 容器内部居中</span></span>
<span class="line"><span style="color:#393A34;">stretch - 项目大小没有指定时，拉伸占据整个网格容器</span></span>
<span class="line"><span style="color:#1E754F;">space-around</span><span style="color:#393A34;"> - 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与容器边框的间隔大一倍</span></span>
<span class="line"><span style="color:#1E754F;">space-between</span><span style="color:#393A34;"> - 项目与项目的间隔相等，项目与容器边框之间没有间隔</span></span>
<span class="line"><span style="color:#1E754F;">space-evenly</span><span style="color:#393A34;"> - 项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">// </span><span style="color:#1E754F;">place-content属性是align-content属性和justify-content属性的合并简写形式</span><span style="color:#393A34;">。</span><span style="color:#1E754F;">**</span></span>
<span class="line"><span style="color:#1E754F;">place-content</span><span style="color:#393A34;">: </span><span style="color:#1E754F;">space-around</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">space-evenly</span><span style="color:#393A34;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br></div></div>`,3),e=[o];function c(r,t,y,i,D,E){return n(),a("div",null,e)}const b=s(p,[["render",c]]);export{u as __pageData,b as default};
