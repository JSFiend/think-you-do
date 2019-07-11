
module.exports = {
  base: "/think-you-do/",
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }]
  ],
  evergreen: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],
    // 为以下路由添加侧边栏
    sidebar: [
      ['/tyd_middleware/', '中间件处理器'],
      ['/tyd_router/', '路由处理器'],
    ]
  },
};
