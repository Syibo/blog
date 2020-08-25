---
title: 【Vue】使用vue + element-ui在表单验证的时候怎么调用后台接口
date: 2019-05-22
categories:
 - vue
tags:
 - element
---
在使用vue+element-ui在表单验证的时候怎么调用后台接口进行异步校验，比如我有一个name的input，在我鼠标失去焦点的时候判断这个name是否存在，这时候我们需要访问后台的接口才是判断
## 首先需要在data里面自定义一个validator
```js
var checkRoute = async (rule, value, callback) => {
    if (!value) {
        callback(new Error('请输入路由'));
    } else if (!route.test(value)) {
        callback(new Error('路由必须为"/XX or /XX/XX"'));
    } else if (value.indexOf('//') > 0) {
        callback(new Error('路由必须为"/XX or /XX/XX"'));
    } else if (flagRoute.test(value)) {
        callback(new Error('不能包含特殊字符'));
    } else if (value) {
        if (value !== this.checkForm.route) {
            const parms = {
                appid: Number(this.appid),
                username: SessionUtil.getUserInfo().username,
                name: '',
                route: value,
            };
            const res = await checkInterFace(parms);
            if (res.ret === 1) {
                callback(new Error(res.msg));
            }
        }
    } else {
        callback();
    }
};
```
## 然后在rule上面添加这个validator
```js
rules: {
    route: [
        { required: true, message: '请输入路由', trigger: 'blur' },
        { validator: checkRoute, trigger: 'blur' },
    ],
},
```
[官网资料](https://element.eleme.cn/#/zh-CN/component/form#zi-ding-yi-xiao-yan-gui-ze)