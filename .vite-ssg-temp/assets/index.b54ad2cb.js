"use strict";
exports[Symbol.toStringTag] = "Module";
var Blog = require("./Blog.07cdaa72.js");
var vue = require("vue");
var serverRenderer = require("@vue/server-renderer");
var Typed = require("typed.js");
var g2plot = require("@antv/g2plot");
var core = require("@vueuse/core");
require("../main.js");
var head = require("@vueuse/head");
require("vue-router");
require("dayjs");
require("vite-ssg");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var Typed__default = /* @__PURE__ */ _interopDefaultLegacy(Typed);
const myIntroduce = [
  {
    words: "Hi, I'm Promise L.",
    keyword: ["Promise L \u{1F44B}"],
    color: ["#7DB9DE"],
    weight: 10
  },
  {
    words: "I'm a software engineer in Beijing.",
    keyword: ["Software Engineer \u{1F4BB}", "Beijing"],
    color: ["#E03C8A", "#FFB11B"],
    weight: 6
  },
  {
    words: "I work on frontend and Node.js development.",
    keyword: ["Frontend \u{1F596}", "Node.js"],
    color: ["#F6C555", "#79b362"],
    weight: 7
  },
  {
    words: "I'm passionate about Vue.js and Vite.",
    keyword: ["Vue.js", "Vite\u26A1"],
    color: ["#3eaf7c", "#ba38fe"],
    weight: 7
  },
  {
    words: "I also like React.",
    keyword: ["React"],
    color: ["#61dafb"],
    weight: 5
  },
  {
    words: "I often hang out on Github. Open source is cool!",
    keyword: ["Github", "Open Source"],
    color: ["#555", "#33a6b8"],
    weight: 6
  },
  {
    words: "Video game and movie and fitness are my favorite!",
    keyword: ["Video Games \u{1F3AE}", "Movies \u{1F3A5}", "Fitness \u{1F4AA}"],
    color: ["#B481BB", "#F19483", "#F19483"],
    weight: 6
  }
];
var _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const { width } = core.useWindowSize();
    const inputRef = vue.ref();
    const wordCloudRef = vue.ref();
    const showReplay = vue.ref(false);
    let wordCloud;
    const wordCloudData = vue.computed({
      get() {
        return wordCloud ? wordCloud.options.data : [];
      },
      set(v) {
        wordCloud == null ? void 0 : wordCloud.changeData(v);
      }
    });
    vue.watch(wordCloudRef, () => {
      const el = core.unrefElement(wordCloudRef);
      if (!el)
        return;
      wordCloud = new g2plot.WordCloud(el, {
        data: [],
        autoFit: true,
        height: width.value < 640 ? 500 : 600,
        wordField: "keyword",
        weightField: "weight",
        colorField: "color",
        wordStyle: {
          fontFamily: "Dosis",
          fontSize: [20, width.value < 640 ? 40 : 50],
          rotation: 0,
          padding: 10
        },
        spiral: "rectangular",
        random: () => 0.5,
        tooltip: false
      });
      wordCloud.render();
    });
    const formatWords = (item) => {
      const words = [];
      for (let i = 0; i < item.keyword.length; i++) {
        words.push({
          words: item.words,
          keyword: item.keyword[i],
          color: item.color[i],
          weight: item.weight
        });
      }
      return words;
    };
    vue.watch(inputRef, () => {
      const el = core.unrefElement(inputRef);
      if (!el)
        return;
      new Typed__default["default"](el, {
        strings: myIntroduce.map((e) => e.words).concat("I'm Promise L, This is me."),
        typeSpeed: 20,
        onStringTyped: (index) => {
          if (!wordCloud)
            return;
          if (index === myIntroduce.length) {
            const data = [];
            myIntroduce.forEach((e) => {
              data.push(...formatWords(e));
            });
            wordCloudData.value = data;
            showReplay.value = true;
          } else {
            wordCloudData.value = [...formatWords(myIntroduce[index])];
          }
        }
      });
    }, {
      flush: "post"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_mdi_replay = vue.resolveComponent("mdi-replay");
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "my-self text-center" }, _attrs))}><div></div><span class="text-lg"></span>`);
      if (showReplay.value) {
        _push(`<button class="icon-btn">`);
        _push(serverRenderer.ssrRenderComponent(_component_mdi_replay, { style: { "display": "inline", "vertical-align": "text-top" } }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Myself.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "name": "Promise L", "meta": [] };
    expose({ frontmatter });
    const head$1 = { "meta": [] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Blog = Blog._sfc_main;
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      const _component_Myself = _sfc_main$1;
      _push(serverRenderer.ssrRenderComponent(_component_Blog, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_Myself, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(_component_Myself)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode(_component_ClientOnly, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_Myself)
                  ]),
                  _: 1
                })
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
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports["default"] = _sfc_main;
