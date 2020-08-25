module.exports = {
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  base: '/',
  title: 'syb&life',
  description: ' ',
  theme: 'reco',
  themeConfig: {
    type: 'blog',
    huawei: true,
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
    sidebarDepth: 2,
    displayAllHeaders: false,
    sidebar: {
      '/life/': [
        {
          title: 'music',
          collapsable: true,
          children: [
            'music/vae',
          ]
        },
        {
          title: 'travel',
          collapsable: true,
          children: [
            'travel/qingdao',
          ]
        }
      ]
    },
    record: '京ICP备17067634号-1',
    author: 'syb',
  }
}