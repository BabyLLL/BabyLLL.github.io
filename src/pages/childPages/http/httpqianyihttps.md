---
title: 29 | 我应该迁移到HTTPS吗？
date: 2021-11-9T16:00:00.000+00:00
duration: 10min
---

## 归纳

1. 从 HTTP 迁移到 HTTPS 是“大势所趋”，能做就应该尽早做；
2. 升级 HTTPS 首先要申请数字证书，可以选择免费好用的“Let’s Encrypt”；
3. 配置 HTTPS 时需要注意选择恰当的 TLS 版本和密码套件，强化安全；
4. 原有的 HTTP 站点可以保留作为过渡，使用 301 重定向到 HTTPS。

## 迁移的顾虑

1. 慢：连接的rtt过多
2. 贵：证书成本
3. 难：是指 HTTPS 涉及的知识点太多、太复杂，有一定的技术门槛，不能很快上手。

## 申请证书

“Let’s Encrypt”一直在推动证书的自动化部署，为此还实现了专门的 ACME 协议（RFC8555）。有很多的客户端软件可以完成申请、验证、下载、更新的“一条龙”操作，比如 Certbot、acme.sh 等等，都可以在“Let’s Encrypt”网站上找到，用法很简单，相关的文档也很详细，几分钟就能完成申请

## 服务器名称指示

虚拟主机问题

在 HTTP 协议里，多个域名可以同时在一个 IP 地址上运行，这就是“虚拟主机”，Web 服务器会使用请求头里的 Host 字段来选择。

但在 HTTPS 里，因为请求头只有在 TLS 握手之后才能发送，在握手时就必须选择“虚拟主机”对应的证书，TLS 无法得知域名的信息，就只能用 IP 地址来区分。所以，最早的时候每个 HTTPS 域名必须使用独立的 IP 地址，非常不方便。

这还是得用到 TLS 的“扩展”，给协议加个 SNI（Server Name Indication）的“补充条款”。它的作用和 Host 字段差不多，客户端会在“Client Hello”时带上域名信息，这样服务器就可以根据名字而不是 IP 地址来选择证书。

```

Extension: server_name (len=19)
    Server Name Indication extension
        Server Name Type: host_name (0)
        Server Name: www.chrono.com

```

## 重定向跳转

1. 通过Nginx配置return或者rewrite
2. 有一种叫“HSTS”（HTTP 严格传输安全，HTTP Strict Transport Security）的技术可以消除这种安全隐患。HTTPS 服务器需要在发出的响应头里添加一个“Strict-Transport-Security”的字段，再设定一个有效期

```

Strict-Transport-Security: max-age=15768000; includeSubDomains

```

3. 有了它浏览器就可以在规定时间内字段转换为https