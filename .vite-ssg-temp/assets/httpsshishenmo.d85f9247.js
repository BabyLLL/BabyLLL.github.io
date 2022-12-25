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
    const frontmatter = { "title": "23 | HTTPS\u662F\u4EC0\u4E48\uFF1FSSL/TLS\u53C8\u662F\u4EC0\u4E48\uFF1F", "date": "2021-11-02T16:00:00.000Z", "duration": "10min", "meta": [{ "property": "og:title", "content": "23 | HTTPS\u662F\u4EC0\u4E48\uFF1FSSL/TLS\u53C8\u662F\u4EC0\u4E48\uFF1F" }] };
    expose({ frontmatter });
    const head$1 = { "title": "23 | HTTPS\u662F\u4EC0\u4E48\uFF1FSSL/TLS\u53C8\u662F\u4EC0\u4E48\uFF1F", "meta": [{ "property": "og:title", "content": "23 | HTTPS\u662F\u4EC0\u4E48\uFF1FSSL/TLS\u53C8\u662F\u4EC0\u4E48\uFF1F" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Blog = Blog._sfc_main;
      _push(serverRenderer.ssrRenderComponent(_component_Blog, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><h2 id="\u5F52\u7EB3" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u5F52\u7EB3" aria-hidden="true"${_scopeId}>#</a> \u5F52\u7EB3</h2><ol${_scopeId}><li${_scopeId}>\u56E0\u4E3A HTTP \u662F\u660E\u6587\u4F20\u8F93\uFF0C\u6240\u4EE5\u4E0D\u5B89\u5168\uFF0C\u5BB9\u6613\u88AB\u9ED1\u5BA2\u7A83\u542C\u6216\u7BE1\u6539\uFF1B</li><li${_scopeId}>\u901A\u4FE1\u5B89\u5168\u5FC5\u987B\u540C\u65F6\u5177\u5907\u673A\u5BC6\u6027\u3001\u5B8C\u6574\u6027\u3001\u8EAB\u4EFD\u8BA4\u8BC1\u548C\u4E0D\u53EF\u5426\u8BA4\u8FD9\u56DB\u4E2A\u7279\u6027\uFF1B</li><li${_scopeId}>HTTPS \u7684\u8BED\u6CD5\u3001\u8BED\u4E49\u4ECD\u7136\u662F HTTP\uFF0C\u4F46\u628A\u4E0B\u5C42\u7684\u534F\u8BAE\u7531 TCP/IP \u6362\u6210\u4E86 SSL/TLS\uFF1B</li><li${_scopeId}>SSL/TLS \u662F\u4FE1\u606F\u5B89\u5168\u9886\u57DF\u4E2D\u7684\u6743\u5A01\u6807\u51C6\uFF0C\u91C7\u7528\u591A\u79CD\u5148\u8FDB\u7684\u52A0\u5BC6\u6280\u672F\u4FDD\u8BC1\u901A\u4FE1\u5B89\u5168\uFF1BOpenSSL \u662F\u8457\u540D\u7684\u5F00\u6E90\u5BC6\u7801\u5B66\u5DE5\u5177\u5305\uFF0C\u662F SSL/TLS \u7684\u5177\u4F53\u5B9E\u73B0\u3002</li></ol><h2 id="\u4E3A\u4EC0\u4E48\u8981\u6709https" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u8981\u6709https" aria-hidden="true"${_scopeId}>#</a> \u4E3A\u4EC0\u4E48\u8981\u6709https</h2><ol${_scopeId}><li${_scopeId}>http\u5929\u751F\u660E\u6587\u4F20\u8F93\uFF0C\u5BB9\u6613\u88AB\u7BE1\u6539\uFF0C\u4E0D\u5B89\u5168</li></ol><h2 id="\u4EC0\u4E48\u662F\u5B89\u5168\u7684" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u5B89\u5168\u7684" aria-hidden="true"${_scopeId}>#</a> \u4EC0\u4E48\u662F\u5B89\u5168\u7684</h2><p${_scopeId}>\u901A\u5E38\u8BA4\u4E3A\uFF0C\u5982\u679C\u901A\u4FE1\u8FC7\u7A0B\u5177\u5907\u4E86\u56DB\u4E2A\u7279\u6027\uFF0C\u5C31\u53EF\u4EE5\u8BA4\u4E3A\u662F\u201C\u5B89\u5168\u201D\u7684\uFF0C\u8FD9\u56DB\u4E2A\u7279\u6027\u662F\uFF1A\u673A\u5BC6\u6027\u3001\u5B8C\u6574\u6027\uFF0C\u8EAB\u4EFD\u8BA4\u8BC1\u548C\u4E0D\u53EF\u5426\u8BA4\u3002</p><ol${_scopeId}><li${_scopeId}>\u673A\u5BC6\u6027\uFF1A\u53EA\u80FD\u5BF9\u53EF\u4FE1\u7684\u4EBA\u53EF\u89C1\uFF0C\u5BF9\u522B\u4EBA\u662F\u4E0D\u53EF\u89C1\u7684</li><li${_scopeId}>\u5B8C\u6574\u6027\uFF1A\u5728\u4F20\u8F93\u8FC7\u7A0B\u4E2D\uFF0C\u4FDD\u8BC1\u6CA1\u6709\u88AB\u7BE1\u6539\u8FC7</li><li${_scopeId}>\u8EAB\u4EFD\u8BA4\u8BC1\uFF1A\u8BC1\u660E\u4F60\u771F\u7684\u662F\u4F60</li><li${_scopeId}>\u4E0D\u53EF\u5426\u8BA4\uFF1A\u4E0D\u80FD\u5426\u8BA4\u5DF2\u7ECF\u53D1\u751F\u8FC7\u7684\u4E8B\u60C5</li></ol><h2 id="\u4EC0\u4E48\u662Fhttps" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u4EC0\u4E48\u662Fhttps" aria-hidden="true"${_scopeId}>#</a> \u4EC0\u4E48\u662Fhttps</h2><ol${_scopeId}><li${_scopeId}>\u65B0\u7684\u534F\u8BAE\uFF1Ahttps</li><li${_scopeId}>\u65B0\u7684\u7AEF\u53E3\u53F7\uFF1A443</li><li${_scopeId}>https = http + SSL/TLS</li></ol><h2 id="ssl-tls" tabindex="-1"${_scopeId}><a class="header-anchor" href="#ssl-tls" aria-hidden="true"${_scopeId}>#</a> SSL/TLS</h2><p${_scopeId}>SSL \u5373\u5B89\u5168\u5957\u63A5\u5C42\uFF08Secure Sockets Layer\uFF09\uFF0C\u5728 OSI \u6A21\u578B\u4E2D\u5904\u4E8E\u7B2C 5 \u5C42\uFF08\u4F1A\u8BDD\u5C42\uFF09\uFF0C\u7531\u7F51\u666F\u516C\u53F8\u4E8E 1994 \u5E74\u53D1\u660E\uFF0C\u6709 v2 \u548C v3 \u4E24\u4E2A\u7248\u672C\uFF0C\u800C v1 \u56E0\u4E3A\u6709\u4E25\u91CD\u7684\u7F3A\u9677\u4ECE\u672A\u516C\u5F00\u8FC7\u3002</p><p${_scopeId}>TLS \u7531\u8BB0\u5F55\u534F\u8BAE\u3001\u63E1\u624B\u534F\u8BAE\u3001\u8B66\u544A\u534F\u8BAE\u3001\u53D8\u66F4\u5BC6\u7801\u89C4\u8303\u534F\u8BAE\u3001\u6269\u5C55\u534F\u8BAE\u7B49\u51E0\u4E2A\u5B50\u534F\u8BAE\u7EC4\u6210\uFF0C\u7EFC\u5408\u4F7F\u7528\u4E86\u5BF9\u79F0\u52A0\u5BC6\u3001\u975E\u5BF9\u79F0\u52A0\u5BC6\u3001\u8EAB\u4EFD\u8BA4\u8BC1\u7B49\u8BB8\u591A\u5BC6\u7801\u5B66\u524D\u6CBF\u6280\u672F</p><p${_scopeId}>\u6D4F\u89C8\u5668\u548C\u670D\u52A1\u5668\u5728\u4F7F\u7528 TLS \u5EFA\u7ACB\u8FDE\u63A5\u65F6\u9700\u8981\u9009\u62E9\u4E00\u7EC4\u6070\u5F53\u7684\u52A0\u5BC6\u7B97\u6CD5\u6765\u5B9E\u73B0\u5B89\u5168\u901A\u4FE1\uFF0C\u8FD9\u4E9B\u7B97\u6CD5\u7684\u7EC4\u5408\u88AB\u79F0\u4E3A\u201C\u5BC6\u7801\u5957\u4EF6\u201D\uFF08cipher suite\uFF0C\u4E5F\u53EB\u52A0\u5BC6\u5957\u4EF6\uFF09\u3002</p><h4 id="tls\u4F7F\u7528\u7684\u5BC6\u7801\u5957\u4EF6" tabindex="-1"${_scopeId}><a class="header-anchor" href="#tls\u4F7F\u7528\u7684\u5BC6\u7801\u5957\u4EF6" aria-hidden="true"${_scopeId}>#</a> TLS\u4F7F\u7528\u7684\u5BC6\u7801\u5957\u4EF6</h4><p${_scopeId}>\u5176\u5B9E TLS \u7684\u5BC6\u7801\u5957\u4EF6\u547D\u540D\u975E\u5E38\u89C4\u8303\uFF0C\u683C\u5F0F\u5F88\u56FA\u5B9A\u3002\u57FA\u672C\u7684\u5F62\u5F0F\u662F\u201C\u5BC6\u94A5\u4EA4\u6362\u7B97\u6CD5 + \u7B7E\u540D\u7B97\u6CD5 + \u5BF9\u79F0\u52A0\u5BC6\u7B97\u6CD5 + \u6458\u8981\u7B97\u6CD5\u201D</p><blockquote${_scopeId}><p${_scopeId}>ECDHE-RSA-AES256-GCM-SHA384</p></blockquote><p${_scopeId}>\u63E1\u624B\u65F6\u4F7F\u7528 ECDHE \u7B97\u6CD5\u8FDB\u884C\u5BC6\u94A5\u4EA4\u6362\uFF0C\u7528 RSA \u7B7E\u540D\u548C\u8EAB\u4EFD\u8BA4\u8BC1\uFF0C\u63E1\u624B\u540E\u7684\u901A\u4FE1\u4F7F\u7528 AES \u5BF9\u79F0\u7B97\u6CD5\uFF0C\u5BC6\u94A5\u957F\u5EA6 256 \u4F4D\uFF0C\u5206\u7EC4\u6A21\u5F0F\u662F GCM\uFF0C\u6458\u8981\u7B97\u6CD5 SHA384 \u7528\u4E8E\u6D88\u606F\u8BA4\u8BC1\u548C\u4EA7\u751F\u968F\u673A\u6570\u3002\u201D</p></div>`);
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
                  vue.createVNode("li", null, "\u56E0\u4E3A HTTP \u662F\u660E\u6587\u4F20\u8F93\uFF0C\u6240\u4EE5\u4E0D\u5B89\u5168\uFF0C\u5BB9\u6613\u88AB\u9ED1\u5BA2\u7A83\u542C\u6216\u7BE1\u6539\uFF1B"),
                  vue.createVNode("li", null, "\u901A\u4FE1\u5B89\u5168\u5FC5\u987B\u540C\u65F6\u5177\u5907\u673A\u5BC6\u6027\u3001\u5B8C\u6574\u6027\u3001\u8EAB\u4EFD\u8BA4\u8BC1\u548C\u4E0D\u53EF\u5426\u8BA4\u8FD9\u56DB\u4E2A\u7279\u6027\uFF1B"),
                  vue.createVNode("li", null, "HTTPS \u7684\u8BED\u6CD5\u3001\u8BED\u4E49\u4ECD\u7136\u662F HTTP\uFF0C\u4F46\u628A\u4E0B\u5C42\u7684\u534F\u8BAE\u7531 TCP/IP \u6362\u6210\u4E86 SSL/TLS\uFF1B"),
                  vue.createVNode("li", null, "SSL/TLS \u662F\u4FE1\u606F\u5B89\u5168\u9886\u57DF\u4E2D\u7684\u6743\u5A01\u6807\u51C6\uFF0C\u91C7\u7528\u591A\u79CD\u5148\u8FDB\u7684\u52A0\u5BC6\u6280\u672F\u4FDD\u8BC1\u901A\u4FE1\u5B89\u5168\uFF1BOpenSSL \u662F\u8457\u540D\u7684\u5F00\u6E90\u5BC6\u7801\u5B66\u5DE5\u5177\u5305\uFF0C\u662F SSL/TLS \u7684\u5177\u4F53\u5B9E\u73B0\u3002")
                ]),
                vue.createVNode("h2", {
                  id: "\u4E3A\u4EC0\u4E48\u8981\u6709https",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u4E3A\u4EC0\u4E48\u8981\u6709https",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u4E3A\u4EC0\u4E48\u8981\u6709https")
                ]),
                vue.createVNode("ol", null, [
                  vue.createVNode("li", null, "http\u5929\u751F\u660E\u6587\u4F20\u8F93\uFF0C\u5BB9\u6613\u88AB\u7BE1\u6539\uFF0C\u4E0D\u5B89\u5168")
                ]),
                vue.createVNode("h2", {
                  id: "\u4EC0\u4E48\u662F\u5B89\u5168\u7684",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u4EC0\u4E48\u662F\u5B89\u5168\u7684",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u4EC0\u4E48\u662F\u5B89\u5168\u7684")
                ]),
                vue.createVNode("p", null, "\u901A\u5E38\u8BA4\u4E3A\uFF0C\u5982\u679C\u901A\u4FE1\u8FC7\u7A0B\u5177\u5907\u4E86\u56DB\u4E2A\u7279\u6027\uFF0C\u5C31\u53EF\u4EE5\u8BA4\u4E3A\u662F\u201C\u5B89\u5168\u201D\u7684\uFF0C\u8FD9\u56DB\u4E2A\u7279\u6027\u662F\uFF1A\u673A\u5BC6\u6027\u3001\u5B8C\u6574\u6027\uFF0C\u8EAB\u4EFD\u8BA4\u8BC1\u548C\u4E0D\u53EF\u5426\u8BA4\u3002"),
                vue.createVNode("ol", null, [
                  vue.createVNode("li", null, "\u673A\u5BC6\u6027\uFF1A\u53EA\u80FD\u5BF9\u53EF\u4FE1\u7684\u4EBA\u53EF\u89C1\uFF0C\u5BF9\u522B\u4EBA\u662F\u4E0D\u53EF\u89C1\u7684"),
                  vue.createVNode("li", null, "\u5B8C\u6574\u6027\uFF1A\u5728\u4F20\u8F93\u8FC7\u7A0B\u4E2D\uFF0C\u4FDD\u8BC1\u6CA1\u6709\u88AB\u7BE1\u6539\u8FC7"),
                  vue.createVNode("li", null, "\u8EAB\u4EFD\u8BA4\u8BC1\uFF1A\u8BC1\u660E\u4F60\u771F\u7684\u662F\u4F60"),
                  vue.createVNode("li", null, "\u4E0D\u53EF\u5426\u8BA4\uFF1A\u4E0D\u80FD\u5426\u8BA4\u5DF2\u7ECF\u53D1\u751F\u8FC7\u7684\u4E8B\u60C5")
                ]),
                vue.createVNode("h2", {
                  id: "\u4EC0\u4E48\u662Fhttps",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u4EC0\u4E48\u662Fhttps",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u4EC0\u4E48\u662Fhttps")
                ]),
                vue.createVNode("ol", null, [
                  vue.createVNode("li", null, "\u65B0\u7684\u534F\u8BAE\uFF1Ahttps"),
                  vue.createVNode("li", null, "\u65B0\u7684\u7AEF\u53E3\u53F7\uFF1A443"),
                  vue.createVNode("li", null, "https = http + SSL/TLS")
                ]),
                vue.createVNode("h2", {
                  id: "ssl-tls",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#ssl-tls",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" SSL/TLS")
                ]),
                vue.createVNode("p", null, "SSL \u5373\u5B89\u5168\u5957\u63A5\u5C42\uFF08Secure Sockets Layer\uFF09\uFF0C\u5728 OSI \u6A21\u578B\u4E2D\u5904\u4E8E\u7B2C 5 \u5C42\uFF08\u4F1A\u8BDD\u5C42\uFF09\uFF0C\u7531\u7F51\u666F\u516C\u53F8\u4E8E 1994 \u5E74\u53D1\u660E\uFF0C\u6709 v2 \u548C v3 \u4E24\u4E2A\u7248\u672C\uFF0C\u800C v1 \u56E0\u4E3A\u6709\u4E25\u91CD\u7684\u7F3A\u9677\u4ECE\u672A\u516C\u5F00\u8FC7\u3002"),
                vue.createVNode("p", null, "TLS \u7531\u8BB0\u5F55\u534F\u8BAE\u3001\u63E1\u624B\u534F\u8BAE\u3001\u8B66\u544A\u534F\u8BAE\u3001\u53D8\u66F4\u5BC6\u7801\u89C4\u8303\u534F\u8BAE\u3001\u6269\u5C55\u534F\u8BAE\u7B49\u51E0\u4E2A\u5B50\u534F\u8BAE\u7EC4\u6210\uFF0C\u7EFC\u5408\u4F7F\u7528\u4E86\u5BF9\u79F0\u52A0\u5BC6\u3001\u975E\u5BF9\u79F0\u52A0\u5BC6\u3001\u8EAB\u4EFD\u8BA4\u8BC1\u7B49\u8BB8\u591A\u5BC6\u7801\u5B66\u524D\u6CBF\u6280\u672F"),
                vue.createVNode("p", null, "\u6D4F\u89C8\u5668\u548C\u670D\u52A1\u5668\u5728\u4F7F\u7528 TLS \u5EFA\u7ACB\u8FDE\u63A5\u65F6\u9700\u8981\u9009\u62E9\u4E00\u7EC4\u6070\u5F53\u7684\u52A0\u5BC6\u7B97\u6CD5\u6765\u5B9E\u73B0\u5B89\u5168\u901A\u4FE1\uFF0C\u8FD9\u4E9B\u7B97\u6CD5\u7684\u7EC4\u5408\u88AB\u79F0\u4E3A\u201C\u5BC6\u7801\u5957\u4EF6\u201D\uFF08cipher suite\uFF0C\u4E5F\u53EB\u52A0\u5BC6\u5957\u4EF6\uFF09\u3002"),
                vue.createVNode("h4", {
                  id: "tls\u4F7F\u7528\u7684\u5BC6\u7801\u5957\u4EF6",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#tls\u4F7F\u7528\u7684\u5BC6\u7801\u5957\u4EF6",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" TLS\u4F7F\u7528\u7684\u5BC6\u7801\u5957\u4EF6")
                ]),
                vue.createVNode("p", null, "\u5176\u5B9E TLS \u7684\u5BC6\u7801\u5957\u4EF6\u547D\u540D\u975E\u5E38\u89C4\u8303\uFF0C\u683C\u5F0F\u5F88\u56FA\u5B9A\u3002\u57FA\u672C\u7684\u5F62\u5F0F\u662F\u201C\u5BC6\u94A5\u4EA4\u6362\u7B97\u6CD5 + \u7B7E\u540D\u7B97\u6CD5 + \u5BF9\u79F0\u52A0\u5BC6\u7B97\u6CD5 + \u6458\u8981\u7B97\u6CD5\u201D"),
                vue.createVNode("blockquote", null, [
                  vue.createVNode("p", null, "ECDHE-RSA-AES256-GCM-SHA384")
                ]),
                vue.createVNode("p", null, "\u63E1\u624B\u65F6\u4F7F\u7528 ECDHE \u7B97\u6CD5\u8FDB\u884C\u5BC6\u94A5\u4EA4\u6362\uFF0C\u7528 RSA \u7B7E\u540D\u548C\u8EAB\u4EFD\u8BA4\u8BC1\uFF0C\u63E1\u624B\u540E\u7684\u901A\u4FE1\u4F7F\u7528 AES \u5BF9\u79F0\u7B97\u6CD5\uFF0C\u5BC6\u94A5\u957F\u5EA6 256 \u4F4D\uFF0C\u5206\u7EC4\u6A21\u5F0F\u662F GCM\uFF0C\u6458\u8981\u7B97\u6CD5 SHA384 \u7528\u4E8E\u6D88\u606F\u8BA4\u8BC1\u548C\u4EA7\u751F\u968F\u673A\u6570\u3002\u201D")
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
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/childPages/http/httpsshishenmo.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports["default"] = _sfc_main;
