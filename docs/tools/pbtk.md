---
title: PBTK从二进制文件中导出.proto文件
createTime: 2025/12/07 20:02:30
permalink: /article/zy8klfo7/
---

源码：  
- [PBTK](https://github.com/marin-m/pbtk)  

需要提前安装 `Python`  

## 安装依赖

```bash
pip install PyQt5 protobuf PyQtWebEngine requests
```

## 使用

```bash
python gui.py
```

选择 `Step 1: Extract .proto structures from apps`  
然后再选择 `Extract Protobuf metadata from binary file (*.dll, *so...)`  
选择目标的二进制文件，然后点击 **打开**  
即可完成导出  

## 文件

默认存放在 `C:\Users\<UserName>\AppData\Roaming\pbtk\protos\<YourBinaryFileName>\`  