"use strict";
var vue = require("vue");
var serverRenderer = require("@vue/server-renderer");
var main = require("../main.js");
var vueRouter = require("vue-router");
var core = require("@vueuse/core");
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    frontmatter: { type: null, required: true }
  },
  setup(__props) {
    const { frontmatter } = __props;
    const route = vueRouter.useRoute();
    const tags = vue.computed(() => {
      let { tags: tags2, tagsColor } = frontmatter;
      if (tags2 && Array.isArray(tags2)) {
        tagsColor = Array.isArray(tagsColor) ? tagsColor : [];
        return tags2.map((e, i) => ({
          name: e.trim(),
          color: tagsColor[i] ? `${tagsColor[i].trim()}` : "currentcolor"
        }));
      }
      return [];
    });
    function linkTo() {
      return getRoutePath().split("/").slice(0, -1).join("/") || "/";
    }
    function getRoutePath() {
      let path = route.path;
      const isChildpages = route.path.indexOf("childpages") >= 0;
      if (isChildpages)
        path = path.replace("childpages", "posts");
      return path;
    }
    if (core.isClient) {
      const navigate = () => {
        var _a;
        if (location.hash) {
          (_a = document.querySelector(decodeURIComponent(location.hash))) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
        }
      };
      core.useEventListener(window, "hashchange", navigate, false);
      vue.onMounted(() => {
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
          anchor.addEventListener("click", (e) => {
            e.preventDefault();
            const href = anchor.getAttribute("href");
            history.replaceState({}, "", href);
            navigate();
          });
        });
        navigate();
        setTimeout(navigate, 500);
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_router_link = vue.resolveComponent("router-link");
      _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}>`);
      if ((_a = frontmatter.display) != null ? _a : frontmatter.title) {
        _push(`<div class="prose m-auto mb-8"><h1 class="mb-0">${serverRenderer.ssrInterpolate((_b = frontmatter.display) != null ? _b : frontmatter.title)}</h1>`);
        if (vue.unref(tags) && vue.unref(tags).length > 0) {
          _push(`<p><!--[-->`);
          serverRenderer.ssrRenderList(vue.unref(tags), (tag, index) => {
            _push(`<span class="text-md border border-current rounded px-1 pb-0.2 mb-0 mr-1" style="${serverRenderer.ssrRenderStyle({ borderColor: tag.color, color: tag.color })}">${serverRenderer.ssrInterpolate(tag.name)}</span>`);
          });
          _push(`<!--]--></p>`);
        } else {
          _push(`<!---->`);
        }
        if (frontmatter.date) {
          _push(`<p class="opacity-60 !-mt-2">${serverRenderer.ssrInterpolate(vue.unref(main.formatDate)(frontmatter.date))} `);
          if (frontmatter.duration) {
            _push(`<span>\xB7 ${serverRenderer.ssrInterpolate(frontmatter.duration)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</p>`);
        } else {
          _push(`<!---->`);
        }
        if (frontmatter.subtitle) {
          _push(`<p class="opacity-70 !-mt-6 italic">${serverRenderer.ssrInterpolate(frontmatter.subtitle)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      if (vue.unref(route).path !== "/") {
        _push(`<div class="prose m-auto mt-8 mb-8">`);
        _push(serverRenderer.ssrRenderComponent(_component_router_link, {
          to: linkTo(),
          class: "font-mono no-underline opacity-50 hover:opacity-75"
        }, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`cd ..`);
            } else {
              return [
                vue.createTextVNode("cd ..")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Blog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports._sfc_main = _sfc_main;
