module.exports = {
  base: '/blog/',
  title: 'syb',
  description: 'Vuepress blog demo',
  themeConfig: {
    // 你的GitHub仓库，请正确填写
    repo: 'https://github.com/Syibo',
    // 自定义仓库链接文字。
    repoLabel: 'My GitHub',
    nav: [
      { text: '首页', link: '/' },
      { text: '前端', link: '/front/FirstBlog.md' }
    ]
  }
}