---
title: 3.6 字符单元的中断与换行
date: 2022-02-24T16:00:00.000+00:00
duration: 10min
---

## 归纳

1. wrod-break: normal | break-all | keep-all | break-word
2. 解决连续破折号不换行问题
   
#### keep-all

> 可以保护我们的中文词组不被断开

#### break-all

> 对于non-CJK (CJK 指中文/日文/韩文) 文本，可在任意字符间断行。

#### break-word

> 表现为尽量不断开单词

#### 破折号不换行问题

- 如下属性可以解决
   1. word-break: break-word;
   2. word-wrap: break-word;
   3. overflow-wrap: break-word;

```css
p {
  /* 字符串换行主力 */
  word-break: break-all;
  /* 兼容IE浏览器和Edge浏览器的破折号换行 */
  word-wrap: break-word;
}
```

#### 如果希望中文标点也能成为换行点

```css
p {
  /* 中文标点也能换行 */
  line-break: anywhere
}
```