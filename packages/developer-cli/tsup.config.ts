import path from 'path';
import { defineConfig } from 'tsup';
import { globSync } from 'glob';
import fs from 'fs';

export default defineConfig(options => {
    return {
        entry: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.json', 'src/**/*.md'],
        platform: 'node',
        splitting: true,
        sourcemap: true,
        clean: true,
        metafile: true,
        cjsInterop: true,
        // dts: true,
        target: 'es2022',
        replaceNodeEnv: true,
        format: ['esm', 'cjs'],
        // bundle: true,
        treeshake: true,
        shims: true,
        minify: true,
        skipNodeModulesBundle: true,
        // external: ["react", "canvas", "@prisma/client", "prisma", "typescript", "jsdom", "react-dom"],
        tsconfig: path.resolve(__dirname, 'tsconfig.json'),
        // outExtension: ({ format }) => {
        //     return {
        //         js: `.${format === 'esm' ? 'mjs' : 'cjs'}`,
        //     };
        // },
        loader: {
            '.json': 'json',
            '.md': 'copy',
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
        // onSuccess: () => prependDirectives([new RegExp('__scripts__/')]),
    };
});
