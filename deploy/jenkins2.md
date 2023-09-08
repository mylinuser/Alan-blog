## jenkins安装2

https://blog.csdn.net/qq_35114214/article/details/88747597

1. 依次输入命令：

```jsx
wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo apt-key add -
vim /etc/apt/sources.list
```

2. 最后一行添加：

```jsx
deb https://pkg.jenkins.io/debian-stable binary/
```

3. 输入命令

```jsx
sudo apt-get update
sudo apt-get install jenkins
```

## ****jenkins相关shell命令****

```jsx
// 查看jenkins运行状态
sudo service jenkins status

// 启动jenkins服务
sudo service jenkins start

// 重启jenkins服务
sudo service jenkins restart

// 停止jenkins服务
sudo service jenkins stop
```

## ****自定义端口号****

修改/etc/default/jenkins文件，将HTTP_PORT对应的端口号由8080改成8082

```jsx
# port for HTTP connector (default 8080; disable with -1)
HTTP_PORT=8080
```

![Untitled](/public/jenkins2.png)

## ****卸载jenkins****

参考地址：https://www.cnblogs.com/wangcp-2014/p/6978245.html

删除命令：

```jsx
//服务
sudo apt-get remove jenkins

//安装包，注意这里如果不是ubuntu那就yum
sudo apt-get remove --auto-remove jenkins

//配置和数据
sudo apt-get purge jenkins

sudo apt-get purge --auto-remove jenkins
```