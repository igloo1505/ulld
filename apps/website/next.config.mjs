import nextPwa from "@ducanh2912/next-pwa";
import MonacoEditorWebpackPlugin from "monaco-editor-webpack-plugin";
import { withContentlayer } from "next-contentlayer";
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

const mermaidTheme = {
    light: {
        darkMode: false,
        background: "#fff",
        primaryColor: "#7c3aed",
        primaryTextColor: "#f9fafb",
        secondaryColor: "#2563eb",
        secondaryTextColor: "#111827",
        primaryBorderColor: "#e5e7eb",
        secondaryBorderColor: "#e5e7eb",
        noteBorderColor: "#e5e7eb",
        tertiaryBorderColor: "#e5e7eb",
        tertiaryColor: "#c026d3",
        tertiaryTextColor: "#6b7280",
        lineColor: "#6b7280",
        noteBkgColor: "#f4f4f5",
        noteTextColor: "#000000",
    },
    dark: {
        darkMode: true,
        background: "#000",
        primaryColor: "#6d28d9",
        primaryTextColor: "#f9fafb",
        secondaryColor: "#1d4ed8",
        secondaryTextColor: "#f9fafb",
        primaryBorderColor: "#1f2937",
        tertiaryBorderColor: "#1f2937",
        secondaryBorderColor: "#1f2937",
        tertiaryColor: "#a21caf",
        tertiaryTextColor: "#9ca3af",
        lineColor: "#9ca3af",
        noteBkgColor: "#1b1917",
        noteTextColor: "#000000",
    },
};

const mermaidOptions = {
    output: "svg",
    /* theme: { light: 'dark', dark: 'dark' }, */
    mermaid: {
        themeVariables: mermaidTheme.dark,
        theme: "base",
    },
};

export const mathOptions = {
    tex: {
        // packages: [],
        tags: "all", // "all" | "ams" (ams breaks EqRef component, unless can find other way to force label creation.),
        useLabelIds: true,
        processEscapes: true,
        processEnvironments: true,
    },
    chtml: {
        fontURL: `${process.env.NEXTAUTH_URL}/font/mathjax`,
        adaptiveCSS: true,
    },
};

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

// const withMDX = createMDX({
//     options: {
//         remarkPlugins: [remarkMath, remarkGfm, [emoji, {}]],
//         rehypePlugins: [
//             // [rehypeMermaid, mermaidOptions],
//             [
//                 rehypeVideo,
//                 {
//                     test: /\/(.*)(.mp4|.mov|.webm)$/,
//                     details: false,
//                 },
//             ],
//             [rehypeMathjax, mathOptions],
//             [
//                 rehypePrettyCode,
//                 {
//                     keepBackground: false,
//                     theme: {
//                         light: "material-theme-lighter",
//                         dark: "dracula",
//                     },
//                     onVisitLine(node) {
//                         if (node.children.length === 0) {
//                             node.children = [{ type: "text", value: " " }];
//                         }
//                     },
//                     onVisitHighlightedLine(node) {
//                         node.properties.className.push("line--highlighted");
//                     },
//                     onVisitHighlightedWord(node) {
//                         node.properties.className = ["word--highlighted"];
//                     },
//                 },
//             ],
//             [
//                 rehypeAutolinkHeadings,
//                 {
//                     properties: {
//                         className: ["subheading-anchor"],
//                         ariaLabel: "Link to section",
//                     },
//                 },
//             ],
//             rehypeSlug,
//         ],
//     },
// });

/** @type {import('next').NextConfig} */
const config = withPWA(
    withContentlayer({
        typescript: {
            ignoreBuildErrors: true, // HACK: For development only.
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

export default config;
