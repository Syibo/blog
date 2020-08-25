---
title: 【javaScript】数组去重 并且获取去重数组出现次数
date: 2019-06-26
categories:
 - javaScript
tags:
 - javaScript
---
map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
```javascript
const arr = [1,1,1,2,3,4,4,4,2,3,5,4];
const map = arr.reduce((m, x) => m.set(x, (m.get(x) || 0) + 1), new Map())
console.log(map)
console.log(map.values())
console.log(map.keys())
map.forEach((key, value) => {
　　console.log(key, value)
})
```
![Image](https://shenyibo.oss-cn-beijing.aliyuncs.com/20200619/ddbb5400-b20a-11ea-9ac2-f7eb0bd8e2c9.jpg)

注意key是出现的次数，value为去重后的元素
### 使用lodash函数去重
```js
let obj = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }]
var na = _.uniq(obj.map((item) => item.x))
console.log(na) [1,2]
```
