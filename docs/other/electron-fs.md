---
title: 【Electron】保存文件到本地
date: 2020-08-12
categories:
 - other
tags:
 - electron
---
最近写electron真的写吐了，一是赶鸭子上架，用了双休的时间看了electront的官网，然后就开始写，二是用的框架还是腾讯内部的，全是坑。。。
## 保存文件到本地
```js
let jsonObj=JSON.stringify(this.state.uitraceGlobal.uiTraceProjectData);
let path = this.state.uitraceGlobal.uitraceProjectDir + '\\data.json'
try {
    fs.writeFile(path, jsonObj, function (err: any) {
        if(err) {
            message.warning("保存失败")
        } else {
            message.success("保存成功")
        }
    })
} catch (error) {
    console.log(error);
}
```
## 保存一个blob的图片
```js
let res = await (await fetch(imageUrl)).arrayBuffer()
let buffer = Buffer.from(res)
let path = this.state.uitraceGlobal.uitraceProjectDir + '\\pic\\test.jpg'
fs.writeFileSync(path, buffer)
```