import{_ as e}from"./Blog.vue_vue&type=script&setup=true&lang.f697ac2e.js";import{l,o as r,m as a,g as n,h as t,k as i}from"./vendor.83c398b4.js";import"./main.96cc30f2.js";import"./modulepreload-polyfill.b7f2da20.js";const o=t("div",{class:"prose m-auto"},[t("h2",{id:"总览图",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#总览图","aria-hidden":"true"},"#"),i(" 总览图")]),t("p",null,[t("img",{src:"https://static001.geekbang.org/resource/image/1e/81/1e7533f765d2ede0abfab73cf6b57781.png",alt:"总览"})]),t("h2",{id:"归纳",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#归纳","aria-hidden":"true"},"#"),i(" 归纳")]),t("ol",null,[t("li",null,"TCP/IP 是网络世界最常用的协议，HTTP 通常运行在 TCP/IP 提供的可靠传输基础上；"),t("li",null,"DNS 域名是 IP 地址的等价替代，需要用域名解析实现到 IP 地址的映射；"),t("li",null,"URI 是用来标记互联网上资源的一个名字，由“协议名 + 主机名 + 路径”构成，俗称 URL；"),t("li",null,"HTTPS 相当于“HTTP+SSL/TLS+TCP/IP”，为 HTTP 套了一个安全的外壳；"),t("li",null,"代理是 HTTP 传输过程中的“中转站”，可以实现缓存加速、负载均衡等功能。")]),t("h2",{id:"tcp-ip",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#tcp-ip","aria-hidden":"true"},"#"),i(" TCP/IP")]),t("p",null,"IP 协议是“Internet Protocol”的缩写，主要目的是解决寻址和路由问题，以及如何在两点间传送数据包。IP 协议使用“IP 地址”的概念来定位互联网上的每一台计算机。可以对比一下现实中的电话系统，你拿着的手机相当于互联网上的计算机，而要打电话就必须接入电话网，由通信公司给你分配一个号码，这个号码就相当于 IP 地址。"),t("p",null,"TCP 协议是“Transmission Control Protocol”的缩写，意思是“传输控制协议”，它位于 IP 协议之上，基于 IP 协议提供可靠的、字节流形式的通信，是 HTTP 协议得以实现的基础。"),t("h2",{id:"dns",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#dns","aria-hidden":"true"},"#"),i(" DNS")]),t("p",null,"“域名系统”（Domain Name System）出现了，用有意义的名字来作为 IP 地址的等价替代。设想一下，你是愿意记“95.211.80.227”这样枯燥的数字，还是“nginx.org”这样的词组呢？"),t("h2",{id:"uri-url",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#uri-url","aria-hidden":"true"},"#"),i(" URI/URL")]),t("p",null,"URI（Uniform Resource Identifier），中文名称是 统一资源标识符，使用它就能够唯一地标记互联网上资源。"),t("p",null,"URL（Uniform Resource Locator）， 统一资源定位符，也就是我们俗称的“网址”，它实际上是 URI 的一个子集，不过因为这两者几乎是相同的，差异不大，所以通常不会做严格的区分。"),t("h2",{id:"https",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#https","aria-hidden":"true"},"#"),i(" HTTPS")]),t("p",null,"HTTPS 相当于“HTTP+SSL/TLS+TCP/IP”，其中的“HTTP”和“TCP/IP”我们都已经明白了，只要再了解一下 SSL/TLS，HTTPS 也就能够轻松掌握。"),t("p",null,"SSL 的全称是“Secure Socket Layer”，由网景公司发明，当发展到 3.0 时被标准化，改名为 TLS，即“Transport Layer Security”，但由于历史的原因还是有很多人称之为 SSL/TLS，或者直接简称为 SSL。"),t("h2",{id:"代理",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#代理","aria-hidden":"true"},"#"),i(" 代理")]),t("ol",null,[t("li",null,"匿名代理：完全“隐匿”了被代理的机器，外界看到的只是代理服务器；"),t("li",null,"透明代理：顾名思义，它在传输过程中是“透明开放”的，外界既知道代理，也知道客户端；"),t("li",null,"正向代理：靠近客户端，代表客户端向服务器发送请求；"),t("li",null,"反向代理：靠近服务器端，代表服务器响应客户端的请求；")]),t("p",null,"由于代理在传输过程中插入了一个“中间层”，所以可以在这个环节做很多有意思的事情，比如："),t("ol",null,[t("li",null,"负载均衡：把访问请求均匀分散到多台机器，实现访问集群化；"),t("li",null,"内容缓存：暂存上下行的数据，减轻后端的压力；"),t("li",null,"安全防护：隐匿 IP, 使用 WAF 等工具抵御网络攻击，保护被代理的机器；"),t("li",null,"数据处理：提供压缩、加密等额外的功能。")])],-1),u={setup(t,{expose:i}){const u={title:"04 | HTTP世界全览（下）：与HTTP相关的各种协议",date:"2021-09-24T16:00:00.000Z",duration:"10min",meta:[{property:"og:title",content:"04 | HTTP世界全览（下）：与HTTP相关的各种协议"}]};i({frontmatter:u});return l({title:"04 | HTTP世界全览（下）：与HTTP相关的各种协议",meta:[{property:"og:title",content:"04 | HTTP世界全览（下）：与HTTP相关的各种协议"}]}),(l,t)=>{const i=e;return r(),a(i,{frontmatter:u},{default:n((()=>[o])),_:1})}}};export{u as default};
