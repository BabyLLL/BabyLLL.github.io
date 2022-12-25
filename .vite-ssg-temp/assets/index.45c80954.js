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
    const frontmatter = { "title": "Blog - Promise L", "display": "", "meta": [{ "property": "og:title", "content": "Blog - Promise L" }] };
    expose({ frontmatter });
    const head$1 = { "title": "Blog - Promise L", "meta": [{ "property": "og:title", "content": "Blog - Promise L" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Blog = Blog._sfc_main;
      const _component_CommonList = CommonList._sfc_main;
      _push(serverRenderer.ssrRenderComponent(_component_Blog, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><div class="prose m-auto mb-8 select-none"${_scopeId}><h1 class="mb-0"${_scopeId}> Blog </h1></div>`);
            _push2(serverRenderer.ssrRenderComponent(_component_CommonList, { path: "/posts" }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode("div", { class: "prose m-auto mb-8 select-none" }, [
                  vue.createVNode("h1", { class: "mb-0" }, " Blog ")
                ]),
                vue.createVNode(_component_CommonList, { path: "/posts" })
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
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/posts/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports["default"] = _sfc_main;
