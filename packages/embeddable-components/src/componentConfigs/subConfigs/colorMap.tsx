import { PropColorSchemaInput } from "./colors";



/* TODO: Come back and finish the rest of these colors when back on wifi. Set **everything** to css variables so they can be overridden by the user more easily. */
export const colorPropSchemaMap: Record<keyof PropColorSchemaInput, string> = {
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
    success: "",
    info: "",
    error: "",
    yellow: "",
    blue: "",
    orange: "",
    green: "",
    red: "",
};
