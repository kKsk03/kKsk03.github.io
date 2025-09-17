---
title: WMMT车辆模型&贴图解包
createTime: 2025/09/08 14:31:57
permalink: /article/d3v4vv18/
---

仅限于解包模型与贴图文件

## 所需工具

- [XMD](https://files.kksk03.site/WMMT/Tools/xmd.exe)  
- Autodesk 3ds Max
- [Namco_NDWD_Custom.ms](https://files.kksk03.site/WMMT/Tools/Namco_NDWD_Custom.ms)（3ds Max的脚本文件）  
- [QuickBMS](https://files.kksk03.site/WMMT/Tools/quickbms.7z)  
- [NUT2DDS.bms](https://files.kksk03.site/WMMT/Tools/NUT2DDS.bms)  

## 1. 获取文件

前往游戏目录获取文件：  

::: file-tree icon="simple"
- W5P10JPN05 或者是其他版本的游戏本体
  - data
    - car
      - car_data
        - charCar/ 剧情人物驾驶的车辆
        - otherCar/ NPC车辆
        - playerCar/ 玩家所驾驶的车辆
    - …
  - wmn5r.exe 游戏主程序
  - …
:::

::: tip
在 `charCar` / `otherCar` / `playerCar` 中寻找自己想要的车辆  
一般都是以文件夹的形式存在，如 `GTR BNR32` 会叫 `PLC_BNR32`  
找到目标车辆后，将其 ==整个拷贝至其他目录下操作=={.warning} 以防影响游戏本体
:::

## 2. 解包文件

### 2.1 分析文件结构

以 `PLC_BNR32` 为例，其文件夹内结构如下：  

::: file-tree icon="simple"
- PLC_BNR32
  - vinyl/ 这个暂时不知道放的是什么
  - PLC_BNR32.mdl
  - PLC_BNR32.tex
  - PLC_BNR32_AERO_SET.tex
  - PLC_BNR32_CHANGE.tex
  - PLC_BNR32_STD_WHEEL.mdl
  - PLC_BNR32_STD_WHEEL.tex
:::

::: tip 文件解释
- `*.mdl`  
    车辆的模型（除轮毂）
- `*.tex`  
    车辆的纹理（刹车卡钳、阴影、车牌纹理，以及带有透明度的纹理（例如玻璃、灯光回调、内部仪表照明））  
- `*_AERO_SET.tex`  
    车身主纹理，每个空气动力学套件都存储在各自的 `NUT` 纹理容器中  
- `*_CHANGE.tex`  
    发动机盖纹理，与空气动力学套件相同，每个发动机罩都存储在各自的 `NUT` 纹理容器中  
- `*_STD_WHEEL.mdl`  
    轮毂模型  
- `*_STD_WHEEL.tex`  
    轮毂纹理  
:::

### 2.2 进行解包

需要用到 `XMD` 进行解包文件  
将 `.mdl` / `.tex` 文件拖拽至 `xmd.exe` 中打开，其会自动进行解包。  
解包完成后，==同目录下会出现与原文件名相同的文件夹==。  

其文件夹内部将存放解包出来的 `.nud` / `.nut` 文件。  

- `.nud` : 模型文件  
- `.nut` : 纹理文件  

## 3. 导出纹理

需要用到 `QuickBMS` 与 `NUT2DDS.bms` 进行导出  

1. 打开 `quickbms.exe`（如无法打开则使用管理员打开）  
2. 打开后会弹出第一个选择文件的窗口，选择 `NUT2DDS.bms`  
3. 选择后，会出现第二个选择文件的窗口，选择之前解包出来的 `.nut` 文件（可批量）  
4. 选择后，会出现第三个选择文件的窗口，选择一个存放导出贴图文件的文件夹  
5. 等待导出完毕即可  

## 4. 导入模型

需要用到 `Autodesk 3ds Max` 与 `Namco_NDWD_Custom.ms` 进行导入  

1. 打开 `Autodesk 3ds Max`  
2. 将 `Namco_NDWD_Custom.ms` 文件拖拽至 `3ds Max` 窗口中，会弹出该插件的窗口  
3. 点击 `Import Model(s)` 按钮，选择之前解包出来的 `.nud` 文件（可批量）  
4. 等待导入完毕即可  

## Extra 可能存在的问题

- 贴图名可能会与实际模型导入后的所需要的贴图名不一致，需要自行修正