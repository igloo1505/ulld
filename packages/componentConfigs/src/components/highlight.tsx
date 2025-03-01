import { CSSProperties } from "react"
import {z} from 'zod'
import { withToolTipWrapperSchema } from '../subConfigs/withToolTipWrapper'
import { propColorSchema, propColorSchemaTransform } from '../subConfigs/colors'


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
.transform((a): {css: CSSProperties} & ReturnType<typeof propColorSchemaTransform> => {
    let data = propColorSchemaTransform<typeof a>(a, "yellow")
    let css: CSSProperties = {
        backgroundColor: data.color,
        color: data.contrastColor
    }
    return {
        ...data,
        css
    } 
})
