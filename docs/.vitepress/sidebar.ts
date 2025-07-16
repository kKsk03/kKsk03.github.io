export const sideBar = {
    '/common/': [
        {
            text: "常用工具",
            items: [
                { text: "Windows 激活", link: "/common/tools/windows-activate" },
                { text: "VS NASM 安装", link: "/common/tools/vs_nasm_install" },
                { text: "PBTK的使用", link: "/common/tools/pbtk_usage" },
                { text: "protobuf.js 使用", link: "/common/tools/protobufjs_usage" },
                { text: "Vegas Pro 22 安装", link: "/common/tools/vegas_pro_22_install" },
            ]
        },
        {
            text: "解决方案",
            items: [
                { text: "使用 OpenVPN 配置虚拟局域网", link: "/common/solutions/ov_virtual_LAN" },
                { text: "首都高赛车 FModel 解包", link: "/common/solutions/txr_unpack" },
                { text: "WMMT 1&2 解包", link: "/common/solutions/wmmt1n2_extract" }
            ]
        },
        {
            text: "运维",
            items: [
                { text: "Docker - 网页版pgAdmin4解决备份缺少libzstd.so.1的问题", link: "/common/operations/pgadmin4_libzstd_issue" },
                { text: "Docker - 1Panel网页版pgAdmin4备份文件路径", link: "/common/operations/pgadmin4_backup_path" },
            ]
        }
    ]
}