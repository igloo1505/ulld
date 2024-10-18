import { tailwindConfig } from "@ulld/tailwind/tailwindConfig"
import { Config } from "tailwindcss/types/config"

const tailwindCfg: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@ulld/tailwind/src/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@ulld/editor/src/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@ulld/ui/src/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@ulld/full-form/src/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@ulld/utilities/src/**/*.{js,ts,jsx,tsx,mdx}",
        "../../node_modules/@ulld/tailwind/src/**/*.{js,ts,jsx,tsx,mdx}",
        "../../node_modules/@ulld/editor/src/**/*.{js,ts,jsx,tsx,mdx}",
        "../../node_modules/@ulld/ui/src/**/*.{js,ts,jsx,tsx,mdx}",
        "../../node_modules/@ulld/full-form/src/**/*.{js,ts,jsx,tsx,mdx}",
        "../../node_modules/@ulld/utilities/src/**/*.{js,ts,jsx,tsx,mdx}",
        "../../node_modules/@ulld/icons/dist/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@ulld/icons/dist/**/*.{js,jsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                xxs: "450px",
                blogMobile: "840px",
                navbarFull: "1024px",
                navbarPartial: "768px",
                smedium: "680px"
            },
            transitionDelay: {
                "400": "400ms",
            },
            fontFamily: {
                sans: ["var(--ulld-app-font)"],
                code: [
                    "ui-monospace",
                    "SFMono-Regular",
                    "Menlo",
                    "Monaco",
                    "Consolas",
                    "Liberation Mono",
                    "Courier New",
                    "monospace",
                ],
            },
            colors: (cfg) => ({
                hint: "#39f614",
                link: "#1e90ff",
                error: cfg.colors.red["500"],
            }),
            maxWidth: {
                content: "1440px",
            },
            height: {
                "screen-noNav": "calc(100vh - 76px)",
            },
            minHeight: {
                "screen-noNav": "calc(100vh - 76px)",
            },
            maxHeight: {
                "screen-noNav": "calc(100vh - 76px)",
            },
            typography: ({ theme }: { theme: (val: string) => void }) => ({
                DEFAULT: {
                    css: {
                        "--tw-prose-invert-body": theme("colors.gray[200]"),
                        "--tw-prose-invert-headings": "hsl(var(--foreground))",
                        pre: {
                            "&:not([data-language])": {
                                backgroundColor: "hsl(var(--background))",
                            },
                        },
                    },
                },
            }),
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("tailwindcss-animate"),
        require("@tailwindcss/container-queries"),
    ],
    presets: [tailwindConfig]
}


export default tailwindCfg
