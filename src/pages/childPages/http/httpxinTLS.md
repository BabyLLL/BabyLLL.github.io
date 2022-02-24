---
title: 27 | 更好更快的握手：TLS1.3特性解析
date: 2021-11-7T16:00:00.000+00:00
duration: 10min
---

## 归纳

1. 为了兼容 1.1、1.2 等“老”协议，TLS1.3 会“伪装”成 TLS1.2，新特性在“扩展”里实现；
2. 1.1、1.2 在实践中发现了很多安全隐患，所以 TLS1.3 大幅度删减了加密算法，只保留了 ECDHE、AES、ChaCha20、SHA-2 等极少数算法，强化了安全；
3. TLS1.3 也简化了握手过程，完全握手只需要一个消息往返，提升了性能。

## TLS1.3

> 我们先来快速浏览一下 TLS1.3 的三个主要改进目标：兼容、安全与性能。

## 最大化兼容

1. 向后兼容，添加扩展字段
   - supported_versions：它标记了 TLS 的版本号，使用它就能区分新旧协议。
   - supported_groups
   - key_share
   - signature_algorithms
   - server_name
   
## 强化安全

现在主流的服务器和浏览器在握手阶段都已经不再使用 RSA，改用 ECDHE，而 TLS1.3 在协议里明确废除 RSA 和 DH 则在标准层面保证了“前向安全”。

## 提升性能

从1.2的两个RTT变为一个RTT

其实具体的做法还是利用了扩展。客户端在“Client Hello”消息里直接用“supported_groups”带上支持的曲线，比如 P-256、x25519，用“key_share”带上曲线对应的客户端公钥参数，用“signature_algorithms”带上签名算法

服务器收到后在这些扩展里选定一个曲线和参数，再用“key_share”扩展返回服务器这边的公钥参数，就实现了双方的密钥交换，后面的流程就和 1.2 基本一样了

![](https://static001.geekbang.org/resource/image/4d/b0/4d1df4d07dbb1c2500fc4ea69ecf7ab0.png)

## 握手分析

![](https://static001.geekbang.org/resource/image/7a/db/7a2bc39fdbb421cf72a01e887e9156db.png)

### 浏览器

因为 1.3 的消息兼容 1.2，所以开头的版本号、支持的密码套件和随机数（Client Random）结构都是一样的（不过这时的随机数是 32 个字节）

```

Handshake Protocol: Client Hello
    Version: TLS 1.2 (0x0303)
    Random: cebeb6c05403654d66c2329…
    Cipher Suites (18 suites)
        Cipher Suite: TLS_AES_128_GCM_SHA256 (0x1301)
        Cipher Suite: TLS_CHACHA20_POLY1305_SHA256 (0x1303)
        Cipher Suite: TLS_AES_256_GCM_SHA384 (0x1302)
    Extension: supported_versions (len=9)
        Supported Version: TLS 1.3 (0x0304)
        Supported Version: TLS 1.2 (0x0303)
    Extension: supported_groups (len=14)
        Supported Groups (6 groups)
            Supported Group: x25519 (0x001d)
            Supported Group: secp256r1 (0x0017)
    Extension: key_share (len=107)
        Key Share extension
            Client Key Share Length: 105
            Key Share Entry: Group: x25519
            Key Share Entry: Group: secp256r1

```

“supported_versions”表示这是 TLS1.3，“supported_groups”是支持的曲线，“key_share”是曲线对应的参数。

### 服务器

服务器收到“Client Hello”同样返回“Server Hello”消息，还是要给出一个随机数（Server Random）和选定密码套件。

```

Handshake Protocol: Server Hello
    Version: TLS 1.2 (0x0303)
    Random: 12d2bce6568b063d3dee2…
    Cipher Suite: TLS_AES_128_GCM_SHA256 (0x1301)
    Extension: supported_versions (len=2)
        Supported Version: TLS 1.3 (0x0304)
    Extension: key_share (len=36)
        Key Share extension
            Key Share Entry: Group: x25519, Key Exchange length: 32

```

表面上看和 TLS1.2 是一样的，重点是后面的扩展。“supported_versions”里确认使用的是 TLS1.3，然后在“key_share”扩展带上曲线和对应的公钥参数。