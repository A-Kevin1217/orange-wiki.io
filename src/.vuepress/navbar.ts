import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "机器人指令",
    icon: "robot",
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
    text: "我的世界指令",
    icon: "gamepad",
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
    icon: "tree",
      link: "https://a-kevin1217.github.io/sky/",
    }, 
    {
        text: "联系小丞",
        icon: "qq",
        link: "https://qm.qq.com/q/Cn9FvE1HNu",
    },
]);
