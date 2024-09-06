import path from "path";
import { defineConfig, Options, NormalizedOptions } from "tsup";

export default defineConfig((options) => {
    return {
        entry: [
            "src/**/*.{ts,tsx,json}"
        ],
        platform: "node",
        // splitting: true,
        sourcemap: true,
        clean: true,
        metafile: true,
        cjsInterop: true,
        // bundle: false,
        // dts: true,
        target: "node20",
        format: ["esm"],
        // minify: true,
        // bundle: true,
        // treeshake: "recommended",
        shims: true,
        // skipNodeModulesBundle: false,
        outDir: "dist",
        // noExternal: [
        //     "ts-node"
        // ],
        outExtension: ({ format }) => {
            return {
                js: `.${format === "esm" ? "js" : "cjs"}`,
            };
        },
        esbuildOptions(options, context) {
            options.ignoreAnnotations = false;
            // options.
        },
        tsconfig: path.resolve(__dirname, "tsconfig.json"),
        ...options
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
