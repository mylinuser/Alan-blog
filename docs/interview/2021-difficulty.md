## forEach

对mongoose的API不太熟悉，不知道定义的子类Schema怎么用mongoose的API，网上这方面的资料很少，用了forEach重复调用Schema进行单一数据操作，造成重复返回请求，后面用Promise.then解决问题。

## 图片上传

以前没做过，有点难度，前端用了element UI，后端Node用了fs、multer等实现了图片上传

```jsx
var fs = require('fs');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // 接收到文件后输出的保存路径（若不存在则需要创建）
        cb(null, 'upload/');
    },
    filename: function (req, file, cb) {
        // 将保存文件名设置为 时间戳 + 文件原始名，比如 151342376785-123.jpg
        // cb(null, Date.now() + "-" + file.originalname);
        var myDate = new Date();
        var year = myDate.getFullYear(); //获取当前年
        var mon = myDate.getMonth() + 1; //获取当前月
        var date = myDate.getDate(); //获取当前日
        var h = myDate.getHours();//获取当前小时数(0-23)
        var m = myDate.getMinutes();//获取当前分钟数(0-59)
        var s = myDate.getSeconds();//获取当前秒
        cb(null, year + '-' + mon + '-' + date + '' + h + '' + m + '' + s + '' + file.originalname);
    }
});

var createFolder = function (folder) {
    try {
        // 测试 path 指定的文件或目录的用户权限,我们用来检测文件是否存在
        // 如果文件路径不存在将会抛出错误"no such file or directory"
        fs.accessSync(folder);
    } catch (e) {
        // 文件夹不存在，以同步的方式创建文件目录。
        fs.mkdirSync(folder);
    }
};

var uploadFolder = './upload/';
createFolder(uploadFolder);

var upload = multer({ storage: storage });

/**
 * 上传图片
 */
router.post('/img/upload', upload.single('file'), function (req, res, next) {
    res.json({
        code: 200,
        url: 'http://localhost:3000/upload/' + req.file.filename
    })
})
```

## History模式

第一次使用history模式，开发使用没问题，但是打包后，出现空白页面。

解决：需要匹配一个404错误页面，找不到路径的时候展示。

## Vite的优点

vite是使用rollup进行打包的

1、慢启动的优化，不进行打包，直接编译

2、每个文件通过 http 头缓存在浏览器端，当编辑完一个文件，只需让此文件缓存失效。当基于 ES module 进行热更新时，仅需更新失效的模块，这使得更新时间不随包的增大而增大。

3、组件热更新，修改完立马重新编译

https://www.cnblogs.com/fayin/p/14234872.html

## Vue3的改变

1、setup，把Vue2的一些optionAPI改成了compositionAPI

2、对代码进行分析，给动态的内容添加标注，每次更新只更新标注内容，按需加载（进行了tree shaking），加快了速度(用ESM进行代码静态分析，ESM需要一开始就引用，因为需要知道哪些代码是需要的)

3、从Object.defineProperty改成了用Proxy

## 图片懒加载

**npm i vue-lazyload -S**

安装懒加载插件

**Vue.use(VueLazyload)**

引入

```jsx
Vue.use(VuewLazyload,
preLoad:1.3,
error: '×××.png' // 发生错误时显示的图片
loading: '×××.png' // 加载时时显示的图片
attempt: 1
)
```

第二种引入

![Untitled](/public/difficulty2.png)

## 自己定义插件

![Untitled](/public/difficulty1.png)

然后再main.js引入，用Vue.use(myPlugins)注册

Vue.use(myPlugins, {

name: ‘’

})

 // 传入的对象会传到自定义组件方法的options里