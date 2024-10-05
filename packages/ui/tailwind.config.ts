import { tailwindConfig } from "@ulld/tailwind/tailwindConfig";
import { Config } from "tailwindcss/types/config";
import { createPreset } from "fumadocs-ui/tailwind-plugin";
import svgToDataUri from "mini-svg-data-uri";
import staticData from "@ulld/utilities/buildStaticData";
import typography from "@tailwindcss/typography";

const flattenColorPalette = (colors: any): any =>
    Object.assign(
        {},
        ...Object.entries(
            colors !== null && colors !== void 0 ? colors : {},
        ).flatMap(([color, values]: any) =>
            typeof values == "object"
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

// const allOtherPackages = staticData.internalPackageNames.filter((n) => n !== "@ulld/ui")

const landingContent = [
    "./node_modules/@ulld/tailwind/src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../node_modules/@ulld/tailwind/src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@ulld/embeddable-components/src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@ulld/component-map/src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@ulld/editor/src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@ulld/ui/src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@ulld/full-form/src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@ulld/icons/src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../node_modules/@ulld/icons/src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@ulld/whiteboard/src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@ulld/plot/src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../node_modules/@ulld/plot/src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/fumadocs-ui/dist/**/*.js",
    "../../node_modules/fumadocs-ui/dist/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    // ...allOtherPackages.map(
    //     (x) => `./node_modules/${x}/src/**/*.{ts,tsx,js,jsx,mdx}`,
    // ),
    // ...allOtherPackages.map(
    //     (x) => `../../node_modules/${x}/src/**/*.{ts,tsx,js,jsx,mdx}`,
    // ),
    // ...allOtherPackages.map(
    //     (x) => `../../node_modules/${x}/dist/**/*.{ts,tsx,js,jsx,mdx}`,
    // ),
];

const tailwindCfg: Config = {
    content: landingContent,
    theme: {
        extend: {
            colors: (cfg) => ({
                hint: "#39f614",
                link: "var(--general-link-color)",
                error: cfg.colors.red["500"],
                ulld_info: "var(--ulld-info)",
                ulld_error: "var(--ulld-error)",
                ulld_note: "var(--ulld-note)",
                ulld_tip: "var(--ulld-tip)",
                ulld_faq: "var(--ulld-faq)",
                ulld_practice: "var(--ulld-practice)",
                ulld_abstract: "var(--ulld-abstract)",
                ulld_todo: "var(--ulld-todo)",
                ulld_success: "var(--ulld-success)",
                ulld_warn: "var(--ulld-warn)",
                ulld_fail: "var(--ulld-fail)",
                ulld_example: "var(--ulld-example)",
                ulld_quote: "var(--ulld-quote)",
                ulld_cite: "var(--ulld-cite)",
                ulld_equation: "var(--ulld-equation)",
                ulld_definition: "var(--ulld-definition)",
                ulld_important: "var(--ulld-important)",
            }),
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
            let allColors = flattenColorPalette(theme("colors"));
            let newVars = Object.fromEntries(
                Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
            );
            addBase({
                ":root": newVars,
            });
        },
        function ({ matchUtilities, theme }: any) {
            matchUtilities(
                {
                    "bg-grid": (value: any) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
                        )}")`,
                    }),
                    "bg-grid-small": (value: any) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
                        )}")`,
                    }),
                    "bg-dot-thick": (value: any) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`,
                        )}")`,
                    }),
                },
                {
                    values: flattenColorPalette(theme("backgroundColor")),
                    type: "color",
                },
            );
        },
    ],
    presets: [createPreset(), tailwindConfig],
};

export default tailwindCfg;
