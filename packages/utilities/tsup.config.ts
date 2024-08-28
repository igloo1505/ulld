import { defineConfig } from "tsup";

// import { globSync } from "glob";
// let entries = globSync("./src/**/*.{ts,tsx}", {
//     cwd: import.meta.dirname,
//     nodir: true,
// });

export default defineConfig({
    entry: [
        "src/**/*.ts",
        "src/**/*.tsx",
    ],
    splitting: true,
    sourcemap: true,
    clean: false,
    // cjsInterop: true,
    dts: true,
    target: "es2021",
    format: ["esm", "cjs"],
    minify: true,
    bundle: true,
    treeshake: true,
    shims: true,
    skipNodeModulesBundle: true,
    external: [
        "react",
    ],
    tsconfig: "tsconfig.json",
    outExtension: ({ format }) => {
        return {
            js: `.${format}.js`,
        };
    },
});
