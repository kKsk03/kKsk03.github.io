# 在宝塔面板使用`Docker`安装`Alist`

## 准备工作

- 一个可以使用的 `Linux服务器`
- 服务器中需要已安装宝塔面板，并已安装 `Docker` 服务

## 拉取镜像

左侧 `Docker` --> `镜像` --> `从仓库中拉取`  
镜像名 `xhofe/alist` ，确认，等待拉取完成  

![1](https://pic.imgdb.cn/item/656b208fc458853aefc5f441.jpg)  

## 添加容器

`容器` --> `添加容器`  
按照如图所示配置  
容器名随意，端口设置 `5244`  
内存设置 `100` ~ `200` 即可  2FVgSP6p

![2](https://pic.imgdb.cn/item/656b21d9c458853aefcbed1e.jpg)  

创建成功后即自动运行  

## 放行端口

前往服务器面板的 **安全组/防火墙** 放行 `5244` 端口即可

## 基本使用

管理员密码  

```shell
# 随机生成一个密码
./alist admin random
# 手动设置一个密码 `NEW_PASSWORD`是指你需要设置的密码
./alist admin set NEW_PASSWORD
```

::: tip 相关信息
可以使用以下命令来静默启动、停止和重新启动  
```shell
# 携带`--force-bin-dir`参数启动服务
alist start
# 通过pid停止服务
alist stop
# 通过pid重启服务
alist restart
```
:::

## 后续更新

直接在控制台（非容器控制台）  

```shell
docker stop alist
docker rm alist
docker run -d --restart=always -v /etc/alist:/opt/alist/data -p 5244:5244 --name="alist" xhofe/alist:latest
```

::: warning 注意！
此处 `alist` 需要替换为实际容器名  
:::