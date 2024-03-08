import { z } from "zod";


const colorScaleKeys = [
    50,
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900,
    950
]


const getObj = (c: string[]) => {
    let ob: { [k in keyof typeof colorScaleKeys]: string } = {} as { [k in keyof typeof colorScaleKeys]: string }
    colorScaleKeys.forEach((k, i) => {
        ob[k] = c[i]
    })
    return ob
}


// TODO: Populate these color values with a default list and override them as they're populated in the appConfig to make sure they are available to developers throughout the app. Make sure these are mapped to css variables with a reliable naming convention to make them available without direct access to the config.
const colorGroupItem = z.object({
    main: z.string().describe("Main color"),
    contrast: z.string().optional().describe("Color to use to contrast with the primary color. Will default to the current text color."),
    muted: z.union([
        z.object({
            main: z.string().describe("Color variant to be used in a 'muted' component. Should more subtly contrast with the background color than the primary foreground color."),
            contrast: z.string().optional().describe("Color variant to be used in a 'muted' component. Should more subtly contrast with the background color than the primary foreground color."),
        }).partial(),
        z.string().optional().describe("Color variant to be used in a 'muted' component. Should more subtly contrast with the background color than the primary foreground color.")
    ]),
    gradient: z.union([
        z.object({
            50: z.string(),
            100: z.string(),
            200: z.string(),
            300: z.string(),
            400: z.string(),
            500: z.string(),
            600: z.string(),
            700: z.string(),
            800: z.string(),
            900: z.string(),
            950: z.string(),
        }).describe("An object of a single color, in which 50 represents the lightest variation and 950 represents the darkest."),
        z.string().array().length(11).describe("An array of css color values arranged from the lightest to the darkest."),
    ])
}).partial().transform((a) => {
    return {
        main: a.main,
        contrast: a.contrast,
        muted: typeof a.muted === "string" ? { foreground: a.muted } : a.muted,
        gradient: Array.isArray(a.gradient) ? getObj(a.gradient) : a.gradient
    }
})


const colorGroup = z.object({
    dark: colorGroupItem.optional(),
    light: colorGroupItem.optional()
}).partial().transform((a) => {
    return {
        light: a.light || a.dark,
        dark: a.dark || a.light
    }
})


export type ColorGroup = z.output<typeof colorGroup>


const colorValue = z.union([
    colorGroup,
    colorGroupItem
]).transform((a) => {
    if (!("dark" in a)) {
        return {
            dark: a,
            light: a
        }
    }
    return a
})


const configColors = z.union([
    z.literal("red"),
    z.literal("orange"),
    z.literal("amber"),
    z.literal("yellow"),
    z.literal("lime"),
    z.literal("green"),
    z.literal("emerald"),
    z.literal("teal"),
    z.literal("cyan"),
    z.literal("sky"),
    z.literal("blue"),
    z.literal("indigo"),
    z.literal("purple"),
    z.literal("fuchsia"),
    z.literal("pink"),
    z.literal("rose"),
    z.literal("slate"),
    z.literal("gray"),
    z.literal("stone"),
    z.literal("zinc"),
    z.literal("info"),
    z.literal("error"),
    z.literal("warning"),
    z.literal("alert"),
    z.literal("success"),
    z.literal("primary"),
    z.literal("secondary"),
])

export const colorsConfigSchema = z.record(configColors, colorValue).default({})
