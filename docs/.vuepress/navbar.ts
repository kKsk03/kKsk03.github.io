/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
    { text: '首页', link: '/', icon: 'material-symbols:home-outline' },
    { text: '博客', link: '/blog/', icon: 'material-symbols:article-outline' },
    { text: '标签', link: '/blog/tags/', icon: 'mdi:tag-outline' },
    { text: '归档', link: '/blog/archives/', icon: 'material-symbols:archive-outline' },
    {
        text: '笔记',
        icon: 'material-symbols:ink-pen-outline',
        items: [{ text: '示例', link: '/notes/demo/README.md' }]
    },
])
