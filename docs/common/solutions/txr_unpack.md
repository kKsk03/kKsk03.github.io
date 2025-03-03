---
outline: deep
---

# 首都高赛车 `FModel` 解包

准备：  
- VS2022  
- [FModel](https://fmodel.app/)  

## 使用 `FModel` 添加游戏

1. 打开 `FModel.exe`  
2. 弹出窗口中，点击 `ADD UNDETECTED GAME` 下方的 <span class="material-symbols-outlined">unfold_more</span> 按钮  
3. `Directory` 中，点击 <span class="material-symbols-outlined">more_horiz</span> 按钮，然后选择游戏根目录  
4. 点击 <span class="material-symbols-outlined">add</span> 按钮，将其添加到游戏列表  
5. 将 `UE Versions` 设定为 `GAME_UE5_4`  
6. 点击 `OK`  

## 设置 AES KEY

在左上角，点击 `Directory` ==> `AES` ，在 `Main Static Key` 中粘贴：  

```
0xD499D0D1C8E2B87D576EA9756B5137306D1A96D378124C16A6F033BE2A9CBB4A
```

然后点击 `OK` 即可  

## 解决 `can't serialize` 问题

这是因为缺少了 `mapping file` 的问题。这个似乎在 `UE5` 的游戏上很常见。  

1. 使用 `VS2022` 编译 [Dumper-7](https://github.com/Encryqed/Dumper-7)，会得到一个 `Dumper-7.dll` 的文件  
2. 安装 [DLL Injector](https://dllinjector.net/)  
3. 打开 DLL Injector，点击 `browse` 按钮，选择编译出来的 `Dumper-7.dll` 文件  
4. 运行游戏  
5. 在 DLL Injector 左侧列表中，选择游戏进程  
6. 点击上方 `Inject` 按钮即可  

::: tip 提示
在 `C:/Dumper-7` 下可以找到导出的文件，只需要获取 `.usmap` 文件即可
:::

7. 在 `FModel` 的 `Settings` 中，打开 `Local Mapping File` 按钮，将 `Mapping File Path` 设置为导出的 `.usmap` 文件即可  