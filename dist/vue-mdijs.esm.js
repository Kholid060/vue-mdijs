import camelcase from 'lodash.camelcase';

var VueMdi = {
  name: 'mdi-icon',
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
    rotate: Number,
  },
  lib: {},
  add(icons) {
    if (typeof icons === 'object' && Object.keys(icons).length !== 0) {
      this.lib = icons;
    }
  },
  computed: {
    getIcon() {
      const icon = this.$options.lib[camelcase(this.name)];

      if (icon) {
        return icon;
      }

      console.error(`Can't find ${this.name} icon`);
      return undefined;
    },
  },
  render(h) {
    return h(
      'svg',
      {
        attrs: {
          viewBox: '0 0 24 24',
          height: this.size,
          width: this.size,
          fill: this.fill,
        },
        style:{
        	transform: rotate(`${this.rotate}deg`)
        },
        class: ['mdi-icon'],
        on: this.$listeners,
      },
      [
        this.title ? h('title', this.title) : '',
        h('path', {
          attrs: {
            d: this.getIcon,
          },
        }),
      ]
    );
  },
};

var index = {
	install(Vue){
		Vue.component(VueMdi.name, VueMdi);
	},
	add(icons){
		VueMdi.add(icons);
	}
};

export default index;
