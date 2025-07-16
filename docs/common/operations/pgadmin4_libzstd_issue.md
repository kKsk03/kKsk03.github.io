---
outline: deep
---

# Docker - 网页版pgAdmin4解决备份缺少 `libzstd.so.1` 的问题

习惯了使用 `pgAdmin4` 进行数据库的备份与还原（简易使用而且不容易出问题），但是在 `1Panel` 上安装的 `PostgreSQL` 可能会出现数据大的情况下，直接从远程的 `pgAdmin4` 备份的数据无法正常导入到数据库中。  
因此需要使用网页版 `pgAdmin4` 进行备份（不知道为啥，总之很奇葩）  
备份的时候会出现 `libzstd.so.1` 文件丢失的情况，需要修复这个问题才能够继续。  

## 解决方法

在 `1Panel` 中打开终端，进入运行 `pgAdmin4` 的 `Docker` 容器的终端：  

```sh
docker exec -it -u 0 <pgadmin容器名> sh
```

在终端中执行（`1Panel` 安装的是 `alpine` 版本的，因此使用的是 `apk`）：  

```sh
apk add zstd
```

即可解决该问题  