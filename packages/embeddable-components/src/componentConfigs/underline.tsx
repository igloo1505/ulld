import { CSSProperties } from "react"
import {z} from 'zod'
import { withToolTipWrapperSchema } from './subConfigs/withToolTipWrapper'
import { propColorSchema, propColorSchemaTransform } from './subConfigs/colors'


const colorSchema = propColorSchema.describe("Color of the underline.")

export const componentConfig = z.object({
    thin: z.boolean().default(false),
    thick: z.boolean().default(false)
})
.merge(withToolTipWrapperSchema)
.merge(colorSchema)
.describe("Underline").transform((a) => {
    let data = propColorSchemaTransform<typeof a>(a, "foreground")
    let css: CSSProperties = {
        textDecorationColor: data.color,
        textDecorationThickness: a.thin ? 1 : a.thick ? 4 : 2
    }
    return {
        ...data,
        css
    }
})
