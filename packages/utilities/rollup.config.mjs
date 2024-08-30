const testPath = "./src/actions/copyStringToClipboard.ts";
import { visualizer } from "rollup-plugin-visualizer";
import fs from "fs";
import path from "path";
// import f from "../../buildUtils/getFiles.mjs";
// const { getFiles, walkFsRoot, walkSync } = f;
// import postcssPresetEnv from "postcss-preset-env"
// import autoprefixer from "autoprefixer"
const extensions = [".js", ".ts", ".jsx", ".tsx"];
// import postcss from "rollup-plugin-postcss"
// import svgr from '@svgr/rollup';
import { globSync } from "glob";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const globals = {
    react: "React",
    "react-dom": "ReactDOM",
};

const files = globSync("**/*.{ts,tsx}", {
    cwd: path.join(import.meta.dirname, "src"),
    nodir: true,
});

let packageJson = JSON.parse(
    fs.readFileSync(path.join(import.meta.dirname, "package.json")),
);

const plugins = [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            // terser(),
            visualizer({
                filename: "bundle-analysis.html",
                open: true,
            }),
]


export default files.map((x) => {
    return {
        input: `src/${x}`,
        output: {
            file: `src/${x}`.replace("/src/", "/dist/").replace(/\.tsx?/, ".js")
        },
        external: ["react/jsx-runtime"],
        plugins: [
            typescript({ tsconfig: "./tsconfig.json" }),
        ]
    }
})

const starterConfig = [
    {
        input: files,
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: plugins,
        external: ["react", "react-dom"],
    },
    {
        input: files,
        output: [{ file: "dist/types.d.ts", format: "es" }],
        plugins: [dts.default()],
    },
];

// TODO: Continue this in the morning with the multi-file config as described here: https://devhints.io/rollup

// export default {
//   input: [testPath],
//   output: [
//     {
//       file: './dist/index.esm.js',
//       format: 'esm',
//       globals,
//     },
//     {
//       file: './dist/index.cjs.js',
//       format: 'cjs',
//       globals,
//     },
//   ],
//   plugins: [
//     peerDepsExternal(),
//     nodeResolve({extensions, browser: true}),
//     commonjs(),
//     typescript(),
// postcss({
//   plugins: [
//     postcssPresetEnv(),
//     autoprefixer(),
//   ],
//   autoModules: false,
//   onlyModules: false,
//   modules: {
//     generateScopedName: (name, filename, css) => {
//       if (filename.includes('global')) {
//         return name;
//       }
//       const hash = stringHash(css).toString(36).substring(0, 5);
//       return `test_${name}_${hash}`;
//     },
//   },
//   extract: 'css/test-library.min.css',
//   extensions: ['.scss'],
//   use: ['sass'],
//   minimize: true,
//   sourceMap: false,
// }),
//       visualizer({
//         filename: 'bundle-analysis.html',
//         open: true,
//       }),
//   ],
// };
