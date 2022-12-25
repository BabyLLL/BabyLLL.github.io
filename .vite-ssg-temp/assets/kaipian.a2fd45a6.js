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
    const frontmatter = { "title": "\u5F00\u7BC7\u8BCD\uFF5CTo Be a HTTP Hero", "date": "2021-09-06T16:00:00.000Z", "lang": "start", "duration": "10min", "meta": [{ "property": "og:title", "content": "\u5F00\u7BC7\u8BCD\uFF5CTo Be a HTTP Hero" }] };
    expose({ frontmatter });
    const head$1 = { "title": "\u5F00\u7BC7\u8BCD\uFF5CTo Be a HTTP Hero", "meta": [{ "property": "og:title", "content": "\u5F00\u7BC7\u8BCD\uFF5CTo Be a HTTP Hero" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Blog = Blog._sfc_main;
      _push(serverRenderer.ssrRenderComponent(_component_Blog, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><h2 id="\u5F52\u7EB3\u5B66\u4E60http\u7684\u73B0\u72B6" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u5F52\u7EB3\u5B66\u4E60http\u7684\u73B0\u72B6" aria-hidden="true"${_scopeId}>#</a> \u5F52\u7EB3\u5B66\u4E60HTTP\u7684\u73B0\u72B6</h2><ul${_scopeId}><li${_scopeId}>\u6B63\u5F0F\u8D44\u6599&quot;\u5C11&quot;</li><li${_scopeId}>\u7F51\u4E0A\u8D44\u6599&quot;\u6742&quot;</li><li${_scopeId}>\u6743\u5A01\u8D44\u6599&quot;\u96BE&quot;</li></ul><h3 id="\u5C11" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u5C11" aria-hidden="true"${_scopeId}>#</a> \u5C11</h3><p${_scopeId}>\u73B0\u6709\u7684 HTTP \u76F8\u5173\u56FE\u4E66\u6211\u90FD\u770B\u8FC7\uFF0C\u600E\u4E48\u8BF4\u5462\uFF0C\u5B83\u4EEC\u90FD\u6709\u4E00\u4E2A\u7279\u70B9\uFF0C\u201C\u5E7F\u6492\u7F51\uFF0C\u6355\u5C0F\u9C7C\u201D\uFF0C\u90FD\u662F\u77E5\u8BC6\u70B9\uFF0C\u53EF\u672A\u514D\u592A\u201C\u7167\u672C\u5BA3\u79D1\u201D\u4E86\uFF0C\u7406\u8BBA\u6709\u4F59\u5B9E\u8DF5\u4E0D\u8DB3\uFF0C\u770B\u5B8C\u4E86\u8FD8\u662F\u4E0D\u77E5\u9053\u600E\u4E48\u53BB\u7528\u3002</p><h3 id="\u6742" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u6742" aria-hidden="true"${_scopeId}>#</a> \u6742</h3><p${_scopeId}>\u7F51\u4E0A\u6587\u7AE0\u7684\u7279\u70B9\u662F\u7EC6\u5C0F\u3001\u96F6\u788E\uFF0C\u901A\u5E38\u53EA\u201C\u9489\u201D\u5728\u4E00\u4E2A\u5F88\u5C0F\u7684\u77E5\u8BC6\u70B9\u4E0A\uFF0C\u800C\u4E14\u7531\u4E8E\u5E16\u5B50\u957F\u5EA6\u7684\u9650\u5236\uFF0C\u65E0\u6CD5\u6DF1\u5165\u5C55\u5F00\u8BBA\u8FF0\uFF0C\u5F88\u591A\u90FD\u662F\u201C\u6D45\u5C1D\u8F84\u6B62\u201D\uFF0C\u901A\u5E38\u90FD\u6B62\u6B65\u5728\u201CHow\u201D\u5C42\u6B21\uFF0C\u5F88\u5C11\u80FD\u8BF4\u5230\u201CWhy\u201D\uFF0C\u80FD\u8BF4\u900F\u7684\u66F4\u662F\u5BE5\u5BE5\u65E0\u51E0\u3002</p><h3 id="\u96BE" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u96BE" aria-hidden="true"${_scopeId}>#</a> \u96BE</h3><p${_scopeId}>RFC \u662F\u4E92\u8054\u7F51\u5DE5\u7A0B\u7EC4\uFF08IETF\uFF09\u53D1\u5E03\u7684\u5B98\u65B9\u6587\u4EF6\uFF0C\u662F\u5BF9 HTTP \u6700\u6743\u5A01\u7684\u5B9A\u4E49\u548C\u89E3\u91CA\u3002\u4F46\u5B83\u4E5F\u662F\u6700\u96BE\u61C2\u7684\uFF0C\u5168\u82F1\u6587\u770B\u7740\u8D39\u52B2\uFF0C\u7406\u89E3\u8D77\u6765\u66F4\u662F\u96BE\u4E0A\u52A0\u96BE\uFF0C\u6587\u6863\u4E4B\u95F4\u8FD8\u4F1A\u4E92\u76F8\u5173\u8054\u5F15\u7528\uFF0C\u201C\u529D\u9000\u7387\u201D\u6781\u9AD8\u3002</p></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode("h2", {
                  id: "\u5F52\u7EB3\u5B66\u4E60http\u7684\u73B0\u72B6",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u5F52\u7EB3\u5B66\u4E60http\u7684\u73B0\u72B6",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u5F52\u7EB3\u5B66\u4E60HTTP\u7684\u73B0\u72B6")
                ]),
                vue.createVNode("ul", null, [
                  vue.createVNode("li", null, '\u6B63\u5F0F\u8D44\u6599"\u5C11"'),
                  vue.createVNode("li", null, '\u7F51\u4E0A\u8D44\u6599"\u6742"'),
                  vue.createVNode("li", null, '\u6743\u5A01\u8D44\u6599"\u96BE"')
                ]),
                vue.createVNode("h3", {
                  id: "\u5C11",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u5C11",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u5C11")
                ]),
                vue.createVNode("p", null, "\u73B0\u6709\u7684 HTTP \u76F8\u5173\u56FE\u4E66\u6211\u90FD\u770B\u8FC7\uFF0C\u600E\u4E48\u8BF4\u5462\uFF0C\u5B83\u4EEC\u90FD\u6709\u4E00\u4E2A\u7279\u70B9\uFF0C\u201C\u5E7F\u6492\u7F51\uFF0C\u6355\u5C0F\u9C7C\u201D\uFF0C\u90FD\u662F\u77E5\u8BC6\u70B9\uFF0C\u53EF\u672A\u514D\u592A\u201C\u7167\u672C\u5BA3\u79D1\u201D\u4E86\uFF0C\u7406\u8BBA\u6709\u4F59\u5B9E\u8DF5\u4E0D\u8DB3\uFF0C\u770B\u5B8C\u4E86\u8FD8\u662F\u4E0D\u77E5\u9053\u600E\u4E48\u53BB\u7528\u3002"),
                vue.createVNode("h3", {
                  id: "\u6742",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u6742",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u6742")
                ]),
                vue.createVNode("p", null, "\u7F51\u4E0A\u6587\u7AE0\u7684\u7279\u70B9\u662F\u7EC6\u5C0F\u3001\u96F6\u788E\uFF0C\u901A\u5E38\u53EA\u201C\u9489\u201D\u5728\u4E00\u4E2A\u5F88\u5C0F\u7684\u77E5\u8BC6\u70B9\u4E0A\uFF0C\u800C\u4E14\u7531\u4E8E\u5E16\u5B50\u957F\u5EA6\u7684\u9650\u5236\uFF0C\u65E0\u6CD5\u6DF1\u5165\u5C55\u5F00\u8BBA\u8FF0\uFF0C\u5F88\u591A\u90FD\u662F\u201C\u6D45\u5C1D\u8F84\u6B62\u201D\uFF0C\u901A\u5E38\u90FD\u6B62\u6B65\u5728\u201CHow\u201D\u5C42\u6B21\uFF0C\u5F88\u5C11\u80FD\u8BF4\u5230\u201CWhy\u201D\uFF0C\u80FD\u8BF4\u900F\u7684\u66F4\u662F\u5BE5\u5BE5\u65E0\u51E0\u3002"),
                vue.createVNode("h3", {
                  id: "\u96BE",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u96BE",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u96BE")
                ]),
                vue.createVNode("p", null, "RFC \u662F\u4E92\u8054\u7F51\u5DE5\u7A0B\u7EC4\uFF08IETF\uFF09\u53D1\u5E03\u7684\u5B98\u65B9\u6587\u4EF6\uFF0C\u662F\u5BF9 HTTP \u6700\u6743\u5A01\u7684\u5B9A\u4E49\u548C\u89E3\u91CA\u3002\u4F46\u5B83\u4E5F\u662F\u6700\u96BE\u61C2\u7684\uFF0C\u5168\u82F1\u6587\u770B\u7740\u8D39\u52B2\uFF0C\u7406\u89E3\u8D77\u6765\u66F4\u662F\u96BE\u4E0A\u52A0\u96BE\uFF0C\u6587\u6863\u4E4B\u95F4\u8FD8\u4F1A\u4E92\u76F8\u5173\u8054\u5F15\u7528\uFF0C\u201C\u529D\u9000\u7387\u201D\u6781\u9AD8\u3002")
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
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/childPages/http/kaipian.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports["default"] = _sfc_main;
