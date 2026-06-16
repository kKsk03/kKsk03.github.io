/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from "vuepress-theme-plume";

export default defineNavbarConfig([
    { text: "首页", link: "/", icon: "mdi:home-outline" },
    { text: "Blog", link: "/blog/", icon: "mdi:blog-outline" },
    { text: "标签", link: "/blog/tags/", icon: "mdi:tag-outline" },
    { text: "归档", link: "/blog/archives/", icon: "mdi:archive-outline" }
]);
