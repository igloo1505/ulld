import { ulldDefaultColorThemes, ulldDefaultPlotThemes } from "../styleUtilities/ulldDefaultColorThemes.js";
export type AvailableColorStringFormats = "hex" | "hsl" | "hsv" | "rgb";
export type UlldPlotTheme = typeof ulldDefaultPlotThemes[number];
export type UlldColorTheme = typeof ulldDefaultColorThemes[number];
export type ThemeColorGradientEntry = {
    color: string;
    foreground: string;
};
export type ThemeColorGradientRecord = Record<UlldColorTheme, {
    light: ThemeColorGradientEntry[];
    dark: ThemeColorGradientEntry[];
}>;
//# sourceMappingURL=colors.d.ts.map