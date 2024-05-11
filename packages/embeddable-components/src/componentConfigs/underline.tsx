import {z} from 'zod'
import { withToolTipWrapperSchema } from './subConfigs/withToolTipWrapper'
import { propColorSchema, propColorSchemaTransform } from './subConfigs/colors'


const colorSchema = propColorSchema.describe("Color of the underline.").transform(propColorSchemaTransform)

export const componentConfig = z.object({
    thin: z.boolean().default(false),
    thick: z.boolean().default(false)
})
.merge(withToolTipWrapperSchema)
.merge(colorSchema)
.describe("Underline")
