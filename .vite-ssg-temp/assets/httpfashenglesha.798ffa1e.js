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
    const frontmatter = { "title": "08 | \u952E\u5165\u7F51\u5740\u518D\u6309\u4E0B\u56DE\u8F66\uFF0C\u540E\u9762\u7A76\u7ADF\u53D1\u751F\u4E86\u4EC0\u4E48\uFF1F", "date": "2021-10-04T16:00:00.000Z", "duration": "10min", "meta": [{ "property": "og:title", "content": "08 | \u952E\u5165\u7F51\u5740\u518D\u6309\u4E0B\u56DE\u8F66\uFF0C\u540E\u9762\u7A76\u7ADF\u53D1\u751F\u4E86\u4EC0\u4E48\uFF1F" }] };
    expose({ frontmatter });
    const head$1 = { "title": "08 | \u952E\u5165\u7F51\u5740\u518D\u6309\u4E0B\u56DE\u8F66\uFF0C\u540E\u9762\u7A76\u7ADF\u53D1\u751F\u4E86\u4EC0\u4E48\uFF1F", "meta": [{ "property": "og:title", "content": "08 | \u952E\u5165\u7F51\u5740\u518D\u6309\u4E0B\u56DE\u8F66\uFF0C\u540E\u9762\u7A76\u7ADF\u53D1\u751F\u4E86\u4EC0\u4E48\uFF1F" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Blog = Blog._sfc_main;
      _push(serverRenderer.ssrRenderComponent(_component_Blog, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><h2 id="\u5F52\u7EB3" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u5F52\u7EB3" aria-hidden="true"${_scopeId}>#</a> \u5F52\u7EB3</h2><ol${_scopeId}><li${_scopeId}>HTTP \u534F\u8BAE\u57FA\u4E8E\u5E95\u5C42\u7684 TCP/IP \u534F\u8BAE\uFF0C\u6240\u4EE5\u5FC5\u987B\u8981\u7528 IP \u5730\u5740\u5EFA\u7ACB\u8FDE\u63A5\uFF1B</li><li${_scopeId}>\u5982\u679C\u4E0D\u77E5\u9053 IP \u5730\u5740\uFF0C\u5C31\u8981\u7528 DNS \u534F\u8BAE\u53BB\u89E3\u6790\u5F97\u5230 IP \u5730\u5740\uFF0C\u5426\u5219\u5C31\u4F1A\u8FDE\u63A5\u5931\u8D25\uFF1B</li><li${_scopeId}>\u5EFA\u7ACB TCP \u8FDE\u63A5\u540E\u4F1A\u987A\u5E8F\u6536\u53D1\u6570\u636E\uFF0C\u8BF7\u6C42\u65B9\u548C\u5E94\u7B54\u65B9\u90FD\u5FC5\u987B\u4F9D\u636E HTTP \u89C4\u8303\u6784\u5EFA\u548C\u89E3\u6790\u62A5\u6587\uFF1B</li><li${_scopeId}>\u4E3A\u4E86\u51CF\u5C11\u54CD\u5E94\u65F6\u95F4\uFF0C\u6574\u4E2A\u8FC7\u7A0B\u4E2D\u7684\u6BCF\u4E00\u4E2A\u73AF\u8282\u90FD\u4F1A\u6709\u7F13\u5B58\uFF0C\u80FD\u591F\u5B9E\u73B0\u201C\u77ED\u8DEF\u201D\u64CD\u4F5C\uFF1B</li><li${_scopeId}>\u867D\u7136\u73B0\u5B9E\u4E2D\u7684 HTTP \u4F20\u8F93\u8FC7\u7A0B\u975E\u5E38\u590D\u6742\uFF0C\u4F46\u7406\u8BBA\u4E0A\u4ECD\u7136\u53EF\u4EE5\u7B80\u5316\u6210\u5B9E\u9A8C\u91CC\u7684\u201C\u4E24\u70B9\u201D\u6A21\u578B\u3002</li></ol><h2 id="\u6293\u5305\u5206\u6790" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u6293\u5305\u5206\u6790" aria-hidden="true"${_scopeId}>#</a> \u6293\u5305\u5206\u6790</h2><ol${_scopeId}><li${_scopeId}>\u56E0\u4E3AHTTP \u534F\u8BAE\u662F\u8FD0\u884C\u5728 TCP/IP \u57FA\u7840\u4E0A\u7684\uFF0C\u4F9D\u9760 TCP/IP \u534F\u8BAE\u6765\u5B9E\u73B0\u6570\u636E\u7684\u53EF\u9760\u4F20\u8F93\u3002\u6240\u4EE5\u6D4F\u89C8\u5668\u8981\u7528 HTTP \u534F\u8BAE\u6536\u53D1\u6570\u636E\uFF0C\u9996\u5148\u8981\u505A\u7684\u5C31\u662F\u5EFA\u7ACB TCP \u8FDE\u63A5\u3002</li><li${_scopeId}>\u8F93\u5165\u5730\u5740\uFF0C\u6240\u4EE5\u6D4F\u89C8\u5668\u5C31\u8981\u4F9D\u7167 TCP \u534F\u8BAE\u7684\u89C4\u8303\uFF0C\u4F7F\u7528\u201C\u4E09\u6B21\u63E1\u624B\u201D\u5EFA\u7ACB\u4E0E Web \u670D\u52A1\u5668\u7684\u8FDE\u63A5\u3002</li><li${_scopeId}>\u7ECF\u8FC7 SYN\u3001SYN/ACK\u3001ACK \u7684\u4E09\u4E2A\u5305\u4E4B\u540E\uFF0C\u6D4F\u89C8\u5668\u4E0E\u670D\u52A1\u5668\u7684 TCP \u8FDE\u63A5\u5C31\u5EFA\u7ACB\u8D77\u6765\u4E86\u3002</li><li${_scopeId}>\u4E8E\u662F\uFF0C\u6D4F\u89C8\u5668\u6309\u7167 HTTP \u534F\u8BAE\u89C4\u5B9A\u7684\u683C\u5F0F\uFF0C\u901A\u8FC7 TCP \u53D1\u9001\u4E86\u4E00\u4E2A\u201CGET / HTTP/1.1\u201D\u8BF7\u6C42\u62A5\u6587</li><li${_scopeId}>web\u670D\u52A1\u5668\u5728 TCP \u534F\u8BAE\u5C42\u9762\u786E\u8BA4\uFF1A\u201C\u521A\u624D\u7684\u62A5\u6587\u6211\u5DF2\u7ECF\u6536\u5230\u4E86\u201D\uFF0C\u5904\u7406\u770B\u770B\u6D4F\u89C8\u5668\u8981\u5E72\u4EC0\u4E48</li><li${_scopeId}>web\u670D\u52A1\u5668\u54CD\u5E94</li><li${_scopeId}>\u89C8\u5668\u4E5F\u8981\u7ED9\u670D\u52A1\u5668\u56DE\u590D\u4E00\u4E2A TCP \u7684 ACK \u786E\u8BA4\uFF0C\u201C\u4F60\u7684\u54CD\u5E94\u62A5\u6587\u6536\u5230\u4E86\uFF0C\u591A\u8C22\u201D</li></ol></div>`);
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
                  vue.createVNode("li", null, "HTTP \u534F\u8BAE\u57FA\u4E8E\u5E95\u5C42\u7684 TCP/IP \u534F\u8BAE\uFF0C\u6240\u4EE5\u5FC5\u987B\u8981\u7528 IP \u5730\u5740\u5EFA\u7ACB\u8FDE\u63A5\uFF1B"),
                  vue.createVNode("li", null, "\u5982\u679C\u4E0D\u77E5\u9053 IP \u5730\u5740\uFF0C\u5C31\u8981\u7528 DNS \u534F\u8BAE\u53BB\u89E3\u6790\u5F97\u5230 IP \u5730\u5740\uFF0C\u5426\u5219\u5C31\u4F1A\u8FDE\u63A5\u5931\u8D25\uFF1B"),
                  vue.createVNode("li", null, "\u5EFA\u7ACB TCP \u8FDE\u63A5\u540E\u4F1A\u987A\u5E8F\u6536\u53D1\u6570\u636E\uFF0C\u8BF7\u6C42\u65B9\u548C\u5E94\u7B54\u65B9\u90FD\u5FC5\u987B\u4F9D\u636E HTTP \u89C4\u8303\u6784\u5EFA\u548C\u89E3\u6790\u62A5\u6587\uFF1B"),
                  vue.createVNode("li", null, "\u4E3A\u4E86\u51CF\u5C11\u54CD\u5E94\u65F6\u95F4\uFF0C\u6574\u4E2A\u8FC7\u7A0B\u4E2D\u7684\u6BCF\u4E00\u4E2A\u73AF\u8282\u90FD\u4F1A\u6709\u7F13\u5B58\uFF0C\u80FD\u591F\u5B9E\u73B0\u201C\u77ED\u8DEF\u201D\u64CD\u4F5C\uFF1B"),
                  vue.createVNode("li", null, "\u867D\u7136\u73B0\u5B9E\u4E2D\u7684 HTTP \u4F20\u8F93\u8FC7\u7A0B\u975E\u5E38\u590D\u6742\uFF0C\u4F46\u7406\u8BBA\u4E0A\u4ECD\u7136\u53EF\u4EE5\u7B80\u5316\u6210\u5B9E\u9A8C\u91CC\u7684\u201C\u4E24\u70B9\u201D\u6A21\u578B\u3002")
                ]),
                vue.createVNode("h2", {
                  id: "\u6293\u5305\u5206\u6790",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u6293\u5305\u5206\u6790",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u6293\u5305\u5206\u6790")
                ]),
                vue.createVNode("ol", null, [
                  vue.createVNode("li", null, "\u56E0\u4E3AHTTP \u534F\u8BAE\u662F\u8FD0\u884C\u5728 TCP/IP \u57FA\u7840\u4E0A\u7684\uFF0C\u4F9D\u9760 TCP/IP \u534F\u8BAE\u6765\u5B9E\u73B0\u6570\u636E\u7684\u53EF\u9760\u4F20\u8F93\u3002\u6240\u4EE5\u6D4F\u89C8\u5668\u8981\u7528 HTTP \u534F\u8BAE\u6536\u53D1\u6570\u636E\uFF0C\u9996\u5148\u8981\u505A\u7684\u5C31\u662F\u5EFA\u7ACB TCP \u8FDE\u63A5\u3002"),
                  vue.createVNode("li", null, "\u8F93\u5165\u5730\u5740\uFF0C\u6240\u4EE5\u6D4F\u89C8\u5668\u5C31\u8981\u4F9D\u7167 TCP \u534F\u8BAE\u7684\u89C4\u8303\uFF0C\u4F7F\u7528\u201C\u4E09\u6B21\u63E1\u624B\u201D\u5EFA\u7ACB\u4E0E Web \u670D\u52A1\u5668\u7684\u8FDE\u63A5\u3002"),
                  vue.createVNode("li", null, "\u7ECF\u8FC7 SYN\u3001SYN/ACK\u3001ACK \u7684\u4E09\u4E2A\u5305\u4E4B\u540E\uFF0C\u6D4F\u89C8\u5668\u4E0E\u670D\u52A1\u5668\u7684 TCP \u8FDE\u63A5\u5C31\u5EFA\u7ACB\u8D77\u6765\u4E86\u3002"),
                  vue.createVNode("li", null, "\u4E8E\u662F\uFF0C\u6D4F\u89C8\u5668\u6309\u7167 HTTP \u534F\u8BAE\u89C4\u5B9A\u7684\u683C\u5F0F\uFF0C\u901A\u8FC7 TCP \u53D1\u9001\u4E86\u4E00\u4E2A\u201CGET / HTTP/1.1\u201D\u8BF7\u6C42\u62A5\u6587"),
                  vue.createVNode("li", null, "web\u670D\u52A1\u5668\u5728 TCP \u534F\u8BAE\u5C42\u9762\u786E\u8BA4\uFF1A\u201C\u521A\u624D\u7684\u62A5\u6587\u6211\u5DF2\u7ECF\u6536\u5230\u4E86\u201D\uFF0C\u5904\u7406\u770B\u770B\u6D4F\u89C8\u5668\u8981\u5E72\u4EC0\u4E48"),
                  vue.createVNode("li", null, "web\u670D\u52A1\u5668\u54CD\u5E94"),
                  vue.createVNode("li", null, "\u89C8\u5668\u4E5F\u8981\u7ED9\u670D\u52A1\u5668\u56DE\u590D\u4E00\u4E2A TCP \u7684 ACK \u786E\u8BA4\uFF0C\u201C\u4F60\u7684\u54CD\u5E94\u62A5\u6587\u6536\u5230\u4E86\uFF0C\u591A\u8C22\u201D")
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
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/childPages/http/httpfashenglesha.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports["default"] = _sfc_main;
