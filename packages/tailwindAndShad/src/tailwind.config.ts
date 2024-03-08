import { fontFamily } from "tailwindcss/defaultTheme";


module.exports = {
    darkMode: ["class"],
    import: true,
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    safelist: [
        'border',
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
                Cheatsheet: {
                    dark_bg: "#a3e635",
                    dark_fg: "#fff",
                    bg: "#bef264",
                    fg: "#030712",
                },
                Doc: {
                    dark_bg: "#facc15",
                    dark_fg: "#000",
                    bg: "#facc15",
                    fg: "#000",
                },
                Guide: {
                    dark_bg: "#ec4899",
                    dark_fg: "#000",
                    bg: "#ec4899",
                    fg: "#000",
                },
                Journal: {
                    dark_bg: "#e11d48",
                    dark_fg: "#fff",
                    bg: "##f43f5e",
                    fg: "#000",
                },
                PhysicsNote: {
                    dark_bg: "#2dd4bf",
                    dark_fg: "#111827",
                    bg: "#2dd4bf",
                    fg: "#111827",
                },
                QuickNote: {
                    dark_bg: "#6366f1",
                    dark_fg: "#fff",
                    bg: "#6366f1",
                    fg: "#111827",
                },
                QuickThought: {
                    dark_bg: "#8b5cf6",
                    dark_fg: "#111827",
                    bg: "#8b5cf6",
                    fg: "#111827",
                },
                Recipe: {
                    dark_bg: "#d946ef",
                    dark_fg: "#111827",
                    bg: "#d946ef",
                    fg: "#111827",
                },
                Reference: {
                    dark_bg: "#0ea5e9",
                    dark_fg: "#fff",
                    bg: "#0ea5e9",
                    fg: "#111827",
                },
                Tech: {
                    dark_bg: "#8b5cf6",
                    dark_fg: "#111827",
                    bg: "#8b5cf6",
                    fg: "#111827",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
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
