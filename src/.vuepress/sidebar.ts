import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/bot/": [
    "",
    {
      text: "机器人基础指令",
      icon: "mynaui:terminal",
      prefix: "basic/",
      link: "basic/",
      children: "structure",
    },
    {
      text: "机器人拓展指令",
      icon: "mynaui:terminal-solid",
      prefix: "more/",
      link: "more/",
      children: "structure",
    },
    {
      text: "公屏使用指南",
      icon: "tabler:speakerphone",
      prefix: "awesome/",
      link: "awesome",
    },
    ], "/mc/": [
        "",
        {
            text: "我的世界基础指令",
            icon: "arcticons:addons-for-minecraft-pe",
            prefix: "basic/",
            link: "basic/",
            children: "structure",
        },
        {
            text: "我的世界拓展指令",
            icon: "arcticons:minecraft-command",
            prefix: "more/",
            link: "more/",
            children: "structure",
        },
        {
            text: "我的世界唱片征集",
            icon: "tdesign:cd-filled",
            link: "cd/",
        },
    ],
    "/height/": [
        "",
        {
            text: "三服身高查询教程",
            icon: "tabler:book-filled",
            link: "more/",
        },
        {
            text: "免费查身高",
            icon: "pixelarticons:human-height",
            link: "http://sky.kevin-study.top/",
        },
    ],
});
