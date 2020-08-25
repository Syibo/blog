---
title: 【Linux】记录一次升级https过程
date: 2019-07-21
categories:
 - linux
tags:
 - linux
---
## 为什么要申请https
HTTP 协议是不加密传输数据的，也就是用户跟你的网站之间传递数据有可能在途中被截获，破解传递的真实内容，所以使用不加密的 HTTP 的网站是不太安全的。所以， Google 的 Chrome 浏览器将在 2017 年 1 月开始，标记使用不加密的 HTTP 协议的网站为不安全。

同时，微信的小程序团队要求api的请求地址也必须是https的域名地址
## 首先在阿里云申请一个免费的ssl
打开阿里云的控制台搜索ssl，选择如下配置
![Image](https://shenyibo.oss-cn-beijing.aliyuncs.com/20200702/1b721e60-bc0a-11ea-9ac2-f7eb0bd8e2c9.jpg)
然后填入对映的信息提交审核，一般不超过一分钟就会通过。
点击自己需要的版本下载，我这里使用nginx
![Image](https://shenyibo.oss-cn-beijing.aliyuncs.com/20200702/b320fd80-bc0a-11ea-9ac2-f7eb0bd8e2c9.jpg)
下载成功后会得到两个文件，一个.key一个pem，将文件上传的服务器 /usr/local/nginx/conf
配置nginx
```js
server {
    listen       80;
    server_name  shenyibo.life;
    rewrite ^(.*) https://$server_name$1 permanent; //重定向 http => https
    location / {
      proxy_pass http://127.0.0.1:3000 ;
      proxy_set_header Host $host;
      proxy_set_header X-Forwarded-For $remote_addr;
    }
}
server {
  listen       443 ssl;
  server_name  shenyibo.life;

  ssl_certificate      cert/4145704_www.shenyibo.life.pem;
  ssl_certificate_key  cert/4145704_www.shenyibo.life.key;

  ssl_session_cache    shared:SSL:1m;
  ssl_session_timeout  5m;

  ssl_ciphers  HIGH:!aNULL:!MD5;
  ssl_prefer_server_ciphers  on;

  location / {
    proxy_pass http://127.0.0.1:3000 ;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $remote_addr;
  }
}
```
!如果遇到 nginx: [emerg] the "ssl" parameter requires ngx_http_ssl_module in /usr/local/nginx/conf/nginx.conf:
这个是安装nginx的时候没有开启ssl功能 解决如下

[nginx开启ssl功能](https://www.cnblogs.com/ghjbk/p/6744131.html)
## 最终
![Image](https://shenyibo.oss-cn-beijing.aliyuncs.com/20200702/52f86600-bc14-11ea-9ac2-f7eb0bd8e2c9.jpg)