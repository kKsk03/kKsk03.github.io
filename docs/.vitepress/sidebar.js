export const sidebar = {

    '/web/front_end/': [
        {
            text: 'VitePress',
            collapsed: false,
            items: [
                { 
                    text: 'VitePress的部署',
                    items: [
                        { text: '初始化与部署', link: '/web/front_end/vitepress/vitepress_deploy' },
                        { text: '导航栏配置', link: '/web/front_end/vitepress/nav' },
                        { text: '侧边栏配置', link: '/web/front_end/vitepress/sidebar' }
                    ]
                },
                { text: 'VitePress的Markdown示例', link: '/web/front_end/vitepress/vitepress_markdown' }
            ]
        },
        {
            text: '域名',
            collapsed: false,
            items: [
                { text: '域名购买&解析', link: '/web/front_end/domain/domain_deploy' }
            ]
        }
    ],

    '/web/back_end/': [
        {
            text: 'Node.js',
            collapsed: false,
            items: [
                { text: 'Node.js使用框架快速搭建', link: '/web/back_end/node_js/first_deploy' }
            ]
        }
    ],

    '/server/': [
        {
            text: '宝塔面板',
            collapsed: false,
            items: [
                { text: '在宝塔面板使用Docker安装Alist', link: '/server/bt/alist_install' },
                { text: '宝塔面板常用指令', link: '/server/bt/bt_command' }
            ]
        },
        {
            text: '服务器常用工具',
            collapsed: false,
            items: [
                { text: 'PM2基本安装与使用', link: '/server/often/pm2' }
            ]
        }
    ],

    '/game/': [
        { text: 'OpenVPN搭建虚拟局域网', link: '/game/open-vpn-net' }
    ]
}