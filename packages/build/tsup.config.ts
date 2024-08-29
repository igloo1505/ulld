import path from "path";
import { defineConfig, Options, NormalizedOptions } from "tsup";
import { preserveDirectivesPlugin } from "esbuild-plugin-preserve-directives";
import glob from "glob";
import fs from "fs";

const entryPoints = ["src/register.js", "src/run/register.js"];

export default defineConfig((options) => {
    console.log("options: ", options);
    return {
        entry: entryPoints,
        platform: "node",
        splitting: true,
        sourcemap: true,
        clean: false,
        metafile: true,
        cjsInterop: true,
        // dts: true,
        target: "es2021",
        format: ["cjs", "esm"],
        // minify: true,
        bundle: true,
        treeshake: "recommended",
        shims: true,
        // skipNodeModulesBundle: true,
        // external: [
        //     "react",
        // ],
        tsconfig: path.resolve(__dirname, "tsConfigBuildTest.json"),
    };
});

// export default defineConfig({
//   entry: entryPoints,
//   splitting: false,
//   sourcemap: false,
//   clean: true,
// })

// export default defineConfig((options) => [
//     {
//         entry: {
//             bin: "src/register.js",
//             node: "src/main.ts",
//         },
//         splitting: true,
//         minify: !options.watch,
//         format: ["cjs"],
//         // dts: {
//         //   entry: { node: 'node-src/index.ts' },
//         //   resolve: true,
//         // },
//         treeshake: true,
//         sourcemap: false,
//         clean: true,
//         platform: "node",
//         tsconfig: path.resolve(__dirname, "tsConfigBuildTest.json"),
//         target: "node16", // Storybook still supports Node 16
//     },
//     {
//         entry: {
//             bin: "src/run/register.js",
//             node: "src/run/main.ts",
//         },
//         splitting: false,
//         minify: !options.watch,
//         format: ["cjs"],
//         treeshake: true,
//         sourcemap: false,
//         clean: true,
//         platform: "node",
//         tsconfig: path.resolve(__dirname, "tsConfigBuildTest.json"),
//         target: "node20", // Sync with `runs.using` in action.yml
//     },
// ]);
