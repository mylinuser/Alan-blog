# Docker&Jenkins

#### 温馨提醒，docker内核版本必须是3.10+以上的版本

您可以通过修改daemon配置文件/etc/docker/daemon.json来使用加速器

```
# https://cr.console.aliyun.com/cn-shenzhen/instances/mirrors
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://tdlm5cc1.mirror.aliyuncs.com"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```

## 查看方式

```
uname -r
```

## 卸载老版本的 docker 及其相关依赖
```
sudo yum remove docker docker-common container-selinux docker-selinux docker-engine
```
## 更新yum
```
yum update -y
```
## 安装 yum-utils，它提供了 yum-config-manager，可用来管理yum源
```
sudo yum install -y yum-utils
```
## 添加yum源
```
sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```
## 更新索引

### centos7
```
sudo yum makecache fast
```
### centos8
```
sudo yum makecache
```

## 安装 docker-ce

centos8  需要先安装依赖包，centos7可直接跳过下面两步直接安装docker-ce

#### 获取rpm
```
wget https://download.docker.com/linux/centos/7/x86_64/edge/Packages/containerd.io-1.2.6-3.3.el7.x86_64.rpm
```
#### 安装
```
yum -y install containerd.io-1.2.6-3.3.el7.x86_64.rpm
sudo yum install -y docker-ce
```
## 启动 docker
```
sudo systemctl start docker
```
## 验证是否安装成功
```
sudo docker info
```

## 安装docker-compose
#### 安装epel源
```
yum install -y epel-release
```
#### 安装docker-compose
```
yum install -y docker-compose 
```

