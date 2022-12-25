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
    const frontmatter = { "title": "17 | \u6392\u961F\u4E5F\u8981\u8BB2\u6548\u7387\uFF1AHTTP\u7684\u8FDE\u63A5\u7BA1\u7406", "date": "2021-10-27T16:00:00.000Z", "duration": "10min", "meta": [{ "property": "og:title", "content": "17 | \u6392\u961F\u4E5F\u8981\u8BB2\u6548\u7387\uFF1AHTTP\u7684\u8FDE\u63A5\u7BA1\u7406" }] };
    expose({ frontmatter });
    const head$1 = { "title": "17 | \u6392\u961F\u4E5F\u8981\u8BB2\u6548\u7387\uFF1AHTTP\u7684\u8FDE\u63A5\u7BA1\u7406", "meta": [{ "property": "og:title", "content": "17 | \u6392\u961F\u4E5F\u8981\u8BB2\u6548\u7387\uFF1AHTTP\u7684\u8FDE\u63A5\u7BA1\u7406" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Blog = Blog._sfc_main;
      _push(serverRenderer.ssrRenderComponent(_component_Blog, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><h2 id="\u5F52\u7EB3" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u5F52\u7EB3" aria-hidden="true"${_scopeId}>#</a> \u5F52\u7EB3</h2><ol${_scopeId}><li${_scopeId}>\u65E9\u671F\u7684 HTTP \u534F\u8BAE\u4F7F\u7528\u77ED\u8FDE\u63A5\uFF0C\u6536\u5230\u54CD\u5E94\u540E\u5C31\u7ACB\u5373\u5173\u95ED\u8FDE\u63A5\uFF0C\u6548\u7387\u5F88\u4F4E\uFF1B</li><li${_scopeId}>HTTP/1.1 \u9ED8\u8BA4\u542F\u7528\u957F\u8FDE\u63A5\uFF0C\u5728\u4E00\u4E2A\u8FDE\u63A5\u4E0A\u6536\u53D1\u591A\u4E2A\u8BF7\u6C42\u54CD\u5E94\uFF0C\u63D0\u9AD8\u4E86\u4F20\u8F93\u6548\u7387\uFF1B</li><li${_scopeId}>\u670D\u52A1\u5668\u4F1A\u53D1\u9001\u201CConnection: keep-alive\u201D\u5B57\u6BB5\u8868\u793A\u542F\u7528\u4E86\u957F\u8FDE\u63A5\uFF1B</li><li${_scopeId}>\u62A5\u6587\u5934\u91CC\u5982\u679C\u6709\u201CConnection: close\u201D\u5C31\u610F\u5473\u7740\u957F\u8FDE\u63A5\u5373\u5C06\u5173\u95ED\uFF1B</li><li${_scopeId}>\u8FC7\u591A\u7684\u957F\u8FDE\u63A5\u4F1A\u5360\u7528\u670D\u52A1\u5668\u8D44\u6E90\uFF0C\u6240\u4EE5\u670D\u52A1\u5668\u4F1A\u7528\u4E00\u4E9B\u7B56\u7565\u6709\u9009\u62E9\u5730\u5173\u95ED\u957F\u8FDE\u63A5\uFF1B</li><li${_scopeId}>\u201C\u961F\u5934\u963B\u585E\u201D\u95EE\u9898\u4F1A\u5BFC\u81F4\u6027\u80FD\u4E0B\u964D\uFF0C\u53EF\u4EE5\u7528\u201C\u5E76\u53D1\u8FDE\u63A5\u201D\u548C\u201C\u57DF\u540D\u5206\u7247\u201D\u6280\u672F\u7F13\u89E3\u3002</li></ol><h2 id="rtt" tabindex="-1"${_scopeId}><a class="header-anchor" href="#rtt" aria-hidden="true"${_scopeId}>#</a> RTT</h2><blockquote${_scopeId}><p${_scopeId}>\u5B9A\u4E49\u5F80\u8FD4\u65F6\u95F4(round trip time\uFF0C\u7B80\u79F0RTT)</p></blockquote><h2 id="\u77ED\u8FDE\u63A5" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u77ED\u8FDE\u63A5" aria-hidden="true"${_scopeId}>#</a> \u77ED\u8FDE\u63A5</h2><p${_scopeId}>\u77ED\u8FDE\u63A5\u7684\u7F3A\u70B9\u76F8\u5F53\u4E25\u91CD\uFF0C\u56E0\u4E3A\u5728 TCP \u534F\u8BAE\u91CC\uFF0C\u5EFA\u7ACB\u8FDE\u63A5\u548C\u5173\u95ED\u8FDE\u63A5\u90FD\u662F\u975E\u5E38\u201C\u6602\u8D35\u201D\u7684\u64CD\u4F5C\u3002TCP \u5EFA\u7ACB\u8FDE\u63A5\u8981\u6709\u201C\u4E09\u6B21\u63E1\u624B\u201D\uFF0C\u53D1\u9001 3 \u4E2A\u6570\u636E\u5305\uFF0C\u9700\u8981 1 \u4E2A RTT\uFF1B\u5173\u95ED\u8FDE\u63A5\u662F\u201C\u56DB\u6B21\u6325\u624B\u201D\uFF0C4 \u4E2A\u6570\u636E\u5305\u9700\u8981 2 \u4E2A RTT\u3002</p><p${_scopeId}>\u800C HTTP \u7684\u4E00\u6B21\u7B80\u5355\u201C\u8BF7\u6C42 - \u54CD\u5E94\u201D\u901A\u5E38\u53EA\u9700\u8981 4 \u4E2A\u5305\uFF0C\u5982\u679C\u4E0D\u7B97\u670D\u52A1\u5668\u5185\u90E8\u7684\u5904\u7406\u65F6\u95F4\uFF0C\u6700\u591A\u662F 2 \u4E2A RTT\u3002\u8FD9\u4E48\u7B97\u4E0B\u6765\uFF0C\u6D6A\u8D39\u7684\u65F6\u95F4\u5C31\u662F\u201C3\xF75=60%\u201D\uFF0C\u6709\u4E09\u5206\u4E4B\u4E8C\u7684\u65F6\u95F4\u88AB\u6D6A\u8D39\u6389\u4E86\uFF0C\u4F20\u8F93\u6548\u7387\u4F4E\u5F97\u60CA\u4EBA\u3002</p><h2 id="\u957F\u8FDE\u63A5" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u957F\u8FDE\u63A5" aria-hidden="true"${_scopeId}>#</a> \u957F\u8FDE\u63A5</h2><p${_scopeId}>\u9488\u5BF9\u77ED\u8FDE\u63A5\u66B4\u9732\u51FA\u7684\u7F3A\u70B9\uFF0CHTTP \u534F\u8BAE\u5C31\u63D0\u51FA\u4E86\u201C\u957F\u8FDE\u63A5\u201D\u7684\u901A\u4FE1\u65B9\u5F0F\uFF0C\u4E5F\u53EB\u201C\u6301\u4E45\u8FDE\u63A5\u201D\uFF08persistent connections\uFF09\u3001\u201C\u8FDE\u63A5\u4FDD\u6D3B\u201D\uFF08keep alive\uFF09\u3001\u201C\u8FDE\u63A5\u590D\u7528\u201D\uFF08connection reuse\uFF09\u3002</p><p${_scopeId}>\u5176\u5B9E\u89E3\u51B3\u529E\u6CD5\u4E5F\u5F88\u7B80\u5355\uFF0C\u7528\u7684\u5C31\u662F\u201C\u6210\u672C\u5747\u644A\u201D\u7684\u601D\u8DEF\uFF0C\u65E2\u7136 TCP \u7684\u8FDE\u63A5\u548C\u5173\u95ED\u975E\u5E38\u8017\u65F6\u95F4\uFF0C\u90A3\u4E48\u5C31\u628A\u8FD9\u4E2A\u65F6\u95F4\u6210\u672C\u7531\u539F\u6765\u7684\u4E00\u4E2A\u201C\u8BF7\u6C42 - \u5E94\u7B54\u201D\u5747\u644A\u5230\u591A\u4E2A\u201C\u8BF7\u6C42 - \u5E94\u7B54\u201D\u4E0A\u3002</p><h2 id="\u5BF9\u6BD4" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u5BF9\u6BD4" aria-hidden="true"${_scopeId}>#</a> \u5BF9\u6BD4</h2><p${_scopeId}><img src="https://static001.geekbang.org/resource/image/57/b4/57b3d80234a1f1b8c538a376aa01d3b4.png" alt=""${_scopeId}></p><h2 id="\u76F8\u5173\u5934\u5B57\u6BB5" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u76F8\u5173\u5934\u5B57\u6BB5" aria-hidden="true"${_scopeId}>#</a> \u76F8\u5173\u5934\u5B57\u6BB5</h2><p${_scopeId}>\u4F7F\u7528\u7684\u5B57\u6BB5\u662F Connection\uFF0C\u503C\u662F\u201Ckeep-alive\u201D\u3002</p><h2 id="\u957F\u8FDE\u63A5\u7684\u7F3A\u70B9" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u957F\u8FDE\u63A5\u7684\u7F3A\u70B9" aria-hidden="true"${_scopeId}>#</a> \u957F\u8FDE\u63A5\u7684\u7F3A\u70B9</h2><p${_scopeId}>\u56E0\u4E3A TCP \u8FDE\u63A5\u957F\u65F6\u95F4\u4E0D\u5173\u95ED\uFF0C\u670D\u52A1\u5668\u5FC5\u987B\u5728\u5185\u5B58\u91CC\u4FDD\u5B58\u5B83\u7684\u72B6\u6001\uFF0C\u8FD9\u5C31\u5360\u7528\u4E86\u670D\u52A1\u5668\u7684\u8D44\u6E90\u3002\u5982\u679C\u6709\u5927\u91CF\u7684\u7A7A\u95F2\u957F\u8FDE\u63A5\u53EA\u8FDE\u4E0D\u53D1\uFF0C\u5C31\u4F1A\u5F88\u5FEB\u8017\u5C3D\u670D\u52A1\u5668\u7684\u8D44\u6E90\uFF0C\u5BFC\u81F4\u670D\u52A1\u5668\u65E0\u6CD5\u4E3A\u771F\u6B63\u6709\u9700\u8981\u7684\u7528\u6237\u63D0\u4F9B\u670D\u52A1\u3002</p><ol${_scopeId}><li${_scopeId}><p${_scopeId}>\u4E3B\u52A8\u5173\u95ED</p><ul${_scopeId}><li${_scopeId}>\u53EF\u4EE5\u5728\u8BF7\u6C42\u5934\u91CC\u52A0\u4E0A\u201CConnection: close\u201D\u5B57\u6BB5</li></ul></li><li${_scopeId}><p${_scopeId}>\u914D\u7F6E\u7B56\u7565</p><ul${_scopeId}><li${_scopeId}>\u4F7F\u7528\u201Ckeepalive_timeout\u201D\u6307\u4EE4\uFF0C\u8BBE\u7F6E\u957F\u8FDE\u63A5\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u5982\u679C\u5728\u4E00\u6BB5\u65F6\u95F4\u5185\u8FDE\u63A5\u4E0A\u6CA1\u6709\u4EFB\u4F55\u6570\u636E\u6536\u53D1\u5C31\u4E3B\u52A8\u65AD\u5F00\u8FDE\u63A5\uFF0C\u907F\u514D\u7A7A\u95F2\u8FDE\u63A5\u5360\u7528\u7CFB\u7EDF\u8D44\u6E90\u3002</li><li${_scopeId}>\u4F7F\u7528\u201Ckeepalive_requests\u201D\u6307\u4EE4\uFF0C\u8BBE\u7F6E\u957F\u8FDE\u63A5\u4E0A\u53EF\u53D1\u9001\u7684\u6700\u5927\u8BF7\u6C42\u6B21\u6570\u3002\u6BD4\u5982\u8BBE\u7F6E\u6210 1000\uFF0C\u90A3\u4E48\u5F53 Nginx \u5728\u8FD9\u4E2A\u8FDE\u63A5\u4E0A\u5904\u7406\u4E86 1000 \u4E2A\u8BF7\u6C42\u540E\uFF0C\u4E5F\u4F1A\u4E3B\u52A8\u65AD\u5F00\u8FDE\u63A5\u3002</li></ul></li></ol><h2 id="\u5BF9\u5934\u963B\u585E" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u5BF9\u5934\u963B\u585E" aria-hidden="true"${_scopeId}>#</a> \u5BF9\u5934\u963B\u585E</h2><p${_scopeId}>\u201C\u961F\u5934\u963B\u585E\u201D\u4E0E\u77ED\u8FDE\u63A5\u548C\u957F\u8FDE\u63A5\u65E0\u5173\uFF0C\u800C\u662F\u7531 HTTP \u57FA\u672C\u7684\u201C\u8BF7\u6C42 - \u5E94\u7B54\u201D\u6A21\u578B\u6240\u5BFC\u81F4\u7684\u3002</p><p${_scopeId}>\u56E0\u4E3A HTTP \u89C4\u5B9A\u62A5\u6587\u5FC5\u987B\u662F\u201C\u4E00\u53D1\u4E00\u6536\u201D\uFF0C\u8FD9\u5C31\u5F62\u6210\u4E86\u4E00\u4E2A\u5148\u8FDB\u5148\u51FA\u7684\u201C\u4E32\u884C\u201D\u961F\u5217\u3002\u961F\u5217\u91CC\u7684\u8BF7\u6C42\u6CA1\u6709\u8F7B\u91CD\u7F13\u6025\u7684\u4F18\u5148\u7EA7\uFF0C\u53EA\u6709\u5165\u961F\u7684\u5148\u540E\u987A\u5E8F\uFF0C\u6392\u5728\u6700\u524D\u9762\u7684\u8BF7\u6C42\u88AB\u6700\u4F18\u5148\u5904\u7406\u3002</p><h4 id="\u4F18\u5316" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u4F18\u5316" aria-hidden="true"${_scopeId}>#</a> \u4F18\u5316</h4><ol${_scopeId}><li${_scopeId}>\u5E76\u53D1\u94FE\u63A5 <ul${_scopeId}><li${_scopeId}>\u8FD9\u5728 HTTP \u91CC\u5C31\u662F\u201C\u5E76\u53D1\u8FDE\u63A5\u201D\uFF08concurrent connections\uFF09\uFF0C\u4E5F\u5C31\u662F\u540C\u65F6\u5BF9\u4E00\u4E2A\u57DF\u540D\u53D1\u8D77\u591A\u4E2A\u957F\u8FDE\u63A5\uFF0C\u7528\u6570\u91CF\u6765\u89E3\u51B3\u8D28\u91CF\u7684\u95EE\u9898\u3002</li><li${_scopeId}>\u6D4F\u89C8\u5668\u89C4\u5B9A\u6700\u591A6~8\u4E2ATCP\u94FE\u63A5</li></ul></li></ol><h3 id="http\u548Ctcp\u5C42\u9762\u7684\u963B\u585E" tabindex="-1"${_scopeId}><a class="header-anchor" href="#http\u548Ctcp\u5C42\u9762\u7684\u963B\u585E" aria-hidden="true"${_scopeId}>#</a> \b\bhttp\u548Ctcp\u5C42\u9762\u7684\u963B\u585E</h3><p${_scopeId}>\u961F\u5934\u963B\u585E\u6709\u4E24\u4E2A\u5C42\u9762\uFF0C\u4E00\u4E2A\u662FHTTP\u7684\u957F\u8FDE\u63A5\u6392\u961F\u8BF7\u6C42\u5904\u7406\uFF0C\u53E6\u4E00\u4E2A\u662FTCP\u7684\u4E22\u5305\u91CD\u4F20\u673A\u5236\u3002</p></div>`);
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
                  vue.createVNode("li", null, "\u65E9\u671F\u7684 HTTP \u534F\u8BAE\u4F7F\u7528\u77ED\u8FDE\u63A5\uFF0C\u6536\u5230\u54CD\u5E94\u540E\u5C31\u7ACB\u5373\u5173\u95ED\u8FDE\u63A5\uFF0C\u6548\u7387\u5F88\u4F4E\uFF1B"),
                  vue.createVNode("li", null, "HTTP/1.1 \u9ED8\u8BA4\u542F\u7528\u957F\u8FDE\u63A5\uFF0C\u5728\u4E00\u4E2A\u8FDE\u63A5\u4E0A\u6536\u53D1\u591A\u4E2A\u8BF7\u6C42\u54CD\u5E94\uFF0C\u63D0\u9AD8\u4E86\u4F20\u8F93\u6548\u7387\uFF1B"),
                  vue.createVNode("li", null, "\u670D\u52A1\u5668\u4F1A\u53D1\u9001\u201CConnection: keep-alive\u201D\u5B57\u6BB5\u8868\u793A\u542F\u7528\u4E86\u957F\u8FDE\u63A5\uFF1B"),
                  vue.createVNode("li", null, "\u62A5\u6587\u5934\u91CC\u5982\u679C\u6709\u201CConnection: close\u201D\u5C31\u610F\u5473\u7740\u957F\u8FDE\u63A5\u5373\u5C06\u5173\u95ED\uFF1B"),
                  vue.createVNode("li", null, "\u8FC7\u591A\u7684\u957F\u8FDE\u63A5\u4F1A\u5360\u7528\u670D\u52A1\u5668\u8D44\u6E90\uFF0C\u6240\u4EE5\u670D\u52A1\u5668\u4F1A\u7528\u4E00\u4E9B\u7B56\u7565\u6709\u9009\u62E9\u5730\u5173\u95ED\u957F\u8FDE\u63A5\uFF1B"),
                  vue.createVNode("li", null, "\u201C\u961F\u5934\u963B\u585E\u201D\u95EE\u9898\u4F1A\u5BFC\u81F4\u6027\u80FD\u4E0B\u964D\uFF0C\u53EF\u4EE5\u7528\u201C\u5E76\u53D1\u8FDE\u63A5\u201D\u548C\u201C\u57DF\u540D\u5206\u7247\u201D\u6280\u672F\u7F13\u89E3\u3002")
                ]),
                vue.createVNode("h2", {
                  id: "rtt",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#rtt",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" RTT")
                ]),
                vue.createVNode("blockquote", null, [
                  vue.createVNode("p", null, "\u5B9A\u4E49\u5F80\u8FD4\u65F6\u95F4(round trip time\uFF0C\u7B80\u79F0RTT)")
                ]),
                vue.createVNode("h2", {
                  id: "\u77ED\u8FDE\u63A5",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u77ED\u8FDE\u63A5",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u77ED\u8FDE\u63A5")
                ]),
                vue.createVNode("p", null, "\u77ED\u8FDE\u63A5\u7684\u7F3A\u70B9\u76F8\u5F53\u4E25\u91CD\uFF0C\u56E0\u4E3A\u5728 TCP \u534F\u8BAE\u91CC\uFF0C\u5EFA\u7ACB\u8FDE\u63A5\u548C\u5173\u95ED\u8FDE\u63A5\u90FD\u662F\u975E\u5E38\u201C\u6602\u8D35\u201D\u7684\u64CD\u4F5C\u3002TCP \u5EFA\u7ACB\u8FDE\u63A5\u8981\u6709\u201C\u4E09\u6B21\u63E1\u624B\u201D\uFF0C\u53D1\u9001 3 \u4E2A\u6570\u636E\u5305\uFF0C\u9700\u8981 1 \u4E2A RTT\uFF1B\u5173\u95ED\u8FDE\u63A5\u662F\u201C\u56DB\u6B21\u6325\u624B\u201D\uFF0C4 \u4E2A\u6570\u636E\u5305\u9700\u8981 2 \u4E2A RTT\u3002"),
                vue.createVNode("p", null, "\u800C HTTP \u7684\u4E00\u6B21\u7B80\u5355\u201C\u8BF7\u6C42 - \u54CD\u5E94\u201D\u901A\u5E38\u53EA\u9700\u8981 4 \u4E2A\u5305\uFF0C\u5982\u679C\u4E0D\u7B97\u670D\u52A1\u5668\u5185\u90E8\u7684\u5904\u7406\u65F6\u95F4\uFF0C\u6700\u591A\u662F 2 \u4E2A RTT\u3002\u8FD9\u4E48\u7B97\u4E0B\u6765\uFF0C\u6D6A\u8D39\u7684\u65F6\u95F4\u5C31\u662F\u201C3\xF75=60%\u201D\uFF0C\u6709\u4E09\u5206\u4E4B\u4E8C\u7684\u65F6\u95F4\u88AB\u6D6A\u8D39\u6389\u4E86\uFF0C\u4F20\u8F93\u6548\u7387\u4F4E\u5F97\u60CA\u4EBA\u3002"),
                vue.createVNode("h2", {
                  id: "\u957F\u8FDE\u63A5",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u957F\u8FDE\u63A5",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u957F\u8FDE\u63A5")
                ]),
                vue.createVNode("p", null, "\u9488\u5BF9\u77ED\u8FDE\u63A5\u66B4\u9732\u51FA\u7684\u7F3A\u70B9\uFF0CHTTP \u534F\u8BAE\u5C31\u63D0\u51FA\u4E86\u201C\u957F\u8FDE\u63A5\u201D\u7684\u901A\u4FE1\u65B9\u5F0F\uFF0C\u4E5F\u53EB\u201C\u6301\u4E45\u8FDE\u63A5\u201D\uFF08persistent connections\uFF09\u3001\u201C\u8FDE\u63A5\u4FDD\u6D3B\u201D\uFF08keep alive\uFF09\u3001\u201C\u8FDE\u63A5\u590D\u7528\u201D\uFF08connection reuse\uFF09\u3002"),
                vue.createVNode("p", null, "\u5176\u5B9E\u89E3\u51B3\u529E\u6CD5\u4E5F\u5F88\u7B80\u5355\uFF0C\u7528\u7684\u5C31\u662F\u201C\u6210\u672C\u5747\u644A\u201D\u7684\u601D\u8DEF\uFF0C\u65E2\u7136 TCP \u7684\u8FDE\u63A5\u548C\u5173\u95ED\u975E\u5E38\u8017\u65F6\u95F4\uFF0C\u90A3\u4E48\u5C31\u628A\u8FD9\u4E2A\u65F6\u95F4\u6210\u672C\u7531\u539F\u6765\u7684\u4E00\u4E2A\u201C\u8BF7\u6C42 - \u5E94\u7B54\u201D\u5747\u644A\u5230\u591A\u4E2A\u201C\u8BF7\u6C42 - \u5E94\u7B54\u201D\u4E0A\u3002"),
                vue.createVNode("h2", {
                  id: "\u5BF9\u6BD4",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u5BF9\u6BD4",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u5BF9\u6BD4")
                ]),
                vue.createVNode("p", null, [
                  vue.createVNode("img", {
                    src: "https://static001.geekbang.org/resource/image/57/b4/57b3d80234a1f1b8c538a376aa01d3b4.png",
                    alt: ""
                  })
                ]),
                vue.createVNode("h2", {
                  id: "\u76F8\u5173\u5934\u5B57\u6BB5",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u76F8\u5173\u5934\u5B57\u6BB5",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u76F8\u5173\u5934\u5B57\u6BB5")
                ]),
                vue.createVNode("p", null, "\u4F7F\u7528\u7684\u5B57\u6BB5\u662F Connection\uFF0C\u503C\u662F\u201Ckeep-alive\u201D\u3002"),
                vue.createVNode("h2", {
                  id: "\u957F\u8FDE\u63A5\u7684\u7F3A\u70B9",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u957F\u8FDE\u63A5\u7684\u7F3A\u70B9",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u957F\u8FDE\u63A5\u7684\u7F3A\u70B9")
                ]),
                vue.createVNode("p", null, "\u56E0\u4E3A TCP \u8FDE\u63A5\u957F\u65F6\u95F4\u4E0D\u5173\u95ED\uFF0C\u670D\u52A1\u5668\u5FC5\u987B\u5728\u5185\u5B58\u91CC\u4FDD\u5B58\u5B83\u7684\u72B6\u6001\uFF0C\u8FD9\u5C31\u5360\u7528\u4E86\u670D\u52A1\u5668\u7684\u8D44\u6E90\u3002\u5982\u679C\u6709\u5927\u91CF\u7684\u7A7A\u95F2\u957F\u8FDE\u63A5\u53EA\u8FDE\u4E0D\u53D1\uFF0C\u5C31\u4F1A\u5F88\u5FEB\u8017\u5C3D\u670D\u52A1\u5668\u7684\u8D44\u6E90\uFF0C\u5BFC\u81F4\u670D\u52A1\u5668\u65E0\u6CD5\u4E3A\u771F\u6B63\u6709\u9700\u8981\u7684\u7528\u6237\u63D0\u4F9B\u670D\u52A1\u3002"),
                vue.createVNode("ol", null, [
                  vue.createVNode("li", null, [
                    vue.createVNode("p", null, "\u4E3B\u52A8\u5173\u95ED"),
                    vue.createVNode("ul", null, [
                      vue.createVNode("li", null, "\u53EF\u4EE5\u5728\u8BF7\u6C42\u5934\u91CC\u52A0\u4E0A\u201CConnection: close\u201D\u5B57\u6BB5")
                    ])
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("p", null, "\u914D\u7F6E\u7B56\u7565"),
                    vue.createVNode("ul", null, [
                      vue.createVNode("li", null, "\u4F7F\u7528\u201Ckeepalive_timeout\u201D\u6307\u4EE4\uFF0C\u8BBE\u7F6E\u957F\u8FDE\u63A5\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u5982\u679C\u5728\u4E00\u6BB5\u65F6\u95F4\u5185\u8FDE\u63A5\u4E0A\u6CA1\u6709\u4EFB\u4F55\u6570\u636E\u6536\u53D1\u5C31\u4E3B\u52A8\u65AD\u5F00\u8FDE\u63A5\uFF0C\u907F\u514D\u7A7A\u95F2\u8FDE\u63A5\u5360\u7528\u7CFB\u7EDF\u8D44\u6E90\u3002"),
                      vue.createVNode("li", null, "\u4F7F\u7528\u201Ckeepalive_requests\u201D\u6307\u4EE4\uFF0C\u8BBE\u7F6E\u957F\u8FDE\u63A5\u4E0A\u53EF\u53D1\u9001\u7684\u6700\u5927\u8BF7\u6C42\u6B21\u6570\u3002\u6BD4\u5982\u8BBE\u7F6E\u6210 1000\uFF0C\u90A3\u4E48\u5F53 Nginx \u5728\u8FD9\u4E2A\u8FDE\u63A5\u4E0A\u5904\u7406\u4E86 1000 \u4E2A\u8BF7\u6C42\u540E\uFF0C\u4E5F\u4F1A\u4E3B\u52A8\u65AD\u5F00\u8FDE\u63A5\u3002")
                    ])
                  ])
                ]),
                vue.createVNode("h2", {
                  id: "\u5BF9\u5934\u963B\u585E",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u5BF9\u5934\u963B\u585E",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u5BF9\u5934\u963B\u585E")
                ]),
                vue.createVNode("p", null, "\u201C\u961F\u5934\u963B\u585E\u201D\u4E0E\u77ED\u8FDE\u63A5\u548C\u957F\u8FDE\u63A5\u65E0\u5173\uFF0C\u800C\u662F\u7531 HTTP \u57FA\u672C\u7684\u201C\u8BF7\u6C42 - \u5E94\u7B54\u201D\u6A21\u578B\u6240\u5BFC\u81F4\u7684\u3002"),
                vue.createVNode("p", null, "\u56E0\u4E3A HTTP \u89C4\u5B9A\u62A5\u6587\u5FC5\u987B\u662F\u201C\u4E00\u53D1\u4E00\u6536\u201D\uFF0C\u8FD9\u5C31\u5F62\u6210\u4E86\u4E00\u4E2A\u5148\u8FDB\u5148\u51FA\u7684\u201C\u4E32\u884C\u201D\u961F\u5217\u3002\u961F\u5217\u91CC\u7684\u8BF7\u6C42\u6CA1\u6709\u8F7B\u91CD\u7F13\u6025\u7684\u4F18\u5148\u7EA7\uFF0C\u53EA\u6709\u5165\u961F\u7684\u5148\u540E\u987A\u5E8F\uFF0C\u6392\u5728\u6700\u524D\u9762\u7684\u8BF7\u6C42\u88AB\u6700\u4F18\u5148\u5904\u7406\u3002"),
                vue.createVNode("h4", {
                  id: "\u4F18\u5316",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u4F18\u5316",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u4F18\u5316")
                ]),
                vue.createVNode("ol", null, [
                  vue.createVNode("li", null, [
                    vue.createTextVNode("\u5E76\u53D1\u94FE\u63A5 "),
                    vue.createVNode("ul", null, [
                      vue.createVNode("li", null, "\u8FD9\u5728 HTTP \u91CC\u5C31\u662F\u201C\u5E76\u53D1\u8FDE\u63A5\u201D\uFF08concurrent connections\uFF09\uFF0C\u4E5F\u5C31\u662F\u540C\u65F6\u5BF9\u4E00\u4E2A\u57DF\u540D\u53D1\u8D77\u591A\u4E2A\u957F\u8FDE\u63A5\uFF0C\u7528\u6570\u91CF\u6765\u89E3\u51B3\u8D28\u91CF\u7684\u95EE\u9898\u3002"),
                      vue.createVNode("li", null, "\u6D4F\u89C8\u5668\u89C4\u5B9A\u6700\u591A6~8\u4E2ATCP\u94FE\u63A5")
                    ])
                  ])
                ]),
                vue.createVNode("h3", {
                  id: "http\u548Ctcp\u5C42\u9762\u7684\u963B\u585E",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#http\u548Ctcp\u5C42\u9762\u7684\u963B\u585E",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \b\bhttp\u548Ctcp\u5C42\u9762\u7684\u963B\u585E")
                ]),
                vue.createVNode("p", null, "\u961F\u5934\u963B\u585E\u6709\u4E24\u4E2A\u5C42\u9762\uFF0C\u4E00\u4E2A\u662FHTTP\u7684\u957F\u8FDE\u63A5\u6392\u961F\u8BF7\u6C42\u5904\u7406\uFF0C\u53E6\u4E00\u4E2A\u662FTCP\u7684\u4E22\u5305\u91CD\u4F20\u673A\u5236\u3002")
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
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/childPages/http/httplianjieguanli.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports["default"] = _sfc_main;
