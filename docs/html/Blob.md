---
title: 【html】Blob对象
date: 2019-12-28
categories:
 - html
tags:
 - html
---
## 定义
Blob对象可以看作是存放二进制数据的容器，此外还可以通过blob设置二进制数据的MIME类型
## 使用Blob下载二进制文件流
```js
const res = await RemoteApi.getDownImg(pram);
const blob = new Blob([res]);
const fileName = 'img.zip';
if ('download' in document.createElement('a')) {
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob); // 创建下载的链接
    link.download = fileName; // 下载后文件名
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click(); // 点击下载
    window.URL.revokeObjectURL(link.href); // 释放掉blob对象
    document.body.removeChild(link); // 下载完成移除元素
} else {
    // IE10+下载
    window.navigator.msSaveBlob(blob, fileName);
}
```
## 使用blob保存一张二进制图片
```js
const res = await downReportImg({ image_name: image_name });
const src = window.URL.createObjectURL(res);
this.video_url = src;
```