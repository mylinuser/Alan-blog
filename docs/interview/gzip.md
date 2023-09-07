## webpack GZip压缩

gzip简介
HTTP协议上的gzip编码是一种用来改进web应用程序性能的技术，web服务器和客户端（浏览器）必须共同支持gzip。目前主流的浏览器，Chrome,firefox,IE等都支持该协议。

简单来说，gzip是一种压缩技术。经过gzip压缩后页面大小可以变为原来的30%甚至更小，这样，用户浏览页面的时候速度会快得多。

那么客户端和服务器之间是如何通信来支持gzip的呢？通过下图我们可以很清晰的了解。

### **nginx启用gzip**

![Untitled](/public/gzip1.png)

### **[webpack](https://so.csdn.net/so/search?q=webpack&spm=1001.2101.3001.7020)构建gz文件**

前提：项目基于"webpack": “^3.6.0”

`config/index.js`下有如下语句：

![Untitled](/public/gzip2.png)

1、productionGzip默认为false，将它设置为true

2、注意到上方有注释，需要先安装compression-webpack-plugin插件

3、npm install --save-dev compression-webpack-plugin安装成功后，执行npm run build却出现报错

![Untitled](/public/gzip3.png)

4、根据提示，修改`webpack.prod.conf.js`中的配置（asset 改为 filename）

![Untitled](/public/gzip4.png)

5、再次执行`npm run build`，仍然有出现报错

![Untitled](/public/gzip5.png)

查资料看，可能和插件的版本有关；

直接npm install后的版本：compression-webpack-plugin": “^7.1.2”

安装时，控制台有警告提示：compression-webpack-plugin 和 webpack 的版本不匹配

![Untitled](/public/gzip6.png)

6、试着 降低`compression-webpack-plugin`版本到`1.1.12`，打包成功

*先卸载高版本，再安装指定版本*

```jsx
npm uninstall --save-dev compression-webpack-plugin
npm install --save-dev compression-webpack-plugin@1.1.12
```

可以看到：打包出的资源文件，压缩比还是不错滴，完美~

![Untitled](/public/gzip7.png)

## **资源发布到服务器**

访问时，通过抓包可看到 请求 和 回复 里都带有gzip标记

![Untitled](/public/gzip8.png)