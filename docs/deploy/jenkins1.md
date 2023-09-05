## jenkins安装

https://www.cnblogs.com/xiao987334176/p/11323795.html

https://www.bilibili.com/video/BV12y4y1M7jU?p=8&spm_id_from=pageDriver

首先，我们将存储库密钥添加到系统。

```jsx
wget -q -O - https://pkg.jenkins.io/debian/jenkins-ci.org.key | sudo apt-key add -
```

添加密钥后，系统将返回`OK`。 接下来，我们将Debian包存储库地址附加到服务器的`sources.list`

```jsx
echo deb http://pkg.jenkins.io/debian-stable binary/ | sudo tee /etc/apt/sources.list.d/jenkins.list
```

当这两个都到位时，我们将运行`update` ，以便`apt-get`将使用新的存储库

```jsx
sudo apt-get update
```

最后，我们将安装Jenkins及其依赖项，包括Java：

```jsx
sudo apt-get install -y jenkins
```

## ****开始Jenkins****

使用`systemctl`我们将启动Jenkins：

```jsx
sudo systemctl start jenkins
```

由于`systemctl`不显示输出，我们将使用其`status`命令来验证它是否成功启动

```jsx
sudo systemctl status jenkins
```

如果一切顺利，输出的开始应显示服务处于活动状态，并配置为启动时启动：

```jsx
jenkins.service - LSB: Start Jenkins at boot time
   Loaded: loaded (/etc/init.d/jenkins; bad; vendor preset: enabled)
   Active: active (exited) since 四 2019-08-08 20:27:37 CST; 33s ago
     Docs: man:systemd-sysv-generator(8)
```

**请注意已经关闭了防火墙**，腾讯云可以设置防火墙开放端口，我们将使用服务器域名或IP地址访问Jenkins的默认端口`8080`

```jsx
http://ip_address_or_domain_name:8080
```

查看jenkins密码

```jsx
sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```

默认端口是8080，有时候由于端口占用需要修改如下：

1，检查 /etc/init.d/jenkins 脚本，修改 do_start 函数的 check_tcp_port 命令，端口号从 8080 换成 8082：

2，修改 /etc/default/jenkins 文件，将端口 8080 改成 8082

```jsx
HTTP_PORT=8082
```

3，重启Jenkins

```jsx
sudo systemctl restart jenkins
```

**如何使用Nginx反向代理使用SSL配置Jenkins**

https://www.howtoing.com/how-to-configure-jenkins-with-ssl-using-an-nginx-reverse-proxy/

## dockers配置加速

https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors

登录阿里云后

**配置镜像加速器**

针对Docker客户端版本大于 1.10.0 的用户

您可以通过修改daemon配置文件/etc/docker/daemon.json来使用加速器

```jsx
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://tdlm5cc1.mirror.aliyuncs.com"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```