import nextPwa from "@ducanh2912/next-pwa"
import MonacoEditorWebpackPlugin from "monaco-editor-webpack-plugin";

const isDevelopment = process.env.NODE_ENV === "development"

const monacoRules = [
    {
        test: /\.ttf$/,
        type: 'asset/resource'
    }
]

const withPWA = nextPwa({
    dest: "public",
    ...(process.env.PRODUCTION_LOCAL && {
        workboxOptions: {
            mode: "production"
        }
    }),
});

const regexEqual = (x, y) => {
    return (
        x instanceof RegExp &&
        y instanceof RegExp &&
        x.source === y.source &&
        x.global === y.global &&
        x.ignoreCase === y.ignoreCase &&
        x.multiline === y.multiline
    )
}



/** @type {import('next').NextConfig} */
export default withPWA({
    reactStrictMode: false,
    transpilePackages: [
        'three',
        'react-three-fiber',
        'drei',
        'glsify',
        'monaco-editor',
        'mdx'
    ],
    experimental: {
        typedRoutes: true,
        esmExternals: "loose",
        optimizePackageImports: [
            "lucide-react",
            "katex"
        ]
        // mdxRs: true,
    },
    onDemandEntries: {
        maxInactiveAge: 10 * 1000,
        pagesBufferLength: isDevelopment ? 2 : undefined,
    },
    poweredByHeader: false,
    webpack: (config, ctx) => {
        config.cache = false
        // const opt = config.module.rules.find(f => f.loader && f.loader.includes("node_modules/babel-loader"))
        // if (opt) {
        //     // opt.options.plugins = [] 
        //     // PRIORITY: Come back here and leave the option as it's default but adjust the 'test' method to exclude node_modules/monaco-editor to allow the editor to import css files without blowing up the already monstorously large build.
        // }
        if (!ctx.isServer) { // run only for client side
            config.plugins.push(
                new MonacoEditorWebpackPlugin({
                    // available options are documented at https://github.com/microsoft/monaco-editor/blob/main/webpack-plugin/README.md#options
                    languages: [
                        'json',
                        'typescript',
                        'html',
                        'css',
                        'python',
                        'markdown',
                        'yaml'
                    ],
                    filename: "static/[name].worker.js",
                })
            )
            config.module.rules.push(...monacoRules)
        }
        config.externals.push({
            'utf-8-validate': 'commonjs utf-8-validate',
            'bufferutil': 'commonjs bufferutil',
        })
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
                    perf_hooks: false
                },
                // alias: {
                //     "styled-components": path.resolve(process.cwd(), "node_modules", "styled-components"),
                // }
            };
        }
        config.module.rules.push({
            test: /canvas\.node|\.csl|\.pdf|\.glb|\.gltf|\.whl/,
            use: 'raw-loader',
        })
        config.module.rules.push({
            test: /\.ttf$/,
            use: ['file-loader']
        })
        config.module.rules.push({
            test: /\.bib/,
            use: [
                // {
                //     loader: 'file-loader'
                // },
                {
                    loader: 'raw-loader'
                }
            ]
        })
        return config
    },
})

