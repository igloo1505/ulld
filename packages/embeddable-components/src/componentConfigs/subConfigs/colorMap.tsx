import { PropColorSchemaInput } from "./colors";

type ColorRecord = Record<keyof PropColorSchemaInput, string>;


type ColorPrefix = "text" | "bg" | "text-decoration" | "border" | "divide" | "outline" | "ring" | "shadow" | "accent" | "caret"

/* TODO: Come back and finish the rest of these colors when back on wifi. Set **everything** to css variables so they can be overridden by the user more easily. */

/* BUILD PROCESS: Move this to part of the user config and set these values as the defaults. Allow them to be overriden by the user that way, and then generate css based on that zod object. Doing this with tailwind will cause far too many issues. */

export const colorPropSchemaMap: ColorRecord = {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        cardForeground: "hsl(var(--card-foreground))",
        popover: "hsl(var(--popover))",
        popoverForeground: "hsl(var(--popover-foreground))",
        primary: "hsl(var(--primary))",
        primaryForeground: "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        secondaryForeground: "hsl(var(--secondary-foreground))",
        muted: "hsl(var(--muted))",
        mutedForeground: "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        accentForeground: "hsl(var(--accent-foreground))",
        destructive: "hsl(var(--destructive))",
        destructiveForeground: "hsl(var(--destructive-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        brand: "hsl(var(--brand))",
        ulld: "hsl(var(--brand))",
        success: "#16a34a",
        info: "#0284c7",
        error: "#dc2626",
        sky: "#07c8f9",
        yellow: "#ffff24",
        blue: "#00a1e4",
        orange: "#ff7d00",
        green: "#89fc00",
        red: "#ff0000",
        purple: "#9908ff",
        pink: "#dc0073"
};


