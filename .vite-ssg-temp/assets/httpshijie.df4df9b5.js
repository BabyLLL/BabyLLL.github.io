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
    const frontmatter = { "title": "03 | HTTP\u4E16\u754C\u5168\u89C8\uFF08\u4E0A\uFF09\uFF1A\u4E0EHTTP\u76F8\u5173\u7684\u5404\u79CD\u6982\u5FF5", "date": "2021-09-22T16:00:00.000Z", "duration": "10min", "meta": [{ "property": "og:title", "content": "03 | HTTP\u4E16\u754C\u5168\u89C8\uFF08\u4E0A\uFF09\uFF1A\u4E0EHTTP\u76F8\u5173\u7684\u5404\u79CD\u6982\u5FF5" }] };
    expose({ frontmatter });
    const head$1 = { "title": "03 | HTTP\u4E16\u754C\u5168\u89C8\uFF08\u4E0A\uFF09\uFF1A\u4E0EHTTP\u76F8\u5173\u7684\u5404\u79CD\u6982\u5FF5", "meta": [{ "property": "og:title", "content": "03 | HTTP\u4E16\u754C\u5168\u89C8\uFF08\u4E0A\uFF09\uFF1A\u4E0EHTTP\u76F8\u5173\u7684\u5404\u79CD\u6982\u5FF5" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Blog = Blog._sfc_main;
      _push(serverRenderer.ssrRenderComponent(_component_Blog, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><h2 id="\u5F52\u7EB3" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u5F52\u7EB3" aria-hidden="true"${_scopeId}>#</a> \u5F52\u7EB3</h2><ol${_scopeId}><li${_scopeId}>\u4E92\u8054\u7F51\u4E0A\u7EDD\u5927\u90E8\u5206\u8D44\u6E90\u90FD\u4F7F\u7528 HTTP \u534F\u8BAE\u4F20\u8F93\uFF1B</li><li${_scopeId}>\u6D4F\u89C8\u5668\u662F HTTP \u534F\u8BAE\u91CC\u7684\u8BF7\u6C42\u65B9\uFF0C\u5373 User Agent\uFF1B</li><li${_scopeId}>\u670D\u52A1\u5668\u662F HTTP \u534F\u8BAE\u91CC\u7684\u5E94\u7B54\u65B9\uFF0C\u5E38\u7528\u7684\u6709 Apache \u548C Nginx\uFF1B</li><li${_scopeId}>CDN \u4F4D\u4E8E\u6D4F\u89C8\u5668\u548C\u670D\u52A1\u5668\u4E4B\u95F4\uFF0C\u4E3B\u8981\u8D77\u5230\u7F13\u5B58\u52A0\u901F\u7684\u4F5C\u7528\uFF1B</li><li${_scopeId}>\u722C\u866B\u662F\u53E6\u4E00\u7C7B User Agent\uFF0C\u662F\u81EA\u52A8\u8BBF\u95EE\u7F51\u7EDC\u8D44\u6E90\u7684\u7A0B\u5E8F\u3002</li></ol><h2 id="\u7F51\u7EDC\u4E16\u754C" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u7F51\u7EDC\u4E16\u754C" aria-hidden="true"${_scopeId}>#</a> \u7F51\u7EDC\u4E16\u754C</h2><blockquote${_scopeId}><p${_scopeId}>\u4E92\u8054\u7F51\u4E16\u754C\u66F4\u50CF\u662F\u7531\u6570\u4E0D\u6E05\u7684\u5927\u5C0F\u5C9B\u5C7F\u7EC4\u6210\u7684\u201C\u5343\u5C9B\u4E4B\u56FD\u201D\u3002</p></blockquote><p${_scopeId}>\u4E92\u8054\u7F51\u7684\u6B63\u5F0F\u540D\u79F0\u662F Internet\uFF0C\u91CC\u9762\u5B58\u50A8\u7740\u65E0\u7A77\u65E0\u5C3D\u7684\u4FE1\u606F\u8D44\u6E90\uFF0C\u6211\u4EEC\u901A\u5E38\u6240\u8BF4\u7684\u201C\u4E0A\u7F51\u201D\u5B9E\u9645\u4E0A\u8BBF\u95EE\u7684\u53EA\u662F\u4E92\u8054\u7F51\u7684\u4E00\u4E2A\u5B50\u96C6\u201C\u4E07\u7EF4\u7F51\u201D\uFF08World Wide Web\uFF09\uFF0C\u5B83\u57FA\u4E8E HTTP \u534F\u8BAE\uFF0C\u4F20\u8F93 HTML \u7B49\u8D85\u6587\u672C\u8D44\u6E90\uFF0C\u80FD\u529B\u4E5F\u5C31\u88AB\u9650\u5236\u5728 HTTP \u534F\u8BAE\u4E4B\u5185\u3002</p><p${_scopeId}>\u4E92\u8054\u7F51\u4E0A\u8FD8\u6709\u8BB8\u591A\u4E07\u7EF4\u7F51\u4E4B\u5916\u7684\u8D44\u6E90\uFF0C\u4F8B\u5982\u5E38\u7528\u7684\u7535\u5B50\u90AE\u4EF6\u3001BT \u548C Magnet \u70B9\u5BF9\u70B9\u4E0B\u8F7D\u3001FTP \u6587\u4EF6\u4E0B\u8F7D\u3001SSH \u5B89\u5168\u767B\u5F55\u3001\u5404\u79CD\u5373\u65F6\u901A\u4FE1\u670D\u52A1\u7B49\u7B49\uFF0C\u5B83\u4EEC\u9700\u8981\u7528\u5404\u81EA\u7684\u4E13\u6709\u534F\u8BAE\u6765\u8BBF\u95EE\u3002</p><h2 id="\u6D4F\u89C8\u5668" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u6D4F\u89C8\u5668" aria-hidden="true"${_scopeId}>#</a> \u6D4F\u89C8\u5668</h2><p${_scopeId}>\u6D4F\u89C8\u5668\u672C\u8D28\u4E0A\u662F\u4E00\u4E2A HTTP \u534F\u8BAE\u4E2D\u7684\u8BF7\u6C42\u65B9</p><p${_scopeId}>\u5728 HTTP \u534F\u8BAE\u91CC\uFF0C\u6D4F\u89C8\u5668\u7684\u89D2\u8272\u88AB\u79F0\u4E3A\u201CUser Agent\u201D\u5373\u201C\u7528\u6237\u4EE3\u7406\u201D\uFF0C\u610F\u601D\u662F\u4F5C\u4E3A\u8BBF\u95EE\u8005\u7684\u201C\u4EE3\u7406\u201D\u6765\u53D1\u8D77 HTTP \u8BF7\u6C42\u3002\u4E0D\u8FC7\u5728\u4E0D\u5F15\u8D77\u6DF7\u6DC6\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u901A\u5E38\u90FD\u7B80\u5355\u5730\u79F0\u4E4B\u4E3A\u201C\u5BA2\u6237\u7AEF\u201D\u3002</p><h2 id="web\u670D\u52A1\u5668" tabindex="-1"${_scopeId}><a class="header-anchor" href="#web\u670D\u52A1\u5668" aria-hidden="true"${_scopeId}>#</a> WEB\u670D\u52A1\u5668</h2><p${_scopeId}>\u670D\u52A1\u5668\uFF0CWeb Server</p><h2 id="cdn" tabindex="-1"${_scopeId}><a class="header-anchor" href="#cdn" aria-hidden="true"${_scopeId}>#</a> CDN</h2><p${_scopeId}>\u7B80\u5355\u6765\u8BF4\uFF0C\u5B83\u53EF\u4EE5\u7F13\u5B58\u6E90\u7AD9\u7684\u6570\u636E\uFF0C\u8BA9\u6D4F\u89C8\u5668\u7684\u8BF7\u6C42\u4E0D\u7528\u201C\u5343\u91CC\u8FE2\u8FE2\u201D\u5730\u5230\u8FBE\u6E90\u7AD9\u670D\u52A1\u5668\uFF0C\u76F4\u63A5\u5728\u201C\u534A\u8DEF\u201D\u5C31\u53EF\u4EE5\u83B7\u53D6\u54CD\u5E94\u3002\u5982\u679C CDN \u7684\u8C03\u5EA6\u7B97\u6CD5\u5F88\u4F18\u79C0\uFF0C\u66F4\u53EF\u4EE5\u627E\u5230\u79BB\u7528\u6237\u6700\u8FD1\u7684\u8282\u70B9\uFF0C\u5927\u5E45\u5EA6\u7F29\u77ED\u54CD\u5E94\u65F6\u95F4</p><h2 id="\u722C\u866B" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u722C\u866B" aria-hidden="true"${_scopeId}>#</a> \u722C\u866B</h2><p${_scopeId}>HTTP \u534F\u8BAE\u5E76\u6CA1\u6709\u89C4\u5B9A\u7528\u6237\u4EE3\u7406\u540E\u9762\u5FC5\u987B\u662F\u201C\u771F\u6B63\u7684\u4EBA\u7C7B\u201D\uFF0C\u5B83\u4E5F\u5B8C\u5168\u53EF\u4EE5\u662F\u201C\u673A\u5668\u4EBA\u201D\uFF0C\u8FD9\u4E9B\u201C\u673A\u5668\u4EBA\u201D\u7684\u6B63\u5F0F\u540D\u79F0\u5C31\u53EB\u505A\u201C\u722C\u866B\u201D\uFF08Crawler\uFF09\uFF0C\u5B9E\u9645\u4E0A\u662F\u4E00\u79CD\u53EF\u4EE5\u81EA\u52A8\u8BBF\u95EE Web \u8D44\u6E90\u7684\u5E94\u7528\u7A0B\u5E8F\u3002</p></div>`);
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
                  vue.createVNode("li", null, "\u4E92\u8054\u7F51\u4E0A\u7EDD\u5927\u90E8\u5206\u8D44\u6E90\u90FD\u4F7F\u7528 HTTP \u534F\u8BAE\u4F20\u8F93\uFF1B"),
                  vue.createVNode("li", null, "\u6D4F\u89C8\u5668\u662F HTTP \u534F\u8BAE\u91CC\u7684\u8BF7\u6C42\u65B9\uFF0C\u5373 User Agent\uFF1B"),
                  vue.createVNode("li", null, "\u670D\u52A1\u5668\u662F HTTP \u534F\u8BAE\u91CC\u7684\u5E94\u7B54\u65B9\uFF0C\u5E38\u7528\u7684\u6709 Apache \u548C Nginx\uFF1B"),
                  vue.createVNode("li", null, "CDN \u4F4D\u4E8E\u6D4F\u89C8\u5668\u548C\u670D\u52A1\u5668\u4E4B\u95F4\uFF0C\u4E3B\u8981\u8D77\u5230\u7F13\u5B58\u52A0\u901F\u7684\u4F5C\u7528\uFF1B"),
                  vue.createVNode("li", null, "\u722C\u866B\u662F\u53E6\u4E00\u7C7B User Agent\uFF0C\u662F\u81EA\u52A8\u8BBF\u95EE\u7F51\u7EDC\u8D44\u6E90\u7684\u7A0B\u5E8F\u3002")
                ]),
                vue.createVNode("h2", {
                  id: "\u7F51\u7EDC\u4E16\u754C",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u7F51\u7EDC\u4E16\u754C",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u7F51\u7EDC\u4E16\u754C")
                ]),
                vue.createVNode("blockquote", null, [
                  vue.createVNode("p", null, "\u4E92\u8054\u7F51\u4E16\u754C\u66F4\u50CF\u662F\u7531\u6570\u4E0D\u6E05\u7684\u5927\u5C0F\u5C9B\u5C7F\u7EC4\u6210\u7684\u201C\u5343\u5C9B\u4E4B\u56FD\u201D\u3002")
                ]),
                vue.createVNode("p", null, "\u4E92\u8054\u7F51\u7684\u6B63\u5F0F\u540D\u79F0\u662F Internet\uFF0C\u91CC\u9762\u5B58\u50A8\u7740\u65E0\u7A77\u65E0\u5C3D\u7684\u4FE1\u606F\u8D44\u6E90\uFF0C\u6211\u4EEC\u901A\u5E38\u6240\u8BF4\u7684\u201C\u4E0A\u7F51\u201D\u5B9E\u9645\u4E0A\u8BBF\u95EE\u7684\u53EA\u662F\u4E92\u8054\u7F51\u7684\u4E00\u4E2A\u5B50\u96C6\u201C\u4E07\u7EF4\u7F51\u201D\uFF08World Wide Web\uFF09\uFF0C\u5B83\u57FA\u4E8E HTTP \u534F\u8BAE\uFF0C\u4F20\u8F93 HTML \u7B49\u8D85\u6587\u672C\u8D44\u6E90\uFF0C\u80FD\u529B\u4E5F\u5C31\u88AB\u9650\u5236\u5728 HTTP \u534F\u8BAE\u4E4B\u5185\u3002"),
                vue.createVNode("p", null, "\u4E92\u8054\u7F51\u4E0A\u8FD8\u6709\u8BB8\u591A\u4E07\u7EF4\u7F51\u4E4B\u5916\u7684\u8D44\u6E90\uFF0C\u4F8B\u5982\u5E38\u7528\u7684\u7535\u5B50\u90AE\u4EF6\u3001BT \u548C Magnet \u70B9\u5BF9\u70B9\u4E0B\u8F7D\u3001FTP \u6587\u4EF6\u4E0B\u8F7D\u3001SSH \u5B89\u5168\u767B\u5F55\u3001\u5404\u79CD\u5373\u65F6\u901A\u4FE1\u670D\u52A1\u7B49\u7B49\uFF0C\u5B83\u4EEC\u9700\u8981\u7528\u5404\u81EA\u7684\u4E13\u6709\u534F\u8BAE\u6765\u8BBF\u95EE\u3002"),
                vue.createVNode("h2", {
                  id: "\u6D4F\u89C8\u5668",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u6D4F\u89C8\u5668",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u6D4F\u89C8\u5668")
                ]),
                vue.createVNode("p", null, "\u6D4F\u89C8\u5668\u672C\u8D28\u4E0A\u662F\u4E00\u4E2A HTTP \u534F\u8BAE\u4E2D\u7684\u8BF7\u6C42\u65B9"),
                vue.createVNode("p", null, "\u5728 HTTP \u534F\u8BAE\u91CC\uFF0C\u6D4F\u89C8\u5668\u7684\u89D2\u8272\u88AB\u79F0\u4E3A\u201CUser Agent\u201D\u5373\u201C\u7528\u6237\u4EE3\u7406\u201D\uFF0C\u610F\u601D\u662F\u4F5C\u4E3A\u8BBF\u95EE\u8005\u7684\u201C\u4EE3\u7406\u201D\u6765\u53D1\u8D77 HTTP \u8BF7\u6C42\u3002\u4E0D\u8FC7\u5728\u4E0D\u5F15\u8D77\u6DF7\u6DC6\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u901A\u5E38\u90FD\u7B80\u5355\u5730\u79F0\u4E4B\u4E3A\u201C\u5BA2\u6237\u7AEF\u201D\u3002"),
                vue.createVNode("h2", {
                  id: "web\u670D\u52A1\u5668",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#web\u670D\u52A1\u5668",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" WEB\u670D\u52A1\u5668")
                ]),
                vue.createVNode("p", null, "\u670D\u52A1\u5668\uFF0CWeb Server"),
                vue.createVNode("h2", {
                  id: "cdn",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#cdn",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" CDN")
                ]),
                vue.createVNode("p", null, "\u7B80\u5355\u6765\u8BF4\uFF0C\u5B83\u53EF\u4EE5\u7F13\u5B58\u6E90\u7AD9\u7684\u6570\u636E\uFF0C\u8BA9\u6D4F\u89C8\u5668\u7684\u8BF7\u6C42\u4E0D\u7528\u201C\u5343\u91CC\u8FE2\u8FE2\u201D\u5730\u5230\u8FBE\u6E90\u7AD9\u670D\u52A1\u5668\uFF0C\u76F4\u63A5\u5728\u201C\u534A\u8DEF\u201D\u5C31\u53EF\u4EE5\u83B7\u53D6\u54CD\u5E94\u3002\u5982\u679C CDN \u7684\u8C03\u5EA6\u7B97\u6CD5\u5F88\u4F18\u79C0\uFF0C\u66F4\u53EF\u4EE5\u627E\u5230\u79BB\u7528\u6237\u6700\u8FD1\u7684\u8282\u70B9\uFF0C\u5927\u5E45\u5EA6\u7F29\u77ED\u54CD\u5E94\u65F6\u95F4"),
                vue.createVNode("h2", {
                  id: "\u722C\u866B",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u722C\u866B",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u722C\u866B")
                ]),
                vue.createVNode("p", null, "HTTP \u534F\u8BAE\u5E76\u6CA1\u6709\u89C4\u5B9A\u7528\u6237\u4EE3\u7406\u540E\u9762\u5FC5\u987B\u662F\u201C\u771F\u6B63\u7684\u4EBA\u7C7B\u201D\uFF0C\u5B83\u4E5F\u5B8C\u5168\u53EF\u4EE5\u662F\u201C\u673A\u5668\u4EBA\u201D\uFF0C\u8FD9\u4E9B\u201C\u673A\u5668\u4EBA\u201D\u7684\u6B63\u5F0F\u540D\u79F0\u5C31\u53EB\u505A\u201C\u722C\u866B\u201D\uFF08Crawler\uFF09\uFF0C\u5B9E\u9645\u4E0A\u662F\u4E00\u79CD\u53EF\u4EE5\u81EA\u52A8\u8BBF\u95EE Web \u8D44\u6E90\u7684\u5E94\u7528\u7A0B\u5E8F\u3002")
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
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/childPages/http/httpshijie.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports["default"] = _sfc_main;
