---
title: protobuf.js 的使用
createTime: 2025/08/21 14:06:39
permalink: /article/s5tb8gdx/
---

# `protobuf.js` 的使用

用于将 `.proto` 类型文件编译为 `.js` 与 `.ts` 文件  
方便在代码中调用  

## 安装

```sh
npm install protobufjs protobufjs-cli -g
```

## 使用

- `.proto` ==> `.js`  
    
    ```sh
    pbjs -t static-module -w commonjs -o <proto file name>.proto.js <proto file name>.proto
    ```

- `.js` ==> `.ts`  

    ```sh
    pbts -o <proto file name>.proto.d.ts <proto file name>.proto.js
    ```