## windows nginx安装
进入官网下载地址https://nginx.org/en/download.html，点击下载windows版本
![下载nginx](/public/nginx1.jpg)
下载后的文件夹解压到一个没有中文的路径
![解压nginx](/public/nginx2.jpg)
这个时候可以双击nginx.exe，直接启动nginx，但是这样启动出错了看不到原因，推荐使用命令行启动
![启动nginx](/public/nginx3.jpg)
这个时候没有报错，nginx就启动成功了，想要关闭nginx这个时候关闭窗口是没有用的，需要用nginx -S stop或者任务管理器去关闭

## 配置nginx
安装完成后，进入到conf下，找到nginx.conf文件，然后选择一个编辑器把他打开，最好是有nginx提示的那种，然后就会出现类似下面的配置
```
http {
    include       mime.types;
    default_type  application/octet-stream;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;

    server {
        listen       81;
        server_name  localhost;
        ...
    }
}
```
在同级server下添加你想转发的内容，类似下面这样，把acl的请求转发到3000端口，把sys的请求转发到4000端口
```
server {
    listen       81;
    server_name  localhost;
    ...
}
server {
    listen 9001;
    server_name localhost;

    location ~ /acl/ {
        proxy_pass http://localhost:3000;
    }

    location ~ /sys/ {
        proxy_pass http://localhost:4000;
    }
}
```


## nginx命令

**启动 nginx**

进入到 /usr/local/nginx 目录，

接着我们进入到 sbin 目录，通过如下命令启动 nginx：

```css
./nginx
```

当然你也可以配置环境命令，这样在任意目录都能启动 nginx。

可以输入如下命令，查看 nginx 是否有服务正在运行：

```css
ps -ef | grep nginx
```

**关闭 nginx**

有两种方式：

方式1：快速停止

```css
cd /usr/local/nginx/sbin
./nginx -s stop
```

此方式相当于先查出nginx进程id再使用kill命令强制杀掉进程。不太友好。

方式2：平缓停止

```css
cd /usr/local/nginx/sbin
./nginx -s quit
```

此方式是指允许 nginx 服务将当前正在处理的网络请求处理完成，但不在接收新的请求，之后关闭连接，停止工作。

**重启 nginx**

```css
service nginx restart
```

方式1：先停止再启动

```css
./nginx -s quit
./nginx
```

相当于先执行停止命令再执行启动命令。

方式2：重新加载配置文件

```css
./nginx -s reload
```

通常我们使用nginx修改最多的便是其配置文件 nginx.conf。修改之后想要让配置文件生效而不用重启 nginx，便可以使用此命令。

**检测配置文件语法是否正确**

方式1：通过如下命令，指定需要检查的配置文件

```css
nginx -t -c  /usr/local/nginx/conf/nginx.conf
```

方式2：通过如下命令，不加 -c 参数，默认检测nginx.conf 配置文件。

```css
nginx -t
```