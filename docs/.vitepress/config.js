export default {
    // app level config options
    lang: 'zh-CN',
    title: 'kKsk\'s Blog',
    description: 'A Technology Blog',
    lastUpdated: true,

    themeConfig: {

        // 导航栏
        nav: [
            { text: '主页', link: '/' },
            {
                text: '编程',
                items: [
                    {
                        items: [
                            { text: '编程语言', link: '/code/git/git' },
                            { text: '数据库', link: '/database/postgresql/postgresql_install' },
                            { text: '前端', link: '/web/vitepress/vitepress_deploy' }
                        ]
                    }
                ]
            },
            {
                text: '游戏',
                items: [
                    {
                        items: [
                            { text: 'Assetto Corsa', link: '/game/ac/encrypt_tool' }
                        ]
                    }
                ]
            }
        ],

        // 侧边栏
        sidebar: {
            '/code/': [
                {
                    text: 'git',
                    collapsed: false,
                    items: [
                        { text: '常用git命令集', link: '/code/git/git' }
                    ]
                }
            ],
            
            '/database/': [
                {
                    text: 'PostgreSQL',
                    collapsed: false,
                    items: [
                        { text: 'PostgreSQL的安装', link: '/database/postgresql/postgresql_install' }
                    ]
                }
            ],

            '/web/': [
                {
                    text: 'VitePress',
                    collapsed: false,
                    items: [
                        { 
                            text: 'VitePress的部署',
                            items: [
                                { text: '初始化与部署', link: '/web/vitepress/vitepress_deploy' },
                                { text: '导航栏配置', link: '/web/vitepress/nav' },
                                { text: '侧边栏配置', link: '/web/vitepress/sidebar' }
                            ]
                        },
                        { text: 'VitePress的Markdown示例', link: '/web/vitepress/vitepress_markdown' }
                    ]
                },
                {
                    text: '域名',
                    collapsed: false,
                    items: [
                        { text: '域名购买&解析', link: '/web/domain/domain_deploy' }
                    ]
                }
            ],

            '/game/' : [
                {
                    text: 'Assetto Corsa',
                    collapsed: false,
                    items: [
                        { text: '模型加密工具', link: '/game/ac/encrypt_tool' },
                        { text: '地图灯光', link: '/game/ac/csp_maplight' }
                    ]
                }
            ]
        },

        // 页脚
        footer: {
            message: 'Released Under the <a href=\"https://www.apache.org/licenses/LICENSE-2.0\"style=\"color: #de4f7a; text-decoration: underline;\" target=blank>Apache License 2.0</a>.',
            copyright: 'Copyright © 2023-Present <a href=\"https://github.com/kKsk03\" style=\"color: #de4f7a; text-decoration: underline;\" target=blank>kKsk</a>'
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
    