import { CSSProperties } from "react"
import {z} from 'zod'
import { withToolTipWrapperSchema } from './subConfigs/withToolTipWrapper'
import { propColorSchema, propColorSchemaTransform } from './subConfigs/colors'


const colorSchema = propColorSchema.describe("Color of the underline.")

export const baseDomComponentSchema = z.object({
    className: z.string().optional(),
    children: z.any()
})

export const componentConfig = z.object({
    thin: z.boolean().default(false),
    thick: z.boolean().default(false),
})
.merge(withToolTipWrapperSchema)
.merge(baseDomComponentSchema)
.merge(colorSchema)
.describe("Underline")
/* .passthrough() */
.transform((a) => {
    let data = propColorSchemaTransform<typeof a>(a, "foreground")
    console.log("data: ", data)
    let css: CSSProperties = {
        textDecorationColor: data.color,
        textDecorationThickness: a.thin ? 1 : a.thick ? 4 : 2
    }
    return {
        ...data,
        css
    }
})
