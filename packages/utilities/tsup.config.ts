import path from "path";
import { defineConfig } from "tsup";
import { globSync } from "glob";
import fs from "fs";
import { copyJsonFilesToDist } from "./src/utils/build/copyJsonFilesToDist.js";

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

const prependDirectives = async (ignore?: RegExp[]) => {
    let files = globSync("**/*.{tsx,ts}", {
        cwd: path.join(__dirname, "src"),
        nodir: true,
        absolute: true,
    });
    if(ignore){
        files = files.filter((x) => {
            return !ignore.some((r) => r.test(x))
        })
    }
    files.forEach((f) => {
        let distPaths = {
            cjs: f.replace("/src/", "/dist/").replace(/\.tsx?/, ".cjs"),
            esm: f.replace("/src/", "/dist/").replace(/\.tsx?/, ".js"),
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
    copyJsonFilesToDist(__dirname);
};

export default defineConfig((options) => {
    return {
        entry: [
            "src/**/*.ts",
            "src/**/*.tsx",
            "src/**/*.json",
            "!src/__scripts__/**",
            "src/styleUtilities/generatedThemeColorSchemes.json"
        ],
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
        treeshake: true,
        shims: false,
        minify: true,
        skipNodeModulesBundle: true,
        // external: ["react", "canvas", "@prisma/client", "prisma", "typescript", "jsdom", "react-dom"],
        tsconfig: path.resolve(__dirname, "tsconfig.json"),
        outExtension: ({ format }) => {
            return {
                js: `.${format === "esm" ? "js" : "cjs"}`,
            };
        },
        loader: {
            ".json": "json"
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
        onSuccess: () => prependDirectives([new RegExp("__scripts__/")]),
    };
});
