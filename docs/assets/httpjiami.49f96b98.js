import{_ as l}from"./Blog.vue_vue&type=script&setup=true&lang.c7e0c2a9.js";import{l as e,o as a,m as t,h as n,a as r,k as i}from"./vendor.14139df1.js";import"./app.e930e480.js";const u=r("div",{class:"prose m-auto"},[r("h2",{id:"归纳",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#归纳","aria-hidden":"true"},"#"),i(" 归纳")]),r("ol",null,[r("li",null,"加密算法的核心思想是“把一个小秘密（密钥）转化为一个大秘密（密文消息）”，守住了小秘密，也就守住了大秘密；"),r("li",null,"对称加密只使用一个密钥，运算速度快，密钥必须保密，无法做到安全的密钥交换，常用的有 AES 和 ChaCha20；"),r("li",null,"非对称加密使用两个密钥：公钥和私钥，公钥可以任意分发而私钥保密，解决了密钥交换问题但速度慢，常用的有 RSA 和 ECC；"),r("li",null,"把对称加密和非对称加密结合起来就得到了“又好又快”的混合加密，也就是 TLS 里使用的加密方式。")]),r("blockquote",null,[r("p",null,"秘钥的单位是位")]),r("h2",{id:"对称加密",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#对称加密","aria-hidden":"true"},"#"),i(" 对称加密")]),r("p",null,"“对称加密”很好理解，就是指加密和解密时使用的密钥都是同一个，是“对称”的。只要保证了密钥的安全，那整个通信过程就可以说具有了机密性"),r("p",null,"著名的两种对称加密"),r("ol",null,[r("li",null,[r("p",null,"AES 的意思是“高级加密标准”（Advanced Encryption Standard），密钥长度可以是 128、192 或 256。它是 DES 算法的替代者，安全强度很高，性能也很好，而且有的硬件还会做特殊优化，所以非常流行，是应用最广泛的对称加密算法。")]),r("li",null,[r("p",null,"ChaCha20 是 Google 设计的另一种加密算法，密钥长度固定为 256 位，纯软件运行性能要超过 AES，曾经在移动客户端上比较流行，但 ARMv8 之后也加入了 AES 硬件优化，所以现在不再具有明显的优势，但仍然算得上是一个不错的算法。")])]),r("h2",{id:"加密分组模式",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#加密分组模式","aria-hidden":"true"},"#"),i(" 加密分组模式")]),r("p",null,"明文的长度不固定，而密钥一次只能处理特定长度的一块数据，这就需要进行迭代，以便将一段很长的明文全部加密，而迭代的方法就是分组模式"),r("p",null,"最早有 ECB、CBC、CFB、OFB 等几种分组模式，但都陆续被发现有安全漏洞，所以现在基本都不怎么用了。最新的分组模式被称为 AEAD（Authenticated Encryption with Associated Data），在加密的同时增加了认证的功能，常用的是 GCM、CCM 和 Poly1305。"),r("h2",{id:"非对称加密",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#非对称加密","aria-hidden":"true"},"#"),i(" 非对称加密")]),r("p",null,"它有两个密钥，一个叫“公钥”（public key），一个叫“私钥”（private key）。两个密钥是不同的，“不对称”，公钥可以公开给任何人使用，而私钥必须严格保密。"),r("p",null,"公钥和私钥有个特别的“单向”性，虽然都可以用来加密解密，但公钥加密后只能用私钥解密，反过来，私钥加密后也只能用公钥解密。"),r("p",null,"在 TLS 里只有很少的几种，比如 DH、DSA、RSA、ECC 等。"),r("ol",null,[r("li",null,"RSA 可能是其中最著名的一个，几乎可以说是非对称加密的代名词，它的安全性基于“整数分解”的数学难题，使用两个超大素数的乘积作为生成密钥的材料，想要从公钥推算出私钥是非常困难的。"),r("li",null,"ECC（Elliptic Curve Cryptography）是非对称加密里的“后起之秀”，它基于“椭圆曲线离散对数”的数学难题，使用特定的曲线方程和基点生成公钥和私钥，子算法 ECDHE 用于密钥交换，ECDSA 用于数字签名。"),r("li",null,"比起 RSA，ECC 在安全强度和性能上都有明显的优势。160 位的 ECC 相当于 1024 位的 RSA，而 224 位的 ECC 则相当于 2048 位的 RSA。因为密钥短，所以相应的计算量、消耗的内存和带宽也就少，加密解密的性能就上去了，对于现在的移动互联网非常有吸引力。")]),r("h2",{id:"混合加密",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#混合加密","aria-hidden":"true"},"#"),i(" 混合加密")]),r("p",null,"因为非对称加密复杂，且机密复杂"),r("ol",null,[r("li",null,"用非对称加密，进行会话秘钥，就是把对称加密的钥匙，安全的传给对方"),r("li",null,"后续就可以用对称加密进行解密")]),r("p",null,[r("img",{src:"https://static001.geekbang.org/resource/image/e4/85/e41f87110aeea3e548d58cc35a478e85.png",alt:""})])],-1),o={setup(r,{expose:i}){const o={title:"24 | 固若金汤的根本（上）：对称加密与非对称加密",date:"2021-11-02T16:00:00.000Z",duration:"10min",meta:[{property:"og:title",content:"24 | 固若金汤的根本（上）：对称加密与非对称加密"}]};i({frontmatter:o});return e({title:"24 | 固若金汤的根本（上）：对称加密与非对称加密",meta:[{property:"og:title",content:"24 | 固若金汤的根本（上）：对称加密与非对称加密"}]}),(e,r)=>{const i=l;return a(),t(i,{frontmatter:o},{default:n((()=>[u])),_:1})}}};export{o as default};
