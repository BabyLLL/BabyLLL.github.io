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
    const frontmatter = { "title": "29 | \u6211\u5E94\u8BE5\u8FC1\u79FB\u5230HTTPS\u5417\uFF1F", "date": "2021-11-09T16:00:00.000Z", "duration": "10min", "meta": [{ "property": "og:title", "content": "29 | \u6211\u5E94\u8BE5\u8FC1\u79FB\u5230HTTPS\u5417\uFF1F" }] };
    expose({ frontmatter });
    const head$1 = { "title": "29 | \u6211\u5E94\u8BE5\u8FC1\u79FB\u5230HTTPS\u5417\uFF1F", "meta": [{ "property": "og:title", "content": "29 | \u6211\u5E94\u8BE5\u8FC1\u79FB\u5230HTTPS\u5417\uFF1F" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Blog = Blog._sfc_main;
      _push(serverRenderer.ssrRenderComponent(_component_Blog, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><h2 id="\u5F52\u7EB3" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u5F52\u7EB3" aria-hidden="true"${_scopeId}>#</a> \u5F52\u7EB3</h2><ol${_scopeId}><li${_scopeId}>\u4ECE HTTP \u8FC1\u79FB\u5230 HTTPS \u662F\u201C\u5927\u52BF\u6240\u8D8B\u201D\uFF0C\u80FD\u505A\u5C31\u5E94\u8BE5\u5C3D\u65E9\u505A\uFF1B</li><li${_scopeId}>\u5347\u7EA7 HTTPS \u9996\u5148\u8981\u7533\u8BF7\u6570\u5B57\u8BC1\u4E66\uFF0C\u53EF\u4EE5\u9009\u62E9\u514D\u8D39\u597D\u7528\u7684\u201CLet\u2019s Encrypt\u201D\uFF1B</li><li${_scopeId}>\u914D\u7F6E HTTPS \u65F6\u9700\u8981\u6CE8\u610F\u9009\u62E9\u6070\u5F53\u7684 TLS \u7248\u672C\u548C\u5BC6\u7801\u5957\u4EF6\uFF0C\u5F3A\u5316\u5B89\u5168\uFF1B</li><li${_scopeId}>\u539F\u6709\u7684 HTTP \u7AD9\u70B9\u53EF\u4EE5\u4FDD\u7559\u4F5C\u4E3A\u8FC7\u6E21\uFF0C\u4F7F\u7528 301 \u91CD\u5B9A\u5411\u5230 HTTPS\u3002</li></ol><h2 id="\u8FC1\u79FB\u7684\u987E\u8651" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u8FC1\u79FB\u7684\u987E\u8651" aria-hidden="true"${_scopeId}>#</a> \u8FC1\u79FB\u7684\u987E\u8651</h2><ol${_scopeId}><li${_scopeId}>\u6162\uFF1A\u8FDE\u63A5\u7684rtt\u8FC7\u591A</li><li${_scopeId}>\u8D35\uFF1A\u8BC1\u4E66\u6210\u672C</li><li${_scopeId}>\u96BE\uFF1A\u662F\u6307 HTTPS \u6D89\u53CA\u7684\u77E5\u8BC6\u70B9\u592A\u591A\u3001\u592A\u590D\u6742\uFF0C\u6709\u4E00\u5B9A\u7684\u6280\u672F\u95E8\u69DB\uFF0C\u4E0D\u80FD\u5F88\u5FEB\u4E0A\u624B\u3002</li></ol><h2 id="\u7533\u8BF7\u8BC1\u4E66" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u7533\u8BF7\u8BC1\u4E66" aria-hidden="true"${_scopeId}>#</a> \u7533\u8BF7\u8BC1\u4E66</h2><p${_scopeId}>\u201CLet\u2019s Encrypt\u201D\u4E00\u76F4\u5728\u63A8\u52A8\u8BC1\u4E66\u7684\u81EA\u52A8\u5316\u90E8\u7F72\uFF0C\u4E3A\u6B64\u8FD8\u5B9E\u73B0\u4E86\u4E13\u95E8\u7684 ACME \u534F\u8BAE\uFF08RFC8555\uFF09\u3002\u6709\u5F88\u591A\u7684\u5BA2\u6237\u7AEF\u8F6F\u4EF6\u53EF\u4EE5\u5B8C\u6210\u7533\u8BF7\u3001\u9A8C\u8BC1\u3001\u4E0B\u8F7D\u3001\u66F4\u65B0\u7684\u201C\u4E00\u6761\u9F99\u201D\u64CD\u4F5C\uFF0C\u6BD4\u5982 Certbot\u3001acme.sh \u7B49\u7B49\uFF0C\u90FD\u53EF\u4EE5\u5728\u201CLet\u2019s Encrypt\u201D\u7F51\u7AD9\u4E0A\u627E\u5230\uFF0C\u7528\u6CD5\u5F88\u7B80\u5355\uFF0C\u76F8\u5173\u7684\u6587\u6863\u4E5F\u5F88\u8BE6\u7EC6\uFF0C\u51E0\u5206\u949F\u5C31\u80FD\u5B8C\u6210\u7533\u8BF7</p><h2 id="\u670D\u52A1\u5668\u540D\u79F0\u6307\u793A" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u670D\u52A1\u5668\u540D\u79F0\u6307\u793A" aria-hidden="true"${_scopeId}>#</a> \u670D\u52A1\u5668\u540D\u79F0\u6307\u793A</h2><p${_scopeId}>\u865A\u62DF\u4E3B\u673A\u95EE\u9898</p><p${_scopeId}>\u5728 HTTP \u534F\u8BAE\u91CC\uFF0C\u591A\u4E2A\u57DF\u540D\u53EF\u4EE5\u540C\u65F6\u5728\u4E00\u4E2A IP \u5730\u5740\u4E0A\u8FD0\u884C\uFF0C\u8FD9\u5C31\u662F\u201C\u865A\u62DF\u4E3B\u673A\u201D\uFF0CWeb \u670D\u52A1\u5668\u4F1A\u4F7F\u7528\u8BF7\u6C42\u5934\u91CC\u7684 Host \u5B57\u6BB5\u6765\u9009\u62E9\u3002</p><p${_scopeId}>\u4F46\u5728 HTTPS \u91CC\uFF0C\u56E0\u4E3A\u8BF7\u6C42\u5934\u53EA\u6709\u5728 TLS \u63E1\u624B\u4E4B\u540E\u624D\u80FD\u53D1\u9001\uFF0C\u5728\u63E1\u624B\u65F6\u5C31\u5FC5\u987B\u9009\u62E9\u201C\u865A\u62DF\u4E3B\u673A\u201D\u5BF9\u5E94\u7684\u8BC1\u4E66\uFF0CTLS \u65E0\u6CD5\u5F97\u77E5\u57DF\u540D\u7684\u4FE1\u606F\uFF0C\u5C31\u53EA\u80FD\u7528 IP \u5730\u5740\u6765\u533A\u5206\u3002\u6240\u4EE5\uFF0C\u6700\u65E9\u7684\u65F6\u5019\u6BCF\u4E2A HTTPS \u57DF\u540D\u5FC5\u987B\u4F7F\u7528\u72EC\u7ACB\u7684 IP \u5730\u5740\uFF0C\u975E\u5E38\u4E0D\u65B9\u4FBF\u3002</p><p${_scopeId}>\u8FD9\u8FD8\u662F\u5F97\u7528\u5230 TLS \u7684\u201C\u6269\u5C55\u201D\uFF0C\u7ED9\u534F\u8BAE\u52A0\u4E2A SNI\uFF08Server Name Indication\uFF09\u7684\u201C\u8865\u5145\u6761\u6B3E\u201D\u3002\u5B83\u7684\u4F5C\u7528\u548C Host \u5B57\u6BB5\u5DEE\u4E0D\u591A\uFF0C\u5BA2\u6237\u7AEF\u4F1A\u5728\u201CClient Hello\u201D\u65F6\u5E26\u4E0A\u57DF\u540D\u4FE1\u606F\uFF0C\u8FD9\u6837\u670D\u52A1\u5668\u5C31\u53EF\u4EE5\u6839\u636E\u540D\u5B57\u800C\u4E0D\u662F IP \u5730\u5740\u6765\u9009\u62E9\u8BC1\u4E66\u3002</p><pre${_scopeId}><code${_scopeId}>
Extension: server_name (len=19)
    Server Name Indication extension
        Server Name Type: host_name (0)
        Server Name: www.chrono.com

</code></pre><h2 id="\u91CD\u5B9A\u5411\u8DF3\u8F6C" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u91CD\u5B9A\u5411\u8DF3\u8F6C" aria-hidden="true"${_scopeId}>#</a> \u91CD\u5B9A\u5411\u8DF3\u8F6C</h2><ol${_scopeId}><li${_scopeId}>\u901A\u8FC7Nginx\u914D\u7F6Ereturn\u6216\u8005rewrite</li><li${_scopeId}>\u6709\u4E00\u79CD\u53EB\u201CHSTS\u201D\uFF08HTTP \u4E25\u683C\u4F20\u8F93\u5B89\u5168\uFF0CHTTP Strict Transport Security\uFF09\u7684\u6280\u672F\u53EF\u4EE5\u6D88\u9664\u8FD9\u79CD\u5B89\u5168\u9690\u60A3\u3002HTTPS \u670D\u52A1\u5668\u9700\u8981\u5728\u53D1\u51FA\u7684\u54CD\u5E94\u5934\u91CC\u6DFB\u52A0\u4E00\u4E2A\u201CStrict-Transport-Security\u201D\u7684\u5B57\u6BB5\uFF0C\u518D\u8BBE\u5B9A\u4E00\u4E2A\u6709\u6548\u671F</li></ol><pre${_scopeId}><code${_scopeId}>
Strict-Transport-Security: max-age=15768000; includeSubDomains

</code></pre><ol start="3"${_scopeId}><li${_scopeId}>\u6709\u4E86\u5B83\u6D4F\u89C8\u5668\u5C31\u53EF\u4EE5\u5728\u89C4\u5B9A\u65F6\u95F4\u5185\u5B57\u6BB5\u8F6C\u6362\u4E3Ahttps</li></ol></div>`);
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
                  vue.createVNode("li", null, "\u4ECE HTTP \u8FC1\u79FB\u5230 HTTPS \u662F\u201C\u5927\u52BF\u6240\u8D8B\u201D\uFF0C\u80FD\u505A\u5C31\u5E94\u8BE5\u5C3D\u65E9\u505A\uFF1B"),
                  vue.createVNode("li", null, "\u5347\u7EA7 HTTPS \u9996\u5148\u8981\u7533\u8BF7\u6570\u5B57\u8BC1\u4E66\uFF0C\u53EF\u4EE5\u9009\u62E9\u514D\u8D39\u597D\u7528\u7684\u201CLet\u2019s Encrypt\u201D\uFF1B"),
                  vue.createVNode("li", null, "\u914D\u7F6E HTTPS \u65F6\u9700\u8981\u6CE8\u610F\u9009\u62E9\u6070\u5F53\u7684 TLS \u7248\u672C\u548C\u5BC6\u7801\u5957\u4EF6\uFF0C\u5F3A\u5316\u5B89\u5168\uFF1B"),
                  vue.createVNode("li", null, "\u539F\u6709\u7684 HTTP \u7AD9\u70B9\u53EF\u4EE5\u4FDD\u7559\u4F5C\u4E3A\u8FC7\u6E21\uFF0C\u4F7F\u7528 301 \u91CD\u5B9A\u5411\u5230 HTTPS\u3002")
                ]),
                vue.createVNode("h2", {
                  id: "\u8FC1\u79FB\u7684\u987E\u8651",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u8FC1\u79FB\u7684\u987E\u8651",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u8FC1\u79FB\u7684\u987E\u8651")
                ]),
                vue.createVNode("ol", null, [
                  vue.createVNode("li", null, "\u6162\uFF1A\u8FDE\u63A5\u7684rtt\u8FC7\u591A"),
                  vue.createVNode("li", null, "\u8D35\uFF1A\u8BC1\u4E66\u6210\u672C"),
                  vue.createVNode("li", null, "\u96BE\uFF1A\u662F\u6307 HTTPS \u6D89\u53CA\u7684\u77E5\u8BC6\u70B9\u592A\u591A\u3001\u592A\u590D\u6742\uFF0C\u6709\u4E00\u5B9A\u7684\u6280\u672F\u95E8\u69DB\uFF0C\u4E0D\u80FD\u5F88\u5FEB\u4E0A\u624B\u3002")
                ]),
                vue.createVNode("h2", {
                  id: "\u7533\u8BF7\u8BC1\u4E66",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u7533\u8BF7\u8BC1\u4E66",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u7533\u8BF7\u8BC1\u4E66")
                ]),
                vue.createVNode("p", null, "\u201CLet\u2019s Encrypt\u201D\u4E00\u76F4\u5728\u63A8\u52A8\u8BC1\u4E66\u7684\u81EA\u52A8\u5316\u90E8\u7F72\uFF0C\u4E3A\u6B64\u8FD8\u5B9E\u73B0\u4E86\u4E13\u95E8\u7684 ACME \u534F\u8BAE\uFF08RFC8555\uFF09\u3002\u6709\u5F88\u591A\u7684\u5BA2\u6237\u7AEF\u8F6F\u4EF6\u53EF\u4EE5\u5B8C\u6210\u7533\u8BF7\u3001\u9A8C\u8BC1\u3001\u4E0B\u8F7D\u3001\u66F4\u65B0\u7684\u201C\u4E00\u6761\u9F99\u201D\u64CD\u4F5C\uFF0C\u6BD4\u5982 Certbot\u3001acme.sh \u7B49\u7B49\uFF0C\u90FD\u53EF\u4EE5\u5728\u201CLet\u2019s Encrypt\u201D\u7F51\u7AD9\u4E0A\u627E\u5230\uFF0C\u7528\u6CD5\u5F88\u7B80\u5355\uFF0C\u76F8\u5173\u7684\u6587\u6863\u4E5F\u5F88\u8BE6\u7EC6\uFF0C\u51E0\u5206\u949F\u5C31\u80FD\u5B8C\u6210\u7533\u8BF7"),
                vue.createVNode("h2", {
                  id: "\u670D\u52A1\u5668\u540D\u79F0\u6307\u793A",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u670D\u52A1\u5668\u540D\u79F0\u6307\u793A",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u670D\u52A1\u5668\u540D\u79F0\u6307\u793A")
                ]),
                vue.createVNode("p", null, "\u865A\u62DF\u4E3B\u673A\u95EE\u9898"),
                vue.createVNode("p", null, "\u5728 HTTP \u534F\u8BAE\u91CC\uFF0C\u591A\u4E2A\u57DF\u540D\u53EF\u4EE5\u540C\u65F6\u5728\u4E00\u4E2A IP \u5730\u5740\u4E0A\u8FD0\u884C\uFF0C\u8FD9\u5C31\u662F\u201C\u865A\u62DF\u4E3B\u673A\u201D\uFF0CWeb \u670D\u52A1\u5668\u4F1A\u4F7F\u7528\u8BF7\u6C42\u5934\u91CC\u7684 Host \u5B57\u6BB5\u6765\u9009\u62E9\u3002"),
                vue.createVNode("p", null, "\u4F46\u5728 HTTPS \u91CC\uFF0C\u56E0\u4E3A\u8BF7\u6C42\u5934\u53EA\u6709\u5728 TLS \u63E1\u624B\u4E4B\u540E\u624D\u80FD\u53D1\u9001\uFF0C\u5728\u63E1\u624B\u65F6\u5C31\u5FC5\u987B\u9009\u62E9\u201C\u865A\u62DF\u4E3B\u673A\u201D\u5BF9\u5E94\u7684\u8BC1\u4E66\uFF0CTLS \u65E0\u6CD5\u5F97\u77E5\u57DF\u540D\u7684\u4FE1\u606F\uFF0C\u5C31\u53EA\u80FD\u7528 IP \u5730\u5740\u6765\u533A\u5206\u3002\u6240\u4EE5\uFF0C\u6700\u65E9\u7684\u65F6\u5019\u6BCF\u4E2A HTTPS \u57DF\u540D\u5FC5\u987B\u4F7F\u7528\u72EC\u7ACB\u7684 IP \u5730\u5740\uFF0C\u975E\u5E38\u4E0D\u65B9\u4FBF\u3002"),
                vue.createVNode("p", null, "\u8FD9\u8FD8\u662F\u5F97\u7528\u5230 TLS \u7684\u201C\u6269\u5C55\u201D\uFF0C\u7ED9\u534F\u8BAE\u52A0\u4E2A SNI\uFF08Server Name Indication\uFF09\u7684\u201C\u8865\u5145\u6761\u6B3E\u201D\u3002\u5B83\u7684\u4F5C\u7528\u548C Host \u5B57\u6BB5\u5DEE\u4E0D\u591A\uFF0C\u5BA2\u6237\u7AEF\u4F1A\u5728\u201CClient Hello\u201D\u65F6\u5E26\u4E0A\u57DF\u540D\u4FE1\u606F\uFF0C\u8FD9\u6837\u670D\u52A1\u5668\u5C31\u53EF\u4EE5\u6839\u636E\u540D\u5B57\u800C\u4E0D\u662F IP \u5730\u5740\u6765\u9009\u62E9\u8BC1\u4E66\u3002"),
                vue.createVNode("pre", null, [
                  vue.createVNode("code", null, "\nExtension: server_name (len=19)\n    Server Name Indication extension\n        Server Name Type: host_name (0)\n        Server Name: www.chrono.com\n\n")
                ]),
                vue.createVNode("h2", {
                  id: "\u91CD\u5B9A\u5411\u8DF3\u8F6C",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u91CD\u5B9A\u5411\u8DF3\u8F6C",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u91CD\u5B9A\u5411\u8DF3\u8F6C")
                ]),
                vue.createVNode("ol", null, [
                  vue.createVNode("li", null, "\u901A\u8FC7Nginx\u914D\u7F6Ereturn\u6216\u8005rewrite"),
                  vue.createVNode("li", null, "\u6709\u4E00\u79CD\u53EB\u201CHSTS\u201D\uFF08HTTP \u4E25\u683C\u4F20\u8F93\u5B89\u5168\uFF0CHTTP Strict Transport Security\uFF09\u7684\u6280\u672F\u53EF\u4EE5\u6D88\u9664\u8FD9\u79CD\u5B89\u5168\u9690\u60A3\u3002HTTPS \u670D\u52A1\u5668\u9700\u8981\u5728\u53D1\u51FA\u7684\u54CD\u5E94\u5934\u91CC\u6DFB\u52A0\u4E00\u4E2A\u201CStrict-Transport-Security\u201D\u7684\u5B57\u6BB5\uFF0C\u518D\u8BBE\u5B9A\u4E00\u4E2A\u6709\u6548\u671F")
                ]),
                vue.createVNode("pre", null, [
                  vue.createVNode("code", null, "\nStrict-Transport-Security: max-age=15768000; includeSubDomains\n\n")
                ]),
                vue.createVNode("ol", { start: "3" }, [
                  vue.createVNode("li", null, "\u6709\u4E86\u5B83\u6D4F\u89C8\u5668\u5C31\u53EF\u4EE5\u5728\u89C4\u5B9A\u65F6\u95F4\u5185\u5B57\u6BB5\u8F6C\u6362\u4E3Ahttps")
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
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/childPages/http/httpqianyihttps.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports["default"] = _sfc_main;
