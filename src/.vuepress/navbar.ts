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
        icon: "terminal",
        prefix: "basic/",
        children: ["basic"],
      },
      {
        text: "机器人拓展指令",
        icon: "terminal",
        prefix: "more/",
          children: ["more"],
      },
    ],
  },{
    text: "我的世界",
    icon: "mdi:minecraft",
    prefix: "/mc/",
    children: [
      {
        text: "我的世界基础指令",
        icon: "terminal",
        prefix: "basic/",
        children: ["basic","op"],
      },
      {
        text: "我的世界拓展指令",
       icon: "terminal",
        prefix: "more/",
        children: ["more"],
      },
      {
        text: "我的世界唱片征集",
        prefix: "cd/",
        children: [""],
      },
    ],
  },
  {
    text: "免费查身高",
    icon: "pixelarticons:human-height",
      link: "http://sky.kevin-study.top/",
    }, 
    {
        text: "联系小丞",
        icon: "ri:qq-fill",
        link: "https://qm.qq.com/q/Cn9FvE1HNu",
    },
    {
        text: "",
        icon: "gg:more-vertical-r",
        link: "/poo",
    },
]);
