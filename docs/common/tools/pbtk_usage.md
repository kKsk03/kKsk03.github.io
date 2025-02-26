---
outline: deep
---

# `PBTK` 的使用方法

该工具可用于导出 `exe` 中的 `.proto` 文件使用  
项目地址：[PBTK](https://github.com/marin-m/pbtk)  

## 安装依赖

::: danger 警告
需要安装 `Python`  
:::

1. 安装 `PyQt5`  

```sh
pip install PyQt5
```

2. 安装 `protobuf`  

```sh
pip install protobuf
```

3. 安装 `PyQtWebEngine`  

```sh
pip install PyQtWebEngine
```

4. 安装 `requests`  

```sh
pip install requests
```

::: tip 一条指令安装全部依赖
```sh
pip install PyQt5 protobuf PyQtWebEngine requests
```
:::

## 启动

```sh
python gui.py
```