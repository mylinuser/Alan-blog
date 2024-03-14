# nodes

安装nvm
```
apt-get install wget
wget install nvm
wget https://github.com/nvm-sh/nvm/archive/refs/tags/v0.39.1.tar.gz
tar -zxvf nvm-0.35.3.tar.gz -C ./
source nvm.sh 
nvm -v
nvm install v16.18.1
nvm use v16.18.1
node -v
npm -v
```

https://wakeadmin.wakedata.com/standard/build.html#_3-%E8%84%9A%E6%9C%AC%E7%A4%BA%E4%BE%8B
```
#!/usr/bin/env bash

set -e
set -x

# 容器构建
# 需要提供以下参数
# DOCKER_USER docker 用户
# DOCKER_PASSWORD docker 用户密码

if [ "$STAGE" = 'PRODUCTION' ]; then
  export DOCKER_SERVER=ccr.ccs.tencentyun.com
else
  export DOCKER_SERVER=172.26.59.200
fi

env
node -v

npm i -g pnpm
pnpm install

# 构建静态资源
pnpm build

# 构建镜像
node ./scripts/docker-build.js

# 发布
node ./scripts/docker-publish.js

# 触发 Rancher 更新
node ./scripts/rancher-update.js

```