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
