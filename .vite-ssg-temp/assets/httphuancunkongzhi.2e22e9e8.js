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
    const frontmatter = { "title": "20 | \u751F\u9C9C\u901F\u9012\uFF1AHTTP\u7684\u7F13\u5B58\u63A7\u5236", "date": "2021-10-30T16:00:00.000Z", "duration": "10min", "meta": [{ "property": "og:title", "content": "20 | \u751F\u9C9C\u901F\u9012\uFF1AHTTP\u7684\u7F13\u5B58\u63A7\u5236" }] };
    expose({ frontmatter });
    const head$1 = { "title": "20 | \u751F\u9C9C\u901F\u9012\uFF1AHTTP\u7684\u7F13\u5B58\u63A7\u5236", "meta": [{ "property": "og:title", "content": "20 | \u751F\u9C9C\u901F\u9012\uFF1AHTTP\u7684\u7F13\u5B58\u63A7\u5236" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Blog = Blog._sfc_main;
      _push(serverRenderer.ssrRenderComponent(_component_Blog, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><h2 id="\u5F52\u7EB3" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u5F52\u7EB3" aria-hidden="true"${_scopeId}>#</a> \u5F52\u7EB3</h2><ol${_scopeId}><li${_scopeId}>\u7F13\u5B58\u662F\u4F18\u5316\u7CFB\u7EDF\u6027\u80FD\u7684\u91CD\u8981\u624B\u6BB5\uFF0CHTTP \u4F20\u8F93\u7684\u6BCF\u4E00\u4E2A\u73AF\u8282\u4E2D\u90FD\u53EF\u4EE5\u6709\u7F13\u5B58\uFF1B</li><li${_scopeId}>\u670D\u52A1\u5668\u4F7F\u7528\u201CCache-Control\u201D\u8BBE\u7F6E\u7F13\u5B58\u7B56\u7565\uFF0C\u5E38\u7528\u7684\u662F\u201Cmax-age\u201D\uFF0C\u8868\u793A\u8D44\u6E90\u7684\u6709\u6548\u671F\uFF1B</li><li${_scopeId}>\u6D4F\u89C8\u5668\u6536\u5230\u6570\u636E\u5C31\u4F1A\u5B58\u5165\u7F13\u5B58\uFF0C\u5982\u679C\u6CA1\u8FC7\u671F\u5C31\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\uFF0C\u8FC7\u671F\u5C31\u8981\u53BB\u670D\u52A1\u5668\u9A8C\u8BC1\u662F\u5426\u4ECD\u7136\u53EF\u7528\uFF1B</li><li${_scopeId}>\u9A8C\u8BC1\u8D44\u6E90\u662F\u5426\u5931\u6548\u9700\u8981\u4F7F\u7528\u201C\u6761\u4EF6\u8BF7\u6C42\u201D\uFF0C\u5E38\u7528\u7684\u662F\u201Cif-Modified-Since\u201D\u548C\u201CIf-None-Match\u201D\uFF0C\u6536\u5230 304 \u5C31\u53EF\u4EE5\u590D\u7528\u7F13\u5B58\u91CC\u7684\u8D44\u6E90\uFF1B</li><li${_scopeId}>\u9A8C\u8BC1\u8D44\u6E90\u662F\u5426\u88AB\u4FEE\u6539\u7684\u6761\u4EF6\u6709\u4E24\u4E2A\uFF1A\u201CLast-modified\u201D\u548C\u201CETag\u201D\uFF0C\u9700\u8981\u670D\u52A1\u5668\u9884\u5148\u5728\u54CD\u5E94\u62A5\u6587\u91CC\u8BBE\u7F6E\uFF0C\u642D\u914D\u6761\u4EF6\u8BF7\u6C42\u4F7F\u7528\uFF1B</li><li${_scopeId}>\u6D4F\u89C8\u5668\u4E5F\u53EF\u4EE5\u53D1\u9001\u201CCache-Control\u201D\u5B57\u6BB5\uFF0C\u4F7F\u7528\u201Cmax-age=0\u201D\u6216\u201Cno_cache\u201D\u5237\u65B0\u6570\u636E\u3002</li></ol><h2 id="\u670D\u52A1\u5668\u7684\u7F13\u5B58\u63A7\u5236" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u670D\u52A1\u5668\u7684\u7F13\u5B58\u63A7\u5236" aria-hidden="true"${_scopeId}>#</a> \u670D\u52A1\u5668\u7684\u7F13\u5B58\u63A7\u5236</h2><ol${_scopeId}><li${_scopeId}>Cache-Control: \u63A7\u5236\u7F13\u5B58 <ul${_scopeId}><li${_scopeId}>max-Age: \u8FD9\u91CC\u7684 max-age \u662F\u201C\u751F\u5B58\u65F6\u95F4\u201D\uFF08\u53C8\u53EB\u201C\u65B0\u9C9C\u5EA6\u201D\u201C\u7F13\u5B58\u5BFF\u547D\u201D\uFF0C\u7C7B\u4F3C TTL\uFF0CTime-To-Live\uFF09\uFF0C\u65F6\u95F4\u7684\u8BA1\u7B97\u8D77\u70B9\u662F\u54CD\u5E94\u62A5\u6587\u7684\u521B\u5EFA\u65F6\u523B\uFF08\u5373 Date \u5B57\u6BB5\uFF0C\u4E5F\u5C31\u662F\u79BB\u5F00\u670D\u52A1\u5668\u7684\u65F6\u523B\uFF09\uFF0C\u800C\u4E0D\u662F\u5BA2\u6237\u7AEF\u6536\u5230\u62A5\u6587\u7684\u65F6\u523B\uFF0C\u4E5F\u5C31\u662F\u8BF4\u5305\u542B\u4E86\u5728\u94FE\u8DEF\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u6240\u6709\u8282\u70B9\u6240\u505C\u7559\u7684\u65F6\u95F4\u3002</li><li${_scopeId}>no-store\uFF1A\u4E0D\u5141\u8BB8\u7F13\u5B58\uFF0C\u7528\u4E8E\u67D0\u4E9B\u53D8\u5316\u975E\u5E38\u9891\u7E41\u7684\u6570\u636E\uFF0C\u4F8B\u5982\u79D2\u6740\u9875\u9762\uFF1B</li><li${_scopeId}>no-cache\uFF1A\u5B83\u7684\u5B57\u9762\u542B\u4E49\u5BB9\u6613\u4E0E no-store \u641E\u6DF7\uFF0C\u5B9E\u9645\u7684\u610F\u601D\u5E76\u4E0D\u662F\u4E0D\u5141\u8BB8\u7F13\u5B58\uFF0C\u800C\u662F\u53EF\u4EE5\u7F13\u5B58\uFF0C\u4F46\u5728\u4F7F\u7528\u4E4B\u524D\u5FC5\u987B\u8981\u53BB\u670D\u52A1\u5668\u9A8C\u8BC1\u662F\u5426\u8FC7\u671F\uFF0C\u662F\u5426\u6709\u6700\u65B0\u7684\u7248\u672C\uFF1B</li><li${_scopeId}>must-revalidate\uFF1A\u53C8\u662F\u4E00\u4E2A\u548C no-cache \u76F8\u4F3C\u7684\u8BCD\uFF0C\u5B83\u7684\u610F\u601D\u662F\u5982\u679C\u7F13\u5B58\u4E0D\u8FC7\u671F\u5C31\u53EF\u4EE5\u7EE7\u7EED\u4F7F\u7528\uFF0C\u4F46\u8FC7\u671F\u4E86\u5982\u679C\u8FD8\u60F3\u7528\u5C31\u5FC5\u987B\u53BB\u670D\u52A1\u5668\u9A8C\u8BC1\u3002</li></ul></li></ol><h2 id="\u5BA2\u6237\u7AEF\u7684\u7F13\u5B58\u63A7\u5236" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u5BA2\u6237\u7AEF\u7684\u7F13\u5B58\u63A7\u5236" aria-hidden="true"${_scopeId}>#</a> \u5BA2\u6237\u7AEF\u7684\u7F13\u5B58\u63A7\u5236</h2><ol${_scopeId}><li${_scopeId}>\u6D4F\u89C8\u5668\u4F7F\u7528Cache-Control\u53EA\u80FD\u63A7\u5236\uFF0C\u662F\u5426\u5237\u65B0\u6570\u636E\uFF0C\u4E0D\u80FD\u5F88\u597D\u7684\u53BB\u5229\u7528\u6570\u636E</li><li${_scopeId}>Cache-Control <ul${_scopeId}><li${_scopeId}>max-age: \u53EF\u4EE5\u4F7F\u7528if-none-match\u53BB\u6821\u9A8C</li><li${_scopeId}>no-catch: \u4E0D\u4F7F\u7528\u6761\u4EF6\u8BF7\u6C42\u76F4\u63A5\u83B7\u53D6\u65B0\u7684</li></ul></li></ol><h2 id="\u6761\u4EF6\u8BF7\u6C42" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u6761\u4EF6\u8BF7\u6C42" aria-hidden="true"${_scopeId}>#</a> \u6761\u4EF6\u8BF7\u6C42</h2><ol${_scopeId}><li${_scopeId}>\u8BF7\u6C42\u5934\uFF1Aif-Modified-Since \u54CD\u5E94\u5934\uFF1ALast-modified</li><li${_scopeId}>If-None-Match\uFF0C Etag</li><li${_scopeId}>\u6211\u4EEC\u6700\u5E38\u7528\u7684\u662F\u201Cif-Modified-Since\u201D\u548C\u201CIf-None-Match\u201D\u8FD9\u4E24\u4E2A\u3002\u9700\u8981\u7B2C\u4E00\u6B21\u7684\u54CD\u5E94\u62A5\u6587\u9884\u5148\u63D0\u4F9B\u201CLast-modified\u201D\u548C\u201CETag\u201D\uFF0C\u7136\u540E\u7B2C\u4E8C\u6B21\u8BF7\u6C42\u65F6\u5C31\u53EF\u4EE5\u5E26\u4E0A\u7F13\u5B58\u91CC\u7684\u539F\u503C\uFF0C\u9A8C\u8BC1\u8D44\u6E90\u662F\u5426\u662F\u6700\u65B0\u7684\u3002</li><li${_scopeId}>Etag: \u662F\u5B9E\u4F53\u6807\u7B7E\u7684\u552F\u4E00\u6807\u8BC6\u4E4B\u4E00</li></ol><h2 id="\u4E2A\u4EBA\u7406\u89E3" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u4E2A\u4EBA\u7406\u89E3" aria-hidden="true"${_scopeId}>#</a> \u4E2A\u4EBA\u7406\u89E3</h2><ol${_scopeId}><li${_scopeId}>\u5982\u679C\u54CD\u5E94\u5934\u7684Cache-Control\u4E2Dmax-age\u8BBE\u7F6E\u4E86\u65F6\u95F4\uFF0C\u6D4F\u89C8\u5668\u5C31\u4F1A\u6765\u5728\u89C4\u5B9A\u65F6\u95F4\u5185\u8D70\u7F13\u5B58</li><li${_scopeId}>\u5982\u679C\u8BF7\u6C42\u5934\u4E2D\u6CA1\u6709\u7528Cache-Control,\u90A3\u4E48\u5982\u679C\u54CD\u5E94\u5934\u4E2D\u7684max-age\u5230\u65F6\u95F4\u4E86\uFF0C\u8BF7\u6C42\u5934\u4E2D\u5C31\u4F1A\u643A\u5E26if-None-match\u5C31\u662F\u7684\u4E00\u6B21\u54CD\u5E94\u4E2D\u7684Etag\uFF0C\u8FDB\u884C\u5339\u914D\uFF0C\u5982\u679C\u548C\u670D\u52A1\u5668\u7684\u4E00\u6837\u8FD4\u56DE304\uFF0C\u4E0D\u4E00\u6837200\u91CD\u65B0\u8BBE\u7F6ECache-Control\u4E2D\u7684\u5C5E\u6027</li><li${_scopeId}>\u5982\u679C\u8BF7\u6C42\u5934\u6709cache-Control <ul${_scopeId}><li${_scopeId}>\u5982\u679C\u662Fmax-age=0, \u643A\u5E26if-None-match\u8FDB\u884C\u9A8C\u8BC1</li><li${_scopeId}>\u5982\u679C\u662Fno-Cache,\u4E0D\u643A\u5E26if-None-match\u9A8C\u8BC1</li></ul></li></ol></div>`);
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
                  vue.createVNode("li", null, "\u7F13\u5B58\u662F\u4F18\u5316\u7CFB\u7EDF\u6027\u80FD\u7684\u91CD\u8981\u624B\u6BB5\uFF0CHTTP \u4F20\u8F93\u7684\u6BCF\u4E00\u4E2A\u73AF\u8282\u4E2D\u90FD\u53EF\u4EE5\u6709\u7F13\u5B58\uFF1B"),
                  vue.createVNode("li", null, "\u670D\u52A1\u5668\u4F7F\u7528\u201CCache-Control\u201D\u8BBE\u7F6E\u7F13\u5B58\u7B56\u7565\uFF0C\u5E38\u7528\u7684\u662F\u201Cmax-age\u201D\uFF0C\u8868\u793A\u8D44\u6E90\u7684\u6709\u6548\u671F\uFF1B"),
                  vue.createVNode("li", null, "\u6D4F\u89C8\u5668\u6536\u5230\u6570\u636E\u5C31\u4F1A\u5B58\u5165\u7F13\u5B58\uFF0C\u5982\u679C\u6CA1\u8FC7\u671F\u5C31\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\uFF0C\u8FC7\u671F\u5C31\u8981\u53BB\u670D\u52A1\u5668\u9A8C\u8BC1\u662F\u5426\u4ECD\u7136\u53EF\u7528\uFF1B"),
                  vue.createVNode("li", null, "\u9A8C\u8BC1\u8D44\u6E90\u662F\u5426\u5931\u6548\u9700\u8981\u4F7F\u7528\u201C\u6761\u4EF6\u8BF7\u6C42\u201D\uFF0C\u5E38\u7528\u7684\u662F\u201Cif-Modified-Since\u201D\u548C\u201CIf-None-Match\u201D\uFF0C\u6536\u5230 304 \u5C31\u53EF\u4EE5\u590D\u7528\u7F13\u5B58\u91CC\u7684\u8D44\u6E90\uFF1B"),
                  vue.createVNode("li", null, "\u9A8C\u8BC1\u8D44\u6E90\u662F\u5426\u88AB\u4FEE\u6539\u7684\u6761\u4EF6\u6709\u4E24\u4E2A\uFF1A\u201CLast-modified\u201D\u548C\u201CETag\u201D\uFF0C\u9700\u8981\u670D\u52A1\u5668\u9884\u5148\u5728\u54CD\u5E94\u62A5\u6587\u91CC\u8BBE\u7F6E\uFF0C\u642D\u914D\u6761\u4EF6\u8BF7\u6C42\u4F7F\u7528\uFF1B"),
                  vue.createVNode("li", null, "\u6D4F\u89C8\u5668\u4E5F\u53EF\u4EE5\u53D1\u9001\u201CCache-Control\u201D\u5B57\u6BB5\uFF0C\u4F7F\u7528\u201Cmax-age=0\u201D\u6216\u201Cno_cache\u201D\u5237\u65B0\u6570\u636E\u3002")
                ]),
                vue.createVNode("h2", {
                  id: "\u670D\u52A1\u5668\u7684\u7F13\u5B58\u63A7\u5236",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u670D\u52A1\u5668\u7684\u7F13\u5B58\u63A7\u5236",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u670D\u52A1\u5668\u7684\u7F13\u5B58\u63A7\u5236")
                ]),
                vue.createVNode("ol", null, [
                  vue.createVNode("li", null, [
                    vue.createTextVNode("Cache-Control: \u63A7\u5236\u7F13\u5B58 "),
                    vue.createVNode("ul", null, [
                      vue.createVNode("li", null, "max-Age: \u8FD9\u91CC\u7684 max-age \u662F\u201C\u751F\u5B58\u65F6\u95F4\u201D\uFF08\u53C8\u53EB\u201C\u65B0\u9C9C\u5EA6\u201D\u201C\u7F13\u5B58\u5BFF\u547D\u201D\uFF0C\u7C7B\u4F3C TTL\uFF0CTime-To-Live\uFF09\uFF0C\u65F6\u95F4\u7684\u8BA1\u7B97\u8D77\u70B9\u662F\u54CD\u5E94\u62A5\u6587\u7684\u521B\u5EFA\u65F6\u523B\uFF08\u5373 Date \u5B57\u6BB5\uFF0C\u4E5F\u5C31\u662F\u79BB\u5F00\u670D\u52A1\u5668\u7684\u65F6\u523B\uFF09\uFF0C\u800C\u4E0D\u662F\u5BA2\u6237\u7AEF\u6536\u5230\u62A5\u6587\u7684\u65F6\u523B\uFF0C\u4E5F\u5C31\u662F\u8BF4\u5305\u542B\u4E86\u5728\u94FE\u8DEF\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u6240\u6709\u8282\u70B9\u6240\u505C\u7559\u7684\u65F6\u95F4\u3002"),
                      vue.createVNode("li", null, "no-store\uFF1A\u4E0D\u5141\u8BB8\u7F13\u5B58\uFF0C\u7528\u4E8E\u67D0\u4E9B\u53D8\u5316\u975E\u5E38\u9891\u7E41\u7684\u6570\u636E\uFF0C\u4F8B\u5982\u79D2\u6740\u9875\u9762\uFF1B"),
                      vue.createVNode("li", null, "no-cache\uFF1A\u5B83\u7684\u5B57\u9762\u542B\u4E49\u5BB9\u6613\u4E0E no-store \u641E\u6DF7\uFF0C\u5B9E\u9645\u7684\u610F\u601D\u5E76\u4E0D\u662F\u4E0D\u5141\u8BB8\u7F13\u5B58\uFF0C\u800C\u662F\u53EF\u4EE5\u7F13\u5B58\uFF0C\u4F46\u5728\u4F7F\u7528\u4E4B\u524D\u5FC5\u987B\u8981\u53BB\u670D\u52A1\u5668\u9A8C\u8BC1\u662F\u5426\u8FC7\u671F\uFF0C\u662F\u5426\u6709\u6700\u65B0\u7684\u7248\u672C\uFF1B"),
                      vue.createVNode("li", null, "must-revalidate\uFF1A\u53C8\u662F\u4E00\u4E2A\u548C no-cache \u76F8\u4F3C\u7684\u8BCD\uFF0C\u5B83\u7684\u610F\u601D\u662F\u5982\u679C\u7F13\u5B58\u4E0D\u8FC7\u671F\u5C31\u53EF\u4EE5\u7EE7\u7EED\u4F7F\u7528\uFF0C\u4F46\u8FC7\u671F\u4E86\u5982\u679C\u8FD8\u60F3\u7528\u5C31\u5FC5\u987B\u53BB\u670D\u52A1\u5668\u9A8C\u8BC1\u3002")
                    ])
                  ])
                ]),
                vue.createVNode("h2", {
                  id: "\u5BA2\u6237\u7AEF\u7684\u7F13\u5B58\u63A7\u5236",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u5BA2\u6237\u7AEF\u7684\u7F13\u5B58\u63A7\u5236",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u5BA2\u6237\u7AEF\u7684\u7F13\u5B58\u63A7\u5236")
                ]),
                vue.createVNode("ol", null, [
                  vue.createVNode("li", null, "\u6D4F\u89C8\u5668\u4F7F\u7528Cache-Control\u53EA\u80FD\u63A7\u5236\uFF0C\u662F\u5426\u5237\u65B0\u6570\u636E\uFF0C\u4E0D\u80FD\u5F88\u597D\u7684\u53BB\u5229\u7528\u6570\u636E"),
                  vue.createVNode("li", null, [
                    vue.createTextVNode("Cache-Control "),
                    vue.createVNode("ul", null, [
                      vue.createVNode("li", null, "max-age: \u53EF\u4EE5\u4F7F\u7528if-none-match\u53BB\u6821\u9A8C"),
                      vue.createVNode("li", null, "no-catch: \u4E0D\u4F7F\u7528\u6761\u4EF6\u8BF7\u6C42\u76F4\u63A5\u83B7\u53D6\u65B0\u7684")
                    ])
                  ])
                ]),
                vue.createVNode("h2", {
                  id: "\u6761\u4EF6\u8BF7\u6C42",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u6761\u4EF6\u8BF7\u6C42",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u6761\u4EF6\u8BF7\u6C42")
                ]),
                vue.createVNode("ol", null, [
                  vue.createVNode("li", null, "\u8BF7\u6C42\u5934\uFF1Aif-Modified-Since \u54CD\u5E94\u5934\uFF1ALast-modified"),
                  vue.createVNode("li", null, "If-None-Match\uFF0C Etag"),
                  vue.createVNode("li", null, "\u6211\u4EEC\u6700\u5E38\u7528\u7684\u662F\u201Cif-Modified-Since\u201D\u548C\u201CIf-None-Match\u201D\u8FD9\u4E24\u4E2A\u3002\u9700\u8981\u7B2C\u4E00\u6B21\u7684\u54CD\u5E94\u62A5\u6587\u9884\u5148\u63D0\u4F9B\u201CLast-modified\u201D\u548C\u201CETag\u201D\uFF0C\u7136\u540E\u7B2C\u4E8C\u6B21\u8BF7\u6C42\u65F6\u5C31\u53EF\u4EE5\u5E26\u4E0A\u7F13\u5B58\u91CC\u7684\u539F\u503C\uFF0C\u9A8C\u8BC1\u8D44\u6E90\u662F\u5426\u662F\u6700\u65B0\u7684\u3002"),
                  vue.createVNode("li", null, "Etag: \u662F\u5B9E\u4F53\u6807\u7B7E\u7684\u552F\u4E00\u6807\u8BC6\u4E4B\u4E00")
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
                  vue.createVNode("li", null, "\u5982\u679C\u54CD\u5E94\u5934\u7684Cache-Control\u4E2Dmax-age\u8BBE\u7F6E\u4E86\u65F6\u95F4\uFF0C\u6D4F\u89C8\u5668\u5C31\u4F1A\u6765\u5728\u89C4\u5B9A\u65F6\u95F4\u5185\u8D70\u7F13\u5B58"),
                  vue.createVNode("li", null, "\u5982\u679C\u8BF7\u6C42\u5934\u4E2D\u6CA1\u6709\u7528Cache-Control,\u90A3\u4E48\u5982\u679C\u54CD\u5E94\u5934\u4E2D\u7684max-age\u5230\u65F6\u95F4\u4E86\uFF0C\u8BF7\u6C42\u5934\u4E2D\u5C31\u4F1A\u643A\u5E26if-None-match\u5C31\u662F\u7684\u4E00\u6B21\u54CD\u5E94\u4E2D\u7684Etag\uFF0C\u8FDB\u884C\u5339\u914D\uFF0C\u5982\u679C\u548C\u670D\u52A1\u5668\u7684\u4E00\u6837\u8FD4\u56DE304\uFF0C\u4E0D\u4E00\u6837200\u91CD\u65B0\u8BBE\u7F6ECache-Control\u4E2D\u7684\u5C5E\u6027"),
                  vue.createVNode("li", null, [
                    vue.createTextVNode("\u5982\u679C\u8BF7\u6C42\u5934\u6709cache-Control "),
                    vue.createVNode("ul", null, [
                      vue.createVNode("li", null, "\u5982\u679C\u662Fmax-age=0, \u643A\u5E26if-None-match\u8FDB\u884C\u9A8C\u8BC1"),
                      vue.createVNode("li", null, "\u5982\u679C\u662Fno-Cache,\u4E0D\u643A\u5E26if-None-match\u9A8C\u8BC1")
                    ])
                  ])
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
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/childPages/http/httphuancunkongzhi.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports["default"] = _sfc_main;
