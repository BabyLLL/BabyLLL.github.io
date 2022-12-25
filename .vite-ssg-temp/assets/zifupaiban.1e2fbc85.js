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
    const frontmatter = { "title": "3.6 \u5B57\u7B26\u5355\u5143\u7684\u4E2D\u65AD\u4E0E\u6362\u884C", "date": "2022-02-24T16:00:00.000Z", "duration": "10min", "meta": [{ "property": "og:title", "content": "3.6 \u5B57\u7B26\u5355\u5143\u7684\u4E2D\u65AD\u4E0E\u6362\u884C" }] };
    expose({ frontmatter });
    const head$1 = { "title": "3.6 \u5B57\u7B26\u5355\u5143\u7684\u4E2D\u65AD\u4E0E\u6362\u884C", "meta": [{ "property": "og:title", "content": "3.6 \u5B57\u7B26\u5355\u5143\u7684\u4E2D\u65AD\u4E0E\u6362\u884C" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Blog = Blog._sfc_main;
      _push(serverRenderer.ssrRenderComponent(_component_Blog, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><h2 id="\u5F52\u7EB3" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u5F52\u7EB3" aria-hidden="true"${_scopeId}>#</a> \u5F52\u7EB3</h2><ol${_scopeId}><li${_scopeId}>wrod-break: normal | break-all | keep-all | break-word</li><li${_scopeId}>\u89E3\u51B3\u8FDE\u7EED\u7834\u6298\u53F7\u4E0D\u6362\u884C\u95EE\u9898</li></ol><h4 id="keep-all" tabindex="-1"${_scopeId}><a class="header-anchor" href="#keep-all" aria-hidden="true"${_scopeId}>#</a> keep-all</h4><blockquote${_scopeId}><p${_scopeId}>\u53EF\u4EE5\u4FDD\u62A4\u6211\u4EEC\u7684\u4E2D\u6587\u8BCD\u7EC4\u4E0D\u88AB\u65AD\u5F00</p></blockquote><h4 id="break-all" tabindex="-1"${_scopeId}><a class="header-anchor" href="#break-all" aria-hidden="true"${_scopeId}>#</a> break-all</h4><blockquote${_scopeId}><p${_scopeId}>\u5BF9\u4E8Enon-CJK (CJK \u6307\u4E2D\u6587/\u65E5\u6587/\u97E9\u6587) \u6587\u672C\uFF0C\u53EF\u5728\u4EFB\u610F\u5B57\u7B26\u95F4\u65AD\u884C\u3002</p></blockquote><h4 id="break-word" tabindex="-1"${_scopeId}><a class="header-anchor" href="#break-word" aria-hidden="true"${_scopeId}>#</a> break-word</h4><blockquote${_scopeId}><p${_scopeId}>\u8868\u73B0\u4E3A\u5C3D\u91CF\u4E0D\u65AD\u5F00\u5355\u8BCD</p></blockquote><h4 id="\u7834\u6298\u53F7\u4E0D\u6362\u884C\u95EE\u9898" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u7834\u6298\u53F7\u4E0D\u6362\u884C\u95EE\u9898" aria-hidden="true"${_scopeId}>#</a> \u7834\u6298\u53F7\u4E0D\u6362\u884C\u95EE\u9898</h4><ul${_scopeId}><li${_scopeId}>\u5982\u4E0B\u5C5E\u6027\u53EF\u4EE5\u89E3\u51B3 <ol${_scopeId}><li${_scopeId}>word-break: break-word;</li><li${_scopeId}>word-wrap: break-word;</li><li${_scopeId}>overflow-wrap: break-word;</li></ol></li></ul><pre class="language-css"${_scopeId}><code class="language-css"${_scopeId}><span class="token selector"${_scopeId}>p</span> <span class="token punctuation"${_scopeId}>{</span>
  <span class="token comment"${_scopeId}>/* \u5B57\u7B26\u4E32\u6362\u884C\u4E3B\u529B */</span>
  <span class="token property"${_scopeId}>word-break</span><span class="token punctuation"${_scopeId}>:</span> break-all<span class="token punctuation"${_scopeId}>;</span>
  <span class="token comment"${_scopeId}>/* \u517C\u5BB9IE\u6D4F\u89C8\u5668\u548CEdge\u6D4F\u89C8\u5668\u7684\u7834\u6298\u53F7\u6362\u884C */</span>
  <span class="token property"${_scopeId}>word-wrap</span><span class="token punctuation"${_scopeId}>:</span> break-word<span class="token punctuation"${_scopeId}>;</span>
<span class="token punctuation"${_scopeId}>}</span>
</code></pre><h4 id="\u5982\u679C\u5E0C\u671B\u4E2D\u6587\u6807\u70B9\u4E5F\u80FD\u6210\u4E3A\u6362\u884C\u70B9" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u5982\u679C\u5E0C\u671B\u4E2D\u6587\u6807\u70B9\u4E5F\u80FD\u6210\u4E3A\u6362\u884C\u70B9" aria-hidden="true"${_scopeId}>#</a> \u5982\u679C\u5E0C\u671B\u4E2D\u6587\u6807\u70B9\u4E5F\u80FD\u6210\u4E3A\u6362\u884C\u70B9</h4><pre class="language-css"${_scopeId}><code class="language-css"${_scopeId}><span class="token selector"${_scopeId}>p</span> <span class="token punctuation"${_scopeId}>{</span>
  <span class="token comment"${_scopeId}>/* \u4E2D\u6587\u6807\u70B9\u4E5F\u80FD\u6362\u884C */</span>
  <span class="token property"${_scopeId}>line-break</span><span class="token punctuation"${_scopeId}>:</span> anywhere
<span class="token punctuation"${_scopeId}>}</span>
</code></pre></div>`);
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
                  vue.createVNode("li", null, "wrod-break: normal | break-all | keep-all | break-word"),
                  vue.createVNode("li", null, "\u89E3\u51B3\u8FDE\u7EED\u7834\u6298\u53F7\u4E0D\u6362\u884C\u95EE\u9898")
                ]),
                vue.createVNode("h4", {
                  id: "keep-all",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#keep-all",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" keep-all")
                ]),
                vue.createVNode("blockquote", null, [
                  vue.createVNode("p", null, "\u53EF\u4EE5\u4FDD\u62A4\u6211\u4EEC\u7684\u4E2D\u6587\u8BCD\u7EC4\u4E0D\u88AB\u65AD\u5F00")
                ]),
                vue.createVNode("h4", {
                  id: "break-all",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#break-all",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" break-all")
                ]),
                vue.createVNode("blockquote", null, [
                  vue.createVNode("p", null, "\u5BF9\u4E8Enon-CJK (CJK \u6307\u4E2D\u6587/\u65E5\u6587/\u97E9\u6587) \u6587\u672C\uFF0C\u53EF\u5728\u4EFB\u610F\u5B57\u7B26\u95F4\u65AD\u884C\u3002")
                ]),
                vue.createVNode("h4", {
                  id: "break-word",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#break-word",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" break-word")
                ]),
                vue.createVNode("blockquote", null, [
                  vue.createVNode("p", null, "\u8868\u73B0\u4E3A\u5C3D\u91CF\u4E0D\u65AD\u5F00\u5355\u8BCD")
                ]),
                vue.createVNode("h4", {
                  id: "\u7834\u6298\u53F7\u4E0D\u6362\u884C\u95EE\u9898",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u7834\u6298\u53F7\u4E0D\u6362\u884C\u95EE\u9898",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u7834\u6298\u53F7\u4E0D\u6362\u884C\u95EE\u9898")
                ]),
                vue.createVNode("ul", null, [
                  vue.createVNode("li", null, [
                    vue.createTextVNode("\u5982\u4E0B\u5C5E\u6027\u53EF\u4EE5\u89E3\u51B3 "),
                    vue.createVNode("ol", null, [
                      vue.createVNode("li", null, "word-break: break-word;"),
                      vue.createVNode("li", null, "word-wrap: break-word;"),
                      vue.createVNode("li", null, "overflow-wrap: break-word;")
                    ])
                  ])
                ]),
                vue.createVNode("pre", { class: "language-css" }, [
                  vue.createVNode("code", { class: "language-css" }, [
                    vue.createVNode("span", { class: "token selector" }, "p"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n  "),
                    vue.createVNode("span", { class: "token comment" }, "/* \u5B57\u7B26\u4E32\u6362\u884C\u4E3B\u529B */"),
                    vue.createTextVNode("\n  "),
                    vue.createVNode("span", { class: "token property" }, "word-break"),
                    vue.createVNode("span", { class: "token punctuation" }, ":"),
                    vue.createTextVNode(" break-all"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode("\n  "),
                    vue.createVNode("span", { class: "token comment" }, "/* \u517C\u5BB9IE\u6D4F\u89C8\u5668\u548CEdge\u6D4F\u89C8\u5668\u7684\u7834\u6298\u53F7\u6362\u884C */"),
                    vue.createTextVNode("\n  "),
                    vue.createVNode("span", { class: "token property" }, "word-wrap"),
                    vue.createVNode("span", { class: "token punctuation" }, ":"),
                    vue.createTextVNode(" break-word"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n")
                  ])
                ]),
                vue.createVNode("h4", {
                  id: "\u5982\u679C\u5E0C\u671B\u4E2D\u6587\u6807\u70B9\u4E5F\u80FD\u6210\u4E3A\u6362\u884C\u70B9",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u5982\u679C\u5E0C\u671B\u4E2D\u6587\u6807\u70B9\u4E5F\u80FD\u6210\u4E3A\u6362\u884C\u70B9",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u5982\u679C\u5E0C\u671B\u4E2D\u6587\u6807\u70B9\u4E5F\u80FD\u6210\u4E3A\u6362\u884C\u70B9")
                ]),
                vue.createVNode("pre", { class: "language-css" }, [
                  vue.createVNode("code", { class: "language-css" }, [
                    vue.createVNode("span", { class: "token selector" }, "p"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n  "),
                    vue.createVNode("span", { class: "token comment" }, "/* \u4E2D\u6587\u6807\u70B9\u4E5F\u80FD\u6362\u884C */"),
                    vue.createTextVNode("\n  "),
                    vue.createVNode("span", { class: "token property" }, "line-break"),
                    vue.createVNode("span", { class: "token punctuation" }, ":"),
                    vue.createTextVNode(" anywhere\n"),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n")
                  ])
                ])
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
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/childPages/cssWord/zifupaiban.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports["default"] = _sfc_main;
