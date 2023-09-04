import { version } from "../../package.json";

export default {
  footer: {
    message: "Released under the MIT License.",
    copyright: "Copyright © 2019-present Evan You",
  },
  docFooter: { prev: '上一篇', next: '下一篇' },
  lastUpdatedText: '最近更新时间',
  nav: [
    { text: "首页", link: "/" },
    { text: "博客", link: "/blog/welcome" },
  ],
  sidebar: {
    "/blog/": [
      {
        text: "每日博客",
        items: [{ text: "开始", link: "/blog/welcome" }],
      },
    ],
  },
};
