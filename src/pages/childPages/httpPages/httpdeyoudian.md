---
title: 14 | HTTP有哪些优点？又有哪些缺点？
date: 2021-10-22T16:00:00.000+00:00
duration: 10min
---

## 归纳

1. HTTP 最大的优点是简单、灵活和易于扩展；
2. HTTP 拥有成熟的软硬件环境，应用的非常广泛，是互联网的基础设施；
3. HTTP 是无状态的，可以轻松实现集群化，扩展性能，但有时也需要用 Cookie 技术来实现“有状态”；
4. HTTP 是明文传输，数据完全肉眼可见，能够方便地研究分析，但也容易被窃听；
5. HTTP 是不安全的，无法验证通信双方的身份，也不能判断报文是否被窜改；
6. HTTP 的性能不算差，但不完全适应现在的互联网，还有很大的提升空间

## 简单、灵活、易于扩展

HTTP 最重要也是最突出的优点是“简单、灵活、易于扩展”。

## 应用广泛，环境成熟

不仅在应用领域，在开发领域 HTTP 协议也得到了广泛的支持。它并不限定某种编程语言或者操作系统，所以天然具有“跨语言、跨平台”的优越性。而且，因为本身的简单特性很容易实现，所以几乎所有的编程语言都有 HTTP 调用库和外围的开发测试工具，这一点我觉得就不用再举例了吧，你可能比我更熟悉。