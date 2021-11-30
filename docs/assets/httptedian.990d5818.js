import{_ as e}from"./Blog.vue_vue&type=script&setup=true&lang.39d150f4.js";import{l as a,o as r,m as t,h as l,a as n,k as i}from"./vendor.14139df1.js";import"./app.108283c1.js";const T=n("div",{class:"prose m-auto"},[n("h2",{id:"归纳",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#归纳","aria-hidden":"true"},"#"),i(" 归纳")]),n("ol",null,[n("li",null,"HTTP 是灵活可扩展的，可以任意添加头字段实现任意功能；"),n("li",null,"HTTP 是可靠传输协议，基于 TCP/IP 协议“尽量”保证数据的送达；"),n("li",null,"HTTP 是应用层协议，比 FTP、SSH 等更通用功能更多，能够传输任意数据；"),n("li",null,"HTTP 使用了请求 - 应答模式，客户端主动发起请求，服务器被动回复请求；"),n("li",null,"HTTP 本质上是无状态的，每个请求都是互相独立、毫无关联的，协议不要求客户端或服务器记录请求相关的信息。")]),n("p",null,[n("img",{src:"https://static001.geekbang.org/resource/image/78/4a/7808b195c921e0685958c20509855d4a.png",alt:""})]),n("hr"),n("h2",{id:"灵活可扩展",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#灵活可扩展","aria-hidden":"true"},"#"),i(" 灵活可扩展")]),n("p",null,"在这个过程中，HTTP 协议逐渐增加了请求方法、版本号、状态码、头字段等特性。而 body 也不再限于文本形式的 TXT 或 HTML，而是能够传输图片、音频视频等任意数据，这些都是源于它的“灵活可扩展”的特点。"),n("h2",{id:"可靠传输",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#可靠传输","aria-hidden":"true"},"#"),i(" 可靠传输")]),n("p",null,"这个特点显而易见，因为 HTTP 协议是基于 TCP/IP 的，而 TCP 本身是一个“可靠”的传输协议，所以 HTTP 自然也就继承了这个特性，能够在请求方和应答方之间“可靠”地传输数据。"),n("h3",{id:"应用层协议",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#应用层协议","aria-hidden":"true"},"#"),i(" 应用层协议")]),n("p",null,"在 TCP/IP 诞生后的几十年里，虽然出现了许多的应用层协议，但它们都仅关注很小的应用领域，局限在很少的应用场景。例如 FTP 只能传输文件、SMTP 只能发送邮件、SSH 只能远程登录等，在通用的数据传输方面“完全不能打”。"),n("p",null,"所以 HTTP 凭借着可携带任意头字段和实体数据的报文结构，以及连接控制、缓存代理等方便易用的特性，一出现就“技压群雄”，迅速成为了应用层里的“明星”协议。只要不太苛求性能，HTTP 几乎可以传递一切东西，满足各种需求，称得上是一个“万能”的协议。"),n("h2",{id:"请求应答",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#请求应答","aria-hidden":"true"},"#"),i(" 请求应答")]),n("p",null,"HTTP 的请求 - 应答模式也恰好契合了传统的 C/S（Client/Server）系统架构，请求方作为客户端、应答方作为服务器。所以，随着互联网的发展就出现了 B/S（Browser/Server）架构，用轻量级的浏览器代替笨重的客户端应用，实现零维护的“瘦”客户端，而服务器则摈弃私有通信协议转而使用 HTTP 协议。"),n("h2",{id:"无状态",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#无状态","aria-hidden":"true"},"#"),i(" 无状态")]),n("p",null,"“无状态”形象地来说就是“没有记忆能力”。比如，浏览器发了一个请求，说“我是小明，请给我 A 文件。”，服务器收到报文后就会检查一下权限，看小明确实可以访问 A 文件，于是把文件发回给浏览器。接着浏览器还想要 B 文件，但服务器不会记录刚才的请求状态，不知道第二个请求和第一个请求是同一个浏览器发来的，所以浏览器必须还得重复一次自己的身份才行：“我是刚才的小明，请再给我 B 文件。”")],-1),d={setup(n,{expose:i}){const d={title:"13 | HTTP有哪些特点？",date:"2021-10-12T16:00:00.000Z",duration:"10min",meta:[{property:"og:title",content:"13 | HTTP有哪些特点？"}]};i({frontmatter:d});return a({title:"13 | HTTP有哪些特点？",meta:[{property:"og:title",content:"13 | HTTP有哪些特点？"}]}),(a,n)=>{const i=e;return r(),t(i,{frontmatter:d},{default:l((()=>[T])),_:1})}}};export{d as default};