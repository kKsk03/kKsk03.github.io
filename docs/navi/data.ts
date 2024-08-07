import type { NavData } from '../.vitepress/theme/types'

export const NAV_DATA: NavData[] = [
    {
        title: '常用站点',
        items: [
            {
                icon: 'https://files.superbed.cn/static/images/06/38/66b391d6d9c307b7e9960638.jpg',
                title: 'kKsk\'s File Site',
                desc: '自己搭建的文件站，基于Alist',
                link: 'https://files.kksk03.fun/'
            },
            {
                icon: 'https://vitepress.dev/vitepress-logo-mini.png',
                title: 'VitePress文档站',
                desc: 'VitePress官方的文档站',
                link: 'https://vitepress.dev/zh/'
            }
        ]
    },
    {
        title: '工具',
        items: [
            {
                icon: 'https://tools.fun/favicon.ico',
                title: 'Tools fun',
                desc: '常见开发工具集合',
                link: 'https://tools.fun/index.html'
            },
            {
                icon: 'https://wrid.cn/favicon.ico',
                title: '时间戳转换器',
                desc: '时间戳时间相互转换工具',
                link: 'https://wrid.cn/'
            },
            {
                icon: 'https://www.iamwawa.cn/Public/img/favicon.png',
                title: '全角半角转换器',
                desc: '全角半角字符互转工具',
                link: 'https://www.iamwawa.cn/quanjiaobanjiao.html'
            }
        ]
    },
    {
        title: '开发',
        items: [
            {
                icon: {
                    svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" height="1em" width="1em"><path d="m21.66 10.44-.98 4.18c-.84 3.61-2.5 5.07-5.62 4.77-.5-.04-1.04-.13-1.62-.27l-1.68-.4c-4.17-.99-5.46-3.05-4.48-7.23l.98-4.19c.2-.85.44-1.59.74-2.2 1.17-2.42 3.16-3.07 6.5-2.28l1.67.39c4.19.98 5.47 3.05 4.49 7.23Z" fill="#c9d1d9"></path><path d="M15.06 19.39c-.62.42-1.4.77-2.35 1.08l-1.58.52c-3.97 1.28-6.06.21-7.35-3.76L2.5 13.28c-1.28-3.97-.22-6.07 3.75-7.35l1.58-.52c.41-.13.8-.24 1.17-.31-.3.61-.54 1.35-.74 2.2l-.98 4.19c-.98 4.18.31 6.24 4.48 7.23l1.68.4c.58.14 1.12.23 1.62.27Zm2.43-8.88c-.06 0-.12-.01-.19-.02l-4.85-1.23a.75.75 0 0 1 .37-1.45l4.85 1.23a.748.748 0 0 1-.18 1.47Z" fill="#228e6c"></path><path d="M14.56 13.89c-.06 0-.12-.01-.19-.02l-2.91-.74a.75.75 0 0 1 .37-1.45l2.91.74c.4.1.64.51.54.91-.08.34-.38.56-.72.56Z" fill="#228e6c"></path></svg>'
                },
                title: 'Quick Reference',
                desc: '为开发人员分享快速参考备忘清单【速查表】',
                link: 'https://wangchujiang.com/reference',
                badge: '开源'
            },
            {
                icon: 'https://v5.bootcss.com/docs/5.3/assets/img/favicons/favicon.ico',
                title: 'Bootstrap v5',
                desc: 'Bootstrap v5中文文档',
                link: 'https://v5.bootcss.com/',
                badge: '开源'
            },
            {
                icon: 'https://cn.vuejs.org/logo.svg',
                title: 'Vue.js',
                desc: 'Vue.js中文文档',
                link: 'https://cn.vuejs.org/',
                badge: '开源'
            },
            {
                icon: 'https://nonebot.dev/logo.png',
                title: 'Nonebot',
                desc: 'Nonebot中文文档',
                link: 'https://nonebot.dev/',
                badge: '开源'
            },
        ]
    }
]