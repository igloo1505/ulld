import { z } from "zod";
import { colorPropSchemaMap } from "./colorMap";
import tinycolor from "tinycolor2"



export const propColorSchema = z.object({
    background: z.boolean().default(false).describe("Current app background color."),
    foreground: z.boolean().default(false).describe("Current app text color."),
    card: z.boolean().default(false).describe("App card background color."),
    cardForeground: z.boolean().default(false).describe("App card text color."),
    popover: z.boolean().default(false).describe("App popover background color."),
    popoverForeground: z.boolean().default(false).describe("App popover text color."),
    primary: z.boolean().default(false).describe("Primary app color."),
    primaryForeground: z.boolean().default(false).describe("Color of text content when applied to content with the background set to the app's primary color."),
    secondary: z.boolean().default(false).describe("Secondary app color."),
    secondaryForeground: z.boolean().default(false).describe("Color of text content when applied to content with the background set to the app's secondary color."),
    muted: z.boolean().default(false).describe("App's 'muted' color."),
    mutedForeground: z.boolean().default(false).describe("Color of text content when applied to content with the background set to the app's muted color."),
    accent: z.boolean().default(false).describe("App's accent color."),
    accentForeground: z.boolean().default(false).describe("Color of text content applied to content with the background set to the app's accent color."),
    destructive: z.boolean().default(false).describe("App's destructive color. Commonly used to signify an error."),
    destructiveForeground: z.boolean().default(false).describe("Color of text content applied to content with the background set to the app's destructive color."),
    border: z.boolean().default(false).describe("Color of most borders within the app."),
    input: z.boolean().default(false).describe("Color of most text inputs within the app."),
    ring: z.boolean().default(false).describe("Color of the ring around inputs when they are focused."),
    brand: z.boolean().default(false).describe(`<span style={{fontWeight: 700}}>ULLD</span> blue.`),
    ulld: z.boolean().default(false).describe(`<span style={{fontWeight: 700}}>ULLD</span> blue.`),
    success: z.boolean().default(false).describe("Color commonly used to indicate a success of some kind."),
    info: z.boolean().default(false).describe("Color commonly used to signify that something contains valuable information, but is not necessarily critical."),
    error: z.boolean().default(false).describe("Similar to, and sometimes synonomous with the `destructive` color. Often used to indicate an error or something that needs to be fixed."),
    yellow: z.boolean().default(false),
    blue: z.boolean().default(false),
    orange: z.boolean().default(false),
    green: z.boolean().default(false),
    red: z.boolean().default(false),
    purple: z.boolean().default(false),
    pink: z.boolean().default(false),
    sky: z.boolean().default(false),
    /* red: z.boolean().default(false), */
})


export type PropColorInput = z.input<typeof propColorSchema>


type RT<T, U extends string> = Omit<T, U> & {colors: Partial<Record<U, boolean>>, color: string, contrastColor: string}

type J = keyof z.input<typeof propColorSchema>

export const propColorSchemaTransform = <T extends z.input<typeof propColorSchema>>(a: T, defaultColor: keyof typeof colorPropSchemaMap): RT<T, J> => {
    let colors: z.output<typeof propColorSchema> = {} as z.output<typeof propColorSchema>
    let data: RT<T, J> = {} as RT<T, J>
    let color: string = colorPropSchemaMap[defaultColor]
    for (const k in a){
        if(k in propColorSchema.shape){
            colors[k as keyof typeof colors] = a[k as keyof typeof a] as boolean
            if( a[k as keyof typeof a]){
                color = colorPropSchemaMap[k as keyof typeof colorPropSchemaMap]
            }
        } else {
            data[k as keyof typeof data] = a[k as keyof typeof a] as any
        }
    }


    return {
        ...data,
        contrastColor: `#${tinycolor.mostReadable(color, ["#fff", "#000"], {includeFallbackColors:true}).toHex()}`,
        /* luminance: tc.getLuminance(), */
        /* isDark: tc.isDark(), */
        /* isLight: tc.isLight(), */
        colors,
        color
    }
}


export type PropColorSchemaOutput = z.output<typeof propColorSchema>
export type PropColorSchemaInput = z.input<typeof propColorSchema>
