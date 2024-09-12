import path from "path";
import { defineConfig } from "tsup";
import { globSync } from "glob";
import { copyJsonFilesToDist } from "@ulld/utilities/copyJsonFilesToDist";

let entries = globSync("./src/**/*.{ts,tsx}", {
    cwd: import.meta.dirname,
    nodir: true,
});


export default defineConfig((options) => {
    return {
        entry: entries,
        // platform: "neutral",
        splitting: true,
        sourcemap: true,
        clean: false,
        metafile: true,
        cjsInterop: true,
        // dts: true,
        // target: "es2021",
        format: ["esm", "cjs"],
        // minify: true,
        // bundle: true,
        // treeshake: "recommended",
        shims: false,
        skipNodeModulesBundle: true,
        // external: ["react", "@ulld/**"],
        tsconfig: path.resolve(__dirname, "tsconfig.json"),
        outExtension: ({ format }) => {
            return {
                js: `.${format === "esm" ? "js" : "cjs"}`,
            };
        },
        esbuildOptions(options, context) {
            options.ignoreAnnotations = false;
        },

        // esbuildPlugins: [
        //     preserveDirectivesPlugin({
        //         directives: ["use client", "use strict"],
        //         include: /\.(js|ts|jsx|tsx)$/,
        //         exclude: /node_modules/,
        //     }),
        // ],
        onSuccess: () => copyJsonFilesToDist(__dirname),
    };
});
