---
title: VS2022 NASM 安装&使用
createTime: 2025/08/21 14:04:50
permalink: /article/ixlo7qhy/
---

# VS2022 NASM 安装&使用

## 安装

1. 进入页面：[VSNASM](https://github.com/ShiftMediaProject/VSNASM)  
2. 进入 [Release](https://github.com/ShiftMediaProject/VSNASM/releases) 页面下载最新安装包  
3. 解压 `VSNASM.zip`  
4. 管理员启动 `install_script.bat`  
5. 打开以下路径：  

    `C:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Microsoft\VC\v160\BuildCustomizations`  

::: tip 提示
具体路径为安装VS2022时所设置的路径
:::

6. 将以下文件复制至上述路径内：

    - `nasm.xml`  
    - `nasm.targets`  
    - `nasm.props`  

7. 打开VS2022，在需要使用的解决方案的项目中，右键，选择：

    - `生成依赖项` ==> `生成自定义`  

8. 勾选 `nasm(.target, .props)` 并点击确定  
9. 打开以下路径：  

    `C:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Microsoft\VC\v160`  

10. 前往 [NASM](https://www.nasm.us/) 官网下载最新版本  
11. 将 `nasm.exe` 解压至上述路径下  

## 使用

1. 找到需要进行编译的 `.asm` 文件，右键点击属性  
2. 将 `配置属性` ==> `常规` ==> `项类型` 调整为 `自定义生成工具`  
3. 点击应用  
4. 进入 `配置属性` ==> `自定义生成工具` ==> `常规`  
5. 将 `命令行` 设定为：

    `<route to nasm.exe> -f win64 <route to asm file> -o <asm file name>.asm.obj`  

6. 将 `输出` 设定为：  

    `<asm file name>.asm.obj`  

7. 点击确定即可  