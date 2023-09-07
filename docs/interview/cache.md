## 强缓存

1. `Expires` 设置时间，过期时间 `expires: Tue, 15 Oct 2019 13:30:54 GMT`
    
    通过本地时间和 expires 比较是否过期，如果过期了就去服务器请求，没有过期的话就直接使用本地的
    
    缺点：本地时间可能会更改， 导致缓存出错
    
2. `Cache-Control` HTTP1.1 中新增的
    - max-age 最大缓存多少毫秒，列如 `Cache-Control: max-age=2592000`
    - no-store (每次都要请求，就连协商缓存都不走)表示不进行缓存，缓存中不得存储任何关于客户端请求和服务端响应的内容。每次 由客户端发起的请求都会下载完整的响应内容。`Cache-Control: no-store`
    - no-cache（默认值）表示不缓存过期的资源，缓存会向源服务器进行有效期确认后处理资源，也许称 为 do-notserve-from-cache-without-revalidation 更合适。浏览器默认开启的是 no-cache，其 实这里也可理解为开启协商缓存
    - public 和 private
        
        public 与 private 是针对资源是否能够被代理服务缓存而存在的一组对立概念
        
        当我们为资源设置了 pubilc，那么它既可以被浏览器缓存也可被代理服务器缓存。设置为
        
        private 的时候，则该资源只能被浏览器缓存，其中默认值是 private。
        
    - max-age 和 s-maxage
        
        s-maxage 只适用于供多用户使用的公共服务器上(如 CND cache)，并只对 public 缓存有效
        

## 协商缓存

> 需要向服务器请求，如果没有过期，服务器会返回 304，
> 
1. **ETag 和 If-None-Match 唯一标识**
- 服务器响应 ETag 值，浏览器携带的是 If-None-Match（携带的是上一次响应的 ETag），服务拿到这 If-None-Match 值后判断过期--> 没有过期 304，并且返回 ETag
    
    ---
    
    二者的值都是服务器为每份资源分配的唯一标识字符串。
    
    - 浏览器请求资源，服务器会在响应报文头中加入 ETag 字段。资源更新的时候，服务端的
    
    ETag 值也随之更新
    
    - 浏览器再次请求资源，会在请求报文头中添加 If-None-Match 字段，它的值就是上次响应
    
    报文中的 ETag 值，服务器会对比 ETag 和 If-None-Match 的值是否一致。如果不一致，服务
    
    器则接受请求，返回更新后的资源，状态码返回 200；如果一致，表明资源未更新，则返回
    
    状态码 304，可继续使用本地缓存，值得注意的是此时响应头会加上 ETag 字段，即使它没
    
    有变化
    
    ---
    
- **Last-Modified 和 If-Modified-Since 时间戳**
缺点： 某些文件修改非常频繁，比如在秒以下的时间内进行修改，(比方说 1s 内修改了 N 次)，
    
    If-Modified-Since 可查到的是秒级，这种修改无法判断