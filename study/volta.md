# volta

## volta是什么？

`volta`是一个`node`版本切换工具，可以细到为每个项目设置单独的node环境，不需要像`nvm`那样`nvm use`一个个切换环境

## 为什么使用volta?

使用 `volta`，一旦您选择了 `Node` 引擎，您就不必担心它。切换项目不需要您手动切换版本。

volta有以下功能和优点：

- 跨平台支持，包括 Windows 和所有 Unix shell
- 快速设置和切换node引擎
- 逐个项目的无缝版本切换
- 支持多个包管理器(目前支持npm、yarn)
- 为协作者提供可复制的环境

## 安装
```
注意：安装volta时，需要把其他node管理器(nvm)卸载掉，同时node环境卸载干净
```

[window安装](https://github.com/volta-cli/volta/releases/download/v1.0.6/volta-1.0.6-windows-x86_64.msi)

安装最新版本

```bash
volta install node@latest
```

安装指定版本，比如14.5.0

```bash
volta install node@14.5.0
```


## 查看所有安装环境

```bash
volta list // 查看当前环境依赖
volta list all // 查看所有环境依赖
```

## 逐个项目的无缝版本切换

我们有了多个版本的node，就可以到项目中进行对应的设置了。
比如我们vue2的项目需要14版本的node，前往项目目录执行命令
```bash
volta pin node@14
```

如果我们使用node@14，volta会帮助我们找14中最合适的版本，可能不是我们安装过的版本，如果想使用我们安装的版本，必须把版本号写全
```bash
volta pin node@14.5.0
```

此时我们的项目package.json中会多一个配置
```js
"volta": {
  "node": "14.5.0"
}
```

## 支持多个包管理器(目前支持npm、yarn)

此配置用来指明我们当前项目设置的volta的环境，包含node、npm、yarn。等等你这里只有设置node呀，npm、yarn在哪，别着急，我们一步一步来。

虽说node自带npm，但如果我们想限制我们项目npm版本也是可以的，比如限制为8.0.0
```bash
volta pin npm@8.0.0
```

执行完成之后，package.json 中会多一个配置
```js
"volta": {
  "node": "14.5.0",
  "npm": "8.0.0"
}
```


如果想设置 yarn 也是同样的道理。

## 常用命令

```bash
volta list //查看当前环境的版本
volta list all //查看存在的所有版本
volta install node //安装最新版的nodejs
volta install node@12.2.0 //安装指定版本
volta install node@12 //volta将选择合适的版本安装
volta pin node@10.15 //将更新项目的package.json文件以使用工具的选定版本
volta pin yarn@1.14 //将更新项目的package.json文件以使用工具的选定版本
```
