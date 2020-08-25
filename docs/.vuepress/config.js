module.exports = {
  base: '/',
  title: 'syb&life',
  description: ' ',
  theme: 'reco',
  themeConfig: {
    type: 'blog',
    huawei: false,
    authorAvatar: '/head.jpg',
    repo: 'https://github.com/Syibo',
    repoLabel: 'gitHub',
    blogConfig: {
      category: {
        location: 2,
        text: '分类'
      },
    },
    nav: [
      { text: '主页', link: '/', icon: 'reco-home'},
      { text: 'Life', link: '/life/', icon: 'reco-document' },
      // {
      //   text: '其它', icon: 'reco-document',
      //   items: [{
      //       text: '.life',
      //       link: 'https://shenyibo.life/',
      //   }]       
      // }
    ],
    logo: '',
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebarDepth: 1,
    displayAllHeaders: false,
    sidebar: {
      '/life/': [
        {
          title: 'music',
          collapsable: true,
          children: [
            'music/vae',
          ]
        }
      ]
    },
    record: '京ICP备17067634号-1',
    author: 'syb',
  }
}