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
    const frontmatter = { "title": "06 | \u57DF\u540D\u91CC\u6709\u54EA\u4E9B\u95E8\u9053\uFF1F", "date": "2021-09-28T16:00:00.000Z", "duration": "10min", "meta": [{ "property": "og:title", "content": "06 | \u57DF\u540D\u91CC\u6709\u54EA\u4E9B\u95E8\u9053\uFF1F" }] };
    expose({ frontmatter });
    const head$1 = { "title": "06 | \u57DF\u540D\u91CC\u6709\u54EA\u4E9B\u95E8\u9053\uFF1F", "meta": [{ "property": "og:title", "content": "06 | \u57DF\u540D\u91CC\u6709\u54EA\u4E9B\u95E8\u9053\uFF1F" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Blog = Blog._sfc_main;
      _push(serverRenderer.ssrRenderComponent(_component_Blog, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><h2 id="\u5F52\u7EB3" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u5F52\u7EB3" aria-hidden="true"${_scopeId}>#</a> \u5F52\u7EB3</h2><ol${_scopeId}><li${_scopeId}>\u57DF\u540D\u4F7F\u7528\u5B57\u7B26\u4E32\u6765\u4EE3\u66FF IP \u5730\u5740\uFF0C\u65B9\u4FBF\u7528\u6237\u8BB0\u5FC6\uFF0C\u672C\u8D28\u4E0A\u4E00\u4E2A\u540D\u5B57\u7A7A\u95F4\u7CFB\u7EDF\uFF1B</li><li${_scopeId}>DNS \u5C31\u50CF\u662F\u6211\u4EEC\u73B0\u5B9E\u4E16\u754C\u91CC\u7684\u7535\u8BDD\u672C\u3001\u67E5\u53F7\u53F0\uFF0C\u7EDF\u7BA1\u7740\u4E92\u8054\u7F51\u4E16\u754C\u91CC\u7684\u6240\u6709\u7F51\u7AD9\uFF0C\u662F\u4E00\u4E2A\u201C\u8D85\u7EA7\u5927\u7BA1\u5BB6\u201D\uFF1B</li><li${_scopeId}>DNS \u662F\u4E00\u4E2A\u6811\u72B6\u7684\u5206\u5E03\u5F0F\u67E5\u8BE2\u7CFB\u7EDF\uFF0C\u4F46\u4E3A\u4E86\u63D0\u9AD8\u67E5\u8BE2\u6548\u7387\uFF0C\u5916\u56F4\u6709\u591A\u7EA7\u7684\u7F13\u5B58\uFF1B</li><li${_scopeId}>\u4F7F\u7528 DNS \u53EF\u4EE5\u5B9E\u73B0\u57FA\u4E8E\u57DF\u540D\u7684\u8D1F\u8F7D\u5747\u8861\uFF0C\u65E2\u53EF\u4EE5\u5728\u5185\u7F51\uFF0C\u4E5F\u53EF\u4EE5\u5728\u5916\u7F51\u3002</li></ol><h2 id="\u57DF\u540D\u7684\u5F62\u5F0F" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u57DF\u540D\u7684\u5F62\u5F0F" aria-hidden="true"${_scopeId}>#</a> \u57DF\u540D\u7684\u5F62\u5F0F</h2><p${_scopeId}>\u6700\u53F3\u8FB9\u7684\u88AB\u79F0\u4E3A\u201C\u9876\u7EA7\u57DF\u540D\u201D\uFF0C\u7136\u540E\u662F\u201C\u4E8C\u7EA7\u57DF\u540D\u201D\uFF0C\u5C42\u7EA7\u5173\u7CFB\u5411\u5DE6\u4F9D\u6B21\u964D\u4F4E\uFF0C\u5230\u6700\u5DE6\u8FB9\u4E3A\u4E3B\u673A\u540D</p><h2 id="\u57DF\u540D\u89E3\u6790" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u57DF\u540D\u89E3\u6790" aria-hidden="true"${_scopeId}>#</a> \u57DF\u540D\u89E3\u6790</h2><p${_scopeId}>\u5C31\u50CF IP \u5730\u5740\u5FC5\u987B\u8F6C\u6362\u6210 MAC \u5730\u5740\u624D\u80FD\u8BBF\u95EE\u4E3B\u673A\u4E00\u6837\uFF0C\u57DF\u540D\u4E5F\u5FC5\u987B\u8981\u8F6C\u6362\u6210 IP \u5730\u5740\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u5C31\u662F\u201C\u57DF\u540D\u89E3\u6790\u201D\u3002</p><p${_scopeId}>DNS \u7684\u6838\u5FC3\u7CFB\u7EDF\u662F\u4E00\u4E2A\u4E09\u5C42\u7684\u6811\u72B6\u3001\u5206\u5E03\u5F0F\u670D\u52A1\uFF0C\u57FA\u672C\u5BF9\u5E94\u57DF\u540D\u7684\u7ED3\u6784\uFF1A</p><ol${_scopeId}><li${_scopeId}>\u6839\u57DF\u540D\u670D\u52A1\u5668\uFF08Root DNS Server\uFF09\uFF1A\u7BA1\u7406\u9876\u7EA7\u57DF\u540D\u670D\u52A1\u5668\uFF0C\u8FD4\u56DE\u201Ccom\u201D\u201Cnet\u201D\u201Ccn\u201D\u7B49\u9876\u7EA7\u57DF\u540D\u670D\u52A1\u5668\u7684 IP \u5730\u5740\uFF1B</li><li${_scopeId}>\u9876\u7EA7\u57DF\u540D\u670D\u52A1\u5668\uFF08Top-level DNS Server\uFF09\uFF1A\u7BA1\u7406\u5404\u81EA\u57DF\u540D\u4E0B\u7684\u6743\u5A01\u57DF\u540D\u670D\u52A1\u5668\uFF0C\u6BD4\u5982 com \u9876\u7EA7\u57DF\u540D\u670D\u52A1\u5668\u53EF\u4EE5\u8FD4\u56DE apple.com \u57DF\u540D\u670D\u52A1\u5668\u7684 IP \u5730\u5740\uFF1B</li><li${_scopeId}>\u6743\u5A01\u57DF\u540D\u670D\u52A1\u5668\uFF08Authoritative DNS Server\uFF09\uFF1A\u7BA1\u7406\u81EA\u5DF1\u57DF\u540D\u4E0B\u4E3B\u673A\u7684 IP \u5730\u5740\uFF0C\u6BD4\u5982 apple.com \u6743\u5A01\u57DF\u540D\u670D\u52A1\u5668\u53EF\u4EE5\u8FD4\u56DE www.apple.com \u7684 IP \u5730\u5740\u3002</li></ol><p${_scopeId}><img src="https://static001.geekbang.org/resource/image/6b/f2/6b020454987543efdd1cf6ddec784bf2.png" alt="\u4E09\u5C42\u6811\u72B6\u7ED3\u6784"${_scopeId}></p><h2 id="\u7F13\u5B58" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u7F13\u5B58" aria-hidden="true"${_scopeId}>#</a> \u7F13\u5B58</h2><p${_scopeId}>\u8BB8\u591A\u5927\u516C\u53F8\u3001\u7F51\u7EDC\u8FD0\u884C\u5546\u90FD\u4F1A\u5EFA\u7ACB\u81EA\u5DF1\u7684 DNS \u670D\u52A1\u5668\uFF0C\u4F5C\u4E3A\u7528\u6237 DNS \u67E5\u8BE2\u7684\u4EE3\u7406\uFF0C\u4EE3\u66FF\u7528\u6237\u8BBF\u95EE\u6838\u5FC3 DNS \u7CFB\u7EDF\u3002\u8FD9\u4E9B\u201C\u91CE\u751F\u201D\u670D\u52A1\u5668\u88AB\u79F0\u4E3A\u201C\u975E\u6743\u5A01\u57DF\u540D\u670D\u52A1\u5668\u201D\uFF0C\u53EF\u4EE5\u7F13\u5B58\u4E4B\u524D\u7684\u67E5\u8BE2\u7ED3\u679C\uFF0C\u5982\u679C\u5DF2\u7ECF\u6709\u4E86\u8BB0\u5F55\uFF0C\u5C31\u65E0\u9700\u518D\u5411\u6839\u670D\u52A1\u5668\u53D1\u8D77\u67E5\u8BE2\uFF0C\u76F4\u63A5\u8FD4\u56DE\u5BF9\u5E94\u7684 IP \u5730\u5740\u3002</p><ul${_scopeId}><li${_scopeId}>\u8FD9\u4E9B DNS \u670D\u52A1\u5668\u7684\u6570\u91CF\u8981\u6BD4\u6838\u5FC3\u7CFB\u7EDF\u7684\u670D\u52A1\u5668\u591A\u5F88\u591A\uFF0C\u800C\u4E14\u5927\u591A\u90E8\u7F72\u5728\u79BB\u7528\u6237\u5F88\u8FD1\u7684\u5730\u65B9\u3002\u6BD4\u8F83\u77E5\u540D\u7684 DNS \u6709 Google \u7684\u201C8.8.8.8\u201D\uFF0CMicrosoft \u7684\u201C4.2.2.1\u201D\uFF0C\u8FD8\u6709 CloudFlare \u7684\u201C1.1.1.1\u201D\u7B49\u7B49\u3002</li></ul><p${_scopeId}>\u64CD\u4F5C\u7CFB\u7EDF\u91CC\u4E5F\u4F1A\u5BF9 DNS \u89E3\u6790\u7ED3\u679C\u505A\u7F13\u5B58\uFF0C\u5982\u679C\u4F60\u4E4B\u524D\u8BBF\u95EE\u8FC7\u201Cwww.apple.com\u201D\uFF0C\u90A3\u4E48\u4E0B\u4E00\u6B21\u5728\u6D4F\u89C8\u5668\u91CC\u518D\u8F93\u5165\u8FD9\u4E2A\u7F51\u5740\u7684\u65F6\u5019\u5C31\u4E0D\u4F1A\u518D\u8DD1\u5230 DNS \u90A3\u91CC\u53BB\u95EE\u4E86\uFF0C\u76F4\u63A5\u5728\u64CD\u4F5C\u7CFB\u7EDF\u91CC\u5C31\u53EF\u4EE5\u62FF\u5230 IP \u5730\u5740\u3002</p><h2 id="\u57DF\u540D\u65B0\u73A9\u6CD5" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u57DF\u540D\u65B0\u73A9\u6CD5" aria-hidden="true"${_scopeId}>#</a> \u57DF\u540D\u65B0\u73A9\u6CD5</h2><ol${_scopeId}><li${_scopeId}>\u91CD\u5B9A\u5411</li><li${_scopeId}>\u57DF\u540D\u7A7A\u95F4</li><li${_scopeId}>\u8D1F\u8F7D\u5747\u8861 <ul${_scopeId}><li${_scopeId}>\u56E0\u4E3A\u57DF\u540D\u89E3\u6790\u53EF\u4EE5\u8FD4\u56DE\u591A\u4E2A IP \u5730\u5740\uFF0C\u6240\u4EE5\u4E00\u4E2A\u57DF\u540D\u53EF\u4EE5\u5BF9\u5E94\u591A\u53F0\u4E3B\u673A\uFF0C\u5BA2\u6237\u7AEF\u6536\u5230\u591A\u4E2A IP \u5730\u5740\u540E\uFF0C\u5C31\u53EF\u4EE5\u81EA\u5DF1\u4F7F\u7528\u8F6E\u8BE2\u7B97\u6CD5\u4F9D\u6B21\u5411\u670D\u52A1\u5668\u53D1\u8D77\u8BF7\u6C42\uFF0C\u5B9E\u73B0\u8D1F\u8F7D\u5747\u8861\u3002</li><li${_scopeId}>\u57DF\u540D\u89E3\u6790\u53EF\u4EE5\u914D\u7F6E\u5185\u90E8\u7684\u7B56\u7565\uFF0C\u8FD4\u56DE\u79BB\u5BA2\u6237\u7AEF\u6700\u8FD1\u7684\u4E3B\u673A\uFF0C\u6216\u8005\u8FD4\u56DE\u5F53\u524D\u670D\u52A1\u8D28\u91CF\u6700\u597D\u7684\u4E3B\u673A\uFF0C\u8FD9\u6837\u5728 DNS \u7AEF\u628A\u8BF7\u6C42\u5206\u53D1\u5230\u4E0D\u540C\u7684\u670D\u52A1\u5668\uFF0C\u5B9E\u73B0\u8D1F\u8F7D\u5747\u8861\u3002</li></ul></li></ol><p${_scopeId}>\u6076\u610FDNS</p><ul${_scopeId}><li${_scopeId}>\u201C\u57DF\u540D\u5C4F\u853D\u201D\uFF0C\u5BF9\u57DF\u540D\u76F4\u63A5\u4E0D\u89E3\u6790\uFF0C\u8FD4\u56DE\u9519\u8BEF\uFF0C\u8BA9\u4F60\u65E0\u6CD5\u62FF\u5230 IP \u5730\u5740\uFF0C\u4E5F\u5C31\u65E0\u6CD5\u8BBF\u95EE\u7F51\u7AD9\uFF1B</li><li${_scopeId}>\u201C\u57DF\u540D\u52AB\u6301\u201D\uFF0C\u4E5F\u53EB\u201C\u57DF\u540D\u6C61\u67D3\u201D\uFF0C\u4F60\u8981\u8BBF\u95EE A \u7F51\u7AD9\uFF0C\u4F46 DNS \u7ED9\u4E86\u4F60 B \u7F51\u7AD9\u3002</li></ul><h2 id="\u67E5\u627Edns\u8FC7\u7A0B" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u67E5\u627Edns\u8FC7\u7A0B" aria-hidden="true"${_scopeId}>#</a> \u67E5\u627EDNS\u8FC7\u7A0B</h2><p${_scopeId}>\u6D4F\u89C8\u5668DNS\u7F13\u5B58-&gt;\u64CD\u4F5C\u7CFB\u7EDF\u7F13\u5B58-&gt;Hosts\u6587\u4EF6-&gt;\u975E\u6743\u5A01\u57DF\u540D\u670D\u52A1\u5668-&gt;\u6839\u57DF\u540D\u670D\u52A1\u5668-&gt;\u9876\u7EA7\u57DF\u540D\u670D\u52A1\u5668-&gt;\u6743\u5A01\u57DF\u540D\u670D\u52A1\u5668\u3002</p></div>`);
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
                  vue.createVNode("li", null, "\u57DF\u540D\u4F7F\u7528\u5B57\u7B26\u4E32\u6765\u4EE3\u66FF IP \u5730\u5740\uFF0C\u65B9\u4FBF\u7528\u6237\u8BB0\u5FC6\uFF0C\u672C\u8D28\u4E0A\u4E00\u4E2A\u540D\u5B57\u7A7A\u95F4\u7CFB\u7EDF\uFF1B"),
                  vue.createVNode("li", null, "DNS \u5C31\u50CF\u662F\u6211\u4EEC\u73B0\u5B9E\u4E16\u754C\u91CC\u7684\u7535\u8BDD\u672C\u3001\u67E5\u53F7\u53F0\uFF0C\u7EDF\u7BA1\u7740\u4E92\u8054\u7F51\u4E16\u754C\u91CC\u7684\u6240\u6709\u7F51\u7AD9\uFF0C\u662F\u4E00\u4E2A\u201C\u8D85\u7EA7\u5927\u7BA1\u5BB6\u201D\uFF1B"),
                  vue.createVNode("li", null, "DNS \u662F\u4E00\u4E2A\u6811\u72B6\u7684\u5206\u5E03\u5F0F\u67E5\u8BE2\u7CFB\u7EDF\uFF0C\u4F46\u4E3A\u4E86\u63D0\u9AD8\u67E5\u8BE2\u6548\u7387\uFF0C\u5916\u56F4\u6709\u591A\u7EA7\u7684\u7F13\u5B58\uFF1B"),
                  vue.createVNode("li", null, "\u4F7F\u7528 DNS \u53EF\u4EE5\u5B9E\u73B0\u57FA\u4E8E\u57DF\u540D\u7684\u8D1F\u8F7D\u5747\u8861\uFF0C\u65E2\u53EF\u4EE5\u5728\u5185\u7F51\uFF0C\u4E5F\u53EF\u4EE5\u5728\u5916\u7F51\u3002")
                ]),
                vue.createVNode("h2", {
                  id: "\u57DF\u540D\u7684\u5F62\u5F0F",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u57DF\u540D\u7684\u5F62\u5F0F",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u57DF\u540D\u7684\u5F62\u5F0F")
                ]),
                vue.createVNode("p", null, "\u6700\u53F3\u8FB9\u7684\u88AB\u79F0\u4E3A\u201C\u9876\u7EA7\u57DF\u540D\u201D\uFF0C\u7136\u540E\u662F\u201C\u4E8C\u7EA7\u57DF\u540D\u201D\uFF0C\u5C42\u7EA7\u5173\u7CFB\u5411\u5DE6\u4F9D\u6B21\u964D\u4F4E\uFF0C\u5230\u6700\u5DE6\u8FB9\u4E3A\u4E3B\u673A\u540D"),
                vue.createVNode("h2", {
                  id: "\u57DF\u540D\u89E3\u6790",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u57DF\u540D\u89E3\u6790",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u57DF\u540D\u89E3\u6790")
                ]),
                vue.createVNode("p", null, "\u5C31\u50CF IP \u5730\u5740\u5FC5\u987B\u8F6C\u6362\u6210 MAC \u5730\u5740\u624D\u80FD\u8BBF\u95EE\u4E3B\u673A\u4E00\u6837\uFF0C\u57DF\u540D\u4E5F\u5FC5\u987B\u8981\u8F6C\u6362\u6210 IP \u5730\u5740\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u5C31\u662F\u201C\u57DF\u540D\u89E3\u6790\u201D\u3002"),
                vue.createVNode("p", null, "DNS \u7684\u6838\u5FC3\u7CFB\u7EDF\u662F\u4E00\u4E2A\u4E09\u5C42\u7684\u6811\u72B6\u3001\u5206\u5E03\u5F0F\u670D\u52A1\uFF0C\u57FA\u672C\u5BF9\u5E94\u57DF\u540D\u7684\u7ED3\u6784\uFF1A"),
                vue.createVNode("ol", null, [
                  vue.createVNode("li", null, "\u6839\u57DF\u540D\u670D\u52A1\u5668\uFF08Root DNS Server\uFF09\uFF1A\u7BA1\u7406\u9876\u7EA7\u57DF\u540D\u670D\u52A1\u5668\uFF0C\u8FD4\u56DE\u201Ccom\u201D\u201Cnet\u201D\u201Ccn\u201D\u7B49\u9876\u7EA7\u57DF\u540D\u670D\u52A1\u5668\u7684 IP \u5730\u5740\uFF1B"),
                  vue.createVNode("li", null, "\u9876\u7EA7\u57DF\u540D\u670D\u52A1\u5668\uFF08Top-level DNS Server\uFF09\uFF1A\u7BA1\u7406\u5404\u81EA\u57DF\u540D\u4E0B\u7684\u6743\u5A01\u57DF\u540D\u670D\u52A1\u5668\uFF0C\u6BD4\u5982 com \u9876\u7EA7\u57DF\u540D\u670D\u52A1\u5668\u53EF\u4EE5\u8FD4\u56DE apple.com \u57DF\u540D\u670D\u52A1\u5668\u7684 IP \u5730\u5740\uFF1B"),
                  vue.createVNode("li", null, "\u6743\u5A01\u57DF\u540D\u670D\u52A1\u5668\uFF08Authoritative DNS Server\uFF09\uFF1A\u7BA1\u7406\u81EA\u5DF1\u57DF\u540D\u4E0B\u4E3B\u673A\u7684 IP \u5730\u5740\uFF0C\u6BD4\u5982 apple.com \u6743\u5A01\u57DF\u540D\u670D\u52A1\u5668\u53EF\u4EE5\u8FD4\u56DE www.apple.com \u7684 IP \u5730\u5740\u3002")
                ]),
                vue.createVNode("p", null, [
                  vue.createVNode("img", {
                    src: "https://static001.geekbang.org/resource/image/6b/f2/6b020454987543efdd1cf6ddec784bf2.png",
                    alt: "\u4E09\u5C42\u6811\u72B6\u7ED3\u6784"
                  })
                ]),
                vue.createVNode("h2", {
                  id: "\u7F13\u5B58",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u7F13\u5B58",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u7F13\u5B58")
                ]),
                vue.createVNode("p", null, "\u8BB8\u591A\u5927\u516C\u53F8\u3001\u7F51\u7EDC\u8FD0\u884C\u5546\u90FD\u4F1A\u5EFA\u7ACB\u81EA\u5DF1\u7684 DNS \u670D\u52A1\u5668\uFF0C\u4F5C\u4E3A\u7528\u6237 DNS \u67E5\u8BE2\u7684\u4EE3\u7406\uFF0C\u4EE3\u66FF\u7528\u6237\u8BBF\u95EE\u6838\u5FC3 DNS \u7CFB\u7EDF\u3002\u8FD9\u4E9B\u201C\u91CE\u751F\u201D\u670D\u52A1\u5668\u88AB\u79F0\u4E3A\u201C\u975E\u6743\u5A01\u57DF\u540D\u670D\u52A1\u5668\u201D\uFF0C\u53EF\u4EE5\u7F13\u5B58\u4E4B\u524D\u7684\u67E5\u8BE2\u7ED3\u679C\uFF0C\u5982\u679C\u5DF2\u7ECF\u6709\u4E86\u8BB0\u5F55\uFF0C\u5C31\u65E0\u9700\u518D\u5411\u6839\u670D\u52A1\u5668\u53D1\u8D77\u67E5\u8BE2\uFF0C\u76F4\u63A5\u8FD4\u56DE\u5BF9\u5E94\u7684 IP \u5730\u5740\u3002"),
                vue.createVNode("ul", null, [
                  vue.createVNode("li", null, "\u8FD9\u4E9B DNS \u670D\u52A1\u5668\u7684\u6570\u91CF\u8981\u6BD4\u6838\u5FC3\u7CFB\u7EDF\u7684\u670D\u52A1\u5668\u591A\u5F88\u591A\uFF0C\u800C\u4E14\u5927\u591A\u90E8\u7F72\u5728\u79BB\u7528\u6237\u5F88\u8FD1\u7684\u5730\u65B9\u3002\u6BD4\u8F83\u77E5\u540D\u7684 DNS \u6709 Google \u7684\u201C8.8.8.8\u201D\uFF0CMicrosoft \u7684\u201C4.2.2.1\u201D\uFF0C\u8FD8\u6709 CloudFlare \u7684\u201C1.1.1.1\u201D\u7B49\u7B49\u3002")
                ]),
                vue.createVNode("p", null, "\u64CD\u4F5C\u7CFB\u7EDF\u91CC\u4E5F\u4F1A\u5BF9 DNS \u89E3\u6790\u7ED3\u679C\u505A\u7F13\u5B58\uFF0C\u5982\u679C\u4F60\u4E4B\u524D\u8BBF\u95EE\u8FC7\u201Cwww.apple.com\u201D\uFF0C\u90A3\u4E48\u4E0B\u4E00\u6B21\u5728\u6D4F\u89C8\u5668\u91CC\u518D\u8F93\u5165\u8FD9\u4E2A\u7F51\u5740\u7684\u65F6\u5019\u5C31\u4E0D\u4F1A\u518D\u8DD1\u5230 DNS \u90A3\u91CC\u53BB\u95EE\u4E86\uFF0C\u76F4\u63A5\u5728\u64CD\u4F5C\u7CFB\u7EDF\u91CC\u5C31\u53EF\u4EE5\u62FF\u5230 IP \u5730\u5740\u3002"),
                vue.createVNode("h2", {
                  id: "\u57DF\u540D\u65B0\u73A9\u6CD5",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u57DF\u540D\u65B0\u73A9\u6CD5",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u57DF\u540D\u65B0\u73A9\u6CD5")
                ]),
                vue.createVNode("ol", null, [
                  vue.createVNode("li", null, "\u91CD\u5B9A\u5411"),
                  vue.createVNode("li", null, "\u57DF\u540D\u7A7A\u95F4"),
                  vue.createVNode("li", null, [
                    vue.createTextVNode("\u8D1F\u8F7D\u5747\u8861 "),
                    vue.createVNode("ul", null, [
                      vue.createVNode("li", null, "\u56E0\u4E3A\u57DF\u540D\u89E3\u6790\u53EF\u4EE5\u8FD4\u56DE\u591A\u4E2A IP \u5730\u5740\uFF0C\u6240\u4EE5\u4E00\u4E2A\u57DF\u540D\u53EF\u4EE5\u5BF9\u5E94\u591A\u53F0\u4E3B\u673A\uFF0C\u5BA2\u6237\u7AEF\u6536\u5230\u591A\u4E2A IP \u5730\u5740\u540E\uFF0C\u5C31\u53EF\u4EE5\u81EA\u5DF1\u4F7F\u7528\u8F6E\u8BE2\u7B97\u6CD5\u4F9D\u6B21\u5411\u670D\u52A1\u5668\u53D1\u8D77\u8BF7\u6C42\uFF0C\u5B9E\u73B0\u8D1F\u8F7D\u5747\u8861\u3002"),
                      vue.createVNode("li", null, "\u57DF\u540D\u89E3\u6790\u53EF\u4EE5\u914D\u7F6E\u5185\u90E8\u7684\u7B56\u7565\uFF0C\u8FD4\u56DE\u79BB\u5BA2\u6237\u7AEF\u6700\u8FD1\u7684\u4E3B\u673A\uFF0C\u6216\u8005\u8FD4\u56DE\u5F53\u524D\u670D\u52A1\u8D28\u91CF\u6700\u597D\u7684\u4E3B\u673A\uFF0C\u8FD9\u6837\u5728 DNS \u7AEF\u628A\u8BF7\u6C42\u5206\u53D1\u5230\u4E0D\u540C\u7684\u670D\u52A1\u5668\uFF0C\u5B9E\u73B0\u8D1F\u8F7D\u5747\u8861\u3002")
                    ])
                  ])
                ]),
                vue.createVNode("p", null, "\u6076\u610FDNS"),
                vue.createVNode("ul", null, [
                  vue.createVNode("li", null, "\u201C\u57DF\u540D\u5C4F\u853D\u201D\uFF0C\u5BF9\u57DF\u540D\u76F4\u63A5\u4E0D\u89E3\u6790\uFF0C\u8FD4\u56DE\u9519\u8BEF\uFF0C\u8BA9\u4F60\u65E0\u6CD5\u62FF\u5230 IP \u5730\u5740\uFF0C\u4E5F\u5C31\u65E0\u6CD5\u8BBF\u95EE\u7F51\u7AD9\uFF1B"),
                  vue.createVNode("li", null, "\u201C\u57DF\u540D\u52AB\u6301\u201D\uFF0C\u4E5F\u53EB\u201C\u57DF\u540D\u6C61\u67D3\u201D\uFF0C\u4F60\u8981\u8BBF\u95EE A \u7F51\u7AD9\uFF0C\u4F46 DNS \u7ED9\u4E86\u4F60 B \u7F51\u7AD9\u3002")
                ]),
                vue.createVNode("h2", {
                  id: "\u67E5\u627Edns\u8FC7\u7A0B",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u67E5\u627Edns\u8FC7\u7A0B",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u67E5\u627EDNS\u8FC7\u7A0B")
                ]),
                vue.createVNode("p", null, "\u6D4F\u89C8\u5668DNS\u7F13\u5B58->\u64CD\u4F5C\u7CFB\u7EDF\u7F13\u5B58->Hosts\u6587\u4EF6->\u975E\u6743\u5A01\u57DF\u540D\u670D\u52A1\u5668->\u6839\u57DF\u540D\u670D\u52A1\u5668->\u9876\u7EA7\u57DF\u540D\u670D\u52A1\u5668->\u6743\u5A01\u57DF\u540D\u670D\u52A1\u5668\u3002")
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
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/childPages/http/httpyumingmendao.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports["default"] = _sfc_main;
