const testPath = "./src/actions/copyStringToClipboard.ts";
import { visualizer } from "rollup-plugin-visualizer";
import pkg from "./package.json" assert {type: "json"}
import f from "../../buildUtils/getFiles.mjs";
const { getFiles, walkFsRoot, walkSync } = f;
import postcssPresetEnv from "postcss-preset-env"
import autoprefixer from "autoprefixer"
const extensions = [".js", ".ts", ".jsx", ".tsx"];
import postcss from "rollup-plugin-postcss"
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import svgr from '@svgr/rollup';

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
};


const files = walkSync("/Users/bigsexy/Desktop/currentProjects/ulld/packages/utilities/src/", "/Users/bigsexy/Desktop/currentProjects/ulld/packages/utilities/")


// TODO: Continue this in the morning with the multi-file config as described here: https://devhints.io/rollup

export default {
  input: [testPath],
  output: [
    {
      file: './dist/index.esm.js',
      format: 'esm',
      globals,
    },
    {
      file: './dist/index.cjs.js',
      format: 'cjs',
      globals,
    },
  ],
  plugins: [
    peerDepsExternal(),
    nodeResolve({extensions, browser: true}),
    commonjs(),
    typescript(),
postcss({
  plugins: [
    postcssPresetEnv(),
    autoprefixer(),
  ],
  autoModules: false,
  onlyModules: false,
  modules: {
    generateScopedName: (name, filename, css) => {
      if (filename.includes('global')) {
        return name;
      }
      const hash = stringHash(css).toString(36).substring(0, 5);
      return `test_${name}_${hash}`;
    },
  },
  extract: 'css/test-library.min.css',
  extensions: ['.scss'],
  use: ['sass'],
  minimize: true,
  sourceMap: false,
}),
      visualizer({
        filename: 'bundle-analysis.html',
        open: true,
      }),
  ],
};
