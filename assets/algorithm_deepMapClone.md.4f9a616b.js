import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.82820f36.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"algorithm/deepMapClone.md","filePath":"algorithm/deepMapClone.md","lastUpdated":1720542673000}'),p={name:"algorithm/deepMapClone.md"},l=e(`<div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">const deepMapClone = (obj, map = new WeakMap()) =&gt; {</span></span>
<span class="line"><span style="color:#dbd7caee;">  if (typeof obj !== &quot;object&quot; || obj === null) {</span></span>
<span class="line"><span style="color:#dbd7caee;">    return obj;</span></span>
<span class="line"><span style="color:#dbd7caee;">  }</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">  if (map.has(obj)) {</span></span>
<span class="line"><span style="color:#dbd7caee;">    return map.get(obj);</span></span>
<span class="line"><span style="color:#dbd7caee;">  }</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">  const result = Array.isArray(obj) ? [] : {};</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">  map.set(obj, result);</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">  for (const key in obj) {</span></span>
<span class="line"><span style="color:#dbd7caee;">    if (obj.hasOwnProperty(key)) {</span></span>
<span class="line"><span style="color:#dbd7caee;">      result[key] = deepMapClone(obj[key], map);</span></span>
<span class="line"><span style="color:#dbd7caee;">    }</span></span>
<span class="line"><span style="color:#dbd7caee;">  }</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">  return result;</span></span>
<span class="line"><span style="color:#dbd7caee;">};</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#393a34;">const deepMapClone = (obj, map = new WeakMap()) =&gt; {</span></span>
<span class="line"><span style="color:#393a34;">  if (typeof obj !== &quot;object&quot; || obj === null) {</span></span>
<span class="line"><span style="color:#393a34;">    return obj;</span></span>
<span class="line"><span style="color:#393a34;">  }</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">  if (map.has(obj)) {</span></span>
<span class="line"><span style="color:#393a34;">    return map.get(obj);</span></span>
<span class="line"><span style="color:#393a34;">  }</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">  const result = Array.isArray(obj) ? [] : {};</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">  map.set(obj, result);</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">  for (const key in obj) {</span></span>
<span class="line"><span style="color:#393a34;">    if (obj.hasOwnProperty(key)) {</span></span>
<span class="line"><span style="color:#393a34;">      result[key] = deepMapClone(obj[key], map);</span></span>
<span class="line"><span style="color:#393a34;">    }</span></span>
<span class="line"><span style="color:#393a34;">  }</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">  return result;</span></span>
<span class="line"><span style="color:#393a34;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,1),o=[l];function c(r,t,i,b,d,y){return a(),n("div",null,o)}const _=s(p,[["render",c]]);export{m as __pageData,_ as default};
