import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.82820f36.js";const m=JSON.parse('{"title":"babel","description":"","frontmatter":{},"headers":[],"relativePath":"study/babel.md","filePath":"study/babel.md","lastUpdated":1739638504000}'),p={name:"study/babel.md"},e=l(`<h1 id="babel" tabindex="-1">babel <a class="header-anchor" href="#babel" aria-label="Permalink to &quot;babel&quot;">​</a></h1><h2 id="什么是-babel" tabindex="-1">什么是 Babel？ <a class="header-anchor" href="#什么是-babel" aria-label="Permalink to &quot;什么是 Babel？&quot;">​</a></h2><ul><li>Babel 是一个 JS 编译器，通过 Babel 我们可以把按最新标准编写的 JS 代码向下编译成兼容浏览器或其他环境的通用版本。</li><li>虽然 Babel 开箱即用，但是如果不做任何配置，输入原始代码，则会输出同样的原始代码。如果想要做一些实际工作，需要添加插件（plugins）。一个个手动引入需要的插件过于繁琐，所以通常会使用官方提供的预设（presets），预设是插件的集合。 官方提供的预设：@babel/preset-env</li></ul><p>Babel 转译代码，会将代码分成两部分</p><ul><li>syntax（语法）：箭头函数、let、const、展开运算符等</li><li>api：Promise、includes、map等</li><li>Babel 默认不转换 syntax 和 api ，使用 @babel/preset-env 或 babel-runtime 后转换 syntax，但不会转换 api 。需要使用垫片（polyfill）转换 api，polyfill 可以让新的内置函数、实例方法等在低版本环境中也可以使用。</li></ul><p>官方给出了两种 polyfill 方案</p><ul><li>babel-polyfill：会污染全局适合在业务项目中使用。（Babel7.4.0版本开始，babel/polyfill 已经被废弃，推荐直接使用core-js）</li><li>babel-runtime：不污染全局适合在组件或类库项目中使用。</li></ul><h2 id="几种配置区别" tabindex="-1">几种配置区别 <a class="header-anchor" href="#几种配置区别" aria-label="Permalink to &quot;几种配置区别&quot;">​</a></h2><h4 id="_1-不做任何配置" tabindex="-1">1. 不做任何配置 <a class="header-anchor" href="#_1-不做任何配置" aria-label="Permalink to &quot;1. 不做任何配置&quot;">​</a></h4><p>会发现输出的 lib/index.js 文件，与编译之前没有区别，输出了原始代码。 在根目录添加文件：</p><p>babel.config.json（Babel配置文件） .browserslistrc（声明了一段浏览器集合，根据这段集合描述，针对性的输出兼容性代码） 看看使用了配置和浏览器策略之后，会有哪些改变。</p><h4 id="_2-babel-preset-env" tabindex="-1">2. @babel/preset-env <a class="header-anchor" href="#_2-babel-preset-env" aria-label="Permalink to &quot;2. @babel/preset-env&quot;">​</a></h4><ul><li>只转换syntax（class，typeof，箭头函数），不转换api（map，includes）</li><li>syntax的转换策略会根据浏览器策略（.browserslistrc文件的配置）改变</li></ul><h4 id="_3-babel-preset-env-core-js-3" tabindex="-1">3. @babel/preset-env + core-js@3 <a class="header-anchor" href="#_3-babel-preset-env-core-js-3" aria-label="Permalink to &quot;3. @babel/preset-env + core-js@3&quot;">​</a></h4><ul><li>转换 syntax 和 api。</li><li>syntax 和 api 的转换策略会根据浏览器策略改变。</li><li>polyfill 从core-js@3 引入。</li></ul><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#B8A965;">presets</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">[</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#666666;">[</span></span>
<span class="line"><span style="color:#DBD7CAEE;">            </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">@babel/preset-env</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">            </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">                </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#B8A965;">corejs</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">3</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">                </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#B8A965;">useBuiltIns</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">usage</span><span style="color:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">            </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#666666;">]</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">]</span></span>
<span class="line"><span style="color:#666666;">}</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B5695999;">&quot;</span><span style="color:#998418;">presets</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">[</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#999999;">[</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">@babel/preset-env</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">                </span><span style="color:#B5695999;">&quot;</span><span style="color:#998418;">corejs</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">3</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">                </span><span style="color:#B5695999;">&quot;</span><span style="color:#998418;">useBuiltIns</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">usage</span><span style="color:#B5695999;">&quot;</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#999999;">]</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">]</span></span>
<span class="line"><span style="color:#999999;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>介绍一下配置项 useBuiltIns ：默认为 false，可以使用的值有 usage 和 entry</p><ul><li>usage：不需要手动 import &#39;@babel/polyfill&#39;，会根据 browserlist + 业务代码使用到的新 API 按需自动加上 polyfill</li><li>entry：需要手动 import &#39;@babel/polyfill&#39;，根据 browserlist 中浏览器版本的支持，将 polyfill 拆分引入浏览器不支持的 polyfill。这样会导致实际用不到的 polyfill 也会被打包到输出文件，导致文件比较大。</li><li>false：不启用 polyfill，如果 import &#39;@babel/polyfill&#39;, 会无视 browserlist 将所有的 polyfill 加载进来。</li><li>新版本的 Babel，会提示直接引入 core-js 或者 regenerator-runtime/runtime 来代替@babel/polyfill。</li></ul><h4 id="_4-babel-preset-env-babel-runtime-corejs3-babel-plugin-transform-runtime" tabindex="-1">4.@babel/preset-env + @babel/runtime-corejs3 + @babel/plugin-transform-runtime <a class="header-anchor" href="#_4-babel-preset-env-babel-runtime-corejs3-babel-plugin-transform-runtime" aria-label="Permalink to &quot;4.@babel/preset-env + @babel/runtime-corejs3 + @babel/plugin-transform-runtime&quot;">​</a></h4><ul><li>api转换会根据策略改变。</li><li>syntax转换会根据策略改变。</li></ul><h5 id="babel-runtime-和-babel-plugin-transform-runtime-的关系" tabindex="-1">@babel/runtime 和 @babel/plugin-transform-runtime 的关系： <a class="header-anchor" href="#babel-runtime-和-babel-plugin-transform-runtime-的关系" aria-label="Permalink to &quot;@babel/runtime 和 @babel/plugin-transform-runtime 的关系：&quot;">​</a></h5><ul><li>plugin-transform-runtime 用于编译时转译代码，真正的polyfill在代码运行时从babel/runtime里引入，所以plugin-transform-runtime 需要安装在开发环境，而babel/runtime安装在生产环境。</li></ul><h5 id="babel-runtime-和-babel-runtime-corejs3" tabindex="-1">@babel/runtime 和 @babel/runtime-corejs3： <a class="header-anchor" href="#babel-runtime-和-babel-runtime-corejs3" aria-label="Permalink to &quot;@babel/runtime 和 @babel/runtime-corejs3：&quot;">​</a></h5><ul><li>@babel/runtime包含：helpers、regenerator-runtime。只能处理语法。</li><li>@babel/runtime-corejs3包含：helpers、regenerator-runtime、core-js@3。引入core-js@3处理api。</li></ul><p>Babel 在每个需要转换的代码前面都会插入一些 helpers 代码，这可能会导致多个文件都会有重复的 helpers 代码。@babel/plugin-transform-runtime 的 helpers: true 选项就可以把这些代码抽离出来。</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#B8A965;">plugins</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">[</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#666666;">[</span></span>
<span class="line"><span style="color:#DBD7CAEE;">            </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">@babel/plugin-transform-runtime</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">            </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">                </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#B8A965;">corejs</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">3</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">                </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#B8A965;">helpers</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">true</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">                </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#B8A965;">regenerator</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">false</span></span>
<span class="line"><span style="color:#DBD7CAEE;">            </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#666666;">]</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">],</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#B8A965;">presets</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">[</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#666666;">[</span></span>
<span class="line"><span style="color:#DBD7CAEE;">            </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">@babel/preset-env</span><span style="color:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#666666;">]</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">]</span></span>
<span class="line"><span style="color:#666666;">}</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B5695999;">&quot;</span><span style="color:#998418;">plugins</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">[</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#999999;">[</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">@babel/plugin-transform-runtime</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">                </span><span style="color:#B5695999;">&quot;</span><span style="color:#998418;">corejs</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">3</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">                </span><span style="color:#B5695999;">&quot;</span><span style="color:#998418;">helpers</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">true</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">                </span><span style="color:#B5695999;">&quot;</span><span style="color:#998418;">regenerator</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">false</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#999999;">]</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">],</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B5695999;">&quot;</span><span style="color:#998418;">presets</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">[</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#999999;">[</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">@babel/preset-env</span><span style="color:#B5695999;">&quot;</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#999999;">]</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">]</span></span>
<span class="line"><span style="color:#999999;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h4 id="_5-组合使用-babel-preset-env-core-js-3-babel-plugin-transform-runtime-babel-runtime-corejs3" tabindex="-1">5. 组合使用@babel/preset-env + core-js@3 + @babel/plugin-transform-runtime + @babel/runtime-corejs3 <a class="header-anchor" href="#_5-组合使用-babel-preset-env-core-js-3-babel-plugin-transform-runtime-babel-runtime-corejs3" aria-label="Permalink to &quot;5. 组合使用@babel/preset-env + core-js@3 + @babel/plugin-transform-runtime + @babel/runtime-corejs3&quot;">​</a></h4><ul><li>core-js 设置转译api， runtime 设置 false 不转译api。</li><li>runtime 转换了语法，没有转 api，core-js 转了api。</li><li>runtime 提取 helper 代码，减少重复代码，core-js 使用最新版本按需引入。</li><li>体积最小</li></ul><h4 id="_6-组合使用-babel-preset-env-core-js-3-babel-plugin-transform-runtime-babel-runtime-corejs3-core-js和runtime都设置转译api" tabindex="-1">6. 组合使用@babel/preset-env + core-js@3 + @babel/plugin-transform-runtime + @babel/runtime-corejs3，core-js和runtime都设置转译api <a class="header-anchor" href="#_6-组合使用-babel-preset-env-core-js-3-babel-plugin-transform-runtime-babel-runtime-corejs3-core-js和runtime都设置转译api" aria-label="Permalink to &quot;6. 组合使用@babel/preset-env + core-js@3 + @babel/plugin-transform-runtime + @babel/runtime-corejs3，core-js和runtime都设置转译api&quot;">​</a></h4><ul><li>runtime转了语法和api，两者不会重复转译，输出结果与配置4一致。</li></ul><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#B8A965;">plugins</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">[</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#666666;">[</span></span>
<span class="line"><span style="color:#DBD7CAEE;">            </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">@babel/plugin-transform-runtime</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">            </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">                </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#B8A965;">corejs</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">3</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">                </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#B8A965;">helpers</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">true</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">                </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#B8A965;">regenerator</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">false</span></span>
<span class="line"><span style="color:#DBD7CAEE;">            </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#666666;">]</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">],</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#B8A965;">presets</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">[</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#666666;">[</span></span>
<span class="line"><span style="color:#DBD7CAEE;">            </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">@babel/preset-env</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">            </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">                </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#B8A965;">corejs</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">3</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">                </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#B8A965;">useBuiltIns</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">usage</span><span style="color:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">            </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#666666;">]</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">]</span></span>
<span class="line"><span style="color:#666666;">}</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B5695999;">&quot;</span><span style="color:#998418;">plugins</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">[</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#999999;">[</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">@babel/plugin-transform-runtime</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">                </span><span style="color:#B5695999;">&quot;</span><span style="color:#998418;">corejs</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">3</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">                </span><span style="color:#B5695999;">&quot;</span><span style="color:#998418;">helpers</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">true</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">                </span><span style="color:#B5695999;">&quot;</span><span style="color:#998418;">regenerator</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">false</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#999999;">]</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">],</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B5695999;">&quot;</span><span style="color:#998418;">presets</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">[</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#999999;">[</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">@babel/preset-env</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">                </span><span style="color:#B5695999;">&quot;</span><span style="color:#998418;">corejs</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">3</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">                </span><span style="color:#B5695999;">&quot;</span><span style="color:#998418;">useBuiltIns</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">usage</span><span style="color:#B5695999;">&quot;</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#999999;">]</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">]</span></span>
<span class="line"><span style="color:#999999;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="总结" tabindex="-1">总结： <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结：&quot;">​</a></h3><ul><li>个人测试的编译后体积最小的代码是配置5：使用 core-js 的 useBuiltIns 设置按需引入 polyfill 结合 @babel/plugin-transform-runtime 提取重复代码的 helper 代码。</li><li>官方建议的使用方式是：根据使用场景，useBuiltIns 的 polyfill 全局范围添加，@babel/plugin-transform-runtime 的 polyfill 非全局范围添加，采用一种配置即可。</li></ul>`,33),o=[e];function r(t,c,i,y,b,u){return n(),a("div",null,o)}const D=s(p,[["render",r]]);export{m as __pageData,D as default};
