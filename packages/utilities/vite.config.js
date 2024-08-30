import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import tailwindcss from "tailwindcss";



/** @type {import('vite').UserConfig} */
export default {
    build: {
        lib: {
            entry: resolve(__dirname, "./lib/index.ts"),
            formats: ["es", "cjs"],
            name: "@ulld/utilities",
            // fileName: (format) => `index`,
        },
        outDir: "dist",
        target: "esnext",
        minify: false,
        rollupOptions: {
            external: ["react", "react-dom", "tailwindcss", "react/jsx-runtime"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                    tailwindcss: "tailwindcss",
                },
            },
        },
        sourcemap: true,
        emptyOutDir: true,
    },
    plugins: [react(), dts({ rollupTypes: true })],
    css: {
        postcss: {
            plugins: [tailwindcss],
        },
    },
};
