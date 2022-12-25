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
    const frontmatter = { "title": "09 | HTTP\u62A5\u6587\u662F\u4EC0\u4E48\u6837\u5B50\u7684\uFF1F", "date": "2021-10-05T16:00:00.000Z", "duration": "10min", "meta": [{ "property": "og:title", "content": "09 | HTTP\u62A5\u6587\u662F\u4EC0\u4E48\u6837\u5B50\u7684\uFF1F" }] };
    expose({ frontmatter });
    const head$1 = { "title": "09 | HTTP\u62A5\u6587\u662F\u4EC0\u4E48\u6837\u5B50\u7684\uFF1F", "meta": [{ "property": "og:title", "content": "09 | HTTP\u62A5\u6587\u662F\u4EC0\u4E48\u6837\u5B50\u7684\uFF1F" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Blog = Blog._sfc_main;
      _push(serverRenderer.ssrRenderComponent(_component_Blog, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><h2 id="\u5F52\u7EB3" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u5F52\u7EB3" aria-hidden="true"${_scopeId}>#</a> \u5F52\u7EB3</h2><ol${_scopeId}><li${_scopeId}>HTTP \u62A5\u6587\u7ED3\u6784\u5C31\u50CF\u662F\u201C\u5927\u5934\u513F\u5B50\u201D\uFF0C\u7531\u201C\u8D77\u59CB\u884C + \u5934\u90E8 + \u7A7A\u884C + \u5B9E\u4F53\u201D\u7EC4\u6210\uFF0C\u7B80\u5355\u5730\u8BF4\u5C31\u662F\u201Cheader+body\u201D\uFF1B</li><li${_scopeId}>HTTP \u62A5\u6587\u53EF\u4EE5\u6CA1\u6709 body\uFF0C\u4F46\u5FC5\u987B\u8981\u6709 header\uFF0C\u800C\u4E14 header \u540E\u4E5F\u5FC5\u987B\u8981\u6709\u7A7A\u884C\uFF0C\u5F62\u8C61\u5730\u8BF4\u5C31\u662F\u201C\u5927\u5934\u201D\u5FC5\u987B\u8981\u5E26\u7740\u201C\u8116\u5B50\u201D\uFF1B</li><li${_scopeId}>\u8BF7\u6C42\u5934\u7531\u201C\u8BF7\u6C42\u884C + \u5934\u90E8\u5B57\u6BB5\u201D\u6784\u6210\uFF0C\u54CD\u5E94\u5934\u7531\u201C\u72B6\u6001\u884C + \u5934\u90E8\u5B57\u6BB5\u201D\u6784\u6210\uFF1B</li><li${_scopeId}>\u8BF7\u6C42\u884C\u6709\u4E09\u90E8\u5206\uFF1A\u8BF7\u6C42\u65B9\u6CD5\uFF0C\u8BF7\u6C42\u76EE\u6807\u548C\u7248\u672C\u53F7\uFF1B</li><li${_scopeId}>\u72B6\u6001\u884C\u4E5F\u6709\u4E09\u90E8\u5206\uFF1A\u7248\u672C\u53F7\uFF0C\u72B6\u6001\u7801\u548C\u539F\u56E0\u5B57\u7B26\u4E32\uFF1B</li><li${_scopeId}>\u5934\u90E8\u5B57\u6BB5\u662F key-value \u7684\u5F62\u5F0F\uFF0C\u7528\u201C:\u201D\u5206\u9694\uFF0C\u4E0D\u533A\u5206\u5927\u5C0F\u5199\uFF0C\u987A\u5E8F\u4EFB\u610F\uFF0C\u9664\u4E86\u89C4\u5B9A\u7684\u6807\u51C6\u5934\uFF0C\u4E5F\u53EF\u4EE5\u4EFB\u610F\u6DFB\u52A0\u81EA\u5B9A\u4E49\u5B57\u6BB5\uFF0C\u5B9E\u73B0\u529F\u80FD\u6269\u5C55\uFF1B</li><li${_scopeId}>HTTP/1.1 \u91CC\u552F\u4E00\u8981\u6C42\u5FC5\u987B\u63D0\u4F9B\u7684\u5934\u5B57\u6BB5\u662F Host\uFF0C\u5B83\u5FC5\u987B\u51FA\u73B0\u5728\u8BF7\u6C42\u5934\u91CC\uFF0C\u6807\u8BB0\u865A\u62DF\u4E3B\u673A\u540D\u3002</li></ol><h2 id="\u62A5\u6587\u7ED3\u6784" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u62A5\u6587\u7ED3\u6784" aria-hidden="true"${_scopeId}>#</a> \u62A5\u6587\u7ED3\u6784</h2><p${_scopeId}><img src="https://static001.geekbang.org/resource/image/62/3c/62e061618977565c22c2cf09930e1d3c.png" alt="\u62A5\u6587\u7ED3\u6784"${_scopeId}></p><h3 id="\u8BF7\u6C42\u884C" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u8BF7\u6C42\u884C" aria-hidden="true"${_scopeId}>#</a> \u8BF7\u6C42\u884C</h3><ol${_scopeId}><li${_scopeId}>\u8BF7\u6C42\u65B9\u6CD5\uFF1A\u662F\u4E00\u4E2A\u52A8\u8BCD\uFF0C\u5982 GET/POST\uFF0C\u8868\u793A\u5BF9\u8D44\u6E90\u7684\u64CD\u4F5C\uFF1B</li><li${_scopeId}>\u8BF7\u6C42\u76EE\u6807\uFF1A\u901A\u5E38\u662F\u4E00\u4E2A URI\uFF0C\u6807\u8BB0\u4E86\u8BF7\u6C42\u65B9\u6CD5\u8981\u64CD\u4F5C\u7684\u8D44\u6E90\uFF1B</li><li${_scopeId}>\u7248\u672C\u53F7\uFF1A\u8868\u793A\u62A5\u6587\u4F7F\u7528\u7684 HTTP \u534F\u8BAE\u7248\u672C\u3002</li></ol><p${_scopeId}><img src="https://static001.geekbang.org/resource/image/36/b9/36108959084392065f36dff3e12967b9.png" alt=""${_scopeId}></p><pre class="language-http"${_scopeId}><code class="language-http"${_scopeId}><span class="token request-line"${_scopeId}><span class="token method property"${_scopeId}>GET</span> <span class="token request-target url"${_scopeId}>/</span> <span class="token http-version property"${_scopeId}>HTTP/1.1</span></span>
</code></pre><p${_scopeId}>\u5728\u8FD9\u4E2A\u8BF7\u6C42\u884C\u91CC\uFF0C\u201CGET\u201D\u662F\u8BF7\u6C42\u65B9\u6CD5\uFF0C\u201C/\u201D\u662F\u8BF7\u6C42\u76EE\u6807\uFF0C\u201CHTTP/1.1\u201D\u662F\u7248\u672C\u53F7\uFF0C\u628A\u8FD9\u4E09\u90E8\u5206\u8FDE\u8D77\u6765\uFF0C\u610F\u601D\u5C31\u662F\u201C\u670D\u52A1\u5668\u4F60\u597D\uFF0C\u6211\u60F3\u83B7\u53D6\u7F51\u7AD9\u6839\u76EE\u5F55\u4E0B\u7684\u9ED8\u8BA4\u6587\u4EF6\uFF0C\u6211\u7528\u7684\u534F\u8BAE\u7248\u672C\u53F7\u662F 1.1\uFF0C\u8BF7\u4E0D\u8981\u7528 1.0 \u6216\u8005 2.0 \u56DE\u590D\u6211\u3002\u201D</p><h3 id="\u72B6\u6001\u884C" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u72B6\u6001\u884C" aria-hidden="true"${_scopeId}>#</a> \u72B6\u6001\u884C</h3><ol${_scopeId}><li${_scopeId}>\u7248\u672C\u53F7\uFF1A\u8868\u793A\u62A5\u6587\u4F7F\u7528\u7684 HTTP \u534F\u8BAE\u7248\u672C\uFF1B</li><li${_scopeId}>\u72B6\u6001\u7801\uFF1A\u4E00\u4E2A\u4E09\u4F4D\u6570\uFF0C\u7528\u4EE3\u7801\u7684\u5F62\u5F0F\u8868\u793A\u5904\u7406\u7684\u7ED3\u679C\uFF0C\u6BD4\u5982 200 \u662F\u6210\u529F\uFF0C500 \u662F\u670D\u52A1\u5668\u9519\u8BEF\uFF1B</li><li${_scopeId}>\u539F\u56E0\uFF1A\u4F5C\u4E3A\u6570\u5B57\u72B6\u6001\u7801\u8865\u5145\uFF0C\u662F\u66F4\u8BE6\u7EC6\u7684\u89E3\u91CA\u6587\u5B57\uFF0C\u5E2E\u52A9\u4EBA\u7406\u89E3\u539F\u56E0\u3002</li></ol><p${_scopeId}><img src="https://static001.geekbang.org/resource/image/36/b9/36108959084392065f36dff3e12967b9.png" alt=""${_scopeId}></p></div>`);
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
                  vue.createVNode("li", null, "HTTP \u62A5\u6587\u7ED3\u6784\u5C31\u50CF\u662F\u201C\u5927\u5934\u513F\u5B50\u201D\uFF0C\u7531\u201C\u8D77\u59CB\u884C + \u5934\u90E8 + \u7A7A\u884C + \u5B9E\u4F53\u201D\u7EC4\u6210\uFF0C\u7B80\u5355\u5730\u8BF4\u5C31\u662F\u201Cheader+body\u201D\uFF1B"),
                  vue.createVNode("li", null, "HTTP \u62A5\u6587\u53EF\u4EE5\u6CA1\u6709 body\uFF0C\u4F46\u5FC5\u987B\u8981\u6709 header\uFF0C\u800C\u4E14 header \u540E\u4E5F\u5FC5\u987B\u8981\u6709\u7A7A\u884C\uFF0C\u5F62\u8C61\u5730\u8BF4\u5C31\u662F\u201C\u5927\u5934\u201D\u5FC5\u987B\u8981\u5E26\u7740\u201C\u8116\u5B50\u201D\uFF1B"),
                  vue.createVNode("li", null, "\u8BF7\u6C42\u5934\u7531\u201C\u8BF7\u6C42\u884C + \u5934\u90E8\u5B57\u6BB5\u201D\u6784\u6210\uFF0C\u54CD\u5E94\u5934\u7531\u201C\u72B6\u6001\u884C + \u5934\u90E8\u5B57\u6BB5\u201D\u6784\u6210\uFF1B"),
                  vue.createVNode("li", null, "\u8BF7\u6C42\u884C\u6709\u4E09\u90E8\u5206\uFF1A\u8BF7\u6C42\u65B9\u6CD5\uFF0C\u8BF7\u6C42\u76EE\u6807\u548C\u7248\u672C\u53F7\uFF1B"),
                  vue.createVNode("li", null, "\u72B6\u6001\u884C\u4E5F\u6709\u4E09\u90E8\u5206\uFF1A\u7248\u672C\u53F7\uFF0C\u72B6\u6001\u7801\u548C\u539F\u56E0\u5B57\u7B26\u4E32\uFF1B"),
                  vue.createVNode("li", null, "\u5934\u90E8\u5B57\u6BB5\u662F key-value \u7684\u5F62\u5F0F\uFF0C\u7528\u201C:\u201D\u5206\u9694\uFF0C\u4E0D\u533A\u5206\u5927\u5C0F\u5199\uFF0C\u987A\u5E8F\u4EFB\u610F\uFF0C\u9664\u4E86\u89C4\u5B9A\u7684\u6807\u51C6\u5934\uFF0C\u4E5F\u53EF\u4EE5\u4EFB\u610F\u6DFB\u52A0\u81EA\u5B9A\u4E49\u5B57\u6BB5\uFF0C\u5B9E\u73B0\u529F\u80FD\u6269\u5C55\uFF1B"),
                  vue.createVNode("li", null, "HTTP/1.1 \u91CC\u552F\u4E00\u8981\u6C42\u5FC5\u987B\u63D0\u4F9B\u7684\u5934\u5B57\u6BB5\u662F Host\uFF0C\u5B83\u5FC5\u987B\u51FA\u73B0\u5728\u8BF7\u6C42\u5934\u91CC\uFF0C\u6807\u8BB0\u865A\u62DF\u4E3B\u673A\u540D\u3002")
                ]),
                vue.createVNode("h2", {
                  id: "\u62A5\u6587\u7ED3\u6784",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u62A5\u6587\u7ED3\u6784",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u62A5\u6587\u7ED3\u6784")
                ]),
                vue.createVNode("p", null, [
                  vue.createVNode("img", {
                    src: "https://static001.geekbang.org/resource/image/62/3c/62e061618977565c22c2cf09930e1d3c.png",
                    alt: "\u62A5\u6587\u7ED3\u6784"
                  })
                ]),
                vue.createVNode("h3", {
                  id: "\u8BF7\u6C42\u884C",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u8BF7\u6C42\u884C",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u8BF7\u6C42\u884C")
                ]),
                vue.createVNode("ol", null, [
                  vue.createVNode("li", null, "\u8BF7\u6C42\u65B9\u6CD5\uFF1A\u662F\u4E00\u4E2A\u52A8\u8BCD\uFF0C\u5982 GET/POST\uFF0C\u8868\u793A\u5BF9\u8D44\u6E90\u7684\u64CD\u4F5C\uFF1B"),
                  vue.createVNode("li", null, "\u8BF7\u6C42\u76EE\u6807\uFF1A\u901A\u5E38\u662F\u4E00\u4E2A URI\uFF0C\u6807\u8BB0\u4E86\u8BF7\u6C42\u65B9\u6CD5\u8981\u64CD\u4F5C\u7684\u8D44\u6E90\uFF1B"),
                  vue.createVNode("li", null, "\u7248\u672C\u53F7\uFF1A\u8868\u793A\u62A5\u6587\u4F7F\u7528\u7684 HTTP \u534F\u8BAE\u7248\u672C\u3002")
                ]),
                vue.createVNode("p", null, [
                  vue.createVNode("img", {
                    src: "https://static001.geekbang.org/resource/image/36/b9/36108959084392065f36dff3e12967b9.png",
                    alt: ""
                  })
                ]),
                vue.createVNode("pre", { class: "language-http" }, [
                  vue.createVNode("code", { class: "language-http" }, [
                    vue.createVNode("span", { class: "token request-line" }, [
                      vue.createVNode("span", { class: "token method property" }, "GET"),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token request-target url" }, "/"),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token http-version property" }, "HTTP/1.1")
                    ]),
                    vue.createTextVNode("\n")
                  ])
                ]),
                vue.createVNode("p", null, "\u5728\u8FD9\u4E2A\u8BF7\u6C42\u884C\u91CC\uFF0C\u201CGET\u201D\u662F\u8BF7\u6C42\u65B9\u6CD5\uFF0C\u201C/\u201D\u662F\u8BF7\u6C42\u76EE\u6807\uFF0C\u201CHTTP/1.1\u201D\u662F\u7248\u672C\u53F7\uFF0C\u628A\u8FD9\u4E09\u90E8\u5206\u8FDE\u8D77\u6765\uFF0C\u610F\u601D\u5C31\u662F\u201C\u670D\u52A1\u5668\u4F60\u597D\uFF0C\u6211\u60F3\u83B7\u53D6\u7F51\u7AD9\u6839\u76EE\u5F55\u4E0B\u7684\u9ED8\u8BA4\u6587\u4EF6\uFF0C\u6211\u7528\u7684\u534F\u8BAE\u7248\u672C\u53F7\u662F 1.1\uFF0C\u8BF7\u4E0D\u8981\u7528 1.0 \u6216\u8005 2.0 \u56DE\u590D\u6211\u3002\u201D"),
                vue.createVNode("h3", {
                  id: "\u72B6\u6001\u884C",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u72B6\u6001\u884C",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u72B6\u6001\u884C")
                ]),
                vue.createVNode("ol", null, [
                  vue.createVNode("li", null, "\u7248\u672C\u53F7\uFF1A\u8868\u793A\u62A5\u6587\u4F7F\u7528\u7684 HTTP \u534F\u8BAE\u7248\u672C\uFF1B"),
                  vue.createVNode("li", null, "\u72B6\u6001\u7801\uFF1A\u4E00\u4E2A\u4E09\u4F4D\u6570\uFF0C\u7528\u4EE3\u7801\u7684\u5F62\u5F0F\u8868\u793A\u5904\u7406\u7684\u7ED3\u679C\uFF0C\u6BD4\u5982 200 \u662F\u6210\u529F\uFF0C500 \u662F\u670D\u52A1\u5668\u9519\u8BEF\uFF1B"),
                  vue.createVNode("li", null, "\u539F\u56E0\uFF1A\u4F5C\u4E3A\u6570\u5B57\u72B6\u6001\u7801\u8865\u5145\uFF0C\u662F\u66F4\u8BE6\u7EC6\u7684\u89E3\u91CA\u6587\u5B57\uFF0C\u5E2E\u52A9\u4EBA\u7406\u89E3\u539F\u56E0\u3002")
                ]),
                vue.createVNode("p", null, [
                  vue.createVNode("img", {
                    src: "https://static001.geekbang.org/resource/image/36/b9/36108959084392065f36dff3e12967b9.png",
                    alt: ""
                  })
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
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/childPages/http/httpbaowenshayang.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports["default"] = _sfc_main;
