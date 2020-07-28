(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('lodash.camelcase'), require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'lodash.camelcase', 'vue'], factory) :
  (global = global || self, factory(global['vue-mdijs'] = {}, global.camelcase, global.vue));
}(this, (function (exports, camelcase, vue) { 'use strict';

  camelcase = camelcase && Object.prototype.hasOwnProperty.call(camelcase, 'default') ? camelcase['default'] : camelcase;

  var script = {
    name: 'v-mdi',
    props: {
      name: String,
      title: String,
      size: {
        type: [String, Number],
        default: 24,
      },
      fill: {
        type: String,
        default: 'currentColor',
      },
      rotate: {
        type: Number,
        default: 0
      },
    },
    lib: {},
    add(icons) {
      if (typeof icons === 'object' && icons !== null) {
        this.lib = icons;
      }
    },
    computed: {
      icon() {
        const icon = this.$options.lib[camelcase(this.name)];

        if (typeof icon === 'undefined') {
          console.error(`[${this.name}] Name of the icon is incorrect`);

          return;
        }

        return icon;
      }
    }
  };

  const _hoisted_1 = { key: 0 };

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createBlock("svg", {
      "view-box": "0 0 24 24",
      fill: _ctx.fill,
      height: _ctx.size,
      width: _ctx.size,
      class: "mdi-icon",
      style: { transform: `rotate(${this.rotate}deg)`, display: 'inline-block' }
    }, [
      (_ctx.title)
        ? (vue.openBlock(), vue.createBlock("title", _hoisted_1, vue.toDisplayString(_ctx.title), 1 /* TEXT */))
        : vue.createCommentVNode("v-if", true),
      vue.createVNode("path", { d: _ctx.icon }, null, 8 /* PROPS */, ["d"])
    ], 12 /* STYLE, PROPS */, ["fill", "height", "width"]))
  }

  script.render = render;
  script.__file = "src/components/vue-mdijs.vue";

  const VMdi = script;

  var index = {
  	install(Vue){
  		Vue.component(script.name, script);
  	},
  	add(icons){
  		script.add(icons);
  	}
  };

  exports.VMdi = VMdi;
  exports.default = index;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
