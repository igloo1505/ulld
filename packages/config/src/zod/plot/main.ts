import { z } from 'zod'

const colorList = z.string().array().describe("An array of colors to cycle through for multiple plot paths.")

const defaultColorList: string[] = [
    "#e91e62",
    "#9c27b0",
    "#673ab6",
    "#3f50b5",
    "#f44336",
    "#4caf4f",
    "#00a8f4",
    "#ff5721",
    "#ffeb3a",
    "#00bcd4",
    "#cddc39"
]


export const plotConfigSchema = z.object({
    plotColorList: z.union([
        colorList,
        z.object({
            dark: colorList,
            light: colorList
        })
    ]).default(defaultColorList),
    plotColorCycleMethod: z.union([
        z.literal("inOrder"),
        z.literal("random")
    ]).default("inOrder")
}).default({})
