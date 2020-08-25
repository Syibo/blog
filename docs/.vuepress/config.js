module.exports = {
  base: '/',
  title: 'syb&life',
  description: '',
  theme: 'reco',
  themeConfig: {
    type: 'blog',
    repo: 'https://github.com/Syibo',
    repoLabel: 'gitHub',
    blogConfig: {
      category: {
        location: 2,     // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认文案 “分类”
      },
      tag: {
        location: 3,     // 在导航栏菜单中所占的位置，默认3
        text: '标签'      // 默认文案 “标签”
      }
    },
    nav: [
      { text: '首页', link: '/' }
    ]
  }
}