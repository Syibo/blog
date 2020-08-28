---
title: 【node】puppeteer编写自动化测试脚本&爬虫
date: 2020-08-28
categories:
 - node
tags:
 - puppeteer
---
>Puppeteer 是一个 Node 库，它提供了一个高级 API 来通过 DevTools 协议控制 Chromium 或 Chrome。Puppeteer 默认以 headless 模式运行，但是可以通过修改配置文件运行“有头”模式。

[官网地址](https://zhaoqize.github.io/puppeteer-api-zh_CN/)

你可以在浏览器中手动执行的绝大多数操作都可以使用 Puppeteer 来完成！ 下面是一些示例：
* 生成页面 PDF。
* 抓取 SPA（单页应用）并生成预渲染内容（即“SSR”（服务器端渲染））。
* 自动提交表单，进行 UI 测试，键盘输入等。
* 创建一个时时更新的自动化测试环境。 使用最新的 JavaScript 和浏览器功能直接在最新版本的Chrome中执行测试。
* 捕获网站的 timeline trace，用来帮助分析性能问题。
* 测试浏览器扩展。
## 自动化测试脚本
```js
const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({
        ignoreHTTPSErrors: true,
        headless: false,
        defaultViewport: { width: 1920, height: 1080 },
        slowMo: 250, 
        timeout:0,
        args: [`--window-size=${1920},${1080}`],
    })
    let page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
	await page.setJavaScriptEnabled(true);
    await page.goto("http://sfront.wetest.qq.com:32490/login");
    const searchInput = await page.$("input");
    await searchInput.click();
    console.log('点击了选择框')
    const list = await page.$(".el-select-dropdown__list > li:nth-child(2)");
    await list.click();
    console.log('选择手机号')
    const input = await page.$(".el-form > .el-form-item:nth-child(2) > .el-form-item__content > .el-input > input");
    await input.focus();
    await page.keyboard.type("12345678900");
    console.log('输入密码')
    try {
        const searchBtn = await page.$("button");
        await searchBtn.click();
        console.log('登录成功')
    } catch (error) {
        console.log('登录失败')
    }
    let res = await page.$$eval('.el-menu > li > span', el => el.map(el => el.innerHTML));
    console.log(res);
    const clond = await page.$(".el-menu > li:nth-child(14)");
    await clond.click();
    console.log('选择数据管理')
    const btn = await page.$(".table-top-right > button:nth-child(2)");
    await btn.click();
    const btnAdd = await page.$(".el-button--primary");
    await btnAdd.click();
    const addInput = await page.$(".el-form > .el-form-item > .el-form-item__content > .el-input > input");
    await addInput.focus();
    await page.keyboard.type("测试自动化");
    const comit = await page.$(".el-dialog__footer > div > button:nth-child(2)"); 
    await comit.click();
})();

```
## 爬虫
```js
const puppeteer = require('puppeteer');
let scrape = async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('http://books.toscrape.com/');
    const result = await page.evaluate(() => {
        let data = []; // 初始化空数组来存储数据
        let elements = document.querySelectorAll('.product_pod'); // 获取所有书籍元素
        for (var element of elements){ // 循环
            let title = element.childNodes[5].innerText; // 获取标题
            let price = element.childNodes[7].children[0].innerText; // 获取价格
            data.push({title, price}); // 存入数组
        }
        return data; // 返回数据
    });
    browser.close();
    return result;
};
scrape().then((value) => {
    console.log(value); // Success!
});
})()
```