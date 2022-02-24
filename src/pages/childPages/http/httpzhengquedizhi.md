---
title: 11 | 你能写出正确的网址吗？
date: 2021-10-9T16:00:00.000+00:00
duration: 10min
---

## 归纳

1. URI 是用来唯一标记服务器上资源的一个字符串，通常也称为 URL；
2. URI 通常由 scheme、host:port、path 和 query 四个部分组成，有的可以省略；
3. scheme 叫“方案名”或者“协议名”，表示资源应该使用哪种协议来访问；
4. “host:port”表示资源所在的主机名和端口号；
5. path 标记资源所在的位置；
6. query 表示对资源附加的额外要求；
7. 在 URI 里对“@&/”等特殊字符和汉字必须要做编码，否则服务器收到 HTTP 报文后会无法正确处理。

## URI的格式

![](https://static001.geekbang.org/resource/image/46/2a/46581d7e1058558d8e12c1bf37d30d2a.png)