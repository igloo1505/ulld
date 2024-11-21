import path from "path";
import react from "@vitejs/plugin-react";
import { globSync } from "glob";
import { build } from "vite";
const getBuildOutputFile = (format, filePath, opts) => {
    const devRoot = process.env.ULLD_DEV_ROOT;
    if (!devRoot) {
        throw new Error("Cannot find ULLD_DEV_ROOT env variable. Cannot continue.");
    }
    const n = path.parse(filePath).name;
    switch (format) {
        case "es":
            return path.relative(opts.__dirname, `${n}.mjs`);
        case "cjs":
            return path.relative(opts.__dirname, `${n}.cjs`);
        case "module":
            return path.relative(opts.__dirname, `${n}.mjs`);
        case "commonjs":
            return path.relative(opts.__dirname, `${n}.cjs`);
    }
    throw Error("Should not have made it this far. Checkout the switch statement in the vite build.");
};
const getPathData = (opts, filePath) => {
    const devRoot = process.env.ULLD_DEV_ROOT;
    if (!devRoot) {
        throw new Error("Cannot find ULLD_DEV_ROOT env variable. Cannot continue.");
    }
    const srcRelativePath = path.relative(path.join(opts.__dirname, "src"), filePath);
    const ext = path.parse(filePath).ext;
    let loader;
    if ([
        ".css",
        ".scss",
        ".ttf",
        ".gltf",
        ...(opts.copyExtensions || [])
    ].includes(ext)) {
        loader = "copy";
    }
    return {
        srcRelativePath: srcRelativePath,
        outDir: path.join("dist", path.dirname(srcRelativePath)),
        loader
    };
};
const buildFile = (opts, filePath) => {
    const pathData = getPathData(opts, filePath);
    console.log("pathData: ", pathData);
    return;
    build({
        plugins: [
            react(),
            // TODO: Turn this back on when it's installed!!
            // tsconfigPaths()
            // dts({
            //     rollupTypes: true,
            //     root: opts.rootDir,
            // }),
        ],
        esbuild: {
            platform: "neutral",
            jsx: "transform",
            legalComments: "external",
            loader: pathData.loader
        },
        configFile: false,
        build: {
            target: opts.target || "esnext",
            minify: "esbuild",
            sourcemap: true,
            emptyOutDir: false,
            outDir: pathData.outDir,
            lib: {
                entry: filePath,
                fileName: (format) => getBuildOutputFile(format, filePath, opts),
                formats: ["es", "cjs"],
            },
            rollupOptions: {
                external: [
                    "react/jsx-runtime",
                    "react",
                    "react-dom",
                    "next",
                    ...Object.keys(opts.peerDependencies),
                ],
                jsx: "react",
                output: {
                    interop: "esModule",
                    exports: "named",
                },
                shimMissingExports: true, // required for the tailwind package. Look ths up when backonline and see if this just patches the default export issue or if it might introduce other bugs. There's no jsdoc for this at all.
            },
        },
    });
};
export const getViteConfig_React = (opts) => {
    const devRoot = process.env.ULLD_DEV_ROOT;
    if (!devRoot) {
        throw new Error("Cannot find ULLD_DEV_ROOT env variable. Cannot continue.");
    }
    const extensions = [
        "tsx",
        "ts",
        "json",
        "scss",
        "css",
        ...(opts.glob?.fileExtensions || []).map((l) => l.slice(1)),
    ].join(",");
    const entries = globSync(`**/*.{${extensions}}`, {
        cwd: path.join(opts.__dirname, "src"),
        nodir: true,
        absolute: true,
        ignore: ["__scripts__/", ...(opts.glob?.ignore || [])],
    });
    for (const f of entries) {
        buildFile(opts, f);
    }
};
//# sourceMappingURL=react.js.map