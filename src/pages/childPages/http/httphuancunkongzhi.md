---
title: 20 | 生鲜速递：HTTP的缓存控制
date: 2021-10-30T16:00:00.000+00:00
duration: 10min
---

## 归纳

1. 缓存是优化系统性能的重要手段，HTTP 传输的每一个环节中都可以有缓存；
2. 服务器使用“Cache-Control”设置缓存策略，常用的是“max-age”，表示资源的有效期；
3. 浏览器收到数据就会存入缓存，如果没过期就可以直接使用，过期就要去服务器验证是否仍然可用；
4. 验证资源是否失效需要使用“条件请求”，常用的是“if-Modified-Since”和“If-None-Match”，收到 304 就可以复用缓存里的资源；
5. 验证资源是否被修改的条件有两个：“Last-modified”和“ETag”，需要服务器预先在响应报文里设置，搭配条件请求使用；
6. 浏览器也可以发送“Cache-Control”字段，使用“max-age=0”或“no_cache”刷新数据。

## 服务器的缓存控制

1. Cache-Control: 控制缓存
   - max-Age: 这里的 max-age 是“生存时间”（又叫“新鲜度”“缓存寿命”，类似 TTL，Time-To-Live），时间的计算起点是响应报文的创建时刻（即 Date 字段，也就是离开服务器的时刻），而不是客户端收到报文的时刻，也就是说包含了在链路传输过程中所有节点所停留的时间。
   - no-store：不允许缓存，用于某些变化非常频繁的数据，例如秒杀页面；
   - no-cache：它的字面含义容易与 no-store 搞混，实际的意思并不是不允许缓存，而是可以缓存，但在使用之前必须要去服务器验证是否过期，是否有最新的版本；
   - must-revalidate：又是一个和 no-cache 相似的词，它的意思是如果缓存不过期就可以继续使用，但过期了如果还想用就必须去服务器验证。

## 客户端的缓存控制

1. 浏览器使用Cache-Control只能控制，是否刷新数据，不能很好的去利用数据
2. Cache-Control
    - max-age: 可以使用if-none-match去校验
    - no-catch: 不使用条件请求直接获取新的

## 条件请求

1. 请求头：if-Modified-Since 响应头：Last-modified
2. If-None-Match， Etag
3. 我们最常用的是“if-Modified-Since”和“If-None-Match”这两个。需要第一次的响应报文预先提供“Last-modified”和“ETag”，然后第二次请求时就可以带上缓存里的原值，验证资源是否是最新的。
4. Etag: 是实体标签的唯一标识之一

## 个人理解

1. 如果响应头的Cache-Control中max-age设置了时间，浏览器就会来在规定时间内走缓存
2. 如果请求头中没有用Cache-Control,那么如果响应头中的max-age到时间了，请求头中就会携带if-None-match就是的一次响应中的Etag，进行匹配，如果和服务器的一样返回304，不一样200重新设置Cache-Control中的属性
3. 如果请求头有cache-Control
   - 如果是max-age=0, 携带if-None-match进行验证
   - 如果是no-Cache,不携带if-None-match验证