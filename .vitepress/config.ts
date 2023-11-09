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
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mylinuser' },
      {
        icon: {
          svg: '<svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg"><title>稀土掘金</title><path fill-rule="evenodd" clip-rule="evenodd" d="M17.5875 6.77268L21.8232 3.40505L17.5875 0.00748237L17.5837 0L13.3555 3.39757L17.5837 6.76894L17.5875 6.77268ZM17.5863 17.3955H17.59L28.5161 8.77432L25.5526 6.39453L17.59 12.6808H17.5863L17.5825 12.6845L9.61993 6.40201L6.66016 8.78181L17.5825 17.3992L17.5863 17.3955ZM17.5828 23.2891L17.5865 23.2854L32.2133 11.7456L35.1768 14.1254L28.5238 19.3752L17.5865 28L0.284376 14.3574L0 14.1291L2.95977 11.7531L17.5828 23.2891Z" fill="#1E80FF"/></svg>'
        },
        link: 'https://juejin.cn/user/3993886451568349',
        ariaLabel: '稀土掘金'
      }
    ]
  }
};
