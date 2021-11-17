import{_ as l}from"./Blog.vue_vue&type=script&setup=true&lang.39d150f4.js";import{l as e,o as a,m as n,h as t,a as i,k as r}from"./vendor.14139df1.js";import"./app.108283c1.js";const s=i("div",{class:"prose m-auto"},[i("h2",{id:"归纳",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#归纳","aria-hidden":"true"},"#"),r(" 归纳")]),i("ol",null,[i("li",null,"可以有多种硬件和软件手段减少网络耗时和计算耗时，让 HTTPS 变得和 HTTP 一样快，最可行的是软件优化；"),i("li",null,"应当尽量使用 ECDHE 椭圆曲线密码套件，节约带宽和计算量，还能实现“False Start”；"),i("li",null,"服务器端应当开启“OCSP Stapling”功能，避免客户端访问 CA 去验证证书；"),i("li",null,"会话复用的效果类似 Cache，前提是客户端必须之前成功建立连接，后面就可以用“Session ID”“Session Ticket”等凭据跳过密钥交换、证书验证等步骤，直接开始加密通信。")]),i("h2",{id:"https主要慢在哪里",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#https主要慢在哪里","aria-hidden":"true"},"#"),r(" HTTPS主要慢在哪里")]),i("ol",null,[i("li",null,"第一个是建立连接时的非对称加密握手"),i("li",null,"第二个是握手后的对称加密报文传输。")]),i("h2",{id:"硬件优化",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#硬件优化","aria-hidden":"true"},"#"),r(" 硬件优化")]),i("p",null,"应为https是计算密集型的"),i("ol",null,[i("li",null,"选择更快的cpu，最好还内建 AES 优化，这样即可以加速握手，也可以加速传输。"),i("li",null,"你可以选择“SSL 加速卡”，加解密时调用它的 API，让专门的硬件来做非对称加解密，分担 CPU 的计算压力。"),i("li",null,"“SSL 加速服务器”，用专门的服务器集群来彻底“卸载”TLS 握手时的加密解密计算，性能自然要比单纯的“加速卡”要强大的多。")]),i("h2",{id:"软件优化",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#软件优化","aria-hidden":"true"},"#"),r(" 软件优化")]),i("ol",null,[i("li",null,"软件升级"),i("li",null,"协议优化")]),i("h2",{id:"证书优化",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#证书优化","aria-hidden":"true"},"#"),r(" 证书优化")]),i("ol",null,[i("li",null,[r("证书传输 "),i("ul",null,[i("li",null,"服务器的证书可以选择椭圆曲线（ECDSA）证书而不是 RSA 证书，因为 224 位的 ECC 相当于 2048 位的 RSA，所以椭圆曲线证书的“个头”要比 RSA 小很多，即能够节约带宽也能减少客户端的运算量，可谓“一举两得”。")])]),i("li",null,"证书校验")]),i("h2",{id:"会话复用",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#会话复用","aria-hidden":"true"},"#"),r(" 会话复用")]),i("p",null,"后一次握手的重点是算出主密钥“Master Secret”，而主密钥每次连接都要重新计算，未免有点太浪费了，如果能够把“辛辛苦苦”算出来的主密钥缓存一下“重用”"),i("ol",null,[i("li",null,"Session ID：就是客户端和服务器首次连接后各自保存一个会话的 ID 号，内存里存储主密钥和其他相关的信息。当客户端再次连接时发一个 ID 过来，服务器就在内存里找，找到就直接用主密钥恢复会话状态，跳过证书验证和密钥交换，只用一个消息往返就可以建立安全通信。")]),i("h2",{id:"会话票证",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#会话票证","aria-hidden":"true"},"#"),r(" 会话票证")]),i("p",null,"Session Ticket：它有点类似 HTTP 的 Cookie，存储的责任由服务器转移到了客户端，服务器加密会话信息，用“New Session Ticket”消息发给客户端，让客户端保存。"),i("h2",{id:"预共享秘钥",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#预共享秘钥","aria-hidden":"true"},"#"),r(" 预共享秘钥")]),i("p",null,"原理和“Session Ticket”差不多，但在发送 Ticket 的同时会带上应用数据（Early Data），免去了 1.2 里的服务器确认步骤，这种方式叫“Pre-shared Key”，简称为“PSK”。"),i("p",null,"但“PSK”也不是完美的，它为了追求效率而牺牲了一点安全性，容易受到“重放攻击”（Replay attack）的威胁。黑客可以截获“PSK”的数据，像复读机那样反复向服务器发送。"),i("p",null,"解决的办法是只允许安全的 GET/HEAD 方法（参见第 10 讲），在消息里加入时间戳、“nonce”验证，或者“一次性票证”限制重放。")],-1),d={setup(i,{expose:r}){const d={title:"28 | 连接太慢该怎么办：HTTPS的优化",date:"2021-11-08T16:00:00.000Z",duration:"10min",meta:[{property:"og:title",content:"28 | 连接太慢该怎么办：HTTPS的优化"}]};r({frontmatter:d});return e({title:"28 | 连接太慢该怎么办：HTTPS的优化",meta:[{property:"og:title",content:"28 | 连接太慢该怎么办：HTTPS的优化"}]}),(e,i)=>{const r=l;return a(),n(r,{frontmatter:d},{default:t((()=>[s])),_:1})}}};export{d as default};
