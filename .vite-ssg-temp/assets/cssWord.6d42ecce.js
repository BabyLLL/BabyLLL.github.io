"use strict";
exports[Symbol.toStringTag] = "Module";
var Blog = require("./Blog.07cdaa72.js");
var CommonList = require("./CommonList.60ab1b5f.js");
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
    const frontmatter = { "title": "CSS\u65B0\u4E16\u754C", "date": "2021-09-06T16:00:00.000Z", "lang": "\u7CFB\u5217", "duration": "10min", "meta": [{ "property": "og:title", "content": "CSS\u65B0\u4E16\u754C" }] };
    expose({ frontmatter });
    const head$1 = { "title": "CSS\u65B0\u4E16\u754C", "meta": [{ "property": "og:title", "content": "CSS\u65B0\u4E16\u754C" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Blog = Blog._sfc_main;
      const _component_CommonList = CommonList._sfc_main;
      _push(serverRenderer.ssrRenderComponent(_component_Blog, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_CommonList, { path: "/childpages/cssword" }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode(_component_CommonList, { path: "/childpages/cssword" })
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
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/posts/cssWord.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports["default"] = _sfc_main;
