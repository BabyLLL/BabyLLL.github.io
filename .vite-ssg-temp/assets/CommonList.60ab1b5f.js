"use strict";
var vue = require("vue");
var serverRenderer = require("@vue/server-renderer");
var vueRouter = require("vue-router");
var main = require("../main.js");
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    type: { type: String, required: false },
    path: { type: String, required: true }
  },
  setup(__props) {
    const props = __props;
    const router = vueRouter.useRouter();
    const routes = router.getRoutes().filter((i) => i.path.includes(props.path) && i.meta.frontmatter.date).sort((a, b) => +new Date(b.meta.frontmatter.date) - +new Date(a.meta.frontmatter.date));
    const posts = vue.computed(() => routes.filter((i) => !i.path.endsWith(".html") && i.meta.frontmatter.type === props.type));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = vue.resolveComponent("router-link");
      _push(`<ul${serverRenderer.ssrRenderAttrs(_attrs)}><!--[-->`);
      serverRenderer.ssrRenderList(vue.unref(posts), (route) => {
        _push(serverRenderer.ssrRenderComponent(_component_router_link, {
          key: route.path,
          class: "item block font-normal mb-6 mt-2 no-underline",
          to: route.path
        }, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<li class="no-underline"${_scopeId}><div class="title text-lg"${_scopeId}>${serverRenderer.ssrInterpolate(route.meta.frontmatter.title)} `);
              if (route.meta.frontmatter.lang) {
                _push2(`<sup class="text-xs border border-current rounded px-1 pb-0.2"${_scopeId}>${serverRenderer.ssrInterpolate(route.meta.frontmatter.lang)}</sup>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="time opacity-50 text-sm -mt-1"${_scopeId}>${serverRenderer.ssrInterpolate(vue.unref(main.formatDate)(route.meta.frontmatter.date))} `);
              if (route.meta.frontmatter.duration) {
                _push2(`<span class="opacity-50"${_scopeId}>\xB7 ${serverRenderer.ssrInterpolate(route.meta.frontmatter.duration)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></li>`);
            } else {
              return [
                vue.createVNode("li", { class: "no-underline" }, [
                  vue.createVNode("div", { class: "title text-lg" }, [
                    vue.createTextVNode(vue.toDisplayString(route.meta.frontmatter.title) + " ", 1),
                    route.meta.frontmatter.lang ? (vue.openBlock(), vue.createBlock("sup", {
                      key: 0,
                      class: "text-xs border border-current rounded px-1 pb-0.2"
                    }, vue.toDisplayString(route.meta.frontmatter.lang), 1)) : vue.createCommentVNode("", true)
                  ]),
                  vue.createVNode("div", { class: "time opacity-50 text-sm -mt-1" }, [
                    vue.createTextVNode(vue.toDisplayString(vue.unref(main.formatDate)(route.meta.frontmatter.date)) + " ", 1),
                    route.meta.frontmatter.duration ? (vue.openBlock(), vue.createBlock("span", {
                      key: 0,
                      class: "opacity-50"
                    }, "\xB7 " + vue.toDisplayString(route.meta.frontmatter.duration), 1)) : vue.createCommentVNode("", true)
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></ul>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/CommonList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports._sfc_main = _sfc_main;
