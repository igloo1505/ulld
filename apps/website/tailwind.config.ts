import { tailwindConfig } from "@ulld/tailwind/tailwindConfig";
import { Config } from "tailwindcss/types/config";
import { DefaultTheme } from "tailwindcss/types/generated/default-theme";

const tailwindCfg: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@ulld/tailwind/src/**/*.{js,ts,jsx,tsx,mdx}",
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
      typography: {
        DEFAULT: {
          css: {
            pre: {
              "&:not([data-language])": {
                backgroundColor: "hsl(var(--background))",
              },
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  presets: [tailwindConfig],
};

export default tailwindCfg;
