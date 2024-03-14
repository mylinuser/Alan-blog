# jenkins

## 下载rpm包

```
sudo wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo
```
rpm包地址
https://pkg.jenkins.io/redhat-stable/

## 导出密钥
注意：若之前已从Jenkins导入过密钥，“rpm--import”将失败，请忽略，继续执行下面

```
sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key
```
## 安装Jenkins 

```
yum install -y jenkins
# 失败的情况下，忽略检查安装
yum install jenkins --nogpgcheck
```

## 查看Jenkins信息
```
rpm -ql jenkins
```