import resolve from "@rollup/plugin-node-resolve"

export default {
	input: 'src/main.ts',
	output: {
		file: 'bundle.js',
		format: 'cjs'
	},
	plugins: [resolve()]
};
