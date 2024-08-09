import { tailwindConfig } from "@ulld/tailwind/tailwindConfig"
import { Config } from "tailwindcss/types/config"
import staticData from "@ulld/utilities/buildStaticData"


const tailwindCfg: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        ...staticData.internalPackageNames.map((x) => `./node_modules/${x}/src/**/*.{ts,tsx,js,jsx,mdx}`),
        ...staticData.internalPackageNames.map((x) => `../../node_modules/${x}/src/**/*.{ts,tsx,js,jsx,mdx}`),
    ],
    presets: [tailwindConfig]
}


export default tailwindCfg
