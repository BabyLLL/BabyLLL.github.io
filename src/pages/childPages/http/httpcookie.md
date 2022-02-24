---
title: 19 | 让我知道你是谁：HTTP的Cookie机制
date: 2021-10-29T16:00:00.000+00:00
duration: 10min
---

## 归纳

1. Cookie 是服务器委托浏览器存储的一些数据，让服务器有了“记忆能力”；
2. 响应报文使用 Set-Cookie 字段发送“key=value”形式的 Cookie 值；
3. 请求报文里用 Cookie 字段发送多个 Cookie 值；
4. 为了保护 Cookie，还要给它设置有效期、作用域等属性，常用的有 Max-Age、Expires、Domain、HttpOnly 等；
5. Cookie 最基本的用途是身份识别，实现有状态的会话事务。

## 什么是cookie

> 帮助服务器有了记忆的功能。

## cookie的工作

响应头字段 Set-Cookie 和请求头字段 Cookie。

格式为 key=value 的形式

不过因为服务器的“记忆能力”实在是太差，一张小纸条经常不够用。所以，服务器有时会在响应头里添加多个 Set-Cookie，存储多个“key=value”。但浏览器这边发送时不需要用多个 Cookie 字段，只要在一行里用“;”隔开就行。

![](https://static001.geekbang.org/resource/image/9f/a4/9f6cca61802d65d063e24aa9ca7c38a4.png)

![](https://static001.geekbang.org/resource/image/da/9f/da9b39d88ddd717a6e3feb6637dc3f9f.png)

![](https://static001.geekbang.org/resource/image/9d/5d/9dbb8b490714360475911ca04134df5d.png)

## cookie的属性

1. 生命周期
   - Expires: 俗称“过期时间”，用的是绝对时间点，可以理解为“截止日期”（deadline）
   - Max-Age: 用的是相对时间，单位是秒，浏览器用收到报文的时间点再加上 Max-Age，就可以得到失效的绝对时间。
   - Max-Age优先级高

2. cookie域

3. HttpOnly: 禁止js读取

4. SameSite: 可以防范“跨站请求伪造”（XSRF）攻击

5. Secure: 表示这个 Cookie 仅能用 HTTPS 协议加密传输，明文的 HTTP 协议会禁止发送。但 Cookie 本身不是加密的，浏览器里还是以明文的形式存在。

## cookie应用

1. 身份标识
   - 比如，你用账号和密码登录某电商，登录成功后网站服务器就会发给浏览器一个 Cookie，内容大概是“name=yourid”，这样就成功地把身份标签贴在了你身上。

2. 广告跟踪