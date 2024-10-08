import { plotColors } from "./plotColors.js";

export const ulldDefaultColorThemes = [
    "blue",
    "gray",
    "green",
    "neutral",
    "orange",
    "red",
    "rose",
    "slate",
    "stone",
    "violet",
    "yellow",
    "zinc",
    "ulld",
] as const;

export const ulldDefaultPlotThemes: (keyof typeof plotColors)[] = [
    ...(Object.keys(plotColors) as (keyof typeof plotColors)[]),
] as const;
