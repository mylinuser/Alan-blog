## 自动化部署

## Jenkins全局配置SSH
![ssh](/public/autodeploy1.jpg)
## 配置构建Git参数
新建一个自由风格的项目，配置构建Git参数barnch和环境env
![ssh](/public/autodeploy2.jpg)
## 配置源码
配置git源码管理
- 设置仓库地址
- 设置github账号凭证
- 设置分支参数，使用上面设置的git参数${branch}
![ssh](/public/autodeploy3.jpg)
## 配置触发器
- 设置触发构建的行为为：代码提交触发
- 设置select text凭证：需要到github上面设置，具体路径为setting -> Developer setting -> Personal access tokens -> tokens(classic) -> Generate new token(classic) -> 输入密码 -> 设置Node(随便起个名字) -> 设置权限(repo全选、admin：repo_hook全选) -> Generate token
- 设置使用node环境(需要安装node插件，并且在系统管理->全局工具配置里面配置好node版本，服务器还需要安装nvm来控制node指定版本和jenkins设置的最好对上)
![ssh](/public/autodeploy4.png)
## 配置构建步骤
点击增加构建步骤，选择执行Shell，然后填写构建步骤
```
#!/usr/bin/env bash
node -v
npm config set registry https://registry.npmmirror.com
npm i
npm run build
echo $branch
if test $env = "test"; then
echo "test"
else
echo "prod"
fi
```
## 配置构建后步骤
设置这个失败了好几次，有时候是github无法连接443，有时候是包上传失败或者其他原因，比较玄学，后来突然好了
- 点击增加构建后操作步骤，选择发送包到SSH那个选项
- 把之前配置的全局SSH选上
- 配置上传哪些文件，dist/\*\*/\*\*
- 配置去掉的文件前缀，把dist去掉
- 配置上传到服务器哪个文件，/docs/${env}，根据环境放不同文件夹
![ssh](/public/autodeploy5.jpg)
## 配置nginx
- 设置监听端口为8899(如果没法访问，看看是不是防火墙没关，或者安全组没开放端口)
- server_name为转发地址，这里只是本地静态资源转发，所以填localhost，如果是转发其他机器上，就填那个机器的ip或者域名
- root设置默认请求地址，主页为index.html
- 把访问包含/daily-blog/路径的请求，全部转发到访问服务器/docs/test/的静态地址上
```
server {
    listen 8899;
    server_name localhost;
    root /docs/test;
    index index.html index.htm default.html default.htm;

    location ^~ /daily-blog/ {
        alias /docs/test/;
    }
}
```
## 配置域名
- 网上找个靠谱的网站购买域名，比如阿里云、腾讯云、华为云等等，最好是和购买服务器同一家
- 购买后，需要实名认证并且备案，按照网站指引进行操作即可
- 实名认证后，设置域名的ip，一般在域名解析功能页面
- 选择记录类型，一般为A，代表IPV4，不用管
- 填写主机记录，这个是域名前缀，最好新建三条，分别写*、www、@
- 填写记录值，直接写服务器ip即可
![ssh](/public/autodeploy6.jpg)
## 访问域名
都配置好后，直接访问域名，这时候可能页面无响应(需要加上刚刚nginx设置的转发端口8899)