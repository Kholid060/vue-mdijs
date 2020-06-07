import camelcase from 'lodash.camelcase';

export default {
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
  render(h) {
    const icon = this.$options.lib[camelcase(this.name)];

    if (typeof icon === 'undefined') {
      console.error(`[${this.name}] Name of the icon is not correct`);

      return;
    }

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
        	transform: `rotate(${this.rotate}deg)`,
          display: 'inline-block'
        },
        class: ['mdi-icon'],
        on: this.$listeners,
      },
      [
        this.title ? h('title', this.title) : '',
        h('path', {
          attrs: {
            d: icon,
          },
        }),
      ]
    );
  },
};
