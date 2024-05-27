import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "#",

  author: {
    name: "小丞儿",
    url: "https://github.com/A-Kevin1217",
  },

  iconAssets: "iconify",

  logo: "./logo.ico",


  repo: "A-Kevin1217/orange-wiki.io",

  docsDir: "src",

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  footer: "请勿商用，违者必究",
  displayFooter: false,

  // 加密配置
  encrypt: {
    config: {
      "/mc/basic/op.html": ["123456"],
    },
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 在这里配置主题提供的插件
    plugins: {
        docsearch: {
            appId: "5C8JH59OI2",
            apiKey: "7b0d56f117fa5b28d7f66373d1cfd65e",
            indexName: "kevin-study",
        },
    sitemap: false,
    comment: {
      provider: "Waline",
      serverurl: 'https://wikiwaline-a-kevin1217s-projects.vercel.app/',
     /* repo: "A-Kevin1217/orange-wiki.io",
      repoId: "R_kgDOL6I11g",
      category: "General",
      categoryId: "DIC_kwDOL6I11s4CfSp6",*/
    },

    components: {
      components: ["Badge", "VPCard"],
    },

    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,

    },
},
});
