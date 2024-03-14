# Jenkins

## yum 下载jenkins

## 配置yum源

```
sudo wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo
sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io-2023.key
```
## 安装jenkins
```
# 最新版本jenkins已不支持java8
yum install fontconfig java-11-openjdk
yum install jenkins -y
```

## 刷新配置
systemctl daemon-reload

## 启动jenkins，并配置开机启动
```
systemctl start jenkins
systemctl enable jenkins
```
### 启动失败可能是jdk版本原因
```
在终端中执行以下命令来查找Java的安装路径：
update-alternatives --config java
执行以下命令，选择 JDK 11 作为系统默认的 Java 版本：
sudo update-alternatives --config java
```

### 查看初始密码 
```
/var/lib/jenkins/secrets/initialAdminPassword
```

1:查看防火状态
```
systemctl status firewalld

service  iptables status
```

2:暂时关闭防火墙
```
systemctl stop firewalld

*service  iptables stop*
```
3:永久关闭防火墙
```
systemctl disable firewalld

*chkconfig iptables off*
```
4:重启防火墙
```
systemctl enable firewalld

service iptables restart
```

## docker下载jenkins

```
docker pull jenkins/jenkins
docker run -d -v jenkins_home:/var/jenkins_home -p 8080:8080 -p 50000:50000 jenkins/jenkins:lts
docker ps -a // 查看容器
docker images // 查看镜像
```

## 需要安装的插件
1. locale // 中文
2. publish over ssh
3. node


## 遇到的问题
1. 仓库无法连接
解决：因为jenkins是docker安装的，虽然服务器有git，但是运行的容器没有git
进入容器
```
docker exec -itu root b896766053f2 /bin/sh
// 查看容器当前操作系统
cat /etc/issue
```
Debian 系统（不是 Ubuntu，也不是 CentOS），这里 yum 是没有的，所以不能用 yum 安装，这里用 apt-get 代替 yum。
```
apt-get update
// 如果提示更新失败
sudo systemctl restart docker
docker restart b896766053f2
```
安装Git
```
apt-get install git
apt-get install sudo
```