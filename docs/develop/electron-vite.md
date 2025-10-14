---
title: 使用 Electron-Vite + Vue.js 开发桌面应用
createTime: 2025/10/14 16:47:47
permalink: /article/7uzx9wxr/
---

## 使用的工具

- [Election-Vite](https://cn.electron-vite.org/)
- [Vue.js](https://cn.vuejs.org/)

## 1. 安装Electron-Vite

```sh
pnpm create @quick-start/electron
```

按照提示操作  

```sh
√ Project name: ... <electron-app>
√ Package name: ... <electron-app>
√ Select a framework: » vue
√ Add TypeScript? ... No / Yes
√ Add Electron updater plugin? ... No / Yes
√ Enable Electron download mirror proxy? ... No / Yes

Scaffolding project in .\<electron-app>...

Done. Now run:

  cd <electron-app>
  pnpm install
  pnpm dev
```

部署完成后，具体目录结构如下：  

::: file-tree
- build/
- resources/
- src
  - main
    - index.js
  - preload
    - index.js
  - renderer 正常Vue.js项目的根目录
    - src
      - assets/
      - components/
      - App.vue
      - main.js
    - index.html
- .editorconfig
- .gitignore
- .npmrc
- .prettierignore
- .prettierrc.yaml
- dev-app-update.yml
- electron.vite.config.mjs
- electron-builder.yml
- eslint.config.mjs
- package.json
- README.md
:::

需记得安装依赖：  

```sh
pnpm install
```

## 启动调试与构建

### 启动调试

```sh
pnpm dev
```

### 构建

```sh
pnpm build:win
```