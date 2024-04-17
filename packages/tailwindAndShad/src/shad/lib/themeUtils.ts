import {z} from 'zod'


export const themeSchema = z.union([
    z.literal("blue"),
    z.literal("gray"),
    z.literal("green"),
    z.literal("neutral"),
    z.literal("orange"),
    z.literal("red"),
    z.literal("rose"),
    z.literal("slate"),
    z.literal("stone"),
    z.literal("violet"),
    z.literal("yellow"),
    z.literal("zinc"),
]);


export type ThemeOptions = z.output<typeof themeSchema>



export const getColorMap = async (theme: ThemeOptions, raw: boolean = false) => {
    return await import(`../defaultThemes/colorMaps/${theme}${raw ? "-raw" : ""}.json`)
}
