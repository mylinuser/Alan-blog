import zhCNConfig from './zhCNConfig';

module.exports = {
  base: '/daily-blog/',
  outDir: 'dist',
  appearance: true,
  title: 'Daliy Blog',
  description: '每日博客',
  lang: 'zh-CN',
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '../public//github-bk2.png.png' }]],
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    },
    lineNumbers: true
  },
  // locales: {
  //   root: {
  //     label: '简体中文',
  //     lang: 'zh-CN',
  //     link: '/',
  //     themeConfig: zhCNConfig
  //   },
  //   'en-US': {
  //     label: 'English',
  //     lang: 'en-US',
  //     link: '/en-US',
  //     themeConfig: enUSConfig
  //   },
  // },
  themeConfig: {
    ...zhCNConfig,
    siteTitle: 'Daliy Blog',
    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    //   text: 'Edit this page on GitHub'
    // },
    search: {
      provider: 'local'
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/mylinuser' }]
  }
};
