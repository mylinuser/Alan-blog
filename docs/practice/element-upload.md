## element UI UpLoad组件上传图片踩过的坑

后台Node通过**multer实现图片上传，koa2有待了解。**

.文件上传有以下方法

- `muilter.single(‘file’)`, //适用于单文件上传
- `muilter.array(‘file’,num)`, //适用于多文件上传，num为最多上传个数，上传文件的数量可以小于num,
- `muilter.fields(fields)`, //适用于混合上传，比如A类文件1个，B类文件2个。官方API有详细说明。

**链接：**https://www.jianshu.com/p/31f00c164e9f

**自己采用的方案，nodeJs与elementUI实现上传图片：**https://www.jianshu.com/p/e967fe9b06a4

**介绍详细的文章：1、**https://blog.csdn.net/qq_32849999/article/details/105073218

**2、**https://www.jianshu.com/p/cc219e2f0e8f

**koa实现简单图片上传：**https://www.jianshu.com/p/901084d32de2

**上传成功后的操作：**[https://blog.csdn.net/weixin_48284431/article/details/117784965?utm_term=elementui上传存blob地址&utm_medium=distribute.pc_aggpage_search_result.none-task-blog-2~all~sobaiduweb~default-0-117784965&spm=3001.4430](https://blog.csdn.net/weixin_48284431/article/details/117784965?utm_term=elementui%E4%B8%8A%E4%BC%A0%E5%AD%98blob%E5%9C%B0%E5%9D%80&utm_medium=distribute.pc_aggpage_search_result.none-task-blog-2~all~sobaiduweb~default-0-117784965&spm=3001.4430)

**vue+elementui+nodejs koa实现图片的上传：**https://www.jianshu.com/p/70b317501632

### 问题1：**Element UI 上传图片组件（支持多传和单传），报错Cannot set property 'status' of null**

解决：fileLIst是只读的，不能修改。我们这里使用uploadList来保存我们需要改动的数组，否则报错Cannot set property 'status' of null

参考文献：https://blog.csdn.net/qq_32849999/article/details/105073218

### 问题2：拿到后台的数据response直接push，报错[Vue warn]: Error in callback for watcher "fileList": "TypeError: Cannot create property 'uid' on string

解决：element ui做自定义上传时，返回的url地址要放到列表里边，如果直接push就会报错

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f17104d3-50b5-4782-a025-a226fbeafed9/Untitled.png)

所以正确写法应该是：传一个对象过去，name是你要展示的名字，就不会报错了。

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/280583fe-4ea0-475c-a32e-26c4ad6df3b5/Untitled.png)