import { defineConfig, type Options } from "tsup";
import { sassPlugin } from 'esbuild-sass-plugin';

export default defineConfig((options: Options) => ({
  banner: {
    // js: "'use client'",
  },  
    esbuildPlugins: [sassPlugin()],
  ...options,
}));
