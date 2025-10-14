---
title: 在 Electron + Vue.js 中使用 Tailwind CSS + DaisyUI
createTime: 2025/10/14 16:58:26
permalink: /article/om0whbdu/
---

## 1. 安装依赖

```sh
pnpm add -D tailwindcss postcss autoprefixer daisyui @tailwindcss/postcss
```

## 2. 配置 Tailwind CSS

### 2.1 配置 `tailwind.config.js`

在项目根目录中新建 `tailwind.config.js` :  

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 2.2 配置 `postcss.config.js`

在项目根目录中新建 `postcss.config.js` :  

```js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

## 3. 配置 DaisyUI

在 `src\renderer\src\assets\css` 中新建 `style.css` :  

```css
@import "tailwindcss";
@plugin "daisyui";
```

然后在 `src\renderer\src\main.js` 中进行引入：  

```js
import './assets/main.css' // [!code --]
import './assets/css/style.css' // [!code ++]

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```

## 4. 检查是否配置成功

将 `App.vue` 替换为以下代码：  

```vue
<script setup>
const ipcHandle = () => window.electron.ipcRenderer.send('ping')
</script>

<template>
  <button class="btn btn-soft btn-primary">Primary</button>
</template>
```

如果按钮是浅蓝色的，那就代表成功了！  