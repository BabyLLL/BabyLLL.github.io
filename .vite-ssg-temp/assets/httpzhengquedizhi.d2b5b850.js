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
    const frontmatter = { "title": "11 | \u4F60\u80FD\u5199\u51FA\u6B63\u786E\u7684\u7F51\u5740\u5417\uFF1F", "date": "2021-10-09T16:00:00.000Z", "duration": "10min", "meta": [{ "property": "og:title", "content": "11 | \u4F60\u80FD\u5199\u51FA\u6B63\u786E\u7684\u7F51\u5740\u5417\uFF1F" }] };
    expose({ frontmatter });
    const head$1 = { "title": "11 | \u4F60\u80FD\u5199\u51FA\u6B63\u786E\u7684\u7F51\u5740\u5417\uFF1F", "meta": [{ "property": "og:title", "content": "11 | \u4F60\u80FD\u5199\u51FA\u6B63\u786E\u7684\u7F51\u5740\u5417\uFF1F" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Blog = Blog._sfc_main;
      _push(serverRenderer.ssrRenderComponent(_component_Blog, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><h2 id="\u5F52\u7EB3" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u5F52\u7EB3" aria-hidden="true"${_scopeId}>#</a> \u5F52\u7EB3</h2><ol${_scopeId}><li${_scopeId}>URI \u662F\u7528\u6765\u552F\u4E00\u6807\u8BB0\u670D\u52A1\u5668\u4E0A\u8D44\u6E90\u7684\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u901A\u5E38\u4E5F\u79F0\u4E3A URL\uFF1B</li><li${_scopeId}>URI \u901A\u5E38\u7531 scheme\u3001host:port\u3001path \u548C query \u56DB\u4E2A\u90E8\u5206\u7EC4\u6210\uFF0C\u6709\u7684\u53EF\u4EE5\u7701\u7565\uFF1B</li><li${_scopeId}>scheme \u53EB\u201C\u65B9\u6848\u540D\u201D\u6216\u8005\u201C\u534F\u8BAE\u540D\u201D\uFF0C\u8868\u793A\u8D44\u6E90\u5E94\u8BE5\u4F7F\u7528\u54EA\u79CD\u534F\u8BAE\u6765\u8BBF\u95EE\uFF1B</li><li${_scopeId}>\u201Chost:port\u201D\u8868\u793A\u8D44\u6E90\u6240\u5728\u7684\u4E3B\u673A\u540D\u548C\u7AEF\u53E3\u53F7\uFF1B</li><li${_scopeId}>path \u6807\u8BB0\u8D44\u6E90\u6240\u5728\u7684\u4F4D\u7F6E\uFF1B</li><li${_scopeId}>query \u8868\u793A\u5BF9\u8D44\u6E90\u9644\u52A0\u7684\u989D\u5916\u8981\u6C42\uFF1B</li><li${_scopeId}>\u5728 URI \u91CC\u5BF9\u201C@&amp;/\u201D\u7B49\u7279\u6B8A\u5B57\u7B26\u548C\u6C49\u5B57\u5FC5\u987B\u8981\u505A\u7F16\u7801\uFF0C\u5426\u5219\u670D\u52A1\u5668\u6536\u5230 HTTP \u62A5\u6587\u540E\u4F1A\u65E0\u6CD5\u6B63\u786E\u5904\u7406\u3002</li></ol><h2 id="uri\u7684\u683C\u5F0F" tabindex="-1"${_scopeId}><a class="header-anchor" href="#uri\u7684\u683C\u5F0F" aria-hidden="true"${_scopeId}>#</a> URI\u7684\u683C\u5F0F</h2><p${_scopeId}><img src="https://static001.geekbang.org/resource/image/46/2a/46581d7e1058558d8e12c1bf37d30d2a.png" alt=""${_scopeId}></p></div>`);
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
                  vue.createVNode("li", null, "URI \u662F\u7528\u6765\u552F\u4E00\u6807\u8BB0\u670D\u52A1\u5668\u4E0A\u8D44\u6E90\u7684\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u901A\u5E38\u4E5F\u79F0\u4E3A URL\uFF1B"),
                  vue.createVNode("li", null, "URI \u901A\u5E38\u7531 scheme\u3001host:port\u3001path \u548C query \u56DB\u4E2A\u90E8\u5206\u7EC4\u6210\uFF0C\u6709\u7684\u53EF\u4EE5\u7701\u7565\uFF1B"),
                  vue.createVNode("li", null, "scheme \u53EB\u201C\u65B9\u6848\u540D\u201D\u6216\u8005\u201C\u534F\u8BAE\u540D\u201D\uFF0C\u8868\u793A\u8D44\u6E90\u5E94\u8BE5\u4F7F\u7528\u54EA\u79CD\u534F\u8BAE\u6765\u8BBF\u95EE\uFF1B"),
                  vue.createVNode("li", null, "\u201Chost:port\u201D\u8868\u793A\u8D44\u6E90\u6240\u5728\u7684\u4E3B\u673A\u540D\u548C\u7AEF\u53E3\u53F7\uFF1B"),
                  vue.createVNode("li", null, "path \u6807\u8BB0\u8D44\u6E90\u6240\u5728\u7684\u4F4D\u7F6E\uFF1B"),
                  vue.createVNode("li", null, "query \u8868\u793A\u5BF9\u8D44\u6E90\u9644\u52A0\u7684\u989D\u5916\u8981\u6C42\uFF1B"),
                  vue.createVNode("li", null, "\u5728 URI \u91CC\u5BF9\u201C@&/\u201D\u7B49\u7279\u6B8A\u5B57\u7B26\u548C\u6C49\u5B57\u5FC5\u987B\u8981\u505A\u7F16\u7801\uFF0C\u5426\u5219\u670D\u52A1\u5668\u6536\u5230 HTTP \u62A5\u6587\u540E\u4F1A\u65E0\u6CD5\u6B63\u786E\u5904\u7406\u3002")
                ]),
                vue.createVNode("h2", {
                  id: "uri\u7684\u683C\u5F0F",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#uri\u7684\u683C\u5F0F",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" URI\u7684\u683C\u5F0F")
                ]),
                vue.createVNode("p", null, [
                  vue.createVNode("img", {
                    src: "https://static001.geekbang.org/resource/image/46/2a/46581d7e1058558d8e12c1bf37d30d2a.png",
                    alt: ""
                  })
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
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/childPages/http/httpzhengquedizhi.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports["default"] = _sfc_main;
