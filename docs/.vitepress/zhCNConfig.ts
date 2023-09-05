export default {
  footer: {
    message: "Released under the MIT License.",
    copyright: "Copyright © 2023-present Evan You",
  },
  docFooter: { prev: "上一篇", next: "下一篇" },
  lastUpdatedText: "最近更新时间",
  nav: [
    { text: "首页", link: "/" },
    { text: "学习", link: "/study/markDown" },
    { text: "实践", link: "/practice/" },
    { text: "面试", link: "/interview/" },
    { text: "部署", link: "/deploy/" },
    { text: "算法", link: "/algorithm/arr2-to-arr1" },
  ],
  sidebar: {
    "/study/": [
      {
        text: "2023",
        collapsed: true,
      },
      {
        text: "2022",
        collapsed: true,
        items: [
          { text: "markDown练手", link: "/study/markDown" },
          { text: "grid布局", link: "/study/grid" },
          { text: "Git学习", link: "/study/git" },
          { text: "websocket", link: "/study/websocket" },
          { text: "pinia", link: "/study/pinia" },
          { text: "vue3", link: "/study/vue3" },
        ],
      },
    ],
    "/interview/": [
      {
        text: "每日博客",
        items: [{ text: "开始", link: "/blog/welcome" }],
      },
    ],
    "/deploy/": [
      {
        text: "部署",
        collapsed: true,
        items: [
          { text: "开始", link: "/deploy/deploy" },
          { text: "jenkins安装1", link: "/deploy/jenkins1" },
          { text: "jenkins安装2", link: "/deploy/jenkins2" },
        ],
      },
    ],
    "/algorithm/": [
      {
        text: "代码实现",
        items: [{ text: "classnames实现", link: "/algorithm/classnames" }],
      },
      {
        text: "算法LeetCode",
        items: [
          { text: "二维数组旋转变成一维数组", link: "/algorithm/arr2-to-arr1" },
        ],
      },
    ],
  },
};
