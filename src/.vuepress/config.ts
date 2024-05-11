import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "橙子Wiki",
  description: "用于介绍小丞做的机器人以及我的世界服务器用法",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
