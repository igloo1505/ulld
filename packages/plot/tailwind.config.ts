import { tailwindConfig } from "@ulld/tailwind/tailwindConfig"
import { Config } from "tailwindcss/types/config"

const tailwindCfg: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@ulld/tailwind/src/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@ulld/editor/src/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@ulld/ui/src/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@ulld/full-form/src/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@ulld/utilities/src/**/*.{js,ts,jsx,tsx,mdx}",
        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    presets: [tailwindConfig]
}


export default tailwindCfg
