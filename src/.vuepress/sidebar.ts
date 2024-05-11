import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/bot/": [
    "",
    {
      text: "机器人基础指令",
      icon: "laptop-code",
      prefix: "basic/",
      link: "basic/",
      children: "structure",
    },
    {
      text: "机器人拓展指令",
      icon: "book",
      prefix: "more/",
      link: "more/",
      children: "structure",
    },
    ], "/mc/": [
        "",
        {
            text: "我的世界基础指令",
            icon: "terminal",
            prefix: "basic/",
            link: "basic/",
            children: "structure",
        },
        {
            text: "我的世界拓展指令",
            icon: "terminal",
            prefix: "more/",
            link: "more/",
            children: "structure",
        },
        {
            text: "我的世界唱片征集",
            icon: "compact-disc",
            prefix: "cd/",
            link: "cd/",
            children: "structure",
        },
    ],
});
