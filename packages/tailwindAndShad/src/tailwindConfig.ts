import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss/types/config";

export const tailwindConfig: Config = {
    darkMode: ["class"],
    // darkMode: ["variant", "&:not(.light *)"],
    // darkMode: [
    //     "variant",
    //     [
    //         "@media (prefers-color-scheme: dark) { &:not(.light *) }",
    //         "&:is(.dark *)",
    //     ],
    // ],
    import: true,
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                xxs: "480px",
                xs: "580px",
                sm: "640px",
                md: "768px",
                mdlg: "896px",
                extraMedium: "980px",
                lg: "1024px",
                lgr: "1150px",
                xl: "1280px",
                "2xl": "1400px",
            },
        },
        extend: {
            screens: {
                xxs: "480px",
                xs: "580px",
                sm: "640px",
                md: "768px",
                mdlg: "896px",
                extraMedium: "980px",
                lg: "1024px",
                lgr: "1150px",
                xl: "1280px",
                "2xl": "1400px",
            },
            fontFamily: {
                sans: ["var(--font-sans)", ...fontFamily.sans],
            },
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                brand: "hsl(var(--brand))",
                lightBlue: {
                    "100": "#E0F2FE",
                    "200": "#BAE6FD",
                    "300": "#7DD3FC",
                    "400": "#38BDF8",
                    "500": "#0EA5E9",
                    "600": "#0284C7",
                    "700": "#0369A1",
                    "800": "#075985",
                    "900": "#1E3A8A",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [
        require("tailwindcss-animate"),
        require("tailwindcss-debug-screens"),
        require("@tailwindcss/container-queries"),
    ],
};
