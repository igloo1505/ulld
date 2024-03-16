import babel from "rollup-plugin-babel";
import visualizer from "rollup-plugin-visualizer";
import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import jsonResolve from "@rollup/plugin-json";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import babelNext from "next/babel.js";
import postcss from "rollup-plugin-postcss";
import packageConfig from "./package.json" assert { type: "json" };
import ts from "rollup-plugin-ts";
import image from "@rollup/plugin-image";

const name = packageConfig.main.replace(/\.js$/, "");

const babelOpts = {
    exclude: "node_modules/**",
    presets: ["@babel/preset-react"],
    babelHelpers: "bundled",
};

const bundle = (config) => ({
    ...config,
    input: "./src/components/navigation/navbar/navbar.tsx",
    external: (id) => !/^[./]/.test(id),
});

export default [
    {
        input: "./src/components/navigation/sidebar/sidebarNavigation.tsx",
        output: [
            {
                file: "dist/index.js",
                format: "cjs",
            },
            {
                file: "dist/index.es.js",
                format: "es",
                exports: "named",
            },
            // {
            //     plugins: [dts()],
            //     output: {
            //         file: `${name}.d.ts`,
            //         format: 'es',
            //     },
            // }
        ],
        plugins: [
            peerDepsExternal({
                // packageJsonPath: 'my/folder/package.json'
            }),
            jsonResolve(),
            ts({
                // transpiler: "swc",
                transpiler: {
                    typescriptSyntax: "typescript",
                    otherSyntax: "babel",
                },
                tsconfig: {
                    fileName: "tsconfig.json",
                    hook: (tsCfgFile) => {
                        console.log("tsCfgFile: ", tsCfgFile);
                        return {
                            ...tsCfgFile,
                            jsx: "preserve"
                        };
                    },
                },
            }),
            // esbuild({
            //     exclude: /node_modules/,
            //     jsx: "preserve",
            //     sourceMap: true
            // }),
            postcss({
                plugins: [],
                minimize: true,
            }),
            // babel(babelOpts),
            nodeResolve(),
        ],
    },
];

// export default [
//     bundle({
//         plugins: [esbuild(), image()],
//         output: [
//             {
//                 file: `${name}.js`,
//                 format: 'cjs',
//                 sourcemap: true,
//             },
//             {
//                 file: `${name}.mjs`,
//                 format: 'es',
//                 sourcemap: true,
//             },
//         ],
//     }),
//     bundle({
//         plugins: [dts(), image()],
//         output: {
//             file: `${name}.d.ts`,
//             format: 'es',
//         },
//     }),
// ]
