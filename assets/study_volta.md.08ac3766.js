import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.82820f36.js";const D=JSON.parse('{"title":"volta","description":"","frontmatter":{},"headers":[],"relativePath":"study/volta.md","filePath":"study/volta.md","lastUpdated":1723977222000}'),p={name:"study/volta.md"},o=l(`<h1 id="volta" tabindex="-1">volta <a class="header-anchor" href="#volta" aria-label="Permalink to &quot;volta&quot;">​</a></h1><h2 id="volta是什么" tabindex="-1">volta是什么？ <a class="header-anchor" href="#volta是什么" aria-label="Permalink to &quot;volta是什么？&quot;">​</a></h2><p><code>volta</code>是一个<code>node</code>版本切换工具，可以细到为每个项目设置单独的node环境，不需要像<code>nvm</code>那样<code>nvm use</code>一个个切换环境</p><h2 id="为什么使用volta" tabindex="-1">为什么使用volta? <a class="header-anchor" href="#为什么使用volta" aria-label="Permalink to &quot;为什么使用volta?&quot;">​</a></h2><p>使用 <code>volta</code>，一旦您选择了 <code>Node</code> 引擎，您就不必担心它。切换项目不需要您手动切换版本。</p><p>volta有以下功能和优点：</p><ul><li>跨平台支持，包括 Windows 和所有 Unix shell</li><li>快速设置和切换node引擎</li><li>逐个项目的无缝版本切换</li><li>支持多个包管理器(目前支持npm、yarn)</li><li>为协作者提供可复制的环境</li></ul><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">注意：安装volta时，需要把其他node管理器(nvm)卸载掉，同时node环境卸载干净</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#393a34;">注意：安装volta时，需要把其他node管理器(nvm)卸载掉，同时node环境卸载干净</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><a href="https://github.com/volta-cli/volta/releases/download/v1.0.6/volta-1.0.6-windows-x86_64.msi" target="_blank" rel="noreferrer">window安装</a></p><p>安装最新版本</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">volta</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">install</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">node@latest</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">volta</span><span style="color:#393A34;"> </span><span style="color:#B56959;">install</span><span style="color:#393A34;"> </span><span style="color:#B56959;">node@latest</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>安装指定版本，比如14.5.0</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">volta</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">install</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">node@14.5.0</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">volta</span><span style="color:#393A34;"> </span><span style="color:#B56959;">install</span><span style="color:#393A34;"> </span><span style="color:#B56959;">node@14.5.0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="查看所有安装环境" tabindex="-1">查看所有安装环境 <a class="header-anchor" href="#查看所有安装环境" aria-label="Permalink to &quot;查看所有安装环境&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">volta</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">list</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">//</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">查看当前环境依赖</span></span>
<span class="line"><span style="color:#80A665;">volta</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">list</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">all</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">//</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">查看所有环境依赖</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">volta</span><span style="color:#393A34;"> </span><span style="color:#B56959;">list</span><span style="color:#393A34;"> </span><span style="color:#B56959;">//</span><span style="color:#393A34;"> </span><span style="color:#B56959;">查看当前环境依赖</span></span>
<span class="line"><span style="color:#59873A;">volta</span><span style="color:#393A34;"> </span><span style="color:#B56959;">list</span><span style="color:#393A34;"> </span><span style="color:#B56959;">all</span><span style="color:#393A34;"> </span><span style="color:#B56959;">//</span><span style="color:#393A34;"> </span><span style="color:#B56959;">查看所有环境依赖</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="逐个项目的无缝版本切换" tabindex="-1">逐个项目的无缝版本切换 <a class="header-anchor" href="#逐个项目的无缝版本切换" aria-label="Permalink to &quot;逐个项目的无缝版本切换&quot;">​</a></h2><p>我们有了多个版本的node，就可以到项目中进行对应的设置了。 比如我们vue2的项目需要14版本的node，前往项目目录执行命令</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">volta</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">pin</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">node@14</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">volta</span><span style="color:#393A34;"> </span><span style="color:#B56959;">pin</span><span style="color:#393A34;"> </span><span style="color:#B56959;">node@14</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果我们使用node@14，volta会帮助我们找14中最合适的版本，可能不是我们安装过的版本，如果想使用我们安装的版本，必须把版本号写全</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">volta</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">pin</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">node@14.5.0</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">volta</span><span style="color:#393A34;"> </span><span style="color:#B56959;">pin</span><span style="color:#393A34;"> </span><span style="color:#B56959;">node@14.5.0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>此时我们的项目package.json中会多一个配置</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">volta</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#DBD7CAEE;">: </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">node</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">14.5.0</span><span style="color:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="color:#666666;">}</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">volta</span><span style="color:#B5695999;">&quot;</span><span style="color:#393A34;">: </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">node</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">14.5.0</span><span style="color:#B5695999;">&quot;</span></span>
<span class="line"><span style="color:#999999;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="支持多个包管理器-目前支持npm、yarn" tabindex="-1">支持多个包管理器(目前支持npm、yarn) <a class="header-anchor" href="#支持多个包管理器-目前支持npm、yarn" aria-label="Permalink to &quot;支持多个包管理器(目前支持npm、yarn)&quot;">​</a></h2><p>此配置用来指明我们当前项目设置的volta的环境，包含node、npm、yarn。等等你这里只有设置node呀，npm、yarn在哪，别着急，我们一步一步来。</p><p>虽说node自带npm，但如果我们想限制我们项目npm版本也是可以的，比如限制为8.0.0</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">volta</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">pin</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">npm@8.0.0</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">volta</span><span style="color:#393A34;"> </span><span style="color:#B56959;">pin</span><span style="color:#393A34;"> </span><span style="color:#B56959;">npm@8.0.0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>执行完成之后，package.json 中会多一个配置</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">volta</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#DBD7CAEE;">: </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">node</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">14.5.0</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">npm</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">8.0.0</span><span style="color:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="color:#666666;">}</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">volta</span><span style="color:#B5695999;">&quot;</span><span style="color:#393A34;">: </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">node</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">14.5.0</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">npm</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">8.0.0</span><span style="color:#B5695999;">&quot;</span></span>
<span class="line"><span style="color:#999999;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>如果想设置 yarn 也是同样的道理。</p><h2 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-label="Permalink to &quot;常用命令&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">volta</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">list</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">//查看当前环境的版本</span></span>
<span class="line"><span style="color:#80A665;">volta</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">list</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">all</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">//查看存在的所有版本</span></span>
<span class="line"><span style="color:#80A665;">volta</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">install</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">node</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">//安装最新版的nodejs</span></span>
<span class="line"><span style="color:#80A665;">volta</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">install</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">node@12.2.0</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">//安装指定版本</span></span>
<span class="line"><span style="color:#80A665;">volta</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">install</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">node@12</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">//volta将选择合适的版本安装</span></span>
<span class="line"><span style="color:#80A665;">volta</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">pin</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">node@10.15</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">//将更新项目的package.json文件以使用工具的选定版本</span></span>
<span class="line"><span style="color:#80A665;">volta</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">pin</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">yarn@1.14</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">//将更新项目的package.json文件以使用工具的选定版本</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">volta</span><span style="color:#393A34;"> </span><span style="color:#B56959;">list</span><span style="color:#393A34;"> </span><span style="color:#B56959;">//查看当前环境的版本</span></span>
<span class="line"><span style="color:#59873A;">volta</span><span style="color:#393A34;"> </span><span style="color:#B56959;">list</span><span style="color:#393A34;"> </span><span style="color:#B56959;">all</span><span style="color:#393A34;"> </span><span style="color:#B56959;">//查看存在的所有版本</span></span>
<span class="line"><span style="color:#59873A;">volta</span><span style="color:#393A34;"> </span><span style="color:#B56959;">install</span><span style="color:#393A34;"> </span><span style="color:#B56959;">node</span><span style="color:#393A34;"> </span><span style="color:#B56959;">//安装最新版的nodejs</span></span>
<span class="line"><span style="color:#59873A;">volta</span><span style="color:#393A34;"> </span><span style="color:#B56959;">install</span><span style="color:#393A34;"> </span><span style="color:#B56959;">node@12.2.0</span><span style="color:#393A34;"> </span><span style="color:#B56959;">//安装指定版本</span></span>
<span class="line"><span style="color:#59873A;">volta</span><span style="color:#393A34;"> </span><span style="color:#B56959;">install</span><span style="color:#393A34;"> </span><span style="color:#B56959;">node@12</span><span style="color:#393A34;"> </span><span style="color:#B56959;">//volta将选择合适的版本安装</span></span>
<span class="line"><span style="color:#59873A;">volta</span><span style="color:#393A34;"> </span><span style="color:#B56959;">pin</span><span style="color:#393A34;"> </span><span style="color:#B56959;">node@10.15</span><span style="color:#393A34;"> </span><span style="color:#B56959;">//将更新项目的package.json文件以使用工具的选定版本</span></span>
<span class="line"><span style="color:#59873A;">volta</span><span style="color:#393A34;"> </span><span style="color:#B56959;">pin</span><span style="color:#393A34;"> </span><span style="color:#B56959;">yarn@1.14</span><span style="color:#393A34;"> </span><span style="color:#B56959;">//将更新项目的package.json文件以使用工具的选定版本</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,32),e=[o];function t(c,r,i,y,d,A){return a(),n("div",null,e)}const u=s(p,[["render",t]]);export{D as __pageData,u as default};
