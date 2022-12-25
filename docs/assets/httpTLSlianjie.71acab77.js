import{_ as e}from"./Blog.vue_vue&type=script&setup=true&lang.f697ac2e.js";import{l,o as r,m as a,g as t,h as n,k as i}from"./vendor.83c398b4.js";import"./main.96cc30f2.js";import"./modulepreload-polyfill.b7f2da20.js";const o=n("div",{class:"prose m-auto"},[n("h2",{id:"归纳",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#归纳","aria-hidden":"true"},"#"),i(" 归纳")]),n("ol",null,[n("li",null,"HTTPS 协议会先与服务器执行 TCP 握手，然后执行 TLS 握手，才能建立安全连接；"),n("li",null,"握手的目标是安全地交换对称密钥，需要三个随机数，第三个随机数“Pre-Master”必须加密传输，绝对不能让黑客破解；"),n("li",null,"“Hello”消息交换随机数，“Key Exchange”消息交换“Pre-Master”；"),n("li",null,"“Change Cipher Spec”之前传输的都是明文，之后都是对称密钥加密的密文。")]),n("h2",{id:"https建立链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#https建立链接","aria-hidden":"true"},"#"),i(" HTTPS建立链接")]),n("p",null,"在 HTTP 协议里，建立连接后，浏览器会立即发送请求报文。但现在是 HTTPS 协议，它需要再用另外一个“握手”过程，在 TCP 上建立安全连接，之后才是收发 HTTP 报文。"),n("h2",{id:"tls协议组成",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#tls协议组成","aria-hidden":"true"},"#"),i(" TLS协议组成")]),n("ol",null,[n("li",null,"记录协议（Record Protocol）规定了 TLS 收发数据的基本单位：记录（record）。它有点像是 TCP 里的 segment，所有的其他子协议都需要通过记录协议发出。但多个记录数据可以在一个 TCP 包里一次性发出，也并不需要像 TCP 那样返回 ACK。"),n("li",null,"警报协议（Alert Protocol）的职责是向对方发出警报信息，有点像是 HTTP 协议里的状态码。比如，protocol_version 就是不支持旧版本，bad_certificate 就是证书有问题，收到警报后另一方可以选择继续，也可以立即终止连接。"),n("li",null,"握手协议（Handshake Protocol）是 TLS 里最复杂的子协议，要比 TCP 的 SYN/ACK 复杂的多，浏览器和服务器会在握手过程中协商 TLS 版本号、随机数、密码套件等信息，然后交换证书和密钥参数，最终双方协商得到会话密钥，用于后续的混合加密系统。"),n("li",null,"最后一个是变更密码规范协议（Change Cipher Spec Protocol），它非常简单，就是一个“通知”，告诉对方，后续的数据都将使用加密保护。那么反过来，在它之前，数据都是明文的。")]),n("p",null,[n("img",{src:"https://static001.geekbang.org/resource/image/69/6c/69493b53f1b1d540acf886ebf021a26c.png",alt:""})]),n("h2",{id:"ecdhe-秘钥交换算法-握手过程",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ecdhe-秘钥交换算法-握手过程","aria-hidden":"true"},"#"),i(" ECDHE(秘钥交换算法)握手过程")]),n("p",null,[n("img",{src:"https://static001.geekbang.org/resource/image/9c/1e/9caba6d4b527052bbe7168ed4013011e.png",alt:""})]),n("ol",null,[n("li",null,"浏览器发送请求，里面有客户端的版本号、支持的密码套件，还有一个随机数（Client Random），用于后续生成会话密钥。"),n("li",null,"服务器收到“Client Hello”后，会返回一个“Server Hello”消息。把版本号对一下，也给出一个随机数（Server Random），然后从客户端的列表里选一个作为本次通信使用的密码套件"),n("li",null,"服务器为了证明自己的身份，就把证书也发给了客户端（Server Certificate）。"),n("li",null,"因为服务器选择了 ECDHE 算法，所以它会在证书后发送“Server Key Exchange”消息，里面是椭圆曲线的公钥（Server Params），用来实现密钥交换算法，再加上自己的私钥签名认证。"),n("li",null,"服务器结束"),n("li",null,"客户端通过密码套件要求生成椭圆曲线的公钥（Client Params），用“Client Key Exchange”消息发给服务器。"),n("li",null,"现在客户端和服务器手里都拿到了密钥交换算法的两个参数（Client Params、Server Params），就用 ECDHE 算法一阵算，算出了一个新的东西，叫“Pre-Master”，其实也是一个随机数。"),n("li",null,"现在客户端和服务器手里有了三个随机数：Client Random、Server Random 和 Pre-Master。用这三个作为原始材料，就可以生成用于加密会话的主密钥，叫“Master Secret”。而黑客因为拿不到“Pre-Master”，所以也就得不到主密钥。"),n("li",null,"有了主密钥和派生的会话密钥，握手就快结束了。客户端发一个“Change Cipher Spec”，然后再发一个“Finished”消息，把之前所有发送的数据做个摘要，再加密一下，让服务器做个验证。"),n("li",null,"意思就是告诉服务器：“后面都改用对称算法加密通信了啊，用的就是打招呼时说的 AES，加密对不对还得你测一下。"),n("li",null,"”服务器也是同样的操作，发“Change Cipher Spec”和“Finished”消息，双方都验证加密解密 OK，握手正式结束，后面就收发被加密的 HTTP 请求和响应了。")])],-1),s={setup(n,{expose:i}){const s={title:"26 | 信任始于握手：TLS1.2连接过程解析？",date:"2021-11-06T16:00:00.000Z",duration:"10min",meta:[{property:"og:title",content:"26 | 信任始于握手：TLS1.2连接过程解析？"}]};i({frontmatter:s});return l({title:"26 | 信任始于握手：TLS1.2连接过程解析？",meta:[{property:"og:title",content:"26 | 信任始于握手：TLS1.2连接过程解析？"}]}),(l,n)=>{const i=e;return r(),a(i,{frontmatter:s},{default:t((()=>[o])),_:1})}}};export{s as default};
