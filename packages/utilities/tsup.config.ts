import path from "path";
import { defineConfig, Options, NormalizedOptions } from "tsup";
import { preserveDirectivesPlugin } from "esbuild-plugin-preserve-directives";
import glob from "glob";
import fs from "fs";
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
    cjsInterop: true,
};

const prependUseClient = (p: string) => {
    let content = fs.readFileSync(p, {
        encoding: "utf-8",
    });
    fs.writeFileSync(
        p,
        `"use client"
${content}`,
        {
            encoding: "utf-8",
        },
    );
};

const prependDirectives = async () => {
    let files = glob.globSync("**/*.{tsx,ts}", {
        cwd: path.join(import.meta.dirname, "src"),
        nodir: true,
        absolute: true,
    });
    files.forEach((f) => {
        let distPaths = {
            cjs: f.replace("/src/", "/dist/").replace(/\.tsx?/, ".cjs.js"),
            esm: f.replace("/src/", "/dist/").replace(/\.tsx?/, ".esm.js"),
        };
        if (!fs.existsSync(distPaths.cjs)) {
            console.error(`Could not find dist path ${distPaths.cjs}`);
            process.exit();
        }

        if (!fs.existsSync(distPaths.esm)) {
            console.error(`Could not find dist path ${distPaths.esm}`);
            process.exit();
        }

        let content = fs.readFileSync(f, {
            encoding: "utf-8",
        });

        if (content.includes('"use client"') || content.includes("'use client'")) {
            prependUseClient(distPaths.cjs);
            prependUseClient(distPaths.esm);
        }
    });
};

export default defineConfig((options) => {
    console.log("options: ", options);
    return {
        entry: ["src/**/*.ts", "src/**/*.tsx"],
        platform: "neutral",
        splitting: true,
        sourcemap: true,
        clean: false,
        metafile: true,
        // cjsInterop: true,
        // dts: true,
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
        esbuildPlugins: [
            preserveDirectivesPlugin({
                directives: ["use client", "use strict"],
                include: /\.(js|ts|jsx|tsx)$/,
                exclude: /node_modules/,
            }),
        ],
        onSuccess: prependDirectives,
    };
});
