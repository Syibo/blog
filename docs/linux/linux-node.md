---
title: 【Linux】通过nvm安装node
date: 2019-05-21
categories:
 - linux
tags:
 - node
---
## 安装nvm
```js
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh | bash  //(推荐)
```
或者
```js
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh | bash
```
之后 
```js
source ~/.bashrc
```
## 安装node
```
nvm install stable #安装最新稳定版
```
说明
```
nvm install stable #安装最新稳定版 node 
nvm install v4.2.2 #安装 4.2.2 版本 
nvm install v0.12.7 #安装 0.12.7 版本
```