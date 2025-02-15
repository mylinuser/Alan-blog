import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.82820f36.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"algorithm/useVModel.md","filePath":"algorithm/useVModel.md","lastUpdated":1720542673000}'),l={name:"algorithm/useVModel.md"},o=p(`<h2 id="普通的修改props值方式" tabindex="-1">普通的修改props值方式 <a class="header-anchor" href="#普通的修改props值方式" aria-label="Permalink to &quot;普通的修改props值方式&quot;">​</a></h2><p>使用v-model:XXX=&quot;&quot;和emit(&#39;update:XXX&#39;, value)方式，这样需要去watch props.XXX的变化然后emit</p><h2 id="使用usevmodel" tabindex="-1">使用useVModel <a class="header-anchor" href="#使用usevmodel" aria-label="Permalink to &quot;使用useVModel&quot;">​</a></h2><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">computed</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">vue</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">const </span><span style="color:#BD976A;">cacheMap</span><span style="color:#CB7676;"> </span><span style="color:#666666;">=</span><span style="color:#CB7676;"> new </span><span style="color:#80A665;">WeakMap</span><span style="color:#666666;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#CB7676;"> const </span><span style="color:#80A665;">useVModel</span><span style="color:#CB7676;"> </span><span style="color:#666666;">=</span><span style="color:#CB7676;"> </span><span style="color:#666666;">(</span><span style="color:#BD976A;">props</span><span style="color:#666666;">,</span><span style="color:#CB7676;"> </span><span style="color:#BD976A;">propsName</span><span style="color:#666666;">,</span><span style="color:#CB7676;"> </span><span style="color:#BD976A;">emit</span><span style="color:#666666;">)</span><span style="color:#CB7676;"> </span><span style="color:#666666;">=&gt;</span><span style="color:#CB7676;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#CB7676;">  </span><span style="color:#4D9375;">return</span><span style="color:#CB7676;"> </span><span style="color:#80A665;">computed</span><span style="color:#666666;">({</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#80A665;">get</span><span style="color:#666666;">() {</span></span>
<span class="line"><span style="color:#666666;">      </span><span style="color:#4D9375;">if</span><span style="color:#666666;"> (</span><span style="color:#BD976A;">cacheMap</span><span style="color:#666666;">.</span><span style="color:#80A665;">has</span><span style="color:#666666;">(</span><span style="color:#BD976A;">props</span><span style="color:#666666;">[</span><span style="color:#BD976A;">propsName</span><span style="color:#666666;">])) {</span></span>
<span class="line"><span style="color:#666666;">        </span><span style="color:#4D9375;">return</span><span style="color:#666666;"> </span><span style="color:#BD976A;">cacheMap</span><span style="color:#666666;">.</span><span style="color:#80A665;">get</span><span style="color:#666666;">(</span><span style="color:#BD976A;">props</span><span style="color:#666666;">[</span><span style="color:#BD976A;">propsName</span><span style="color:#666666;">]);</span></span>
<span class="line"><span style="color:#666666;">      }</span></span>
<span class="line"><span style="color:#666666;">      </span><span style="color:#CB7676;">const </span><span style="color:#BD976A;">proxy</span><span style="color:#CB7676;"> </span><span style="color:#666666;">=</span><span style="color:#CB7676;"> new </span><span style="color:#80A665;">Proxy</span><span style="color:#666666;">(</span><span style="color:#BD976A;">props</span><span style="color:#666666;">[</span><span style="color:#BD976A;">propsName</span><span style="color:#666666;">],</span><span style="color:#CB7676;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#666666;">        </span><span style="color:#80A665;">get</span><span style="color:#666666;">(</span><span style="color:#BD976A;">target</span><span style="color:#666666;">, </span><span style="color:#BD976A;">key</span><span style="color:#666666;">) {</span></span>
<span class="line"><span style="color:#666666;">          </span><span style="color:#4D9375;">return</span><span style="color:#666666;"> </span><span style="color:#BD976A;">Reflect</span><span style="color:#666666;">.</span><span style="color:#80A665;">get</span><span style="color:#666666;">(</span><span style="color:#BD976A;">target</span><span style="color:#666666;">, </span><span style="color:#BD976A;">key</span><span style="color:#666666;">);</span></span>
<span class="line"><span style="color:#666666;">        },</span></span>
<span class="line"><span style="color:#666666;">        </span><span style="color:#80A665;">set</span><span style="color:#666666;">(</span><span style="color:#BD976A;">target</span><span style="color:#666666;">, </span><span style="color:#BD976A;">key</span><span style="color:#666666;">, </span><span style="color:#BD976A;">value</span><span style="color:#666666;">) {</span></span>
<span class="line"><span style="color:#666666;">          </span><span style="color:#80A665;">emit</span><span style="color:#666666;">(</span><span style="color:#C98A7D99;">\`</span><span style="color:#C98A7D;">update:</span><span style="color:#666666;">\${</span><span style="color:#C98A7D;">propsName</span><span style="color:#666666;">}</span><span style="color:#C98A7D99;">\`</span><span style="color:#666666;">, {</span></span>
<span class="line"><span style="color:#666666;">            ...</span><span style="color:#BD976A;">target</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#666666;">            [</span><span style="color:#BD976A;">key</span><span style="color:#666666;">]: </span><span style="color:#BD976A;">value</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#666666;">          });</span></span>
<span class="line"><span style="color:#666666;">          </span><span style="color:#4D9375;">return</span><span style="color:#666666;"> </span><span style="color:#4D9375;">true</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#666666;">        },</span></span>
<span class="line"><span style="color:#666666;">      });</span></span>
<span class="line"><span style="color:#666666;">      </span><span style="color:#BD976A;">cacheMap</span><span style="color:#666666;">.</span><span style="color:#80A665;">set</span><span style="color:#666666;">(</span><span style="color:#BD976A;">props</span><span style="color:#666666;">[</span><span style="color:#BD976A;">propsName</span><span style="color:#666666;">], </span><span style="color:#BD976A;">proxy</span><span style="color:#666666;">);</span></span>
<span class="line"><span style="color:#666666;">      </span><span style="color:#4D9375;">return</span><span style="color:#666666;"> </span><span style="color:#BD976A;">proxy</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#666666;">    },</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#80A665;">set</span><span style="color:#666666;">(</span><span style="color:#BD976A;">val</span><span style="color:#666666;">) {</span></span>
<span class="line"><span style="color:#666666;">      </span><span style="color:#80A665;">emit</span><span style="color:#666666;">(</span><span style="color:#C98A7D99;">\`</span><span style="color:#C98A7D;">update:</span><span style="color:#666666;">\${</span><span style="color:#C98A7D;">propsName</span><span style="color:#666666;">}</span><span style="color:#C98A7D99;">\`</span><span style="color:#666666;">, </span><span style="color:#BD976A;">val</span><span style="color:#666666;">);</span></span>
<span class="line"><span style="color:#666666;">    },</span></span>
<span class="line"><span style="color:#666666;">  });</span></span>
<span class="line"><span style="color:#666666;">};</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">computed</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">vue</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">const </span><span style="color:#B07D48;">cacheMap</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> new </span><span style="color:#59873A;">WeakMap</span><span style="color:#999999;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">export</span><span style="color:#AB5959;"> const </span><span style="color:#59873A;">useVModel</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#999999;">(</span><span style="color:#B07D48;">props</span><span style="color:#999999;">,</span><span style="color:#AB5959;"> </span><span style="color:#B07D48;">propsName</span><span style="color:#999999;">,</span><span style="color:#AB5959;"> </span><span style="color:#B07D48;">emit</span><span style="color:#999999;">)</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=&gt;</span><span style="color:#AB5959;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#AB5959;">  </span><span style="color:#1E754F;">return</span><span style="color:#AB5959;"> </span><span style="color:#59873A;">computed</span><span style="color:#999999;">({</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#59873A;">get</span><span style="color:#999999;">() {</span></span>
<span class="line"><span style="color:#999999;">      </span><span style="color:#1E754F;">if</span><span style="color:#999999;"> (</span><span style="color:#B07D48;">cacheMap</span><span style="color:#999999;">.</span><span style="color:#59873A;">has</span><span style="color:#999999;">(</span><span style="color:#B07D48;">props</span><span style="color:#999999;">[</span><span style="color:#B07D48;">propsName</span><span style="color:#999999;">])) {</span></span>
<span class="line"><span style="color:#999999;">        </span><span style="color:#1E754F;">return</span><span style="color:#999999;"> </span><span style="color:#B07D48;">cacheMap</span><span style="color:#999999;">.</span><span style="color:#59873A;">get</span><span style="color:#999999;">(</span><span style="color:#B07D48;">props</span><span style="color:#999999;">[</span><span style="color:#B07D48;">propsName</span><span style="color:#999999;">]);</span></span>
<span class="line"><span style="color:#999999;">      }</span></span>
<span class="line"><span style="color:#999999;">      </span><span style="color:#AB5959;">const </span><span style="color:#B07D48;">proxy</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> new </span><span style="color:#59873A;">Proxy</span><span style="color:#999999;">(</span><span style="color:#B07D48;">props</span><span style="color:#999999;">[</span><span style="color:#B07D48;">propsName</span><span style="color:#999999;">],</span><span style="color:#AB5959;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#999999;">        </span><span style="color:#59873A;">get</span><span style="color:#999999;">(</span><span style="color:#B07D48;">target</span><span style="color:#999999;">, </span><span style="color:#B07D48;">key</span><span style="color:#999999;">) {</span></span>
<span class="line"><span style="color:#999999;">          </span><span style="color:#1E754F;">return</span><span style="color:#999999;"> </span><span style="color:#B07D48;">Reflect</span><span style="color:#999999;">.</span><span style="color:#59873A;">get</span><span style="color:#999999;">(</span><span style="color:#B07D48;">target</span><span style="color:#999999;">, </span><span style="color:#B07D48;">key</span><span style="color:#999999;">);</span></span>
<span class="line"><span style="color:#999999;">        },</span></span>
<span class="line"><span style="color:#999999;">        </span><span style="color:#59873A;">set</span><span style="color:#999999;">(</span><span style="color:#B07D48;">target</span><span style="color:#999999;">, </span><span style="color:#B07D48;">key</span><span style="color:#999999;">, </span><span style="color:#B07D48;">value</span><span style="color:#999999;">) {</span></span>
<span class="line"><span style="color:#999999;">          </span><span style="color:#59873A;">emit</span><span style="color:#999999;">(</span><span style="color:#B5695999;">\`</span><span style="color:#B56959;">update:</span><span style="color:#999999;">\${</span><span style="color:#B56959;">propsName</span><span style="color:#999999;">}</span><span style="color:#B5695999;">\`</span><span style="color:#999999;">, {</span></span>
<span class="line"><span style="color:#999999;">            ...</span><span style="color:#B07D48;">target</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#999999;">            [</span><span style="color:#B07D48;">key</span><span style="color:#999999;">]: </span><span style="color:#B07D48;">value</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#999999;">          });</span></span>
<span class="line"><span style="color:#999999;">          </span><span style="color:#1E754F;">return</span><span style="color:#999999;"> </span><span style="color:#1E754F;">true</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#999999;">        },</span></span>
<span class="line"><span style="color:#999999;">      });</span></span>
<span class="line"><span style="color:#999999;">      </span><span style="color:#B07D48;">cacheMap</span><span style="color:#999999;">.</span><span style="color:#59873A;">set</span><span style="color:#999999;">(</span><span style="color:#B07D48;">props</span><span style="color:#999999;">[</span><span style="color:#B07D48;">propsName</span><span style="color:#999999;">], </span><span style="color:#B07D48;">proxy</span><span style="color:#999999;">);</span></span>
<span class="line"><span style="color:#999999;">      </span><span style="color:#1E754F;">return</span><span style="color:#999999;"> </span><span style="color:#B07D48;">proxy</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#999999;">    },</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#59873A;">set</span><span style="color:#999999;">(</span><span style="color:#B07D48;">val</span><span style="color:#999999;">) {</span></span>
<span class="line"><span style="color:#999999;">      </span><span style="color:#59873A;">emit</span><span style="color:#999999;">(</span><span style="color:#B5695999;">\`</span><span style="color:#B56959;">update:</span><span style="color:#999999;">\${</span><span style="color:#B56959;">propsName</span><span style="color:#999999;">}</span><span style="color:#B5695999;">\`</span><span style="color:#999999;">, </span><span style="color:#B07D48;">val</span><span style="color:#999999;">);</span></span>
<span class="line"><span style="color:#999999;">    },</span></span>
<span class="line"><span style="color:#999999;">  });</span></span>
<span class="line"><span style="color:#999999;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#CB7676;">interface</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA994;">studentType</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#BD976A;">name</span><span style="color:#666666;">: </span><span style="color:#5DA994;">string</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#BD976A;">age</span><span style="color:#666666;">: </span><span style="color:#5DA994;">number</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#CB7676;">const </span><span style="color:#BD976A;">props</span><span style="color:#CB7676;"> </span><span style="color:#666666;">=</span><span style="color:#CB7676;"> </span><span style="color:#80A665;">defineProps</span><span style="color:#666666;">({</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#B8A965;">student</span><span style="color:#666666;">: </span><span style="color:#BD976A;">studentType</span></span>
<span class="line"><span style="color:#666666;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">const </span><span style="color:#BD976A;">propsValue</span><span style="color:#CB7676;"> </span><span style="color:#666666;">=</span><span style="color:#CB7676;"> </span><span style="color:#80A665;">useVModel</span><span style="color:#666666;">(</span><span style="color:#BD976A;">props</span><span style="color:#666666;">,</span><span style="color:#CB7676;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">student</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">,</span><span style="color:#CB7676;"> </span><span style="color:#BD976A;">emit</span><span style="color:#666666;">)</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#AB5959;">interface</span><span style="color:#393A34;"> </span><span style="color:#2E8F82;">studentType</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B07D48;">name</span><span style="color:#999999;">: </span><span style="color:#2E8F82;">string</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B07D48;">age</span><span style="color:#999999;">: </span><span style="color:#2E8F82;">number</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#AB5959;">const </span><span style="color:#B07D48;">props</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#59873A;">defineProps</span><span style="color:#999999;">({</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#998418;">student</span><span style="color:#999999;">: </span><span style="color:#B07D48;">studentType</span></span>
<span class="line"><span style="color:#999999;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">const </span><span style="color:#B07D48;">propsValue</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#59873A;">useVModel</span><span style="color:#999999;">(</span><span style="color:#B07D48;">props</span><span style="color:#999999;">,</span><span style="color:#AB5959;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">student</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span><span style="color:#AB5959;"> </span><span style="color:#B07D48;">emit</span><span style="color:#999999;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,5),e=[o];function r(c,t,y,i,B,A){return n(),a("div",null,e)}const m=s(l,[["render",r]]);export{u as __pageData,m as default};
