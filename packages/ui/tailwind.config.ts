import { tailwindConfig } from "@ulld/tailwind/tailwindConfig";
import { Config } from "tailwindcss/types/config";
import { createPreset } from "fumadocs-ui/tailwind-plugin";
import staticData from "@ulld/utilities/buildStaticData";
import typography from "@tailwindcss/typography"

const tailwindCfg: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        // ...staticData.internalPackageNames.map(
        //     (x) => `./node_modules/${x}/src/**/*.{ts,tsx,js,jsx,mdx}`,
        // ),
        // ...staticData.internalPackageNames.map(
        //     (x) => `../../node_modules/${x}/src/**/*.{ts,tsx,js,jsx,mdx}`,
        // ),
    ],
    plugins: [
        require("@tailwindcss/typography"),
        // typography
    ],
    presets: [
        createPreset(),
        tailwindConfig
    ],
};

export default tailwindCfg;
