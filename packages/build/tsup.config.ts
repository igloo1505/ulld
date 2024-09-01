import path from "path";
import { defineConfig, Options, NormalizedOptions } from "tsup";
// import { preserveDirectivesPlugin } from "esbuild-plugin-preserve-directives";
// import { globSync } from "glob";
// import fs from "fs";

const entryPoints = ["src/main.ts", "src/run/main.ts"];

export default defineConfig((options) => {
    return {
        entry: entryPoints,
        sourcemap: true,
        clean: true,
        splitting: false,
        outDir: "dist",
        format: ["cjs", "esm"],
        // treeshake: "safest",
        // shims: true,
        // skipNodeModulesBundle: true,
        // external: [
        //     "react",
        // ],
        tsconfig: path.resolve(__dirname, "tsconfig.json"),
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
