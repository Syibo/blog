---
title: 【Linux】linux安装nginx
date: 2019-05-21
categories:
 - linux
tags:
 - node
---
## 安装依赖
```
yum -y install gcc zlib zlib-devel pcre-devel openssl openssl-devel
```
## 下载并解压压缩包
```
//创建一个文件夹
cd /usr/local
mkdir nginx
cd nginx
//下载tar包
wget http://nginx.org/download/nginx-1.13.7.tar.gz
tar -xvf nginx-1.13.7.tar.gz
```
## 安装nginx
```
cd nginx-1.13.7
//执行命令
./configure
//执行make命令
make
//执行make install命令
make install
```
## 检查安装
```
# cd到刚才配置的安装目录/usr/loca/nginx/
./sbin/nginx -t
```
正常情况的信息输出：
nginx: the configuration file /usr/local/nginx/conf/nginx.conf syntax is ok  
nginx: configuration file /usr/local/nginx/conf/nginx.conf test is successful
## 启动nginx 
```
cd /usr/local/nginx/sbin
./nginx //启动nginx
----------------------------------------
./nginx -s reload //重启nginx
```
浏览器输入服务器ip，证明成功
![Image](https://shenyibo.oss-cn-beijing.aliyuncs.com/20200619/2a97b6d0-b213-11ea-9ac2-f7eb0bd8e2c9.jpg)
## 配置开机自启动
```
vim /etc/rc.d/rc.local
```