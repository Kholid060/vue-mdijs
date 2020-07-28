import VuePlugin from 'rollup-plugin-vue';

export default [
	{
		input: 'src/index.js',
		output: {
			name: 'vue-mdijs',
			file: 'dist/vue-mdijs.umd.js',
			format: 'umd'
		},
		plugins: [
	    VuePlugin()
	  ],
		external: ['lodash.camelcase']
	},
	{
		input: 'src/index.js',
		output: {
			name: 'vue-mdijs',
			file: 'dist/vue-mdijs.esm.js',
			format: 'esm'
		},
		plugins: [
	    VuePlugin()
	  ],
		external: ['lodash.camelcase']
	}
]