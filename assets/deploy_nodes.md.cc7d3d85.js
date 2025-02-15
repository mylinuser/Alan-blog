import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.82820f36.js";const u=JSON.parse('{"title":"nodes","description":"","frontmatter":{},"headers":[],"relativePath":"deploy/nodes.md","filePath":"deploy/nodes.md","lastUpdated":1710431972000}'),p={name:"deploy/nodes.md"},l=e(`<h1 id="nodes" tabindex="-1">nodes <a class="header-anchor" href="#nodes" aria-label="Permalink to &quot;nodes&quot;">​</a></h1><p>安装nvm</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">apt-get install wget</span></span>
<span class="line"><span style="color:#dbd7caee;">wget install nvm</span></span>
<span class="line"><span style="color:#dbd7caee;">wget https://github.com/nvm-sh/nvm/archive/refs/tags/v0.39.1.tar.gz</span></span>
<span class="line"><span style="color:#dbd7caee;">tar -zxvf nvm-0.35.3.tar.gz -C ./</span></span>
<span class="line"><span style="color:#dbd7caee;">source nvm.sh </span></span>
<span class="line"><span style="color:#dbd7caee;">nvm -v</span></span>
<span class="line"><span style="color:#dbd7caee;">nvm install v16.18.1</span></span>
<span class="line"><span style="color:#dbd7caee;">nvm use v16.18.1</span></span>
<span class="line"><span style="color:#dbd7caee;">node -v</span></span>
<span class="line"><span style="color:#dbd7caee;">npm -v</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#393a34;">apt-get install wget</span></span>
<span class="line"><span style="color:#393a34;">wget install nvm</span></span>
<span class="line"><span style="color:#393a34;">wget https://github.com/nvm-sh/nvm/archive/refs/tags/v0.39.1.tar.gz</span></span>
<span class="line"><span style="color:#393a34;">tar -zxvf nvm-0.35.3.tar.gz -C ./</span></span>
<span class="line"><span style="color:#393a34;">source nvm.sh </span></span>
<span class="line"><span style="color:#393a34;">nvm -v</span></span>
<span class="line"><span style="color:#393a34;">nvm install v16.18.1</span></span>
<span class="line"><span style="color:#393a34;">nvm use v16.18.1</span></span>
<span class="line"><span style="color:#393a34;">node -v</span></span>
<span class="line"><span style="color:#393a34;">npm -v</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><a href="https://wakeadmin.wakedata.com/standard/build.html#_3-%E8%84%9A%E6%9C%AC%E7%A4%BA%E4%BE%8B" target="_blank" rel="noreferrer">https://wakeadmin.wakedata.com/standard/build.html#_3-脚本示例</a></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">#!/usr/bin/env bash</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">set -e</span></span>
<span class="line"><span style="color:#dbd7caee;">set -x</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;"># 容器构建</span></span>
<span class="line"><span style="color:#dbd7caee;"># 需要提供以下参数</span></span>
<span class="line"><span style="color:#dbd7caee;"># DOCKER_USER docker 用户</span></span>
<span class="line"><span style="color:#dbd7caee;"># DOCKER_PASSWORD docker 用户密码</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">if [ &quot;$STAGE&quot; = &#39;PRODUCTION&#39; ]; then</span></span>
<span class="line"><span style="color:#dbd7caee;">  export DOCKER_SERVER=ccr.ccs.tencentyun.com</span></span>
<span class="line"><span style="color:#dbd7caee;">else</span></span>
<span class="line"><span style="color:#dbd7caee;">  export DOCKER_SERVER=172.26.59.200</span></span>
<span class="line"><span style="color:#dbd7caee;">fi</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">env</span></span>
<span class="line"><span style="color:#dbd7caee;">node -v</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">npm i -g pnpm</span></span>
<span class="line"><span style="color:#dbd7caee;">pnpm install</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;"># 构建静态资源</span></span>
<span class="line"><span style="color:#dbd7caee;">pnpm build</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;"># 构建镜像</span></span>
<span class="line"><span style="color:#dbd7caee;">node ./scripts/docker-build.js</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;"># 发布</span></span>
<span class="line"><span style="color:#dbd7caee;">node ./scripts/docker-publish.js</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;"># 触发 Rancher 更新</span></span>
<span class="line"><span style="color:#dbd7caee;">node ./scripts/rancher-update.js</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#393a34;">#!/usr/bin/env bash</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">set -e</span></span>
<span class="line"><span style="color:#393a34;">set -x</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;"># 容器构建</span></span>
<span class="line"><span style="color:#393a34;"># 需要提供以下参数</span></span>
<span class="line"><span style="color:#393a34;"># DOCKER_USER docker 用户</span></span>
<span class="line"><span style="color:#393a34;"># DOCKER_PASSWORD docker 用户密码</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">if [ &quot;$STAGE&quot; = &#39;PRODUCTION&#39; ]; then</span></span>
<span class="line"><span style="color:#393a34;">  export DOCKER_SERVER=ccr.ccs.tencentyun.com</span></span>
<span class="line"><span style="color:#393a34;">else</span></span>
<span class="line"><span style="color:#393a34;">  export DOCKER_SERVER=172.26.59.200</span></span>
<span class="line"><span style="color:#393a34;">fi</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">env</span></span>
<span class="line"><span style="color:#393a34;">node -v</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">npm i -g pnpm</span></span>
<span class="line"><span style="color:#393a34;">pnpm install</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;"># 构建静态资源</span></span>
<span class="line"><span style="color:#393a34;">pnpm build</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;"># 构建镜像</span></span>
<span class="line"><span style="color:#393a34;">node ./scripts/docker-build.js</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;"># 发布</span></span>
<span class="line"><span style="color:#393a34;">node ./scripts/docker-publish.js</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;"># 触发 Rancher 更新</span></span>
<span class="line"><span style="color:#393a34;">node ./scripts/rancher-update.js</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div>`,5),c=[l];function o(r,t,i,d,b,m){return n(),a("div",null,c)}const v=s(p,[["render",o]]);export{u as __pageData,v as default};
