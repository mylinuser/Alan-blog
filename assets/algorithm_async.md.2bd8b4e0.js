import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.82820f36.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"algorithm/async.md","filePath":"algorithm/async.md","lastUpdated":1720542673000}'),p={name:"algorithm/async.md"},o=l(`<h2 id="实现一个简单的async-await" tabindex="-1">实现一个简单的async/await <a class="header-anchor" href="#实现一个简单的async-await" aria-label="Permalink to &quot;实现一个简单的async/await&quot;">​</a></h2><p>我们掌握了Generator函数的使用方法。async/await语法糖就是使用Generator函数+自动执行器来运作的。 我们可以参考以下例子</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#758575DD;">// 定义了一个promise，用来模拟异步请求，作用是传入参数++</span></span>
<span class="line"><span style="color:#CB7676;">function</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">getNum</span><span style="color:#666666;">(</span><span style="color:#BD976A;">num</span><span style="color:#666666;">){</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">new</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">Promise</span><span style="color:#666666;">((</span><span style="color:#BD976A;">resolve</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">reject</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=&gt;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#80A665;">setTimeout</span><span style="color:#666666;">(()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=&gt;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">            </span><span style="color:#80A665;">resolve</span><span style="color:#666666;">(</span><span style="color:#BD976A;">num</span><span style="color:#CB7676;">+</span><span style="color:#4C9A91;">1</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#666666;">},</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">1000</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">})</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;">//自动执行器，如果一个Generator函数没有执行完，则递归调用</span></span>
<span class="line"><span style="color:#CB7676;">function</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">asyncFun</span><span style="color:#666666;">(</span><span style="color:#BD976A;">func</span><span style="color:#666666;">){</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#CB7676;">var </span><span style="color:#BD976A;">gen</span><span style="color:#CB7676;"> </span><span style="color:#666666;">=</span><span style="color:#CB7676;"> </span><span style="color:#80A665;">func</span><span style="color:#666666;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#CB7676;">function</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">next</span><span style="color:#666666;">(</span><span style="color:#BD976A;">data</span><span style="color:#666666;">){</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#CB7676;">var </span><span style="color:#BD976A;">result</span><span style="color:#CB7676;"> </span><span style="color:#666666;">=</span><span style="color:#CB7676;"> </span><span style="color:#BD976A;">gen</span><span style="color:#666666;">.</span><span style="color:#80A665;">next</span><span style="color:#666666;">(</span><span style="color:#BD976A;">data</span><span style="color:#666666;">);</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">(</span><span style="color:#BD976A;">result</span><span style="color:#666666;">.</span><span style="color:#BD976A;">done</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">result</span><span style="color:#666666;">.</span><span style="color:#BD976A;">value</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#BD976A;">result</span><span style="color:#666666;">.</span><span style="color:#BD976A;">value</span><span style="color:#666666;">.</span><span style="color:#80A665;">then</span><span style="color:#666666;">(</span><span style="color:#CB7676;">function</span><span style="color:#666666;">(</span><span style="color:#BD976A;">data</span><span style="color:#666666;">){</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#80A665;">next</span><span style="color:#666666;">(</span><span style="color:#BD976A;">data</span><span style="color:#666666;">);</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">});</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#80A665;">next</span><span style="color:#666666;">();</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575DD;">// 所需要执行的Generator函数，内部的数据在执行完成一步的promise之后，再调用下一步</span></span>
<span class="line"><span style="color:#CB7676;">var </span><span style="color:#80A665;">func</span><span style="color:#CB7676;"> </span><span style="color:#666666;">=</span><span style="color:#CB7676;"> function</span><span style="color:#4D9375;">*</span><span style="color:#CB7676;"> </span><span style="color:#666666;">(){</span></span>
<span class="line"><span style="color:#CB7676;">  var </span><span style="color:#BD976A;">f1</span><span style="color:#CB7676;"> </span><span style="color:#666666;">=</span><span style="color:#CB7676;"> </span><span style="color:#4D9375;">yield</span><span style="color:#CB7676;"> </span><span style="color:#80A665;">getNum</span><span style="color:#666666;">(</span><span style="color:#4C9A91;">1</span><span style="color:#666666;">);</span></span>
<span class="line"><span style="color:#CB7676;">  var </span><span style="color:#BD976A;">f2</span><span style="color:#CB7676;"> </span><span style="color:#666666;">=</span><span style="color:#CB7676;"> </span><span style="color:#4D9375;">yield</span><span style="color:#CB7676;"> </span><span style="color:#80A665;">getNum</span><span style="color:#666666;">(</span><span style="color:#BD976A;">f1</span><span style="color:#666666;">);</span></span>
<span class="line"><span style="color:#CB7676;">  </span><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#80A665;">log</span><span style="color:#666666;">(</span><span style="color:#BD976A;">f2</span><span style="color:#666666;">)</span><span style="color:#CB7676;"> </span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#666666;">};</span></span>
<span class="line"><span style="color:#80A665;">asyncFun</span><span style="color:#666666;">(</span><span style="color:#BD976A;">func</span><span style="color:#666666;">);</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">// 定义了一个promise，用来模拟异步请求，作用是传入参数++</span></span>
<span class="line"><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#59873A;">getNum</span><span style="color:#999999;">(</span><span style="color:#B07D48;">num</span><span style="color:#999999;">){</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#1E754F;">return</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">new</span><span style="color:#393A34;"> </span><span style="color:#998418;">Promise</span><span style="color:#999999;">((</span><span style="color:#B07D48;">resolve</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">reject</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#999999;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#59873A;">setTimeout</span><span style="color:#999999;">(()</span><span style="color:#393A34;"> </span><span style="color:#999999;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#59873A;">resolve</span><span style="color:#999999;">(</span><span style="color:#B07D48;">num</span><span style="color:#AB5959;">+</span><span style="color:#2F798A;">1</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#999999;">},</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">1000</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">})</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">//自动执行器，如果一个Generator函数没有执行完，则递归调用</span></span>
<span class="line"><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#59873A;">asyncFun</span><span style="color:#999999;">(</span><span style="color:#B07D48;">func</span><span style="color:#999999;">){</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#AB5959;">var </span><span style="color:#B07D48;">gen</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#59873A;">func</span><span style="color:#999999;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#59873A;">next</span><span style="color:#999999;">(</span><span style="color:#B07D48;">data</span><span style="color:#999999;">){</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#AB5959;">var </span><span style="color:#B07D48;">result</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#B07D48;">gen</span><span style="color:#999999;">.</span><span style="color:#59873A;">next</span><span style="color:#999999;">(</span><span style="color:#B07D48;">data</span><span style="color:#999999;">);</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#1E754F;">if</span><span style="color:#393A34;"> </span><span style="color:#999999;">(</span><span style="color:#B07D48;">result</span><span style="color:#999999;">.</span><span style="color:#B07D48;">done</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">return</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">result</span><span style="color:#999999;">.</span><span style="color:#B07D48;">value</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B07D48;">result</span><span style="color:#999999;">.</span><span style="color:#B07D48;">value</span><span style="color:#999999;">.</span><span style="color:#59873A;">then</span><span style="color:#999999;">(</span><span style="color:#AB5959;">function</span><span style="color:#999999;">(</span><span style="color:#B07D48;">data</span><span style="color:#999999;">){</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#59873A;">next</span><span style="color:#999999;">(</span><span style="color:#B07D48;">data</span><span style="color:#999999;">);</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">});</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#59873A;">next</span><span style="color:#999999;">();</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">// 所需要执行的Generator函数，内部的数据在执行完成一步的promise之后，再调用下一步</span></span>
<span class="line"><span style="color:#AB5959;">var </span><span style="color:#59873A;">func</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> function</span><span style="color:#1E754F;">*</span><span style="color:#AB5959;"> </span><span style="color:#999999;">(){</span></span>
<span class="line"><span style="color:#AB5959;">  var </span><span style="color:#B07D48;">f1</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#1E754F;">yield</span><span style="color:#AB5959;"> </span><span style="color:#59873A;">getNum</span><span style="color:#999999;">(</span><span style="color:#2F798A;">1</span><span style="color:#999999;">);</span></span>
<span class="line"><span style="color:#AB5959;">  var </span><span style="color:#B07D48;">f2</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#1E754F;">yield</span><span style="color:#AB5959;"> </span><span style="color:#59873A;">getNum</span><span style="color:#999999;">(</span><span style="color:#B07D48;">f1</span><span style="color:#999999;">);</span></span>
<span class="line"><span style="color:#AB5959;">  </span><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#59873A;">log</span><span style="color:#999999;">(</span><span style="color:#B07D48;">f2</span><span style="color:#999999;">)</span><span style="color:#AB5959;"> </span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#999999;">};</span></span>
<span class="line"><span style="color:#59873A;">asyncFun</span><span style="color:#999999;">(</span><span style="color:#B07D48;">func</span><span style="color:#999999;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>在执行的过程中，判断一个函数的promise是否完成，如果已经完成，将结果传入下一个函数，继续重复此步骤。</p><p>async/await非常好理解，基本理解了Generator函数之后，几句话就可以描述清楚。这里没有过多的继续阐述Generator函数的内部执行逻辑及原理。</p>`,5),e=[o];function c(r,t,y,i,A,B){return n(),a("div",null,e)}const b=s(p,[["render",c]]);export{u as __pageData,b as default};