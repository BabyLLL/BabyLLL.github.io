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
    const frontmatter = { "title": "19 | \u8BA9\u6211\u77E5\u9053\u4F60\u662F\u8C01\uFF1AHTTP\u7684Cookie\u673A\u5236", "date": "2021-10-29T16:00:00.000Z", "duration": "10min", "meta": [{ "property": "og:title", "content": "19 | \u8BA9\u6211\u77E5\u9053\u4F60\u662F\u8C01\uFF1AHTTP\u7684Cookie\u673A\u5236" }] };
    expose({ frontmatter });
    const head$1 = { "title": "19 | \u8BA9\u6211\u77E5\u9053\u4F60\u662F\u8C01\uFF1AHTTP\u7684Cookie\u673A\u5236", "meta": [{ "property": "og:title", "content": "19 | \u8BA9\u6211\u77E5\u9053\u4F60\u662F\u8C01\uFF1AHTTP\u7684Cookie\u673A\u5236" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Blog = Blog._sfc_main;
      _push(serverRenderer.ssrRenderComponent(_component_Blog, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><h2 id="\u5F52\u7EB3" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u5F52\u7EB3" aria-hidden="true"${_scopeId}>#</a> \u5F52\u7EB3</h2><ol${_scopeId}><li${_scopeId}>Cookie \u662F\u670D\u52A1\u5668\u59D4\u6258\u6D4F\u89C8\u5668\u5B58\u50A8\u7684\u4E00\u4E9B\u6570\u636E\uFF0C\u8BA9\u670D\u52A1\u5668\u6709\u4E86\u201C\u8BB0\u5FC6\u80FD\u529B\u201D\uFF1B</li><li${_scopeId}>\u54CD\u5E94\u62A5\u6587\u4F7F\u7528 Set-Cookie \u5B57\u6BB5\u53D1\u9001\u201Ckey=value\u201D\u5F62\u5F0F\u7684 Cookie \u503C\uFF1B</li><li${_scopeId}>\u8BF7\u6C42\u62A5\u6587\u91CC\u7528 Cookie \u5B57\u6BB5\u53D1\u9001\u591A\u4E2A Cookie \u503C\uFF1B</li><li${_scopeId}>\u4E3A\u4E86\u4FDD\u62A4 Cookie\uFF0C\u8FD8\u8981\u7ED9\u5B83\u8BBE\u7F6E\u6709\u6548\u671F\u3001\u4F5C\u7528\u57DF\u7B49\u5C5E\u6027\uFF0C\u5E38\u7528\u7684\u6709 Max-Age\u3001Expires\u3001Domain\u3001HttpOnly \u7B49\uFF1B</li><li${_scopeId}>Cookie \u6700\u57FA\u672C\u7684\u7528\u9014\u662F\u8EAB\u4EFD\u8BC6\u522B\uFF0C\u5B9E\u73B0\u6709\u72B6\u6001\u7684\u4F1A\u8BDD\u4E8B\u52A1\u3002</li></ol><h2 id="\u4EC0\u4E48\u662Fcookie" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u4EC0\u4E48\u662Fcookie" aria-hidden="true"${_scopeId}>#</a> \u4EC0\u4E48\u662Fcookie</h2><blockquote${_scopeId}><p${_scopeId}>\u5E2E\u52A9\u670D\u52A1\u5668\u6709\u4E86\u8BB0\u5FC6\u7684\u529F\u80FD\u3002</p></blockquote><h2 id="cookie\u7684\u5DE5\u4F5C" tabindex="-1"${_scopeId}><a class="header-anchor" href="#cookie\u7684\u5DE5\u4F5C" aria-hidden="true"${_scopeId}>#</a> cookie\u7684\u5DE5\u4F5C</h2><p${_scopeId}>\u54CD\u5E94\u5934\u5B57\u6BB5 Set-Cookie \u548C\u8BF7\u6C42\u5934\u5B57\u6BB5 Cookie\u3002</p><p${_scopeId}>\u683C\u5F0F\u4E3A key=value \u7684\u5F62\u5F0F</p><p${_scopeId}>\u4E0D\u8FC7\u56E0\u4E3A\u670D\u52A1\u5668\u7684\u201C\u8BB0\u5FC6\u80FD\u529B\u201D\u5B9E\u5728\u662F\u592A\u5DEE\uFF0C\u4E00\u5F20\u5C0F\u7EB8\u6761\u7ECF\u5E38\u4E0D\u591F\u7528\u3002\u6240\u4EE5\uFF0C\u670D\u52A1\u5668\u6709\u65F6\u4F1A\u5728\u54CD\u5E94\u5934\u91CC\u6DFB\u52A0\u591A\u4E2A Set-Cookie\uFF0C\u5B58\u50A8\u591A\u4E2A\u201Ckey=value\u201D\u3002\u4F46\u6D4F\u89C8\u5668\u8FD9\u8FB9\u53D1\u9001\u65F6\u4E0D\u9700\u8981\u7528\u591A\u4E2A Cookie \u5B57\u6BB5\uFF0C\u53EA\u8981\u5728\u4E00\u884C\u91CC\u7528\u201C;\u201D\u9694\u5F00\u5C31\u884C\u3002</p><p${_scopeId}><img src="https://static001.geekbang.org/resource/image/9f/a4/9f6cca61802d65d063e24aa9ca7c38a4.png" alt=""${_scopeId}></p><p${_scopeId}><img src="https://static001.geekbang.org/resource/image/da/9f/da9b39d88ddd717a6e3feb6637dc3f9f.png" alt=""${_scopeId}></p><p${_scopeId}><img src="https://static001.geekbang.org/resource/image/9d/5d/9dbb8b490714360475911ca04134df5d.png" alt=""${_scopeId}></p><h2 id="cookie\u7684\u5C5E\u6027" tabindex="-1"${_scopeId}><a class="header-anchor" href="#cookie\u7684\u5C5E\u6027" aria-hidden="true"${_scopeId}>#</a> cookie\u7684\u5C5E\u6027</h2><ol${_scopeId}><li${_scopeId}><p${_scopeId}>\u751F\u547D\u5468\u671F</p><ul${_scopeId}><li${_scopeId}>Expires: \u4FD7\u79F0\u201C\u8FC7\u671F\u65F6\u95F4\u201D\uFF0C\u7528\u7684\u662F\u7EDD\u5BF9\u65F6\u95F4\u70B9\uFF0C\u53EF\u4EE5\u7406\u89E3\u4E3A\u201C\u622A\u6B62\u65E5\u671F\u201D\uFF08deadline\uFF09</li><li${_scopeId}>Max-Age: \u7528\u7684\u662F\u76F8\u5BF9\u65F6\u95F4\uFF0C\u5355\u4F4D\u662F\u79D2\uFF0C\u6D4F\u89C8\u5668\u7528\u6536\u5230\u62A5\u6587\u7684\u65F6\u95F4\u70B9\u518D\u52A0\u4E0A Max-Age\uFF0C\u5C31\u53EF\u4EE5\u5F97\u5230\u5931\u6548\u7684\u7EDD\u5BF9\u65F6\u95F4\u3002</li><li${_scopeId}>Max-Age\u4F18\u5148\u7EA7\u9AD8</li></ul></li><li${_scopeId}><p${_scopeId}>cookie\u57DF</p></li><li${_scopeId}><p${_scopeId}>HttpOnly: \u7981\u6B62js\u8BFB\u53D6</p></li><li${_scopeId}><p${_scopeId}>SameSite: \u53EF\u4EE5\u9632\u8303\u201C\u8DE8\u7AD9\u8BF7\u6C42\u4F2A\u9020\u201D\uFF08XSRF\uFF09\u653B\u51FB</p></li><li${_scopeId}><p${_scopeId}>Secure: \u8868\u793A\u8FD9\u4E2A Cookie \u4EC5\u80FD\u7528 HTTPS \u534F\u8BAE\u52A0\u5BC6\u4F20\u8F93\uFF0C\u660E\u6587\u7684 HTTP \u534F\u8BAE\u4F1A\u7981\u6B62\u53D1\u9001\u3002\u4F46 Cookie \u672C\u8EAB\u4E0D\u662F\u52A0\u5BC6\u7684\uFF0C\u6D4F\u89C8\u5668\u91CC\u8FD8\u662F\u4EE5\u660E\u6587\u7684\u5F62\u5F0F\u5B58\u5728\u3002</p></li></ol><h2 id="cookie\u5E94\u7528" tabindex="-1"${_scopeId}><a class="header-anchor" href="#cookie\u5E94\u7528" aria-hidden="true"${_scopeId}>#</a> cookie\u5E94\u7528</h2><ol${_scopeId}><li${_scopeId}><p${_scopeId}>\u8EAB\u4EFD\u6807\u8BC6</p><ul${_scopeId}><li${_scopeId}>\u6BD4\u5982\uFF0C\u4F60\u7528\u8D26\u53F7\u548C\u5BC6\u7801\u767B\u5F55\u67D0\u7535\u5546\uFF0C\u767B\u5F55\u6210\u529F\u540E\u7F51\u7AD9\u670D\u52A1\u5668\u5C31\u4F1A\u53D1\u7ED9\u6D4F\u89C8\u5668\u4E00\u4E2A Cookie\uFF0C\u5185\u5BB9\u5927\u6982\u662F\u201Cname=yourid\u201D\uFF0C\u8FD9\u6837\u5C31\u6210\u529F\u5730\u628A\u8EAB\u4EFD\u6807\u7B7E\u8D34\u5728\u4E86\u4F60\u8EAB\u4E0A\u3002</li></ul></li><li${_scopeId}><p${_scopeId}>\u5E7F\u544A\u8DDF\u8E2A</p></li></ol></div>`);
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
                  vue.createVNode("li", null, "Cookie \u662F\u670D\u52A1\u5668\u59D4\u6258\u6D4F\u89C8\u5668\u5B58\u50A8\u7684\u4E00\u4E9B\u6570\u636E\uFF0C\u8BA9\u670D\u52A1\u5668\u6709\u4E86\u201C\u8BB0\u5FC6\u80FD\u529B\u201D\uFF1B"),
                  vue.createVNode("li", null, "\u54CD\u5E94\u62A5\u6587\u4F7F\u7528 Set-Cookie \u5B57\u6BB5\u53D1\u9001\u201Ckey=value\u201D\u5F62\u5F0F\u7684 Cookie \u503C\uFF1B"),
                  vue.createVNode("li", null, "\u8BF7\u6C42\u62A5\u6587\u91CC\u7528 Cookie \u5B57\u6BB5\u53D1\u9001\u591A\u4E2A Cookie \u503C\uFF1B"),
                  vue.createVNode("li", null, "\u4E3A\u4E86\u4FDD\u62A4 Cookie\uFF0C\u8FD8\u8981\u7ED9\u5B83\u8BBE\u7F6E\u6709\u6548\u671F\u3001\u4F5C\u7528\u57DF\u7B49\u5C5E\u6027\uFF0C\u5E38\u7528\u7684\u6709 Max-Age\u3001Expires\u3001Domain\u3001HttpOnly \u7B49\uFF1B"),
                  vue.createVNode("li", null, "Cookie \u6700\u57FA\u672C\u7684\u7528\u9014\u662F\u8EAB\u4EFD\u8BC6\u522B\uFF0C\u5B9E\u73B0\u6709\u72B6\u6001\u7684\u4F1A\u8BDD\u4E8B\u52A1\u3002")
                ]),
                vue.createVNode("h2", {
                  id: "\u4EC0\u4E48\u662Fcookie",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u4EC0\u4E48\u662Fcookie",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u4EC0\u4E48\u662Fcookie")
                ]),
                vue.createVNode("blockquote", null, [
                  vue.createVNode("p", null, "\u5E2E\u52A9\u670D\u52A1\u5668\u6709\u4E86\u8BB0\u5FC6\u7684\u529F\u80FD\u3002")
                ]),
                vue.createVNode("h2", {
                  id: "cookie\u7684\u5DE5\u4F5C",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#cookie\u7684\u5DE5\u4F5C",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" cookie\u7684\u5DE5\u4F5C")
                ]),
                vue.createVNode("p", null, "\u54CD\u5E94\u5934\u5B57\u6BB5 Set-Cookie \u548C\u8BF7\u6C42\u5934\u5B57\u6BB5 Cookie\u3002"),
                vue.createVNode("p", null, "\u683C\u5F0F\u4E3A key=value \u7684\u5F62\u5F0F"),
                vue.createVNode("p", null, "\u4E0D\u8FC7\u56E0\u4E3A\u670D\u52A1\u5668\u7684\u201C\u8BB0\u5FC6\u80FD\u529B\u201D\u5B9E\u5728\u662F\u592A\u5DEE\uFF0C\u4E00\u5F20\u5C0F\u7EB8\u6761\u7ECF\u5E38\u4E0D\u591F\u7528\u3002\u6240\u4EE5\uFF0C\u670D\u52A1\u5668\u6709\u65F6\u4F1A\u5728\u54CD\u5E94\u5934\u91CC\u6DFB\u52A0\u591A\u4E2A Set-Cookie\uFF0C\u5B58\u50A8\u591A\u4E2A\u201Ckey=value\u201D\u3002\u4F46\u6D4F\u89C8\u5668\u8FD9\u8FB9\u53D1\u9001\u65F6\u4E0D\u9700\u8981\u7528\u591A\u4E2A Cookie \u5B57\u6BB5\uFF0C\u53EA\u8981\u5728\u4E00\u884C\u91CC\u7528\u201C;\u201D\u9694\u5F00\u5C31\u884C\u3002"),
                vue.createVNode("p", null, [
                  vue.createVNode("img", {
                    src: "https://static001.geekbang.org/resource/image/9f/a4/9f6cca61802d65d063e24aa9ca7c38a4.png",
                    alt: ""
                  })
                ]),
                vue.createVNode("p", null, [
                  vue.createVNode("img", {
                    src: "https://static001.geekbang.org/resource/image/da/9f/da9b39d88ddd717a6e3feb6637dc3f9f.png",
                    alt: ""
                  })
                ]),
                vue.createVNode("p", null, [
                  vue.createVNode("img", {
                    src: "https://static001.geekbang.org/resource/image/9d/5d/9dbb8b490714360475911ca04134df5d.png",
                    alt: ""
                  })
                ]),
                vue.createVNode("h2", {
                  id: "cookie\u7684\u5C5E\u6027",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#cookie\u7684\u5C5E\u6027",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" cookie\u7684\u5C5E\u6027")
                ]),
                vue.createVNode("ol", null, [
                  vue.createVNode("li", null, [
                    vue.createVNode("p", null, "\u751F\u547D\u5468\u671F"),
                    vue.createVNode("ul", null, [
                      vue.createVNode("li", null, "Expires: \u4FD7\u79F0\u201C\u8FC7\u671F\u65F6\u95F4\u201D\uFF0C\u7528\u7684\u662F\u7EDD\u5BF9\u65F6\u95F4\u70B9\uFF0C\u53EF\u4EE5\u7406\u89E3\u4E3A\u201C\u622A\u6B62\u65E5\u671F\u201D\uFF08deadline\uFF09"),
                      vue.createVNode("li", null, "Max-Age: \u7528\u7684\u662F\u76F8\u5BF9\u65F6\u95F4\uFF0C\u5355\u4F4D\u662F\u79D2\uFF0C\u6D4F\u89C8\u5668\u7528\u6536\u5230\u62A5\u6587\u7684\u65F6\u95F4\u70B9\u518D\u52A0\u4E0A Max-Age\uFF0C\u5C31\u53EF\u4EE5\u5F97\u5230\u5931\u6548\u7684\u7EDD\u5BF9\u65F6\u95F4\u3002"),
                      vue.createVNode("li", null, "Max-Age\u4F18\u5148\u7EA7\u9AD8")
                    ])
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("p", null, "cookie\u57DF")
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("p", null, "HttpOnly: \u7981\u6B62js\u8BFB\u53D6")
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("p", null, "SameSite: \u53EF\u4EE5\u9632\u8303\u201C\u8DE8\u7AD9\u8BF7\u6C42\u4F2A\u9020\u201D\uFF08XSRF\uFF09\u653B\u51FB")
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("p", null, "Secure: \u8868\u793A\u8FD9\u4E2A Cookie \u4EC5\u80FD\u7528 HTTPS \u534F\u8BAE\u52A0\u5BC6\u4F20\u8F93\uFF0C\u660E\u6587\u7684 HTTP \u534F\u8BAE\u4F1A\u7981\u6B62\u53D1\u9001\u3002\u4F46 Cookie \u672C\u8EAB\u4E0D\u662F\u52A0\u5BC6\u7684\uFF0C\u6D4F\u89C8\u5668\u91CC\u8FD8\u662F\u4EE5\u660E\u6587\u7684\u5F62\u5F0F\u5B58\u5728\u3002")
                  ])
                ]),
                vue.createVNode("h2", {
                  id: "cookie\u5E94\u7528",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#cookie\u5E94\u7528",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" cookie\u5E94\u7528")
                ]),
                vue.createVNode("ol", null, [
                  vue.createVNode("li", null, [
                    vue.createVNode("p", null, "\u8EAB\u4EFD\u6807\u8BC6"),
                    vue.createVNode("ul", null, [
                      vue.createVNode("li", null, "\u6BD4\u5982\uFF0C\u4F60\u7528\u8D26\u53F7\u548C\u5BC6\u7801\u767B\u5F55\u67D0\u7535\u5546\uFF0C\u767B\u5F55\u6210\u529F\u540E\u7F51\u7AD9\u670D\u52A1\u5668\u5C31\u4F1A\u53D1\u7ED9\u6D4F\u89C8\u5668\u4E00\u4E2A Cookie\uFF0C\u5185\u5BB9\u5927\u6982\u662F\u201Cname=yourid\u201D\uFF0C\u8FD9\u6837\u5C31\u6210\u529F\u5730\u628A\u8EAB\u4EFD\u6807\u7B7E\u8D34\u5728\u4E86\u4F60\u8EAB\u4E0A\u3002")
                    ])
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("p", null, "\u5E7F\u544A\u8DDF\u8E2A")
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
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/childPages/http/httpcookie.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports["default"] = _sfc_main;
