import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "机器人",
    icon: "ri:robot-3-line",
    prefix: "/bot/",
    children: [
      {
        text: "机器人基础指令",
        icon: "mynaui:terminal",
        prefix: "basic/",
        children: [""],
      },
      {
        text: "机器人拓展指令",
        icon: "mynaui:terminal-solid",
        prefix: "more/",
        children: [""],
      },
      {
        text: "公屏使用指南",
        icon: "tabler:speakerphone",
        prefix: "awesome",
        link: "awesome",
      },
    ],
  },
  {
    text: "光遇身高查询",
    icon: "arcticons:sky",
    prefix: "/height/",
    children: [
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
  },
  {
    text: "按钮指南",
    icon: "game-icons:button-finger",
    link: "BUG.html",
  },
  {
    text: "友情链接",
    icon: "ri:links-line",
    link: "/friends/",
  }
]);
