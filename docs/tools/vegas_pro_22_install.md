---
title: Vegas Pro 22 安装
createTime: 2025/08/21 01:05:14
permalink: /article/p6t82rc0/
---

# Vegas Pro 22 安装

下载：[Vegas Pro 22](https://files.kksk03.site/VEGAS/MAGIX%20VEGAS%20Pro%2022.0.0.248%20&%20Patch.7z)  

::: steps

1. 安装

    1. 双击 `VEGAS_Pro_22.0.0.248_x64_DLV_DE-EN-FR-ES-BR_250408_19-05_3CF24F85.exe`  
    2. 选择语言界面，默认英语，点击 `OK` 进入下一步  
    3. （可选）点击 `Change default settings` ，更改 `Select target paths` 与勾选 `Desktop Shortcut` ，然后点击 `OK` 进入下一步  
    4. 点击 `Agree and install` ，等待安装完毕  
    5. 安装完毕后，取消勾选 `Start VEGAS Pro 22.0 now` ，然后点击 `Finish`  

2. 更改语言

    1. 打开 `注册表编辑器`  
    2. 前往路径：`计算机\HKEY_LOCAL_MACHINE\SOFTWARE\VEGAS Creative Software\VEGAS Pro\22.0\Lang`  
    3. 双击 `ULangID` ，双击并更改其值为 `804` ，点击确定保存  
    4. 前往 `VEGAS` 安装目录（`vegas220.exe` 文件所在目录），找到 `language` 文件夹，进入该文件夹  
    5. 复制文件夹中其中一个 `.cfg` 文件，将其重命名为 `local_zh_CN.cfg`  

3. 安装补丁

    1. 复制 `MAGIX VEGAS Pro v22.0 patch.exe` 到 `VEGAS` 安装目录（`vegas220.exe` 文件所在目录）  
    2. 以管理员启动该软件，随后一路下一步即可  
    3. 最后一个页面需选择 `Yes, restart the computer now` ，点击 `Finish` ，然后系统会重启  
    4. 重启完毕后即可使用  

:::