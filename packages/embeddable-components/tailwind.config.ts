import { tailwindConfig } from "@ulld/tailwind/tailwindConfig";
import { createPreset } from "fumadocs-ui/tailwind-plugin";
import type { Config } from "tailwindcss/types/config";

const flattenColorPalette = (colors: any): any =>
    Object.assign(
        {},
        ...Object.entries(
            colors !== null && colors !== void 0 ? colors : {},
        ).flatMap(([color, values]: any) =>
            typeof values === "object"
                ? Object.entries(flattenColorPalette(values)).map(([number, hex]) => ({
                    [color + (number === "DEFAULT" ? "" : `-${number}`)]: hex,
                }))
                : [
                    {
                        [`${color}`]: values,
                    },
                ],
        ),
    );

const tailwindCfg: Config = {
    content: [
        "./node_modules/@ulld/tailwind/src/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@ulld/embeddable-components/src/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@ulld/component-map/src/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@ulld/editor/src/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@ulld/ui/src/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@ulld/full-form/src/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@ulld/icons/src/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@ulld/whiteboard/src/**/*.{js,ts,jsx,tsx,mdx}",
        './node_modules/fumadocs-ui/dist/**/*.js',
        '../../node_modules/fumadocs-ui/dist/**/*.js',
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./content/**/*.mdx",
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
        function addVariablesForColors({ addBase, theme }: any) {
            const allColors = flattenColorPalette(theme("colors"));
            const newVars = Object.fromEntries(
                Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
            );
            addBase({
                ":root": newVars,
            });
        },
    ],
    presets: [
        createPreset(),
        tailwindConfig
    ],
};

export default tailwindCfg;
