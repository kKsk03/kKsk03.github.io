export default {
    // app level config options
    lang: 'zh-CN',
    title: 'kKsk\'s Blog',
    description: 'A Technology Blog',
    lastUpdated: true,

    themeConfig: {

        // 页脚
        footer: {
            message: 'Released Under the MIT License.',
            copyright: 'Copyright © 2023-Present kKsk'
        },

        // 底部 编辑此文档
        editLink: {
            text: '在 GitHub 上编辑此页面',
            pattern: 'https://github.com/kKsk03/kKsk03.github.io/blob/main/docs/:path'
        },

        // 汉化
        lastUpdatedText: '最后一次更新于:',
        outlineTitle: '在此页面上的内容',
        docFooter: {
            next: '下一篇',
            prev: '上一篇'
        },
        returnToTopLabel: '返回顶部',
        darkModeSwitchLabel: '浅色/深色模式',
        sidebarMenuLabel: '菜单',

        // 社交链接（右上角）
        socialLinks: [
            { icon: "github", link: "https://github.com/kKsk03" }
        ],
    }
}
    