---
outline: deep
---

# WMMT 1&2 解包

目前可以在 [Archive.org](https://archive.org/download/sega_chihiro) 找到尚未解包的游戏文件。  

## 准备工作

### 工具

- [chdman](https://files.kksk03.site/Tools/chdman.zip)  
- [GD-ROM Explorer](https://files.kksk03.site/Tools/jc-gdrom-explorer-v1.6.3.zip)  

### 文件

- 尚未解包的游戏文件  
- [extract-fatx.c](https://github.com/JayFoxRox/Chihiro-Tools/blob/master/extract-fatx.c)  

## Step1 将游戏文件转换为 `.chd`

1. 解压 `chdman.zip` ，进入解压后的文件夹，可以发现里面有以下三个文件：  

    - `chdman.exe`
    - `chd2cue.bat`
    - `cue2chd.bat`

    该文件夹后续称为 `chdman` 文件夹  

2. 将游戏文件放入 `chdman` 文件夹  

    ::: tip 提示
    所有游戏文件均需放入，应包含 `.cue` & `.bin` 文件
    :::

3. 双击 `cue2chd.bat` ，并等待执行完毕。执行完毕后，将出现一个 `.chd` 文件。  

## Step2 将 `.chd` 文件转换为 `.gdi` 文件

1. 在 `chdman` 文件夹下，打开Windows终端  
2. 输入以下指令（需更换指令内文件名）：  

```sh
.\chdman extractcd -i "<chd的文件名>.chd" -o "<chd的文件名>.gdi"
```

3. 等待执行完毕。执行完毕后，将出现一个 `.gdi` 文件与 `.bin` & `.raw` 文件。  

## Step3 提取 1GB / 512 文件

1. 解压 `jc-gdrom-explorer-v1.6.3.zip`  
2. 进入解压后的文件夹（该文件夹后续称为 `GDROM` 文件夹）  
3. 打开 `GD-ROM Explorer.exe`  
4. 左上角点击 `File` --> `Open...` ，选择 Step2 中导出的 `.gdi` 文件  
5. 加载完毕后，右侧文件列表全选  
    随后点击上方 `Edit` --> `Selection` --> `Extract selected files to...`  
6. 选择一个合适的文件夹，点击确定，随后等待导出完毕即可。  

## Step4 解密得到 `.dat` 文件

::: danger 前提工作
需要将 [Step3](#step3-提取-1gb--512-文件) 中所提取的以下两个任一文件进行重命名：  

- `xxxx.1GB` ==> `xxxx_1GB.bin`  
- `xxxx.512` ==> `xxxx_512.bin`  
:::

1. 回到 `GD-ROM Explorer.exe` ，点击上方：  
    `Tools` --> `Decrypt a Naomi binary`  
2. 选择前提工作中的 1GB / 512 的 `.bin` 文件  
3. 输入 DES KEY，然后点击 `Decrypt`  

::: tip 提示
根据版本不同选择不同的DES KEY  
- WMMT1 Export Rev B [GDX-0009B]: `6B017C54F8B9FEC8`  
- WMMT1 Japan Rev B [???-?????]: `???`  
- WMMT2 Export Rev A [GDX-0016A]: `6B017C54F8B9FEC8`  
- WMMT2 Export [GDX-0016]: `6B017C54F8B9FEC8` （不确定）  
- WMMT2 Japan Rev A [???-?????]: `???`  
- WMMT2 Japan [???-?????]: `???`  
:::

4. 选择一个合适的文件夹存放 `.dat` 文件，等待解密完毕即可  

## Step5 解包文件

::: danger 前提
需 Linux 系统下操作
:::

1. 在 Linux 下编译 [extract-fatx.c](https://github.com/JayFoxRox/Chihiro-Tools/blob/master/extract-fatx.c) 后得到可执行的 `extract-fatx` 文件  
2. 复制 [Step4](#step4-解密得到-dat-文件) 中所解密后的 `.dat` 文件至 Linux 系统内任一位置  
3. 使用指令检查 `.dat` 文件是否为 `FATX` 格式：  

```sh
file "xxxx_1GB.dat"
```

正确的输出：  

```sh
kksk@ssh-server:~/wmmt$ file "V322_S_1GB.dat"
V322_S_1GB.dat: FATX filesystem data
kksk@ssh-server:~/wmmt$
```

::: tip 提示
如果输出不符，则可能是在 [Step4](#step4-解密得到-dat-文件) 的步骤中使用了错误的 DES KEY
:::

4. 解包文件

使用指令进行解包：  

```sh
./extract-fatx <dat的文件名>.dat <输出路径>
```

如：  

```sh
kksk@ssh-server:~/wmmt$ ./extract-fatx V322_S_1GB.dat ./out/
```

5. （可选）打包所有文件为 `.zip`  

```sh
zip -r -9 "<文件名>.zip" <刚才的输出的文件夹名>
```