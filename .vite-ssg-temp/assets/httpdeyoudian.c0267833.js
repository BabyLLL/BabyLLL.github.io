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
    const frontmatter = { "title": "14 | HTTP\u6709\u54EA\u4E9B\u4F18\u70B9\uFF1F\u53C8\u6709\u54EA\u4E9B\u7F3A\u70B9\uFF1F", "date": "2021-10-22T16:00:00.000Z", "duration": "10min", "meta": [{ "property": "og:title", "content": "14 | HTTP\u6709\u54EA\u4E9B\u4F18\u70B9\uFF1F\u53C8\u6709\u54EA\u4E9B\u7F3A\u70B9\uFF1F" }] };
    expose({ frontmatter });
    const head$1 = { "title": "14 | HTTP\u6709\u54EA\u4E9B\u4F18\u70B9\uFF1F\u53C8\u6709\u54EA\u4E9B\u7F3A\u70B9\uFF1F", "meta": [{ "property": "og:title", "content": "14 | HTTP\u6709\u54EA\u4E9B\u4F18\u70B9\uFF1F\u53C8\u6709\u54EA\u4E9B\u7F3A\u70B9\uFF1F" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Blog = Blog._sfc_main;
      _push(serverRenderer.ssrRenderComponent(_component_Blog, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><h2 id="\u5F52\u7EB3" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u5F52\u7EB3" aria-hidden="true"${_scopeId}>#</a> \u5F52\u7EB3</h2><ol${_scopeId}><li${_scopeId}>HTTP \u6700\u5927\u7684\u4F18\u70B9\u662F\u7B80\u5355\u3001\u7075\u6D3B\u548C\u6613\u4E8E\u6269\u5C55\uFF1B</li><li${_scopeId}>HTTP \u62E5\u6709\u6210\u719F\u7684\u8F6F\u786C\u4EF6\u73AF\u5883\uFF0C\u5E94\u7528\u7684\u975E\u5E38\u5E7F\u6CDB\uFF0C\u662F\u4E92\u8054\u7F51\u7684\u57FA\u7840\u8BBE\u65BD\uFF1B</li><li${_scopeId}>HTTP \u662F\u65E0\u72B6\u6001\u7684\uFF0C\u53EF\u4EE5\u8F7B\u677E\u5B9E\u73B0\u96C6\u7FA4\u5316\uFF0C\u6269\u5C55\u6027\u80FD\uFF0C\u4F46\u6709\u65F6\u4E5F\u9700\u8981\u7528 Cookie \u6280\u672F\u6765\u5B9E\u73B0\u201C\u6709\u72B6\u6001\u201D\uFF1B</li><li${_scopeId}>HTTP \u662F\u660E\u6587\u4F20\u8F93\uFF0C\u6570\u636E\u5B8C\u5168\u8089\u773C\u53EF\u89C1\uFF0C\u80FD\u591F\u65B9\u4FBF\u5730\u7814\u7A76\u5206\u6790\uFF0C\u4F46\u4E5F\u5BB9\u6613\u88AB\u7A83\u542C\uFF1B</li><li${_scopeId}>HTTP \u662F\u4E0D\u5B89\u5168\u7684\uFF0C\u65E0\u6CD5\u9A8C\u8BC1\u901A\u4FE1\u53CC\u65B9\u7684\u8EAB\u4EFD\uFF0C\u4E5F\u4E0D\u80FD\u5224\u65AD\u62A5\u6587\u662F\u5426\u88AB\u7A9C\u6539\uFF1B</li><li${_scopeId}>HTTP \u7684\u6027\u80FD\u4E0D\u7B97\u5DEE\uFF0C\u4F46\u4E0D\u5B8C\u5168\u9002\u5E94\u73B0\u5728\u7684\u4E92\u8054\u7F51\uFF0C\u8FD8\u6709\u5F88\u5927\u7684\u63D0\u5347\u7A7A\u95F4</li></ol><h2 id="\u7B80\u5355\u3001\u7075\u6D3B\u3001\u6613\u4E8E\u6269\u5C55" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u7B80\u5355\u3001\u7075\u6D3B\u3001\u6613\u4E8E\u6269\u5C55" aria-hidden="true"${_scopeId}>#</a> \u7B80\u5355\u3001\u7075\u6D3B\u3001\u6613\u4E8E\u6269\u5C55</h2><p${_scopeId}>HTTP \u6700\u91CD\u8981\u4E5F\u662F\u6700\u7A81\u51FA\u7684\u4F18\u70B9\u662F\u201C\u7B80\u5355\u3001\u7075\u6D3B\u3001\u6613\u4E8E\u6269\u5C55\u201D\u3002</p><h2 id="\u5E94\u7528\u5E7F\u6CDB\uFF0C\u73AF\u5883\u6210\u719F" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u5E94\u7528\u5E7F\u6CDB\uFF0C\u73AF\u5883\u6210\u719F" aria-hidden="true"${_scopeId}>#</a> \u5E94\u7528\u5E7F\u6CDB\uFF0C\u73AF\u5883\u6210\u719F</h2><p${_scopeId}>\u4E0D\u4EC5\u5728\u5E94\u7528\u9886\u57DF\uFF0C\u5728\u5F00\u53D1\u9886\u57DF HTTP \u534F\u8BAE\u4E5F\u5F97\u5230\u4E86\u5E7F\u6CDB\u7684\u652F\u6301\u3002\u5B83\u5E76\u4E0D\u9650\u5B9A\u67D0\u79CD\u7F16\u7A0B\u8BED\u8A00\u6216\u8005\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u6240\u4EE5\u5929\u7136\u5177\u6709\u201C\u8DE8\u8BED\u8A00\u3001\u8DE8\u5E73\u53F0\u201D\u7684\u4F18\u8D8A\u6027\u3002\u800C\u4E14\uFF0C\u56E0\u4E3A\u672C\u8EAB\u7684\u7B80\u5355\u7279\u6027\u5F88\u5BB9\u6613\u5B9E\u73B0\uFF0C\u6240\u4EE5\u51E0\u4E4E\u6240\u6709\u7684\u7F16\u7A0B\u8BED\u8A00\u90FD\u6709 HTTP \u8C03\u7528\u5E93\u548C\u5916\u56F4\u7684\u5F00\u53D1\u6D4B\u8BD5\u5DE5\u5177\uFF0C\u8FD9\u4E00\u70B9\u6211\u89C9\u5F97\u5C31\u4E0D\u7528\u518D\u4E3E\u4F8B\u4E86\u5427\uFF0C\u4F60\u53EF\u80FD\u6BD4\u6211\u66F4\u719F\u6089\u3002</p></div>`);
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
                  vue.createVNode("li", null, "HTTP \u6700\u5927\u7684\u4F18\u70B9\u662F\u7B80\u5355\u3001\u7075\u6D3B\u548C\u6613\u4E8E\u6269\u5C55\uFF1B"),
                  vue.createVNode("li", null, "HTTP \u62E5\u6709\u6210\u719F\u7684\u8F6F\u786C\u4EF6\u73AF\u5883\uFF0C\u5E94\u7528\u7684\u975E\u5E38\u5E7F\u6CDB\uFF0C\u662F\u4E92\u8054\u7F51\u7684\u57FA\u7840\u8BBE\u65BD\uFF1B"),
                  vue.createVNode("li", null, "HTTP \u662F\u65E0\u72B6\u6001\u7684\uFF0C\u53EF\u4EE5\u8F7B\u677E\u5B9E\u73B0\u96C6\u7FA4\u5316\uFF0C\u6269\u5C55\u6027\u80FD\uFF0C\u4F46\u6709\u65F6\u4E5F\u9700\u8981\u7528 Cookie \u6280\u672F\u6765\u5B9E\u73B0\u201C\u6709\u72B6\u6001\u201D\uFF1B"),
                  vue.createVNode("li", null, "HTTP \u662F\u660E\u6587\u4F20\u8F93\uFF0C\u6570\u636E\u5B8C\u5168\u8089\u773C\u53EF\u89C1\uFF0C\u80FD\u591F\u65B9\u4FBF\u5730\u7814\u7A76\u5206\u6790\uFF0C\u4F46\u4E5F\u5BB9\u6613\u88AB\u7A83\u542C\uFF1B"),
                  vue.createVNode("li", null, "HTTP \u662F\u4E0D\u5B89\u5168\u7684\uFF0C\u65E0\u6CD5\u9A8C\u8BC1\u901A\u4FE1\u53CC\u65B9\u7684\u8EAB\u4EFD\uFF0C\u4E5F\u4E0D\u80FD\u5224\u65AD\u62A5\u6587\u662F\u5426\u88AB\u7A9C\u6539\uFF1B"),
                  vue.createVNode("li", null, "HTTP \u7684\u6027\u80FD\u4E0D\u7B97\u5DEE\uFF0C\u4F46\u4E0D\u5B8C\u5168\u9002\u5E94\u73B0\u5728\u7684\u4E92\u8054\u7F51\uFF0C\u8FD8\u6709\u5F88\u5927\u7684\u63D0\u5347\u7A7A\u95F4")
                ]),
                vue.createVNode("h2", {
                  id: "\u7B80\u5355\u3001\u7075\u6D3B\u3001\u6613\u4E8E\u6269\u5C55",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u7B80\u5355\u3001\u7075\u6D3B\u3001\u6613\u4E8E\u6269\u5C55",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u7B80\u5355\u3001\u7075\u6D3B\u3001\u6613\u4E8E\u6269\u5C55")
                ]),
                vue.createVNode("p", null, "HTTP \u6700\u91CD\u8981\u4E5F\u662F\u6700\u7A81\u51FA\u7684\u4F18\u70B9\u662F\u201C\u7B80\u5355\u3001\u7075\u6D3B\u3001\u6613\u4E8E\u6269\u5C55\u201D\u3002"),
                vue.createVNode("h2", {
                  id: "\u5E94\u7528\u5E7F\u6CDB\uFF0C\u73AF\u5883\u6210\u719F",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u5E94\u7528\u5E7F\u6CDB\uFF0C\u73AF\u5883\u6210\u719F",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u5E94\u7528\u5E7F\u6CDB\uFF0C\u73AF\u5883\u6210\u719F")
                ]),
                vue.createVNode("p", null, "\u4E0D\u4EC5\u5728\u5E94\u7528\u9886\u57DF\uFF0C\u5728\u5F00\u53D1\u9886\u57DF HTTP \u534F\u8BAE\u4E5F\u5F97\u5230\u4E86\u5E7F\u6CDB\u7684\u652F\u6301\u3002\u5B83\u5E76\u4E0D\u9650\u5B9A\u67D0\u79CD\u7F16\u7A0B\u8BED\u8A00\u6216\u8005\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u6240\u4EE5\u5929\u7136\u5177\u6709\u201C\u8DE8\u8BED\u8A00\u3001\u8DE8\u5E73\u53F0\u201D\u7684\u4F18\u8D8A\u6027\u3002\u800C\u4E14\uFF0C\u56E0\u4E3A\u672C\u8EAB\u7684\u7B80\u5355\u7279\u6027\u5F88\u5BB9\u6613\u5B9E\u73B0\uFF0C\u6240\u4EE5\u51E0\u4E4E\u6240\u6709\u7684\u7F16\u7A0B\u8BED\u8A00\u90FD\u6709 HTTP \u8C03\u7528\u5E93\u548C\u5916\u56F4\u7684\u5F00\u53D1\u6D4B\u8BD5\u5DE5\u5177\uFF0C\u8FD9\u4E00\u70B9\u6211\u89C9\u5F97\u5C31\u4E0D\u7528\u518D\u4E3E\u4F8B\u4E86\u5427\uFF0C\u4F60\u53EF\u80FD\u6BD4\u6211\u66F4\u719F\u6089\u3002")
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
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/childPages/http/httpdeyoudian.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports["default"] = _sfc_main;
