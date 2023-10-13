# VitePress的部署

## 运行时安装

- [Node.js](https://nodejs.org/)需要18或以上的版本  
- 文档编辑器需要支持[Markdown](https://en.wikipedia.org/wiki/Markdown)以便更好地编写文档  
- 推荐使用[VSCode](https://code.visualstudio.com/)，并且需要安装[官方Vue拓展](https://marketplace.visualstudio.com/items?itemName=Vue.volar)  

## 初始化

::: tip
使用VSCode中的终端直接运行，会更加方便
:::

1. 安装 `yarn`  

```sh
npm install -g yarn
```

2. 初始化仓库  

```sh
yarn init
```

3. 添加 `VitePress` 依赖  

```sh
$ yarn add -D vitepress
```

4. 在其根目录创建一个 `docs` 的文件夹  

```sh
mkdir docs
```

5. 在 `docs` 文件夹内创建 `index.md` 文件  
该 `index.md` 用作**主页页面**使用  

```sh
echo '# Main Page' > docs/index.md
```

在 `.vitepress` 文件夹内创建 `config.js` 文件

```sh
echo 'export default {}' > docs/.vitepress/config.js
```

:::warning
自动配置的编码可能无法正确显示字符  
您可能需要将其重新另存为 `UTF-8` 编码的文件
或者跳过第5步，在`Windows文件资源管理器`中创建文件
:::

6. 在本地启动网页服务

```sh
yarn docs:dev
```

## 配置

1. VitePress的文件结构  

```
.
├─ docs
│  ├─ .vitepress
│  │  ├─ config.js // 打包配置的文件
│  ├─ articles // 文章的文件夹，可自行随意命名
│  │  ├─ aaa.md（存放markdown文件）
│  │  └─ ...
│  ├─ public // 这里可以放入全局文件内容（图片等内容放这里里面）
│  │  ├─ images.png // 图片（名字任意）
|  |  └─ ...
|  └─ index.md // 主页的md文件
└─ package.json
```

2. `config.js` 的配置  

```js
export default {
  title: 'VitePress',  // 网站的标题
  description: 'Just playing around.', // 网站的介绍
  base: '/docs/' // 如果想用 https://xxxx.github.io/blog/ 访问，那么这一段必填，使用github pages托管的不建议填
  lastUpdated: true // 最后更新时间戳，如果需要使用的话设置为true，否则设置为false

  themeConfig: {

    // 页面上显示的logo
    logo: "/images/logo.png", 

    // 导航栏的显示，详细下面有
    nav: [ 

    ],

    // 左侧侧边栏的显示，详细下面有
    sidebar: [ 

    ],

    // 页脚显示
    footer: {
            message: 'Released Under the MIT License.', // 附带信息，可以写使用的开源协议，也可以写其他的
            copyright: 'Copyright © 2023-Present kKsk' // 版权信息
    },

    // 底部 编辑此文档
    editLink: {
        text: '在 GitHub 上编辑此页面',
        pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path' // 修改:path前的链接到你的github链接
    },

    // 社交链接（右上角）
    socialLinks: [
        { icon: "github", link: "https://github.com/YourAccount" } // 修改链接为github链接
        ...
        // 直接支持的图标：discord、facebook、github、instagram、linkedin、mastodon、slack、twitter、youtube
        // 可以自行制作svg图标使用
    ],

    // 其余的一些汉化
    lastUpdatedText: '最后一次更新于:',
    outlineTitle: '在此页面上的内容',
    docFooter: {
        next: '下一篇',
        prev: '上一篇'
    },
    returnToTopLabel: '返回顶部',
    darkModeSwitchLabel: '浅色/深色模式',
    sidebarMenuLabel: '菜单',
  }
}
```

## GitHub 自动部署

在 `.github/workflows/deploy.yml` 文件中  

```yml
name: Deploy

on:
  push:
    branches: [main]

  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: yarn
      - name: Setup Pages
        uses: actions/configure-pages@v3
      - name: Install dependencies
        run: yarn install
      - name: Build with VitePress
        run: |
          npm run docs:build # or pnpm docs:build / yarn docs:build / bun run docs:build
          touch docs/.vitepress/dist/.nojekyll
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: docs/.vitepress/dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

注意：如果在 `config.js` 中启用了 `lastUpdated` 的话，需要将其中的 `fetch-depth` 调整为1  

```js
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0 // [!code focus]
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: yarn
```