import { ParsedAppConfig } from '@ulld/configschema/types'
import { ConfigColorKey, colorsConfigSchema } from '@ulld/configschema/zod/ui/colorsConfig'
import { getInternalConfig } from "@ulld/configschema/zod/getInternalConfig";
import {shadColorMap} from "@ulld/utilities/shadColorMap"
import fs from 'fs'
import type {z} from 'zod'
import path from 'path'

type UIConfig = NonNullable<ParsedAppConfig["UI"]>



class ColorItem {
    light: string = ""
    dark: string = ""
    constructor(props: NonNullable<NonNullable<ParsedAppConfig>["UI"]["colors"]>["red"] & { color: string }) {
        console.log("props in ColorItem class: ", props)
        this.light = props?.light?.main ? `
.underline-gen-${props.color} {
text-decoration-color: ${props.light.main};
}
.text-gen-${props.color} {
    color: ${props.light.main};
}
.border-gen-${props.color} {
    border-color: ${props.light.main};
}
.bg-gen-${props.color} {
    background-color: ${props.light.main};
    ${props.light.contrast ? `color: ${props.light.contrast};` : ''}
}
` : ""

        this.dark = props?.dark?.main ? `
.underline-gen-${props.color} {
text-decoration-color: ${props.dark.main};
}
.text-gen-${props.color} {
    color: ${props.dark.main};
}
.border-gen-${props.color} {
    border-color: ${props.dark.main};
}
.bg-gen-${props.color} {
    background-color: ${props.dark.main};
    ${props.dark.contrast ? `color: ${props.dark.contrast};` : ''}
}
` : ""

        // this.light = props.light.
    }
}



// WARNING: Come back and fix this. Without testing, it looks as if foreground colors will onlyl write if there is also a background color. Change this to a function call for each key in the the colors object, and loop through every embedded object rather than just checking the key from a loop through another sibling object.
export const syncConfig = async (_config?: ParsedAppConfig) => {
    console.log(`Syncing config.`)
    const config = _config || getInternalConfig()
    let shadColors: NonNullable<z.input<typeof colorsConfigSchema>> = {}
    Object.keys(shadColorMap).forEach((k) => {
        shadColors[k as ConfigColorKey] = {
            main: shadColorMap[k as keyof typeof shadColorMap] as string
        }
    })

    const baseDefaultColors: NonNullable<typeof _config>["UI"]["colors"] =
        colorsConfigSchema.parse({
            ...config.UI.colors,
            yellow: {
                light: { ...shadColors.yellow, main: "#eab308", contrast: "#000" },
                dark: { ...shadColors.yellow, main: "#facc15", contrast: "#000" }
            },
            blue: {
                light: { ...shadColors.blue, main: "#2563eb" },
                dark: { ...shadColors.blue, main: "#3b82f6" }
            },
            orange: {
                light: { ...shadColors.orange, main: "#f97316" },
                dark: { ...shadColors.orange, main: "#fb923c" }
            },
            green: {
                light: { ...shadColors.green, main: "#16a34a", contrast: "#000" },
                dark: { ...shadColors.green, main: "#22c55e", contrast: "#000" }
            },
            red: {
                light: { ...shadColors.red, main: "#dc2626", contrast: "#fff" },
                dark: { ...shadColors.red, main: "#dc2626", contrast: "#fff" }
            },
            error: {
                light: { ...shadColors.error, main: "#dc2626" },
                dark: { ...shadColors.error, main: "#dc2626" }
            },
            success: {
                light: { ...shadColors.success, main: "#16a34a" },
                dark: { ...shadColors.success, main: "#22c55e" }
            },
            info: {
                light: { ...shadColors.info, main: "#0284c7" },
                dark: { ...shadColors.info, main: "#0ea5e9" }
            },
        })
    console.log("configColors: ", JSON.stringify(baseDefaultColors, null, 4))
    const colorData = Object.keys(baseDefaultColors).map((k) => new ColorItem({ ...baseDefaultColors[k as keyof typeof baseDefaultColors] as any, color: k }))
    let s = colorData.map((c) => c.light).join("")
    let d = colorData.map((c) => c.dark).join("")
    await fs.promises.writeFile(path.join(process.cwd(), "styles", "configColors.scss"), `
${s}
.html.dark {
${d}
}
`)
}
