(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{500:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"为什么要申请https"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要申请https"}},[s._v("#")]),s._v(" 为什么要申请https")]),s._v(" "),a("p",[s._v("HTTP 协议是不加密传输数据的，也就是用户跟你的网站之间传递数据有可能在途中被截获，破解传递的真实内容，所以使用不加密的 HTTP 的网站是不太安全的。所以， Google 的 Chrome 浏览器将在 2017 年 1 月开始，标记使用不加密的 HTTP 协议的网站为不安全。")]),s._v(" "),a("p",[s._v("同时，微信的小程序团队要求api的请求地址也必须是https的域名地址")]),s._v(" "),a("h2",{attrs:{id:"首先在阿里云申请一个免费的ssl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#首先在阿里云申请一个免费的ssl"}},[s._v("#")]),s._v(" 首先在阿里云申请一个免费的ssl")]),s._v(" "),a("p",[s._v("打开阿里云的控制台搜索ssl，选择如下配置\n"),a("img",{attrs:{src:"https://shenyibo.oss-cn-beijing.aliyuncs.com/20200702/1b721e60-bc0a-11ea-9ac2-f7eb0bd8e2c9.jpg",alt:"Image"}}),s._v("\n然后填入对映的信息提交审核，一般不超过一分钟就会通过。\n点击自己需要的版本下载，我这里使用nginx\n"),a("img",{attrs:{src:"https://shenyibo.oss-cn-beijing.aliyuncs.com/20200702/b320fd80-bc0a-11ea-9ac2-f7eb0bd8e2c9.jpg",alt:"Image"}}),s._v("\n下载成功后会得到两个文件，一个.key一个pem，将文件上传的服务器 /usr/local/nginx/conf\n配置nginx")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    server_name  shenyibo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("life"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    rewrite "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" https"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("$server_name$"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" permanent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//重定向 http => https")]),s._v("\n    location "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      proxy_pass http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      proxy_set_header Host $host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      proxy_set_header "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("X")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Forwarded"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("For $remote_addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nserver "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  listen       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v(" ssl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  server_name  shenyibo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("life"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  ssl_certificate      cert"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4145704")]),s._v("_www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("shenyibo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("life"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  ssl_certificate_key  cert"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4145704")]),s._v("_www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("shenyibo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("life"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  ssl_session_cache    shared"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SSL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  ssl_session_timeout  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  ssl_ciphers  "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HIGH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("aNULL"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MD5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  ssl_prefer_server_ciphers  on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  location "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    proxy_pass http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    proxy_set_header Host $host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    proxy_set_header "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("X")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Forwarded"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("For $remote_addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v('!如果遇到 nginx: [emerg] the "ssl" parameter requires ngx_http_ssl_module in /usr/local/nginx/conf/nginx.conf:\n这个是安装nginx的时候没有开启ssl功能 解决如下')]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/ghjbk/p/6744131.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("nginx开启ssl功能"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"最终"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最终"}},[s._v("#")]),s._v(" 最终")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://shenyibo.oss-cn-beijing.aliyuncs.com/20200702/52f86600-bc14-11ea-9ac2-f7eb0bd8e2c9.jpg",alt:"Image"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);