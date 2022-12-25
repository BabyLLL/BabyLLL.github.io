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
    const frontmatter = { "title": "04 | HTTP\u4E16\u754C\u5168\u89C8\uFF08\u4E0B\uFF09\uFF1A\u4E0EHTTP\u76F8\u5173\u7684\u5404\u79CD\u534F\u8BAE", "date": "2021-09-24T16:00:00.000Z", "duration": "10min", "meta": [{ "property": "og:title", "content": "04 | HTTP\u4E16\u754C\u5168\u89C8\uFF08\u4E0B\uFF09\uFF1A\u4E0EHTTP\u76F8\u5173\u7684\u5404\u79CD\u534F\u8BAE" }] };
    expose({ frontmatter });
    const head$1 = { "title": "04 | HTTP\u4E16\u754C\u5168\u89C8\uFF08\u4E0B\uFF09\uFF1A\u4E0EHTTP\u76F8\u5173\u7684\u5404\u79CD\u534F\u8BAE", "meta": [{ "property": "og:title", "content": "04 | HTTP\u4E16\u754C\u5168\u89C8\uFF08\u4E0B\uFF09\uFF1A\u4E0EHTTP\u76F8\u5173\u7684\u5404\u79CD\u534F\u8BAE" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Blog = Blog._sfc_main;
      _push(serverRenderer.ssrRenderComponent(_component_Blog, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><h2 id="\u603B\u89C8\u56FE" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u603B\u89C8\u56FE" aria-hidden="true"${_scopeId}>#</a> \u603B\u89C8\u56FE</h2><p${_scopeId}><img src="https://static001.geekbang.org/resource/image/1e/81/1e7533f765d2ede0abfab73cf6b57781.png" alt="\u603B\u89C8"${_scopeId}></p><h2 id="\u5F52\u7EB3" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u5F52\u7EB3" aria-hidden="true"${_scopeId}>#</a> \u5F52\u7EB3</h2><ol${_scopeId}><li${_scopeId}>TCP/IP \u662F\u7F51\u7EDC\u4E16\u754C\u6700\u5E38\u7528\u7684\u534F\u8BAE\uFF0CHTTP \u901A\u5E38\u8FD0\u884C\u5728 TCP/IP \u63D0\u4F9B\u7684\u53EF\u9760\u4F20\u8F93\u57FA\u7840\u4E0A\uFF1B</li><li${_scopeId}>DNS \u57DF\u540D\u662F IP \u5730\u5740\u7684\u7B49\u4EF7\u66FF\u4EE3\uFF0C\u9700\u8981\u7528\u57DF\u540D\u89E3\u6790\u5B9E\u73B0\u5230 IP \u5730\u5740\u7684\u6620\u5C04\uFF1B</li><li${_scopeId}>URI \u662F\u7528\u6765\u6807\u8BB0\u4E92\u8054\u7F51\u4E0A\u8D44\u6E90\u7684\u4E00\u4E2A\u540D\u5B57\uFF0C\u7531\u201C\u534F\u8BAE\u540D + \u4E3B\u673A\u540D + \u8DEF\u5F84\u201D\u6784\u6210\uFF0C\u4FD7\u79F0 URL\uFF1B</li><li${_scopeId}>HTTPS \u76F8\u5F53\u4E8E\u201CHTTP+SSL/TLS+TCP/IP\u201D\uFF0C\u4E3A HTTP \u5957\u4E86\u4E00\u4E2A\u5B89\u5168\u7684\u5916\u58F3\uFF1B</li><li${_scopeId}>\u4EE3\u7406\u662F HTTP \u4F20\u8F93\u8FC7\u7A0B\u4E2D\u7684\u201C\u4E2D\u8F6C\u7AD9\u201D\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u7F13\u5B58\u52A0\u901F\u3001\u8D1F\u8F7D\u5747\u8861\u7B49\u529F\u80FD\u3002</li></ol><h2 id="tcp-ip" tabindex="-1"${_scopeId}><a class="header-anchor" href="#tcp-ip" aria-hidden="true"${_scopeId}>#</a> TCP/IP</h2><p${_scopeId}>IP \u534F\u8BAE\u662F\u201CInternet Protocol\u201D\u7684\u7F29\u5199\uFF0C\u4E3B\u8981\u76EE\u7684\u662F\u89E3\u51B3\u5BFB\u5740\u548C\u8DEF\u7531\u95EE\u9898\uFF0C\u4EE5\u53CA\u5982\u4F55\u5728\u4E24\u70B9\u95F4\u4F20\u9001\u6570\u636E\u5305\u3002IP \u534F\u8BAE\u4F7F\u7528\u201CIP \u5730\u5740\u201D\u7684\u6982\u5FF5\u6765\u5B9A\u4F4D\u4E92\u8054\u7F51\u4E0A\u7684\u6BCF\u4E00\u53F0\u8BA1\u7B97\u673A\u3002\u53EF\u4EE5\u5BF9\u6BD4\u4E00\u4E0B\u73B0\u5B9E\u4E2D\u7684\u7535\u8BDD\u7CFB\u7EDF\uFF0C\u4F60\u62FF\u7740\u7684\u624B\u673A\u76F8\u5F53\u4E8E\u4E92\u8054\u7F51\u4E0A\u7684\u8BA1\u7B97\u673A\uFF0C\u800C\u8981\u6253\u7535\u8BDD\u5C31\u5FC5\u987B\u63A5\u5165\u7535\u8BDD\u7F51\uFF0C\u7531\u901A\u4FE1\u516C\u53F8\u7ED9\u4F60\u5206\u914D\u4E00\u4E2A\u53F7\u7801\uFF0C\u8FD9\u4E2A\u53F7\u7801\u5C31\u76F8\u5F53\u4E8E IP \u5730\u5740\u3002</p><p${_scopeId}>TCP \u534F\u8BAE\u662F\u201CTransmission Control Protocol\u201D\u7684\u7F29\u5199\uFF0C\u610F\u601D\u662F\u201C\u4F20\u8F93\u63A7\u5236\u534F\u8BAE\u201D\uFF0C\u5B83\u4F4D\u4E8E IP \u534F\u8BAE\u4E4B\u4E0A\uFF0C\u57FA\u4E8E IP \u534F\u8BAE\u63D0\u4F9B\u53EF\u9760\u7684\u3001\u5B57\u8282\u6D41\u5F62\u5F0F\u7684\u901A\u4FE1\uFF0C\u662F HTTP \u534F\u8BAE\u5F97\u4EE5\u5B9E\u73B0\u7684\u57FA\u7840\u3002</p><h2 id="dns" tabindex="-1"${_scopeId}><a class="header-anchor" href="#dns" aria-hidden="true"${_scopeId}>#</a> DNS</h2><p${_scopeId}>\u201C\u57DF\u540D\u7CFB\u7EDF\u201D\uFF08Domain Name System\uFF09\u51FA\u73B0\u4E86\uFF0C\u7528\u6709\u610F\u4E49\u7684\u540D\u5B57\u6765\u4F5C\u4E3A IP \u5730\u5740\u7684\u7B49\u4EF7\u66FF\u4EE3\u3002\u8BBE\u60F3\u4E00\u4E0B\uFF0C\u4F60\u662F\u613F\u610F\u8BB0\u201C95.211.80.227\u201D\u8FD9\u6837\u67AF\u71E5\u7684\u6570\u5B57\uFF0C\u8FD8\u662F\u201Cnginx.org\u201D\u8FD9\u6837\u7684\u8BCD\u7EC4\u5462\uFF1F</p><h2 id="uri-url" tabindex="-1"${_scopeId}><a class="header-anchor" href="#uri-url" aria-hidden="true"${_scopeId}>#</a> URI/URL</h2><p${_scopeId}>URI\uFF08Uniform Resource Identifier\uFF09\uFF0C\u4E2D\u6587\u540D\u79F0\u662F \u7EDF\u4E00\u8D44\u6E90\u6807\u8BC6\u7B26\uFF0C\u4F7F\u7528\u5B83\u5C31\u80FD\u591F\u552F\u4E00\u5730\u6807\u8BB0\u4E92\u8054\u7F51\u4E0A\u8D44\u6E90\u3002</p><p${_scopeId}>URL\uFF08Uniform Resource Locator\uFF09\uFF0C \u7EDF\u4E00\u8D44\u6E90\u5B9A\u4F4D\u7B26\uFF0C\u4E5F\u5C31\u662F\u6211\u4EEC\u4FD7\u79F0\u7684\u201C\u7F51\u5740\u201D\uFF0C\u5B83\u5B9E\u9645\u4E0A\u662F URI \u7684\u4E00\u4E2A\u5B50\u96C6\uFF0C\u4E0D\u8FC7\u56E0\u4E3A\u8FD9\u4E24\u8005\u51E0\u4E4E\u662F\u76F8\u540C\u7684\uFF0C\u5DEE\u5F02\u4E0D\u5927\uFF0C\u6240\u4EE5\u901A\u5E38\u4E0D\u4F1A\u505A\u4E25\u683C\u7684\u533A\u5206\u3002</p><h2 id="https" tabindex="-1"${_scopeId}><a class="header-anchor" href="#https" aria-hidden="true"${_scopeId}>#</a> HTTPS</h2><p${_scopeId}>HTTPS \u76F8\u5F53\u4E8E\u201CHTTP+SSL/TLS+TCP/IP\u201D\uFF0C\u5176\u4E2D\u7684\u201CHTTP\u201D\u548C\u201CTCP/IP\u201D\u6211\u4EEC\u90FD\u5DF2\u7ECF\u660E\u767D\u4E86\uFF0C\u53EA\u8981\u518D\u4E86\u89E3\u4E00\u4E0B SSL/TLS\uFF0CHTTPS \u4E5F\u5C31\u80FD\u591F\u8F7B\u677E\u638C\u63E1\u3002</p><p${_scopeId}>SSL \u7684\u5168\u79F0\u662F\u201CSecure Socket Layer\u201D\uFF0C\u7531\u7F51\u666F\u516C\u53F8\u53D1\u660E\uFF0C\u5F53\u53D1\u5C55\u5230 3.0 \u65F6\u88AB\u6807\u51C6\u5316\uFF0C\u6539\u540D\u4E3A TLS\uFF0C\u5373\u201CTransport Layer Security\u201D\uFF0C\u4F46\u7531\u4E8E\u5386\u53F2\u7684\u539F\u56E0\u8FD8\u662F\u6709\u5F88\u591A\u4EBA\u79F0\u4E4B\u4E3A SSL/TLS\uFF0C\u6216\u8005\u76F4\u63A5\u7B80\u79F0\u4E3A SSL\u3002</p><h2 id="\u4EE3\u7406" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u4EE3\u7406" aria-hidden="true"${_scopeId}>#</a> \u4EE3\u7406</h2><ol${_scopeId}><li${_scopeId}>\u533F\u540D\u4EE3\u7406\uFF1A\u5B8C\u5168\u201C\u9690\u533F\u201D\u4E86\u88AB\u4EE3\u7406\u7684\u673A\u5668\uFF0C\u5916\u754C\u770B\u5230\u7684\u53EA\u662F\u4EE3\u7406\u670D\u52A1\u5668\uFF1B</li><li${_scopeId}>\u900F\u660E\u4EE3\u7406\uFF1A\u987E\u540D\u601D\u4E49\uFF0C\u5B83\u5728\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u662F\u201C\u900F\u660E\u5F00\u653E\u201D\u7684\uFF0C\u5916\u754C\u65E2\u77E5\u9053\u4EE3\u7406\uFF0C\u4E5F\u77E5\u9053\u5BA2\u6237\u7AEF\uFF1B</li><li${_scopeId}>\u6B63\u5411\u4EE3\u7406\uFF1A\u9760\u8FD1\u5BA2\u6237\u7AEF\uFF0C\u4EE3\u8868\u5BA2\u6237\u7AEF\u5411\u670D\u52A1\u5668\u53D1\u9001\u8BF7\u6C42\uFF1B</li><li${_scopeId}>\u53CD\u5411\u4EE3\u7406\uFF1A\u9760\u8FD1\u670D\u52A1\u5668\u7AEF\uFF0C\u4EE3\u8868\u670D\u52A1\u5668\u54CD\u5E94\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42\uFF1B</li></ol><p${_scopeId}>\u7531\u4E8E\u4EE3\u7406\u5728\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u63D2\u5165\u4E86\u4E00\u4E2A\u201C\u4E2D\u95F4\u5C42\u201D\uFF0C\u6240\u4EE5\u53EF\u4EE5\u5728\u8FD9\u4E2A\u73AF\u8282\u505A\u5F88\u591A\u6709\u610F\u601D\u7684\u4E8B\u60C5\uFF0C\u6BD4\u5982\uFF1A</p><ol${_scopeId}><li${_scopeId}>\u8D1F\u8F7D\u5747\u8861\uFF1A\u628A\u8BBF\u95EE\u8BF7\u6C42\u5747\u5300\u5206\u6563\u5230\u591A\u53F0\u673A\u5668\uFF0C\u5B9E\u73B0\u8BBF\u95EE\u96C6\u7FA4\u5316\uFF1B</li><li${_scopeId}>\u5185\u5BB9\u7F13\u5B58\uFF1A\u6682\u5B58\u4E0A\u4E0B\u884C\u7684\u6570\u636E\uFF0C\u51CF\u8F7B\u540E\u7AEF\u7684\u538B\u529B\uFF1B</li><li${_scopeId}>\u5B89\u5168\u9632\u62A4\uFF1A\u9690\u533F IP, \u4F7F\u7528 WAF \u7B49\u5DE5\u5177\u62B5\u5FA1\u7F51\u7EDC\u653B\u51FB\uFF0C\u4FDD\u62A4\u88AB\u4EE3\u7406\u7684\u673A\u5668\uFF1B</li><li${_scopeId}>\u6570\u636E\u5904\u7406\uFF1A\u63D0\u4F9B\u538B\u7F29\u3001\u52A0\u5BC6\u7B49\u989D\u5916\u7684\u529F\u80FD\u3002</li></ol></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode("h2", {
                  id: "\u603B\u89C8\u56FE",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u603B\u89C8\u56FE",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u603B\u89C8\u56FE")
                ]),
                vue.createVNode("p", null, [
                  vue.createVNode("img", {
                    src: "https://static001.geekbang.org/resource/image/1e/81/1e7533f765d2ede0abfab73cf6b57781.png",
                    alt: "\u603B\u89C8"
                  })
                ]),
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
                  vue.createVNode("li", null, "TCP/IP \u662F\u7F51\u7EDC\u4E16\u754C\u6700\u5E38\u7528\u7684\u534F\u8BAE\uFF0CHTTP \u901A\u5E38\u8FD0\u884C\u5728 TCP/IP \u63D0\u4F9B\u7684\u53EF\u9760\u4F20\u8F93\u57FA\u7840\u4E0A\uFF1B"),
                  vue.createVNode("li", null, "DNS \u57DF\u540D\u662F IP \u5730\u5740\u7684\u7B49\u4EF7\u66FF\u4EE3\uFF0C\u9700\u8981\u7528\u57DF\u540D\u89E3\u6790\u5B9E\u73B0\u5230 IP \u5730\u5740\u7684\u6620\u5C04\uFF1B"),
                  vue.createVNode("li", null, "URI \u662F\u7528\u6765\u6807\u8BB0\u4E92\u8054\u7F51\u4E0A\u8D44\u6E90\u7684\u4E00\u4E2A\u540D\u5B57\uFF0C\u7531\u201C\u534F\u8BAE\u540D + \u4E3B\u673A\u540D + \u8DEF\u5F84\u201D\u6784\u6210\uFF0C\u4FD7\u79F0 URL\uFF1B"),
                  vue.createVNode("li", null, "HTTPS \u76F8\u5F53\u4E8E\u201CHTTP+SSL/TLS+TCP/IP\u201D\uFF0C\u4E3A HTTP \u5957\u4E86\u4E00\u4E2A\u5B89\u5168\u7684\u5916\u58F3\uFF1B"),
                  vue.createVNode("li", null, "\u4EE3\u7406\u662F HTTP \u4F20\u8F93\u8FC7\u7A0B\u4E2D\u7684\u201C\u4E2D\u8F6C\u7AD9\u201D\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u7F13\u5B58\u52A0\u901F\u3001\u8D1F\u8F7D\u5747\u8861\u7B49\u529F\u80FD\u3002")
                ]),
                vue.createVNode("h2", {
                  id: "tcp-ip",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#tcp-ip",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" TCP/IP")
                ]),
                vue.createVNode("p", null, "IP \u534F\u8BAE\u662F\u201CInternet Protocol\u201D\u7684\u7F29\u5199\uFF0C\u4E3B\u8981\u76EE\u7684\u662F\u89E3\u51B3\u5BFB\u5740\u548C\u8DEF\u7531\u95EE\u9898\uFF0C\u4EE5\u53CA\u5982\u4F55\u5728\u4E24\u70B9\u95F4\u4F20\u9001\u6570\u636E\u5305\u3002IP \u534F\u8BAE\u4F7F\u7528\u201CIP \u5730\u5740\u201D\u7684\u6982\u5FF5\u6765\u5B9A\u4F4D\u4E92\u8054\u7F51\u4E0A\u7684\u6BCF\u4E00\u53F0\u8BA1\u7B97\u673A\u3002\u53EF\u4EE5\u5BF9\u6BD4\u4E00\u4E0B\u73B0\u5B9E\u4E2D\u7684\u7535\u8BDD\u7CFB\u7EDF\uFF0C\u4F60\u62FF\u7740\u7684\u624B\u673A\u76F8\u5F53\u4E8E\u4E92\u8054\u7F51\u4E0A\u7684\u8BA1\u7B97\u673A\uFF0C\u800C\u8981\u6253\u7535\u8BDD\u5C31\u5FC5\u987B\u63A5\u5165\u7535\u8BDD\u7F51\uFF0C\u7531\u901A\u4FE1\u516C\u53F8\u7ED9\u4F60\u5206\u914D\u4E00\u4E2A\u53F7\u7801\uFF0C\u8FD9\u4E2A\u53F7\u7801\u5C31\u76F8\u5F53\u4E8E IP \u5730\u5740\u3002"),
                vue.createVNode("p", null, "TCP \u534F\u8BAE\u662F\u201CTransmission Control Protocol\u201D\u7684\u7F29\u5199\uFF0C\u610F\u601D\u662F\u201C\u4F20\u8F93\u63A7\u5236\u534F\u8BAE\u201D\uFF0C\u5B83\u4F4D\u4E8E IP \u534F\u8BAE\u4E4B\u4E0A\uFF0C\u57FA\u4E8E IP \u534F\u8BAE\u63D0\u4F9B\u53EF\u9760\u7684\u3001\u5B57\u8282\u6D41\u5F62\u5F0F\u7684\u901A\u4FE1\uFF0C\u662F HTTP \u534F\u8BAE\u5F97\u4EE5\u5B9E\u73B0\u7684\u57FA\u7840\u3002"),
                vue.createVNode("h2", {
                  id: "dns",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#dns",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" DNS")
                ]),
                vue.createVNode("p", null, "\u201C\u57DF\u540D\u7CFB\u7EDF\u201D\uFF08Domain Name System\uFF09\u51FA\u73B0\u4E86\uFF0C\u7528\u6709\u610F\u4E49\u7684\u540D\u5B57\u6765\u4F5C\u4E3A IP \u5730\u5740\u7684\u7B49\u4EF7\u66FF\u4EE3\u3002\u8BBE\u60F3\u4E00\u4E0B\uFF0C\u4F60\u662F\u613F\u610F\u8BB0\u201C95.211.80.227\u201D\u8FD9\u6837\u67AF\u71E5\u7684\u6570\u5B57\uFF0C\u8FD8\u662F\u201Cnginx.org\u201D\u8FD9\u6837\u7684\u8BCD\u7EC4\u5462\uFF1F"),
                vue.createVNode("h2", {
                  id: "uri-url",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#uri-url",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" URI/URL")
                ]),
                vue.createVNode("p", null, "URI\uFF08Uniform Resource Identifier\uFF09\uFF0C\u4E2D\u6587\u540D\u79F0\u662F \u7EDF\u4E00\u8D44\u6E90\u6807\u8BC6\u7B26\uFF0C\u4F7F\u7528\u5B83\u5C31\u80FD\u591F\u552F\u4E00\u5730\u6807\u8BB0\u4E92\u8054\u7F51\u4E0A\u8D44\u6E90\u3002"),
                vue.createVNode("p", null, "URL\uFF08Uniform Resource Locator\uFF09\uFF0C \u7EDF\u4E00\u8D44\u6E90\u5B9A\u4F4D\u7B26\uFF0C\u4E5F\u5C31\u662F\u6211\u4EEC\u4FD7\u79F0\u7684\u201C\u7F51\u5740\u201D\uFF0C\u5B83\u5B9E\u9645\u4E0A\u662F URI \u7684\u4E00\u4E2A\u5B50\u96C6\uFF0C\u4E0D\u8FC7\u56E0\u4E3A\u8FD9\u4E24\u8005\u51E0\u4E4E\u662F\u76F8\u540C\u7684\uFF0C\u5DEE\u5F02\u4E0D\u5927\uFF0C\u6240\u4EE5\u901A\u5E38\u4E0D\u4F1A\u505A\u4E25\u683C\u7684\u533A\u5206\u3002"),
                vue.createVNode("h2", {
                  id: "https",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#https",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" HTTPS")
                ]),
                vue.createVNode("p", null, "HTTPS \u76F8\u5F53\u4E8E\u201CHTTP+SSL/TLS+TCP/IP\u201D\uFF0C\u5176\u4E2D\u7684\u201CHTTP\u201D\u548C\u201CTCP/IP\u201D\u6211\u4EEC\u90FD\u5DF2\u7ECF\u660E\u767D\u4E86\uFF0C\u53EA\u8981\u518D\u4E86\u89E3\u4E00\u4E0B SSL/TLS\uFF0CHTTPS \u4E5F\u5C31\u80FD\u591F\u8F7B\u677E\u638C\u63E1\u3002"),
                vue.createVNode("p", null, "SSL \u7684\u5168\u79F0\u662F\u201CSecure Socket Layer\u201D\uFF0C\u7531\u7F51\u666F\u516C\u53F8\u53D1\u660E\uFF0C\u5F53\u53D1\u5C55\u5230 3.0 \u65F6\u88AB\u6807\u51C6\u5316\uFF0C\u6539\u540D\u4E3A TLS\uFF0C\u5373\u201CTransport Layer Security\u201D\uFF0C\u4F46\u7531\u4E8E\u5386\u53F2\u7684\u539F\u56E0\u8FD8\u662F\u6709\u5F88\u591A\u4EBA\u79F0\u4E4B\u4E3A SSL/TLS\uFF0C\u6216\u8005\u76F4\u63A5\u7B80\u79F0\u4E3A SSL\u3002"),
                vue.createVNode("h2", {
                  id: "\u4EE3\u7406",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u4EE3\u7406",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u4EE3\u7406")
                ]),
                vue.createVNode("ol", null, [
                  vue.createVNode("li", null, "\u533F\u540D\u4EE3\u7406\uFF1A\u5B8C\u5168\u201C\u9690\u533F\u201D\u4E86\u88AB\u4EE3\u7406\u7684\u673A\u5668\uFF0C\u5916\u754C\u770B\u5230\u7684\u53EA\u662F\u4EE3\u7406\u670D\u52A1\u5668\uFF1B"),
                  vue.createVNode("li", null, "\u900F\u660E\u4EE3\u7406\uFF1A\u987E\u540D\u601D\u4E49\uFF0C\u5B83\u5728\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u662F\u201C\u900F\u660E\u5F00\u653E\u201D\u7684\uFF0C\u5916\u754C\u65E2\u77E5\u9053\u4EE3\u7406\uFF0C\u4E5F\u77E5\u9053\u5BA2\u6237\u7AEF\uFF1B"),
                  vue.createVNode("li", null, "\u6B63\u5411\u4EE3\u7406\uFF1A\u9760\u8FD1\u5BA2\u6237\u7AEF\uFF0C\u4EE3\u8868\u5BA2\u6237\u7AEF\u5411\u670D\u52A1\u5668\u53D1\u9001\u8BF7\u6C42\uFF1B"),
                  vue.createVNode("li", null, "\u53CD\u5411\u4EE3\u7406\uFF1A\u9760\u8FD1\u670D\u52A1\u5668\u7AEF\uFF0C\u4EE3\u8868\u670D\u52A1\u5668\u54CD\u5E94\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42\uFF1B")
                ]),
                vue.createVNode("p", null, "\u7531\u4E8E\u4EE3\u7406\u5728\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u63D2\u5165\u4E86\u4E00\u4E2A\u201C\u4E2D\u95F4\u5C42\u201D\uFF0C\u6240\u4EE5\u53EF\u4EE5\u5728\u8FD9\u4E2A\u73AF\u8282\u505A\u5F88\u591A\u6709\u610F\u601D\u7684\u4E8B\u60C5\uFF0C\u6BD4\u5982\uFF1A"),
                vue.createVNode("ol", null, [
                  vue.createVNode("li", null, "\u8D1F\u8F7D\u5747\u8861\uFF1A\u628A\u8BBF\u95EE\u8BF7\u6C42\u5747\u5300\u5206\u6563\u5230\u591A\u53F0\u673A\u5668\uFF0C\u5B9E\u73B0\u8BBF\u95EE\u96C6\u7FA4\u5316\uFF1B"),
                  vue.createVNode("li", null, "\u5185\u5BB9\u7F13\u5B58\uFF1A\u6682\u5B58\u4E0A\u4E0B\u884C\u7684\u6570\u636E\uFF0C\u51CF\u8F7B\u540E\u7AEF\u7684\u538B\u529B\uFF1B"),
                  vue.createVNode("li", null, "\u5B89\u5168\u9632\u62A4\uFF1A\u9690\u533F IP, \u4F7F\u7528 WAF \u7B49\u5DE5\u5177\u62B5\u5FA1\u7F51\u7EDC\u653B\u51FB\uFF0C\u4FDD\u62A4\u88AB\u4EE3\u7406\u7684\u673A\u5668\uFF1B"),
                  vue.createVNode("li", null, "\u6570\u636E\u5904\u7406\uFF1A\u63D0\u4F9B\u538B\u7F29\u3001\u52A0\u5BC6\u7B49\u989D\u5916\u7684\u529F\u80FD\u3002")
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
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/childPages/http/httpquanlan.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports["default"] = _sfc_main;
