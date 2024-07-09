export default {
  footer: {
    message: 'Released under the MIT License.',
    copyright: 'Copyright © 2024-present Evan You'
  },
  docFooter: { prev: '上一篇', next: '下一篇' },
  lastUpdatedText: '最近更新时间',
  nav: [
    { text: '首页', link: '/' },
    { text: '学习', link: '/study/nestjs/practise' },
    { text: '实践', link: '/practice/element-upload' },
    { text: '工程化', link: '/deploy/jenkins1' },
    { text: '代码实现', link: '/algorithm/arr2-to-arr1' }
  ],
  sidebar: {
    '/study/': [
      {
        text: '2024',
        collapsed: false,
        items: [
          { text: 'nestjs实践', link: '/study/nestjs/practise' },
          { text: '性能指标', link: '/study/performance' },
          // { text: '面试问题记录', link: '/study/interview2024' },
          { text: 'process.nextTick', link: '/study/process.nextTick' },
          { text: '微前端', link: '/study/MicroFrontends' },
          { text: 'babel', link: '/study/babel' },
          { text: '网络', link: '/study/network' },
          { text: '图片相关', link: '/study/picture' }
        ]
      },
      {
        text: '2023',
        collapsed: true,
        items: [
          { text: '虚拟列表', link: '/study/virtualTree' },
          { text: '遇到的难题', link: '/study/2021-difficulty' },
          { text: '一些题目', link: '/study/some-topic' },
          { text: 'webpack和vite', link: '/study/webpack-vite' },
          { text: 'Fetch', link: '/study/fetch' },
          { text: 'Axios', link: '/study/axios' },
          { text: '版本号区别', link: '/study/versions' },
          { text: 'Vue3', link: '/study/vue3' },
          { text: 'webpack', link: '/study/webpack' },
          { text: '性能优化', link: '/study/optimization' },
          { text: '强缓存、协商缓存', link: '/study/cache' },
          { text: 'webpack GZip压缩', link: '/study/gzip' },
          { text: '为什么使用Taro', link: '/study/taro' },
          { text: 'uniapp和Taro的区别', link: '/study/uniapp-taro' },
          { text: 'Get和Post请求区别', link: '/study/get-post' },
          { text: 'Tcp和Udp的区别', link: '/study/tcp-udp' },
          { text: 'websocket和http', link: '/study/webpack-http' },
          { text: '面试难题', link: '/study/interview-difficulty' },
          { text: '面试题总结', link: '/study/interview-total' },
          { text: '状态码', link: '/study/code' }
        ]
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
          { text: 'docker', link: '/deploy/docker' },
          { text: 'jenkins', link: '/deploy/jenkins' },
          { text: 'nodes', link: '/deploy/nodes' },
          { text: '自动化部署', link: '/deploy/autoDeploy' }
        ]
      }
    ],
    '/algorithm/': [
      {
        text: '算法LeetCode',
        collapsed: false,
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
      },
      {
        text: '常规封装代码实现',
        collapsed: false,
        items: [
          { text: 'classnames实现', link: '/algorithm/classnames' },
          { text: 'WeakMap实现深拷贝', link: '/algorithm/deepMapClone' },
          { text: 'eventBus', link: '/algorithm/eventBus' },
          { text: '自定义useVModel', link: '/algorithm/useVModel' },
          { text: 'async/await', link: '/algorithm/async' },
          { text: '函数柯里化', link: '/algorithm/curry' },
          { text: '树结构转换', link: '/algorithm/toTree' },
          { text: '寻找特定树结构节点', link: '/algorithm/findTree' }
        ]
      }
    ]
  }
};
