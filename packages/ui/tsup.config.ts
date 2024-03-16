import { defineConfig, type Options } from "tsup";
import { sassPlugin } from 'esbuild-sass-plugin';

const testing = true

export default defineConfig((options: Options) => ({
    name: "@ulld/ui tsup config",
    shims: true,
    entry: {
        "sidebar": "./src/components/navigation/sidebar/index.ts"
    },
    target: [
        "esnext"
    ],
    keepNames: testing,
    format: [
        "esm",
        "cjs"
    ],
    dts: true,
    esbuildPlugins: [sassPlugin()],
    splitting: true,
    // silent: !testing,
    // // platform: '',
    // treeshake: "safest", // safest | smallest | recommended
    clean: true,
    ...options,
}));
