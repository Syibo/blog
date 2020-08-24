module.exports = {
  base: '/blog/',
  title: 'syb',
  description: 'Vuepress blog demo',
  theme: 'reco',
  themeConfig: {
    // 你的GitHub仓库，请正确填写
    type: 'blog',
    repo: 'https://github.com/Syibo',
    // 自定义仓库链接文字。
    repoLabel: 'My GitHub',
    blogConfig: {
      category: {
        location: 2,     // 在导航栏菜单中所占的位置，默认2
        text: 'Category' // 默认文案 “分类”
      },
      tag: {
        location: 3,     // 在导航栏菜单中所占的位置，默认3
        text: 'Tag'      // 默认文案 “标签”
      }
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '前端', link: '/front/FirstBlog.md' }
    ]
  }
}