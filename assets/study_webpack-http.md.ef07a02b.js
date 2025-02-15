import{_ as t,o as e,c as o,Q as a}from"./chunks/framework.82820f36.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"study/webpack-http.md","filePath":"study/webpack-http.md","lastUpdated":1720542673000}'),r={name:"study/webpack-http.md"},s=a('<h2 id="websocket和http" tabindex="-1">websocket和http <a class="header-anchor" href="#websocket和http" aria-label="Permalink to &quot;websocket和http&quot;">​</a></h2><h3 id="相同点" tabindex="-1"><strong>相同点：</strong> <a class="header-anchor" href="#相同点" aria-label="Permalink to &quot;**相同点：**&quot;">​</a></h3><ol><li><strong>都是基于tcp的，都是可靠性传输协议</strong></li><li><strong>都是应用层协议</strong></li></ol><h3 id="不同点" tabindex="-1"><strong>不同点：</strong> <a class="header-anchor" href="#不同点" aria-label="Permalink to &quot;**不同点：**&quot;">​</a></h3><ol><li><strong>WebSocket是双向通信协议，模拟Socket协议，可以双向发送或接受信息</strong></li><li><strong>HTTP是单向的</strong></li><li><strong>WebSocket是需要浏览器和服务器握手进行建立连接的</strong></li><li><strong>而http是浏览器发起向服务器的连接，服务器预先并不知道这个连接</strong></li></ol><h3 id="联系" tabindex="-1"><strong>联系：</strong> <a class="header-anchor" href="#联系" aria-label="Permalink to &quot;**联系：**&quot;">​</a></h3><ul><li><strong>WebSocket在建立握手时，数据是通过HTTP传输的。但是建立之后，在真正传输时候是不需要HTTP协议的</strong></li></ul><h3 id="总结-总体过程" tabindex="-1"><strong>总结（总体过程）：</strong> <a class="header-anchor" href="#总结-总体过程" aria-label="Permalink to &quot;**总结（总体过程）：**&quot;">​</a></h3><ol><li>**首先，客户端发起http请求，经过3次握手后，建立起TCP连接；http请求里存放WebSocket支持的版本号等信息，如：Upgrade、Connection、WebSocket-Version等；</li><li>然后，服务器收到客户端的握手请求后，同样采用HTTP协议回馈数据；</li><li>最后，客户端收到连接成功的消息后，开始借助于TCP传输信道进行全双工通信。**</li></ol>',9),n=[s];function l(i,c,h,d,p,_){return e(),o("div",null,n)}const k=t(r,[["render",l]]);export{b as __pageData,k as default};
