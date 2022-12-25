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
    const frontmatter = { "title": "10 | \u5E94\u8BE5\u5982\u4F55\u7406\u89E3\u8BF7\u6C42\u65B9\u6CD5\uFF1F", "date": "2021-10-08T16:00:00.000Z", "duration": "10min", "meta": [{ "property": "og:title", "content": "10 | \u5E94\u8BE5\u5982\u4F55\u7406\u89E3\u8BF7\u6C42\u65B9\u6CD5\uFF1F" }] };
    expose({ frontmatter });
    const head$1 = { "title": "10 | \u5E94\u8BE5\u5982\u4F55\u7406\u89E3\u8BF7\u6C42\u65B9\u6CD5\uFF1F", "meta": [{ "property": "og:title", "content": "10 | \u5E94\u8BE5\u5982\u4F55\u7406\u89E3\u8BF7\u6C42\u65B9\u6CD5\uFF1F" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Blog = Blog._sfc_main;
      _push(serverRenderer.ssrRenderComponent(_component_Blog, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><h2 id="\u5F52\u7EB3" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u5F52\u7EB3" aria-hidden="true"${_scopeId}>#</a> \u5F52\u7EB3</h2><ol${_scopeId}><li${_scopeId}>\u8BF7\u6C42\u65B9\u6CD5\u662F\u5BA2\u6237\u7AEF\u53D1\u51FA\u7684\u3001\u8981\u6C42\u670D\u52A1\u5668\u6267\u884C\u7684\u3001\u5BF9\u8D44\u6E90\u7684\u4E00\u79CD\u64CD\u4F5C\uFF1B</li><li${_scopeId}>\u8BF7\u6C42\u65B9\u6CD5\u662F\u5BF9\u670D\u52A1\u5668\u7684\u201C\u6307\u793A\u201D\uFF0C\u771F\u6B63\u5E94\u5982\u4F55\u5904\u7406\u7531\u670D\u52A1\u5668\u6765\u51B3\u5B9A\uFF1B</li><li${_scopeId}>\u6700\u5E38\u7528\u7684\u8BF7\u6C42\u65B9\u6CD5\u662F GET \u548C POST\uFF0C\u5206\u522B\u662F\u83B7\u53D6\u6570\u636E\u548C\u53D1\u9001\u6570\u636E\uFF1B</li><li${_scopeId}>HEAD \u65B9\u6CD5\u662F\u8F7B\u91CF\u7EA7\u7684 GET\uFF0C\u7528\u6765\u83B7\u53D6\u8D44\u6E90\u7684\u5143\u4FE1\u606F\uFF1B</li><li${_scopeId}>PUT \u57FA\u672C\u4E0A\u662F POST \u7684\u540C\u4E49\u8BCD\uFF0C\u591A\u7528\u4E8E\u66F4\u65B0\u6570\u636E\uFF1B</li><li${_scopeId}>\u201C\u5B89\u5168\u201D\u4E0E\u201C\u5E42\u7B49\u201D\u662F\u63CF\u8FF0\u8BF7\u6C42\u65B9\u6CD5\u7684\u4E24\u4E2A\u91CD\u8981\u5C5E\u6027\uFF0C\u5177\u6709\u7406\u8BBA\u6307\u5BFC\u610F\u4E49\uFF0C\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u8BBE\u8BA1\u7CFB\u7EDF\u3002</li></ol><h2 id="\u6807\u51C6\u7684\u8BF7\u6C42\u65B9\u6CD5" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u6807\u51C6\u7684\u8BF7\u6C42\u65B9\u6CD5" aria-hidden="true"${_scopeId}>#</a> \u6807\u51C6\u7684\u8BF7\u6C42\u65B9\u6CD5</h2><p${_scopeId}>\u76EE\u524D HTTP/1.1 \u89C4\u5B9A\u4E86\u516B\u79CD\u65B9\u6CD5\uFF0C\u5355\u8BCD\u90FD\u5FC5\u987B\u662F\u5927\u5199\u7684\u5F62\u5F0F\uFF0C\u6211\u5148\u7B80\u5355\u5730\u5217\u628A\u5B83\u4EEC\u5217\u51FA\u6765\uFF0C\u540E\u9762\u518D\u8BE6\u7EC6\u8BB2\u89E3\u3002</p><ol${_scopeId}><li${_scopeId}>GET\uFF1A\u83B7\u53D6\u8D44\u6E90\uFF0C\u53EF\u4EE5\u7406\u89E3\u4E3A\u8BFB\u53D6\u6216\u8005\u4E0B\u8F7D\u6570\u636E\uFF1B</li><li${_scopeId}>HEAD\uFF1A\u83B7\u53D6\u8D44\u6E90\u7684\u5143\u4FE1\u606F\uFF1B</li><li${_scopeId}>POST\uFF1A\u5411\u8D44\u6E90\u63D0\u4EA4\u6570\u636E\uFF0C\u76F8\u5F53\u4E8E\u5199\u5165\u6216\u4E0A\u4F20\u6570\u636E\uFF1B</li><li${_scopeId}>PUT\uFF1A\u7C7B\u4F3C POST\uFF1B</li><li${_scopeId}>DELETE\uFF1A\u5220\u9664\u8D44\u6E90\uFF1B</li><li${_scopeId}>CONNECT\uFF1A\u5EFA\u7ACB\u7279\u6B8A\u7684\u8FDE\u63A5\u96A7\u9053\uFF1B</li><li${_scopeId}>OPTIONS\uFF1A\u5217\u51FA\u53EF\u5BF9\u8D44\u6E90\u5B9E\u884C\u7684\u65B9\u6CD5\uFF1B</li><li${_scopeId}>TRACE\uFF1A\u8FFD\u8E2A\u8BF7\u6C42 - \u54CD\u5E94\u7684\u4F20\u8F93\u8DEF\u5F84\u3002</li></ol></div>`);
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
                  vue.createVNode("li", null, "\u8BF7\u6C42\u65B9\u6CD5\u662F\u5BA2\u6237\u7AEF\u53D1\u51FA\u7684\u3001\u8981\u6C42\u670D\u52A1\u5668\u6267\u884C\u7684\u3001\u5BF9\u8D44\u6E90\u7684\u4E00\u79CD\u64CD\u4F5C\uFF1B"),
                  vue.createVNode("li", null, "\u8BF7\u6C42\u65B9\u6CD5\u662F\u5BF9\u670D\u52A1\u5668\u7684\u201C\u6307\u793A\u201D\uFF0C\u771F\u6B63\u5E94\u5982\u4F55\u5904\u7406\u7531\u670D\u52A1\u5668\u6765\u51B3\u5B9A\uFF1B"),
                  vue.createVNode("li", null, "\u6700\u5E38\u7528\u7684\u8BF7\u6C42\u65B9\u6CD5\u662F GET \u548C POST\uFF0C\u5206\u522B\u662F\u83B7\u53D6\u6570\u636E\u548C\u53D1\u9001\u6570\u636E\uFF1B"),
                  vue.createVNode("li", null, "HEAD \u65B9\u6CD5\u662F\u8F7B\u91CF\u7EA7\u7684 GET\uFF0C\u7528\u6765\u83B7\u53D6\u8D44\u6E90\u7684\u5143\u4FE1\u606F\uFF1B"),
                  vue.createVNode("li", null, "PUT \u57FA\u672C\u4E0A\u662F POST \u7684\u540C\u4E49\u8BCD\uFF0C\u591A\u7528\u4E8E\u66F4\u65B0\u6570\u636E\uFF1B"),
                  vue.createVNode("li", null, "\u201C\u5B89\u5168\u201D\u4E0E\u201C\u5E42\u7B49\u201D\u662F\u63CF\u8FF0\u8BF7\u6C42\u65B9\u6CD5\u7684\u4E24\u4E2A\u91CD\u8981\u5C5E\u6027\uFF0C\u5177\u6709\u7406\u8BBA\u6307\u5BFC\u610F\u4E49\uFF0C\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u8BBE\u8BA1\u7CFB\u7EDF\u3002")
                ]),
                vue.createVNode("h2", {
                  id: "\u6807\u51C6\u7684\u8BF7\u6C42\u65B9\u6CD5",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u6807\u51C6\u7684\u8BF7\u6C42\u65B9\u6CD5",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u6807\u51C6\u7684\u8BF7\u6C42\u65B9\u6CD5")
                ]),
                vue.createVNode("p", null, "\u76EE\u524D HTTP/1.1 \u89C4\u5B9A\u4E86\u516B\u79CD\u65B9\u6CD5\uFF0C\u5355\u8BCD\u90FD\u5FC5\u987B\u662F\u5927\u5199\u7684\u5F62\u5F0F\uFF0C\u6211\u5148\u7B80\u5355\u5730\u5217\u628A\u5B83\u4EEC\u5217\u51FA\u6765\uFF0C\u540E\u9762\u518D\u8BE6\u7EC6\u8BB2\u89E3\u3002"),
                vue.createVNode("ol", null, [
                  vue.createVNode("li", null, "GET\uFF1A\u83B7\u53D6\u8D44\u6E90\uFF0C\u53EF\u4EE5\u7406\u89E3\u4E3A\u8BFB\u53D6\u6216\u8005\u4E0B\u8F7D\u6570\u636E\uFF1B"),
                  vue.createVNode("li", null, "HEAD\uFF1A\u83B7\u53D6\u8D44\u6E90\u7684\u5143\u4FE1\u606F\uFF1B"),
                  vue.createVNode("li", null, "POST\uFF1A\u5411\u8D44\u6E90\u63D0\u4EA4\u6570\u636E\uFF0C\u76F8\u5F53\u4E8E\u5199\u5165\u6216\u4E0A\u4F20\u6570\u636E\uFF1B"),
                  vue.createVNode("li", null, "PUT\uFF1A\u7C7B\u4F3C POST\uFF1B"),
                  vue.createVNode("li", null, "DELETE\uFF1A\u5220\u9664\u8D44\u6E90\uFF1B"),
                  vue.createVNode("li", null, "CONNECT\uFF1A\u5EFA\u7ACB\u7279\u6B8A\u7684\u8FDE\u63A5\u96A7\u9053\uFF1B"),
                  vue.createVNode("li", null, "OPTIONS\uFF1A\u5217\u51FA\u53EF\u5BF9\u8D44\u6E90\u5B9E\u884C\u7684\u65B9\u6CD5\uFF1B"),
                  vue.createVNode("li", null, "TRACE\uFF1A\u8FFD\u8E2A\u8BF7\u6C42 - \u54CD\u5E94\u7684\u4F20\u8F93\u8DEF\u5F84\u3002")
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
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/childPages/http/httpruhelijie.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports["default"] = _sfc_main;
