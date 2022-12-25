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
    const frontmatter = { "title": "16 | \u628A\u5927\u8C61\u88C5\u8FDB\u51B0\u7BB1\uFF1AHTTP\u4F20\u8F93\u5927\u6587\u4EF6\u7684\u65B9\u6CD5", "date": "2021-10-24T16:00:00.000Z", "duration": "10min", "meta": [{ "property": "og:title", "content": "16 | \u628A\u5927\u8C61\u88C5\u8FDB\u51B0\u7BB1\uFF1AHTTP\u4F20\u8F93\u5927\u6587\u4EF6\u7684\u65B9\u6CD5" }] };
    expose({ frontmatter });
    const head$1 = { "title": "16 | \u628A\u5927\u8C61\u88C5\u8FDB\u51B0\u7BB1\uFF1AHTTP\u4F20\u8F93\u5927\u6587\u4EF6\u7684\u65B9\u6CD5", "meta": [{ "property": "og:title", "content": "16 | \u628A\u5927\u8C61\u88C5\u8FDB\u51B0\u7BB1\uFF1AHTTP\u4F20\u8F93\u5927\u6587\u4EF6\u7684\u65B9\u6CD5" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Blog = Blog._sfc_main;
      _push(serverRenderer.ssrRenderComponent(_component_Blog, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><h2 id="\u5F52\u7EB3" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u5F52\u7EB3" aria-hidden="true"${_scopeId}>#</a> \u5F52\u7EB3</h2><ol${_scopeId}><li${_scopeId}>\u538B\u7F29 HTML \u7B49\u6587\u672C\u6587\u4EF6\u662F\u4F20\u8F93\u5927\u6587\u4EF6\u6700\u57FA\u672C\u7684\u65B9\u6CD5\uFF1B</li><li${_scopeId}>\u5206\u5757\u4F20\u8F93\u53EF\u4EE5\u6D41\u5F0F\u6536\u53D1\u6570\u636E\uFF0C\u8282\u7EA6\u5185\u5B58\u548C\u5E26\u5BBD\uFF0C\u4F7F\u7528\u54CD\u5E94\u5934\u5B57\u6BB5\u201CTransfer-Encoding: chunked\u201D\u6765\u8868\u793A\uFF0C\u5206\u5757\u7684\u683C\u5F0F\u662F 16 \u8FDB\u5236\u957F\u5EA6\u5934 + \u6570\u636E\u5757\uFF1B\u8303\u56F4\u8BF7\u6C42\u53EF\u4EE5\u53EA\u83B7\u53D6\u90E8\u5206\u6570\u636E\uFF0C\u5373\u201C\u5206\u5757\u8BF7\u6C42\u201D\uFF0C\u5B9E\u73B0\u89C6\u9891\u62D6\u62FD\u6216\u8005\u65AD\u70B9\u7EED\u4F20\uFF0C\u4F7F\u7528\u8BF7\u6C42\u5934\u5B57\u6BB5\u201CRange\u201D\u548C\u54CD\u5E94\u5934\u5B57\u6BB5\u201CContent-Range\u201D\uFF0C\u54CD\u5E94\u72B6\u6001\u7801\u5FC5\u987B\u662F 206\uFF1B</li><li${_scopeId}>\u4E5F\u53EF\u4EE5\u4E00\u6B21\u8BF7\u6C42\u591A\u4E2A\u8303\u56F4\uFF0C\u8FD9\u65F6\u5019\u54CD\u5E94\u62A5\u6587\u7684\u6570\u636E\u7C7B\u578B\u662F\u201Cmultipart/byteranges\u201D\uFF0Cbody \u91CC\u7684\u591A\u4E2A\u90E8\u5206\u4F1A\u7528 boundary \u5B57\u7B26\u4E32\u5206\u9694\u3002</li><li${_scopeId}>\u8981\u6CE8\u610F\u8FD9\u56DB\u79CD\u65B9\u6CD5\u4E0D\u662F\u4E92\u65A5\u7684\uFF0C\u800C\u662F\u53EF\u4EE5\u6DF7\u5408\u8D77\u6765\u4F7F\u7528\uFF0C\u4F8B\u5982\u538B\u7F29\u540E\u518D\u5206\u5757\u4F20\u8F93\uFF0C\u6216\u8005\u5206\u6BB5\u540E\u518D\u5206\u5757\uFF0C\u5B9E\u9A8C\u73AF\u5883\u7684 URI\u201C/16-3\u201D\u5C31\u6A21\u62DF\u4E86\u540E\u4E00\u79CD\u7684\u60C5\u5F62\uFF0C\u4F60\u53EF\u4EE5\u81EA\u5DF1\u7528 Telnet \u8BD5\u4E00\u4E0B\u3002</li></ol><h2 id="\u5206\u5757\u4F20\u8F93" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u5206\u5757\u4F20\u8F93" aria-hidden="true"${_scopeId}>#</a> \u5206\u5757\u4F20\u8F93</h2><p${_scopeId}>\u201C\u5316\u6574\u4E3A\u96F6\u201D\u7684\u601D\u8DEF\u5728 HTTP \u534F\u8BAE\u91CC\u5C31\u662F\u201Cchunked\u201D\u5206\u5757\u4F20\u8F93\u7F16\u7801\uFF0C\u5728\u54CD\u5E94\u62A5\u6587\u91CC\u7528\u5934\u5B57\u6BB5\u201CTransfer-Encoding: chunked\u201D\u6765\u8868\u793A\uFF0C\u610F\u601D\u662F\u62A5\u6587\u91CC\u7684 body \u90E8\u5206\u4E0D\u662F\u4E00\u6B21\u6027\u53D1\u8FC7\u6765\u7684\uFF0C\u800C\u662F\u5206\u6210\u4E86\u8BB8\u591A\u7684\u5757\uFF08chunk\uFF09\u9010\u4E2A\u53D1\u9001\u3002</p><p${_scopeId}>\u201CTransfer-Encoding: chunked\u201D\u548C\u201CContent-Length\u201D\u8FD9\u4E24\u4E2A\u5B57\u6BB5\u662F\u4E92\u65A5\u7684\uFF0C\u4E5F\u5C31\u662F\u8BF4\u54CD\u5E94\u62A5\u6587\u91CC\u8FD9\u4E24\u4E2A\u5B57\u6BB5\u4E0D\u80FD\u540C\u65F6\u51FA\u73B0\uFF0C\u4E00\u4E2A\u54CD\u5E94\u62A5\u6587\u7684\u4F20\u8F93\u8981\u4E48\u662F\u957F\u5EA6\u5DF2\u77E5\uFF0C\u8981\u4E48\u662F\u957F\u5EA6\u672A\u77E5\uFF08chunked\uFF09\uFF0C\u8FD9\u4E00\u70B9\u4F60\u4E00\u5B9A\u8981\u8BB0\u4F4F\u3002</p><p${_scopeId}>\u4E0B\u9762\u6211\u4EEC\u6765\u770B\u4E00\u4E0B\u5206\u5757\u4F20\u8F93\u7684\u7F16\u7801\u89C4\u5219\uFF0C\u5176\u5B9E\u4E5F\u5F88\u7B80\u5355\uFF0C\u540C\u6837\u91C7\u7528\u4E86\u660E\u6587\u7684\u65B9\u5F0F\uFF0C\u5F88\u7C7B\u4F3C\u54CD\u5E94\u5934\u3002</p><ol${_scopeId}><li${_scopeId}>\u6BCF\u4E2A\u5206\u5757\u5305\u542B\u4E24\u4E2A\u90E8\u5206\uFF0C\u957F\u5EA6\u5934\u548C\u6570\u636E\u5757\uFF1B</li><li${_scopeId}>\u957F\u5EA6\u5934\u662F\u4EE5 CRLF\uFF08\u56DE\u8F66\u6362\u884C\uFF0C\u5373\\r\\n\uFF09\u7ED3\u5C3E\u7684\u4E00\u884C\u660E\u6587\uFF0C\u7528 16 \u8FDB\u5236\u6570\u5B57\u8868\u793A\u957F\u5EA6\uFF1B</li><li${_scopeId}>\u6570\u636E\u5757\u7D27\u8DDF\u5728\u957F\u5EA6\u5934\u540E\uFF0C\u6700\u540E\u4E5F\u7528 CRLF \u7ED3\u5C3E\uFF0C\u4F46\u6570\u636E\u4E0D\u5305\u542B CRLF\uFF1B</li><li${_scopeId}>\u6700\u540E\u7528\u4E00\u4E2A\u957F\u5EA6\u4E3A 0 \u7684\u5757\u8868\u793A\u7ED3\u675F\uFF0C\u5373\u201C0\\r\\n\\r\\n\u201D\u3002</li></ol><p${_scopeId}><img src="https://static001.geekbang.org/resource/image/25/10/25e7b09cf8cb4eaebba42b4598192410.png" alt=""${_scopeId}></p><h2 id="\u8303\u56F4\u8BF7\u6C42" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u8303\u56F4\u8BF7\u6C42" aria-hidden="true"${_scopeId}>#</a> \u8303\u56F4\u8BF7\u6C42</h2><ol${_scopeId}><li${_scopeId}>\u8BF7\u6C42\u5934</li></ol><ul${_scopeId}><li${_scopeId}><p${_scopeId}>Range \u662F HTTP \u8303\u56F4\u8BF7\u6C42\u7684\u4E13\u7528\u5B57\u6BB5\uFF0C\u683C\u5F0F\u662F\u201Cbytes=x-y\u201D\uFF0C\u5176\u4E2D\u7684 x \u548C y \u662F\u4EE5\u5B57\u8282\u4E3A\u5355\u4F4D\u7684\u6570\u636E\u8303\u56F4\u3002</p></li><li${_scopeId}><p${_scopeId}>\u8981\u6CE8\u610F x\u3001y \u8868\u793A\u7684\u662F\u201C\u504F\u79FB\u91CF\u201D\uFF0C\u8303\u56F4\u5FC5\u987B\u4ECE 0 \u8BA1\u6570\uFF0C\u4F8B\u5982\u524D 10 \u4E2A\u5B57\u8282\u8868\u793A\u4E3A\u201C0-9\u201D\uFF0C\u7B2C\u4E8C\u4E2A 10 \u5B57\u8282\u8868\u793A\u4E3A\u201C10-19\u201D\uFF0C\u800C\u201C0-10\u201D\u5B9E\u9645\u4E0A\u662F\u524D 11 \u4E2A\u5B57\u8282\u3002</p></li></ul><ol start="2"${_scopeId}><li${_scopeId}>\u54CD\u5E94\u5934</li></ol><ul${_scopeId}><li${_scopeId}>Content-Range\uFF0C\u544A\u8BC9\u7247\u6BB5\u7684\u5B9E\u9645\u504F\u79FB\u91CF\u548C\u8D44\u6E90\u7684\u603B\u5927\u5C0F\uFF0C\u683C\u5F0F\u662F\u201Cbytes x-y/length\u201D\uFF0C\u4E0E Range \u5934\u533A\u522B\u5728\u6CA1\u6709\u201C=\u201D\uFF0C\u8303\u56F4\u540E\u591A\u4E86\u603B\u957F\u5EA6\u3002\u4F8B\u5982\uFF0C\u5BF9\u4E8E\u201C0-10\u201D\u7684\u8303\u56F4\u8BF7\u6C42\uFF0C\u503C\u5C31\u662F\u201Cbytes 0-10/100\u201D\u3002</li></ul><h2 id="\u591A\u6BB5\u6570\u636E" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u591A\u6BB5\u6570\u636E" aria-hidden="true"${_scopeId}>#</a> \u591A\u6BB5\u6570\u636E</h2><p${_scopeId}>\u8FD9\u79CD\u60C5\u51B5\u9700\u8981\u4F7F\u7528\u4E00\u79CD\u7279\u6B8A\u7684 MIME \u7C7B\u578B\uFF1A\u201Cmultipart/byteranges\u201D\uFF0C\u8868\u793A\u62A5\u6587\u7684 body \u662F\u7531\u591A\u6BB5\u5B57\u8282\u5E8F\u5217\u7EC4\u6210\u7684\uFF0C\u5E76\u4E14\u8FD8\u8981\u7528\u4E00\u4E2A\u53C2\u6570\u201Cboundary=xxx\u201D\u7ED9\u51FA\u6BB5\u4E4B\u95F4\u7684\u5206\u9694\u6807\u8BB0\u3002</p><p${_scopeId}><img src="https://static001.geekbang.org/resource/image/ff/37/fffa3a65e367c496428f3c0c4dac8a37.png" alt=""${_scopeId}></p></div>`);
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
                  vue.createVNode("li", null, "\u538B\u7F29 HTML \u7B49\u6587\u672C\u6587\u4EF6\u662F\u4F20\u8F93\u5927\u6587\u4EF6\u6700\u57FA\u672C\u7684\u65B9\u6CD5\uFF1B"),
                  vue.createVNode("li", null, "\u5206\u5757\u4F20\u8F93\u53EF\u4EE5\u6D41\u5F0F\u6536\u53D1\u6570\u636E\uFF0C\u8282\u7EA6\u5185\u5B58\u548C\u5E26\u5BBD\uFF0C\u4F7F\u7528\u54CD\u5E94\u5934\u5B57\u6BB5\u201CTransfer-Encoding: chunked\u201D\u6765\u8868\u793A\uFF0C\u5206\u5757\u7684\u683C\u5F0F\u662F 16 \u8FDB\u5236\u957F\u5EA6\u5934 + \u6570\u636E\u5757\uFF1B\u8303\u56F4\u8BF7\u6C42\u53EF\u4EE5\u53EA\u83B7\u53D6\u90E8\u5206\u6570\u636E\uFF0C\u5373\u201C\u5206\u5757\u8BF7\u6C42\u201D\uFF0C\u5B9E\u73B0\u89C6\u9891\u62D6\u62FD\u6216\u8005\u65AD\u70B9\u7EED\u4F20\uFF0C\u4F7F\u7528\u8BF7\u6C42\u5934\u5B57\u6BB5\u201CRange\u201D\u548C\u54CD\u5E94\u5934\u5B57\u6BB5\u201CContent-Range\u201D\uFF0C\u54CD\u5E94\u72B6\u6001\u7801\u5FC5\u987B\u662F 206\uFF1B"),
                  vue.createVNode("li", null, "\u4E5F\u53EF\u4EE5\u4E00\u6B21\u8BF7\u6C42\u591A\u4E2A\u8303\u56F4\uFF0C\u8FD9\u65F6\u5019\u54CD\u5E94\u62A5\u6587\u7684\u6570\u636E\u7C7B\u578B\u662F\u201Cmultipart/byteranges\u201D\uFF0Cbody \u91CC\u7684\u591A\u4E2A\u90E8\u5206\u4F1A\u7528 boundary \u5B57\u7B26\u4E32\u5206\u9694\u3002"),
                  vue.createVNode("li", null, "\u8981\u6CE8\u610F\u8FD9\u56DB\u79CD\u65B9\u6CD5\u4E0D\u662F\u4E92\u65A5\u7684\uFF0C\u800C\u662F\u53EF\u4EE5\u6DF7\u5408\u8D77\u6765\u4F7F\u7528\uFF0C\u4F8B\u5982\u538B\u7F29\u540E\u518D\u5206\u5757\u4F20\u8F93\uFF0C\u6216\u8005\u5206\u6BB5\u540E\u518D\u5206\u5757\uFF0C\u5B9E\u9A8C\u73AF\u5883\u7684 URI\u201C/16-3\u201D\u5C31\u6A21\u62DF\u4E86\u540E\u4E00\u79CD\u7684\u60C5\u5F62\uFF0C\u4F60\u53EF\u4EE5\u81EA\u5DF1\u7528 Telnet \u8BD5\u4E00\u4E0B\u3002")
                ]),
                vue.createVNode("h2", {
                  id: "\u5206\u5757\u4F20\u8F93",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u5206\u5757\u4F20\u8F93",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u5206\u5757\u4F20\u8F93")
                ]),
                vue.createVNode("p", null, "\u201C\u5316\u6574\u4E3A\u96F6\u201D\u7684\u601D\u8DEF\u5728 HTTP \u534F\u8BAE\u91CC\u5C31\u662F\u201Cchunked\u201D\u5206\u5757\u4F20\u8F93\u7F16\u7801\uFF0C\u5728\u54CD\u5E94\u62A5\u6587\u91CC\u7528\u5934\u5B57\u6BB5\u201CTransfer-Encoding: chunked\u201D\u6765\u8868\u793A\uFF0C\u610F\u601D\u662F\u62A5\u6587\u91CC\u7684 body \u90E8\u5206\u4E0D\u662F\u4E00\u6B21\u6027\u53D1\u8FC7\u6765\u7684\uFF0C\u800C\u662F\u5206\u6210\u4E86\u8BB8\u591A\u7684\u5757\uFF08chunk\uFF09\u9010\u4E2A\u53D1\u9001\u3002"),
                vue.createVNode("p", null, "\u201CTransfer-Encoding: chunked\u201D\u548C\u201CContent-Length\u201D\u8FD9\u4E24\u4E2A\u5B57\u6BB5\u662F\u4E92\u65A5\u7684\uFF0C\u4E5F\u5C31\u662F\u8BF4\u54CD\u5E94\u62A5\u6587\u91CC\u8FD9\u4E24\u4E2A\u5B57\u6BB5\u4E0D\u80FD\u540C\u65F6\u51FA\u73B0\uFF0C\u4E00\u4E2A\u54CD\u5E94\u62A5\u6587\u7684\u4F20\u8F93\u8981\u4E48\u662F\u957F\u5EA6\u5DF2\u77E5\uFF0C\u8981\u4E48\u662F\u957F\u5EA6\u672A\u77E5\uFF08chunked\uFF09\uFF0C\u8FD9\u4E00\u70B9\u4F60\u4E00\u5B9A\u8981\u8BB0\u4F4F\u3002"),
                vue.createVNode("p", null, "\u4E0B\u9762\u6211\u4EEC\u6765\u770B\u4E00\u4E0B\u5206\u5757\u4F20\u8F93\u7684\u7F16\u7801\u89C4\u5219\uFF0C\u5176\u5B9E\u4E5F\u5F88\u7B80\u5355\uFF0C\u540C\u6837\u91C7\u7528\u4E86\u660E\u6587\u7684\u65B9\u5F0F\uFF0C\u5F88\u7C7B\u4F3C\u54CD\u5E94\u5934\u3002"),
                vue.createVNode("ol", null, [
                  vue.createVNode("li", null, "\u6BCF\u4E2A\u5206\u5757\u5305\u542B\u4E24\u4E2A\u90E8\u5206\uFF0C\u957F\u5EA6\u5934\u548C\u6570\u636E\u5757\uFF1B"),
                  vue.createVNode("li", null, "\u957F\u5EA6\u5934\u662F\u4EE5 CRLF\uFF08\u56DE\u8F66\u6362\u884C\uFF0C\u5373\\r\\n\uFF09\u7ED3\u5C3E\u7684\u4E00\u884C\u660E\u6587\uFF0C\u7528 16 \u8FDB\u5236\u6570\u5B57\u8868\u793A\u957F\u5EA6\uFF1B"),
                  vue.createVNode("li", null, "\u6570\u636E\u5757\u7D27\u8DDF\u5728\u957F\u5EA6\u5934\u540E\uFF0C\u6700\u540E\u4E5F\u7528 CRLF \u7ED3\u5C3E\uFF0C\u4F46\u6570\u636E\u4E0D\u5305\u542B CRLF\uFF1B"),
                  vue.createVNode("li", null, "\u6700\u540E\u7528\u4E00\u4E2A\u957F\u5EA6\u4E3A 0 \u7684\u5757\u8868\u793A\u7ED3\u675F\uFF0C\u5373\u201C0\\r\\n\\r\\n\u201D\u3002")
                ]),
                vue.createVNode("p", null, [
                  vue.createVNode("img", {
                    src: "https://static001.geekbang.org/resource/image/25/10/25e7b09cf8cb4eaebba42b4598192410.png",
                    alt: ""
                  })
                ]),
                vue.createVNode("h2", {
                  id: "\u8303\u56F4\u8BF7\u6C42",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u8303\u56F4\u8BF7\u6C42",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u8303\u56F4\u8BF7\u6C42")
                ]),
                vue.createVNode("ol", null, [
                  vue.createVNode("li", null, "\u8BF7\u6C42\u5934")
                ]),
                vue.createVNode("ul", null, [
                  vue.createVNode("li", null, [
                    vue.createVNode("p", null, "Range \u662F HTTP \u8303\u56F4\u8BF7\u6C42\u7684\u4E13\u7528\u5B57\u6BB5\uFF0C\u683C\u5F0F\u662F\u201Cbytes=x-y\u201D\uFF0C\u5176\u4E2D\u7684 x \u548C y \u662F\u4EE5\u5B57\u8282\u4E3A\u5355\u4F4D\u7684\u6570\u636E\u8303\u56F4\u3002")
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("p", null, "\u8981\u6CE8\u610F x\u3001y \u8868\u793A\u7684\u662F\u201C\u504F\u79FB\u91CF\u201D\uFF0C\u8303\u56F4\u5FC5\u987B\u4ECE 0 \u8BA1\u6570\uFF0C\u4F8B\u5982\u524D 10 \u4E2A\u5B57\u8282\u8868\u793A\u4E3A\u201C0-9\u201D\uFF0C\u7B2C\u4E8C\u4E2A 10 \u5B57\u8282\u8868\u793A\u4E3A\u201C10-19\u201D\uFF0C\u800C\u201C0-10\u201D\u5B9E\u9645\u4E0A\u662F\u524D 11 \u4E2A\u5B57\u8282\u3002")
                  ])
                ]),
                vue.createVNode("ol", { start: "2" }, [
                  vue.createVNode("li", null, "\u54CD\u5E94\u5934")
                ]),
                vue.createVNode("ul", null, [
                  vue.createVNode("li", null, "Content-Range\uFF0C\u544A\u8BC9\u7247\u6BB5\u7684\u5B9E\u9645\u504F\u79FB\u91CF\u548C\u8D44\u6E90\u7684\u603B\u5927\u5C0F\uFF0C\u683C\u5F0F\u662F\u201Cbytes x-y/length\u201D\uFF0C\u4E0E Range \u5934\u533A\u522B\u5728\u6CA1\u6709\u201C=\u201D\uFF0C\u8303\u56F4\u540E\u591A\u4E86\u603B\u957F\u5EA6\u3002\u4F8B\u5982\uFF0C\u5BF9\u4E8E\u201C0-10\u201D\u7684\u8303\u56F4\u8BF7\u6C42\uFF0C\u503C\u5C31\u662F\u201Cbytes 0-10/100\u201D\u3002")
                ]),
                vue.createVNode("h2", {
                  id: "\u591A\u6BB5\u6570\u636E",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u591A\u6BB5\u6570\u636E",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u591A\u6BB5\u6570\u636E")
                ]),
                vue.createVNode("p", null, "\u8FD9\u79CD\u60C5\u51B5\u9700\u8981\u4F7F\u7528\u4E00\u79CD\u7279\u6B8A\u7684 MIME \u7C7B\u578B\uFF1A\u201Cmultipart/byteranges\u201D\uFF0C\u8868\u793A\u62A5\u6587\u7684 body \u662F\u7531\u591A\u6BB5\u5B57\u8282\u5E8F\u5217\u7EC4\u6210\u7684\uFF0C\u5E76\u4E14\u8FD8\u8981\u7528\u4E00\u4E2A\u53C2\u6570\u201Cboundary=xxx\u201D\u7ED9\u51FA\u6BB5\u4E4B\u95F4\u7684\u5206\u9694\u6807\u8BB0\u3002"),
                vue.createVNode("p", null, [
                  vue.createVNode("img", {
                    src: "https://static001.geekbang.org/resource/image/ff/37/fffa3a65e367c496428f3c0c4dac8a37.png",
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
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/childPages/http/httpchuanshudawenjian.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports["default"] = _sfc_main;
