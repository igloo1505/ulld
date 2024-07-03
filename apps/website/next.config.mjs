import nextPwa from "@ducanh2912/next-pwa";
import MonacoEditorWebpackPlugin from "monaco-editor-webpack-plugin";
import { withContentCollections } from "@content-collections/next";
// import path from 'path'

// NOTE: For building on vercel: https://github.com/Automattic/node-canvas/issues/1779
if (
    process.env.LD_LIBRARY_PATH == null ||
    !process.env.LD_LIBRARY_PATH?.includes(
        `${process.env.PWD}/node_modules/canvas/build/Release:`,
    )
) {
    process.env.LD_LIBRARY_PATH = `${process.env.PWD
        }/node_modules/canvas/build/Release:${process.env.LD_LIBRARY_PATH || ""}`;
}


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
const config = withContentCollections(
    withPWA({
        typescript: {
            ignoreBuildErrors: true, // HACK: For development only.
            tsconfigPath: "./tsconfig.json",
        },
        reactStrictMode: false,
        transpilePackages: [
            "three",
            "react-three-fiber",
            "drei",
            "glsify",
            "monaco-editor",
            "@ulld/api",
            "@ulld/baseConfigs",
            "@ulld/calendar",
            "@ulld/config",
            "@ulld/configschema",
            "@ulld/database",
            "@ulld/diagram",
            "@ulld/editor",
            "@ulld/embeddable-components",
            "@ulld/component-map",
            "@ulld/full-form",
            "@ulld/hooks",
            "@ulld/icons",
            "@ulld/kanban",
            "@ulld/logger",
            "@ulld/note-network",
            "@ulld/parsers",
            "@ulld/render",
            "@ulld/state",
            "@ulld/tailwind",
            "@ulld/ui",
            "@ulld/utilities",
            "@ulld/whiteboard",
        ],
        experimental: {
            // typedRoutes: true,
            // outputFileTracingRoot: path.join(__dirname, "../../"),
            esmExternals: "loose",
            optimizePackageImports: ["lucide-react", "katex"],
            // serverComponentsExternalPackages: ['@ulld/editor'],
            mdxRs: true,
            turbo: {
                resolveAlias: {
                    canvas: "./empty-module.ts",
                },
            },
        },
        onDemandEntries: {
            maxInactiveAge: 10 * 1000,
            pagesBufferLength: isDevelopment ? 2 : undefined,
        },
        poweredByHeader: false,
        webpack: (config, ctx) => {
            config.resolve.alias.canvas = false;
            config.cache = false;
            // if(ctx.isServer){
            //     config.plugins.push(new PrismaPlugin())
            // }
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
                test: /canvas\.node|\.csl|\.pdf|\.glb|\.gltf|\.whl|\.tif/,
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
    }),
);

// Make sure the top level wrapper is from content-collection. That wrapper returns a promise and other wrappers won't accept it.
export default config;
