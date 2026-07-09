---
title: 小米A3000T v1刷ImmortalWRT
createTime: 2026/07/09 22:28:35
permalink: /blog/w8kdjqzg/
---

最近购入了一个小米A3000T v1版本的路由器打算给弄一个旁路由，用来直接给我手上的设备科学上网。  
但找了网上所有教程，很多都是直接提供整合好的工具啥的，没有说把工具出处给贴上。  
所以由此想着，一边搞一边写一个文章，记录一下搞的全过程，还方便以后可能还要用。  

## 准备工作

1. 小米A3000T v1一台（我这里原厂固件版本是1.0.64）  
2. [xmir-patcher](https://github.com/openwrt-xiaomi/xmir-patcher)  
3. [Mobaxterm](https://mobaxterm.mobatek.net/)  
4. [uboot](https://www.right.com.cn/forum/thread-8328967-1-1.html)  

## #1 路由器准备

购置好路由器之后，用网线随便接一个口（A3000T这个路由器是WAN口和LAN口共用的），另一头接电脑。  
然后启动路由器，接着摁住 `RESET` 键十几秒左右，路由器灯会熄灭然后重新亮起，表明已经重置完毕。  
随后电脑进入后台：[http://192.168.31.1](http://192.168.31.1)，跳过所有配置网络，直接设置好密码即可。  

::: warning
中途可能会询问是否自动更新固件，需要将其关闭  
（v1其实不关也可能没问题，但是v2的固件不是所有都通用的）  
:::

## #2 开启SSH并备份原系统

### #2.1 开启SSH

1. 解压 `xmir-patcher` 的压缩包，得到里面的文件。  
2. 双击里面的 `run.bat`  
3. 在弹出的命令行窗口中，会提示选项。输入 `2` 并回车：  

```
2 - Connect to device (install exploit)
```

4. 输入路由器后台密码，按下回车  
5. 等待，如果密码正确，那么将会看到：  

```
#### SSH server are activated! ####
```

此时 `SSH` 已经开启，不要着急关掉命令行窗口，要接着做下一步。  

### #2.2 备份原系统

在做完 [#2.1 开启SSH](#21-开启ssh) 后，会重新回到所有选项的显示。  

1. 输入 `4` 并回车：  

```
4 - Create full backup
```

2. 等待备份，最后会弹出提示：

```
Completed!
```

得到这个提示的时候，代表已经备份完毕。  
备份完的文件，会在：`xmir-patcher-main\backups` 目录下。  
不要着急关掉命令行窗口，要接着做下一步。  

### #2.3 固化SSH权限

在做完 [#2.2 备份原系统](#22-备份原系统) 后，会重新回到所有选项的显示。  

1. 输入 `6` 并回车：  

```
6 - Install permanent SSH
```

2. 等待，最后会弹出提示：

```
Patch for bdata result: OK
```

得到这个提示的时候，代表已经处理完毕。  
执行完 [#2.1 开启SSH](#21-开启ssh) & [#2.2 备份原系统](#22-备份原系统) & [#2.3 固化SSH权限](#23-固化ssh权限) 三步后，就可以关闭命令行窗口了。  

## #3 SSH刷入uboot

### #3.1 连接SSH

1. 启动 `Mobaxterm`  
2. 左上角找到 `Session` 按钮并点击  
3. 在弹出窗口中，选择 `SSH` ，然后在 `Remote host` 中输入 `192.168.31.1` ，点击 `OK`  
4. 如果点击 `OK` 后，弹出窗口，请点击 `Accept`  
5. 在终端中，会显示 `login as:` ，输入用户名：`root`，随后密码同样为 `root` 。  
6. 输入密码回车后，会看到 `ARE U OK` 的提示，则代表 `SSH` 已连接。  

### #3.2 刷入uboot

1. 在左侧找到 `tmp` 目录，双击进入。（如果没有，就点击一下上一级的按钮：`Parent directory`）    
2. 点击上传按钮  
3. 选择 `mt7981-xiaomi_mi-router-ax3000t-fip-multi.bin`，点击确定。  
4. 刷入固件：  

```ssh
cd /tmp
mtd write mt7981-xiaomi_mi-router-ax3000t-fip-multi.bin FIP
```

过程：  

```ssh
root@XiaoQiang:~# cd /tmp
root@XiaoQiang:/tmp# mtd write mt7981-xiaomi_mi-router-ax3000t-fip-multi.bin FIP
Unlocking FIP ...

Writing from mt7981-xiaomi_mi-router-ax3000t-fip-multi.bin to FIP ...
root@XiaoQiang:/tmp#
```

验证：  

```ssh
mtd verify mt7981-xiaomi_mi-router-ax3000t-fip-multi.bin FIP
```

过程（出现 `success` 即为成功）：  

```ssh
root@XiaoQiang:/tmp# mtd verify mt7981-xiaomi_mi-router-ax3000t-fip-multi.bin FIP
Verifying FIP against mt7981-xiaomi_mi-router-ax3000t-fip-multi.bin ...
b51ba870d3a49abe96e814fd04694ce7 - FIP
b51ba870d3a49abe96e814fd04694ce7 - mt7981-xiaomi_mi-router-ax3000t-fip-multi.bin
Success
root@XiaoQiang:/tmp#
```

## #4 刷入ImmortalWRT

::: tip
这部分是真的找资料找的要炸  
网上一堆教程，不是v2版的就是刷的别的系统，也完全没有提说固件怎么分，而且都是那种打包好固件的。  
对于我这种就是想刷最新的人来说简直不太友好  
:::

### #4.1 进入uboot

1. 拔掉电源，按住 `RESET` 键，通电开机，等到路由器的灯变蓝了就可以松开 `RESET` 键。  
2. 在电脑上，去到 `控制面板\网络和 Internet\网络连接` ，然后右键有线网卡，进入 `属性` 。  
3. 双击 `Internet 协议版本 4(TCP/IPv4)`  
4. 将 `自动获得 IP 地址` 改为 `使用下面的 IP 地址`，随后输入：  

    - IP地址：`192.168.1.10`（其实别的也可以）  
    - 子网掩码：自动的，如果没自动就输入 `255.255.255.0`  
    - 默认网关：`192.168.1.1`  

    随后点击确定即可。  
5. 到浏览器访问 [192.168.1.1](http://192.168.1.1) ，就会进入 `uboot` 的后台了。  

### #4.2 刷入固件

1. 在 `uboot` 界面，选择 `default` 分区  

::: danger
不要选择其他分区，因为已经有人炸过了，无论是 `OpenWRT` 还是 `ImmortalWRT` 都是
:::

2. 选择 `initramfs-factory.ubi` 的文件，点击上传后刷入，等待刷入完成（刷入完成的话，路由器会重启，直至重新亮白灯）。  
3. 刷入完成后，重新进入 `uboot` ，然后刷入 `initramfs-kernel.bin`。  
4. 刷入完成后，将 [#4.1 进入uboot](#41-进入uboot) 中第 4 步中所调整的 `使用下面的 IP 地址` 改回为 `自动获得 IP 地址`。  
5. 到浏览器访问 [192.168.1.1](http://192.168.1.1) ，就进入到 `ImmortalWRT` 的后台了。  

::: tip
初始密码：`root`
:::

6. 拿初始密码进入后台，随后转到 系统 --> 备份与更新 --> 更新固件。  
7. 点击 ==刷写固件== ，选择 `sysupgrade.bin` 文件，按指示刷写完毕即可。  

刷入完成！  

## 恢复原厂固件

工具 & 固件下载：  

- [原厂恢复工具](https://www1.miwifi.com/wap_download.html)  
- [固件下载网站](https://www1.miwifi.com/miwifi_download.html)  