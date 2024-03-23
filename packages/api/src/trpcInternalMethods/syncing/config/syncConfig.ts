import { ParsedAppConfig } from '@ulld/configschema/types'
import {  ColorGroup } from '@ulld/configschema/zod/ui/colorsConfig'
import { getInternalConfig } from "@ulld/configschema/zod/getInternalConfig";
import fs from 'fs'
import handlebars from "handlebars"
import path from 'path'


const cssTemplate = `
.underline-gen-{{KEY}} {
     text-decoration-color: {{MAIN}};
}
.text-gen-{{KEY}} {
    color: {{MAIN}};
}
.border-gen-{{KEY}} {
    border-color: {{MAIN}};
}
.bg-gen-{{KEY}} {
    background-color: {{MAIN}};
    WithContrast<color: {{CONTRAST}};>
}
`

type UIConfig = NonNullable<ParsedAppConfig["UI"]>


const getColorCss = (k: keyof UIConfig["colors"], color: NonNullable<ColorGroup>["dark"], template: HandlebarsTemplateDelegate<any>) => {
    return template({
        KEY: k,
        MAIN: color?.main,
        CONTRAST: color?.contrast
    })
}

export const syncConfig = async (_config?: ParsedAppConfig) => {
    const config = _config || getInternalConfig()
    const template = handlebars.compile(cssTemplate)
    let s = ``
    Object.keys(config).forEach((k) => {
        s += getColorCss(k as keyof UIConfig["colors"], config.UI?.colors?.[k as keyof UIConfig["colors"]]?.light, template)
    })
    s += `html.dark {
`
    Object.keys(config).forEach((k) => {
        s += getColorCss(k as keyof UIConfig["colors"], config.UI?.colors?.[k as keyof UIConfig["colors"]]?.dark, template)
    })
    s += `
}
    `

    await fs.promises.writeFile(path.join(process.cwd(), "styles", "configColors.scss"), s)
}
