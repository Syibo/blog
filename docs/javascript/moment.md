---
title: 【javaScript】moment.js 使用小计
date: 2019-06-21
categories:
 - javaScript
tags:
 - javaScript
---
## JavaScript 日期处理类库
Moment.js是一个轻量级的JavaScript时间库，它方便了日常开发中对时间的操作，提高了开发效率。日常开发中，通常会对时间进行下面这几个操作：比如获取时间，设置时间，格式化时间，比较时间等等。下面就是我对moment.js使用过程中的整理，方便以后查阅。
### 获取当前月份第一秒
```javaScript
const startDate = moment().month(moment().month()).startOf('month').valueOf();
moment().startOf('month')
```
### 返回一个指定格式的时间
```javaScript
Moment(da).format('YYYY-MM-DD HH:mm:ss')
```
### 时间相加
```javaScript
Moment(value).add(3, 'days').format('YYYY-MM-DD HH:mm:ss') //加3天
Moment(value).subtract(3, 'days').format('YYYY-MM-DD HH:mm:ss') //减3天
Moment(value).add(3, 'hours').format('YYYY-MM-DD HH:mm:ss') //加3小时
Moment(value).add(3, 'minutes').format('YYYY-MM-DD HH:mm:ss') //加3分钟
.......
```
### 比较两个时间大小
```javaScript
isOverTime(time) {
var now = Moment().locale('zh-cn').format('YYYY-MM-DD HH:mm:ss')
const isOverTime = Moment(time).isBefore(now)
return isOverTime
},
```