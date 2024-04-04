# VitePress安装Medium-Zoom

1. 安装插件  

::: code-group

```shell [pnpm]
pnpm add medium-zoom
```

```shell [npm]
npm add medium-zoom
```

```shell [yarn]
yarn add medium-zoom
```

:::

2. 引入库以及配置相关文件  

```javascript
// docs/.vitepress/theme/index.js
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css' // [!code ++]
import { onMounted, watch, nextTick } from 'vue' // [!code ++]
import { useRoute } from 'vitepress' // [!code ++]
import mediumZoom from 'medium-zoom' // [!code ++]

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  } // [!code --]
  }, // [!code ++]
  setup() { // [!code ++]
    const route = useRoute() // [!code ++]
    const initZoom = () => { // [!code ++]
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' }) // [!code ++]
    } // [!code ++]
    onMounted(() => { // [!code ++]
      initZoom() // [!code ++]
    }) // [!code ++]
    watch( // [!code ++]
      () => route.path, // [!code ++]
      () => nextTick(() => initZoom()) // [!code ++]
    ) // [!code ++]
  }
}

```

3. 修复点击图片放大后部分区域被遮住问题  

```css
/* docs/.vitepress/theme/style.css */
/* 图片点击放大优先级调整 */
.medium-zoom-image {
  z-index: 9999 !important;
}
```