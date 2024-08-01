import { plotColors } from "./plotColors"

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
    "zinc"
] as const


export const ulldDefaultPlotThemes: (keyof typeof plotColors)[] = [
    ...Object.keys(plotColors) as (keyof typeof plotColors)[],
] as const
