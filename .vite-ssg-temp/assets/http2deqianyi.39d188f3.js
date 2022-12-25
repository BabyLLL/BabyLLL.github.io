"use strict";
exports[Symbol.toStringTag] = "Module";
var Blog = require("./Blog.07cdaa72.js");
var vue = require("vue");
var serverRenderer = require("@vue/server-renderer");
var head = require("@vueuse/head");
require("../main.js");
require("dayjs");
require("@vueuse/core");
require("vue-router");
require("vite-ssg");
const _sfc_main = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "33 | \u6211\u5E94\u8BE5\u8FC1\u79FB\u5230HTTP/2\u5417\uFF1F", "date": "2021-11-17T16:00:00.000Z", "duration": "10min", "meta": [{ "property": "og:title", "content": "33 | \u6211\u5E94\u8BE5\u8FC1\u79FB\u5230HTTP/2\u5417\uFF1F" }] };
    expose({ frontmatter });
    const head$1 = { "title": "33 | \u6211\u5E94\u8BE5\u8FC1\u79FB\u5230HTTP/2\u5417\uFF1F", "meta": [{ "property": "og:title", "content": "33 | \u6211\u5E94\u8BE5\u8FC1\u79FB\u5230HTTP/2\u5417\uFF1F" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Blog = Blog._sfc_main;
      _push(serverRenderer.ssrRenderComponent(_component_Blog, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><h2 id="\u5F52\u7EB3" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u5F52\u7EB3" aria-hidden="true"${_scopeId}>#</a> \u5F52\u7EB3</h2><ol${_scopeId}><li${_scopeId}>HTTP/2 \u5B8C\u5168\u517C\u5BB9 HTTP/1\uFF0C\u662F\u201C\u66F4\u5B89\u5168\u7684 HTTP\u3001\u66F4\u5FEB\u7684 HTTPS\u201D\uFF0C\u5934\u90E8\u538B\u7F29\u3001\u591A\u8DEF\u590D\u7528\u7B49\u6280\u672F\u53EF\u4EE5\u5145\u5206\u5229\u7528\u5E26\u5BBD\uFF0C\u964D\u4F4E\u5EF6\u8FDF\uFF0C\u4ECE\u800C\u5927\u5E45\u5EA6\u63D0\u9AD8\u4E0A\u7F51\u4F53\u9A8C\uFF1B</li><li${_scopeId}>TCP \u534F\u8BAE\u5B58\u5728\u201C\u961F\u5934\u963B\u585E\u201D\uFF0C\u6240\u4EE5 HTTP/2 \u5728\u5F31\u7F51\u6216\u8005\u79FB\u52A8\u7F51\u7EDC\u4E0B\u7684\u6027\u80FD\u8868\u73B0\u4F1A\u4E0D\u5982 HTTP/1\uFF1B</li><li${_scopeId}>\u8FC1\u79FB\u5230 HTTP/2 \u80AF\u5B9A\u4F1A\u6709\u6027\u80FD\u63D0\u5347\uFF0C\u4F46\u9AD8\u6D41\u91CF\u7F51\u7AD9\u6548\u679C\u4F1A\u66F4\u663E\u8457\uFF1B</li><li${_scopeId}>\u5982\u679C\u5DF2\u7ECF\u5347\u7EA7\u5230\u4E86 HTTPS\uFF0C\u90A3\u4E48\u518D\u5347\u7EA7\u5230 HTTP/2 \u4F1A\u5F88\u7B80\u5355\uFF1B</li><li${_scopeId}>TLS \u534F\u8BAE\u63D0\u4F9B\u201CALPN\u201D\u6269\u5C55\uFF0C\u8BA9\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u534F\u5546\u4F7F\u7528\u7684\u5E94\u7528\u5C42\u534F\u8BAE\uFF0C\u201C\u53D1\u73B0\u201DHTTP/2 \u670D\u52A1\u3002</li></ol><h2 id="http2\u7684\u4F18\u70B9" tabindex="-1"${_scopeId}><a class="header-anchor" href="#http2\u7684\u4F18\u70B9" aria-hidden="true"${_scopeId}>#</a> HTTP2\u7684\u4F18\u70B9</h2><ol${_scopeId}><li${_scopeId}>http2\u5B8C\u5168\u517C\u5BB9http1\uFF0C\u7EE7\u627F\u4E861\u7684\u4F18\u70B9\uFF0C\u89C4\u907F\u4E86\u4E00\u4E9B1\u7684\u7F3A\u70B9\uFF0C\u53EF\u4EE5\u8BA4\u4E3A\u662F\u201C\u66F4\u5B89\u5168\u7684 HTTP\u3001\u66F4\u5FEB\u7684 HTTPS\u201D\u3002</li><li${_scopeId}>\u4F60\u5E94\u8BE5\u77E5\u9053\uFF0C\u5F71\u54CD\u7F51\u7EDC\u901F\u5EA6\u7684\u4E24\u4E2A\u5173\u952E\u56E0\u7D20\u662F\u201C\u5E26\u5BBD\u201D\u548C\u201C\u5EF6\u8FDF\u201D\uFF0CHTTP/2 \u7684\u5934\u90E8\u538B\u7F29\u3001\u591A\u8DEF\u590D\u7528\u3001\u6D41\u4F18\u5148\u7EA7\u3001\u670D\u52A1\u5668\u63A8\u9001\u7B49\u624B\u6BB5\u5176\u5B9E\u90FD\u662F\u9488\u5BF9\u8FD9\u4E24\u4E2A\u8981\u70B9\u3002</li><li${_scopeId}>\u8282\u7EA6\u5E26\u5BBD\u7684\u57FA\u672C\u624B\u6BB5\u5C31\u662F\u538B\u7F29\uFF0C\u5728 HTTP/1 \u91CC\u53EA\u80FD\u538B\u7F29 body\uFF0C\u800C HTTP/2 \u5219\u53EF\u4EE5\u7528 HPACK \u7B97\u6CD5\u538B\u7F29 header\uFF0C\u8FD9\u5BF9\u9AD8\u6D41\u91CF\u7684\u7F51\u7AD9\u975E\u5E38\u6709\u4EF7\u503C\uFF0C\u6709\u6570\u636E\u8868\u660E\u80FD\u8282\u7701\u5927\u6982 5%~10% \u7684\u6D41\u91CF\uFF0C\u8FD9\u662F\u5B9E\u5B9E\u5728\u5728\u7684\u201C\u771F\u91D1\u767D\u94F6\u201D\u3002</li><li${_scopeId}>\u4E0E HTTP/1\u201C\u5E76\u53D1\u591A\u4E2A\u8FDE\u63A5\u201D\u4E0D\u540C\uFF0CHTTP/2 \u7684\u201C\u591A\u8DEF\u590D\u7528\u201D\u7279\u6027\u8981\u6C42\u5BF9\u4E00\u4E2A\u57DF\u540D\uFF08\u6216\u8005 IP\uFF09\u53EA\u7528\u4E00\u4E2A TCP \u8FDE\u63A5\uFF0C\u6240\u6709\u7684\u6570\u636E\u90FD\u5728\u8FD9\u4E00\u4E2A\u8FDE\u63A5\u4E0A\u4F20\u8F93\uFF0C\u8FD9\u6837\u4E0D\u4EC5\u8282\u7EA6\u4E86\u5BA2\u6237\u7AEF\u3001\u670D\u52A1\u5668\u548C\u7F51\u7EDC\u7684\u8D44\u6E90\uFF0C\u8FD8\u53EF\u4EE5\u628A\u5E26\u5BBD\u8DD1\u6EE1\uFF0C\u8BA9 TCP \u5145\u5206\u201C\u5403\u9971\u201D\u3002</li><li${_scopeId}>HTTP2\u53EA\u4F7F\u7528\u4E00\u4E2A\u94FE\u63A5</li></ol><h2 id="http2\u7684\u7F3A\u70B9" tabindex="-1"${_scopeId}><a class="header-anchor" href="#http2\u7684\u7F3A\u70B9" aria-hidden="true"${_scopeId}>#</a> HTTP2\u7684\u7F3A\u70B9</h2><ol${_scopeId}><li${_scopeId}>\u8DDF3\u6BD4\u8D77\u6765tcp\u4F1A\u6709\u963B\u585E\u7684\u60C5\u51B5</li><li${_scopeId}>\u5728\u5207\u6362\u79FB\u52A8\u7F51\u7EDC\u662F\u9700\u8981\u4ECE\u65B0\u94FE\u63A5</li></ol><h2 id="\u5E94\u7528\u5C42\u534F\u8BAE\u534F\u5546\uFF08alpn\uFF09" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u5E94\u7528\u5C42\u534F\u8BAE\u534F\u5546\uFF08alpn\uFF09" aria-hidden="true"${_scopeId}>#</a> \u5E94\u7528\u5C42\u534F\u8BAE\u534F\u5546\uFF08ALPN\uFF09</h2><p${_scopeId}>\u4F60\u6709\u6CA1\u6709\u60F3\u8FC7\uFF0C\u5728 URI \u91CC\u7528\u7684\u90FD\u662F HTTPS \u534F\u8BAE\u540D\uFF0C\u6CA1\u6709\u7248\u672C\u6807\u8BB0\uFF0C\u6D4F\u89C8\u5668\u600E\u4E48\u77E5\u9053\u670D\u52A1\u5668\u652F\u6301 HTTP/2 \u5462\uFF1F\u4E3A\u4EC0\u4E48\u4E0A\u6765\u5C31\u80FD\u7528 HTTP/2\uFF0C\u800C\u4E0D\u662F\u7528 HTTP/1 \u901A\u4FE1\u5462\uFF1F</p><p${_scopeId}>\u7B54\u6848\u5728 TLS \u7684\u6269\u5C55\u91CC\uFF0C\u6709\u4E00\u4E2A\u53EB\u201CALPN\u201D\uFF08Application Layer Protocol Negotiation\uFF09\u7684\u4E1C\u897F\uFF0C\u7528\u6765\u4E0E\u670D\u52A1\u5668\u5C31 TLS \u4E0A\u8DD1\u7684\u5E94\u7528\u534F\u8BAE\u8FDB\u884C\u201C\u534F\u5546\u201D\u3002</p><p${_scopeId}>\u5BA2\u6237\u7AEF\u5728\u53D1\u8D77\u201CClient Hello\u201D\u63E1\u624B\u7684\u65F6\u5019\uFF0C\u540E\u9762\u4F1A\u5E26\u4E0A\u4E00\u4E2A\u201CALPN\u201D\u6269\u5C55\uFF0C\u91CC\u9762\u6309\u7167\u4F18\u5148\u987A\u5E8F\u5217\u51FA\u5BA2\u6237\u7AEF\u652F\u6301\u7684\u5E94\u7528\u534F\u8BAE\u3002</p><p${_scopeId}><img src="https://static001.geekbang.org/resource/image/d8/b0/d8f8606948bbd63c31466e464c1956b0.png" alt=""${_scopeId}></p><p${_scopeId}>\u670D\u52A1\u5668\u770B\u5230 ALPN \u6269\u5C55\u4EE5\u540E\u5C31\u53EF\u4EE5\u4ECE\u5217\u8868\u91CC\u9009\u62E9\u4E00\u79CD\u5E94\u7528\u534F\u8BAE\uFF0C\u5728\u201CServer Hello\u201D\u91CC\u4E5F\u5E26\u4E0A\u201CALPN\u201D\u6269\u5C55\uFF0C\u544A\u8BC9\u5BA2\u6237\u7AEF\u670D\u52A1\u5668\u51B3\u5B9A\u4F7F\u7528\u7684\u662F\u54EA\u4E00\u79CD\u3002\u56E0\u4E3A\u6211\u4EEC\u5728 Nginx \u914D\u7F6E\u91CC\u4F7F\u7528\u4E86 HTTP/2 \u534F\u8BAE\uFF0C\u6240\u4EE5\u5728\u8FD9\u91CC\u5B83\u9009\u62E9\u7684\u5C31\u662F\u201Ch2\u201D\u3002</p><p${_scopeId}><img src="https://static001.geekbang.org/resource/image/19/a7/19be1138574589458c96040e1a23b3a7.png" alt=""${_scopeId}></p><p${_scopeId}>\u8FD9\u6837\u5728 TLS \u63E1\u624B\u7ED3\u675F\u540E\uFF0C\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u5C31\u901A\u8FC7\u201CALPN\u201D\u5B8C\u6210\u4E86\u5E94\u7528\u5C42\u7684\u534F\u8BAE\u534F\u5546\uFF0C\u540E\u9762\u5C31\u53EF\u4EE5\u4F7F\u7528 HTTP/2 \u901A\u4FE1\u4E86\u3002</p></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode("h2", {
                  id: "\u5F52\u7EB3",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u5F52\u7EB3",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u5F52\u7EB3")
                ]),
                vue.createVNode("ol", null, [
                  vue.createVNode("li", null, "HTTP/2 \u5B8C\u5168\u517C\u5BB9 HTTP/1\uFF0C\u662F\u201C\u66F4\u5B89\u5168\u7684 HTTP\u3001\u66F4\u5FEB\u7684 HTTPS\u201D\uFF0C\u5934\u90E8\u538B\u7F29\u3001\u591A\u8DEF\u590D\u7528\u7B49\u6280\u672F\u53EF\u4EE5\u5145\u5206\u5229\u7528\u5E26\u5BBD\uFF0C\u964D\u4F4E\u5EF6\u8FDF\uFF0C\u4ECE\u800C\u5927\u5E45\u5EA6\u63D0\u9AD8\u4E0A\u7F51\u4F53\u9A8C\uFF1B"),
                  vue.createVNode("li", null, "TCP \u534F\u8BAE\u5B58\u5728\u201C\u961F\u5934\u963B\u585E\u201D\uFF0C\u6240\u4EE5 HTTP/2 \u5728\u5F31\u7F51\u6216\u8005\u79FB\u52A8\u7F51\u7EDC\u4E0B\u7684\u6027\u80FD\u8868\u73B0\u4F1A\u4E0D\u5982 HTTP/1\uFF1B"),
                  vue.createVNode("li", null, "\u8FC1\u79FB\u5230 HTTP/2 \u80AF\u5B9A\u4F1A\u6709\u6027\u80FD\u63D0\u5347\uFF0C\u4F46\u9AD8\u6D41\u91CF\u7F51\u7AD9\u6548\u679C\u4F1A\u66F4\u663E\u8457\uFF1B"),
                  vue.createVNode("li", null, "\u5982\u679C\u5DF2\u7ECF\u5347\u7EA7\u5230\u4E86 HTTPS\uFF0C\u90A3\u4E48\u518D\u5347\u7EA7\u5230 HTTP/2 \u4F1A\u5F88\u7B80\u5355\uFF1B"),
                  vue.createVNode("li", null, "TLS \u534F\u8BAE\u63D0\u4F9B\u201CALPN\u201D\u6269\u5C55\uFF0C\u8BA9\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u534F\u5546\u4F7F\u7528\u7684\u5E94\u7528\u5C42\u534F\u8BAE\uFF0C\u201C\u53D1\u73B0\u201DHTTP/2 \u670D\u52A1\u3002")
                ]),
                vue.createVNode("h2", {
                  id: "http2\u7684\u4F18\u70B9",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#http2\u7684\u4F18\u70B9",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" HTTP2\u7684\u4F18\u70B9")
                ]),
                vue.createVNode("ol", null, [
                  vue.createVNode("li", null, "http2\u5B8C\u5168\u517C\u5BB9http1\uFF0C\u7EE7\u627F\u4E861\u7684\u4F18\u70B9\uFF0C\u89C4\u907F\u4E86\u4E00\u4E9B1\u7684\u7F3A\u70B9\uFF0C\u53EF\u4EE5\u8BA4\u4E3A\u662F\u201C\u66F4\u5B89\u5168\u7684 HTTP\u3001\u66F4\u5FEB\u7684 HTTPS\u201D\u3002"),
                  vue.createVNode("li", null, "\u4F60\u5E94\u8BE5\u77E5\u9053\uFF0C\u5F71\u54CD\u7F51\u7EDC\u901F\u5EA6\u7684\u4E24\u4E2A\u5173\u952E\u56E0\u7D20\u662F\u201C\u5E26\u5BBD\u201D\u548C\u201C\u5EF6\u8FDF\u201D\uFF0CHTTP/2 \u7684\u5934\u90E8\u538B\u7F29\u3001\u591A\u8DEF\u590D\u7528\u3001\u6D41\u4F18\u5148\u7EA7\u3001\u670D\u52A1\u5668\u63A8\u9001\u7B49\u624B\u6BB5\u5176\u5B9E\u90FD\u662F\u9488\u5BF9\u8FD9\u4E24\u4E2A\u8981\u70B9\u3002"),
                  vue.createVNode("li", null, "\u8282\u7EA6\u5E26\u5BBD\u7684\u57FA\u672C\u624B\u6BB5\u5C31\u662F\u538B\u7F29\uFF0C\u5728 HTTP/1 \u91CC\u53EA\u80FD\u538B\u7F29 body\uFF0C\u800C HTTP/2 \u5219\u53EF\u4EE5\u7528 HPACK \u7B97\u6CD5\u538B\u7F29 header\uFF0C\u8FD9\u5BF9\u9AD8\u6D41\u91CF\u7684\u7F51\u7AD9\u975E\u5E38\u6709\u4EF7\u503C\uFF0C\u6709\u6570\u636E\u8868\u660E\u80FD\u8282\u7701\u5927\u6982 5%~10% \u7684\u6D41\u91CF\uFF0C\u8FD9\u662F\u5B9E\u5B9E\u5728\u5728\u7684\u201C\u771F\u91D1\u767D\u94F6\u201D\u3002"),
                  vue.createVNode("li", null, "\u4E0E HTTP/1\u201C\u5E76\u53D1\u591A\u4E2A\u8FDE\u63A5\u201D\u4E0D\u540C\uFF0CHTTP/2 \u7684\u201C\u591A\u8DEF\u590D\u7528\u201D\u7279\u6027\u8981\u6C42\u5BF9\u4E00\u4E2A\u57DF\u540D\uFF08\u6216\u8005 IP\uFF09\u53EA\u7528\u4E00\u4E2A TCP \u8FDE\u63A5\uFF0C\u6240\u6709\u7684\u6570\u636E\u90FD\u5728\u8FD9\u4E00\u4E2A\u8FDE\u63A5\u4E0A\u4F20\u8F93\uFF0C\u8FD9\u6837\u4E0D\u4EC5\u8282\u7EA6\u4E86\u5BA2\u6237\u7AEF\u3001\u670D\u52A1\u5668\u548C\u7F51\u7EDC\u7684\u8D44\u6E90\uFF0C\u8FD8\u53EF\u4EE5\u628A\u5E26\u5BBD\u8DD1\u6EE1\uFF0C\u8BA9 TCP \u5145\u5206\u201C\u5403\u9971\u201D\u3002"),
                  vue.createVNode("li", null, "HTTP2\u53EA\u4F7F\u7528\u4E00\u4E2A\u94FE\u63A5")
                ]),
                vue.createVNode("h2", {
                  id: "http2\u7684\u7F3A\u70B9",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#http2\u7684\u7F3A\u70B9",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" HTTP2\u7684\u7F3A\u70B9")
                ]),
                vue.createVNode("ol", null, [
                  vue.createVNode("li", null, "\u8DDF3\u6BD4\u8D77\u6765tcp\u4F1A\u6709\u963B\u585E\u7684\u60C5\u51B5"),
                  vue.createVNode("li", null, "\u5728\u5207\u6362\u79FB\u52A8\u7F51\u7EDC\u662F\u9700\u8981\u4ECE\u65B0\u94FE\u63A5")
                ]),
                vue.createVNode("h2", {
                  id: "\u5E94\u7528\u5C42\u534F\u8BAE\u534F\u5546\uFF08alpn\uFF09",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u5E94\u7528\u5C42\u534F\u8BAE\u534F\u5546\uFF08alpn\uFF09",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u5E94\u7528\u5C42\u534F\u8BAE\u534F\u5546\uFF08ALPN\uFF09")
                ]),
                vue.createVNode("p", null, "\u4F60\u6709\u6CA1\u6709\u60F3\u8FC7\uFF0C\u5728 URI \u91CC\u7528\u7684\u90FD\u662F HTTPS \u534F\u8BAE\u540D\uFF0C\u6CA1\u6709\u7248\u672C\u6807\u8BB0\uFF0C\u6D4F\u89C8\u5668\u600E\u4E48\u77E5\u9053\u670D\u52A1\u5668\u652F\u6301 HTTP/2 \u5462\uFF1F\u4E3A\u4EC0\u4E48\u4E0A\u6765\u5C31\u80FD\u7528 HTTP/2\uFF0C\u800C\u4E0D\u662F\u7528 HTTP/1 \u901A\u4FE1\u5462\uFF1F"),
                vue.createVNode("p", null, "\u7B54\u6848\u5728 TLS \u7684\u6269\u5C55\u91CC\uFF0C\u6709\u4E00\u4E2A\u53EB\u201CALPN\u201D\uFF08Application Layer Protocol Negotiation\uFF09\u7684\u4E1C\u897F\uFF0C\u7528\u6765\u4E0E\u670D\u52A1\u5668\u5C31 TLS \u4E0A\u8DD1\u7684\u5E94\u7528\u534F\u8BAE\u8FDB\u884C\u201C\u534F\u5546\u201D\u3002"),
                vue.createVNode("p", null, "\u5BA2\u6237\u7AEF\u5728\u53D1\u8D77\u201CClient Hello\u201D\u63E1\u624B\u7684\u65F6\u5019\uFF0C\u540E\u9762\u4F1A\u5E26\u4E0A\u4E00\u4E2A\u201CALPN\u201D\u6269\u5C55\uFF0C\u91CC\u9762\u6309\u7167\u4F18\u5148\u987A\u5E8F\u5217\u51FA\u5BA2\u6237\u7AEF\u652F\u6301\u7684\u5E94\u7528\u534F\u8BAE\u3002"),
                vue.createVNode("p", null, [
                  vue.createVNode("img", {
                    src: "https://static001.geekbang.org/resource/image/d8/b0/d8f8606948bbd63c31466e464c1956b0.png",
                    alt: ""
                  })
                ]),
                vue.createVNode("p", null, "\u670D\u52A1\u5668\u770B\u5230 ALPN \u6269\u5C55\u4EE5\u540E\u5C31\u53EF\u4EE5\u4ECE\u5217\u8868\u91CC\u9009\u62E9\u4E00\u79CD\u5E94\u7528\u534F\u8BAE\uFF0C\u5728\u201CServer Hello\u201D\u91CC\u4E5F\u5E26\u4E0A\u201CALPN\u201D\u6269\u5C55\uFF0C\u544A\u8BC9\u5BA2\u6237\u7AEF\u670D\u52A1\u5668\u51B3\u5B9A\u4F7F\u7528\u7684\u662F\u54EA\u4E00\u79CD\u3002\u56E0\u4E3A\u6211\u4EEC\u5728 Nginx \u914D\u7F6E\u91CC\u4F7F\u7528\u4E86 HTTP/2 \u534F\u8BAE\uFF0C\u6240\u4EE5\u5728\u8FD9\u91CC\u5B83\u9009\u62E9\u7684\u5C31\u662F\u201Ch2\u201D\u3002"),
                vue.createVNode("p", null, [
                  vue.createVNode("img", {
                    src: "https://static001.geekbang.org/resource/image/19/a7/19be1138574589458c96040e1a23b3a7.png",
                    alt: ""
                  })
                ]),
                vue.createVNode("p", null, "\u8FD9\u6837\u5728 TLS \u63E1\u624B\u7ED3\u675F\u540E\uFF0C\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u5C31\u901A\u8FC7\u201CALPN\u201D\u5B8C\u6210\u4E86\u5E94\u7528\u5C42\u7684\u534F\u8BAE\u534F\u5546\uFF0C\u540E\u9762\u5C31\u53EF\u4EE5\u4F7F\u7528 HTTP/2 \u901A\u4FE1\u4E86\u3002")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/childPages/http/http2deqianyi.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports["default"] = _sfc_main;
