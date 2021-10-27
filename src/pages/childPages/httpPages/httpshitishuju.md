---
title: 15 | 海纳百川：HTTP的实体数据？
date: 2021-10-23T16:00:00.000+00:00
duration: 10min
---

## 归纳

1. 数据类型表示实体数据的内容是什么，使用的是 MIME type，相关的头字段是 Accept 和 Content-Type；
2. 数据编码表示实体数据的压缩方式，相关的头字段是 Accept-Encoding 和 Content-Encoding；
3. 语言类型表示实体数据的自然语言，相关的头字段是 Accept-Language 和 Content-Language；
4. 字符集表示实体数据的编码方式，相关的头字段是 Accept-Charset 和 Content-Type；
5. 客户端需要在请求头里使用 Accept 等头字段与服务器进行“内容协商”，要求服务器返回最合适的数据；
6. Accept 等头字段可以用“,”顺序列出多个可能的选项，还可以用“;q=”参数来精确指定权重。

## 数据类型与编码

| 头字段 | 请求头 | 响应头 |
| :----:| :----: | :----: |
| 数据类型 | Accept | Content-Type |
| 压缩 | Accept-Encoding | Content-Encoding |

## 语言类型与编码

| 头字段 | 请求头 | 响应头 |
| :----:| :----: | :----: |
| 语言类型 | Accept-Lanuage | Content-Lanuage |
| 字符集 | Accept-Charset | Content-Type |

![](https://static001.geekbang.org/resource/image/b2/58/b2118315a977969ddfcc7ab9d26cb358.png)

## 个人理解

1. Accept: 表示浏览器想要的数据，只要传输就可以携带
2. Content: 表示实体数据，即真实传输的数据，如：body中的数据，或者服务器回传以后的数据，post中有body所以会用到