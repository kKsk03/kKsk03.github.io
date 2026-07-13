---
title: 文件推送（F:/contents）的研究
createTime: 2026/06/16 23:10:19
permalink: /blog/rfiabzdo/
---

`WMMT` 似乎自从 `WMMT5` 开始就一直使用着同一套文件推送系统。  
这套逻辑主要是用于给游戏端下发贴图文件，让游戏端在特定的情景下显示这个贴图内的内容。  
据目前研究，自 `WMMT5` 直至 `WMMTI` 前的最后一作 `WMMT6RR+` 均是使用同一套系统。  

由于自己总是忘记这玩意到底是什么情况以及怎么用，所以特地写一篇文章来记录自己对这个玩意的所有研究。  

## #1 工作流程

和大多数 `Web` 应用一样，是由客户端主动向服务器发出请求以获取的。  

首先，游戏会对服务器请求一个名为 `/resource/file_list` 的 `API` 。  

::: tip
游戏对于 `/resource/file_list` 的触发方式比较迷。  
有的时候是游戏从机修模式返回到正常待机界面的时候触发，也有的时候是游戏在正常待机界面等待了一轮后才触发。  
前者似乎见的次数不多，但后者是必定能触发的。  
:::

该 `API` 会返回 `files` 与 `interval` 字段。  

其中，`interval` 字段应该是游戏间隔多久向服务端发送一次该 `API` 的请求（我猜单位可能是秒？）  
而 `files` 则包含以下的字段信息：  

:::: field-group

::: field fileId
@type number
@required
@description 文件列表ID
:::

::: field fileType
@type FileType | number
@required
description 文件类型
:::

::: field fileSize
@type number
@required
description 文件体积大小
:::

::: field url
@type string
@required
description 文件的下载 `URL` 
:::

::: field sha1sum
@type Uint8Array
@required
description 文件的 `sha1` 校验码
:::

::: field notBefore
@type number
@required
description 在该时间戳前不生效
:::

::: field notAfter
@type number
@required
description 在该时间戳后不生效
:::

::::

当游戏拿到了这个文件列表后，会在游戏的待机界面经过一轮的等待后（似乎还有其他的触发方式，不过这个其实也不重要）  
使用文件列表中 `url` 字段所提供的链接拉取文件。  
游戏拉取文件后，便会将其存放至 `F` 盘下的 `contents` 文件夹中。  

最后，游戏将会根据文件列表中的 `fileType` 字段，根据其提供的值，进行对应的显示处理。  
当然，如果文件不存在，那他还是会再先拉取一遍的。  

## #2 配置方法

### #2.1 配置文件列表

首先我们应该给服务器配置好文件列表。  
对于我自己开发的 `Fukutoshin` 服务器源码而言，这个文件列表是直接存放在数据库的 `FileList` 表中的。  
只需要按照字段的意思进行配置即可，只不过由于我们需要指定一个地方存放文件，所以设置了一个 `filePath` 的字段。  

`filePath` 的字段只需要指向文件存放的路径就可以了，比如说 `D:/WMMT/static` 。  

但最关键的还是 `fileType` ，如果这个数值配置不正确，那别的就算配置成功了游戏不会正常执行。  
以下是我在各个版本中所进行的研究，不同版本提供的数值也不一样：  

::: tabs

@tab:active 6RR+

- `1` : 用于待机界面的轮换中所展示的图片
- `4` : 暂时不知道，但是其 `enum` 是叫 `FILE_FEATURE_ANNOUNCEMENT`
- `6` : 目前知道里面有素材是用在 `GAME OVER` 界面的下方，正常是用于显示 `Wangan Nagivator` 的月度奖品信息  
- `7` : 暂时不知道，但是其 `enum` 是叫 `FILE_TRIAL_ANNOUNCEMENT`

@tab 6RR

- `1` : 用于待机界面的轮换中所展示的图片
- `4` : 暂时不知道，但是其 `enum` 是叫 `FILE_FEATURE_ANNOUNCEMENT`
- `6` : 目前知道里面有素材是用在 `GAME OVER` 界面的下方，正常是用于显示 `Wangan Nagivator` 的月度奖品信息  
- `7` : 暂时不知道，但是其 `enum` 是叫 `FILE_TRIAL_ANNOUNCEMENT`

@tab 5DX+

- `1` : 用于待机界面的轮换中所展示的图片
- `2` : 暂时不知道，但是其 `enum` 是叫 `FILE_SHOP_ANNOUNCEMENT`
- `3` : 暂时不知道，但是其 `enum` 是叫 `FILE_WEBSITE_ANNOUNCEMENT`
- `4` : 暂时不知道，但是其 `enum` 是叫 `FILE_FEATURE_ANNOUNCEMENT`
- `5` : 暂时不知道，但是其 `enum` 是叫 `FILE_SCRATCH_DIRECTIONS`

:::

### #2.2 制作文件

除了文件列表，我们还需要一个文件提供给游戏。  
有幸拿到一些官方制作的文件，文件大概是这样的结构：  

::: file-tree
- xxxx.bin
    - xxxxx.nut
        - 1
        - 2
        - 3
        - …
:::

通过一些研究发现：
外壳的 `xxxxx.bin` ，其实是一个使用 `gzip` 打包压缩的压缩文档，只是文件名改为了 `.bin` 而已。  
而里面的 `nut` 文件，我倒是发现比较早期的是跟 `.bin` 一样的命名方法，而后期的都用了比如 `PROMOTION.nut` 这样的命名。  
目前暂时不知道命名的差异会不会导致游戏不读取。只能找个时间试试看了。  

重中之重的是 `nut` 里面的图片，实际上就跟游戏内的贴图文件一样的效果。  
不过似乎里面的名字的区别也会影响游戏实际在什么地方给他进行显示。但这一点暂时还没有进行更深入的研究。  