# Service Worker 生命周期

Service Worker 是一种在浏览器后台运行脚本的技术，主要用于提升网页应用的性能和用户体验。它支持离线功能、推送通知等功能，是实现 Progressive Web Apps（PWA）的关键技术之一。本文将详细探讨 Service Worker 的生命周期，包括其注册、安装、激活以及运行时管理等阶段。

## 生命周期概述

Service Worker 的生命周期主要包括以下几个关键阶段：

1. **注册（Registration）**：当页面加载时，JavaScript 代码尝试注册 Service Worker。
2. **安装（Installation）**：浏览器下载并缓存所需的资源文件。
3. **激活（Activation）**：安装成功后，Service Worker 进入活跃状态，开始处理请求。
4. **运行时管理（Runtime Management）**：包括更新、终止和重新注册等操作。

## 详细阶段说明

### 1. 注册阶段

在页面加载过程中，开发者可以通过调用 `navigator.serviceWorker.register()` 方法来注册 Service Worker。这个方法接收一个脚本文件路径作为参数，并返回一个 Promise 对象。如果注册成功，会触发 `onregistered` 回调；若失败，则触发 `onerror`。

**示例代码：**

```javascript
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service Worker 注册成功');
      })
      .catch(err => {
        console.log('Service Worker 注册失败：' + err);
      });
  });
}
```

### 2. 安装阶段

一旦注册成功，浏览器会进入安装阶段。在此期间，Service Worker 脚本会被下载和执行。开发者可以在 `oninstall` 事件中定义需要缓存的资源文件。

**示例代码：**

```javascript
self.addEventListener('install', event => {
  console.log('正在安装 Service Worker');
  
  // 定义需要缓存的资源列表
  const cacheName = 'my-cache-v1';
  const assetsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/app.js'
  ];

  // 使用 Cache API 缓存这些资源
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll(assetsToCache))
      .then(() => console.log('缓存已添加'))
      .catch(err => console.log('缓存失败：' + err))
  );
});
```

### 3. 激活阶段

安装完成后，Service Worker 进入活跃状态。此时，它已经准备好处理客户端的请求。开发者可以在 `onactivate` 事件中初始化一些全局变量或进行其他准备工作。

**示例代码：**

```javascript
self.addEventListener('activate', event => {
  console.log('Service Worker 已激活');
  
  // 确保旧缓存被清理
  event.waitUntil(
    caches.keys()
      .then(keys => keys.filter(key => key !== 'my-cache-v1'))
      .then(oldKeys => Promise.all(oldKeys.map(key => caches.delete(key))))
  );
});
```

### 4. 运行时管理

在活跃状态下，Service Worker 可以处理各种事件，如 `onfetch`、`onpush` 等。此外，当浏览器需要更新 Service Worker 或页面关闭时，可能会触发 `onterminate` 事件。

**示例代码：**

```javascript
self.addEventListener('fetch', event => {
  console.log('收到 fetch 请求');
  
  // 根据缓存策略返回响应
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request.url))
  );
});

self.addEventListener('onterminate', () => {
  console.log('Service Worker 已终止');
});
```

## 生命周期的结束

### 更新（Update）

当 Service Worker 的脚本文件发生变化时，浏览器会尝试更新它。这个过程包括重新安装新的版本，并在完成后触发 `onupdatefound` 和 `onupdateneeded` 事件。

**示例代码：**

```javascript
self.addEventListener('onupdatefound', () => {
  console.log('检测到更新');
});

self.addEventListener('onupdateneeded', () => {
  console.log('需要进行更新');
});
```

### 终止（Termination）

在某些情况下，浏览器可能会终止 Service Worker 的运行。这通常发生在页面关闭或导航至新的域名时。开发者可以在 `onterminate` 事件中执行清理操作。

**示例代码：**

```javascript
self.addEventListener('onterminate', () => {
  console.log('Service Worker 已终止');
  
  // 清理不必要的存储资源
  localStorage.removeItem('someKey');
});
```

## 实际应用案例

### 离线功能实现

通过 Service Worker 的生命周期管理，开发者可以实现基本的离线访问功能。例如，在安装阶段缓存关键资源文件，并在激活后拦截请求，优先从缓存中获取数据。

**步骤：**

1. **注册 Service Worker**
   ```javascript
   if ('serviceWorker' in navigator) {
     window.addEventListener('load', () => {
       navigator.serviceWorker.register('/sw-offline.js')
         .then(registration => {
           console.log('Service Worker 注册成功');
         })
         .catch(err => {
           console.log('Service Worker 注册失败：' + err);
         });
     });
   }
   ```

2. **安装阶段缓存资源**
   ```javascript
   self.addEventListener('install', event => {
     const cacheName = 'offline-v1';
     const assetsToCache = [
       '/',
       '/index.html',
       '/styles.css',
       '/app.js'
     ];

     event.waitUntil(
       caches.open(cacheName)
         .then(cache => cache.addAll(assetsToCache))
         .catch(err => console.log('缓存失败：' + err))
     );
   });
   ```

3. **处理请求**
   ```javascript
   self.addEventListener('fetch', event => {
     event.respondWith(
       caches.match(event.request)
         .then(response => response || fetch(event.request.url))
     );
   });
   ```

### 缓存策略优化

根据应用的需求，开发者可以定义不同的缓存策略。例如，按需更新、时间过期等。

**示例：**

```javascript
self.addEventListener('install', event => {
  const cacheName = 'dynamic-content-v1';
  
  // 只在安装时缓存初始资源
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([...assetsToCache]))
  );
});

// 定义 fetch 策略：先从缓存中获取，若失败则从网络获取
self.addEventListener('fetch', event => {
  const now = new Date().getTime();
  
  // 假设资源在安装后24小时内有效
  if (now > parseInt(localStorage.getItem('cacheExpiration'))) {
    localStorage.removeItem('cacheExpiration');
    return fetch(event.request.url);
  }
  
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request.url))
  );
});
```

## 结论

Service Worker 的生命周期管理是实现高效和可靠的 Web 应用的关键。通过合理利用注册、安装、激活等阶段，开发者可以显著提升应用的性能和用户体验。无论是离线功能还是缓存策略，掌握 Service Worker 的生命周期都能为项目带来实质性的优化。

在实际开发中，建议开发者根据具体需求灵活调整策略，并参考官方文档以获取最新信息和技术支持。