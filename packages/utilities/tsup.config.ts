import { defineConfig, Options, NormalizedOptions } from "tsup";
import path from 'path'

// import { globSync } from "glob";
// let entries = globSync("./src/**/*.{ts,tsx}", {
//     cwd: import.meta.dirname,
//     nodir: true,
// });
//

let opts: Options = {
    clean: false,
    shims: true,
    platform: "neutral",
    // "platform"
    cjsInterop: true
}

export default defineConfig({
    entry: [
        "src/**/*.ts",
        "src/**/*.tsx",
    ],
    platform: "neutral",
    splitting: true,
    sourcemap: true,
    clean: false,
    // cjsInterop: true,
    dts: true,
    target: "es2021",
    format: ["esm", "cjs"],
    // minify: true,
    bundle: true,
    treeshake: "recommended",
    shims: true,
    skipNodeModulesBundle: true,
    // external: [
    //     "react",
    // ],
    tsconfig: path.resolve(__dirname, "tsconfig.json"),
    outExtension: ({ format }) => {
        return {
            js: `.${format}.js`,
        };
    },
});
