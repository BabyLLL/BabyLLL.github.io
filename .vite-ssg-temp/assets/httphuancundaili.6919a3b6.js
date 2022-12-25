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
    const frontmatter = { "title": "22 | \u51B7\u94FE\u5468\u8F6C\uFF1AHTTP\u7684\u7F13\u5B58\u4EE3\u7406", "date": "2021-11-01T16:00:00.000Z", "duration": "10min", "meta": [{ "property": "og:title", "content": "22 | \u51B7\u94FE\u5468\u8F6C\uFF1AHTTP\u7684\u7F13\u5B58\u4EE3\u7406" }] };
    expose({ frontmatter });
    const head$1 = { "title": "22 | \u51B7\u94FE\u5468\u8F6C\uFF1AHTTP\u7684\u7F13\u5B58\u4EE3\u7406", "meta": [{ "property": "og:title", "content": "22 | \u51B7\u94FE\u5468\u8F6C\uFF1AHTTP\u7684\u7F13\u5B58\u4EE3\u7406" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Blog = Blog._sfc_main;
      _push(serverRenderer.ssrRenderComponent(_component_Blog, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><h2 id="\u5F52\u7EB3" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u5F52\u7EB3" aria-hidden="true"${_scopeId}>#</a> \u5F52\u7EB3</h2><ol${_scopeId}><li${_scopeId}>\u8BA1\u7B97\u673A\u9886\u57DF\u91CC\u6700\u5E38\u7528\u7684\u6027\u80FD\u4F18\u5316\u624B\u6BB5\u662F\u201C\u65F6\u7A7A\u8F6C\u6362\u201D\uFF0C\u4E5F\u5C31\u662F\u201C\u65F6\u95F4\u6362\u7A7A\u95F4\u201D\u6216\u8005\u201C\u7A7A\u95F4\u6362\u65F6\u95F4\u201D\uFF0CHTTP \u7F13\u5B58\u5C5E\u4E8E\u540E\u8005\uFF1B</li><li${_scopeId}>\u7F13\u5B58\u4EE3\u7406\u662F\u589E\u52A0\u4E86\u7F13\u5B58\u529F\u80FD\u7684\u4EE3\u7406\u670D\u52A1\uFF0C\u7F13\u5B58\u6E90\u670D\u52A1\u5668\u7684\u6570\u636E\uFF0C\u5206\u53D1\u7ED9\u4E0B\u6E38\u7684\u5BA2\u6237\u7AEF\uFF1B</li><li${_scopeId}>\u201CCache-Control\u201D\u5B57\u6BB5\u4E5F\u53EF\u4EE5\u63A7\u5236\u7F13\u5B58\u4EE3\u7406\uFF0C\u5E38\u7528\u7684\u6709\u201Cprivate\u201D\u201Cs-maxage\u201D\u201Cno-transform\u201D\u7B49\uFF0C\u540C\u6837\u5FC5\u987B\u914D\u5408\u201CLast-modified\u201D\u201CETag\u201D\u7B49\u5B57\u6BB5\u624D\u80FD\u4F7F\u7528\uFF1B</li><li${_scopeId}>\u7F13\u5B58\u4EE3\u7406\u6709\u65F6\u5019\u4E5F\u4F1A\u5E26\u6765\u8D1F\u9762\u5F71\u54CD\uFF0C\u7F13\u5B58\u4E0D\u826F\u6570\u636E\uFF0C\u9700\u8981\u53CA\u65F6\u5237\u65B0\u6216\u5220\u9664\u3002</li></ol><h2 id="\u7F13\u5B58\u4EE3\u7406\u670D\u52A1" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u7F13\u5B58\u4EE3\u7406\u670D\u52A1" aria-hidden="true"${_scopeId}>#</a> \u7F13\u5B58\u4EE3\u7406\u670D\u52A1</h2><p${_scopeId}>\u5728 HTTP \u7684\u7F13\u5B58\u4F53\u7CFB\u4E2D\uFF0C\u7F13\u5B58\u4EE3\u7406\u7684\u8EAB\u4EFD\u5341\u5206\u7279\u6B8A\uFF0C\u5B83\u201C\u65E2\u662F\u5BA2\u6237\u7AEF\uFF0C\u53C8\u662F\u670D\u52A1\u5668\u201D\uFF0C\u540C\u65F6\u4E5F\u201C\u65E2\u4E0D\u662F\u5BA2\u6237\u7AEF\uFF0C\u53C8\u4E0D\u662F\u670D\u52A1\u5668\u201D\u3002</p><h2 id="\u6E90\u670D\u52A1\u5668\u7684\u7F13\u5B58\u63A7\u5236" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u6E90\u670D\u52A1\u5668\u7684\u7F13\u5B58\u63A7\u5236" aria-hidden="true"${_scopeId}>#</a> \u6E90\u670D\u52A1\u5668\u7684\u7F13\u5B58\u63A7\u5236</h2><ol${_scopeId}><li${_scopeId}>Cache-Control\uFF1A <ul${_scopeId}><li${_scopeId}>private\uFF1A\u53EA\u80FD\u5B58\u5728\u5BA2\u6237\u7AEF</li><li${_scopeId}>public\uFF1A\u53EF\u4EE5\u5B58\u5728\u7F13\u5B58\u670D\u52A1\u5668</li><li${_scopeId}>proxy-revalidate\uFF1A\u7F13\u5B58\u670D\u52A1\u5668\u4E13\u5C5E\u53EA\u8981\u6C42\u4EE3\u7406\u7684\u7F13\u5B58\u8FC7\u671F\u540E\u5FC5\u987B\u9A8C\u8BC1\uFF0C\u5BA2\u6237\u7AEF\u4E0D\u5FC5\u56DE\u6E90\uFF0C\u53EA\u9A8C\u8BC1\u5230\u4EE3\u7406\u8FD9\u4E2A\u73AF\u8282\u5C31\u884C\u4E86</li><li${_scopeId}>s-maxage\uFF1A\u63A7\u5236\u4EE3\u7406\u7F13\u5B58\u65F6\u95F4</li><li${_scopeId}>no-transform\uFF1A\u4E13\u5C5E\uFF0C\u7981\u6B62\u56FE\u7247\u4E4B\u7C7B\u7684\u8FDB\u884C\u7F13\u5B58</li></ul></li></ol><h2 id="\u5BA2\u6237\u7AEF\u7F13\u5B58\u63A7\u5236" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u5BA2\u6237\u7AEF\u7F13\u5B58\u63A7\u5236" aria-hidden="true"${_scopeId}>#</a> \u5BA2\u6237\u7AEF\u7F13\u5B58\u63A7\u5236</h2><ol${_scopeId}><li${_scopeId}>\u201Cmax-stale\u201D\u7684\u610F\u601D\u662F\u5982\u679C\u4EE3\u7406\u4E0A\u7684\u7F13\u5B58\u8FC7\u671F\u4E86\u4E5F\u53EF\u4EE5\u63A5\u53D7\uFF0C\u4F46\u4E0D\u80FD\u8FC7\u671F\u592A\u591A\uFF0C\u8D85\u8FC7 x \u79D2\u4E5F\u4F1A\u4E0D\u8981\u3002</li><li${_scopeId}>\u201Cmin-fresh\u201D\u7684\u610F\u601D\u662F\u7F13\u5B58\u5FC5\u987B\u6709\u6548\uFF0C\u800C\u4E14\u5FC5\u987B\u5728 x \u79D2\u540E\u4F9D\u7136\u6709\u6548\u3002</li></ol><h2 id="\u4E2A\u4EBA\u7406\u89E3" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u4E2A\u4EBA\u7406\u89E3" aria-hidden="true"${_scopeId}>#</a> \u4E2A\u4EBA\u7406\u89E3</h2><ol${_scopeId}><li${_scopeId}>\u6D4F\u89C8\u5668\u62FF\u5230\u7F51\u5740\u4EE5\u540E</li><li${_scopeId}>\u6D4F\u89C8\u5668\u67E5\u627E\u7F13\u5B58\uFF0C1.\u5982\u679C\u6709\u76F4\u63A5\u653E\u56DE\uFF0C2.\u5982\u679C\u6CA1\u6709\uFF0C\u90A3\u4E48\u901A\u8FC7\u57DF\u540D\u67E5\u627E</li><li${_scopeId}>dns\u5BFB\u5740\u64CD\u4F5C\uFF0C1.\u672C\u5730\u6709\u7F13\u5B58\u76F4\u63A5\uFF0C2.\u65E0\u7F13\u5B58/\u7F13\u5B58\u8FC7\u671F -&gt; \u672C\u5730dns\u670D\u52A1\u5668 -&gt; \u6839dns -&gt; \u9876\u7EA7dns -&gt; \u6743\u5A01</li><li${_scopeId}>\u51C6\u5907\u5EFA\u7ACBhttp\u8BF7\u6C42</li><li${_scopeId}>\u51C6\u5907\u8BF7\u6C42\u5934\uFF0CCache-Control\u5C5E\u6027\uFF0Cno-stroe, no-cache, noly-if-cached\u7B49\u3002</li><li${_scopeId}>\u5982\u679C\u7F13\u5B58\u8FC7\u671F\uFF0C\u9700\u8981\u643A\u5E26if-None-Match\u6216\u8005if-modifid-since\u7B49\u5B57\u6BB5\u8FDB\u884C\u6821\u9A8C</li><li${_scopeId}>\u4E0E\u4EE3\u7406\u670D\u52A1\u5668\u5EFA\u7ACBtcp\u4E09\u6B21\u63E1\u624B</li><li${_scopeId}>\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u67E5\u770B\u8BF7\u6C42\u5934\u662F\u5426\u53EF\u4EE5\u4F7F\u7528\u7F13\u5B58\uFF0C1.\u6709\u7F13\u5B58\uFF0C\u53EF\u7528\uFF0C\u4E0D\u53EF\u7528\uFF0C2.\u65E0\u7F13\u5B58</li><li${_scopeId}>\u4E0D\u53EF\u7528/\u65E0\u7F13\u5B58\uFF1A\u4E0E\u6E90\u670D\u52A1\u5668\u5EFA\u7ACBtcp\u8FDE\u63A5\uFF0C</li><li${_scopeId}>\u65E0\u7F13\u5B58\uFF1A\u6E90\u670D\u52A1\u5668\u53D1\u751F\u54CD\u5E94\u62A5\u6587\uFF0C\u4EE3\u7406\u670D\u52A1\u5668\u901A\u8FC7Cache-Control\u8FDB\u884C\u64CD\u4F5C</li><li${_scopeId}>\u4E0D\u53EF\u7528\uFF1A\u901Aif-Nono-match\u7B49\u5B57\u6BB5\u8FDB\u884C\u6821\u9A8C\uFF0C\u5982\u679C\u6CA1\u6709\u53D8\u5316\u8FD4\u56DE304\uFF0C\u5982\u679C\u6709\u66F4\u65B0\u4E0E\u65E0\u7F13\u5B58\u64CD\u4F5C\u4E00\u81F4</li><li${_scopeId}>\u8FD4\u56DE\u4E2A\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u67E5\u770BCache-Control,\u662F\u5426\u53EF\u4EE5\u5B58\u4E3A\u516C\u5171\u8D44\u6E90\uFF0C\u5B58\u50A8\u65F6\u95F4\u7B49</li><li${_scopeId}>\u8FD4\u8FD8\u7ED9\u5BA2\u6237\u7AEF\uFF0C\u5982\u679C\u662F304\u76F4\u63A5\u6E32\u67D3\u3002\u54CD\u5E94\u4E2D\u4F1A\u91CD\u65B0\u643A\u5E26Cache-Control\u5982\u65F6\u95F4\u7B49\uFF0C\u8FDB\u884C\u7F13\u5B58\u3002</li><li${_scopeId}>tcp\u56DB\u6B21\u6325\u624B\u65AD\u5F00\u94FE\u63A5</li></ol></div>`);
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
                  vue.createVNode("li", null, "\u8BA1\u7B97\u673A\u9886\u57DF\u91CC\u6700\u5E38\u7528\u7684\u6027\u80FD\u4F18\u5316\u624B\u6BB5\u662F\u201C\u65F6\u7A7A\u8F6C\u6362\u201D\uFF0C\u4E5F\u5C31\u662F\u201C\u65F6\u95F4\u6362\u7A7A\u95F4\u201D\u6216\u8005\u201C\u7A7A\u95F4\u6362\u65F6\u95F4\u201D\uFF0CHTTP \u7F13\u5B58\u5C5E\u4E8E\u540E\u8005\uFF1B"),
                  vue.createVNode("li", null, "\u7F13\u5B58\u4EE3\u7406\u662F\u589E\u52A0\u4E86\u7F13\u5B58\u529F\u80FD\u7684\u4EE3\u7406\u670D\u52A1\uFF0C\u7F13\u5B58\u6E90\u670D\u52A1\u5668\u7684\u6570\u636E\uFF0C\u5206\u53D1\u7ED9\u4E0B\u6E38\u7684\u5BA2\u6237\u7AEF\uFF1B"),
                  vue.createVNode("li", null, "\u201CCache-Control\u201D\u5B57\u6BB5\u4E5F\u53EF\u4EE5\u63A7\u5236\u7F13\u5B58\u4EE3\u7406\uFF0C\u5E38\u7528\u7684\u6709\u201Cprivate\u201D\u201Cs-maxage\u201D\u201Cno-transform\u201D\u7B49\uFF0C\u540C\u6837\u5FC5\u987B\u914D\u5408\u201CLast-modified\u201D\u201CETag\u201D\u7B49\u5B57\u6BB5\u624D\u80FD\u4F7F\u7528\uFF1B"),
                  vue.createVNode("li", null, "\u7F13\u5B58\u4EE3\u7406\u6709\u65F6\u5019\u4E5F\u4F1A\u5E26\u6765\u8D1F\u9762\u5F71\u54CD\uFF0C\u7F13\u5B58\u4E0D\u826F\u6570\u636E\uFF0C\u9700\u8981\u53CA\u65F6\u5237\u65B0\u6216\u5220\u9664\u3002")
                ]),
                vue.createVNode("h2", {
                  id: "\u7F13\u5B58\u4EE3\u7406\u670D\u52A1",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u7F13\u5B58\u4EE3\u7406\u670D\u52A1",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u7F13\u5B58\u4EE3\u7406\u670D\u52A1")
                ]),
                vue.createVNode("p", null, "\u5728 HTTP \u7684\u7F13\u5B58\u4F53\u7CFB\u4E2D\uFF0C\u7F13\u5B58\u4EE3\u7406\u7684\u8EAB\u4EFD\u5341\u5206\u7279\u6B8A\uFF0C\u5B83\u201C\u65E2\u662F\u5BA2\u6237\u7AEF\uFF0C\u53C8\u662F\u670D\u52A1\u5668\u201D\uFF0C\u540C\u65F6\u4E5F\u201C\u65E2\u4E0D\u662F\u5BA2\u6237\u7AEF\uFF0C\u53C8\u4E0D\u662F\u670D\u52A1\u5668\u201D\u3002"),
                vue.createVNode("h2", {
                  id: "\u6E90\u670D\u52A1\u5668\u7684\u7F13\u5B58\u63A7\u5236",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u6E90\u670D\u52A1\u5668\u7684\u7F13\u5B58\u63A7\u5236",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u6E90\u670D\u52A1\u5668\u7684\u7F13\u5B58\u63A7\u5236")
                ]),
                vue.createVNode("ol", null, [
                  vue.createVNode("li", null, [
                    vue.createTextVNode("Cache-Control\uFF1A "),
                    vue.createVNode("ul", null, [
                      vue.createVNode("li", null, "private\uFF1A\u53EA\u80FD\u5B58\u5728\u5BA2\u6237\u7AEF"),
                      vue.createVNode("li", null, "public\uFF1A\u53EF\u4EE5\u5B58\u5728\u7F13\u5B58\u670D\u52A1\u5668"),
                      vue.createVNode("li", null, "proxy-revalidate\uFF1A\u7F13\u5B58\u670D\u52A1\u5668\u4E13\u5C5E\u53EA\u8981\u6C42\u4EE3\u7406\u7684\u7F13\u5B58\u8FC7\u671F\u540E\u5FC5\u987B\u9A8C\u8BC1\uFF0C\u5BA2\u6237\u7AEF\u4E0D\u5FC5\u56DE\u6E90\uFF0C\u53EA\u9A8C\u8BC1\u5230\u4EE3\u7406\u8FD9\u4E2A\u73AF\u8282\u5C31\u884C\u4E86"),
                      vue.createVNode("li", null, "s-maxage\uFF1A\u63A7\u5236\u4EE3\u7406\u7F13\u5B58\u65F6\u95F4"),
                      vue.createVNode("li", null, "no-transform\uFF1A\u4E13\u5C5E\uFF0C\u7981\u6B62\u56FE\u7247\u4E4B\u7C7B\u7684\u8FDB\u884C\u7F13\u5B58")
                    ])
                  ])
                ]),
                vue.createVNode("h2", {
                  id: "\u5BA2\u6237\u7AEF\u7F13\u5B58\u63A7\u5236",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u5BA2\u6237\u7AEF\u7F13\u5B58\u63A7\u5236",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u5BA2\u6237\u7AEF\u7F13\u5B58\u63A7\u5236")
                ]),
                vue.createVNode("ol", null, [
                  vue.createVNode("li", null, "\u201Cmax-stale\u201D\u7684\u610F\u601D\u662F\u5982\u679C\u4EE3\u7406\u4E0A\u7684\u7F13\u5B58\u8FC7\u671F\u4E86\u4E5F\u53EF\u4EE5\u63A5\u53D7\uFF0C\u4F46\u4E0D\u80FD\u8FC7\u671F\u592A\u591A\uFF0C\u8D85\u8FC7 x \u79D2\u4E5F\u4F1A\u4E0D\u8981\u3002"),
                  vue.createVNode("li", null, "\u201Cmin-fresh\u201D\u7684\u610F\u601D\u662F\u7F13\u5B58\u5FC5\u987B\u6709\u6548\uFF0C\u800C\u4E14\u5FC5\u987B\u5728 x \u79D2\u540E\u4F9D\u7136\u6709\u6548\u3002")
                ]),
                vue.createVNode("h2", {
                  id: "\u4E2A\u4EBA\u7406\u89E3",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u4E2A\u4EBA\u7406\u89E3",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u4E2A\u4EBA\u7406\u89E3")
                ]),
                vue.createVNode("ol", null, [
                  vue.createVNode("li", null, "\u6D4F\u89C8\u5668\u62FF\u5230\u7F51\u5740\u4EE5\u540E"),
                  vue.createVNode("li", null, "\u6D4F\u89C8\u5668\u67E5\u627E\u7F13\u5B58\uFF0C1.\u5982\u679C\u6709\u76F4\u63A5\u653E\u56DE\uFF0C2.\u5982\u679C\u6CA1\u6709\uFF0C\u90A3\u4E48\u901A\u8FC7\u57DF\u540D\u67E5\u627E"),
                  vue.createVNode("li", null, "dns\u5BFB\u5740\u64CD\u4F5C\uFF0C1.\u672C\u5730\u6709\u7F13\u5B58\u76F4\u63A5\uFF0C2.\u65E0\u7F13\u5B58/\u7F13\u5B58\u8FC7\u671F -> \u672C\u5730dns\u670D\u52A1\u5668 -> \u6839dns -> \u9876\u7EA7dns -> \u6743\u5A01"),
                  vue.createVNode("li", null, "\u51C6\u5907\u5EFA\u7ACBhttp\u8BF7\u6C42"),
                  vue.createVNode("li", null, "\u51C6\u5907\u8BF7\u6C42\u5934\uFF0CCache-Control\u5C5E\u6027\uFF0Cno-stroe, no-cache, noly-if-cached\u7B49\u3002"),
                  vue.createVNode("li", null, "\u5982\u679C\u7F13\u5B58\u8FC7\u671F\uFF0C\u9700\u8981\u643A\u5E26if-None-Match\u6216\u8005if-modifid-since\u7B49\u5B57\u6BB5\u8FDB\u884C\u6821\u9A8C"),
                  vue.createVNode("li", null, "\u4E0E\u4EE3\u7406\u670D\u52A1\u5668\u5EFA\u7ACBtcp\u4E09\u6B21\u63E1\u624B"),
                  vue.createVNode("li", null, "\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u67E5\u770B\u8BF7\u6C42\u5934\u662F\u5426\u53EF\u4EE5\u4F7F\u7528\u7F13\u5B58\uFF0C1.\u6709\u7F13\u5B58\uFF0C\u53EF\u7528\uFF0C\u4E0D\u53EF\u7528\uFF0C2.\u65E0\u7F13\u5B58"),
                  vue.createVNode("li", null, "\u4E0D\u53EF\u7528/\u65E0\u7F13\u5B58\uFF1A\u4E0E\u6E90\u670D\u52A1\u5668\u5EFA\u7ACBtcp\u8FDE\u63A5\uFF0C"),
                  vue.createVNode("li", null, "\u65E0\u7F13\u5B58\uFF1A\u6E90\u670D\u52A1\u5668\u53D1\u751F\u54CD\u5E94\u62A5\u6587\uFF0C\u4EE3\u7406\u670D\u52A1\u5668\u901A\u8FC7Cache-Control\u8FDB\u884C\u64CD\u4F5C"),
                  vue.createVNode("li", null, "\u4E0D\u53EF\u7528\uFF1A\u901Aif-Nono-match\u7B49\u5B57\u6BB5\u8FDB\u884C\u6821\u9A8C\uFF0C\u5982\u679C\u6CA1\u6709\u53D8\u5316\u8FD4\u56DE304\uFF0C\u5982\u679C\u6709\u66F4\u65B0\u4E0E\u65E0\u7F13\u5B58\u64CD\u4F5C\u4E00\u81F4"),
                  vue.createVNode("li", null, "\u8FD4\u56DE\u4E2A\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u67E5\u770BCache-Control,\u662F\u5426\u53EF\u4EE5\u5B58\u4E3A\u516C\u5171\u8D44\u6E90\uFF0C\u5B58\u50A8\u65F6\u95F4\u7B49"),
                  vue.createVNode("li", null, "\u8FD4\u8FD8\u7ED9\u5BA2\u6237\u7AEF\uFF0C\u5982\u679C\u662F304\u76F4\u63A5\u6E32\u67D3\u3002\u54CD\u5E94\u4E2D\u4F1A\u91CD\u65B0\u643A\u5E26Cache-Control\u5982\u65F6\u95F4\u7B49\uFF0C\u8FDB\u884C\u7F13\u5B58\u3002"),
                  vue.createVNode("li", null, "tcp\u56DB\u6B21\u6325\u624B\u65AD\u5F00\u94FE\u63A5")
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
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/childPages/http/httphuancundaili.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports["default"] = _sfc_main;
