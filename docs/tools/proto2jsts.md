---
title: .proto文件转.js / .ts
createTime: 2025/12/07 20:15:08
permalink: /article/zzlp19vl/
---

## 安装

```bash
npm install -g protobufjs-cli
```

## 使用

### `.proto` 转 `.proto.js`

```bash
pbjs -t static-module -w commonjs -o <fileName>.proto.js <fileName>.proto
```

### `.proto` 转 `.proto.ts`

需要有 `.proto.js` 作为基础  

```bash
pbts -o <fileName>.proto.d.ts <fileName>.proto.js
```