---
title: 22 | 冷链周转：HTTP的缓存代理
date: 2021-11-1T16:00:00.000+00:00
duration: 10min
---

## 归纳

1. 计算机领域里最常用的性能优化手段是“时空转换”，也就是“时间换空间”或者“空间换时间”，HTTP 缓存属于后者；
2. 缓存代理是增加了缓存功能的代理服务，缓存源服务器的数据，分发给下游的客户端；
3. “Cache-Control”字段也可以控制缓存代理，常用的有“private”“s-maxage”“no-transform”等，同样必须配合“Last-modified”“ETag”等字段才能使用；
4. 缓存代理有时候也会带来负面影响，缓存不良数据，需要及时刷新或删除。

## 缓存代理服务

在 HTTP 的缓存体系中，缓存代理的身份十分特殊，它“既是客户端，又是服务器”，同时也“既不是客户端，又不是服务器”。

## 源服务器的缓存控制

1. Cache-Control：
   - private：只能存在客户端
   - public：可以存在缓存服务器
   - proxy-revalidate：缓存服务器专属只要求代理的缓存过期后必须验证，客户端不必回源，只验证到代理这个环节就行了
   - s-maxage：控制代理缓存时间
   - no-transform：专属，禁止图片之类的进行缓存

## 客户端缓存控制

1. “max-stale”的意思是如果代理上的缓存过期了也可以接受，但不能过期太多，超过 x 秒也会不要。
2. “min-fresh”的意思是缓存必须有效，而且必须在 x 秒后依然有效。

## 个人理解

1. 浏览器拿到网址以后
2. 浏览器查找缓存，1.如果有直接放回，2.如果没有，那么通过域名查找
3. dns寻址操作，1.本地有缓存直接，2.无缓存/缓存过期 -> 本地dns服务器 -> 根dns -> 顶级dns -> 权威 
4. 准备建立http请求
5. 准备请求头，Cache-Control属性，no-stroe, no-cache, noly-if-cached等。
6. 如果缓存过期，需要携带if-None-Match或者if-modifid-since等字段进行校验
7. 与代理服务器建立tcp三次握手
8. 代理服务器，查看请求头是否可以使用缓存，1.有缓存，可用，不可用，2.无缓存
9. 不可用/无缓存：与源服务器建立tcp连接，
10. 无缓存：源服务器发生响应报文，代理服务器通过Cache-Control进行操作
11. 不可用：通if-Nono-match等字段进行校验，如果没有变化返回304，如果有更新与无缓存操作一致
12. 返回个代理服务器，查看Cache-Control,是否可以存为公共资源，存储时间等
13. 返还给客户端，如果是304直接渲染。响应中会重新携带Cache-Control如时间等，进行缓存。
14. tcp四次挥手断开链接