# 前端性能指标

## 如何来衡量前端性能指标？

`Google` 的开发者早就提出了一个 `RAIL` 模型 来解决这个问题。
`RAIL` 是 `Response`、`Animation`、`Idle` 和 `Load` 的首字母缩写，由 `Google Chrome` 团队于 2015 年提出的性能模型，用于提升浏览器内的用户体验和性能。

`RAIL` 把交互分为四个阶段：页面加载、空闲、响应用户输入、滚动和动画。按首字母缩写顺序，其主要原则是：

- **响应**：应该尽可能快速的响应用户，应该在 100ms 或者 100ms 以内响应用户输入。
- **动画**：在展示动画的时候，每一帧应该以 16ms 进行渲染，这样可以保持动画效果的一致性，并且避免卡顿。
- **空闲**：当使用 JavaScript 主线程的时候，应该把任务划分到执行时间小于 50ms 的片段中去，这样可以释放线程以进行用户交互。
- **加载**：应该在小于 1s 的时间内加载完成你的网站，并可以进行用户交互。

### 用于衡量性能指标的主要有`FP`、`FCP`、`LCP`、`CLS`、`TTI`、`FID`、`TBT`、`FMP`这几个，下面分别介绍他们的意义和计算方法

## 衡量标准

| 指标 | 好          | 中等                   | 差           |
| ---- | ----------- | ---------------------- | ------------ |
| FP   | 小于 1.8 秒 | 大于 1.8 秒小于 3.0 秒 | 大于 3.0 秒  |
| FCP  | 小于 1.8 秒 | 大于 1.8 秒小于 3.0 秒 | 大于 3.0 秒  |
| LCP  | 小于 2.5 秒 | 大于 2.5 秒小于 4.0 秒 | 大于 4.0 秒  |
| CLS  | 小于 0.1    | 大于 0.1 小于 0.25     | 大于 0.25    |
| TTI  | 0-3.8 秒    | 3.9-7.3 秒             | 7.3 秒以上   |
| FID  | 0-100 毫秒  | 100-300 毫秒           | 300 毫秒以上 |
| TBT  | 0-200 毫秒  | 200-600 毫秒           | 600 毫秒以上 |
| FMP  | 0-2 秒      | 2-4 秒                 | 4 秒以上     |

## FP

First Paint 首次绘制，指浏览器从开始请求网站内容（导航阶段）到首次向屏幕绘制像素点的时间，刚到 Painting 阶段，所以 FP 也可以理解为是白屏时间。

FP 的计算方法 1：

```ts
window.performance.getEntriesByType('paint')[0].startTime;
```

`window.performance.getEntriesByType('paint')`方法会返回一个数组对象，第一项是 FP，第二项是 FCP

FP 的计算方法 2：

```ts
const observerWithPromise = new Promise<PerformanceObserverEntryList>(
  (resolve, reject) => {
    new PerformanceObserver(resolve).observe({
      entryTypes: ['paint']
    });
  }
);

observerWithPromise
  .then((entryList) => {
    return entryList.getEntries().filter((entry) => {
      return entry.name === 'first-paint';
    })[0];
  })
  .then((entry) => console.log(entry.startTime));
```

## FCP

首次内容绘制 (FCP) 用于衡量从用户首次导航到网页到网页内容的任何部分在屏幕上呈现的时间。对于此指标，“内容”是指文字、图片（包括背景图片）、`svg` 元素或非白色的 `canvas` 元素。

FCP 的计算方法 1：

```ts
window.performance.getEntriesByType('paint')[1].startTime;
```

`window.performance.getEntriesByType('paint')`方法会返回一个数组对象，第一项是 FP，第二项是 FCP

FCP 的计算方法 2：

```ts
const observerWithPromise = new Promise<PerformanceObserverEntryList>(
  (resolve, reject) => {
    new PerformanceObserver(resolve).observe({
      entryTypes: ['paint']
    });
  }
);

observerWithPromise
  .then((entryList) => {
    return entryList.getEntries().filter((entry) => {
      return entry.name === 'first-contentful-paint';
    })[0];
  })
  .then((entry) => console.log(entry.startTime));
```

## LCP

`Largest Contentful Paint`，最大内容绘制，指可视区内容最大的可见元素出现在屏幕上的时间，衡量加载性能的核心指标。

LCP 的计算方法：

```ts
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1]; // Use the latest LCP candidate
  console.log('LCP:', lastEntry.startTime);
  console.log(lastEntry);
});
observer.observe({ type: 'largest-contentful-paint', buffered: true });
```

## CLS

CLS 的计算方法：

```ts
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    // Count layout shifts without recent user input only
    if (!entry.hadRecentInput) {
      console.log('LayoutShift value:', entry.value);
      if (entry.sources) {
        for (const { node, currentRect, previousRect } of entry.sources)
          console.log('LayoutShift source:', node, {
            currentRect,
            previousRect
          });
      }
    }
  }
});

observer.observe({ type: 'layout-shift', buffered: true });
```

## FID

`FID` 衡量的是从用户首次与网页互动（即，点击链接、点按按钮或使用由 `JavaScript` 提供支持的自定义控件）到浏览器实际能够开始处理事件处理脚本以响应相应互动的时间。

例如，以下所有 HTML 元素都需要等到主线程上正在进行的任务完成后，才能响应用户互动：

- 文本字段、复选框和单选按钮（`input`、`textarea`）
- 选择下拉菜单 (`select`)
- 链接数 (`a`)

`FID`的计算方法：

```ts
new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    const delay = entry.processingStart - entry.startTime;
    console.log('FID candidate:', delay, entry);
  }
}).observe({ type: 'first-input', buffered: true });

import { onFID } from 'web-vitals';

// Measure and log FID as soon as it's available.
onFID(console.log);
```

## TTI

`Time to Interactive`，`TTI` 指标用于衡量从网页开始加载到其主要子资源加载完成所用的时间，并且能够快速可靠地响应用户输入。

如需根据网页的性能跟踪记录计算 TTI，请按以下步骤操作：

- 从 First Contentful Paint (FCP) 开始。
- 向前搜索一个至少 5 秒的静默窗口，其中静默窗口的定义为：没有长任务，且不超过两个进行中的网络 GET 请求。
- 向后搜索静默窗口之前的最后一个长任务，如果找不到长任务，则停止在 FCP 处停止。
- TTI 是安静窗口之前的最后一个长任务的结束时间（如果未找到长任务，则与 FCP 值相同）。

### 如何衡量 TTI?

`TTI` 是最好在实验室测量的指标。衡量 `TTI` 的最佳方法是在您的网站上运行 `Lighthouse` 性能审核。如需了解使用详情，请参阅有关 `TTI` 的 `Lighthouse` 文档。

## TBT

总阻塞时间 (`TBT`) 指标用于衡量在 `First Contentful Paint (FCP)` 之后主线程被阻塞的时间足以阻止输入响应的总时间。

默认情况下，`Lighthouse` 会在可交互时间 (`TTI`) 后停止监控 `TBT`，其他一些用于衡量网页加载的实验室工具也会停止监控。请参阅 `TBT` 与 `TTI` 的关系？。

如果有长任务（即在主线程上运行超过 50 毫秒的任务），主线程就会被视为“阻塞”。我们之所以说主线程处于“阻塞”状态，是因为浏览器无法中断正在进行的任务。因此，如果用户在长时间运行的任务过程中与页面交互，浏览器必须等待任务完成后才能响应。

如果任务时间足够长（超过 50 毫秒），用户很可能会注意到延迟，并认为网页运行缓慢或已损坏。

对于给定的长时间运行的任务，阻塞时间超过 50 毫秒。网页的总阻塞时间是在测量的时间范围内（通常是针对网页加载工具的 `TTI`，或其他工具的总跟踪时间）在 `FCP` 后发生的每项长任务的阻塞时间的总和。

### 如何衡量 TBT?

TBT 是一个应该在实验中衡量的指标。衡量 TBT 的最佳方法是在您的网站上运行 `Lighthouse` 性能审核。如需了解使用详情，请参阅关于 TBT 的 Lighthouse 文档。

实验工具
`Lighthouse`
`WebPageTest`

## FMP

`First Meaning Paint`，首次关键内容绘制，指浏览器渲染出第一个关键内容的时间。不过“关键内容”是难有一个明确定义的，根据应用不同其关键内容也是不一样的。

FMP 通常也被用来衡量首屏时间。不过 FMP 的计算过于复杂，所以无法使用 API 直接获取，就算计算出来了也不一定就准确，所以连 Lighthouse 在 6.0 版本之后都不再计算这个指标了，取而代之的是 LCP。
