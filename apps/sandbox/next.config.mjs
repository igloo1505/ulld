import nextPwa from "@ducanh2912/next-pwa";
import MonacoEditorWebpackPlugin from "monaco-editor-webpack-plugin";
// const removeImports = require('next-remove-imports')();
// import importRemover from "next-remove-imports"
// const removeImports = importRemover()

const isDevelopment = process.env.NODE_ENV === "development";

const monacoRules = [
    {
        test: /\.ttf$/,
        type: "asset/resource",
    },
];

const withPWA = nextPwa({
    dest: "public",
    ...(process.env.PRODUCTION_LOCAL && {
        workboxOptions: {
            mode: "production",
        },
    }),
});

/** @type {import('next').NextConfig} */
const config = withPWA({
    typescript: {
        ignoreBuildErrors: true, // FOR DEVELOPMENT ONLY
    },
    reactStrictMode: false,
    transpilePackages: [
        "three",
        "react-three-fiber",
        "drei",
        "glsify",
        "monaco-editor",
        "@ulld/editor",
        "@ulld/tailwind",
        "@ulld/full-form",
    ],
    experimental: {
        // typedRoutes: true,
        esmExternals: "loose",
        optimizePackageImports: ["lucide-react", "katex"],
        // serverComponentsExternalPackages: ['@ulld/editor'],
        // mdxRs: true,
    },
    onDemandEntries: {
        maxInactiveAge: 10 * 1000,
        pagesBufferLength: isDevelopment ? 2 : undefined,
    },
    poweredByHeader: false,
    webpack: (config, ctx) => {
        config.cache = false;
        if (!ctx.isServer) {
            // run only for client side
            config.plugins.push(
                new MonacoEditorWebpackPlugin({
                    // available options are documented at https://github.com/microsoft/monaco-editor/blob/main/webpack-plugin/README.md#options
                    // languages: [
                    //     'json',
                    //     'typescript',
                    //     'html',
                    //     'css',
                    //     'python',
                    //     'markdown',
                    //     'yaml'
                    // ],
                    filename: "static/[name].worker.js",
                }),
            );
            config.module.rules.push(...monacoRules);
        }
        config.externals.push({
            "utf-8-validate": "commonjs utf-8-validate",
            bufferutil: "commonjs bufferutil",
        });
        if (!ctx.isServer) {
            // config.resolve.modules.push(path.resolve("node_modules/monaco-editor"));
            config.resolve = {
                ...config.resolve,
                fallback: {
                    net: false,
                    dns: false,
                    tls: false,
                    fs: false,
                    request: false,
                    child_process: false,
                    perf_hooks: false,
                },
                // alias: {
                //     "styled-components": path.resolve(process.cwd(), "node_modules", "styled-components"),
                // }
            };
        }
        config.module.rules.push({
            test: /canvas\.node|\.csl|\.pdf|\.glb|\.gltf|\.whl/,
            use: "raw-loader",
        });
        config.module.rules.push({
            test: /\.ttf$/,
            use: ["file-loader"],
        });
        config.module.rules.push({
            test: /\.bib/,
            use: [
                // {
                //     loader: 'file-loader'
                // },
                {
                    loader: "raw-loader",
                },
            ],
        });
        return config;
    },
});

console.log("config: ", config);

export default config;
