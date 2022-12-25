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
    const frontmatter = { "title": "15 | \u6D77\u7EB3\u767E\u5DDD\uFF1AHTTP\u7684\u5B9E\u4F53\u6570\u636E\uFF1F", "date": "2021-10-23T16:00:00.000Z", "duration": "10min", "meta": [{ "property": "og:title", "content": "15 | \u6D77\u7EB3\u767E\u5DDD\uFF1AHTTP\u7684\u5B9E\u4F53\u6570\u636E\uFF1F" }] };
    expose({ frontmatter });
    const head$1 = { "title": "15 | \u6D77\u7EB3\u767E\u5DDD\uFF1AHTTP\u7684\u5B9E\u4F53\u6570\u636E\uFF1F", "meta": [{ "property": "og:title", "content": "15 | \u6D77\u7EB3\u767E\u5DDD\uFF1AHTTP\u7684\u5B9E\u4F53\u6570\u636E\uFF1F" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Blog = Blog._sfc_main;
      _push(serverRenderer.ssrRenderComponent(_component_Blog, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><h2 id="\u5F52\u7EB3" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u5F52\u7EB3" aria-hidden="true"${_scopeId}>#</a> \u5F52\u7EB3</h2><ol${_scopeId}><li${_scopeId}>\u6570\u636E\u7C7B\u578B\u8868\u793A\u5B9E\u4F53\u6570\u636E\u7684\u5185\u5BB9\u662F\u4EC0\u4E48\uFF0C\u4F7F\u7528\u7684\u662F MIME type\uFF0C\u76F8\u5173\u7684\u5934\u5B57\u6BB5\u662F Accept \u548C Content-Type\uFF1B</li><li${_scopeId}>\u6570\u636E\u7F16\u7801\u8868\u793A\u5B9E\u4F53\u6570\u636E\u7684\u538B\u7F29\u65B9\u5F0F\uFF0C\u76F8\u5173\u7684\u5934\u5B57\u6BB5\u662F Accept-Encoding \u548C Content-Encoding\uFF1B</li><li${_scopeId}>\u8BED\u8A00\u7C7B\u578B\u8868\u793A\u5B9E\u4F53\u6570\u636E\u7684\u81EA\u7136\u8BED\u8A00\uFF0C\u76F8\u5173\u7684\u5934\u5B57\u6BB5\u662F Accept-Language \u548C Content-Language\uFF1B</li><li${_scopeId}>\u5B57\u7B26\u96C6\u8868\u793A\u5B9E\u4F53\u6570\u636E\u7684\u7F16\u7801\u65B9\u5F0F\uFF0C\u76F8\u5173\u7684\u5934\u5B57\u6BB5\u662F Accept-Charset \u548C Content-Type\uFF1B</li><li${_scopeId}>\u5BA2\u6237\u7AEF\u9700\u8981\u5728\u8BF7\u6C42\u5934\u91CC\u4F7F\u7528 Accept \u7B49\u5934\u5B57\u6BB5\u4E0E\u670D\u52A1\u5668\u8FDB\u884C\u201C\u5185\u5BB9\u534F\u5546\u201D\uFF0C\u8981\u6C42\u670D\u52A1\u5668\u8FD4\u56DE\u6700\u5408\u9002\u7684\u6570\u636E\uFF1B</li><li${_scopeId}>Accept \u7B49\u5934\u5B57\u6BB5\u53EF\u4EE5\u7528\u201C,\u201D\u987A\u5E8F\u5217\u51FA\u591A\u4E2A\u53EF\u80FD\u7684\u9009\u9879\uFF0C\u8FD8\u53EF\u4EE5\u7528\u201C;q=\u201D\u53C2\u6570\u6765\u7CBE\u786E\u6307\u5B9A\u6743\u91CD\u3002</li></ol><h2 id="\u6570\u636E\u7C7B\u578B\u4E0E\u7F16\u7801" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u6570\u636E\u7C7B\u578B\u4E0E\u7F16\u7801" aria-hidden="true"${_scopeId}>#</a> \u6570\u636E\u7C7B\u578B\u4E0E\u7F16\u7801</h2><table${_scopeId}><thead${_scopeId}><tr${_scopeId}><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"${_scopeId}>\u5934\u5B57\u6BB5</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"${_scopeId}>\u8BF7\u6C42\u5934</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"${_scopeId}>\u54CD\u5E94\u5934</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"${_scopeId}>\u6570\u636E\u7C7B\u578B</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"${_scopeId}>Accept</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"${_scopeId}>Content-Type</td></tr><tr${_scopeId}><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"${_scopeId}>\u538B\u7F29</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"${_scopeId}>Accept-Encoding</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"${_scopeId}>Content-Encoding</td></tr></tbody></table><h2 id="\u8BED\u8A00\u7C7B\u578B\u4E0E\u7F16\u7801" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u8BED\u8A00\u7C7B\u578B\u4E0E\u7F16\u7801" aria-hidden="true"${_scopeId}>#</a> \u8BED\u8A00\u7C7B\u578B\u4E0E\u7F16\u7801</h2><table${_scopeId}><thead${_scopeId}><tr${_scopeId}><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"${_scopeId}>\u5934\u5B57\u6BB5</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"${_scopeId}>\u8BF7\u6C42\u5934</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"${_scopeId}>\u54CD\u5E94\u5934</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"${_scopeId}>\u8BED\u8A00\u7C7B\u578B</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"${_scopeId}>Accept-Lanuage</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"${_scopeId}>Content-Lanuage</td></tr><tr${_scopeId}><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"${_scopeId}>\u5B57\u7B26\u96C6</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"${_scopeId}>Accept-Charset</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"${_scopeId}>Content-Type</td></tr></tbody></table><p${_scopeId}><img src="https://static001.geekbang.org/resource/image/b2/58/b2118315a977969ddfcc7ab9d26cb358.png" alt=""${_scopeId}></p><h2 id="\u4E2A\u4EBA\u7406\u89E3" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u4E2A\u4EBA\u7406\u89E3" aria-hidden="true"${_scopeId}>#</a> \u4E2A\u4EBA\u7406\u89E3</h2><ol${_scopeId}><li${_scopeId}>Accept: \u8868\u793A\u6D4F\u89C8\u5668\u60F3\u8981\u7684\u6570\u636E\uFF0C\u53EA\u8981\u4F20\u8F93\u5C31\u53EF\u4EE5\u643A\u5E26</li><li${_scopeId}>Content: \u8868\u793A\u5B9E\u4F53\u6570\u636E\uFF0C\u5373\u771F\u5B9E\u4F20\u8F93\u7684\u6570\u636E\uFF0C\u5982\uFF1Abody\u4E2D\u7684\u6570\u636E\uFF0C\u6216\u8005\u670D\u52A1\u5668\u56DE\u4F20\u4EE5\u540E\u7684\u6570\u636E\uFF0Cpost\u4E2D\u6709body\u6240\u4EE5\u4F1A\u7528\u5230</li></ol></div>`);
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
                  vue.createVNode("li", null, "\u6570\u636E\u7C7B\u578B\u8868\u793A\u5B9E\u4F53\u6570\u636E\u7684\u5185\u5BB9\u662F\u4EC0\u4E48\uFF0C\u4F7F\u7528\u7684\u662F MIME type\uFF0C\u76F8\u5173\u7684\u5934\u5B57\u6BB5\u662F Accept \u548C Content-Type\uFF1B"),
                  vue.createVNode("li", null, "\u6570\u636E\u7F16\u7801\u8868\u793A\u5B9E\u4F53\u6570\u636E\u7684\u538B\u7F29\u65B9\u5F0F\uFF0C\u76F8\u5173\u7684\u5934\u5B57\u6BB5\u662F Accept-Encoding \u548C Content-Encoding\uFF1B"),
                  vue.createVNode("li", null, "\u8BED\u8A00\u7C7B\u578B\u8868\u793A\u5B9E\u4F53\u6570\u636E\u7684\u81EA\u7136\u8BED\u8A00\uFF0C\u76F8\u5173\u7684\u5934\u5B57\u6BB5\u662F Accept-Language \u548C Content-Language\uFF1B"),
                  vue.createVNode("li", null, "\u5B57\u7B26\u96C6\u8868\u793A\u5B9E\u4F53\u6570\u636E\u7684\u7F16\u7801\u65B9\u5F0F\uFF0C\u76F8\u5173\u7684\u5934\u5B57\u6BB5\u662F Accept-Charset \u548C Content-Type\uFF1B"),
                  vue.createVNode("li", null, "\u5BA2\u6237\u7AEF\u9700\u8981\u5728\u8BF7\u6C42\u5934\u91CC\u4F7F\u7528 Accept \u7B49\u5934\u5B57\u6BB5\u4E0E\u670D\u52A1\u5668\u8FDB\u884C\u201C\u5185\u5BB9\u534F\u5546\u201D\uFF0C\u8981\u6C42\u670D\u52A1\u5668\u8FD4\u56DE\u6700\u5408\u9002\u7684\u6570\u636E\uFF1B"),
                  vue.createVNode("li", null, "Accept \u7B49\u5934\u5B57\u6BB5\u53EF\u4EE5\u7528\u201C,\u201D\u987A\u5E8F\u5217\u51FA\u591A\u4E2A\u53EF\u80FD\u7684\u9009\u9879\uFF0C\u8FD8\u53EF\u4EE5\u7528\u201C;q=\u201D\u53C2\u6570\u6765\u7CBE\u786E\u6307\u5B9A\u6743\u91CD\u3002")
                ]),
                vue.createVNode("h2", {
                  id: "\u6570\u636E\u7C7B\u578B\u4E0E\u7F16\u7801",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u6570\u636E\u7C7B\u578B\u4E0E\u7F16\u7801",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u6570\u636E\u7C7B\u578B\u4E0E\u7F16\u7801")
                ]),
                vue.createVNode("table", null, [
                  vue.createVNode("thead", null, [
                    vue.createVNode("tr", null, [
                      vue.createVNode("th", { style: { "text-align": "center" } }, "\u5934\u5B57\u6BB5"),
                      vue.createVNode("th", { style: { "text-align": "center" } }, "\u8BF7\u6C42\u5934"),
                      vue.createVNode("th", { style: { "text-align": "center" } }, "\u54CD\u5E94\u5934")
                    ])
                  ]),
                  vue.createVNode("tbody", null, [
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", { style: { "text-align": "center" } }, "\u6570\u636E\u7C7B\u578B"),
                      vue.createVNode("td", { style: { "text-align": "center" } }, "Accept"),
                      vue.createVNode("td", { style: { "text-align": "center" } }, "Content-Type")
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", { style: { "text-align": "center" } }, "\u538B\u7F29"),
                      vue.createVNode("td", { style: { "text-align": "center" } }, "Accept-Encoding"),
                      vue.createVNode("td", { style: { "text-align": "center" } }, "Content-Encoding")
                    ])
                  ])
                ]),
                vue.createVNode("h2", {
                  id: "\u8BED\u8A00\u7C7B\u578B\u4E0E\u7F16\u7801",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u8BED\u8A00\u7C7B\u578B\u4E0E\u7F16\u7801",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u8BED\u8A00\u7C7B\u578B\u4E0E\u7F16\u7801")
                ]),
                vue.createVNode("table", null, [
                  vue.createVNode("thead", null, [
                    vue.createVNode("tr", null, [
                      vue.createVNode("th", { style: { "text-align": "center" } }, "\u5934\u5B57\u6BB5"),
                      vue.createVNode("th", { style: { "text-align": "center" } }, "\u8BF7\u6C42\u5934"),
                      vue.createVNode("th", { style: { "text-align": "center" } }, "\u54CD\u5E94\u5934")
                    ])
                  ]),
                  vue.createVNode("tbody", null, [
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", { style: { "text-align": "center" } }, "\u8BED\u8A00\u7C7B\u578B"),
                      vue.createVNode("td", { style: { "text-align": "center" } }, "Accept-Lanuage"),
                      vue.createVNode("td", { style: { "text-align": "center" } }, "Content-Lanuage")
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", { style: { "text-align": "center" } }, "\u5B57\u7B26\u96C6"),
                      vue.createVNode("td", { style: { "text-align": "center" } }, "Accept-Charset"),
                      vue.createVNode("td", { style: { "text-align": "center" } }, "Content-Type")
                    ])
                  ])
                ]),
                vue.createVNode("p", null, [
                  vue.createVNode("img", {
                    src: "https://static001.geekbang.org/resource/image/b2/58/b2118315a977969ddfcc7ab9d26cb358.png",
                    alt: ""
                  })
                ]),
                vue.createVNode("h2", {
                  id: "\u4E2A\u4EBA\u7406\u89E3",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u4E2A\u4EBA\u7406\u89E3",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u4E2A\u4EBA\u7406\u89E3")
                ]),
                vue.createVNode("ol", null, [
                  vue.createVNode("li", null, "Accept: \u8868\u793A\u6D4F\u89C8\u5668\u60F3\u8981\u7684\u6570\u636E\uFF0C\u53EA\u8981\u4F20\u8F93\u5C31\u53EF\u4EE5\u643A\u5E26"),
                  vue.createVNode("li", null, "Content: \u8868\u793A\u5B9E\u4F53\u6570\u636E\uFF0C\u5373\u771F\u5B9E\u4F20\u8F93\u7684\u6570\u636E\uFF0C\u5982\uFF1Abody\u4E2D\u7684\u6570\u636E\uFF0C\u6216\u8005\u670D\u52A1\u5668\u56DE\u4F20\u4EE5\u540E\u7684\u6570\u636E\uFF0Cpost\u4E2D\u6709body\u6240\u4EE5\u4F1A\u7528\u5230")
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
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/childPages/http/httpshitishuju.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports["default"] = _sfc_main;
