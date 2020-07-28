import camelcase from 'lodash.camelcase';
import { openBlock, createBlock, toDisplayString, createCommentVNode, createVNode } from 'vue';

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
  return (openBlock(), createBlock("svg", {
    "view-box": "0 0 24 24",
    fill: _ctx.fill,
    height: _ctx.size,
    width: _ctx.size,
    class: "mdi-icon",
    style: { transform: `rotate(${this.rotate}deg)`, display: 'inline-block' }
  }, [
    (_ctx.title)
      ? (openBlock(), createBlock("title", _hoisted_1, toDisplayString(_ctx.title), 1 /* TEXT */))
      : createCommentVNode("v-if", true),
    createVNode("path", { d: _ctx.icon }, null, 8 /* PROPS */, ["d"])
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

export default index;
export { VMdi };
