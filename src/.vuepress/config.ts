import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "六阶堂穗玉Wiki",
  description: "用于介绍小丞做的机器人以及光遇身高查询指令用法",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
