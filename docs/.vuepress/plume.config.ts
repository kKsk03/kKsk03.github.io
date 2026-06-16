/**
 * 查看以下文档了解主题配置
 * - @see https://theme-plume.vuejs.press/config/intro/ 配置说明
 * - @see https://theme-plume.vuejs.press/config/theme/ 主题配置项
 *
 * 请注意，对此文件的修改不会重启 vuepress 服务，而是通过热更新的方式生效
 * 但同时部分配置项不支持热更新，请查看文档说明
 * 对于不支持热更新的配置项，请在 `.vuepress/config.ts` 文件中配置
 *
 * 特别的，请不要在两个配置文件中重复配置相同的项，当前文件的配置项会覆盖 `.vuepress/config.ts` 文件中的配置
 */

import { defineThemeConfig } from "vuepress-theme-plume";
import navbar from "./navbar";
import collections from "./collections";

/**
 * @see https://theme-plume.vuejs.press/config/theme/
 */
export default defineThemeConfig({
    logo: "https://theme-plume.vuejs.press/plume.png",

    appearance: true, // 配置 深色模式

    social: [{ icon: "github", link: "https://github.com/kKsk03" }],
    // navbarSocialInclude: ['github'], // 允许显示在导航栏的 social 社交链接
    // aside: true, // 页内侧边栏， 默认显示在右侧
    // outline: [2, 3], // 页内大纲， 默认显示 h2, h3

    /**
     * 文章版权信息
     * @see https://theme-plume.vuejs.press/guide/features/copyright/
     */
    copyright: "CC-BY-NC-ND-4.0",

    // prevPage: true,   // 是否启用上一页链接
    // nextPage: true,   // 是否启用下一页链接
    // createTime: true, // 是否显示文章创建时间

    /* 站点页脚 */
    footer: {
        message: 'Released Under the <a href=\"https://www.gnu.org/licenses/gpl-3.0.html\"style=\"color: #de4f7a; text-decoration: underline;\" target=blank>GNU General Public License v3.0</a>.',
        copyright: 'Copyright © 2023-Present <a href=\"https://github.com/kKsk03\" style=\"color: #de4f7a; text-decoration: underline;\" target=blank>kKsk03</a>',
    },

    /**
     * @see https://theme-plume.vuejs.press/config/theme/#profile
     */
    profile: {
        avatar: "/avatar.png",
        name: "kKsk's Blog",
        description: "绝赞Miss中...",
        circle: true,
        // location: '',
        // organization: '',
    },

    navbar,
    collections,

    /**
     * 公告板
     * @see https://theme-plume.vuejs.press/guide/features/bulletin/
     */
    // bulletin: {
    //   layout: 'top-right',
    //   contentType: 'markdown',
    //   title: '公告板标题',
    //   content: '公告板内容',
    // },

    /* 过渡动画 @see https://theme-plume.vuejs.press/config/theme/#transition */
    // transition: {
    //   page: true,        // 启用 页面间跳转过渡动画
    //   postList: true,    // 启用 博客文章列表过渡动画
    //   appearance: 'fade',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
    // },
});
