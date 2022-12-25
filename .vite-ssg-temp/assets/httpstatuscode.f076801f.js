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
    const frontmatter = { "title": "12 | \u54CD\u5E94\u72B6\u6001\u7801\u8BE5\u600E\u4E48\u7528\uFF1F", "date": "2021-10-10T16:00:00.000Z", "duration": "10min", "meta": [{ "property": "og:title", "content": "12 | \u54CD\u5E94\u72B6\u6001\u7801\u8BE5\u600E\u4E48\u7528\uFF1F" }] };
    expose({ frontmatter });
    const head$1 = { "title": "12 | \u54CD\u5E94\u72B6\u6001\u7801\u8BE5\u600E\u4E48\u7528\uFF1F", "meta": [{ "property": "og:title", "content": "12 | \u54CD\u5E94\u72B6\u6001\u7801\u8BE5\u600E\u4E48\u7528\uFF1F" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Blog = Blog._sfc_main;
      _push(serverRenderer.ssrRenderComponent(_component_Blog, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><h2 id="\u5F52\u7EB3" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u5F52\u7EB3" aria-hidden="true"${_scopeId}>#</a> \u5F52\u7EB3</h2><ol${_scopeId}><li${_scopeId}>\u72B6\u6001\u7801\u5728\u54CD\u5E94\u62A5\u6587\u91CC\u8868\u793A\u4E86\u670D\u52A1\u5668\u5BF9\u8BF7\u6C42\u7684\u5904\u7406\u7ED3\u679C\uFF1B</li><li${_scopeId}>\u72B6\u6001\u7801\u540E\u7684\u539F\u56E0\u77ED\u8BED\u662F\u7B80\u5355\u7684\u6587\u5B57\u63CF\u8FF0\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\uFF1B</li><li${_scopeId}>\u72B6\u6001\u7801\u662F\u5341\u8FDB\u5236\u7684\u4E09\u4F4D\u6570\uFF0C\u5206\u4E3A\u4E94\u7C7B\uFF0C\u4ECE 100 \u5230 599\uFF1B</li><li${_scopeId}>2\xD7\xD7\u7C7B\u72B6\u6001\u7801\u8868\u793A\u6210\u529F\uFF0C\u5E38\u7528\u7684\u6709 200\u3001204\u3001206\uFF1B</li><li${_scopeId}>3\xD7\xD7\u7C7B\u72B6\u6001\u7801\u8868\u793A\u91CD\u5B9A\u5411\uFF0C\u5E38\u7528\u7684\u6709 301\u3001302\u3001304\uFF1B</li><li${_scopeId}>4\xD7\xD7\u7C7B\u72B6\u6001\u7801\u8868\u793A\u5BA2\u6237\u7AEF\u9519\u8BEF\uFF0C\u5E38\u7528\u7684\u6709 400\u3001403\u3001404\uFF1B</li><li${_scopeId}>5\xD7\xD7\u7C7B\u72B6\u6001\u7801\u8868\u793A\u670D\u52A1\u5668\u9519\u8BEF\uFF0C\u5E38\u7528\u7684\u6709 500\u3001501\u3001502\u3001503\u3002</li></ol></div>`);
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
                  vue.createVNode("li", null, "\u72B6\u6001\u7801\u5728\u54CD\u5E94\u62A5\u6587\u91CC\u8868\u793A\u4E86\u670D\u52A1\u5668\u5BF9\u8BF7\u6C42\u7684\u5904\u7406\u7ED3\u679C\uFF1B"),
                  vue.createVNode("li", null, "\u72B6\u6001\u7801\u540E\u7684\u539F\u56E0\u77ED\u8BED\u662F\u7B80\u5355\u7684\u6587\u5B57\u63CF\u8FF0\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\uFF1B"),
                  vue.createVNode("li", null, "\u72B6\u6001\u7801\u662F\u5341\u8FDB\u5236\u7684\u4E09\u4F4D\u6570\uFF0C\u5206\u4E3A\u4E94\u7C7B\uFF0C\u4ECE 100 \u5230 599\uFF1B"),
                  vue.createVNode("li", null, "2\xD7\xD7\u7C7B\u72B6\u6001\u7801\u8868\u793A\u6210\u529F\uFF0C\u5E38\u7528\u7684\u6709 200\u3001204\u3001206\uFF1B"),
                  vue.createVNode("li", null, "3\xD7\xD7\u7C7B\u72B6\u6001\u7801\u8868\u793A\u91CD\u5B9A\u5411\uFF0C\u5E38\u7528\u7684\u6709 301\u3001302\u3001304\uFF1B"),
                  vue.createVNode("li", null, "4\xD7\xD7\u7C7B\u72B6\u6001\u7801\u8868\u793A\u5BA2\u6237\u7AEF\u9519\u8BEF\uFF0C\u5E38\u7528\u7684\u6709 400\u3001403\u3001404\uFF1B"),
                  vue.createVNode("li", null, "5\xD7\xD7\u7C7B\u72B6\u6001\u7801\u8868\u793A\u670D\u52A1\u5668\u9519\u8BEF\uFF0C\u5E38\u7528\u7684\u6709 500\u3001501\u3001502\u3001503\u3002")
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
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/childPages/http/httpstatuscode.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports["default"] = _sfc_main;
