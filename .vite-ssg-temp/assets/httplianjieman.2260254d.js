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
    const frontmatter = { "title": "28 | \u8FDE\u63A5\u592A\u6162\u8BE5\u600E\u4E48\u529E\uFF1AHTTPS\u7684\u4F18\u5316", "date": "2021-11-08T16:00:00.000Z", "duration": "10min", "meta": [{ "property": "og:title", "content": "28 | \u8FDE\u63A5\u592A\u6162\u8BE5\u600E\u4E48\u529E\uFF1AHTTPS\u7684\u4F18\u5316" }] };
    expose({ frontmatter });
    const head$1 = { "title": "28 | \u8FDE\u63A5\u592A\u6162\u8BE5\u600E\u4E48\u529E\uFF1AHTTPS\u7684\u4F18\u5316", "meta": [{ "property": "og:title", "content": "28 | \u8FDE\u63A5\u592A\u6162\u8BE5\u600E\u4E48\u529E\uFF1AHTTPS\u7684\u4F18\u5316" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Blog = Blog._sfc_main;
      _push(serverRenderer.ssrRenderComponent(_component_Blog, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><h2 id="\u5F52\u7EB3" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u5F52\u7EB3" aria-hidden="true"${_scopeId}>#</a> \u5F52\u7EB3</h2><ol${_scopeId}><li${_scopeId}>\u53EF\u4EE5\u6709\u591A\u79CD\u786C\u4EF6\u548C\u8F6F\u4EF6\u624B\u6BB5\u51CF\u5C11\u7F51\u7EDC\u8017\u65F6\u548C\u8BA1\u7B97\u8017\u65F6\uFF0C\u8BA9 HTTPS \u53D8\u5F97\u548C HTTP \u4E00\u6837\u5FEB\uFF0C\u6700\u53EF\u884C\u7684\u662F\u8F6F\u4EF6\u4F18\u5316\uFF1B</li><li${_scopeId}>\u5E94\u5F53\u5C3D\u91CF\u4F7F\u7528 ECDHE \u692D\u5706\u66F2\u7EBF\u5BC6\u7801\u5957\u4EF6\uFF0C\u8282\u7EA6\u5E26\u5BBD\u548C\u8BA1\u7B97\u91CF\uFF0C\u8FD8\u80FD\u5B9E\u73B0\u201CFalse Start\u201D\uFF1B</li><li${_scopeId}>\u670D\u52A1\u5668\u7AEF\u5E94\u5F53\u5F00\u542F\u201COCSP Stapling\u201D\u529F\u80FD\uFF0C\u907F\u514D\u5BA2\u6237\u7AEF\u8BBF\u95EE CA \u53BB\u9A8C\u8BC1\u8BC1\u4E66\uFF1B</li><li${_scopeId}>\u4F1A\u8BDD\u590D\u7528\u7684\u6548\u679C\u7C7B\u4F3C Cache\uFF0C\u524D\u63D0\u662F\u5BA2\u6237\u7AEF\u5FC5\u987B\u4E4B\u524D\u6210\u529F\u5EFA\u7ACB\u8FDE\u63A5\uFF0C\u540E\u9762\u5C31\u53EF\u4EE5\u7528\u201CSession ID\u201D\u201CSession Ticket\u201D\u7B49\u51ED\u636E\u8DF3\u8FC7\u5BC6\u94A5\u4EA4\u6362\u3001\u8BC1\u4E66\u9A8C\u8BC1\u7B49\u6B65\u9AA4\uFF0C\u76F4\u63A5\u5F00\u59CB\u52A0\u5BC6\u901A\u4FE1\u3002</li></ol><h2 id="https\u4E3B\u8981\u6162\u5728\u54EA\u91CC" tabindex="-1"${_scopeId}><a class="header-anchor" href="#https\u4E3B\u8981\u6162\u5728\u54EA\u91CC" aria-hidden="true"${_scopeId}>#</a> HTTPS\u4E3B\u8981\u6162\u5728\u54EA\u91CC</h2><ol${_scopeId}><li${_scopeId}>\u7B2C\u4E00\u4E2A\u662F\u5EFA\u7ACB\u8FDE\u63A5\u65F6\u7684\u975E\u5BF9\u79F0\u52A0\u5BC6\u63E1\u624B</li><li${_scopeId}>\u7B2C\u4E8C\u4E2A\u662F\u63E1\u624B\u540E\u7684\u5BF9\u79F0\u52A0\u5BC6\u62A5\u6587\u4F20\u8F93\u3002</li></ol><h2 id="\u786C\u4EF6\u4F18\u5316" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u786C\u4EF6\u4F18\u5316" aria-hidden="true"${_scopeId}>#</a> \u786C\u4EF6\u4F18\u5316</h2><p${_scopeId}>\u5E94\u4E3Ahttps\u662F\u8BA1\u7B97\u5BC6\u96C6\u578B\u7684</p><ol${_scopeId}><li${_scopeId}>\u9009\u62E9\u66F4\u5FEB\u7684cpu\uFF0C\u6700\u597D\u8FD8\u5185\u5EFA AES \u4F18\u5316\uFF0C\u8FD9\u6837\u5373\u53EF\u4EE5\u52A0\u901F\u63E1\u624B\uFF0C\u4E5F\u53EF\u4EE5\u52A0\u901F\u4F20\u8F93\u3002</li><li${_scopeId}>\u4F60\u53EF\u4EE5\u9009\u62E9\u201CSSL \u52A0\u901F\u5361\u201D\uFF0C\u52A0\u89E3\u5BC6\u65F6\u8C03\u7528\u5B83\u7684 API\uFF0C\u8BA9\u4E13\u95E8\u7684\u786C\u4EF6\u6765\u505A\u975E\u5BF9\u79F0\u52A0\u89E3\u5BC6\uFF0C\u5206\u62C5 CPU \u7684\u8BA1\u7B97\u538B\u529B\u3002</li><li${_scopeId}>\u201CSSL \u52A0\u901F\u670D\u52A1\u5668\u201D\uFF0C\u7528\u4E13\u95E8\u7684\u670D\u52A1\u5668\u96C6\u7FA4\u6765\u5F7B\u5E95\u201C\u5378\u8F7D\u201DTLS \u63E1\u624B\u65F6\u7684\u52A0\u5BC6\u89E3\u5BC6\u8BA1\u7B97\uFF0C\u6027\u80FD\u81EA\u7136\u8981\u6BD4\u5355\u7EAF\u7684\u201C\u52A0\u901F\u5361\u201D\u8981\u5F3A\u5927\u7684\u591A\u3002</li></ol><h2 id="\u8F6F\u4EF6\u4F18\u5316" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u8F6F\u4EF6\u4F18\u5316" aria-hidden="true"${_scopeId}>#</a> \u8F6F\u4EF6\u4F18\u5316</h2><ol${_scopeId}><li${_scopeId}>\u8F6F\u4EF6\u5347\u7EA7</li><li${_scopeId}>\u534F\u8BAE\u4F18\u5316</li></ol><h2 id="\u8BC1\u4E66\u4F18\u5316" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u8BC1\u4E66\u4F18\u5316" aria-hidden="true"${_scopeId}>#</a> \u8BC1\u4E66\u4F18\u5316</h2><ol${_scopeId}><li${_scopeId}>\u8BC1\u4E66\u4F20\u8F93 <ul${_scopeId}><li${_scopeId}>\u670D\u52A1\u5668\u7684\u8BC1\u4E66\u53EF\u4EE5\u9009\u62E9\u692D\u5706\u66F2\u7EBF\uFF08ECDSA\uFF09\u8BC1\u4E66\u800C\u4E0D\u662F RSA \u8BC1\u4E66\uFF0C\u56E0\u4E3A 224 \u4F4D\u7684 ECC \u76F8\u5F53\u4E8E 2048 \u4F4D\u7684 RSA\uFF0C\u6240\u4EE5\u692D\u5706\u66F2\u7EBF\u8BC1\u4E66\u7684\u201C\u4E2A\u5934\u201D\u8981\u6BD4 RSA \u5C0F\u5F88\u591A\uFF0C\u5373\u80FD\u591F\u8282\u7EA6\u5E26\u5BBD\u4E5F\u80FD\u51CF\u5C11\u5BA2\u6237\u7AEF\u7684\u8FD0\u7B97\u91CF\uFF0C\u53EF\u8C13\u201C\u4E00\u4E3E\u4E24\u5F97\u201D\u3002</li></ul></li><li${_scopeId}>\u8BC1\u4E66\u6821\u9A8C</li></ol><h2 id="\u4F1A\u8BDD\u590D\u7528" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u4F1A\u8BDD\u590D\u7528" aria-hidden="true"${_scopeId}>#</a> \u4F1A\u8BDD\u590D\u7528</h2><p${_scopeId}>\u540E\u4E00\u6B21\u63E1\u624B\u7684\u91CD\u70B9\u662F\u7B97\u51FA\u4E3B\u5BC6\u94A5\u201CMaster Secret\u201D\uFF0C\u800C\u4E3B\u5BC6\u94A5\u6BCF\u6B21\u8FDE\u63A5\u90FD\u8981\u91CD\u65B0\u8BA1\u7B97\uFF0C\u672A\u514D\u6709\u70B9\u592A\u6D6A\u8D39\u4E86\uFF0C\u5982\u679C\u80FD\u591F\u628A\u201C\u8F9B\u8F9B\u82E6\u82E6\u201D\u7B97\u51FA\u6765\u7684\u4E3B\u5BC6\u94A5\u7F13\u5B58\u4E00\u4E0B\u201C\u91CD\u7528\u201D</p><ol${_scopeId}><li${_scopeId}>Session ID\uFF1A\u5C31\u662F\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u9996\u6B21\u8FDE\u63A5\u540E\u5404\u81EA\u4FDD\u5B58\u4E00\u4E2A\u4F1A\u8BDD\u7684 ID \u53F7\uFF0C\u5185\u5B58\u91CC\u5B58\u50A8\u4E3B\u5BC6\u94A5\u548C\u5176\u4ED6\u76F8\u5173\u7684\u4FE1\u606F\u3002\u5F53\u5BA2\u6237\u7AEF\u518D\u6B21\u8FDE\u63A5\u65F6\u53D1\u4E00\u4E2A ID \u8FC7\u6765\uFF0C\u670D\u52A1\u5668\u5C31\u5728\u5185\u5B58\u91CC\u627E\uFF0C\u627E\u5230\u5C31\u76F4\u63A5\u7528\u4E3B\u5BC6\u94A5\u6062\u590D\u4F1A\u8BDD\u72B6\u6001\uFF0C\u8DF3\u8FC7\u8BC1\u4E66\u9A8C\u8BC1\u548C\u5BC6\u94A5\u4EA4\u6362\uFF0C\u53EA\u7528\u4E00\u4E2A\u6D88\u606F\u5F80\u8FD4\u5C31\u53EF\u4EE5\u5EFA\u7ACB\u5B89\u5168\u901A\u4FE1\u3002</li></ol><h2 id="\u4F1A\u8BDD\u7968\u8BC1" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u4F1A\u8BDD\u7968\u8BC1" aria-hidden="true"${_scopeId}>#</a> \u4F1A\u8BDD\u7968\u8BC1</h2><p${_scopeId}>Session Ticket\uFF1A\u5B83\u6709\u70B9\u7C7B\u4F3C HTTP \u7684 Cookie\uFF0C\u5B58\u50A8\u7684\u8D23\u4EFB\u7531\u670D\u52A1\u5668\u8F6C\u79FB\u5230\u4E86\u5BA2\u6237\u7AEF\uFF0C\u670D\u52A1\u5668\u52A0\u5BC6\u4F1A\u8BDD\u4FE1\u606F\uFF0C\u7528\u201CNew Session Ticket\u201D\u6D88\u606F\u53D1\u7ED9\u5BA2\u6237\u7AEF\uFF0C\u8BA9\u5BA2\u6237\u7AEF\u4FDD\u5B58\u3002</p><h2 id="\u9884\u5171\u4EAB\u79D8\u94A5" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u9884\u5171\u4EAB\u79D8\u94A5" aria-hidden="true"${_scopeId}>#</a> \u9884\u5171\u4EAB\u79D8\u94A5</h2><p${_scopeId}>\u539F\u7406\u548C\u201CSession Ticket\u201D\u5DEE\u4E0D\u591A\uFF0C\u4F46\u5728\u53D1\u9001 Ticket \u7684\u540C\u65F6\u4F1A\u5E26\u4E0A\u5E94\u7528\u6570\u636E\uFF08Early Data\uFF09\uFF0C\u514D\u53BB\u4E86 1.2 \u91CC\u7684\u670D\u52A1\u5668\u786E\u8BA4\u6B65\u9AA4\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u53EB\u201CPre-shared Key\u201D\uFF0C\u7B80\u79F0\u4E3A\u201CPSK\u201D\u3002</p><p${_scopeId}>\u4F46\u201CPSK\u201D\u4E5F\u4E0D\u662F\u5B8C\u7F8E\u7684\uFF0C\u5B83\u4E3A\u4E86\u8FFD\u6C42\u6548\u7387\u800C\u727A\u7272\u4E86\u4E00\u70B9\u5B89\u5168\u6027\uFF0C\u5BB9\u6613\u53D7\u5230\u201C\u91CD\u653E\u653B\u51FB\u201D\uFF08Replay attack\uFF09\u7684\u5A01\u80C1\u3002\u9ED1\u5BA2\u53EF\u4EE5\u622A\u83B7\u201CPSK\u201D\u7684\u6570\u636E\uFF0C\u50CF\u590D\u8BFB\u673A\u90A3\u6837\u53CD\u590D\u5411\u670D\u52A1\u5668\u53D1\u9001\u3002</p><p${_scopeId}>\u89E3\u51B3\u7684\u529E\u6CD5\u662F\u53EA\u5141\u8BB8\u5B89\u5168\u7684 GET/HEAD \u65B9\u6CD5\uFF08\u53C2\u89C1\u7B2C 10 \u8BB2\uFF09\uFF0C\u5728\u6D88\u606F\u91CC\u52A0\u5165\u65F6\u95F4\u6233\u3001\u201Cnonce\u201D\u9A8C\u8BC1\uFF0C\u6216\u8005\u201C\u4E00\u6B21\u6027\u7968\u8BC1\u201D\u9650\u5236\u91CD\u653E\u3002</p></div>`);
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
                  vue.createVNode("li", null, "\u53EF\u4EE5\u6709\u591A\u79CD\u786C\u4EF6\u548C\u8F6F\u4EF6\u624B\u6BB5\u51CF\u5C11\u7F51\u7EDC\u8017\u65F6\u548C\u8BA1\u7B97\u8017\u65F6\uFF0C\u8BA9 HTTPS \u53D8\u5F97\u548C HTTP \u4E00\u6837\u5FEB\uFF0C\u6700\u53EF\u884C\u7684\u662F\u8F6F\u4EF6\u4F18\u5316\uFF1B"),
                  vue.createVNode("li", null, "\u5E94\u5F53\u5C3D\u91CF\u4F7F\u7528 ECDHE \u692D\u5706\u66F2\u7EBF\u5BC6\u7801\u5957\u4EF6\uFF0C\u8282\u7EA6\u5E26\u5BBD\u548C\u8BA1\u7B97\u91CF\uFF0C\u8FD8\u80FD\u5B9E\u73B0\u201CFalse Start\u201D\uFF1B"),
                  vue.createVNode("li", null, "\u670D\u52A1\u5668\u7AEF\u5E94\u5F53\u5F00\u542F\u201COCSP Stapling\u201D\u529F\u80FD\uFF0C\u907F\u514D\u5BA2\u6237\u7AEF\u8BBF\u95EE CA \u53BB\u9A8C\u8BC1\u8BC1\u4E66\uFF1B"),
                  vue.createVNode("li", null, "\u4F1A\u8BDD\u590D\u7528\u7684\u6548\u679C\u7C7B\u4F3C Cache\uFF0C\u524D\u63D0\u662F\u5BA2\u6237\u7AEF\u5FC5\u987B\u4E4B\u524D\u6210\u529F\u5EFA\u7ACB\u8FDE\u63A5\uFF0C\u540E\u9762\u5C31\u53EF\u4EE5\u7528\u201CSession ID\u201D\u201CSession Ticket\u201D\u7B49\u51ED\u636E\u8DF3\u8FC7\u5BC6\u94A5\u4EA4\u6362\u3001\u8BC1\u4E66\u9A8C\u8BC1\u7B49\u6B65\u9AA4\uFF0C\u76F4\u63A5\u5F00\u59CB\u52A0\u5BC6\u901A\u4FE1\u3002")
                ]),
                vue.createVNode("h2", {
                  id: "https\u4E3B\u8981\u6162\u5728\u54EA\u91CC",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#https\u4E3B\u8981\u6162\u5728\u54EA\u91CC",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" HTTPS\u4E3B\u8981\u6162\u5728\u54EA\u91CC")
                ]),
                vue.createVNode("ol", null, [
                  vue.createVNode("li", null, "\u7B2C\u4E00\u4E2A\u662F\u5EFA\u7ACB\u8FDE\u63A5\u65F6\u7684\u975E\u5BF9\u79F0\u52A0\u5BC6\u63E1\u624B"),
                  vue.createVNode("li", null, "\u7B2C\u4E8C\u4E2A\u662F\u63E1\u624B\u540E\u7684\u5BF9\u79F0\u52A0\u5BC6\u62A5\u6587\u4F20\u8F93\u3002")
                ]),
                vue.createVNode("h2", {
                  id: "\u786C\u4EF6\u4F18\u5316",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u786C\u4EF6\u4F18\u5316",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u786C\u4EF6\u4F18\u5316")
                ]),
                vue.createVNode("p", null, "\u5E94\u4E3Ahttps\u662F\u8BA1\u7B97\u5BC6\u96C6\u578B\u7684"),
                vue.createVNode("ol", null, [
                  vue.createVNode("li", null, "\u9009\u62E9\u66F4\u5FEB\u7684cpu\uFF0C\u6700\u597D\u8FD8\u5185\u5EFA AES \u4F18\u5316\uFF0C\u8FD9\u6837\u5373\u53EF\u4EE5\u52A0\u901F\u63E1\u624B\uFF0C\u4E5F\u53EF\u4EE5\u52A0\u901F\u4F20\u8F93\u3002"),
                  vue.createVNode("li", null, "\u4F60\u53EF\u4EE5\u9009\u62E9\u201CSSL \u52A0\u901F\u5361\u201D\uFF0C\u52A0\u89E3\u5BC6\u65F6\u8C03\u7528\u5B83\u7684 API\uFF0C\u8BA9\u4E13\u95E8\u7684\u786C\u4EF6\u6765\u505A\u975E\u5BF9\u79F0\u52A0\u89E3\u5BC6\uFF0C\u5206\u62C5 CPU \u7684\u8BA1\u7B97\u538B\u529B\u3002"),
                  vue.createVNode("li", null, "\u201CSSL \u52A0\u901F\u670D\u52A1\u5668\u201D\uFF0C\u7528\u4E13\u95E8\u7684\u670D\u52A1\u5668\u96C6\u7FA4\u6765\u5F7B\u5E95\u201C\u5378\u8F7D\u201DTLS \u63E1\u624B\u65F6\u7684\u52A0\u5BC6\u89E3\u5BC6\u8BA1\u7B97\uFF0C\u6027\u80FD\u81EA\u7136\u8981\u6BD4\u5355\u7EAF\u7684\u201C\u52A0\u901F\u5361\u201D\u8981\u5F3A\u5927\u7684\u591A\u3002")
                ]),
                vue.createVNode("h2", {
                  id: "\u8F6F\u4EF6\u4F18\u5316",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u8F6F\u4EF6\u4F18\u5316",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u8F6F\u4EF6\u4F18\u5316")
                ]),
                vue.createVNode("ol", null, [
                  vue.createVNode("li", null, "\u8F6F\u4EF6\u5347\u7EA7"),
                  vue.createVNode("li", null, "\u534F\u8BAE\u4F18\u5316")
                ]),
                vue.createVNode("h2", {
                  id: "\u8BC1\u4E66\u4F18\u5316",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u8BC1\u4E66\u4F18\u5316",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u8BC1\u4E66\u4F18\u5316")
                ]),
                vue.createVNode("ol", null, [
                  vue.createVNode("li", null, [
                    vue.createTextVNode("\u8BC1\u4E66\u4F20\u8F93 "),
                    vue.createVNode("ul", null, [
                      vue.createVNode("li", null, "\u670D\u52A1\u5668\u7684\u8BC1\u4E66\u53EF\u4EE5\u9009\u62E9\u692D\u5706\u66F2\u7EBF\uFF08ECDSA\uFF09\u8BC1\u4E66\u800C\u4E0D\u662F RSA \u8BC1\u4E66\uFF0C\u56E0\u4E3A 224 \u4F4D\u7684 ECC \u76F8\u5F53\u4E8E 2048 \u4F4D\u7684 RSA\uFF0C\u6240\u4EE5\u692D\u5706\u66F2\u7EBF\u8BC1\u4E66\u7684\u201C\u4E2A\u5934\u201D\u8981\u6BD4 RSA \u5C0F\u5F88\u591A\uFF0C\u5373\u80FD\u591F\u8282\u7EA6\u5E26\u5BBD\u4E5F\u80FD\u51CF\u5C11\u5BA2\u6237\u7AEF\u7684\u8FD0\u7B97\u91CF\uFF0C\u53EF\u8C13\u201C\u4E00\u4E3E\u4E24\u5F97\u201D\u3002")
                    ])
                  ]),
                  vue.createVNode("li", null, "\u8BC1\u4E66\u6821\u9A8C")
                ]),
                vue.createVNode("h2", {
                  id: "\u4F1A\u8BDD\u590D\u7528",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u4F1A\u8BDD\u590D\u7528",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u4F1A\u8BDD\u590D\u7528")
                ]),
                vue.createVNode("p", null, "\u540E\u4E00\u6B21\u63E1\u624B\u7684\u91CD\u70B9\u662F\u7B97\u51FA\u4E3B\u5BC6\u94A5\u201CMaster Secret\u201D\uFF0C\u800C\u4E3B\u5BC6\u94A5\u6BCF\u6B21\u8FDE\u63A5\u90FD\u8981\u91CD\u65B0\u8BA1\u7B97\uFF0C\u672A\u514D\u6709\u70B9\u592A\u6D6A\u8D39\u4E86\uFF0C\u5982\u679C\u80FD\u591F\u628A\u201C\u8F9B\u8F9B\u82E6\u82E6\u201D\u7B97\u51FA\u6765\u7684\u4E3B\u5BC6\u94A5\u7F13\u5B58\u4E00\u4E0B\u201C\u91CD\u7528\u201D"),
                vue.createVNode("ol", null, [
                  vue.createVNode("li", null, "Session ID\uFF1A\u5C31\u662F\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u9996\u6B21\u8FDE\u63A5\u540E\u5404\u81EA\u4FDD\u5B58\u4E00\u4E2A\u4F1A\u8BDD\u7684 ID \u53F7\uFF0C\u5185\u5B58\u91CC\u5B58\u50A8\u4E3B\u5BC6\u94A5\u548C\u5176\u4ED6\u76F8\u5173\u7684\u4FE1\u606F\u3002\u5F53\u5BA2\u6237\u7AEF\u518D\u6B21\u8FDE\u63A5\u65F6\u53D1\u4E00\u4E2A ID \u8FC7\u6765\uFF0C\u670D\u52A1\u5668\u5C31\u5728\u5185\u5B58\u91CC\u627E\uFF0C\u627E\u5230\u5C31\u76F4\u63A5\u7528\u4E3B\u5BC6\u94A5\u6062\u590D\u4F1A\u8BDD\u72B6\u6001\uFF0C\u8DF3\u8FC7\u8BC1\u4E66\u9A8C\u8BC1\u548C\u5BC6\u94A5\u4EA4\u6362\uFF0C\u53EA\u7528\u4E00\u4E2A\u6D88\u606F\u5F80\u8FD4\u5C31\u53EF\u4EE5\u5EFA\u7ACB\u5B89\u5168\u901A\u4FE1\u3002")
                ]),
                vue.createVNode("h2", {
                  id: "\u4F1A\u8BDD\u7968\u8BC1",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u4F1A\u8BDD\u7968\u8BC1",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u4F1A\u8BDD\u7968\u8BC1")
                ]),
                vue.createVNode("p", null, "Session Ticket\uFF1A\u5B83\u6709\u70B9\u7C7B\u4F3C HTTP \u7684 Cookie\uFF0C\u5B58\u50A8\u7684\u8D23\u4EFB\u7531\u670D\u52A1\u5668\u8F6C\u79FB\u5230\u4E86\u5BA2\u6237\u7AEF\uFF0C\u670D\u52A1\u5668\u52A0\u5BC6\u4F1A\u8BDD\u4FE1\u606F\uFF0C\u7528\u201CNew Session Ticket\u201D\u6D88\u606F\u53D1\u7ED9\u5BA2\u6237\u7AEF\uFF0C\u8BA9\u5BA2\u6237\u7AEF\u4FDD\u5B58\u3002"),
                vue.createVNode("h2", {
                  id: "\u9884\u5171\u4EAB\u79D8\u94A5",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u9884\u5171\u4EAB\u79D8\u94A5",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u9884\u5171\u4EAB\u79D8\u94A5")
                ]),
                vue.createVNode("p", null, "\u539F\u7406\u548C\u201CSession Ticket\u201D\u5DEE\u4E0D\u591A\uFF0C\u4F46\u5728\u53D1\u9001 Ticket \u7684\u540C\u65F6\u4F1A\u5E26\u4E0A\u5E94\u7528\u6570\u636E\uFF08Early Data\uFF09\uFF0C\u514D\u53BB\u4E86 1.2 \u91CC\u7684\u670D\u52A1\u5668\u786E\u8BA4\u6B65\u9AA4\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u53EB\u201CPre-shared Key\u201D\uFF0C\u7B80\u79F0\u4E3A\u201CPSK\u201D\u3002"),
                vue.createVNode("p", null, "\u4F46\u201CPSK\u201D\u4E5F\u4E0D\u662F\u5B8C\u7F8E\u7684\uFF0C\u5B83\u4E3A\u4E86\u8FFD\u6C42\u6548\u7387\u800C\u727A\u7272\u4E86\u4E00\u70B9\u5B89\u5168\u6027\uFF0C\u5BB9\u6613\u53D7\u5230\u201C\u91CD\u653E\u653B\u51FB\u201D\uFF08Replay attack\uFF09\u7684\u5A01\u80C1\u3002\u9ED1\u5BA2\u53EF\u4EE5\u622A\u83B7\u201CPSK\u201D\u7684\u6570\u636E\uFF0C\u50CF\u590D\u8BFB\u673A\u90A3\u6837\u53CD\u590D\u5411\u670D\u52A1\u5668\u53D1\u9001\u3002"),
                vue.createVNode("p", null, "\u89E3\u51B3\u7684\u529E\u6CD5\u662F\u53EA\u5141\u8BB8\u5B89\u5168\u7684 GET/HEAD \u65B9\u6CD5\uFF08\u53C2\u89C1\u7B2C 10 \u8BB2\uFF09\uFF0C\u5728\u6D88\u606F\u91CC\u52A0\u5165\u65F6\u95F4\u6233\u3001\u201Cnonce\u201D\u9A8C\u8BC1\uFF0C\u6216\u8005\u201C\u4E00\u6B21\u6027\u7968\u8BC1\u201D\u9650\u5236\u91CD\u653E\u3002")
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
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/childPages/http/httplianjieman.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports["default"] = _sfc_main;
