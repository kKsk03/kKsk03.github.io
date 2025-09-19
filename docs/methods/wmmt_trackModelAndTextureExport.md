---
title: WMMT赛道模型&贴图解包
createTime: 2025/09/19 16:13:31
permalink: /article/6lmriy04/
---

仅限于解包模型与贴图文件  
最终效果可直接用于进行其他游戏的转模mod制作等操作  

## 所需工具

- [Python](https://www.python.org/downloads/)  
- Autodesk 3ds Max  
- Blender
- Visual Studio Code
- [Namco_NDWD_Custom.ms](https://files.kksk03.site/WMMT/Tools/Namco_NDWD_Custom.ms)  
- [QuickBMS](https://files.kksk03.site/WMMT/Tools/quickbms.7z)  
- [NUT2DDS.bms](https://files.kksk03.site/WMMT/Tools/NUT2DDS.bms)  
- [fixTextureName.py](https://files.kksk03.site/WMMT/Tools/fixTextureName.py)  
- [missingTextures.ms](https://files.kksk03.site/WMMT/Tools/missingTextures.ms)  
- [unzipAllBinAndNut.py](https://files.kksk03.site/WMMT/Tools/unzipAllBinAndNut.py)  
- [splitFiles.py](https://files.kksk03.site/WMMT/Tools/splitFiles.py)

## 1. 配置工具

::: tip
Python在开启安装程序的时候需要勾选：  

- `Use admin privileges when installing py.exe`  
- `Add python.exe to PATH`  

在最终安装完的界面需要点击：

- `Disable path length limit`  
:::

## 2. 获取地图文件

地图文件将会存放在以下的地方：  

::: file-tree icon="simple"
- W6W10JPN05 或者是其他版本的游戏本体
  - data
    - course
      - stage
        - A_FUKUOKA_DAY_NML/
        - A_FUKUOKA_NGT_NML/
        - A_HAKONE_DAY_EXT/
        - A_HAKONE_DAY_NML/
        - … 更多其他的地图的文件夹
:::

::: tip
所有地图都划分成了 `DAY` 和 `NGT` 以代表清晨 / 深夜  
自行寻找对应的地图即可  
:::

如现在以 `广岛 - 清晨` 的地图为例  
应找到 `A_HIROSHIMA_DAY_NML` 文件夹，并将其整个文件夹复制到其他目录下即可。  

## 3. 分析地图文件

以 `A_HIROSHIMA_DAY_NML` 为例：  

::: file-tree icon="simple"
- A_HIROSHIMA_DAY_NML
  - COMMON 每区段共用的资源
    - clip/ 未知用途
    - env_param/ 未知用途
    - model 模型与贴图
      - bin/ 模型文件夹
      - nut/ 贴图文件夹
      - LOADLIST_A_HIROSHIMA_DAY_NML_COMMON.lua 未知用途
  - HIROSHIMA 单独区段
    - clip/ 未知用途
    - env_param/ 未知用途
    - model 模型与贴图
      - bin/ 模型文件夹
      - nut/ 贴图文件夹
      - LOADLIST_A_HIROSHIMA_DAY_NML_HIROSHIMA.lua 未知用途
:::

着重聚焦在 `bin` 与 `nut` 文件夹即可。  

## 4. 解包并导入模型文件

以 `HIROSHIMA/model/bin` 中的文件为例  

### 4.1 文件脱壳

将 `unzipAllBinAndNut.py` 文件放置在该目录中，然后右键该文件夹空白处，点击 `在终端中打开`  

在终端中输入并执行：  

```sh
python unzipAllBinAndNut.py
```

示例执行结果：  

```sh
A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT101.bin 解压完成 -> D:\wmmtwork\A_HIROSHIMA_DAY_NML\HIROSHIMA\model\bin\out\A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT101.bin
A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT102.bin 解压完成 -> D:\wmmtwork\A_HIROSHIMA_DAY_NML\HIROSHIMA\model\bin\out\A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT102.bin
A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT103.bin 解压完成 -> D:\wmmtwork\A_HIROSHIMA_DAY_NML\HIROSHIMA\model\bin\out\A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT103.bin
A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT104.bin 解压完成 -> D:\wmmtwork\A_HIROSHIMA_DAY_NML\HIROSHIMA\model\bin\out\A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT104.bin
A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT105.bin 解压完成 -> D:\wmmtwork\A_HIROSHIMA_DAY_NML\HIROSHIMA\model\bin\out\A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT105.bin
A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT106.bin 解压完成 -> D:\wmmtwork\A_HIROSHIMA_DAY_NML\HIROSHIMA\model\bin\out\A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT106.bin
A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT107.bin 解压完成 -> D:\wmmtwork\A_HIROSHIMA_DAY_NML\HIROSHIMA\model\bin\out\A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT107.bin
A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT108.bin 解压完成 -> D:\wmmtwork\A_HIROSHIMA_DAY_NML\HIROSHIMA\model\bin\out\A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT108.bin
所有文件处理完成！
```

处理完成后，在 `HIROSHIMA/model/bin` 目录中将会有 `out` 的文件夹出现，里面就是经过了脱壳（压缩）处理的文件。  

### 4.2 解包模型文件

将 `splitFiles.py` 文件放置在 [4.1](#_4-1-文件脱壳) 中产生的 `out` 文件夹中，然后右键该文件夹空白处，点击 `在终端中打开`  

在终端中输入并执行：  

```sh
python splitFiles.py
```

::: danger
如果执行后出现类似情况：  

```sh
Traceback (most recent call last):
  File "D:\wmmtwork\A_HIROSHIMA_DAY_NML\HIROSHIMA\model\bin\out\splitFiles.py", line 1, in <module>
    from csplitb import CSplitB
ModuleNotFoundError: No module named 'csplitb'
```

说明缺少依赖包 `csplitb`  
请先在终端 ==（需使用管理员终端）=={.danger} 中安装该依赖：  

```sh
pip install csplitb
```
:::

示例执行结果：  

```sh
A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT101.bin 拆分完成 -> D:\wmmtwork\A_HIROSHIMA_DAY_NML\HIROSHIMA\model\bin\out\A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT101
A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT102.bin 拆分完成 -> D:\wmmtwork\A_HIROSHIMA_DAY_NML\HIROSHIMA\model\bin\out\A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT102
A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT103.bin 拆分完成 -> D:\wmmtwork\A_HIROSHIMA_DAY_NML\HIROSHIMA\model\bin\out\A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT103
A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT104.bin 拆分完成 -> D:\wmmtwork\A_HIROSHIMA_DAY_NML\HIROSHIMA\model\bin\out\A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT104
A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT105.bin 拆分完成 -> D:\wmmtwork\A_HIROSHIMA_DAY_NML\HIROSHIMA\model\bin\out\A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT105
A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT106.bin 拆分完成 -> D:\wmmtwork\A_HIROSHIMA_DAY_NML\HIROSHIMA\model\bin\out\A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT106
A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT107.bin 拆分完成 -> D:\wmmtwork\A_HIROSHIMA_DAY_NML\HIROSHIMA\model\bin\out\A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT107
A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT108.bin 拆分完成 -> D:\wmmtwork\A_HIROSHIMA_DAY_NML\HIROSHIMA\model\bin\out\A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT108
所有文件拆分完成！
```

然后在 `out` 文件夹中会出现与 `.bin` 文件名同样的文件夹  
每个文件夹下就是存放的从 `.bin` 文件夹中解包出来的 `.nud` 文件  

### 4.3 导入模型

以 `A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT101` 内的 `.nud` 文件为例  
先打开 `Autodesk 3ds Max` ，然后将 `Namco_NDWD_Custom.ms` 文件拖拽至 `3ds Max` 窗口中，会弹出该插件的窗口  
点击 `Import Model(s)` 按钮，选择 `A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT101` 中的 `.nud` 文件（可批量）  

等待导入完毕即可

::: tip
由于有部分模型会影响 `Autodesk 3ds Max` 对模型的显示，因此导入后建议直接导出为 `.fbx` 文件  
然后再导入至 `Blender` 中，对有问题以及多余的文件删除后，再重新导出为 `.fbx` 文件  
然后导入回 `Autodesk 3ds Max` 中即可  
:::

## 5. 导出贴图

### 5.1 文件脱壳

先前往 `HIROSHIMA/model/nut` 文件夹  
将 `unzipAllBinAndNut.py` 文件放置在该目录中，然后右键该文件夹空白处，点击 `在终端中打开`  

在终端中输入并执行：  

```sh
python unzipAllBinAndNut.py
```

示例执行结果：  

```sh
A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT101.bin 解压完成 -> D:\wmmtwork\A_HIROSHIMA_DAY_NML\HIROSHIMA\model\bin\out\A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT101.bin
A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT102.bin 解压完成 -> D:\wmmtwork\A_HIROSHIMA_DAY_NML\HIROSHIMA\model\bin\out\A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT102.bin
A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT103.bin 解压完成 -> D:\wmmtwork\A_HIROSHIMA_DAY_NML\HIROSHIMA\model\bin\out\A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT103.bin
A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT104.bin 解压完成 -> D:\wmmtwork\A_HIROSHIMA_DAY_NML\HIROSHIMA\model\bin\out\A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT104.bin
A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT105.bin 解压完成 -> D:\wmmtwork\A_HIROSHIMA_DAY_NML\HIROSHIMA\model\bin\out\A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT105.bin
A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT106.bin 解压完成 -> D:\wmmtwork\A_HIROSHIMA_DAY_NML\HIROSHIMA\model\bin\out\A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT106.bin
A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT107.bin 解压完成 -> D:\wmmtwork\A_HIROSHIMA_DAY_NML\HIROSHIMA\model\bin\out\A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT107.bin
A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT108.bin 解压完成 -> D:\wmmtwork\A_HIROSHIMA_DAY_NML\HIROSHIMA\model\bin\out\A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT108.bin
所有文件处理完成！
```

处理完成后，在 `HIROSHIMA/model/nut` 目录中将会有 `out` 的文件夹出现，里面就是经过了脱壳（压缩）处理的文件。  

### 5.2 导出贴图

解压 `quickbms.7z` 后，打开里面的 `quickbms.exe` 程序（如果打不开则使用管理员打开）  

1. 打开后，弹出的第一个窗口选择下载的 `NUT2DDS.bms` 文件，点击 `打开`    
2. 选择后，弹出的第二个窗口选择 `out` 文件夹中的 `.nut` 文件，点击 `打开`  
3. 选择后，弹出的第三个窗口，在 `out` 文件夹中新建文件夹 `alltex` ，并选择该文件夹，点击 `打开` 即可  

重复上述操作，将全部 `.nut` 文件都导出到 `alltex` 文件夹中即可，完成贴图导出。  

## 6. 修复遗漏贴图

在导入模型的时候，其实是缺少了贴图的，那么需要将其进行修复。  

以导入 `SECT101` 部分为例：  

1. 在已经导入模型后，将 `missingTextures.ms` 拖拽至 `3ds Max` 窗口中让其执行（期间不会弹出任何弹窗）  
2. 前往桌面，找到 `missing_textures.txt`，并将其用 `Visual Studio Code` 打开  
3. 打开后，里面将会显示当前 `SECT` 所遗漏的贴图名  
4. 将 `fixTextureName.py` 复制到 `HIROSHIMA/model/nut/out` 文件夹中，然后用 `Visual Studio Code` 打开  
5. 根据以下解释对 `fixTextureName.py` 文件进行修改，将原来的贴图名删除，并将刚才 `missing_textures.txt` 中的贴图名添加进来，并且需要调整输入与输出文件夹位置  

```python :collapsed-lines
import os
import shutil

# 输入文件名列表
file_names = [
    # 删除原有的贴图名 
    "0_16_0_32_200", # [!code --]
    "1_16_0_33_125", # [!code --]
    "2_16_0_32_21", # [!code --]
    "3_16_0_33_126", # [!code --]
    "4_16_0_32_108", # [!code --]
    "5_16_0_32_115", # [!code --]
    "6_16_0_33_127", # [!code --]
    "7_16_0_32_103", # [!code --]
    "8_16_0_33_14", # [!code --]
    "9_16_0_33_13", # [!code --]
    # 将刚才 missing_textures.txt 中的贴图添加进来
    # 需要注意格式："<文件名>",
    # 每个文件名左右两边需有英文双引号，结尾需要有英文逗号
    # 例如：
    "0_16_0_32_26", # [!code ++]
    "1_16_0_32_26", # [!code ++]
    "2_16_0_32_79", # [!code ++]
    "3_16_0_32_79", # [!code ++]
    "4_16_0_32_81", # [!code ++]
    "5_16_0_32_231", # [!code ++]
    "6_16_0_32_26", # [!code ++]
    "7_16_0_32_23", # [!code ++]
    "8_16_0_32_79", # [!code ++]
    "9_16_0_32_81", # [!code ++]
]

# 源文件夹路径
# 修改为你的源路径，就是刚才存放全部贴图的alltex文件夹
source_folder = r".\alltex" # [!code --]
# 示例：
source_folder = r".\alltex" # [!code ++]

# 目标文件夹路径
# 修改为你的目标路径，这里需要更改一下，要更改成每个SECT的文件名
target_folder = r".\out" # [!code --]
# 示例：
target_folder = r".\out\A_HIROSHIMA_DAY_NML_HIROSHIMA_SECT101" # [!code ++]

# 确保目标文件夹存在
os.makedirs(target_folder, exist_ok=True)

for full_name in file_names:
    # 去掉前缀数字部分
    parts = full_name.split("_", 1)
    if len(parts) != 2:
        print(f"文件名格式错误: {full_name}")
        continue
    _, actual_name = parts

    # 查找源文件
    found = False
    for file in os.listdir(source_folder):
        name_without_ext, ext = os.path.splitext(file)
        if name_without_ext == actual_name:
            src_path = os.path.join(source_folder, file)
            dst_path = os.path.join(target_folder, full_name + ext)
            shutil.copy2(src_path, dst_path)
            print(f"复制 {file} -> {dst_path}")
            found = True
            break

    if not found:
        print(f"未找到文件: {actual_name} 在 {source_folder} 中")

print("完成！")
```

6. 在 `HIROSHIMA/model/nut/out` 文件夹中，在空白处右键，点击 `在终端中打开`  
7. 执行以下代码：  

```sh
python fixTextureName.py
```

输出示例：  

```sh :collapsed-lines
复制 16_0_32_26.dds -> .\out\0_16_0_32_26.dds
复制 16_0_32_26.dds -> .\out\1_16_0_32_26.dds
复制 16_0_32_79.dds -> .\out\2_16_0_32_79.dds
复制 16_0_32_79.dds -> .\out\3_16_0_32_79.dds
复制 16_0_32_81.dds -> .\out\4_16_0_32_81.dds
复制 16_0_32_231.dds -> .\out\5_16_0_32_231.dds
复制 16_0_32_26.dds -> .\out\6_16_0_32_26.dds
复制 16_0_32_23.dds -> .\out\7_16_0_32_23.dds
复制 16_0_32_79.dds -> .\out\8_16_0_32_79.dds
复制 16_0_32_81.dds -> .\out\9_16_0_32_81.dds
复制 16_0_32_229.dds -> .\out\10_16_0_32_229.dds
复制 16_0_32_229.dds -> .\out\11_16_0_32_229.dds
复制 16_0_32_227.dds -> .\out\12_16_0_32_227.dds
复制 16_0_32_198.dds -> .\out\13_16_0_32_198.dds
复制 16_0_32_95.dds -> .\out\14_16_0_32_95.dds
复制 16_0_32_14.dds -> .\out\15_16_0_32_14.dds
复制 16_0_32_94.dds -> .\out\16_16_0_32_94.dds
复制 16_0_32_197.dds -> .\out\17_16_0_32_197.dds
复制 16_0_32_188.dds -> .\out\18_16_0_32_188.dds
复制 16_0_34_83.dds -> .\out\19_16_0_34_83.dds
复制 16_0_32_95.dds -> .\out\20_16_0_32_95.dds
复制 16_0_32_16.dds -> .\out\21_16_0_32_16.dds
复制 16_0_34_81.dds -> .\out\22_16_0_34_81.dds
复制 16_0_32_118.dds -> .\out\23_16_0_32_118.dds
复制 16_0_32_122.dds -> .\out\24_16_0_32_122.dds
复制 16_0_32_9.dds -> .\out\25_16_0_32_9.dds
复制 16_0_32_11.dds -> .\out\26_16_0_32_11.dds
复制 16_0_32_14.dds -> .\out\27_16_0_32_14.dds
复制 16_0_32_17.dds -> .\out\28_16_0_32_17.dds
复制 16_0_32_137.dds -> .\out\29_16_0_32_137.dds
复制 16_0_32_138.dds -> .\out\30_16_0_32_138.dds
复制 16_0_32_159.dds -> .\out\31_16_0_32_159.dds
复制 16_0_32_161.dds -> .\out\32_16_0_32_161.dds
复制 16_0_32_155.dds -> .\out\33_16_0_32_155.dds
复制 16_0_32_249.dds -> .\out\37_16_0_32_249.dds
复制 16_0_32_110.dds -> .\out\39_16_0_32_110.dds
复制 16_0_32_108.dds -> .\out\39_16_0_32_108.dds
复制 16_0_32_187.dds -> .\out\40_16_0_32_187.dds
复制 16_0_34_83.dds -> .\out\42_16_0_34_83.dds
复制 16_0_32_26.dds -> .\out\43_16_0_32_26.dds
复制 16_0_32_81.dds -> .\out\44_16_0_32_81.dds
复制 16_0_32_95.dds -> .\out\45_16_0_32_95.dds
复制 16_0_34_84.dds -> .\out\46_16_0_34_84.dds
复制 16_0_32_16.dds -> .\out\47_16_0_32_16.dds
复制 16_0_32_198.dds -> .\out\48_16_0_32_198.dds
复制 16_0_34_81.dds -> .\out\49_16_0_34_81.dds
复制 16_0_32_94.dds -> .\out\50_16_0_32_94.dds
复制 16_0_32_118.dds -> .\out\51_16_0_32_118.dds
复制 16_0_32_122.dds -> .\out\52_16_0_32_122.dds
复制 16_0_32_51.dds -> .\out\53_16_0_32_51.dds
复制 16_0_32_9.dds -> .\out\54_16_0_32_9.dds
复制 16_0_32_11.dds -> .\out\55_16_0_32_11.dds
复制 16_0_32_14.dds -> .\out\56_16_0_32_14.dds
复制 16_0_32_17.dds -> .\out\57_16_0_32_17.dds
复制 16_0_32_137.dds -> .\out\59_16_0_32_137.dds
复制 16_0_32_138.dds -> .\out\60_16_0_32_138.dds
复制 16_0_32_159.dds -> .\out\61_16_0_32_159.dds
复制 16_0_32_161.dds -> .\out\62_16_0_32_161.dds
复制 16_0_32_155.dds -> .\out\63_16_0_32_155.dds
复制 16_0_32_109.dds -> .\out\64_16_0_32_109.dds
复制 16_0_32_3.dds -> .\out\65_16_0_32_3.dds
复制 16_0_32_3.dds -> .\out\66_16_0_32_3.dds
复制 16_0_32_197.dds -> .\out\67_16_0_32_197.dds
复制 16_0_32_249.dds -> .\out\68_16_0_32_249.dds
完成！
```

8. 执行完毕后，其命名修复后的贴图就出现在刚才在 `fixTextureName.py` 中设置的 `target_folder` 文件夹中了。  
9. 将修复命名后的贴图全部复制到与模型文件同一文件夹（上述应该有建议导出 `fbx` 文件再导入的，那就复制到 `fbx` 文件同目录中），然后导入 `fbx` 文件即可  

## 7. 整体流程

1. 解包全部 `SECT` 的地图模型文件，然后分每个 `SECT` 导入至 `3ds Max`  
2. 将其每个 `SECT` 的模型导出为格子单独的 `fbx` 文件  
3. 各自导入至 `Blender` 中删除多余模型与影响视觉的模型，然后再重新各自导出为 `fbx` 文件  
4. 导出全部贴图  
5. 各自导入每个 `SECT` 的 `fbx` 文件，然后输出缺漏的贴图名  
6. 使用 `py` 文件对贴图名进行重命名修复
7. 各自放好 `fbx` 文件与其贴图，各自导入 `fbx` 文件至 `3ds Max` 中即可  
8. 最终合并全部 `fbx` 文件（可以是保存 `max` 文件再合并），最终得到完整地图模型。  