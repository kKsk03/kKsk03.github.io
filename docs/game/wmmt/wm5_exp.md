---
title: WMMT5 Export
createTime: 2025/12/03 15:41:08
permalink: /article/byozfa54/
---

::: tip
为防止 Emuline 的可能的抽风 / 文件链接被删除，因此特作备份。  
来源：[Emuline](https://www.emuline.org/topic/4112-arcade-pc-wangan-midnight-maximum-tune-5-export-update-patch-namco-es1-a2/)  
:::

平台：Namco System ES1 A2（Debian Linux）  

这些是更新补丁文件，需要已安装的 `WMMT4`。  
由于 `WMMT4 Export` 的基础媒体文件未转储/丢失，解决方法是使用 `WMMT4 JP` 并对其进行打补丁。  
请注意，部分未被 `EXP` 补丁文件覆盖的 `UI` 界面仍将保留日语。由于目前尚无运行此补丁的方法，其稳定性未知。  

此版本似乎是游戏的调试或测试版本，因为它没有 `WMN4r` 的 `elf` 可执行文件，而是使用了 `WMN4i_attract_aging` 和 `WMN4i_attract_aging_enable_fontcashe` 这两个 `elf` 可执行文件。  

此处提供了针对不同转储文件的多个不同版本的补丁，以及包含 `Gzip` 压缩资源文件的 `WMMT4 JP Rev1.10` 镜像。  

## 要求

- WMMT4 任意区域版本（推荐使用 `WMMT4 EN Export` 版本）  
- Nvidia 显卡  
- Debian Linux 系统电脑  

## 下载

1. 完整预打补丁的 `WMMT5 Export` 文件：  

`aHR0cHM6Ly9waXhlbGRyYWluLmNvbS91LzNKQXIyQkx0`  

- 原链接（Pixeldrain）=> [下载](https://pixeldrain.com/u/3JAr2BLt)  
- 备份（本人转存）=> [备份（本人转存）]()  

2. 适用于日服 `MT4` 的 `MT5 Export` 补丁（来自预打补丁的破解版 `WMN4` - `prepatched cracked WMN4`）：  

`aHR0cHM6Ly9waXhlbGRyYWluLmNvbS91L3VEcGZOdE5j`  

- 原链接（Pixeldrain）=> [下载](https://pixeldrain.com/u/uDpfNtNc)  
- 备份（本人转存）=> [备份（本人转存）]()  

3. 适用于日服 `MT4 Rev 1.00` 的 `MT5 Export` 补丁（来自 `maxi4 decrypted`）：  

`aHR0cHM6Ly9waXhlbGRyYWluLmNvbS91L1hvdTlUU2Nr`  

- 原链接（Pixeldrain）=> [下载](https://pixeldrain.com/u/Xou9TSck)  
- 备份（本人转存）=> [备份（本人转存）]()  

4. `MT4 Rev1.10` 镜像，资源已压缩以减小文件大小（不包含 `MT5 EXP` 或旧版 `MT4` 破解程序）：  
（可选，适用于需要 `MT4 Rev1.10` 但文件大小不超过 `40GB` 的用户）  

`aHR0cHM6Ly9waXhlbGRyYWluLmNvbS91L1hvNzRuQ0Vz`  

- 原链接（Pixeldrain）=> [下载](https://pixeldrain.com/u/Xo74nCEs)  
- 备份（本人转存）=> [备份（本人转存）]()  

## 补丁说明（针对现有转储文件）

### 适用于已破解的WMN4

1. 从第二个链接下载 (WMN4-to-WMN5EN.7z)  
2. 解压文件并将文件修补到转储文件中，如果提示覆盖，请点击“是”。  

### 对于 `Rev1.00 WMMT4`（`Maxi4 Decrypted`）

1. 从第三个链接下载 (Maxi4Decrypted-to-WMN5EN.7z)  
2. 解压文件，并将文件补丁应用到转储文件中。如果提示覆盖，请点击“是”。  

## 游戏运行指南（待定）

目前还没有加载器，但由于游戏基于 ES1 平台，因此需要 Debian-Linux 系统和 Nvidia 显卡。  