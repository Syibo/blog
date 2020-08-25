---
title: 【微信】分享 ios和安卓获取地址栏参数不一致解决方案
date: 2019-06-28
categories:
 - vue
tags:
 - 微信
---
在开发微信的项目，遇到一次微信分享的需求，按照官方文档，需要传递当前页面的url来判断分享出去的内容是否合法，于是理所当然用到location.href.split('#')[0]来传递，但是存在一个问题 安卓上面是正常的但是ios上面是报错，
发现获取url上面ios微信的herf不一致，导致url错误 微信分享失败
## 原因
首先是在hash下面,获取的url地址，前端需要用js获取当前页面除去'#'hash部分的链接:可用location.href.split('#')[0]获取;
要是用的history模式的话,就获当前也买你的地址,但是你会发现问题又来了,因为history模式的话,在Android手机上没什么问题,但是ios上面问题就出来了,就是你怎么弄只有当前进去的页面可以认证成功,之后每个页面,你可以复制当前也买你的地址,不管是那个页面都是你第一次进去的那个也买你的地址,这样就导致地址认证不成功,
## 解决方案
首次进入存一份href到sessionStorage
```js
let iosUrl = sessionStorage.getItem('iosUrl')
if (iosUrl === null) {
    let loclUrl = location.href.split('#')[0]
    sessionStorage.setItem('iosUrl', loclUrl)
}
```
然后在需要分享的页面判断当前设备是ios还是微信，取不同的url
```js
let u = navigator.userAgent
let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
let url
let newUrl
if (isiOS) {
    url = sessionStorage.getItem('iosUrl')
} else {
    url = location.href.split('#')[0]
}
newUrl = global.baseUrl + 'article?noteid=' + this.noteId
let obj = {
    title: this.noteTitle,
    desc: '快来51点赞围观 @' + this.userName + '的点赞笔记，抢一元探店套餐',
    newUrl: newUrl,
    imgUrl: this.imgurl[0],
    timelineTitle: '快来51点赞围观 @' + this.userName + '的点赞笔记，抢一元探店套餐',
}
this._getData(this._getUrl('WXSHARE'), { url: url }, res => {
    if (res.code === 200) {
        wxShare(res.data, obj)
    }
})
```