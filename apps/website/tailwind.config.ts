import { tailwindConfig } from "@ulld/tailwind/tailwindConfig";
import svgToDataUri from "mini-svg-data-uri";
import { Config } from "tailwindcss/types/config";

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



const tailwindCfg: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@ulld/tailwind/src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@ulld/embeddable-components/src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@ulld/component-map/src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@ulld/editor/src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@ulld/ui/src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@ulld/full-form/src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@ulld/icons/src/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionDelay: {
        "400": "400ms",
      },
      fontFamily: {
        sans: ["var(--ulld-app-font)"],
      },
      colors: {
        hint: "#39f614",
        link: "#00bbf9",
      },
      maxWidth: {
        content: "1440px",
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
  presets: [tailwindConfig],
};

export default tailwindCfg;
