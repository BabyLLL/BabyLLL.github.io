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
    const frontmatter = { "title": "05 | \u5E38\u8BF4\u7684\u201C\u56DB\u5C42\u201D\u548C\u201C\u4E03\u5C42\u201D\u5230\u5E95\u662F\u4EC0\u4E48\uFF1F\u201C\u4E94\u5C42\u201D\u201C\u516D\u5C42\u201D\u54EA\u53BB\u4E86\uFF1F", "date": "2021-09-26T16:00:00.000Z", "duration": "10min", "meta": [{ "property": "og:title", "content": "05 | \u5E38\u8BF4\u7684\u201C\u56DB\u5C42\u201D\u548C\u201C\u4E03\u5C42\u201D\u5230\u5E95\u662F\u4EC0\u4E48\uFF1F\u201C\u4E94\u5C42\u201D\u201C\u516D\u5C42\u201D\u54EA\u53BB\u4E86\uFF1F" }] };
    expose({ frontmatter });
    const head$1 = { "title": "05 | \u5E38\u8BF4\u7684\u201C\u56DB\u5C42\u201D\u548C\u201C\u4E03\u5C42\u201D\u5230\u5E95\u662F\u4EC0\u4E48\uFF1F\u201C\u4E94\u5C42\u201D\u201C\u516D\u5C42\u201D\u54EA\u53BB\u4E86\uFF1F", "meta": [{ "property": "og:title", "content": "05 | \u5E38\u8BF4\u7684\u201C\u56DB\u5C42\u201D\u548C\u201C\u4E03\u5C42\u201D\u5230\u5E95\u662F\u4EC0\u4E48\uFF1F\u201C\u4E94\u5C42\u201D\u201C\u516D\u5C42\u201D\u54EA\u53BB\u4E86\uFF1F" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Blog = Blog._sfc_main;
      _push(serverRenderer.ssrRenderComponent(_component_Blog, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><h2 id="\u5F52\u7EB3" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u5F52\u7EB3" aria-hidden="true"${_scopeId}>#</a> \u5F52\u7EB3</h2><ol${_scopeId}><li${_scopeId}>TCP/IP \u5206\u4E3A\u56DB\u5C42\uFF0C\u6838\u5FC3\u662F\u4E8C\u5C42\u7684 IP \u548C\u4E09\u5C42\u7684 TCP\uFF0CHTTP \u5728\u7B2C\u56DB\u5C42\uFF1B</li><li${_scopeId}>OSI \u5206\u4E3A\u4E03\u5C42\uFF0C\u57FA\u672C\u5BF9\u5E94 TCP/IP\uFF0CTCP \u5728\u7B2C\u56DB\u5C42\uFF0CHTTP \u5728\u7B2C\u4E03\u5C42\uFF1B</li><li${_scopeId}>OSI \u53EF\u4EE5\u6620\u5C04\u5230 TCP/IP\uFF0C\u4F46\u8FD9\u671F\u95F4\u4E00\u3001\u4E94\u3001\u516D\u5C42\u6D88\u5931\u4E86\uFF1B</li><li${_scopeId}>\u65E5\u5E38\u4EA4\u6D41\u7684\u65F6\u5019\u6211\u4EEC\u901A\u5E38\u4F7F\u7528 OSI \u6A21\u578B\uFF0C\u7528\u56DB\u5C42\u3001\u4E03\u5C42\u7B49\u672F\u8BED\uFF1B</li><li${_scopeId}>HTTP \u5229\u7528 TCP/IP \u534F\u8BAE\u6808\u9010\u5C42\u6253\u5305\u518D\u62C6\u5305\uFF0C\u5B9E\u73B0\u4E86\u6570\u636E\u4F20\u8F93\uFF0C\u4F46\u4E0B\u9762\u7684\u7EC6\u8282\u5E76\u4E0D\u53EF\u89C1\u3002</li></ol><h2 id="\u5E94\u7528" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u5E94\u7528" aria-hidden="true"${_scopeId}>#</a> \u5E94\u7528</h2><p${_scopeId}>\u4F7F\u7528\u7B2C\u51E0\u5C42\uFF0C\u800C\u4E0D\u662F\u8868\u793A\u56DB\u5C42\u534F\u8BAE\u6216\u8005\u4E03\u5C42\u534F\u8BAE</p><blockquote${_scopeId}><p${_scopeId}>\u6709\u4E00\u4E2A\u8FA8\u522B\u56DB\u5C42\u548C\u4E03\u5C42\u6BD4\u8F83\u597D\u7684\uFF08\u4F46\u4E0D\u662F\u7EDD\u5BF9\u7684\uFF09\u5C0F\u7A8D\u95E8\uFF0C\u201C\u4E24\u4E2A\u51E1\u662F\u201D\uFF1A\u51E1\u662F\u7531\u64CD\u4F5C\u7CFB\u7EDF\u8D1F\u8D23\u5904\u7406\u7684\u5C31\u662F\u56DB\u5C42\u6216\u56DB\u5C42\u4EE5\u4E0B\uFF0C\u5426\u5219\uFF0C\u51E1\u662F\u9700\u8981\u7531\u5E94\u7528\u7A0B\u5E8F\uFF08\u4E5F\u5C31\u662F\u4F60\u81EA\u5DF1\u5199\u4EE3\u7801\uFF09\u8D1F\u8D23\u5904\u7406\u7684\u5C31\u662F\u4E03\u5C42\u3002</p></blockquote><h2 id="tcp-ip-\u7F51\u7EDC\u5206\u5C42\u6A21\u578B" tabindex="-1"${_scopeId}><a class="header-anchor" href="#tcp-ip-\u7F51\u7EDC\u5206\u5C42\u6A21\u578B" aria-hidden="true"${_scopeId}>#</a> TCP/IP \u7F51\u7EDC\u5206\u5C42\u6A21\u578B</h2><p${_scopeId}>TCP/IP \u5F53\u521D\u7684\u8BBE\u8BA1\u8005\u771F\u7684\u662F\u975E\u5E38\u806A\u660E\uFF0C\u521B\u9020\u6027\u5730\u63D0\u51FA\u4E86\u201C\u5206\u5C42\u201D\u7684\u6982\u5FF5\uFF0C\u628A\u590D\u6742\u7684\u7F51\u7EDC\u901A\u4FE1\u5212\u5206\u51FA\u591A\u4E2A\u5C42\u6B21\uFF0C\u518D\u7ED9\u6BCF\u4E00\u4E2A\u5C42\u6B21\u5206\u914D\u4E0D\u540C\u7684\u804C\u8D23\uFF0C\u5C42\u6B21\u5185\u53EA\u4E13\u5FC3\u505A\u81EA\u5DF1\u7684\u4E8B\u60C5\u5C31\u597D\uFF0C\u7528\u201C\u5206\u800C\u6CBB\u4E4B\u201D\u7684\u601D\u60F3\u628A\u4E00\u4E2A\u201C\u5927\u9EBB\u70E6\u201D\u62C6\u5206\u6210\u4E86\u6570\u4E2A\u201C\u5C0F\u9EBB\u70E6\u201D\uFF0C\u4ECE\u800C\u89E3\u51B3\u4E86\u7F51\u7EDC\u901A\u4FE1\u7684\u96BE\u9898\u3002</p><p${_scopeId}>\u6CE8\u610F\u5B83\u7684\u5C42\u6B21\u987A\u5E8F\u662F\u201C\u4ECE\u4E0B\u5F80\u4E0A\u201D\u6570\u7684\uFF0C\u6240\u4EE5\u7B2C\u4E00\u5C42\u5C31\u662F\u6700\u4E0B\u9762\u7684\u4E00\u5C42\u3002</p><p${_scopeId}>\u7B2C\u4E00\u5C42\u53EB\u201C\u94FE\u63A5\u5C42\u201D\uFF08link layer\uFF09\uFF0C\u8D1F\u8D23\u5728\u4EE5\u592A\u7F51\u3001WiFi \u8FD9\u6837\u7684\u5E95\u5C42\u7F51\u7EDC\u4E0A\u53D1\u9001\u539F\u59CB\u6570\u636E\u5305\uFF0C\u5DE5\u4F5C\u5728\u7F51\u5361\u8FD9\u4E2A\u5C42\u6B21\uFF0C\u4F7F\u7528 MAC \u5730\u5740\u6765\u6807\u8BB0\u7F51\u7EDC\u4E0A\u7684\u8BBE\u5907\uFF0C\u6240\u4EE5\u6709\u65F6\u5019\u4E5F\u53EB MAC \u5C42\u3002</p><p${_scopeId}>\u7B2C\u4E8C\u5C42\u53EB\u201C\u7F51\u9645\u5C42\u201D\u6216\u8005\u201C\u7F51\u7EDC\u4E92\u8FDE\u5C42\u201D\uFF08internet layer\uFF09\uFF0CIP \u534F\u8BAE\u5C31\u5904\u5728\u8FD9\u4E00\u5C42\u3002\u56E0\u4E3A IP \u534F\u8BAE\u5B9A\u4E49\u4E86\u201CIP \u5730\u5740\u201D\u7684\u6982\u5FF5\uFF0C\u6240\u4EE5\u5C31\u53EF\u4EE5\u5728\u201C\u94FE\u63A5\u5C42\u201D\u7684\u57FA\u7840\u4E0A\uFF0C\u7528 IP \u5730\u5740\u53D6\u4EE3 MAC \u5730\u5740\uFF0C\u628A\u8BB8\u8BB8\u591A\u591A\u7684\u5C40\u57DF\u7F51\u3001\u5E7F\u57DF\u7F51\u8FDE\u63A5\u6210\u4E00\u4E2A\u865A\u62DF\u7684\u5DE8\u5927\u7F51\u7EDC\uFF0C\u5728\u8FD9\u4E2A\u7F51\u7EDC\u91CC\u627E\u8BBE\u5907\u65F6\u53EA\u8981\u628A IP \u5730\u5740\u518D\u201C\u7FFB\u8BD1\u201D\u6210 MAC \u5730\u5740\u5C31\u53EF\u4EE5\u4E86\u3002</p><p${_scopeId}>\u7B2C\u4E09\u5C42\u53EB\u201C\u4F20\u8F93\u5C42\u201D\uFF08transport layer\uFF09\uFF0C\u8FD9\u4E2A\u5C42\u6B21\u534F\u8BAE\u7684\u804C\u8D23\u662F\u4FDD\u8BC1\u6570\u636E\u5728 IP \u5730\u5740\u6807\u8BB0\u7684\u4E24\u70B9\u4E4B\u95F4\u201C\u53EF\u9760\u201D\u5730\u4F20\u8F93\uFF0C\u662F TCP \u534F\u8BAE\u5DE5\u4F5C\u7684\u5C42\u6B21\uFF0C\u53E6\u5916\u8FD8\u6709\u5B83\u7684\u4E00\u4E2A\u201C\u5C0F\u4F19\u4F34\u201DUDP\u3002</p><p${_scopeId}>TCP \u662F\u4E00\u4E2A\u6709\u72B6\u6001\u7684\u534F\u8BAE\uFF0C\u9700\u8981\u5148\u4E0E\u5BF9\u65B9\u5EFA\u7ACB\u8FDE\u63A5\u7136\u540E\u624D\u80FD\u53D1\u9001\u6570\u636E\uFF0C\u800C\u4E14\u4FDD\u8BC1\u6570\u636E\u4E0D\u4E22\u5931\u4E0D\u91CD\u590D\u3002\u800C UDP \u5219\u6BD4\u8F83\u7B80\u5355\uFF0C\u5B83\u65E0\u72B6\u6001\uFF0C\u4E0D\u7528\u4E8B\u5148\u5EFA\u7ACB\u8FDE\u63A5\u5C31\u53EF\u4EE5\u4EFB\u610F\u53D1\u9001\u6570\u636E\uFF0C\u4F46\u4E0D\u4FDD\u8BC1\u6570\u636E\u4E00\u5B9A\u4F1A\u53D1\u5230\u5BF9\u65B9\u3002\u4E24\u4E2A\u534F\u8BAE\u7684\u53E6\u4E00\u4E2A\u91CD\u8981\u533A\u522B\u5728\u4E8E\u6570\u636E\u7684\u5F62\u5F0F\u3002TCP \u7684\u6570\u636E\u662F\u8FDE\u7EED\u7684\u201C\u5B57\u8282\u6D41\u201D\uFF0C\u6709\u5148\u540E\u987A\u5E8F\uFF0C\u800C UDP \u5219\u662F\u5206\u6563\u7684\u5C0F\u6570\u636E\u5305\uFF0C\u662F\u987A\u5E8F\u53D1\uFF0C\u4E71\u5E8F\u6536\u3002</p><p${_scopeId}>\u5173\u4E8E TCP \u548C UDP \u53EF\u4EE5\u5C55\u5F00\u8BA8\u8BBA\u7684\u8BDD\u9898\u8FD8\u6709\u5F88\u591A\uFF0C\u6BD4\u5982\u6700\u7ECF\u5178\u7684\u201C\u4E09\u6B21\u63E1\u624B\u201D\u548C\u201C\u56DB\u6B21\u6325\u624B\u201D\uFF0C\u4E00\u65F6\u534A\u4F1A\u5F88\u96BE\u8BF4\u5B8C\uFF0C\u597D\u5728\u4E0E HTTP \u7684\u5173\u7CFB\u4E0D\u662F\u592A\u5927\uFF0C\u4EE5\u540E\u9047\u5230\u4E86\u518D\u8BE6\u7EC6\u8BB2\u89E3\u3002</p><p${_scopeId}>\u534F\u8BAE\u6808\u7684\u7B2C\u56DB\u5C42\u53EB\u201C\u5E94\u7528\u5C42\u201D\uFF08application layer\uFF09\uFF0C\u7531\u4E8E\u4E0B\u9762\u7684\u4E09\u5C42\u628A\u57FA\u7840\u6253\u5F97\u975E\u5E38\u597D\uFF0C\u6240\u4EE5\u5728\u8FD9\u4E00\u5C42\u5C31\u201C\u767E\u82B1\u9F50\u653E\u201D\u4E86\uFF0C\u6709\u5404\u79CD\u9762\u5411\u5177\u4F53\u5E94\u7528\u7684\u534F\u8BAE\u3002\u4F8B\u5982 Telnet\u3001SSH\u3001FTP\u3001SMTP \u7B49\u7B49\uFF0C\u5F53\u7136\u8FD8\u6709\u6211\u4EEC\u7684 HTTP\u3002</p><p${_scopeId}>MAC \u5C42\u7684\u4F20\u8F93\u5355\u4F4D\u662F\u5E27\uFF08frame\uFF09\uFF0CIP \u5C42\u7684\u4F20\u8F93\u5355\u4F4D\u662F\u5305\uFF08packet\uFF09\uFF0CTCP \u5C42\u7684\u4F20\u8F93\u5355\u4F4D\u662F\u6BB5\uFF08segment\uFF09\uFF0CHTTP \u7684\u4F20\u8F93\u5355\u4F4D\u5219\u662F\u6D88\u606F\u6216\u62A5\u6587\uFF08message\uFF09\u3002\u4F46\u8FD9\u4E9B\u540D\u8BCD\u5E76\u6CA1\u6709\u4EC0\u4E48\u672C\u8D28\u7684\u533A\u5206\uFF0C\u53EF\u4EE5\u7EDF\u79F0\u4E3A\u6570\u636E\u5305\u3002OSI</p><h2 id="osi\u7F51\u7EDC\u5206\u6210\u6A21\u578B" tabindex="-1"${_scopeId}><a class="header-anchor" href="#osi\u7F51\u7EDC\u5206\u6210\u6A21\u578B" aria-hidden="true"${_scopeId}>#</a> OSI\u7F51\u7EDC\u5206\u6210\u6A21\u578B</h2><ol${_scopeId}><li${_scopeId}>\u7B2C\u4E00\u5C42\uFF1A\u7269\u7406\u5C42\uFF0C\u7F51\u7EDC\u7684\u7269\u7406\u5F62\u5F0F\uFF0C\u4F8B\u5982\u7535\u7F06\u3001\u5149\u7EA4\u3001\u7F51\u5361\u3001\u96C6\u7EBF\u5668\u7B49\u7B49\uFF1B</li><li${_scopeId}>\u7B2C\u4E8C\u5C42\uFF1A\u6570\u636E\u94FE\u8DEF\u5C42\uFF0C\u5B83\u57FA\u672C\u76F8\u5F53\u4E8E TCP/IP \u7684\u94FE\u63A5\u5C42\uFF1B</li><li${_scopeId}>\u7B2C\u4E09\u5C42\uFF1A\u7F51\u7EDC\u5C42\uFF0C\u76F8\u5F53\u4E8E TCP/IP \u91CC\u7684\u7F51\u9645\u5C42\uFF1B</li><li${_scopeId}>\u7B2C\u56DB\u5C42\uFF1A\u4F20\u8F93\u5C42\uFF0C\u76F8\u5F53\u4E8E TCP/IP \u91CC\u7684\u4F20\u8F93\u5C42\uFF1B</li><li${_scopeId}>\u7B2C\u4E94\u5C42\uFF1A\u4F1A\u8BDD\u5C42\uFF0C\u7EF4\u62A4\u7F51\u7EDC\u4E2D\u7684\u8FDE\u63A5\u72B6\u6001\uFF0C\u5373\u4FDD\u6301\u4F1A\u8BDD\u548C\u540C\u6B65\uFF1B</li><li${_scopeId}>\u7B2C\u516D\u5C42\uFF1A\u8868\u793A\u5C42\uFF0C\u628A\u6570\u636E\u8F6C\u6362\u4E3A\u5408\u9002\u3001\u53EF\u7406\u89E3\u7684\u8BED\u6CD5\u548C\u8BED\u4E49\uFF1B</li><li${_scopeId}>\u7B2C\u4E03\u5C42\uFF1A\u5E94\u7528\u5C42\uFF0C\u9762\u5411\u5177\u4F53\u7684\u5E94\u7528\u4F20\u8F93\u6570\u636E\u3002</li></ol><h2 id="\u4E24\u4E2A\u5206\u5C42\u6A21\u578B\u7684\u6620\u5C04\u5173\u7CFB" tabindex="-1"${_scopeId}><a class="header-anchor" href="#\u4E24\u4E2A\u5206\u5C42\u6A21\u578B\u7684\u6620\u5C04\u5173\u7CFB" aria-hidden="true"${_scopeId}>#</a> \u4E24\u4E2A\u5206\u5C42\u6A21\u578B\u7684\u6620\u5C04\u5173\u7CFB</h2><p${_scopeId}><img src="https://static001.geekbang.org/resource/image/9d/94/9d9b3c9274465c94e223676b6d434194.png" alt="\u5206\u5C42\u6620\u5C04"${_scopeId}></p><ol${_scopeId}><li${_scopeId}>\u7B2C\u4E00\u5C42\uFF1A\u7269\u7406\u5C42\uFF0CTCP/IP \u91CC\u65E0\u5BF9\u5E94\uFF1B</li><li${_scopeId}>\u7B2C\u4E8C\u5C42\uFF1A\u6570\u636E\u94FE\u8DEF\u5C42\uFF0C\u5BF9\u5E94 TCP/IP \u7684\u94FE\u63A5\u5C42\uFF1B</li><li${_scopeId}>\u7B2C\u4E09\u5C42\uFF1A\u7F51\u7EDC\u5C42\uFF0C\u5BF9\u5E94 TCP/IP \u7684\u7F51\u9645\u5C42\uFF1B</li><li${_scopeId}>\u7B2C\u56DB\u5C42\uFF1A\u4F20\u8F93\u5C42\uFF0C\u5BF9\u5E94 TCP/IP \u7684\u4F20\u8F93\u5C42\uFF1B</li><li${_scopeId}>\u7B2C\u4E94\u3001\u516D\u3001\u4E03\u5C42\uFF1A\u7EDF\u4E00\u5BF9\u5E94\u5230 TCP/IP \u7684\u5E94\u7528\u5C42\u3002</li></ol><h2 id="tcp-ip-\u534F\u8BAE\u6808\u7684\u5DE5\u4F5C\u65B9\u5F0F" tabindex="-1"${_scopeId}><a class="header-anchor" href="#tcp-ip-\u534F\u8BAE\u6808\u7684\u5DE5\u4F5C\u65B9\u5F0F" aria-hidden="true"${_scopeId}>#</a> TCP/IP \u534F\u8BAE\u6808\u7684\u5DE5\u4F5C\u65B9\u5F0F</h2><p${_scopeId}><img src="https://static001.geekbang.org/resource/image/70/6f/70bc19acacf2245fa841349f15cb7a6f.png" alt="\u534F\u8BAE\u6808"${_scopeId}></p></div>`);
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
                  vue.createVNode("li", null, "TCP/IP \u5206\u4E3A\u56DB\u5C42\uFF0C\u6838\u5FC3\u662F\u4E8C\u5C42\u7684 IP \u548C\u4E09\u5C42\u7684 TCP\uFF0CHTTP \u5728\u7B2C\u56DB\u5C42\uFF1B"),
                  vue.createVNode("li", null, "OSI \u5206\u4E3A\u4E03\u5C42\uFF0C\u57FA\u672C\u5BF9\u5E94 TCP/IP\uFF0CTCP \u5728\u7B2C\u56DB\u5C42\uFF0CHTTP \u5728\u7B2C\u4E03\u5C42\uFF1B"),
                  vue.createVNode("li", null, "OSI \u53EF\u4EE5\u6620\u5C04\u5230 TCP/IP\uFF0C\u4F46\u8FD9\u671F\u95F4\u4E00\u3001\u4E94\u3001\u516D\u5C42\u6D88\u5931\u4E86\uFF1B"),
                  vue.createVNode("li", null, "\u65E5\u5E38\u4EA4\u6D41\u7684\u65F6\u5019\u6211\u4EEC\u901A\u5E38\u4F7F\u7528 OSI \u6A21\u578B\uFF0C\u7528\u56DB\u5C42\u3001\u4E03\u5C42\u7B49\u672F\u8BED\uFF1B"),
                  vue.createVNode("li", null, "HTTP \u5229\u7528 TCP/IP \u534F\u8BAE\u6808\u9010\u5C42\u6253\u5305\u518D\u62C6\u5305\uFF0C\u5B9E\u73B0\u4E86\u6570\u636E\u4F20\u8F93\uFF0C\u4F46\u4E0B\u9762\u7684\u7EC6\u8282\u5E76\u4E0D\u53EF\u89C1\u3002")
                ]),
                vue.createVNode("h2", {
                  id: "\u5E94\u7528",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u5E94\u7528",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u5E94\u7528")
                ]),
                vue.createVNode("p", null, "\u4F7F\u7528\u7B2C\u51E0\u5C42\uFF0C\u800C\u4E0D\u662F\u8868\u793A\u56DB\u5C42\u534F\u8BAE\u6216\u8005\u4E03\u5C42\u534F\u8BAE"),
                vue.createVNode("blockquote", null, [
                  vue.createVNode("p", null, "\u6709\u4E00\u4E2A\u8FA8\u522B\u56DB\u5C42\u548C\u4E03\u5C42\u6BD4\u8F83\u597D\u7684\uFF08\u4F46\u4E0D\u662F\u7EDD\u5BF9\u7684\uFF09\u5C0F\u7A8D\u95E8\uFF0C\u201C\u4E24\u4E2A\u51E1\u662F\u201D\uFF1A\u51E1\u662F\u7531\u64CD\u4F5C\u7CFB\u7EDF\u8D1F\u8D23\u5904\u7406\u7684\u5C31\u662F\u56DB\u5C42\u6216\u56DB\u5C42\u4EE5\u4E0B\uFF0C\u5426\u5219\uFF0C\u51E1\u662F\u9700\u8981\u7531\u5E94\u7528\u7A0B\u5E8F\uFF08\u4E5F\u5C31\u662F\u4F60\u81EA\u5DF1\u5199\u4EE3\u7801\uFF09\u8D1F\u8D23\u5904\u7406\u7684\u5C31\u662F\u4E03\u5C42\u3002")
                ]),
                vue.createVNode("h2", {
                  id: "tcp-ip-\u7F51\u7EDC\u5206\u5C42\u6A21\u578B",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#tcp-ip-\u7F51\u7EDC\u5206\u5C42\u6A21\u578B",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" TCP/IP \u7F51\u7EDC\u5206\u5C42\u6A21\u578B")
                ]),
                vue.createVNode("p", null, "TCP/IP \u5F53\u521D\u7684\u8BBE\u8BA1\u8005\u771F\u7684\u662F\u975E\u5E38\u806A\u660E\uFF0C\u521B\u9020\u6027\u5730\u63D0\u51FA\u4E86\u201C\u5206\u5C42\u201D\u7684\u6982\u5FF5\uFF0C\u628A\u590D\u6742\u7684\u7F51\u7EDC\u901A\u4FE1\u5212\u5206\u51FA\u591A\u4E2A\u5C42\u6B21\uFF0C\u518D\u7ED9\u6BCF\u4E00\u4E2A\u5C42\u6B21\u5206\u914D\u4E0D\u540C\u7684\u804C\u8D23\uFF0C\u5C42\u6B21\u5185\u53EA\u4E13\u5FC3\u505A\u81EA\u5DF1\u7684\u4E8B\u60C5\u5C31\u597D\uFF0C\u7528\u201C\u5206\u800C\u6CBB\u4E4B\u201D\u7684\u601D\u60F3\u628A\u4E00\u4E2A\u201C\u5927\u9EBB\u70E6\u201D\u62C6\u5206\u6210\u4E86\u6570\u4E2A\u201C\u5C0F\u9EBB\u70E6\u201D\uFF0C\u4ECE\u800C\u89E3\u51B3\u4E86\u7F51\u7EDC\u901A\u4FE1\u7684\u96BE\u9898\u3002"),
                vue.createVNode("p", null, "\u6CE8\u610F\u5B83\u7684\u5C42\u6B21\u987A\u5E8F\u662F\u201C\u4ECE\u4E0B\u5F80\u4E0A\u201D\u6570\u7684\uFF0C\u6240\u4EE5\u7B2C\u4E00\u5C42\u5C31\u662F\u6700\u4E0B\u9762\u7684\u4E00\u5C42\u3002"),
                vue.createVNode("p", null, "\u7B2C\u4E00\u5C42\u53EB\u201C\u94FE\u63A5\u5C42\u201D\uFF08link layer\uFF09\uFF0C\u8D1F\u8D23\u5728\u4EE5\u592A\u7F51\u3001WiFi \u8FD9\u6837\u7684\u5E95\u5C42\u7F51\u7EDC\u4E0A\u53D1\u9001\u539F\u59CB\u6570\u636E\u5305\uFF0C\u5DE5\u4F5C\u5728\u7F51\u5361\u8FD9\u4E2A\u5C42\u6B21\uFF0C\u4F7F\u7528 MAC \u5730\u5740\u6765\u6807\u8BB0\u7F51\u7EDC\u4E0A\u7684\u8BBE\u5907\uFF0C\u6240\u4EE5\u6709\u65F6\u5019\u4E5F\u53EB MAC \u5C42\u3002"),
                vue.createVNode("p", null, "\u7B2C\u4E8C\u5C42\u53EB\u201C\u7F51\u9645\u5C42\u201D\u6216\u8005\u201C\u7F51\u7EDC\u4E92\u8FDE\u5C42\u201D\uFF08internet layer\uFF09\uFF0CIP \u534F\u8BAE\u5C31\u5904\u5728\u8FD9\u4E00\u5C42\u3002\u56E0\u4E3A IP \u534F\u8BAE\u5B9A\u4E49\u4E86\u201CIP \u5730\u5740\u201D\u7684\u6982\u5FF5\uFF0C\u6240\u4EE5\u5C31\u53EF\u4EE5\u5728\u201C\u94FE\u63A5\u5C42\u201D\u7684\u57FA\u7840\u4E0A\uFF0C\u7528 IP \u5730\u5740\u53D6\u4EE3 MAC \u5730\u5740\uFF0C\u628A\u8BB8\u8BB8\u591A\u591A\u7684\u5C40\u57DF\u7F51\u3001\u5E7F\u57DF\u7F51\u8FDE\u63A5\u6210\u4E00\u4E2A\u865A\u62DF\u7684\u5DE8\u5927\u7F51\u7EDC\uFF0C\u5728\u8FD9\u4E2A\u7F51\u7EDC\u91CC\u627E\u8BBE\u5907\u65F6\u53EA\u8981\u628A IP \u5730\u5740\u518D\u201C\u7FFB\u8BD1\u201D\u6210 MAC \u5730\u5740\u5C31\u53EF\u4EE5\u4E86\u3002"),
                vue.createVNode("p", null, "\u7B2C\u4E09\u5C42\u53EB\u201C\u4F20\u8F93\u5C42\u201D\uFF08transport layer\uFF09\uFF0C\u8FD9\u4E2A\u5C42\u6B21\u534F\u8BAE\u7684\u804C\u8D23\u662F\u4FDD\u8BC1\u6570\u636E\u5728 IP \u5730\u5740\u6807\u8BB0\u7684\u4E24\u70B9\u4E4B\u95F4\u201C\u53EF\u9760\u201D\u5730\u4F20\u8F93\uFF0C\u662F TCP \u534F\u8BAE\u5DE5\u4F5C\u7684\u5C42\u6B21\uFF0C\u53E6\u5916\u8FD8\u6709\u5B83\u7684\u4E00\u4E2A\u201C\u5C0F\u4F19\u4F34\u201DUDP\u3002"),
                vue.createVNode("p", null, "TCP \u662F\u4E00\u4E2A\u6709\u72B6\u6001\u7684\u534F\u8BAE\uFF0C\u9700\u8981\u5148\u4E0E\u5BF9\u65B9\u5EFA\u7ACB\u8FDE\u63A5\u7136\u540E\u624D\u80FD\u53D1\u9001\u6570\u636E\uFF0C\u800C\u4E14\u4FDD\u8BC1\u6570\u636E\u4E0D\u4E22\u5931\u4E0D\u91CD\u590D\u3002\u800C UDP \u5219\u6BD4\u8F83\u7B80\u5355\uFF0C\u5B83\u65E0\u72B6\u6001\uFF0C\u4E0D\u7528\u4E8B\u5148\u5EFA\u7ACB\u8FDE\u63A5\u5C31\u53EF\u4EE5\u4EFB\u610F\u53D1\u9001\u6570\u636E\uFF0C\u4F46\u4E0D\u4FDD\u8BC1\u6570\u636E\u4E00\u5B9A\u4F1A\u53D1\u5230\u5BF9\u65B9\u3002\u4E24\u4E2A\u534F\u8BAE\u7684\u53E6\u4E00\u4E2A\u91CD\u8981\u533A\u522B\u5728\u4E8E\u6570\u636E\u7684\u5F62\u5F0F\u3002TCP \u7684\u6570\u636E\u662F\u8FDE\u7EED\u7684\u201C\u5B57\u8282\u6D41\u201D\uFF0C\u6709\u5148\u540E\u987A\u5E8F\uFF0C\u800C UDP \u5219\u662F\u5206\u6563\u7684\u5C0F\u6570\u636E\u5305\uFF0C\u662F\u987A\u5E8F\u53D1\uFF0C\u4E71\u5E8F\u6536\u3002"),
                vue.createVNode("p", null, "\u5173\u4E8E TCP \u548C UDP \u53EF\u4EE5\u5C55\u5F00\u8BA8\u8BBA\u7684\u8BDD\u9898\u8FD8\u6709\u5F88\u591A\uFF0C\u6BD4\u5982\u6700\u7ECF\u5178\u7684\u201C\u4E09\u6B21\u63E1\u624B\u201D\u548C\u201C\u56DB\u6B21\u6325\u624B\u201D\uFF0C\u4E00\u65F6\u534A\u4F1A\u5F88\u96BE\u8BF4\u5B8C\uFF0C\u597D\u5728\u4E0E HTTP \u7684\u5173\u7CFB\u4E0D\u662F\u592A\u5927\uFF0C\u4EE5\u540E\u9047\u5230\u4E86\u518D\u8BE6\u7EC6\u8BB2\u89E3\u3002"),
                vue.createVNode("p", null, "\u534F\u8BAE\u6808\u7684\u7B2C\u56DB\u5C42\u53EB\u201C\u5E94\u7528\u5C42\u201D\uFF08application layer\uFF09\uFF0C\u7531\u4E8E\u4E0B\u9762\u7684\u4E09\u5C42\u628A\u57FA\u7840\u6253\u5F97\u975E\u5E38\u597D\uFF0C\u6240\u4EE5\u5728\u8FD9\u4E00\u5C42\u5C31\u201C\u767E\u82B1\u9F50\u653E\u201D\u4E86\uFF0C\u6709\u5404\u79CD\u9762\u5411\u5177\u4F53\u5E94\u7528\u7684\u534F\u8BAE\u3002\u4F8B\u5982 Telnet\u3001SSH\u3001FTP\u3001SMTP \u7B49\u7B49\uFF0C\u5F53\u7136\u8FD8\u6709\u6211\u4EEC\u7684 HTTP\u3002"),
                vue.createVNode("p", null, "MAC \u5C42\u7684\u4F20\u8F93\u5355\u4F4D\u662F\u5E27\uFF08frame\uFF09\uFF0CIP \u5C42\u7684\u4F20\u8F93\u5355\u4F4D\u662F\u5305\uFF08packet\uFF09\uFF0CTCP \u5C42\u7684\u4F20\u8F93\u5355\u4F4D\u662F\u6BB5\uFF08segment\uFF09\uFF0CHTTP \u7684\u4F20\u8F93\u5355\u4F4D\u5219\u662F\u6D88\u606F\u6216\u62A5\u6587\uFF08message\uFF09\u3002\u4F46\u8FD9\u4E9B\u540D\u8BCD\u5E76\u6CA1\u6709\u4EC0\u4E48\u672C\u8D28\u7684\u533A\u5206\uFF0C\u53EF\u4EE5\u7EDF\u79F0\u4E3A\u6570\u636E\u5305\u3002OSI"),
                vue.createVNode("h2", {
                  id: "osi\u7F51\u7EDC\u5206\u6210\u6A21\u578B",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#osi\u7F51\u7EDC\u5206\u6210\u6A21\u578B",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" OSI\u7F51\u7EDC\u5206\u6210\u6A21\u578B")
                ]),
                vue.createVNode("ol", null, [
                  vue.createVNode("li", null, "\u7B2C\u4E00\u5C42\uFF1A\u7269\u7406\u5C42\uFF0C\u7F51\u7EDC\u7684\u7269\u7406\u5F62\u5F0F\uFF0C\u4F8B\u5982\u7535\u7F06\u3001\u5149\u7EA4\u3001\u7F51\u5361\u3001\u96C6\u7EBF\u5668\u7B49\u7B49\uFF1B"),
                  vue.createVNode("li", null, "\u7B2C\u4E8C\u5C42\uFF1A\u6570\u636E\u94FE\u8DEF\u5C42\uFF0C\u5B83\u57FA\u672C\u76F8\u5F53\u4E8E TCP/IP \u7684\u94FE\u63A5\u5C42\uFF1B"),
                  vue.createVNode("li", null, "\u7B2C\u4E09\u5C42\uFF1A\u7F51\u7EDC\u5C42\uFF0C\u76F8\u5F53\u4E8E TCP/IP \u91CC\u7684\u7F51\u9645\u5C42\uFF1B"),
                  vue.createVNode("li", null, "\u7B2C\u56DB\u5C42\uFF1A\u4F20\u8F93\u5C42\uFF0C\u76F8\u5F53\u4E8E TCP/IP \u91CC\u7684\u4F20\u8F93\u5C42\uFF1B"),
                  vue.createVNode("li", null, "\u7B2C\u4E94\u5C42\uFF1A\u4F1A\u8BDD\u5C42\uFF0C\u7EF4\u62A4\u7F51\u7EDC\u4E2D\u7684\u8FDE\u63A5\u72B6\u6001\uFF0C\u5373\u4FDD\u6301\u4F1A\u8BDD\u548C\u540C\u6B65\uFF1B"),
                  vue.createVNode("li", null, "\u7B2C\u516D\u5C42\uFF1A\u8868\u793A\u5C42\uFF0C\u628A\u6570\u636E\u8F6C\u6362\u4E3A\u5408\u9002\u3001\u53EF\u7406\u89E3\u7684\u8BED\u6CD5\u548C\u8BED\u4E49\uFF1B"),
                  vue.createVNode("li", null, "\u7B2C\u4E03\u5C42\uFF1A\u5E94\u7528\u5C42\uFF0C\u9762\u5411\u5177\u4F53\u7684\u5E94\u7528\u4F20\u8F93\u6570\u636E\u3002")
                ]),
                vue.createVNode("h2", {
                  id: "\u4E24\u4E2A\u5206\u5C42\u6A21\u578B\u7684\u6620\u5C04\u5173\u7CFB",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u4E24\u4E2A\u5206\u5C42\u6A21\u578B\u7684\u6620\u5C04\u5173\u7CFB",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" \u4E24\u4E2A\u5206\u5C42\u6A21\u578B\u7684\u6620\u5C04\u5173\u7CFB")
                ]),
                vue.createVNode("p", null, [
                  vue.createVNode("img", {
                    src: "https://static001.geekbang.org/resource/image/9d/94/9d9b3c9274465c94e223676b6d434194.png",
                    alt: "\u5206\u5C42\u6620\u5C04"
                  })
                ]),
                vue.createVNode("ol", null, [
                  vue.createVNode("li", null, "\u7B2C\u4E00\u5C42\uFF1A\u7269\u7406\u5C42\uFF0CTCP/IP \u91CC\u65E0\u5BF9\u5E94\uFF1B"),
                  vue.createVNode("li", null, "\u7B2C\u4E8C\u5C42\uFF1A\u6570\u636E\u94FE\u8DEF\u5C42\uFF0C\u5BF9\u5E94 TCP/IP \u7684\u94FE\u63A5\u5C42\uFF1B"),
                  vue.createVNode("li", null, "\u7B2C\u4E09\u5C42\uFF1A\u7F51\u7EDC\u5C42\uFF0C\u5BF9\u5E94 TCP/IP \u7684\u7F51\u9645\u5C42\uFF1B"),
                  vue.createVNode("li", null, "\u7B2C\u56DB\u5C42\uFF1A\u4F20\u8F93\u5C42\uFF0C\u5BF9\u5E94 TCP/IP \u7684\u4F20\u8F93\u5C42\uFF1B"),
                  vue.createVNode("li", null, "\u7B2C\u4E94\u3001\u516D\u3001\u4E03\u5C42\uFF1A\u7EDF\u4E00\u5BF9\u5E94\u5230 TCP/IP \u7684\u5E94\u7528\u5C42\u3002")
                ]),
                vue.createVNode("h2", {
                  id: "tcp-ip-\u534F\u8BAE\u6808\u7684\u5DE5\u4F5C\u65B9\u5F0F",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#tcp-ip-\u534F\u8BAE\u6808\u7684\u5DE5\u4F5C\u65B9\u5F0F",
                    "aria-hidden": "true"
                  }, "#"),
                  vue.createTextVNode(" TCP/IP \u534F\u8BAE\u6808\u7684\u5DE5\u4F5C\u65B9\u5F0F")
                ]),
                vue.createVNode("p", null, [
                  vue.createVNode("img", {
                    src: "https://static001.geekbang.org/resource/image/70/6f/70bc19acacf2245fa841349f15cb7a6f.png",
                    alt: "\u534F\u8BAE\u6808"
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
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/childPages/http/httpfenceng.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports["default"] = _sfc_main;
