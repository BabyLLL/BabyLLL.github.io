---
title: 12 | 响应状态码该怎么用？
date: 2021-10-10T16:00:00.000+00:00
duration: 10min
---

## 归纳

1. 状态码在响应报文里表示了服务器对请求的处理结果；
2. 状态码后的原因短语是简单的文字描述，可以自定义；
3. 状态码是十进制的三位数，分为五类，从 100 到 599；
4. 2××类状态码表示成功，常用的有 200、204、206；
5. 3××类状态码表示重定向，常用的有 301、302、304；
6. 4××类状态码表示客户端错误，常用的有 400、403、404；
7. 5××类状态码表示服务器错误，常用的有 500、501、502、503。