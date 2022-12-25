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
    const frontmatter = { "title": "18 | \u56DB\u901A\u516B\u8FBE\uFF1AHTTP\u7684\u91CD\u5B9A\u5411\u548C\u8DF3\u8F6C", "date": "2021-10-28T16:00:00.000Z", "duration": "10min", "meta": [{ "property": "og:title", "content": "18 | \u56DB\u901A\u516B\u8FBE\uFF1AHTTP\u7684\u91CD\u5B9A\u5411\u548C\u8DF3\u8F6C" }] };
    expose({ frontmatter });
    const head$1 = { "title": "18 | \u56DB\u901A\u516B\u8FBE\uFF1AHTTP\u7684\u91CD\u5B9A\u5411\u548C\u8DF3\u8F6C", "meta": [{ "property": "og:title", "content": "18 | \u56DB\u901A\u516B\u8FBE\uFF1AHTTP\u7684\u91CD\u5B9A\u5411\u548C\u8DF3\u8F6C" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Blog = Blog._sfc_main;
      _push(serverRenderer.ssrRenderComponent(_component_Blog, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><h2 id="\u5F52\u7EB3" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u5F52\u7EB3" aria-hidden="true"${_scopeId}>#</a> \u5F52\u7EB3</h2><ol${_scopeId}><li${_scopeId}>\u91CD\u5B9A\u5411\u662F\u670D\u52A1\u5668\u53D1\u8D77\u7684\u8DF3\u8F6C\uFF0C\u8981\u6C42\u5BA2\u6237\u7AEF\u6539\u7528\u65B0\u7684 URI \u91CD\u65B0\u53D1\u9001\u8BF7\u6C42\uFF0C\u901A\u5E38\u4F1A\u81EA\u52A8\u8FDB\u884C\uFF0C\u7528\u6237\u662F\u65E0\u611F\u77E5\u7684\uFF1B</li><li${_scopeId}>301/302 \u662F\u6700\u5E38\u7528\u7684\u91CD\u5B9A\u5411\u72B6\u6001\u7801\uFF0C\u5206\u522B\u662F\u201C\u6C38\u4E45\u91CD\u5B9A\u5411\u201D\u548C\u201C\u4E34\u65F6\u91CD\u5B9A\u5411\u201D\uFF1B</li><li${_scopeId}>\u54CD\u5E94\u5934\u5B57\u6BB5 Location \u6307\u793A\u4E86\u8981\u8DF3\u8F6C\u7684 URI\uFF0C\u53EF\u4EE5\u7528\u7EDD\u5BF9\u6216\u76F8\u5BF9\u7684\u5F62\u5F0F\uFF1B</li><li${_scopeId}>\u91CD\u5B9A\u5411\u53EF\u4EE5\u628A\u4E00\u4E2A URI \u6307\u5411\u53E6\u4E00\u4E2A URI\uFF0C\u4E5F\u53EF\u4EE5\u628A\u591A\u4E2A URI \u6307\u5411\u540C\u4E00\u4E2A URI\uFF0C\u7528\u9014\u5F88\u591A\uFF1B\u4F7F\u7528\u91CD\u5B9A\u5411\u65F6\u9700\u8981\u5F53\u5FC3\u6027\u80FD\u635F\u8017\uFF0C\u8FD8\u8981\u907F\u514D\u51FA\u73B0\u5FAA\u73AF\u8DF3\u8F6C\u3002</li></ol><p${_scopeId}>\u201CLocation\u201D\u5B57\u6BB5\u5C5E\u4E8E\u54CD\u5E94\u5B57\u6BB5\uFF0C\u5FC5\u987B\u51FA\u73B0\u5728\u54CD\u5E94\u62A5\u6587\u91CC\u3002\u4F46\u53EA\u6709\u914D\u5408 301/302 \u72B6\u6001\u7801\u624D\u6709\u610F\u4E49\uFF0C\u5B83\u6807\u8BB0\u4E86\u670D\u52A1\u5668\u8981\u6C42\u91CD\u5B9A\u5411\u7684 URI\u3002</p><h2 id="\u91CD\u5B9A\u5411\u7684\u76F8\u5173\u95EE\u9898" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u91CD\u5B9A\u5411\u7684\u76F8\u5173\u95EE\u9898" aria-hidden="true"${_scopeId}>#</a> \u91CD\u5B9A\u5411\u7684\u76F8\u5173\u95EE\u9898</h2><ol${_scopeId}><li${_scopeId}>\u6027\u80FD\u635F\u8017 <ul${_scopeId}><li${_scopeId}>\u867D\u7136 301/302 \u62A5\u6587\u5F88\u5C0F\uFF0C\u4F46\u5927\u91CF\u7684\u8DF3\u8F6C\u5BF9\u670D\u52A1\u5668\u7684\u5F71\u54CD\u4E5F\u662F\u4E0D\u53EF\u5FFD\u89C6\u7684\u3002\u7AD9\u5185\u91CD\u5B9A\u5411\u8FD8\u597D\u8BF4\uFF0C\u53EF\u4EE5\u957F\u8FDE\u63A5\u590D\u7528\uFF0C\u7AD9\u5916\u91CD\u5B9A\u5411\u5C31\u8981\u5F00\u4E24\u4E2A\u8FDE\u63A5\uFF0C\u5982\u679C\u7F51\u7EDC\u8FDE\u63A5\u8D28\u91CF\u5DEE\uFF0C\u90A3\u6210\u672C\u53EF\u5C31\u9AD8\u591A\u4E86\uFF0C\u4F1A\u4E25\u91CD\u5F71\u54CD\u7528\u6237\u7684\u4F53\u9A8C\u3002</li></ul></li><li${_scopeId}>\u5FAA\u73AF\u8DF3\u8F6C <ul${_scopeId}><li${_scopeId}>\u5982\u679C\u91CD\u5B9A\u5411\u7684\u7B56\u7565\u8BBE\u7F6E\u6B20\u8003\u8651\uFF0C\u53EF\u80FD\u4F1A\u51FA\u73B0\u201CA=&gt;B=&gt;C=&gt;A\u201D\u7684\u65E0\u9650\u5FAA\u73AF\uFF0C\u4E0D\u505C\u5730\u5728\u8FD9\u4E2A\u94FE\u8DEF\u91CC\u8F6C\u5708\u5708\uFF0C\u540E\u679C\u53EF\u60F3\u800C\u77E5\u3002</li></ul></li></ol></div>`);
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
                  vue.createVNode("li", null, "\u91CD\u5B9A\u5411\u662F\u670D\u52A1\u5668\u53D1\u8D77\u7684\u8DF3\u8F6C\uFF0C\u8981\u6C42\u5BA2\u6237\u7AEF\u6539\u7528\u65B0\u7684 URI \u91CD\u65B0\u53D1\u9001\u8BF7\u6C42\uFF0C\u901A\u5E38\u4F1A\u81EA\u52A8\u8FDB\u884C\uFF0C\u7528\u6237\u662F\u65E0\u611F\u77E5\u7684\uFF1B"),
                  vue.createVNode("li", null, "301/302 \u662F\u6700\u5E38\u7528\u7684\u91CD\u5B9A\u5411\u72B6\u6001\u7801\uFF0C\u5206\u522B\u662F\u201C\u6C38\u4E45\u91CD\u5B9A\u5411\u201D\u548C\u201C\u4E34\u65F6\u91CD\u5B9A\u5411\u201D\uFF1B"),
                  vue.createVNode("li", null, "\u54CD\u5E94\u5934\u5B57\u6BB5 Location \u6307\u793A\u4E86\u8981\u8DF3\u8F6C\u7684 URI\uFF0C\u53EF\u4EE5\u7528\u7EDD\u5BF9\u6216\u76F8\u5BF9\u7684\u5F62\u5F0F\uFF1B"),
                  vue.createVNode("li", null, "\u91CD\u5B9A\u5411\u53EF\u4EE5\u628A\u4E00\u4E2A URI \u6307\u5411\u53E6\u4E00\u4E2A URI\uFF0C\u4E5F\u53EF\u4EE5\u628A\u591A\u4E2A URI \u6307\u5411\u540C\u4E00\u4E2A URI\uFF0C\u7528\u9014\u5F88\u591A\uFF1B\u4F7F\u7528\u91CD\u5B9A\u5411\u65F6\u9700\u8981\u5F53\u5FC3\u6027\u80FD\u635F\u8017\uFF0C\u8FD8\u8981\u907F\u514D\u51FA\u73B0\u5FAA\u73AF\u8DF3\u8F6C\u3002")
                ]),
                vue.createVNode("p", null, "\u201CLocation\u201D\u5B57\u6BB5\u5C5E\u4E8E\u54CD\u5E94\u5B57\u6BB5\uFF0C\u5FC5\u987B\u51FA\u73B0\u5728\u54CD\u5E94\u62A5\u6587\u91CC\u3002\u4F46\u53EA\u6709\u914D\u5408 301/302 \u72B6\u6001\u7801\u624D\u6709\u610F\u4E49\uFF0C\u5B83\u6807\u8BB0\u4E86\u670D\u52A1\u5668\u8981\u6C42\u91CD\u5B9A\u5411\u7684 URI\u3002"),
                vue.createVNode("h2", {
                  id: "\u91CD\u5B9A\u5411\u7684\u76F8\u5173\u95EE\u9898",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u91CD\u5B9A\u5411\u7684\u76F8\u5173\u95EE\u9898",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u91CD\u5B9A\u5411\u7684\u76F8\u5173\u95EE\u9898")
                ]),
                vue.createVNode("ol", null, [
                  vue.createVNode("li", null, [
                    vue.createTextVNode("\u6027\u80FD\u635F\u8017 "),
                    vue.createVNode("ul", null, [
                      vue.createVNode("li", null, "\u867D\u7136 301/302 \u62A5\u6587\u5F88\u5C0F\uFF0C\u4F46\u5927\u91CF\u7684\u8DF3\u8F6C\u5BF9\u670D\u52A1\u5668\u7684\u5F71\u54CD\u4E5F\u662F\u4E0D\u53EF\u5FFD\u89C6\u7684\u3002\u7AD9\u5185\u91CD\u5B9A\u5411\u8FD8\u597D\u8BF4\uFF0C\u53EF\u4EE5\u957F\u8FDE\u63A5\u590D\u7528\uFF0C\u7AD9\u5916\u91CD\u5B9A\u5411\u5C31\u8981\u5F00\u4E24\u4E2A\u8FDE\u63A5\uFF0C\u5982\u679C\u7F51\u7EDC\u8FDE\u63A5\u8D28\u91CF\u5DEE\uFF0C\u90A3\u6210\u672C\u53EF\u5C31\u9AD8\u591A\u4E86\uFF0C\u4F1A\u4E25\u91CD\u5F71\u54CD\u7528\u6237\u7684\u4F53\u9A8C\u3002")
                    ])
                  ]),
                  vue.createVNode("li", null, [
                    vue.createTextVNode("\u5FAA\u73AF\u8DF3\u8F6C "),
                    vue.createVNode("ul", null, [
                      vue.createVNode("li", null, "\u5982\u679C\u91CD\u5B9A\u5411\u7684\u7B56\u7565\u8BBE\u7F6E\u6B20\u8003\u8651\uFF0C\u53EF\u80FD\u4F1A\u51FA\u73B0\u201CA=>B=>C=>A\u201D\u7684\u65E0\u9650\u5FAA\u73AF\uFF0C\u4E0D\u505C\u5730\u5728\u8FD9\u4E2A\u94FE\u8DEF\u91CC\u8F6C\u5708\u5708\uFF0C\u540E\u679C\u53EF\u60F3\u800C\u77E5\u3002")
                    ])
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
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/childPages/http/httpchongdingxiang.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports["default"] = _sfc_main;
