(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('lodash.camelcase')) :
  typeof define === 'function' && define.amd ? define(['exports', 'lodash.camelcase'], factory) :
  (global = global || self, factory(global['vue-mdijs'] = {}, global.camelcase));
}(this, (function (exports, camelcase) { 'use strict';

  camelcase = camelcase && Object.prototype.hasOwnProperty.call(camelcase, 'default') ? camelcase['default'] : camelcase;

  var VueMdi = {
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
        console.error('Name of the icon is not correct');

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

  const VMdi = VueMdi;

  var index = {
  	install(Vue){
  		Vue.component(VueMdi.name, VueMdi);
  	},
  	add(icons){
  		VueMdi.add(icons);
  	}
  };

  exports.VMdi = VMdi;
  exports.default = index;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
