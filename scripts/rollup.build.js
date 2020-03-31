export default[
	{
		input: 'src/index.js',
		output: {
			name: 'vue-mdijs',
			file: 'dist/vue-mdijs.umd.js',
			format: 'umd'
		},
		external: ['lodash.camelcase']
	},
	{
		input: 'src/index.js',
		output: {
			name: 'vue-mdijs',
			file: 'dist/vue-mdijs.esm.js',
			format: 'esm'
		},
		external: ['lodash.camelcase']
	}
]