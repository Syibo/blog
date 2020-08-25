---
title: 【Nuxt】nuxt服务端部署
date: 2019-06-22
categories:
 - vue
tags:
 - nuxt
---
这个框架其实早些时间就已经学习过了，上线部署这一块放在现在，经过多次的尝试之后终于跑通了部署上线的全过程，这里记录一下和常规的vue项目部署的区别
## vue
vue部署一般前端涉及太多，前端使用build打包生成dist文件夹，后端一般使用nginx代理
## 打包
安装完框架之后先执行打包npm run build得到下面的这个目录
<div align=center>
<img src="https://shenyibo.oss-cn-beijing.aliyuncs.com/20200615/735bae70-aeea-11ea-93c3-b5c4111c7d85.jpg" width="200px" />
</div>
将这些文件夹上传到自己的服务器上面 执行npm install

## 守护进程
执行 pm2 start npm --name "syb-life" -- run start  

--name "syb-life"是启动的服务名称 run start是我们配置的命令  

package.json  
```json
"name": "syb-life",
"version": "1.0.0",
"description": "syb-life",
"author": "shenyibo",
"private": true,
"scripts": {
  "dev": "nuxt",
  "build": "nuxt build",
  "start": "PORT=3000 nuxt start",
  "generate": "nuxt generate"
},
```
运行之前已经起了记得 pm2 delete id一下

## 配置nginx
```js
server {
  listen       80;
  server_name  test.ssr.net;
  root D:/nginx/html;
  location / {
    proxy_pass http://127.0.0.1:3000 ;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $remote_addr;
  }
}
```