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
    const frontmatter = { "title": "27 | \u66F4\u597D\u66F4\u5FEB\u7684\u63E1\u624B\uFF1ATLS1.3\u7279\u6027\u89E3\u6790", "date": "2021-11-07T16:00:00.000Z", "duration": "10min", "meta": [{ "property": "og:title", "content": "27 | \u66F4\u597D\u66F4\u5FEB\u7684\u63E1\u624B\uFF1ATLS1.3\u7279\u6027\u89E3\u6790" }] };
    expose({ frontmatter });
    const head$1 = { "title": "27 | \u66F4\u597D\u66F4\u5FEB\u7684\u63E1\u624B\uFF1ATLS1.3\u7279\u6027\u89E3\u6790", "meta": [{ "property": "og:title", "content": "27 | \u66F4\u597D\u66F4\u5FEB\u7684\u63E1\u624B\uFF1ATLS1.3\u7279\u6027\u89E3\u6790" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Blog = Blog._sfc_main;
      _push(serverRenderer.ssrRenderComponent(_component_Blog, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><h2 id="\u5F52\u7EB3" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u5F52\u7EB3" aria-hidden="true"${_scopeId}>#</a> \u5F52\u7EB3</h2><ol${_scopeId}><li${_scopeId}>\u4E3A\u4E86\u517C\u5BB9 1.1\u30011.2 \u7B49\u201C\u8001\u201D\u534F\u8BAE\uFF0CTLS1.3 \u4F1A\u201C\u4F2A\u88C5\u201D\u6210 TLS1.2\uFF0C\u65B0\u7279\u6027\u5728\u201C\u6269\u5C55\u201D\u91CC\u5B9E\u73B0\uFF1B</li><li${_scopeId}>1.1\u30011.2 \u5728\u5B9E\u8DF5\u4E2D\u53D1\u73B0\u4E86\u5F88\u591A\u5B89\u5168\u9690\u60A3\uFF0C\u6240\u4EE5 TLS1.3 \u5927\u5E45\u5EA6\u5220\u51CF\u4E86\u52A0\u5BC6\u7B97\u6CD5\uFF0C\u53EA\u4FDD\u7559\u4E86 ECDHE\u3001AES\u3001ChaCha20\u3001SHA-2 \u7B49\u6781\u5C11\u6570\u7B97\u6CD5\uFF0C\u5F3A\u5316\u4E86\u5B89\u5168\uFF1B</li><li${_scopeId}>TLS1.3 \u4E5F\u7B80\u5316\u4E86\u63E1\u624B\u8FC7\u7A0B\uFF0C\u5B8C\u5168\u63E1\u624B\u53EA\u9700\u8981\u4E00\u4E2A\u6D88\u606F\u5F80\u8FD4\uFF0C\u63D0\u5347\u4E86\u6027\u80FD\u3002</li></ol><h2 id="tls1-3" tabindex="-1"${_scopeId}><a class="header-anchor" href="#tls1-3" aria-hidden="true"${_scopeId}>#</a> TLS1.3</h2><blockquote${_scopeId}><p${_scopeId}>\u6211\u4EEC\u5148\u6765\u5FEB\u901F\u6D4F\u89C8\u4E00\u4E0B TLS1.3 \u7684\u4E09\u4E2A\u4E3B\u8981\u6539\u8FDB\u76EE\u6807\uFF1A\u517C\u5BB9\u3001\u5B89\u5168\u4E0E\u6027\u80FD\u3002</p></blockquote><h2 id="\u6700\u5927\u5316\u517C\u5BB9" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u6700\u5927\u5316\u517C\u5BB9" aria-hidden="true"${_scopeId}>#</a> \u6700\u5927\u5316\u517C\u5BB9</h2><ol${_scopeId}><li${_scopeId}>\u5411\u540E\u517C\u5BB9\uFF0C\u6DFB\u52A0\u6269\u5C55\u5B57\u6BB5 <ul${_scopeId}><li${_scopeId}>supported_versions\uFF1A\u5B83\u6807\u8BB0\u4E86 TLS \u7684\u7248\u672C\u53F7\uFF0C\u4F7F\u7528\u5B83\u5C31\u80FD\u533A\u5206\u65B0\u65E7\u534F\u8BAE\u3002</li><li${_scopeId}>supported_groups</li><li${_scopeId}>key_share</li><li${_scopeId}>signature_algorithms</li><li${_scopeId}>server_name</li></ul></li></ol><h2 id="\u5F3A\u5316\u5B89\u5168" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u5F3A\u5316\u5B89\u5168" aria-hidden="true"${_scopeId}>#</a> \u5F3A\u5316\u5B89\u5168</h2><p${_scopeId}>\u73B0\u5728\u4E3B\u6D41\u7684\u670D\u52A1\u5668\u548C\u6D4F\u89C8\u5668\u5728\u63E1\u624B\u9636\u6BB5\u90FD\u5DF2\u7ECF\u4E0D\u518D\u4F7F\u7528 RSA\uFF0C\u6539\u7528 ECDHE\uFF0C\u800C TLS1.3 \u5728\u534F\u8BAE\u91CC\u660E\u786E\u5E9F\u9664 RSA \u548C DH \u5219\u5728\u6807\u51C6\u5C42\u9762\u4FDD\u8BC1\u4E86\u201C\u524D\u5411\u5B89\u5168\u201D\u3002</p><h2 id="\u63D0\u5347\u6027\u80FD" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u63D0\u5347\u6027\u80FD" aria-hidden="true"${_scopeId}>#</a> \u63D0\u5347\u6027\u80FD</h2><p${_scopeId}>\u4ECE1.2\u7684\u4E24\u4E2ARTT\u53D8\u4E3A\u4E00\u4E2ARTT</p><p${_scopeId}>\u5176\u5B9E\u5177\u4F53\u7684\u505A\u6CD5\u8FD8\u662F\u5229\u7528\u4E86\u6269\u5C55\u3002\u5BA2\u6237\u7AEF\u5728\u201CClient Hello\u201D\u6D88\u606F\u91CC\u76F4\u63A5\u7528\u201Csupported_groups\u201D\u5E26\u4E0A\u652F\u6301\u7684\u66F2\u7EBF\uFF0C\u6BD4\u5982 P-256\u3001x25519\uFF0C\u7528\u201Ckey_share\u201D\u5E26\u4E0A\u66F2\u7EBF\u5BF9\u5E94\u7684\u5BA2\u6237\u7AEF\u516C\u94A5\u53C2\u6570\uFF0C\u7528\u201Csignature_algorithms\u201D\u5E26\u4E0A\u7B7E\u540D\u7B97\u6CD5</p><p${_scopeId}>\u670D\u52A1\u5668\u6536\u5230\u540E\u5728\u8FD9\u4E9B\u6269\u5C55\u91CC\u9009\u5B9A\u4E00\u4E2A\u66F2\u7EBF\u548C\u53C2\u6570\uFF0C\u518D\u7528\u201Ckey_share\u201D\u6269\u5C55\u8FD4\u56DE\u670D\u52A1\u5668\u8FD9\u8FB9\u7684\u516C\u94A5\u53C2\u6570\uFF0C\u5C31\u5B9E\u73B0\u4E86\u53CC\u65B9\u7684\u5BC6\u94A5\u4EA4\u6362\uFF0C\u540E\u9762\u7684\u6D41\u7A0B\u5C31\u548C 1.2 \u57FA\u672C\u4E00\u6837\u4E86</p><p${_scopeId}><img src="https://static001.geekbang.org/resource/image/4d/b0/4d1df4d07dbb1c2500fc4ea69ecf7ab0.png" alt=""${_scopeId}></p><h2 id="\u63E1\u624B\u5206\u6790" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u63E1\u624B\u5206\u6790" aria-hidden="true"${_scopeId}>#</a> \u63E1\u624B\u5206\u6790</h2><p${_scopeId}><img src="https://static001.geekbang.org/resource/image/7a/db/7a2bc39fdbb421cf72a01e887e9156db.png" alt=""${_scopeId}></p><h3 id="\u6D4F\u89C8\u5668" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u6D4F\u89C8\u5668" aria-hidden="true"${_scopeId}>#</a> \u6D4F\u89C8\u5668</h3><p${_scopeId}>\u56E0\u4E3A 1.3 \u7684\u6D88\u606F\u517C\u5BB9 1.2\uFF0C\u6240\u4EE5\u5F00\u5934\u7684\u7248\u672C\u53F7\u3001\u652F\u6301\u7684\u5BC6\u7801\u5957\u4EF6\u548C\u968F\u673A\u6570\uFF08Client Random\uFF09\u7ED3\u6784\u90FD\u662F\u4E00\u6837\u7684\uFF08\u4E0D\u8FC7\u8FD9\u65F6\u7684\u968F\u673A\u6570\u662F 32 \u4E2A\u5B57\u8282\uFF09</p><pre${_scopeId}><code${_scopeId}>
Handshake Protocol: Client Hello
    Version: TLS 1.2 (0x0303)
    Random: cebeb6c05403654d66c2329\u2026
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

</code></pre><p${_scopeId}>\u201Csupported_versions\u201D\u8868\u793A\u8FD9\u662F TLS1.3\uFF0C\u201Csupported_groups\u201D\u662F\u652F\u6301\u7684\u66F2\u7EBF\uFF0C\u201Ckey_share\u201D\u662F\u66F2\u7EBF\u5BF9\u5E94\u7684\u53C2\u6570\u3002</p><h3 id="\u670D\u52A1\u5668" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u670D\u52A1\u5668" aria-hidden="true"${_scopeId}>#</a> \u670D\u52A1\u5668</h3><p${_scopeId}>\u670D\u52A1\u5668\u6536\u5230\u201CClient Hello\u201D\u540C\u6837\u8FD4\u56DE\u201CServer Hello\u201D\u6D88\u606F\uFF0C\u8FD8\u662F\u8981\u7ED9\u51FA\u4E00\u4E2A\u968F\u673A\u6570\uFF08Server Random\uFF09\u548C\u9009\u5B9A\u5BC6\u7801\u5957\u4EF6\u3002</p><pre${_scopeId}><code${_scopeId}>
Handshake Protocol: Server Hello
    Version: TLS 1.2 (0x0303)
    Random: 12d2bce6568b063d3dee2\u2026
    Cipher Suite: TLS_AES_128_GCM_SHA256 (0x1301)
    Extension: supported_versions (len=2)
        Supported Version: TLS 1.3 (0x0304)
    Extension: key_share (len=36)
        Key Share extension
            Key Share Entry: Group: x25519, Key Exchange length: 32

</code></pre><p${_scopeId}>\u8868\u9762\u4E0A\u770B\u548C TLS1.2 \u662F\u4E00\u6837\u7684\uFF0C\u91CD\u70B9\u662F\u540E\u9762\u7684\u6269\u5C55\u3002\u201Csupported_versions\u201D\u91CC\u786E\u8BA4\u4F7F\u7528\u7684\u662F TLS1.3\uFF0C\u7136\u540E\u5728\u201Ckey_share\u201D\u6269\u5C55\u5E26\u4E0A\u66F2\u7EBF\u548C\u5BF9\u5E94\u7684\u516C\u94A5\u53C2\u6570\u3002</p></div>`);
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
                  vue.createVNode("li", null, "\u4E3A\u4E86\u517C\u5BB9 1.1\u30011.2 \u7B49\u201C\u8001\u201D\u534F\u8BAE\uFF0CTLS1.3 \u4F1A\u201C\u4F2A\u88C5\u201D\u6210 TLS1.2\uFF0C\u65B0\u7279\u6027\u5728\u201C\u6269\u5C55\u201D\u91CC\u5B9E\u73B0\uFF1B"),
                  vue.createVNode("li", null, "1.1\u30011.2 \u5728\u5B9E\u8DF5\u4E2D\u53D1\u73B0\u4E86\u5F88\u591A\u5B89\u5168\u9690\u60A3\uFF0C\u6240\u4EE5 TLS1.3 \u5927\u5E45\u5EA6\u5220\u51CF\u4E86\u52A0\u5BC6\u7B97\u6CD5\uFF0C\u53EA\u4FDD\u7559\u4E86 ECDHE\u3001AES\u3001ChaCha20\u3001SHA-2 \u7B49\u6781\u5C11\u6570\u7B97\u6CD5\uFF0C\u5F3A\u5316\u4E86\u5B89\u5168\uFF1B"),
                  vue.createVNode("li", null, "TLS1.3 \u4E5F\u7B80\u5316\u4E86\u63E1\u624B\u8FC7\u7A0B\uFF0C\u5B8C\u5168\u63E1\u624B\u53EA\u9700\u8981\u4E00\u4E2A\u6D88\u606F\u5F80\u8FD4\uFF0C\u63D0\u5347\u4E86\u6027\u80FD\u3002")
                ]),
                vue.createVNode("h2", {
                  id: "tls1-3",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#tls1-3",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" TLS1.3")
                ]),
                vue.createVNode("blockquote", null, [
                  vue.createVNode("p", null, "\u6211\u4EEC\u5148\u6765\u5FEB\u901F\u6D4F\u89C8\u4E00\u4E0B TLS1.3 \u7684\u4E09\u4E2A\u4E3B\u8981\u6539\u8FDB\u76EE\u6807\uFF1A\u517C\u5BB9\u3001\u5B89\u5168\u4E0E\u6027\u80FD\u3002")
                ]),
                vue.createVNode("h2", {
                  id: "\u6700\u5927\u5316\u517C\u5BB9",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u6700\u5927\u5316\u517C\u5BB9",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u6700\u5927\u5316\u517C\u5BB9")
                ]),
                vue.createVNode("ol", null, [
                  vue.createVNode("li", null, [
                    vue.createTextVNode("\u5411\u540E\u517C\u5BB9\uFF0C\u6DFB\u52A0\u6269\u5C55\u5B57\u6BB5 "),
                    vue.createVNode("ul", null, [
                      vue.createVNode("li", null, "supported_versions\uFF1A\u5B83\u6807\u8BB0\u4E86 TLS \u7684\u7248\u672C\u53F7\uFF0C\u4F7F\u7528\u5B83\u5C31\u80FD\u533A\u5206\u65B0\u65E7\u534F\u8BAE\u3002"),
                      vue.createVNode("li", null, "supported_groups"),
                      vue.createVNode("li", null, "key_share"),
                      vue.createVNode("li", null, "signature_algorithms"),
                      vue.createVNode("li", null, "server_name")
                    ])
                  ])
                ]),
                vue.createVNode("h2", {
                  id: "\u5F3A\u5316\u5B89\u5168",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u5F3A\u5316\u5B89\u5168",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u5F3A\u5316\u5B89\u5168")
                ]),
                vue.createVNode("p", null, "\u73B0\u5728\u4E3B\u6D41\u7684\u670D\u52A1\u5668\u548C\u6D4F\u89C8\u5668\u5728\u63E1\u624B\u9636\u6BB5\u90FD\u5DF2\u7ECF\u4E0D\u518D\u4F7F\u7528 RSA\uFF0C\u6539\u7528 ECDHE\uFF0C\u800C TLS1.3 \u5728\u534F\u8BAE\u91CC\u660E\u786E\u5E9F\u9664 RSA \u548C DH \u5219\u5728\u6807\u51C6\u5C42\u9762\u4FDD\u8BC1\u4E86\u201C\u524D\u5411\u5B89\u5168\u201D\u3002"),
                vue.createVNode("h2", {
                  id: "\u63D0\u5347\u6027\u80FD",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u63D0\u5347\u6027\u80FD",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u63D0\u5347\u6027\u80FD")
                ]),
                vue.createVNode("p", null, "\u4ECE1.2\u7684\u4E24\u4E2ARTT\u53D8\u4E3A\u4E00\u4E2ARTT"),
                vue.createVNode("p", null, "\u5176\u5B9E\u5177\u4F53\u7684\u505A\u6CD5\u8FD8\u662F\u5229\u7528\u4E86\u6269\u5C55\u3002\u5BA2\u6237\u7AEF\u5728\u201CClient Hello\u201D\u6D88\u606F\u91CC\u76F4\u63A5\u7528\u201Csupported_groups\u201D\u5E26\u4E0A\u652F\u6301\u7684\u66F2\u7EBF\uFF0C\u6BD4\u5982 P-256\u3001x25519\uFF0C\u7528\u201Ckey_share\u201D\u5E26\u4E0A\u66F2\u7EBF\u5BF9\u5E94\u7684\u5BA2\u6237\u7AEF\u516C\u94A5\u53C2\u6570\uFF0C\u7528\u201Csignature_algorithms\u201D\u5E26\u4E0A\u7B7E\u540D\u7B97\u6CD5"),
                vue.createVNode("p", null, "\u670D\u52A1\u5668\u6536\u5230\u540E\u5728\u8FD9\u4E9B\u6269\u5C55\u91CC\u9009\u5B9A\u4E00\u4E2A\u66F2\u7EBF\u548C\u53C2\u6570\uFF0C\u518D\u7528\u201Ckey_share\u201D\u6269\u5C55\u8FD4\u56DE\u670D\u52A1\u5668\u8FD9\u8FB9\u7684\u516C\u94A5\u53C2\u6570\uFF0C\u5C31\u5B9E\u73B0\u4E86\u53CC\u65B9\u7684\u5BC6\u94A5\u4EA4\u6362\uFF0C\u540E\u9762\u7684\u6D41\u7A0B\u5C31\u548C 1.2 \u57FA\u672C\u4E00\u6837\u4E86"),
                vue.createVNode("p", null, [
                  vue.createVNode("img", {
                    src: "https://static001.geekbang.org/resource/image/4d/b0/4d1df4d07dbb1c2500fc4ea69ecf7ab0.png",
                    alt: ""
                  })
                ]),
                vue.createVNode("h2", {
                  id: "\u63E1\u624B\u5206\u6790",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u63E1\u624B\u5206\u6790",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u63E1\u624B\u5206\u6790")
                ]),
                vue.createVNode("p", null, [
                  vue.createVNode("img", {
                    src: "https://static001.geekbang.org/resource/image/7a/db/7a2bc39fdbb421cf72a01e887e9156db.png",
                    alt: ""
                  })
                ]),
                vue.createVNode("h3", {
                  id: "\u6D4F\u89C8\u5668",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u6D4F\u89C8\u5668",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u6D4F\u89C8\u5668")
                ]),
                vue.createVNode("p", null, "\u56E0\u4E3A 1.3 \u7684\u6D88\u606F\u517C\u5BB9 1.2\uFF0C\u6240\u4EE5\u5F00\u5934\u7684\u7248\u672C\u53F7\u3001\u652F\u6301\u7684\u5BC6\u7801\u5957\u4EF6\u548C\u968F\u673A\u6570\uFF08Client Random\uFF09\u7ED3\u6784\u90FD\u662F\u4E00\u6837\u7684\uFF08\u4E0D\u8FC7\u8FD9\u65F6\u7684\u968F\u673A\u6570\u662F 32 \u4E2A\u5B57\u8282\uFF09"),
                vue.createVNode("pre", null, [
                  vue.createVNode("code", null, "\nHandshake Protocol: Client Hello\n    Version: TLS 1.2 (0x0303)\n    Random: cebeb6c05403654d66c2329\u2026\n    Cipher Suites (18 suites)\n        Cipher Suite: TLS_AES_128_GCM_SHA256 (0x1301)\n        Cipher Suite: TLS_CHACHA20_POLY1305_SHA256 (0x1303)\n        Cipher Suite: TLS_AES_256_GCM_SHA384 (0x1302)\n    Extension: supported_versions (len=9)\n        Supported Version: TLS 1.3 (0x0304)\n        Supported Version: TLS 1.2 (0x0303)\n    Extension: supported_groups (len=14)\n        Supported Groups (6 groups)\n            Supported Group: x25519 (0x001d)\n            Supported Group: secp256r1 (0x0017)\n    Extension: key_share (len=107)\n        Key Share extension\n            Client Key Share Length: 105\n            Key Share Entry: Group: x25519\n            Key Share Entry: Group: secp256r1\n\n")
                ]),
                vue.createVNode("p", null, "\u201Csupported_versions\u201D\u8868\u793A\u8FD9\u662F TLS1.3\uFF0C\u201Csupported_groups\u201D\u662F\u652F\u6301\u7684\u66F2\u7EBF\uFF0C\u201Ckey_share\u201D\u662F\u66F2\u7EBF\u5BF9\u5E94\u7684\u53C2\u6570\u3002"),
                vue.createVNode("h3", {
                  id: "\u670D\u52A1\u5668",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u670D\u52A1\u5668",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u670D\u52A1\u5668")
                ]),
                vue.createVNode("p", null, "\u670D\u52A1\u5668\u6536\u5230\u201CClient Hello\u201D\u540C\u6837\u8FD4\u56DE\u201CServer Hello\u201D\u6D88\u606F\uFF0C\u8FD8\u662F\u8981\u7ED9\u51FA\u4E00\u4E2A\u968F\u673A\u6570\uFF08Server Random\uFF09\u548C\u9009\u5B9A\u5BC6\u7801\u5957\u4EF6\u3002"),
                vue.createVNode("pre", null, [
                  vue.createVNode("code", null, "\nHandshake Protocol: Server Hello\n    Version: TLS 1.2 (0x0303)\n    Random: 12d2bce6568b063d3dee2\u2026\n    Cipher Suite: TLS_AES_128_GCM_SHA256 (0x1301)\n    Extension: supported_versions (len=2)\n        Supported Version: TLS 1.3 (0x0304)\n    Extension: key_share (len=36)\n        Key Share extension\n            Key Share Entry: Group: x25519, Key Exchange length: 32\n\n")
                ]),
                vue.createVNode("p", null, "\u8868\u9762\u4E0A\u770B\u548C TLS1.2 \u662F\u4E00\u6837\u7684\uFF0C\u91CD\u70B9\u662F\u540E\u9762\u7684\u6269\u5C55\u3002\u201Csupported_versions\u201D\u91CC\u786E\u8BA4\u4F7F\u7528\u7684\u662F TLS1.3\uFF0C\u7136\u540E\u5728\u201Ckey_share\u201D\u6269\u5C55\u5E26\u4E0A\u66F2\u7EBF\u548C\u5BF9\u5E94\u7684\u516C\u94A5\u53C2\u6570\u3002")
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
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/childPages/http/httpxinTLS.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports["default"] = _sfc_main;
