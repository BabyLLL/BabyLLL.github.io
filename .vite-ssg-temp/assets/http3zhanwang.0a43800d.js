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
    const frontmatter = { "title": "32 | \u672A\u6765\u4E4B\u8DEF\uFF1AHTTP/3\u5C55\u671B", "date": "2021-11-15T16:00:00.000Z", "duration": "10min", "meta": [{ "property": "og:title", "content": "32 | \u672A\u6765\u4E4B\u8DEF\uFF1AHTTP/3\u5C55\u671B" }] };
    expose({ frontmatter });
    const head$1 = { "title": "32 | \u672A\u6765\u4E4B\u8DEF\uFF1AHTTP/3\u5C55\u671B", "meta": [{ "property": "og:title", "content": "32 | \u672A\u6765\u4E4B\u8DEF\uFF1AHTTP/3\u5C55\u671B" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Blog = Blog._sfc_main;
      _push(serverRenderer.ssrRenderComponent(_component_Blog, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><h2 id="\u5F52\u7EB3" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u5F52\u7EB3" aria-hidden="true"${_scopeId}>#</a> \u5F52\u7EB3</h2><ol${_scopeId}><li${_scopeId}>HTTP/3 \u57FA\u4E8E QUIC \u534F\u8BAE\uFF0C\u5B8C\u5168\u89E3\u51B3\u4E86\u201C\u961F\u5934\u963B\u585E\u201D\u95EE\u9898\uFF0C\u5F31\u7F51\u73AF\u5883\u4E0B\u7684\u8868\u73B0\u4F1A\u4F18\u4E8E HTTP/2\uFF1B</li><li${_scopeId}>QUIC \u662F\u4E00\u4E2A\u65B0\u7684\u4F20\u8F93\u5C42\u534F\u8BAE\uFF0C\u5EFA\u7ACB\u5728 UDP \u4E4B\u4E0A\uFF0C\u5B9E\u73B0\u4E86\u53EF\u9760\u4F20\u8F93\uFF1B</li><li${_scopeId}>QUIC \u5185\u542B\u4E86 TLS1.3\uFF0C\u53EA\u80FD\u52A0\u5BC6\u901A\u4FE1\uFF0C\u652F\u6301 0-RTT \u5FEB\u901F\u5EFA\u8FDE\uFF1B</li><li${_scopeId}>QUIC \u7684\u8FDE\u63A5\u4F7F\u7528\u201C\u4E0D\u900F\u660E\u201D\u7684\u8FDE\u63A5 ID\uFF0C\u4E0D\u7ED1\u5B9A\u5728\u201CIP \u5730\u5740 + \u7AEF\u53E3\u201D\u4E0A\uFF0C\u652F\u6301\u201C\u8FDE\u63A5\u8FC1\u79FB\u201D\uFF1B</li><li${_scopeId}>QUIC \u7684\u6D41\u4E0E HTTP/2 \u7684\u6D41\u5F88\u76F8\u4F3C\uFF0C\u4F46\u5206\u4E3A\u53CC\u5411\u6D41\u548C\u5355\u5411\u6D41\uFF1B</li><li${_scopeId}>HTTP/3 \u6CA1\u6709\u6307\u5B9A\u9ED8\u8BA4\u7AEF\u53E3\u53F7\uFF0C\u9700\u8981\u7528 HTTP/2 \u7684\u6269\u5C55\u5E27\u201CAlt-Svc\u201D\u6765\u53D1\u73B0\u3002</li></ol><h2 id="http-2\u7684\u961F\u5934\u963B\u585E" tabindex="-1"${_scopeId}><a class="header-anchor" href="#http-2\u7684\u961F\u5934\u963B\u585E" aria-hidden="true"${_scopeId}>#</a> HTTP/2\u7684\u961F\u5934\u963B\u585E</h2><p${_scopeId}>\u56E0\u4E3Atcp\u4E2D\u6709\u4E22\u5305\u91CD\u4F20\u673A\u5236\u3002</p><p${_scopeId}>\u5728http3\u4E2D\u5F15\u5165\u4E86\u65B0\u7684\u534F\u8BAEHTTP over QUIC</p><p${_scopeId}><img src="https://static001.geekbang.org/resource/image/d2/03/d263202e431c84db0fd6c7e6b1980f03.png" alt=""${_scopeId}></p><h2 id="quic-\u534F\u8BAE" tabindex="-1"${_scopeId}><a class="header-anchor" href="#quic-\u534F\u8BAE" aria-hidden="true"${_scopeId}>#</a> QUIC \u534F\u8BAE</h2><p${_scopeId}>QUIC \u6700\u65E9\u662F\u7531 Google \u53D1\u660E\u7684\uFF0C\u88AB\u79F0\u4E3A gQUIC\u3002\u800C\u5F53\u524D\u6B63\u5728\u7531 IETF \u6807\u51C6\u5316\u7684 QUIC \u88AB\u79F0\u4E3A iQUIC\u3002\u4E24\u8005\u7684\u5DEE\u5F02\u975E\u5E38\u5927\uFF0C\u751A\u81F3\u6BD4\u5F53\u5E74\u7684 SPDY \u4E0E HTTP/2 \u7684\u5DEE\u5F02\u8FD8\u8981\u5927\u3002</p><p${_scopeId}>gQUIC \u6DF7\u5408\u4E86 UDP\u3001TLS\u3001HTTP\uFF0C\u662F\u4E00\u4E2A\u5E94\u7528\u5C42\u7684\u534F\u8BAE\u3002\u800C IETF \u5219\u5BF9 gQUIC \u505A\u4E86\u201C\u6E05\u7406\u201D\uFF0C\u628A\u5E94\u7528\u90E8\u5206\u5206\u79BB\u51FA\u6765\uFF0C\u5F62\u6210\u4E86 HTTP/3\uFF0C\u539F\u6765\u7684 UDP \u90E8\u5206\u201C\u4E0B\u653E\u201D\u5230\u4E86\u4F20\u8F93\u5C42\uFF0C\u6240\u4EE5 iQUIC \u6709\u65F6\u5019\u4E5F\u53EB\u201CQUIC-transport\u201D\u3002</p><h2 id="quic-\u7684\u7279\u70B9" tabindex="-1"${_scopeId}><a class="header-anchor" href="#quic-\u7684\u7279\u70B9" aria-hidden="true"${_scopeId}>#</a> QUIC \u7684\u7279\u70B9</h2><p${_scopeId}>QUIC \u57FA\u4E8E UDP\uFF0C\u800C UDP \u662F\u201C\u65E0\u8FDE\u63A5\u201D\u7684\uFF0C\u6839\u672C\u5C31\u4E0D\u9700\u8981\u201C\u63E1\u624B\u201D\u548C\u201C\u6325\u624B\u201D\uFF0C\u6240\u4EE5\u5929\u751F\u5C31\u8981\u6BD4 TCP \u5FEB\u3002</p><p${_scopeId}>\u5C31\u50CF TCP \u5728 IP \u7684\u57FA\u7840\u4E0A\u5B9E\u73B0\u4E86\u53EF\u9760\u4F20\u8F93\u4E00\u6837\uFF0CQUIC \u4E5F\u57FA\u4E8E UDP \u5B9E\u73B0\u4E86\u53EF\u9760\u4F20\u8F93\uFF0C\u4FDD\u8BC1\u6570\u636E\u4E00\u5B9A\u80FD\u591F\u62B5\u8FBE\u76EE\u7684\u5730\u3002\u5B83\u8FD8\u5F15\u5165\u4E86\u7C7B\u4F3C HTTP/2 \u7684\u201C\u6D41\u201D\u548C\u201C\u591A\u8DEF\u590D\u7528\u201D\uFF0C\u5355\u4E2A\u201C\u6D41\u201D\u662F\u6709\u5E8F\u7684\uFF0C\u53EF\u80FD\u4F1A\u56E0\u4E3A\u4E22\u5305\u800C\u963B\u585E\uFF0C\u4F46\u5176\u4ED6\u201C\u6D41\u201D\u4E0D\u4F1A\u53D7\u5230\u5F71\u54CD\u3002</p><p${_scopeId}>\u4E3A\u4E86\u9632\u6B62\u7F51\u7EDC\u4E0A\u7684\u4E2D\u95F4\u8BBE\u5907\uFF08Middle Box\uFF09\u8BC6\u522B\u534F\u8BAE\u7684\u7EC6\u8282\uFF0CQUIC \u5168\u9762\u91C7\u7528\u52A0\u5BC6\u901A\u4FE1\uFF0C\u53EF\u4EE5\u5F88\u597D\u5730\u62B5\u5FA1\u7A9C\u6539\u548C\u201C\u534F\u8BAE\u50F5\u5316\u201D\uFF08ossification\uFF09\u3002</p><p${_scopeId}>\u800C\u4E14\uFF0C\u56E0\u4E3A TLS1.3 \u5DF2\u7ECF\u5728\u53BB\u5E74\uFF082018\uFF09\u6B63\u5F0F\u53D1\u5E03\uFF0C\u6240\u4EE5 QUIC \u5C31\u76F4\u63A5\u5E94\u7528\u4E86 TLS1.3\uFF0C\u987A\u4FBF\u4E5F\u5C31\u83B7\u5F97\u4E86 0-RTT\u30011-RTT \u8FDE\u63A5\u7684\u597D\u5904\u3002</p><p${_scopeId}>\u4F46 QUIC \u5E76\u4E0D\u662F\u5EFA\u7ACB\u5728 TLS \u4E4B\u4E0A\uFF0C\u800C\u662F\u5185\u90E8\u201C\u5305\u542B\u201D\u4E86 TLS\u3002\u5B83\u4F7F\u7528\u81EA\u5DF1\u7684\u5E27\u201C\u63A5\u7BA1\u201D\u4E86 TLS \u91CC\u7684\u201C\u8BB0\u5F55\u201D\uFF0C\u63E1\u624B\u6D88\u606F\u3001\u8B66\u62A5\u6D88\u606F\u90FD\u4E0D\u4F7F\u7528 TLS \u8BB0\u5F55\uFF0C\u76F4\u63A5\u5C01\u88C5\u6210 QUIC \u7684\u5E27\u53D1\u9001\uFF0C\u7701\u6389\u4E86\u4E00\u6B21\u5F00\u9500\u3002</p><h2 id="quic-\u7684\u5185\u90E8\u7EC6\u8282" tabindex="-1"${_scopeId}><a class="header-anchor" href="#quic-\u7684\u5185\u90E8\u7EC6\u8282" aria-hidden="true"${_scopeId}>#</a> QUIC \u7684\u5185\u90E8\u7EC6\u8282</h2><p${_scopeId}>QUIC \u7684\u57FA\u672C\u6570\u636E\u4F20\u8F93\u5355\u4F4D\u662F\u5305\uFF08packet\uFF09\u548C\u5E27\uFF08frame\uFF09\uFF0C\u4E00\u4E2A\u5305\u7531\u591A\u4E2A\u5E27\u7EC4\u6210\uFF0C\u5305\u9762\u5411\u7684\u662F\u201C\u8FDE\u63A5\u201D\uFF0C\u5E27\u9762\u5411\u7684\u662F\u201C\u6D41\u201D\u3002</p><p${_scopeId}>QUIC \u4F7F\u7528\u4E0D\u900F\u660E\u7684\u201C\u8FDE\u63A5 ID\u201D\u6765\u6807\u8BB0\u901A\u4FE1\u7684\u4E24\u4E2A\u7AEF\u70B9\uFF0C\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u53EF\u4EE5\u81EA\u884C\u9009\u62E9\u4E00\u7EC4 ID \u6765\u6807\u8BB0\u81EA\u5DF1\uFF0C\u8FD9\u6837\u5C31\u89E3\u9664\u4E86 TCP \u91CC\u8FDE\u63A5\u5BF9\u201CIP \u5730\u5740 + \u7AEF\u53E3\u201D\uFF08\u5373\u5E38\u8BF4\u7684\u56DB\u5143\u7EC4\uFF09\u7684\u5F3A\u7ED1\u5B9A\uFF0C\u652F\u6301\u201C\u8FDE\u63A5\u8FC1\u79FB\u201D\uFF08Connection Migration\uFF09\u3002</p><h2 id="http-3-\u670D\u52A1\u53D1\u73B0" tabindex="-1"${_scopeId}><a class="header-anchor" href="#http-3-\u670D\u52A1\u53D1\u73B0" aria-hidden="true"${_scopeId}>#</a> HTTP/3 \u670D\u52A1\u53D1\u73B0</h2><p${_scopeId}>\u8FD9\u5C31\u8981\u7528\u5230 HTTP/2 \u91CC\u7684\u201C\u6269\u5C55\u5E27\u201D\u4E86\u3002\u6D4F\u89C8\u5668\u9700\u8981\u5148\u7528 HTTP/2 \u534F\u8BAE\u8FDE\u63A5\u670D\u52A1\u5668\uFF0C\u7136\u540E\u670D\u52A1\u5668\u53EF\u4EE5\u5728\u542F\u52A8 HTTP/2 \u8FDE\u63A5\u540E\u53D1\u9001\u4E00\u4E2A\u201CAlt-Svc\u201D\u5E27\uFF0C\u5305\u542B\u4E00\u4E2A\u201Ch3=host:port\u201D\u7684\u5B57\u7B26\u4E32\uFF0C\u544A\u8BC9\u6D4F\u89C8\u5668\u5728\u53E6\u4E00\u4E2A\u7AEF\u70B9\u4E0A\u63D0\u4F9B\u7B49\u4EF7\u7684 HTTP/3 \u670D\u52A1\u3002</p><p${_scopeId}>\u6D4F\u89C8\u5668\u6536\u5230\u201CAlt-Svc\u201D\u5E27\uFF0C\u4F1A\u4F7F\u7528 QUIC \u5F02\u6B65\u8FDE\u63A5\u6307\u5B9A\u7684\u7AEF\u53E3\uFF0C\u5982\u679C\u8FDE\u63A5\u6210\u529F\uFF0C\u5C31\u4F1A\u65AD\u5F00 HTTP/2 \u8FDE\u63A5\uFF0C\u6539\u7528\u65B0\u7684 HTTP/3 \u6536\u53D1\u6570\u636E\u3002</p></div>`);
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
                  vue.createVNode("li", null, "HTTP/3 \u57FA\u4E8E QUIC \u534F\u8BAE\uFF0C\u5B8C\u5168\u89E3\u51B3\u4E86\u201C\u961F\u5934\u963B\u585E\u201D\u95EE\u9898\uFF0C\u5F31\u7F51\u73AF\u5883\u4E0B\u7684\u8868\u73B0\u4F1A\u4F18\u4E8E HTTP/2\uFF1B"),
                  vue.createVNode("li", null, "QUIC \u662F\u4E00\u4E2A\u65B0\u7684\u4F20\u8F93\u5C42\u534F\u8BAE\uFF0C\u5EFA\u7ACB\u5728 UDP \u4E4B\u4E0A\uFF0C\u5B9E\u73B0\u4E86\u53EF\u9760\u4F20\u8F93\uFF1B"),
                  vue.createVNode("li", null, "QUIC \u5185\u542B\u4E86 TLS1.3\uFF0C\u53EA\u80FD\u52A0\u5BC6\u901A\u4FE1\uFF0C\u652F\u6301 0-RTT \u5FEB\u901F\u5EFA\u8FDE\uFF1B"),
                  vue.createVNode("li", null, "QUIC \u7684\u8FDE\u63A5\u4F7F\u7528\u201C\u4E0D\u900F\u660E\u201D\u7684\u8FDE\u63A5 ID\uFF0C\u4E0D\u7ED1\u5B9A\u5728\u201CIP \u5730\u5740 + \u7AEF\u53E3\u201D\u4E0A\uFF0C\u652F\u6301\u201C\u8FDE\u63A5\u8FC1\u79FB\u201D\uFF1B"),
                  vue.createVNode("li", null, "QUIC \u7684\u6D41\u4E0E HTTP/2 \u7684\u6D41\u5F88\u76F8\u4F3C\uFF0C\u4F46\u5206\u4E3A\u53CC\u5411\u6D41\u548C\u5355\u5411\u6D41\uFF1B"),
                  vue.createVNode("li", null, "HTTP/3 \u6CA1\u6709\u6307\u5B9A\u9ED8\u8BA4\u7AEF\u53E3\u53F7\uFF0C\u9700\u8981\u7528 HTTP/2 \u7684\u6269\u5C55\u5E27\u201CAlt-Svc\u201D\u6765\u53D1\u73B0\u3002")
                ]),
                vue.createVNode("h2", {
                  id: "http-2\u7684\u961F\u5934\u963B\u585E",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#http-2\u7684\u961F\u5934\u963B\u585E",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" HTTP/2\u7684\u961F\u5934\u963B\u585E")
                ]),
                vue.createVNode("p", null, "\u56E0\u4E3Atcp\u4E2D\u6709\u4E22\u5305\u91CD\u4F20\u673A\u5236\u3002"),
                vue.createVNode("p", null, "\u5728http3\u4E2D\u5F15\u5165\u4E86\u65B0\u7684\u534F\u8BAEHTTP over QUIC"),
                vue.createVNode("p", null, [
                  vue.createVNode("img", {
                    src: "https://static001.geekbang.org/resource/image/d2/03/d263202e431c84db0fd6c7e6b1980f03.png",
                    alt: ""
                  })
                ]),
                vue.createVNode("h2", {
                  id: "quic-\u534F\u8BAE",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#quic-\u534F\u8BAE",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" QUIC \u534F\u8BAE")
                ]),
                vue.createVNode("p", null, "QUIC \u6700\u65E9\u662F\u7531 Google \u53D1\u660E\u7684\uFF0C\u88AB\u79F0\u4E3A gQUIC\u3002\u800C\u5F53\u524D\u6B63\u5728\u7531 IETF \u6807\u51C6\u5316\u7684 QUIC \u88AB\u79F0\u4E3A iQUIC\u3002\u4E24\u8005\u7684\u5DEE\u5F02\u975E\u5E38\u5927\uFF0C\u751A\u81F3\u6BD4\u5F53\u5E74\u7684 SPDY \u4E0E HTTP/2 \u7684\u5DEE\u5F02\u8FD8\u8981\u5927\u3002"),
                vue.createVNode("p", null, "gQUIC \u6DF7\u5408\u4E86 UDP\u3001TLS\u3001HTTP\uFF0C\u662F\u4E00\u4E2A\u5E94\u7528\u5C42\u7684\u534F\u8BAE\u3002\u800C IETF \u5219\u5BF9 gQUIC \u505A\u4E86\u201C\u6E05\u7406\u201D\uFF0C\u628A\u5E94\u7528\u90E8\u5206\u5206\u79BB\u51FA\u6765\uFF0C\u5F62\u6210\u4E86 HTTP/3\uFF0C\u539F\u6765\u7684 UDP \u90E8\u5206\u201C\u4E0B\u653E\u201D\u5230\u4E86\u4F20\u8F93\u5C42\uFF0C\u6240\u4EE5 iQUIC \u6709\u65F6\u5019\u4E5F\u53EB\u201CQUIC-transport\u201D\u3002"),
                vue.createVNode("h2", {
                  id: "quic-\u7684\u7279\u70B9",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#quic-\u7684\u7279\u70B9",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" QUIC \u7684\u7279\u70B9")
                ]),
                vue.createVNode("p", null, "QUIC \u57FA\u4E8E UDP\uFF0C\u800C UDP \u662F\u201C\u65E0\u8FDE\u63A5\u201D\u7684\uFF0C\u6839\u672C\u5C31\u4E0D\u9700\u8981\u201C\u63E1\u624B\u201D\u548C\u201C\u6325\u624B\u201D\uFF0C\u6240\u4EE5\u5929\u751F\u5C31\u8981\u6BD4 TCP \u5FEB\u3002"),
                vue.createVNode("p", null, "\u5C31\u50CF TCP \u5728 IP \u7684\u57FA\u7840\u4E0A\u5B9E\u73B0\u4E86\u53EF\u9760\u4F20\u8F93\u4E00\u6837\uFF0CQUIC \u4E5F\u57FA\u4E8E UDP \u5B9E\u73B0\u4E86\u53EF\u9760\u4F20\u8F93\uFF0C\u4FDD\u8BC1\u6570\u636E\u4E00\u5B9A\u80FD\u591F\u62B5\u8FBE\u76EE\u7684\u5730\u3002\u5B83\u8FD8\u5F15\u5165\u4E86\u7C7B\u4F3C HTTP/2 \u7684\u201C\u6D41\u201D\u548C\u201C\u591A\u8DEF\u590D\u7528\u201D\uFF0C\u5355\u4E2A\u201C\u6D41\u201D\u662F\u6709\u5E8F\u7684\uFF0C\u53EF\u80FD\u4F1A\u56E0\u4E3A\u4E22\u5305\u800C\u963B\u585E\uFF0C\u4F46\u5176\u4ED6\u201C\u6D41\u201D\u4E0D\u4F1A\u53D7\u5230\u5F71\u54CD\u3002"),
                vue.createVNode("p", null, "\u4E3A\u4E86\u9632\u6B62\u7F51\u7EDC\u4E0A\u7684\u4E2D\u95F4\u8BBE\u5907\uFF08Middle Box\uFF09\u8BC6\u522B\u534F\u8BAE\u7684\u7EC6\u8282\uFF0CQUIC \u5168\u9762\u91C7\u7528\u52A0\u5BC6\u901A\u4FE1\uFF0C\u53EF\u4EE5\u5F88\u597D\u5730\u62B5\u5FA1\u7A9C\u6539\u548C\u201C\u534F\u8BAE\u50F5\u5316\u201D\uFF08ossification\uFF09\u3002"),
                vue.createVNode("p", null, "\u800C\u4E14\uFF0C\u56E0\u4E3A TLS1.3 \u5DF2\u7ECF\u5728\u53BB\u5E74\uFF082018\uFF09\u6B63\u5F0F\u53D1\u5E03\uFF0C\u6240\u4EE5 QUIC \u5C31\u76F4\u63A5\u5E94\u7528\u4E86 TLS1.3\uFF0C\u987A\u4FBF\u4E5F\u5C31\u83B7\u5F97\u4E86 0-RTT\u30011-RTT \u8FDE\u63A5\u7684\u597D\u5904\u3002"),
                vue.createVNode("p", null, "\u4F46 QUIC \u5E76\u4E0D\u662F\u5EFA\u7ACB\u5728 TLS \u4E4B\u4E0A\uFF0C\u800C\u662F\u5185\u90E8\u201C\u5305\u542B\u201D\u4E86 TLS\u3002\u5B83\u4F7F\u7528\u81EA\u5DF1\u7684\u5E27\u201C\u63A5\u7BA1\u201D\u4E86 TLS \u91CC\u7684\u201C\u8BB0\u5F55\u201D\uFF0C\u63E1\u624B\u6D88\u606F\u3001\u8B66\u62A5\u6D88\u606F\u90FD\u4E0D\u4F7F\u7528 TLS \u8BB0\u5F55\uFF0C\u76F4\u63A5\u5C01\u88C5\u6210 QUIC \u7684\u5E27\u53D1\u9001\uFF0C\u7701\u6389\u4E86\u4E00\u6B21\u5F00\u9500\u3002"),
                vue.createVNode("h2", {
                  id: "quic-\u7684\u5185\u90E8\u7EC6\u8282",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#quic-\u7684\u5185\u90E8\u7EC6\u8282",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" QUIC \u7684\u5185\u90E8\u7EC6\u8282")
                ]),
                vue.createVNode("p", null, "QUIC \u7684\u57FA\u672C\u6570\u636E\u4F20\u8F93\u5355\u4F4D\u662F\u5305\uFF08packet\uFF09\u548C\u5E27\uFF08frame\uFF09\uFF0C\u4E00\u4E2A\u5305\u7531\u591A\u4E2A\u5E27\u7EC4\u6210\uFF0C\u5305\u9762\u5411\u7684\u662F\u201C\u8FDE\u63A5\u201D\uFF0C\u5E27\u9762\u5411\u7684\u662F\u201C\u6D41\u201D\u3002"),
                vue.createVNode("p", null, "QUIC \u4F7F\u7528\u4E0D\u900F\u660E\u7684\u201C\u8FDE\u63A5 ID\u201D\u6765\u6807\u8BB0\u901A\u4FE1\u7684\u4E24\u4E2A\u7AEF\u70B9\uFF0C\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u53EF\u4EE5\u81EA\u884C\u9009\u62E9\u4E00\u7EC4 ID \u6765\u6807\u8BB0\u81EA\u5DF1\uFF0C\u8FD9\u6837\u5C31\u89E3\u9664\u4E86 TCP \u91CC\u8FDE\u63A5\u5BF9\u201CIP \u5730\u5740 + \u7AEF\u53E3\u201D\uFF08\u5373\u5E38\u8BF4\u7684\u56DB\u5143\u7EC4\uFF09\u7684\u5F3A\u7ED1\u5B9A\uFF0C\u652F\u6301\u201C\u8FDE\u63A5\u8FC1\u79FB\u201D\uFF08Connection Migration\uFF09\u3002"),
                vue.createVNode("h2", {
                  id: "http-3-\u670D\u52A1\u53D1\u73B0",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#http-3-\u670D\u52A1\u53D1\u73B0",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" HTTP/3 \u670D\u52A1\u53D1\u73B0")
                ]),
                vue.createVNode("p", null, "\u8FD9\u5C31\u8981\u7528\u5230 HTTP/2 \u91CC\u7684\u201C\u6269\u5C55\u5E27\u201D\u4E86\u3002\u6D4F\u89C8\u5668\u9700\u8981\u5148\u7528 HTTP/2 \u534F\u8BAE\u8FDE\u63A5\u670D\u52A1\u5668\uFF0C\u7136\u540E\u670D\u52A1\u5668\u53EF\u4EE5\u5728\u542F\u52A8 HTTP/2 \u8FDE\u63A5\u540E\u53D1\u9001\u4E00\u4E2A\u201CAlt-Svc\u201D\u5E27\uFF0C\u5305\u542B\u4E00\u4E2A\u201Ch3=host:port\u201D\u7684\u5B57\u7B26\u4E32\uFF0C\u544A\u8BC9\u6D4F\u89C8\u5668\u5728\u53E6\u4E00\u4E2A\u7AEF\u70B9\u4E0A\u63D0\u4F9B\u7B49\u4EF7\u7684 HTTP/3 \u670D\u52A1\u3002"),
                vue.createVNode("p", null, "\u6D4F\u89C8\u5668\u6536\u5230\u201CAlt-Svc\u201D\u5E27\uFF0C\u4F1A\u4F7F\u7528 QUIC \u5F02\u6B65\u8FDE\u63A5\u6307\u5B9A\u7684\u7AEF\u53E3\uFF0C\u5982\u679C\u8FDE\u63A5\u6210\u529F\uFF0C\u5C31\u4F1A\u65AD\u5F00 HTTP/2 \u8FDE\u63A5\uFF0C\u6539\u7528\u65B0\u7684 HTTP/3 \u6536\u53D1\u6570\u636E\u3002")
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
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/childPages/http/http3zhanwang.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports["default"] = _sfc_main;
