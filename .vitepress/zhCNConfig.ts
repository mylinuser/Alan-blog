export default {
  footer: {
    message: 'Released under the MIT License.',
    copyright: 'Copyright © 2023-present Evan You'
  },
  docFooter: { prev: '上一篇', next: '下一篇' },
  lastUpdatedText: '最近更新时间',
  nav: [
    { text: '首页', link: '/' },
    { text: '学习', link: '/study/markDown' },
    { text: '实践', link: '/practice/element-upload' },
    { text: '面试', link: '/interview/2021-difficulty' },
    { text: '工程化', link: '/deploy/jenkins1' },
    { text: '算法', link: '/algorithm/arr2-to-arr1' }
  ],
  sidebar: {
    '/study/': [
      {
        text: '2023',
        collapsed: true
      },
      {
        text: '2021-2022',
        collapsed: true,
        items: [
          { text: 'markDown练手', link: '/study/markDown' },
          { text: 'grid布局', link: '/study/grid' },
          { text: 'Git学习', link: '/study/git' },
          { text: 'websocket', link: '/study/websocket' },
          { text: 'pinia', link: '/study/pinia' },
          { text: 'vue3', link: '/study/vue3' },
          { text: 'mysql修改密码', link: '/study/mysql-change-password' }
        ]
      }
    ],
    '/interview/': [
      {
        text: '2021-2022',
        collapsed: true,
        items: [
          { text: '遇到的难题', link: '/interview/2021-difficulty' },
          { text: '一些题目', link: '/interview/some-topic' },
          { text: 'webpack和vite', link: '/interview/webpack-vite' },
          { text: 'Fetch', link: '/interview/fetch' },
          { text: 'Axios', link: '/interview/axios' },
          { text: '版本号区别', link: '/interview/versions' },
          { text: 'Vue3', link: '/interview/vue3' },
          { text: 'webpack', link: '/interview/webpack' },
          {
            text: '性能优化',
            link: '/interview/performance-optimization'
          },
          { text: '强缓存、协商缓存', link: '/interview/cache' },
          { text: 'webpack GZip压缩', link: '/interview/gzip' },
          { text: '为什么使用Taro', link: '/interview/taro' },
          { text: 'uniapp和Taro的区别', link: '/interview/uniapp-taro' },
          { text: 'Get和Post请求区别', link: '/interview/get-post' },
          { text: 'Tcp和Udp的区别', link: '/interview/tcp-udp' },
          { text: 'websocket和http', link: '/interview/webpack-http' },
          { text: '面试难题', link: '/interview/interview-difficulty' },
          { text: '面试题总结', link: '/interview/interview-total' },
          { text: '状态码', link: '/interview/code' }
        ]
      },
      {
        text: '代码实现',
        collapsed: true,
        items: [
          { text: 'classnames实现', link: '/interview/classnames' },
          { text: 'WeakMap实现深拷贝', link: '/interview/deepMapClone' },
          { text: 'eventBus', link: '/interview/eventBus' },
          { text: '自定义useVModel', link: '/interview/useVModel' },
          { text: 'async/await', link: '/interview/async' }
        ]
      }
    ],
    '/practice/': [
      {
        text: '实践',
        collapsed: true,
        items: [
          {
            text: 'element UI UpLoad组件上传图片踩过的坑',
            link: '/practice/element-upload'
          },
          {
            text: '获取省区县地址信息',
            link: '/practice/provinces-districts-counties'
          },
          {
            text: '后端用jwt做token认证',
            link: '/practice/token'
          },
          {
            text: 'JS获取日期相关',
            link: '/practice/js-date'
          },
          {
            text: '定时器',
            link: '/practice/setTimeout'
          },
          {
            text: '下拉框添加分页功能',
            link: '/practice/select-pagination'
          },
          {
            text: 'CSS-超出部分省略号显示',
            link: '/practice/ellipsis'
          },
          {
            text: 'scroll-view的横向滚动',
            link: '/practice/scroll-view-row'
          },
          {
            text: 'opacity踩坑问题',
            link: '/practice/opacity-difficulty'
          },
          {
            text: '小程序分享功能',
            link: '/practice/app-share'
          }
        ]
      }
    ],
    '/deploy/': [
      {
        text: '工程化',
        collapsed: true,
        items: [
          { text: 'jenkins安装1', link: '/deploy/jenkins1' },
          { text: 'jenkins安装2', link: '/deploy/jenkins2' },
          { text: '配置jenkins', link: '/deploy/jenkins3' },
          { text: 'nginx', link: '/deploy/nginx' },
          { text: 'rancher', link: '/deploy/rancher' },
          { text: 'docker', link: '/deploy/docker' }
        ]
      }
    ],
    '/algorithm/': [
      {
        text: '算法LeetCode',
        collapsed: true,
        items: [
          {
            text: '二维数组旋转变成一维数组',
            link: '/algorithm/arr2-to-arr1'
          },
          {
            text: '字符串数字计算',
            link: '/algorithm/computedString'
          }
        ]
      }
    ]
  }
};
