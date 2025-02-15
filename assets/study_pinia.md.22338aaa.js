import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.82820f36.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"study/pinia.md","filePath":"study/pinia.md","lastUpdated":1694189773000}'),l={name:"study/pinia.md"},o=p(`<p>main.ts</p><div class="language-jsx vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">createApp</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">vue</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">App</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">./App.vue</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">createPinia</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">pinia</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">pinia</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">createPinia</span><span style="color:#666666;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">app</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">createApp</span><span style="color:#666666;">(</span><span style="color:#BD976A;">App</span><span style="color:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BD976A;">app</span><span style="color:#666666;">.</span><span style="color:#80A665;">use</span><span style="color:#666666;">(</span><span style="color:#BD976A;">pinia</span><span style="color:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BD976A;">app</span><span style="color:#666666;">.</span><span style="color:#80A665;">mount</span><span style="color:#666666;">(</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">#app</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">)</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">createApp</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">vue</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">App</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">./App.vue</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">createPinia</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">pinia</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">pinia</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#59873A;">createPinia</span><span style="color:#999999;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">app</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#59873A;">createApp</span><span style="color:#999999;">(</span><span style="color:#B07D48;">App</span><span style="color:#999999;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B07D48;">app</span><span style="color:#999999;">.</span><span style="color:#59873A;">use</span><span style="color:#999999;">(</span><span style="color:#B07D48;">pinia</span><span style="color:#999999;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B07D48;">app</span><span style="color:#999999;">.</span><span style="color:#59873A;">mount</span><span style="color:#999999;">(</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">#app</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>index.ts</p><div class="language-jsx vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">defineStore</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">pinia</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">useCounterStore</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">defineStore</span><span style="color:#666666;">(</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">counter</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#80A665;">state</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=&gt;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#B8A965;">count</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">1</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#B8A965;">foo</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">bar</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#B8A965;">arr</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">[</span><span style="color:#4C9A91;">1</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">2</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">3</span><span style="color:#666666;">]</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#B8A965;">getters</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#80A665;">count10</span><span style="color:#666666;">(</span><span style="color:#BD976A;">state</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">state</span><span style="color:#666666;">.</span><span style="color:#BD976A;">count</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">+</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">10</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#B8A965;">actions</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#80A665;">addCount</span><span style="color:#666666;">(</span><span style="color:#BD976A;">num</span><span style="color:#666666;">: </span><span style="color:#5DA994;">number</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#C99076;">this</span><span style="color:#666666;">.</span><span style="color:#BD976A;">arr</span><span style="color:#666666;">.</span><span style="color:#80A665;">push</span><span style="color:#666666;">(</span><span style="color:#BD976A;">num</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#666666;">})</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">defineStore</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">pinia</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">useCounterStore</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#59873A;">defineStore</span><span style="color:#999999;">(</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">counter</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#59873A;">state</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#1E754F;">return</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#998418;">count</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">1</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#998418;">foo</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">bar</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#998418;">arr</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">[</span><span style="color:#2F798A;">1</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">2</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">3</span><span style="color:#999999;">]</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">getters</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#59873A;">count10</span><span style="color:#999999;">(</span><span style="color:#B07D48;">state</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#1E754F;">return</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">state</span><span style="color:#999999;">.</span><span style="color:#B07D48;">count</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">+</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">10</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">actions</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#59873A;">addCount</span><span style="color:#999999;">(</span><span style="color:#B07D48;">num</span><span style="color:#999999;">: </span><span style="color:#2E8F82;">number</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#A65E2B;">this</span><span style="color:#999999;">.</span><span style="color:#B07D48;">arr</span><span style="color:#999999;">.</span><span style="color:#59873A;">push</span><span style="color:#999999;">(</span><span style="color:#B07D48;">num</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#999999;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>.vue</p><div class="language-jsx vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">template</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">p</span><span style="color:#666666;">&gt;{{</span><span style="color:#BD976A;">count</span><span style="color:#666666;">}}&lt;/</span><span style="color:#4D9375;">p</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">p</span><span style="color:#666666;">&gt;{{</span><span style="color:#BD976A;">foo</span><span style="color:#666666;">}}&lt;/</span><span style="color:#4D9375;">p</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">p</span><span style="color:#666666;">&gt;{{</span><span style="color:#BD976A;">arr</span><span style="color:#666666;">}}&lt;/</span><span style="color:#4D9375;">p</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">p</span><span style="color:#666666;">&gt;{{</span><span style="color:#BD976A;">count10</span><span style="color:#666666;">}}&lt;/</span><span style="color:#4D9375;">p</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">button</span><span style="color:#DBD7CAEE;"> </span><span style="color:#FDAEB7;font-style:italic;">@click=&quot;handleChange&quot;&gt;修改数据&lt;/button&gt;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;script</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">lang</span><span style="color:#666666;">=</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">ts</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">setup</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">import </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">useCounterStore</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> from &#39;../store&#39;;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">import </span><span style="color:#666666;">{</span><span style="color:#BD976A;">storeToRefs</span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> from &#39;pinia&#39;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">const countStore = useCounterStore()</span></span>
<span class="line"><span style="color:#DBD7CAEE;">const </span><span style="color:#666666;">{</span><span style="color:#BD976A;">count</span><span style="color:#666666;">,</span><span style="color:#BD976A;">foo</span><span style="color:#666666;">,</span><span style="color:#BD976A;">arr</span><span style="color:#666666;">,</span><span style="color:#BD976A;">count10</span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> = storeToRefs(countStore)</span></span>
<span class="line"><span style="color:#DBD7CAEE;">const handleChange = () =&gt; </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#758575DD;">// countStore.$patch({</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#758575DD;">//   count:count.value+2,</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#758575DD;">//   foo:foo.value+&#39;hello&#39;+count.value</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#758575DD;">// })</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#BD976A;">countStore</span><span style="color:#666666;">.</span><span style="color:#80A665;">addCount</span><span style="color:#666666;">(</span><span style="color:#4C9A91;">10</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">script</span><span style="color:#666666;">&gt;</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">template</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">p</span><span style="color:#999999;">&gt;{{</span><span style="color:#B07D48;">count</span><span style="color:#999999;">}}&lt;/</span><span style="color:#1E754F;">p</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">p</span><span style="color:#999999;">&gt;{{</span><span style="color:#B07D48;">foo</span><span style="color:#999999;">}}&lt;/</span><span style="color:#1E754F;">p</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">p</span><span style="color:#999999;">&gt;{{</span><span style="color:#B07D48;">arr</span><span style="color:#999999;">}}&lt;/</span><span style="color:#1E754F;">p</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">p</span><span style="color:#999999;">&gt;{{</span><span style="color:#B07D48;">count10</span><span style="color:#999999;">}}&lt;/</span><span style="color:#1E754F;">p</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">button</span><span style="color:#393A34;"> </span><span style="color:#B31D28;font-style:italic;">@click=&quot;handleChange&quot;&gt;修改数据&lt;/button&gt;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;script</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">lang</span><span style="color:#999999;">=</span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">ts</span><span style="color:#B5695999;">&quot;</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">setup</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">import </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">useCounterStore</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> from &#39;../store&#39;;</span></span>
<span class="line"><span style="color:#393A34;">import </span><span style="color:#999999;">{</span><span style="color:#B07D48;">storeToRefs</span><span style="color:#999999;">}</span><span style="color:#393A34;"> from &#39;pinia&#39;</span></span>
<span class="line"><span style="color:#393A34;">const countStore = useCounterStore()</span></span>
<span class="line"><span style="color:#393A34;">const </span><span style="color:#999999;">{</span><span style="color:#B07D48;">count</span><span style="color:#999999;">,</span><span style="color:#B07D48;">foo</span><span style="color:#999999;">,</span><span style="color:#B07D48;">arr</span><span style="color:#999999;">,</span><span style="color:#B07D48;">count10</span><span style="color:#999999;">}</span><span style="color:#393A34;"> = storeToRefs(countStore)</span></span>
<span class="line"><span style="color:#393A34;">const handleChange = () =&gt; </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#A0ADA0;">// countStore.$patch({</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#A0ADA0;">//   count:count.value+2,</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#A0ADA0;">//   foo:foo.value+&#39;hello&#39;+count.value</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#A0ADA0;">// })</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B07D48;">countStore</span><span style="color:#999999;">.</span><span style="color:#59873A;">addCount</span><span style="color:#999999;">(</span><span style="color:#2F798A;">10</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">script</span><span style="color:#999999;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,6),e=[o];function t(c,r,y,i,D,A){return n(),a("div",null,e)}const u=s(l,[["render",t]]);export{E as __pageData,u as default};
